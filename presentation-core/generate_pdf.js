const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

/**
 * Shared PDF generator for luminAIT presentations
 * Reads config.json from the template directory to customize output
 */

(async () => {
  try {
    // Determine which template directory we're running from
    const templateDir = process.cwd();
    const configPath = path.join(templateDir, 'config.json');

    // Load config if it exists, otherwise use defaults
    let config = {
      htmlFile: 'index.html',
      pdfOutput: 'presentation.pdf',
      templateName: 'luminAIT Presentation'
    };

    if (fs.existsSync(configPath)) {
      const configData = fs.readFileSync(configPath, 'utf8');
      config = { ...config, ...JSON.parse(configData) };
      console.log(`✓ Loaded config from ${configPath}`);
    } else {
      console.log('ℹ No config.json found, using defaults');
    }

    console.log(`\nGenerating PDF for: ${config.templateName}`);
    console.log(`HTML source: ${config.htmlFile}`);
    console.log(`PDF output: ${config.pdfOutput}\n`);

    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    const filePath = path.resolve(templateDir, config.htmlFile);
    const fileUrl = `file://${filePath}`;

    console.log(`Loading ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Inject print styles
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
    const pdfPath = path.join(templateDir, config.pdfOutput);
    await page.pdf({
      path: pdfPath,
      printBackground: true,
      width: '1280px',
      height: '720px',
      landscape: false
    });

    console.log(`✓ PDF generated successfully: ${pdfPath}`);
    await browser.close();
  } catch (error) {
    console.error('✗ Error generating PDF:', error);
    process.exit(1);
  }
})();
