#!/usr/bin/env node
/**
 * LuminAIT Website Build Script
 *
 * This script generates HTML files from templates using data from site-config.json.
 * Run with: node build.js
 *
 * What it does:
 * - Generates navigation links from page config
 * - Generates footer links from page config
 * - Generates homepage cards from page config
 * - Replaces placeholders in templates with config values
 */

const fs = require('fs');
const path = require('path');

// Paths
const CONFIG_PATH = path.join(__dirname, 'site-config.json');
const TEMPLATES_DIR = path.join(__dirname, 'src', 'templates');
const PARTIALS_DIR = path.join(__dirname, 'src', 'partials');
const OUTPUT_DIR = __dirname;

// Load config
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

/**
 * Generate navigation links HTML
 */
function generateNavLinks(currentPageId) {
  return config.pages
    .filter(page => page.showInNav !== false)
    .map(page => {
      const isActive = page.id === currentPageId ? ' active' : '';
      return `        <a href="${page.file}" class="nav-link${isActive}">
          <span data-lang-content="en">${page.navTitle.en}</span>
          <span data-lang-content="zh">${page.navTitle.zh}</span>
        </a>`;
    }).join('\n');
}

/**
 * Generate footer links HTML
 */
function generateFooterLinks() {
  return config.pages
    .filter(page => page.showInNav !== false)
    .map(page => {
      return `      <a href="${page.file}">
        <span data-lang-content="en">${page.navTitle.en}</span>
        <span data-lang-content="zh">${page.navTitle.zh}</span>
      </a>`;
    }).join('\n');
}

/**
 * Generate homepage map cards HTML
 */
function generateMapCards() {
  const cards = config.pages
    .filter(page => page.id !== 'home' && page.cardTitle)
    .map(page => {
      if (page.featured) {
        return generateFeaturedCard(page);
      }
      return generateRegularCard(page);
    });
  return cards.join('\n\n');
}

/**
 * Generate featured card (Course)
 */
function generateFeaturedCard(page) {
  const highlights = page.highlights.map(h =>
    `                <li data-lang-content="en">${h.en}</li>
                <li data-lang-content="zh">${h.zh}</li>`
  ).join('\n');

  return `        <!-- Featured Card: ${page.cardTitle.en} -->
        <a href="${page.file}" class="map-card featured">
          <div class="featured-content">
            <div>
              <span class="map-card-icon">${page.icon}</span>
              <h3 class="map-card-title">
                <span data-lang-content="en">${page.cardTitle.en}</span>
                <span data-lang-content="zh">${page.cardTitle.zh}</span>
              </h3>
              <p class="map-card-desc">
                <span data-lang-content="en">${page.description.en}</span>
                <span data-lang-content="zh">${page.description.zh}</span>
              </p>
              <ul class="map-card-highlights">
${highlights}
              </ul>
              <span class="map-card-link">
                <span data-lang-content="en">${page.linkText.en}</span>
                <span data-lang-content="zh">${page.linkText.zh}</span>
              </span>
            </div>
            <div class="featured-stats">
              <div class="featured-stat">
                <div class="featured-stat-value">${config.course.price}</div>
                <div class="featured-stat-label">
                  <span data-lang-content="en">for ${config.course.duration}</span>
                  <span data-lang-content="zh">${config.course.duration.replace(' weeks', '周课程')}</span>
                </div>
              </div>
              <div class="featured-stat">
                <div class="featured-stat-value">${config.course.hoursPerLesson}h</div>
                <div class="featured-stat-label">
                  <span data-lang-content="en">per lesson</span>
                  <span data-lang-content="zh">每课时</span>
                </div>
              </div>
              <div class="featured-stat">
                <div class="featured-stat-value">${config.course.pricePerHour}</div>
                <div class="featured-stat-label">
                  <span data-lang-content="en">per hour</span>
                  <span data-lang-content="zh">每小时</span>
                </div>
              </div>
            </div>
          </div>
        </a>`;
}

/**
 * Generate regular card
 */
function generateRegularCard(page) {
  const highlights = page.highlights.map(h =>
    `            <li data-lang-content="en">${h.en}</li>
            <li data-lang-content="zh">${h.zh}</li>`
  ).join('\n');

  return `        <!-- ${page.cardTitle.en} Card -->
        <a href="${page.file}" class="map-card">
          <span class="map-card-icon">${page.icon}</span>
          <h3 class="map-card-title">
            <span data-lang-content="en">${page.cardTitle.en}</span>
            <span data-lang-content="zh">${page.cardTitle.zh}</span>
          </h3>
          <p class="map-card-desc">
            <span data-lang-content="en">${page.description.en}</span>
            <span data-lang-content="zh">${page.description.zh}</span>
          </p>
          <ul class="map-card-highlights">
${highlights}
          </ul>
          <span class="map-card-link">
            <span data-lang-content="en">${page.linkText.en}</span>
            <span data-lang-content="zh">${page.linkText.zh}</span>
          </span>
        </a>`;
}

