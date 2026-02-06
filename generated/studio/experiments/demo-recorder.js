const puppeteer = require('puppeteer');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const fs = require('fs');
const path = require('path');

// Set FFmpeg path explicitly
ffmpeg.setFfmpegPath(ffmpegPath);

const OUTPUT_DIR = path.join(__dirname, '../assets/clips');
const FRAMES_DIR = path.join(__dirname, 'temp_frames');

async function ensureDirs() {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    if (fs.existsSync(FRAMES_DIR)) fs.rmSync(FRAMES_DIR, { recursive: true, force: true });
    fs.mkdirSync(FRAMES_DIR);
}

async function recordScene(filename, outputName, durationMs = 10000) {
    console.log(`🎥 Starting recording for ${filename}...`);

    // Launch browser
    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: { width: 1200, height: 800, deviceScaleFactor: 2 },
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // often needed in some envs
    });

    const page = await browser.newPage();
    const fileUrl = `file://${path.resolve(__dirname, '../demos', filename)}`;

    console.log(`   Loading ${fileUrl}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Ensure transparent/clean background if possible
    await page.evaluate(() => {
        // SPEED CONTROL
        window.SPEED_MULTIPLIER = 2; // Half Speed

        // Inject CSS Variables for 2x slower animations
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --t-fast: 1.0s;
                --t-medium: 1.6s;
                --t-long: 3.0s;
            }
        `;
        document.head.appendChild(style);

        document.body.style.background = 'transparent';
        if (document.body.style.backgroundColor) {
            document.body.style.backgroundColor = 'transparent'; // unexpected but safe
        }
    });

    console.log("🔴 Capturing frames...");

    const fps = 30;
    const totalFrames = Math.floor((durationMs / 1000) * fps);

    for (let i = 0; i < totalFrames; i++) {
        const frameNum = i.toString().padStart(4, '0');
        await page.screenshot({
            path: path.join(FRAMES_DIR, `frame-${frameNum}.png`),
            omitBackground: false
        });

        // Manual delay for roughly correct timing
        // In a perfect world we'd pause CSS animation and advance it manually,
        // but for these simple CSS/JS loops, realtime capture is usually "good enough"
        await new Promise(r => setTimeout(r, 1000 / fps));
    }

    await browser.close();
    console.log("✅ Frames captured. Stitching with FFmpeg...");

    return new Promise((resolve, reject) => {
        const outFile = path.join(OUTPUT_DIR, outputName);

        ffmpeg()
            .addInput(path.join(FRAMES_DIR, 'frame-%04d.png'))
            .inputFPS(fps)
            .videoCodec('libx264')
            .outputOptions([
                '-pix_fmt yuv420p',
                '-preset slow',
                '-crf 22',
                '-movflags +faststart',
                '-vf scale=1200:-2' // ensure even dimensions
            ])
            .output(outFile)
            .on('end', () => {
                console.log(`✨ Video saved: ${outFile}`);
                resolve();
            })
            .on('error', (err) => {
                console.error('Error stitching:', err);
                reject(err);
            })
            .run();
    });
}

async function main() {
    await ensureDirs();

    // Config for each demo (Doubled durations for half speed)
    const demos = [
        { file: 'demo-annotation.html', out: 'demo-annotation.mp4', duration: 17000 },
        { file: 'demo-worksheet.html', out: 'demo-worksheet.mp4', duration: 17000 },
        { file: 'demo-analysis.html', out: 'demo-analysis.mp4', duration: 17000 }
    ];

    for (const demo of demos) {
        try {
            await recordScene(demo.file, demo.out, demo.duration);
            // Clean frames between runs
            fs.rmSync(FRAMES_DIR, { recursive: true, force: true });
            fs.mkdirSync(FRAMES_DIR);
        } catch (e) {
            console.error(`Failed to record ${demo.file}:`, e);
        }
    }
}

main().catch(console.error);
