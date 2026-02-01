#!/usr/bin/env node
/**
 * LuminAIT Parent Guide Build Script
 *
 * Generates parent curriculum guide pages from JSON data files.
 * Run with: node build-parent-guides.js
 *
 * What it does:
 * - Reads JSON data from /data/parent-guides/
 * - Generates individual guide pages in /curriculum/[slug]/index.html
 * - Generates index page at /curriculum/index.html
 */

const fs = require('fs');
const path = require('path');

// Paths
const DATA_DIR = path.join(__dirname, 'data', 'parent-guides');
const TEMPLATES_DIR = path.join(__dirname, 'src', 'templates');
const OUTPUT_DIR = path.join(__dirname, 'curriculum');

// Load templates
const guideTemplate = fs.readFileSync(
  path.join(TEMPLATES_DIR, '_parent-guide-template.html'),
  'utf8'
);
const indexTemplate = fs.readFileSync(
  path.join(TEMPLATES_DIR, 'curriculum-index.html'),
  'utf8'
);

/**
 * Generate week card HTML
 */
function generateWeekCard(week, isExtended = false) {
  const extendedClass = isExtended ? ' guide-extended-week' : '';
  const topicsHtml = week.topics
    .map(topic => `          <li>${escapeHtml(topic)}</li>`)
    .join('\n');

  let techniqueBox = '';
  if (week.technique) {
    techniqueBox = `
        <div class="guide-technique-box">
          <strong>${escapeHtml(week.technique.name)}</strong>
          <p>${escapeHtml(week.technique.description)}</p>
        </div>`;
  }

  return `      <!-- Week ${week.week} -->
      <div class="guide-week-card phase-${week.phase}${extendedClass}">
        <div class="guide-week-header">
          <div class="guide-week-number">${week.week}</div>
          <div class="guide-week-info">
            <div class="guide-week-phase">${escapeHtml(week.phaseName)}</div>
            <h3 class="guide-week-title">${escapeHtml(week.title)}</h3>
          </div>
        </div>
        <p class="guide-week-description">${escapeHtml(week.description)}</p>
        <ul class="guide-week-topics">
${topicsHtml}
        </ul>${techniqueBox}
      </div>`;
}

/**
 * Generate all weeks content
 */
function generateWeeksContent(weeks) {
  return weeks
    .map(week => generateWeekCard(week, week.week > 5))
    .join('\n\n');
}

/**
 * Generate outcomes list HTML
 */
function generateOutcomesList(outcomes) {
  return outcomes
    .map(outcome => `        <li>${escapeHtml(outcome)}</li>`)
    .join('\n');
}

/**
 * Generate a single guide page
 */
function generateGuidePage(data) {
  let html = guideTemplate;

  // Replace placeholders
  html = html.replace(/\{\{TEXT_TITLE\}\}/g, escapeHtml(data.title));
  html = html.replace(/\{\{AUTHOR\}\}/g, escapeHtml(data.author));
  html = html.replace(/\{\{YEAR_LEVEL\}\}/g, escapeHtml(data.yearLevel));
  html = html.replace(/\{\{PATTERN_NAME\}\}/g, escapeHtml(data.pattern));
  html = html.replace(/\{\{META_DESCRIPTION\}\}/g, escapeHtml(data.metaDescription));
  html = html.replace(/\{\{TEXT_SLUG\}\}/g, data.slug);
  html = html.replace(/\{\{CANONICAL_PATH\}\}/g, `/curriculum/${data.slug}/`);

  // Generate dynamic content
  html = html.replace('{{WEEKS_CONTENT}}', generateWeeksContent(data.weeks));
  html = html.replace('{{OUTCOMES_LIST}}', generateOutcomesList(data.outcomes));

  return html;
}

/**
 * Generate text card for index page
 */
function generateTextCard(data) {
  return `          <a href="/curriculum/${data.slug}/" class="text-card">
            <span class="text-title">${escapeHtml(data.title)}</span>
            <span class="text-author">${escapeHtml(data.author)}</span>
            <span class="text-badge">${escapeHtml(data.yearLevel)}</span>
          </a>`;
}

/**
 * Generate index page
 */
function generateIndexPage(allGuides) {
  let html = indexTemplate;
  const cardsHtml = allGuides
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(generateTextCard)
    .join('\n');

  html = html.replace('{{TEXT_CARDS}}', cardsHtml);
  return html;
}

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
  console.log('Building parent guide pages...\n');

  // Ensure output directory exists
  ensureDir(OUTPUT_DIR);

  // Check if data directory exists
  if (!fs.existsSync(DATA_DIR)) {
    console.log(`Creating data directory: ${DATA_DIR}`);
    ensureDir(DATA_DIR);
    console.log('\nNo guide data files found. Create JSON files in /data/parent-guides/');
    console.log('Example: /data/parent-guides/jane-eyre.json\n');
    return;
  }

  // Read all JSON files from data directory
  const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));

  if (dataFiles.length === 0) {
    console.log('No guide data files found in /data/parent-guides/');
    console.log('Create JSON files to generate guide pages.\n');
    return;
  }

  const allGuides = [];

  // Process each guide
  for (const file of dataFiles) {
    const filePath = path.join(DATA_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    console.log(`Processing: ${data.title} (${data.slug})`);

    // Generate guide page
    const guideHtml = generateGuidePage(data);

    // Create output directory and write file
    const guideDir = path.join(OUTPUT_DIR, data.slug);
    ensureDir(guideDir);
    fs.writeFileSync(path.join(guideDir, 'index.html'), guideHtml);
    console.log(`  -> /curriculum/${data.slug}/index.html`);

    allGuides.push(data);
  }

  // Generate index page
  console.log('\nGenerating index page...');
  const indexHtml = generateIndexPage(allGuides);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);
  console.log('  -> /curriculum/index.html');

  console.log(`\nDone! Generated ${dataFiles.length} guide pages + 1 index page.`);
}

// Run build
build();
