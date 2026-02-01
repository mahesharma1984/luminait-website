#!/usr/bin/env node
/**
 * LuminAIT School Pages Build Script
 *
 * Generates school-specific landing pages from JSON data files.
 * Run with: node build-school-pages.js
 *
 * What it does:
 * - Reads JSON data from /data/schools/
 * - Generates individual school pages in /schools/[slug]/index.html
 * - Generates index page at /schools/index.html
 * - Includes LocalBusiness schema markup for local SEO
 *
 * See: docs/technical/LOCAL_SEO_STRATEGY.md for strategy documentation
 */

const fs = require('fs');
const path = require('path');

// Paths
const DATA_DIR = path.join(__dirname, 'data', 'schools');
const TEMPLATES_DIR = path.join(__dirname, 'src', 'templates');
const PARTIALS_DIR = path.join(__dirname, 'src', 'partials');
const OUTPUT_DIR = path.join(__dirname, 'schools');

/**
 * Load a partial file
 */
function loadPartial(name) {
  const filePath = path.join(PARTIALS_DIR, name);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8');
  }
  console.warn(`Warning: Partial not found: ${name}`);
  return '';
}

/**
 * Process partials in template content
 */
function processPartials(content) {
  return content.replace(/\{\{>([^}]+)\}\}/g, (match, partialName) => {
    return loadPartial(partialName.trim());
  });
}

// Load templates
let schoolTemplate, indexTemplate;

try {
  schoolTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, '_school-page-template.html'),
    'utf8'
  );
  indexTemplate = fs.readFileSync(
    path.join(TEMPLATES_DIR, 'schools-index.html'),
    'utf8'
  );

  // Process partials
  schoolTemplate = processPartials(schoolTemplate);
  indexTemplate = processPartials(indexTemplate);
} catch (err) {
  console.error('Error: Template files not found.');
  console.error('Required templates:');
  console.error('  - src/templates/_school-page-template.html');
  console.error('  - src/templates/schools-index.html');
  process.exit(1);
}

// Text slug to URL mapping (homepage texts are at root, others in /curriculum/)
const TEXT_URL_MAP = {
  'the-giver': '/the-giver/',
  'macbeth': '/macbeth/',
  'animal-farm': '/animal-farm/',
  'romeo-and-juliet': '/romeo-and-juliet/',
  'to-kill-a-mockingbird': '/to-kill-a-mockingbird/',
  'a-christmas-carol': '/a-christmas-carol/',
  'blueback': '/blueback/',
  'the-outsiders': '/the-outsiders/',
  // Curriculum texts
  'dracula': '/curriculum/dracula/',
  'jane-eyre': '/curriculum/jane-eyre/',
  'the-simple-gift': '/curriculum/the-simple-gift/',
  'convenience-store-woman': '/curriculum/convenience-store-woman/',
  'catching-teller-crow': '/curriculum/catching-teller-crow/',
  'the-curious-incident': '/curriculum/the-curious-incident/',
  'the-white-girl': '/curriculum/the-white-girl/',
  'his-name-was-walter': '/curriculum/his-name-was-walter/',
  'catherine-called-birdy': '/curriculum/catherine-called-birdy/',
  'my-life-as-an-alphabet': '/curriculum/my-life-as-an-alphabet/',
};

/**
 * Escape HTML special characters
 */
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Generate booklist HTML for a year level
 */
function generateYearLevelBooks(yearLevel, books) {
  if (!books || books.length === 0) return '';

  const booksHtml = books.map(book => {
    const url = TEXT_URL_MAP[book.slug];
    if (url) {
      return `              <a href="${url}" class="school-text-link">${escapeHtml(book.title)}</a>`;
    } else {
      return `              <span class="school-text-unavailable">${escapeHtml(book.title)}</span>`;
    }
  }).join('\n');

  return `          <div class="school-year-group">
            <h4>${escapeHtml(yearLevel)}</h4>
${booksHtml}
          </div>`;
}

/**
 * Generate full booklist HTML
 */
function generateBooklistHtml(booklist) {
  const yearLevels = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'VCE', 'HSC', 'IB'];
  const sections = [];

  for (const yearLevel of yearLevels) {
    const key = yearLevel.toLowerCase().replace(' ', '');
    if (booklist[key] && booklist[key].length > 0) {
      sections.push(generateYearLevelBooks(yearLevel, booklist[key]));
    }
  }

  return sections.join('\n');
}

/**
 * Generate LocalBusiness schema JSON-LD
 */
function generateSchemaMarkup(data) {
  const services = [];

  // Collect all texts as services
  for (const yearLevel of Object.values(data.booklist)) {
    for (const book of yearLevel) {
      services.push({
        '@type': 'Service',
        'name': `${book.title} Tutoring`,
        'description': `10-week English tutoring course for ${book.title}`
      });
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': `LuminAIT - English Tutoring for ${data.schoolName}`,
    'description': `Text-specific English tutoring aligned with ${data.schoolName}'s ${new Date().getFullYear()} curriculum`,
    'url': `https://luminait.app/schools/${data.slug}/`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Melbourne',
      'addressRegion': 'VIC',
      'addressCountry': 'AU'
    },
    'areaServed': {
      '@type': 'Place',
      'name': `${data.location.suburb}, Melbourne`
    },
    'makesOffer': services.slice(0, 5) // Limit to avoid overly long schema
  };

  return JSON.stringify(schema, null, 2);
}

