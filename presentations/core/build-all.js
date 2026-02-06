const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * Build script to generate PDFs for all presentation templates
 * Runs from presentation-core and generates PDFs in each template folder
 */

const templates = [
  {
    name: 'Partnership Economics Overview',
    dir: path.join(__dirname, '..', 'partnership')
  },
  {
    name: 'Teaching Infrastructure Pitch',
    dir: path.join(__dirname, '..', 'infrastructure')
  },
  {
    name: 'How luminAIT Scales Teaching',
    dir: path.join(__dirname, '..', 'scaling')
  },
  {
    name: 'Co-Founder Pitch: Tutor Adoption',
    dir: path.join(__dirname, '..', 'co-founder')
  },
  {
    name: 'Appendix: Scaling Reality',
    dir: path.join(__dirname, '..', 'appendix')
  }
];

console.log('═══════════════════════════════════════════════════');
console.log('  luminAIT Presentation Build System');
console.log('═══════════════════════════════════════════════════\n');

let successCount = 0;
let failCount = 0;

templates.forEach((template, index) => {
  console.log(`[${index + 1}/${templates.length}] Building: ${template.name}`);
  console.log(`Directory: ${template.dir}`);

  try {
    // Check if directory exists
    if (!fs.existsSync(template.dir)) {
      console.log(`✗ Directory not found, skipping...\n`);
      failCount++;
      return;
    }

    // Change to template directory and run PDF generator
    process.chdir(template.dir);
    execSync('node ../core/generate_pdf.js', { stdio: 'inherit' });

    console.log(`✓ Build successful\n`);
    successCount++;
  } catch (error) {
    console.error(`✗ Build failed for ${template.name}`);
    console.error(error.message);
    console.log('');
    failCount++;
  }
});

console.log('═══════════════════════════════════════════════════');
console.log(`  Build Summary`);
console.log('═══════════════════════════════════════════════════');
console.log(`✓ Successful: ${successCount}`);
console.log(`✗ Failed: ${failCount}`);
console.log(`  Total: ${templates.length}`);
console.log('═══════════════════════════════════════════════════\n');

process.exit(failCount > 0 ? 1 : 0);
