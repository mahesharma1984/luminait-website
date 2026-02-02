const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
// const puppeteer = require('puppeteer'); // Load lazily
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
// const OpenAI = require('openai'); // Removed due to install issues
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
require('dotenv').config();

// CLI Configuration
const argv = yargs(hideBin(process.argv))
    .option('scene', { type: 'string', description: 'Path to HTML scene file', demandOption: true })
    .option('script', { type: 'string', description: 'Path to Markdown script file', demandOption: true })
    .option('output', { type: 'string', description: 'Output MP4 file path', default: 'output.mp4' })
    .option('dry-run', { type: 'boolean', description: 'Skip video rendering, just check timing', default: false })
    .option('mock-audio', { type: 'boolean', description: 'Use silent placeholders instead of OpenAI', default: false })
    .argv;

// Helper: Logging
const log = (msg) => console.log(`[VideoBuilder] ${msg}`);

// OpenAI Setup
const apiKey = process.env.OPENAI_API_KEY || "dummy-key";
const AUDIO_CACHE_DIR = path.resolve(__dirname, 'cache_audio');
if (!fs.existsSync(AUDIO_CACHE_DIR)) fs.mkdirSync(AUDIO_CACHE_DIR);

/**
 * PARSER: Extracts steps from the markdown script.
 * Expected format:
 * ### Step 1 (or any header)
 * **Audio**: "The text to speak."
 */
function parseScript(scriptContent) {
    const steps = [];
    const stepRegex = /###\s+(.+?)\n([\s\S]+?)(?=###|$)/g;
    let match;

    while ((match = stepRegex.exec(scriptContent)) !== null) {
        const title = match[1].trim();
        const body = match[2];

        // Extract Audio Text
        const audioMatch = /\*\*Audio\*\*:\s*([\s\S]+?)(?=\*\*|$)/.exec(body);

        if (audioMatch) {
            let text = audioMatch[1].trim().replace(/^"|"$/g, ''); // Remove quotes
            steps.push({ title, text });
        }
    }
    return steps;
}

/**
 * MOCK AUDIO: Generates a silent MP3 for testing.
 */
async function getMockAudio(text) {
    // Generate a duration based on text length (approx 15 chars per sec + buffer)
    const durationSec = Math.max(2, text.length / 15);
    const hash = crypto.createHash('md5').update("MOCK" + text).digest('hex');
    const filePath = path.join(AUDIO_CACHE_DIR, `MOCK_${hash}.mp3`);

    if (!fs.existsSync(filePath)) {
        log(`Generating Mock Audio (${durationSec.toFixed(1)}s) for: "${text.substring(0, 20)}..."`);
        await new Promise((resolve, reject) => {
            ffmpeg()
                .input('anullsrc')
                .inputFormat('lavfi')
                .duration(durationSec)
                .audioCodec('libmp3lame')
                .save(filePath)
                .on('end', resolve)
                .on('error', reject);
        });
    } else {
        log(`Using Cached Mock Audio: "${text.substring(0, 20)}..."`);
    }

    return {
        path: filePath,
        duration: Math.ceil(durationSec * 1000)
    };
}

/**
 * AUDIO: Generates or retrieves cached MP3.
 * Returns path and duration in ms.
 */
async function getAudio(text, voice = "alloy") {
    if (argv.mockAudio) return getMockAudio(text);

    // specific cleanup for filenames

    const hash = crypto.createHash('md5').update(text + voice).digest('hex');
    const filePath = path.join(AUDIO_CACHE_DIR, `${hash}.mp3`);

    if (!fs.existsSync(filePath)) {
        log(`Generating Audio for: "${text.substring(0, 20)}..."`);

        // Use Fetch instead of SDK
        const response = await fetch("https://api.openai.com/v1/audio/speech", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "tts-1",
                voice: voice,
                input: text
            })
        });

        if (!response.ok) {
            throw new Error(`OpenAI API Error: ${response.status} ${response.statusText} - ${await response.text()}`);
        }

        const buffer = Buffer.from(await response.arrayBuffer());
        fs.writeFileSync(filePath, buffer);
    } else {
        log(`Using Cached Audio: "${text.substring(0, 20)}..."`);
    }

    // Get Duration via FFmpeg
    const durationSec = await new Promise((resolve, reject) => {
        ffmpeg.ffprobe(filePath, (err, metadata) => {
            if (err) reject(err);
            else resolve(metadata.format.duration);
        });
    });

    return {
        path: filePath,
        duration: Math.ceil(durationSec * 1000)
    };
}

