const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const path = require('path');

const HTML_FILE = 'file://' + path.resolve(__dirname, '../../brand/animation/logo_animation.html');
const OUTPUT_FILE = path.resolve(__dirname, '../../brand/animation/logo_animation.mp4');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Set viewport to logo dimensions (square-ish)
    await page.setViewport({ width: 1024, height: 1024 });

    console.log(`Navigating to ${HTML_FILE}...`);
    await page.goto(HTML_FILE, { waitUntil: 'networkidle0' });

    // Setup recorder
    const recorder = new PuppeteerScreenRecorder(page, {
        fps: 60,
        ffmpeg_Path: null, // use default or system ffmpeg
        videoFrame: {
            width: 1024,
            height: 1024,
        },
        aspectRatio: '1:1',
    });

    console.log('Starting recording...');
    await recorder.start(OUTPUT_FILE);

    // Trigger animation
    // The HTML has a setTimeout of 500ms to start. 
    // We can also execute JS to force start if we want precise timing.
    // Let's just wait enough time.
    // Total animation duration estimated:
    // We have many paths. Iterate and sum or just wait fixed time.
    // Let's wait 10 seconds.
    await new Promise(r => setTimeout(r, 10000));

    console.log('Stopping recording...');
    await recorder.stop();

    await browser.close();
    console.log(`Saved video to ${OUTPUT_FILE}`);
})();
