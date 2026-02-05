const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    const filePath = path.resolve(__dirname, 'presentation.html');
    const fileUrl = `file://${filePath}`;

    console.log(`Loading ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Add styles to ensure print layout is respected immediately
    await page.addStyleTag({
      content: `
      @media print {
        @page { size: 1280px 720px; margin: 0; }
        body { margin: 0; }
        .slide { break-after: always; page-break-after: always; }
      }
    `
    });

    console.log('Generating PDF...');
    await page.pdf({
      path: 'presentation_v1.8.pdf',
      printBackground: true,
      width: '1280px',
      height: '720px',
      landscape: false // Explicitly setting dimensions matches landscape aspect ratio
    });

    console.log('PDF generated: presentation.pdf');
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