async function main() {
    log('Starting...');

    // 1. Parse Script & Generate Audio
    const scriptPath = path.resolve(argv.script);
    const scenePath = path.resolve(argv.scene);

    if (!fs.existsSync(scriptPath)) throw new Error(`Script not found: ${scriptPath}`);
    if (!fs.existsSync(scenePath)) throw new Error(`Scene not found: ${scenePath}`);

    log(`Script: ${path.basename(scriptPath)}`);
    log(`Scene: ${path.basename(scenePath)}`);

    const scriptContent = fs.readFileSync(scriptPath, 'utf-8');
    const rawSteps = parseScript(scriptContent);
    const timeline = [];

    log(`Found ${rawSteps.length} segments.`);

    // Generate Audio for each step
    for (const step of rawSteps) {
        const audio = await getAudio(step.text);
        timeline.push({
            ...step,
            audioPath: audio.path,
            duration: audio.duration
        });
        log(`Step [${step.title}] Duration: ${audio.duration}ms`);
    }

    // 2. Launch Puppeteer or Fallback
    log('Attempting to launch browser...');
    try {
        const puppeteer = require('puppeteer'); // Load here to catch errors
        const browser = await puppeteer.launch({
            headless: "new",
            defaultViewport: { width: 960, height: 540 }
        });
        const page = await browser.newPage();
        await page.goto(`file://${scenePath}`);

        // Wait for page load
        await new Promise(r => setTimeout(r, 1000));

        // 3. Inject Durations & Start
        await page.evaluate((injectedTimeline) => {
            if (!window.sequence) return console.error("No sequence found in window!");
            injectedTimeline.forEach((item, index) => {
                if (window.sequence[index]) {
                    window.sequence[index].duration = item.duration;
                }
            });
            window.startSequence();
        }, timeline);

        // 4. Record Frame-by-Frame
        const SAVED_FRAMES_DIR = path.resolve(__dirname, 'saved_frames');
        const TEMP_FRAMES_DIR = path.resolve(__dirname, 'temp_frames');
        let FRAMES_DIR = TEMP_FRAMES_DIR;
        let SKIP_RECORDING = false;

        if (fs.existsSync(SAVED_FRAMES_DIR)) {
            log('Found existing frames in studio/saved_frames. Skipping recording...');
            FRAMES_DIR = SAVED_FRAMES_DIR;
            SKIP_RECORDING = true;
        }

        const FPS = 24;

        if (!SKIP_RECORDING && !argv.dryRun) {
            log('Recording Frames...');
            if (fs.existsSync(FRAMES_DIR)) fs.rmSync(FRAMES_DIR, { recursive: true });
            fs.mkdirSync(FRAMES_DIR);

            const totalDuration = timeline.reduce((acc, item) => acc + item.duration, 0) + 2000; // +2s buffer
            const totalFrames = Math.ceil((totalDuration / 1000) * FPS);

            log(`Total Duration: ${totalDuration}ms | Frames: ${totalFrames} @ ${FPS}fps`);

            for (let i = 0; i < totalFrames; i++) {
                await page.screenshot({ path: path.join(FRAMES_DIR, `frame-${String(i).padStart(5, '0')}.png`) });
                await new Promise(r => setTimeout(r, 1000 / FPS));
                if (i % 30 === 0) process.stdout.write(`\rFrame ${i}/${totalFrames}`);
            }
            process.stdout.write('\n');
        }

        if (!argv.dryRun) {
            // 5. Stitch Video
            log('Stitching Video with FFmpeg...');
            const tempVideo = 'temp_visual.mp4';
            await new Promise((resolve, reject) => {
                ffmpeg()
                    .input(path.join(FRAMES_DIR, 'frame-%05d.png'))
                    .inputFPS(FPS)
                    .output(tempVideo)
                    .videoCodec('libx264')
                    .outputOptions('-pix_fmt yuv420p')
                    .on('end', resolve)
                    .on('error', reject)
                    .run();
            });

            // 6. Merge Audio
            log('Merging Audio Tracks...');
            const audioListPath = path.join(AUDIO_CACHE_DIR, 'list.txt');
            const audioListContent = timeline.map(t => `file '${t.audioPath}'`).join('\n');
            fs.writeFileSync(audioListPath, audioListContent);

            await new Promise((resolve, reject) => {
                ffmpeg()
                    .input(tempVideo)
                    .input(audioListPath)
                    .inputOptions(['-f concat', '-safe 0'])
                    .outputOptions(['-c:v copy', '-c:a aac', '-shortest'])
                    .save(argv.output)
                    .on('end', resolve)
                    .on('error', reject);
            });

            log(`Success! Video saved to: ${argv.output}`);
        } else {
            log('Dry Run: Skipping recording.');
        }

        await browser.close();

    } catch (err) {
        log(`WARNING: Browser automation failed or Puppeteer not installed (${err.message}).`);
        log('Falling back to HTML Preview generation.');

        // Fallback: Read HTML, Inject JSON, Write new HTML
        const htmlContent = fs.readFileSync(scenePath, 'utf-8');

        // We look for 'const sequence = [' and inject our overrides right after
        // A naive injection approach:
        const injectionScript = `
        <script>
            window.addEventListener('DOMContentLoaded', () => {
                const timeline = ${JSON.stringify(timeline)};
                if(window.sequence) {
                   timeline.forEach((item, index) => {
                       if (window.sequence[index]) window.sequence[index].duration = item.duration;
                   });
                   console.log("Injecting external timeline...");
                }
            });
        </script>
        `;

        const newHtml = htmlContent.replace('</body>', `${injectionScript}</body>`);
        const previewPath = scenePath.replace('.html', '-PREVIEW.html');
        fs.writeFileSync(previewPath, newHtml);

        log(`See Preview File: ${previewPath}`);
        log(`You can open this file in your browser to see the synced animation.`);
    }

    log('Done.');
}


main().catch(err => {
    console.error(err);
    process.exit(1);
});
