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
 * Generate SEO meta tags HTML for a page
 */
function generateSeoMetaTags(page) {
  const siteUrl = config.site.url || 'https://luminait.app';
  const pageTitle = page.pageTitle?.en || `${page.title.en} | ${config.site.name}`;
  const metaDesc = page.metaDescription?.en || config.site.description.en;
  const keywords = config.site.keywords?.en || '';
  const keywordsZh = config.site.keywords?.zh || '';
  const socialImage = config.site.socialImage || 'social-preview.png';

  return `
  <!-- SEO Meta Tags -->
  <link rel="canonical" href="${siteUrl}/${page.file}">
  <link rel="alternate" hreflang="en" href="${siteUrl}/${page.file}">
  <link rel="alternate" hreflang="zh" href="${siteUrl}/${page.file}?lang=zh">
  <link rel="alternate" hreflang="x-default" href="${siteUrl}/${page.file}">
  <meta name="keywords" content="${keywords}, ${keywordsZh}">

  <!-- Open Graph -->
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${metaDesc}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${siteUrl}/${page.file}">
  <meta property="og:image" content="${siteUrl}/${socialImage}">
  <meta property="og:site_name" content="${config.site.name}">
  <meta property="og:locale" content="en_AU">
  <meta property="og:locale:alternate" content="zh_CN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${pageTitle}">
  <meta name="twitter:description" content="${metaDesc}">
  <meta name="twitter:image" content="${siteUrl}/${socialImage}">`;
}

/**
 * Generate EducationalOrganization schema for homepage
 */
function generateOrgSchema() {
  const siteUrl = config.site.url || 'https://luminait.app';
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": config.site.name,
    "description": config.site.description.en,
    "url": siteUrl,
    "email": config.site.contact.email,
    "telephone": config.site.contact.phone,
    "areaServed": {
      "@type": "City",
      "name": "Melbourne",
      "containedInPlace": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "English Tutoring Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "5-Week Foundation Course",
          "description": "Analytical writing fundamentals for secondary students",
          "provider": {
            "@type": "Organization",
            "name": config.site.name
          }
        },
        {
          "@type": "Course",
          "name": "10-Week Complete Course",
          "description": "Comprehensive analytical writing mastery",
          "provider": {
            "@type": "Organization",
            "name": config.site.name
          },
          "offers": {
            "@type": "Offer",
            "price": config.course.price.replace('$', ''),
            "priceCurrency": "AUD"
          }
        }
      ]
    }
  };
  return `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
}

/**
 * Replace all placeholders in content
 */
function replacePlaceholders(content, pageId) {
  // Find the page config for this pageId
  const page = config.pages.find(p => p.id === pageId) || {};
  const siteUrl = config.site.url || 'https://luminait.app';

  // Get page-specific values with fallbacks
  const pageTitle = page.pageTitle?.en || `${page.title?.en || 'Page'} | ${config.site.name}`;
  const metaDesc = page.metaDescription?.en || config.site.description.en;

  const replacements = {
    '{{NAV_LINKS}}': generateNavLinks(pageId),
    '{{FOOTER_LINKS}}': generateFooterLinks(),
    '{{MAP_CARDS}}': generateMapCards(),
    '{{QUICK_STATS}}': generateQuickStats(),
    '{{SEO_META_TAGS}}': generateSeoMetaTags(page),
    '{{ORG_SCHEMA}}': pageId === 'home' ? generateOrgSchema() : '',
    '{{ENROLL_LINK}}': config.site.enrollLink,
    '{{SITE_NAME}}': config.site.name,
    '{{SITE_URL}}': siteUrl,
    '{{SITE_TAGLINE_EN}}': config.site.tagline.en,
    '{{SITE_TAGLINE_ZH}}': config.site.tagline.zh,
    '{{SITE_DESCRIPTION}}': config.site.description.en,
    '{{SITE_DESCRIPTION_EN}}': config.site.description.en,
    '{{SITE_DESCRIPTION_ZH}}': config.site.description.zh,
    '{{SITE_KEYWORDS_EN}}': config.site.keywords?.en || '',
    '{{SITE_KEYWORDS_ZH}}': config.site.keywords?.zh || '',
    '{{SITE_SUBTITLE_EN}}': config.site.subtitle.en,
    '{{SITE_SUBTITLE_ZH}}': config.site.subtitle.zh,
    '{{SITE_TEXTS_EN}}': config.site.texts.en,
    '{{SITE_TEXTS_ZH}}': config.site.texts.zh,
    '{{PAGE_TITLE}}': pageTitle,
    '{{PAGE_META_DESC}}': metaDesc,
    '{{PAGE_FILE}}': page.file || 'index.html',
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
 * Validate template styles for design system consistency
 */
function validateTemplateStyles(templatePath, pageId) {
  const content = fs.readFileSync(templatePath, 'utf8');
  const warnings = [];

  // Check for hardcoded colors (not using CSS variables)
  const hexColorRegex = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}(?![0-9a-fA-F])/g;
  const hexMatches = content.match(hexColorRegex);
  if (hexMatches) {
    const uniqueColors = [...new Set(hexMatches)];
    if (uniqueColors.length > 3) {
      warnings.push(`  ⚠ Found ${uniqueColors.length} hardcoded hex colors. Consider using CSS variables from base.css`);
    }
  }

  // Check for large inline style blocks
  const styleBlockRegex = /<style>([\s\S]*?)<\/style>/g;
  const styleMatches = content.match(styleBlockRegex);
  if (styleMatches) {
    const totalStyleLines = styleMatches.join('\n').split('\n').length;
    if (totalStyleLines > 200) {
      warnings.push(`  ⚠ Large inline style block (${totalStyleLines} lines). Consider extracting to component CSS files`);
    }
  }

  // Check for inline styles in HTML
  const inlineStyleRegex = /style="[^"]+"/g;
  const inlineStyleMatches = content.match(inlineStyleRegex);
  if (inlineStyleMatches && inlineStyleMatches.length > 15) {
    warnings.push(`  ⚠ Found ${inlineStyleMatches.length} inline style attributes. Consider using CSS classes`);
  }

  // Check if using component CSS files
  const hasPageComponents = content.includes('/components/page-components.css');
  const hasPageMarketing = content.includes('/components/page-marketing.css');
  const hasPageReport = content.includes('/components/page-report.css');

  if (!hasPageComponents && styleMatches && styleMatches.length > 0) {
    warnings.push('  ℹ Consider importing /components/page-components.css for shared patterns');
  }

  // Display warnings
  if (warnings.length > 0) {
    console.log(`\n📋 Style recommendations for ${pageId}:`);
    warnings.forEach(w => console.log(w));
  }

  return warnings.length;
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

  let totalWarnings = 0;

  // Process each page
  for (const page of config.pages) {
    processTemplate(page);

    // Validate styles
    const templatePath = path.join(TEMPLATES_DIR, page.template);
    if (fs.existsSync(templatePath)) {
      totalWarnings += validateTemplateStyles(templatePath, page.id);
    }
  }

  console.log('\n✓ Build complete!');

  if (totalWarnings > 0) {
    console.log(`\n💡 Design System Tip: ${totalWarnings} style recommendation(s) found.`);
    console.log('   See docs/technical/DESIGN_SYSTEM.md for guidelines on using component CSS files.\n');
  }
}

// Run build
build();
