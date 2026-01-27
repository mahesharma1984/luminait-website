#!/usr/bin/env node
/**
 * LuminAIT Homepage Parent Guide Build Script
 *
 * Generates parent curriculum guide pages for homepage books.
 * Run with: node build-homepage-guides.js
 *
 * What it does:
 * - Reads JSON data from /data/parent-guides/ (only homepage books)
 * - Generates individual guide pages in /[slug]/index.html (root level)
 * - Does NOT generate an index page (homepage already has text grid)
 */

const fs = require('fs');
const path = require('path');

// Homepage books (matched to homepage text grid)
const HOMEPAGE_BOOKS = [
  'the-giver',
  'romeo-and-juliet',
  'to-kill-a-mockingbird',
  'macbeth',
  'animal-farm',
  'a-christmas-carol',
  'blueback',
  'the-outsiders'
];

// Paths
const DATA_DIR = path.join(__dirname, 'data', 'parent-guides');
const TEMPLATES_DIR = path.join(__dirname, 'src', 'templates');
const OUTPUT_DIR = __dirname; // Root directory

// Load template
const guideTemplate = fs.readFileSync(
  path.join(TEMPLATES_DIR, '_parent-guide-template.html'),
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

  // Generate dynamic content
  html = html.replace('{{WEEKS_CONTENT}}', generateWeeksContent(data.weeks));
  html = html.replace('{{OUTCOMES_LIST}}', generateOutcomesList(data.outcomes));

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
  console.log('Building homepage parent guide pages...\n');

  // Check if data directory exists
  if (!fs.existsSync(DATA_DIR)) {
    console.log(`Error: Data directory not found: ${DATA_DIR}`);
    return;
  }

  let processedCount = 0;

  // Process only homepage books
  for (const slug of HOMEPAGE_BOOKS) {
    const filePath = path.join(DATA_DIR, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠ Skipping ${slug}: JSON file not found`);
      continue;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log(`✓ Processing: ${data.title} (${data.slug})`);

    // Generate guide page
    const guideHtml = generateGuidePage(data);

    // Create output directory and write file
    const guideDir = path.join(OUTPUT_DIR, data.slug);
    ensureDir(guideDir);
    fs.writeFileSync(path.join(guideDir, 'index.html'), guideHtml);
    console.log(`  -> /${data.slug}/index.html`);

    processedCount++;
  }

  console.log(`\n✓ Done! Generated ${processedCount} homepage guide pages.`);
  console.log('\nHomepage links are now functional with design-system compliant pages.');
}

// Run build
build();
