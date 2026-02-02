const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--single-process'
        ]
    });
    const page = await browser.newPage();

    // Set viewport to match SVG viewBox width/height
    // SVG: width 800, height 300
    await page.setViewport({ width: 800, height: 300 });

    const filePath = path.resolve(__dirname, 'logo_animation.svg');
    // Use file:// protocol
    await page.goto(`file://${filePath}`);

    const recorder = new PuppeteerScreenRecorder(page);
    await recorder.start('logo_animation.mp4');

    console.log('Recording started...');
    // Wait for animation duration + buffer
    // Duration: 1s (logo) + 2.5s (reveal) + 1s (buffer)
    await new Promise(r => setTimeout(r, 6000));

    await recorder.stop();
    console.log('Recording finished: logo_animation.mp4');

    await browser.close();
})();