/**
 * Generate a single school page
 */
function generateSchoolPage(data) {
  let html = schoolTemplate;

  // Basic replacements
  html = html.replace(/\{\{SCHOOL_NAME\}\}/g, escapeHtml(data.schoolName));
  html = html.replace(/\{\{SHORT_NAME\}\}/g, escapeHtml(data.shortName || data.schoolName));
  html = html.replace(/\{\{SUBURB\}\}/g, escapeHtml(data.location.suburb));
  html = html.replace(/\{\{SCHOOL_TYPE\}\}/g, escapeHtml(data.type || 'secondary'));
  html = html.replace(/\{\{VERIFIED_DATE\}\}/g, escapeHtml(data.verifiedDate || ''));
  html = html.replace(/\{\{SLUG\}\}/g, escapeHtml(data.slug));
  html = html.replace(/\{\{SCHOOL_SLUG\}\}/g, data.slug);

  // Meta description
  const textTitles = [];
  for (const books of Object.values(data.booklist)) {
    for (const book of books) {
      textTitles.push(book.title);
    }
  }
  const metaDesc = `Text-specific English tutoring for ${data.schoolName} students. Courses for ${textTitles.slice(0, 3).join(', ')}${textTitles.length > 3 ? ' and more' : ''}. Melbourne.`;
  html = html.replace(/\{\{META_DESCRIPTION\}\}/g, escapeHtml(metaDesc));

  // Generate dynamic content
  html = html.replace('{{BOOKLIST_HTML}}', generateBooklistHtml(data.booklist));
  html = html.replace('{{SCHEMA_MARKUP}}', generateSchemaMarkup(data));

  // Testimonial (optional)
  if (data.testimonial) {
    const testimonialHtml = `
        <div class="school-testimonial">
          <blockquote>"${escapeHtml(data.testimonial.quote)}"</blockquote>
          <cite>— ${escapeHtml(data.testimonial.parent)}, ${escapeHtml(data.testimonial.year)}</cite>
        </div>`;
    html = html.replace('{{TESTIMONIAL}}', testimonialHtml);
  } else {
    html = html.replace('{{TESTIMONIAL}}', '');
  }

  return html;
}

/**
 * Generate school card for index page
 */
function generateSchoolCard(data) {
  const textCount = Object.values(data.booklist).reduce((sum, books) => sum + books.length, 0);
  return `          <a href="/schools/${data.slug}/" class="school-card">
            <div class="school-card-header">
              <span class="school-card-name">${escapeHtml(data.schoolName)}</span>
              <span class="school-card-suburb">${escapeHtml(data.location.suburb)}</span>
            </div>
            <div class="school-card-meta">
              <span class="school-card-type">${escapeHtml(data.type)}</span>
              <span class="school-card-texts">${textCount} texts available</span>
            </div>
          </a>`;
}

/**
 * Generate index page
 */
function generateIndexPage(allSchools) {
  let html = indexTemplate;

  // Sort schools alphabetically
  const sortedSchools = allSchools.sort((a, b) => a.schoolName.localeCompare(b.schoolName));
  const cardsHtml = sortedSchools.map(generateSchoolCard).join('\n');

  html = html.replace('{{SCHOOL_CARDS}}', cardsHtml);
  html = html.replace('{{SCHOOL_COUNT}}', allSchools.length.toString());

  return html;
}

/**
 * Ensure directory exists
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Main build function
 */
function build() {
  console.log('Building school pages...\n');

  // Ensure output directory exists
  ensureDir(OUTPUT_DIR);

  // Check if data directory exists
  if (!fs.existsSync(DATA_DIR)) {
    console.log(`Creating data directory: ${DATA_DIR}`);
    ensureDir(DATA_DIR);
    console.log('\nNo school data files found. Create JSON files in /data/schools/');
    console.log('Example: /data/schools/mckinnon-sc.json\n');
    return;
  }

  // Read all JSON files from data directory
  const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));

  if (dataFiles.length === 0) {
    console.log('No school data files found in /data/schools/');
    console.log('Create JSON files to generate school pages.\n');
    return;
  }

  const allSchools = [];

  // Process each school
  for (const file of dataFiles) {
    const filePath = path.join(DATA_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    console.log(`Processing: ${data.schoolName} (${data.slug})`);

    // Generate school page
    const schoolHtml = generateSchoolPage(data);

    // Create output directory and write file
    const schoolDir = path.join(OUTPUT_DIR, data.slug);
    ensureDir(schoolDir);
    fs.writeFileSync(path.join(schoolDir, 'index.html'), schoolHtml);
    console.log(`  -> /schools/${data.slug}/index.html`);

    allSchools.push(data);
  }

  // Generate index page
  console.log('\nGenerating index page...');
  const indexHtml = generateIndexPage(allSchools);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);
  console.log('  -> /schools/index.html');

  console.log(`\nDone! Generated ${dataFiles.length} school pages + 1 index page.`);
}

// Run build
build();