/**
 * Generate quick stats HTML for homepage
 */
function generateQuickStats() {
  return `        <div class="quick-stat">
          <div class="quick-stat-value">${config.results.improvementRate}</div>
          <div class="quick-stat-label">
            <span data-lang-content="en">students improved</span>
            <span data-lang-content="zh">学生取得进步</span>
          </div>
        </div>
        <div class="quick-stat">
          <div class="quick-stat-value">${config.results.termImprovement}</div>
          <div class="quick-stat-label">
            <span data-lang-content="en">term improvement</span>
            <span data-lang-content="zh">学期内提升</span>
          </div>
        </div>
        <div class="quick-stat">
          <div class="quick-stat-value">${config.results.feedbackImprovement}</div>
          <div class="quick-stat-label">
            <span data-lang-content="en">with feedback</span>
            <span data-lang-content="zh">运用反馈后</span>
          </div>
        </div>`;
}

/**
 * Replace all placeholders in content
 */
function replacePlaceholders(content, pageId) {
  const replacements = {
    '{{NAV_LINKS}}': generateNavLinks(pageId),
    '{{FOOTER_LINKS}}': generateFooterLinks(),
    '{{MAP_CARDS}}': generateMapCards(),
    '{{QUICK_STATS}}': generateQuickStats(),
    '{{ENROLL_LINK}}': config.site.enrollLink,
    '{{SITE_NAME}}': config.site.name,
    '{{SITE_TAGLINE_EN}}': config.site.tagline.en,
    '{{SITE_TAGLINE_ZH}}': config.site.tagline.zh,
    '{{SITE_DESCRIPTION}}': config.site.description,
    '{{SITE_SUBTITLE_EN}}': config.site.subtitle.en,
    '{{SITE_SUBTITLE_ZH}}': config.site.subtitle.zh,
    '{{SITE_TEXTS_EN}}': config.site.texts.en,
    '{{SITE_TEXTS_ZH}}': config.site.texts.zh,
    '{{CONTACT_EMAIL}}': config.site.contact.email,
    '{{CONTACT_PHONE}}': config.site.contact.phone,
    '{{CONTACT_PHONE_LINK}}': config.site.contact.phone.replace(/\s/g, ''),
    '{{CONTACT_WECHAT}}': config.site.contact.wechat,
    '{{COURSE_PRICE}}': config.course.price,
    '{{COURSE_DURATION}}': config.course.duration,
    '{{COURSE_HOURS_PER_LESSON}}': config.course.hoursPerLesson,
    '{{COURSE_PRICE_PER_HOUR}}': config.course.pricePerHour,
    '{{COURSE_PRICE_PER_WEEK}}': config.course.pricePerWeek,
    '{{COURSE_FORMAT_EN}}': config.course.format.en,
    '{{COURSE_FORMAT_ZH}}': config.course.format.zh,
    '{{COURSE_NEXT_COHORT_EN}}': config.course.nextCohort.en,
    '{{COURSE_NEXT_COHORT_ZH}}': config.course.nextCohort.zh,
    '{{RESULTS_IMPROVEMENT_RATE}}': config.results.improvementRate,
    '{{RESULTS_TERM_IMPROVEMENT}}': config.results.termImprovement,
    '{{RESULTS_FEEDBACK_IMPROVEMENT}}': config.results.feedbackImprovement,
  };

  let result = content;
  for (const [placeholder, value] of Object.entries(replacements)) {
    result = result.split(placeholder).join(value);
  }
  return result;
}

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
 * Process a template file
 */
function processTemplate(page) {
  const templatePath = path.join(TEMPLATES_DIR, page.template);

  if (!fs.existsSync(templatePath)) {
    console.warn(`Warning: Template not found: ${page.template}`);
    return;
  }

  let content = fs.readFileSync(templatePath, 'utf8');

  // Replace partial includes: {{>partial-name.html}}
  content = content.replace(/\{\{>([^}]+)\}\}/g, (match, partialName) => {
    return loadPartial(partialName.trim());
  });

  // Replace all placeholders
  content = replacePlaceholders(content, page.id);

  // Write output
  const outputPath = path.join(OUTPUT_DIR, page.file);
  fs.writeFileSync(outputPath, content);
  console.log(`✓ Generated: ${page.file}`);
}

/**
 * Main build function
 */
function build() {
  console.log('Building LuminAIT website...\n');

  // Check if templates directory exists
  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.error('Error: Templates directory not found. Run this script after creating templates.');
    console.log('\nExpected directory structure:');
    console.log('  src/templates/   - Page templates');
    console.log('  src/partials/    - Shared components (nav, footer)');
    console.log('  site-config.json - Site configuration');
    process.exit(1);
  }

  // Process each page
  for (const page of config.pages) {
    processTemplate(page);
  }

  console.log('\nBuild complete!');
}

// Run build
build();
