#!/usr/bin/env node
/**
 * LuminAIT Annotation Guide Build Script
 *
 * Generates annotation guide preview pages from JSON data files.
 * Run with: node build-annotation-guides.js
 *
 * What it does:
 * - Reads JSON data from /data/annotation-guides/
 * - Generates individual preview pages in /annotations/[slug]/index.html
 * - Generates index page at /annotations/index.html
 */

const fs = require('fs');
const path = require('path');

// Paths
const DATA_DIR = path.join(__dirname, 'data', 'annotation-guides');
const TEMPLATES_DIR = path.join(__dirname, 'src', 'templates');
const OUTPUT_DIR = path.join(__dirname, 'annotations');
const IMAGES_DIR = path.join(__dirname, 'images', 'annotations');

// Load templates
const guideTemplate = fs.readFileSync(
  path.join(TEMPLATES_DIR, '_annotation-guide-template.html'),
  'utf8'
);

/**
 * Generate preview images HTML for guide
 */
function generatePreviewGuideImages(data) {
  if (!data.preview || !data.preview.guide || !data.preview.guide.pages) return '';

  return data.preview.guide.pages
    .map(imagePath => {
      const fullPath = `/images/annotations/${data.slug}/${imagePath}`;
      return `        <div class="preview-image">
          <img src="${fullPath}" alt="${escapeHtml(data.preview.guide.alt)}" loading="lazy">
        </div>`;
    })
    .join('\n');
}

/**
 * Generate preview images HTML for example
 */
function generatePreviewExampleImages(data) {
  if (!data.preview || !data.preview.example || !data.preview.example.pages) return '';

  return data.preview.example.pages
    .map(imagePath => {
      const fullPath = `/images/annotations/${data.slug}/${imagePath}`;
      return `        <div class="preview-image">
          <img src="${fullPath}" alt="${escapeHtml(data.preview.example.alt)}" loading="lazy">
        </div>`;
    })
    .join('\n');
}

/**
 * Generate downloads list HTML
 */
function generateDownloadsList(downloads) {
  if (!downloads || !Array.isArray(downloads)) return '';

  return downloads
    .map(download => {
      const badge = download.badge ? `<span class="badge badge-cool" style="font-size: 0.75rem; margin-right: 0.5rem;">${escapeHtml(download.badge)}</span>` : '';
      return `      <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        ${badge}<strong>${escapeHtml(download.title)}</strong>
        <p style="font-size: 0.875rem; margin: 0.5rem 0;">${escapeHtml(download.description)}</p>
        <p style="font-size: 0.75rem; opacity: 0.8; margin: 0;">${escapeHtml(download.size)} • ${download.pages} pages</p>
      </div>`;
    })
    .join('\n');
}

/**
 * Generate color key HTML
 */
function generateColorKey(colorKey) {
  if (!colorKey) return '';

  return colorKey
    .map(item => {
      return `        <div class="color-key-item ${item.color}">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>`;
    })
    .join('\n');
}

/**
 * Generate semantic families HTML
 */
function generateSemanticFamilies(families) {
  if (!families) return '';

  return families
    .map(family => {
      const examplesHtml = family.examples
        ? `<ul>
${family.examples.map(ex => `            <li>${escapeHtml(ex)}</li>`).join('\n')}
          </ul>`
        : '';

      const questionHtml = family.keyQuestion
        ? `<p class="key-question">Key Question: ${escapeHtml(family.keyQuestion)}</p>`
        : '';

      return `      <div class="semantic-family">
        <h3>${escapeHtml(family.name)}</h3>
        <p>${escapeHtml(family.description)}</p>${examplesHtml}${questionHtml}
      </div>`;
    })
    .join('\n');
}

/**
 * Generate a single annotation guide preview page
 */
function generateGuidePage(data) {
  let html = guideTemplate;

  // Replace placeholders
  html = html.replace(/\{\{META_TITLE\}\}/g, escapeHtml(data.metaTitle));
  html = html.replace(/\{\{META_DESCRIPTION\}\}/g, escapeHtml(data.metaDescription));
  html = html.replace(/\{\{SLUG\}\}/g, data.slug);
  html = html.replace(/\{\{TEXT_TITLE\}\}/g, escapeHtml(data.title));
  html = html.replace(/\{\{AUTHOR\}\}/g, escapeHtml(data.author));
  html = html.replace(/\{\{CHAPTERS\}\}/g, escapeHtml(data.chapters));
  html = html.replace(/\{\{YEAR_LEVEL\}\}/g, escapeHtml(data.yearLevel));
  html = html.replace(/\{\{LENS\}\}/g, escapeHtml(data.lens));
  html = html.replace(/\{\{FOCUS\}\}/g, escapeHtml(data.focus));
  html = html.replace(/\{\{GUIDE_PAGES\}\}/g, data.download?.pages || '8');
  html = html.replace(/\{\{GUIDE_SIZE\}\}/g, data.download?.size || '');

  // Parent bridge
  html = html.replace(/\{\{PARENT_BRIDGE_HEADLINE\}\}/g, escapeHtml(data.parentBridge?.headline || ''));
  html = html.replace(/\{\{PARENT_BRIDGE_DESCRIPTION\}\}/g, escapeHtml(data.parentBridge?.description || ''));
  html = html.replace(/\{\{PARENT_BRIDGE_CTA\}\}/g, escapeHtml(data.parentBridge?.cta || ''));
  html = html.replace(/\{\{PARENT_BRIDGE_LINK\}\}/g, data.parentBridge?.link || '/course.html');

  // Generate dynamic content
  html = html.replace('{{PREVIEW_GUIDE_IMAGES}}', generatePreviewGuideImages(data));
  html = html.replace('{{PREVIEW_EXAMPLE_IMAGES}}', generatePreviewExampleImages(data));
  html = html.replace('{{DOWNLOADS_LIST}}', generateDownloadsList(data.downloads));
  html = html.replace('{{COLOR_KEY}}', generateColorKey(data.colorKey));
  html = html.replace('{{SEMANTIC_FAMILIES}}', generateSemanticFamilies(data.semanticFamilies));

  return html;
}

/**
 * Generate text card for index page
 */
function generateTextCard(data) {
  return `          <a href="/annotations/${data.slug}/" class="annotation-card">
            <div class="badge badge-cool">${escapeHtml(data.guideTitle)}</div>
            <h3>${escapeHtml(data.title)}</h3>
            <p class="annotation-card-meta">${escapeHtml(data.author)} • ${escapeHtml(data.chapters)}</p>
            <p class="annotation-card-lens">${escapeHtml(data.lens)}</p>
            <span class="annotation-card-link">View Preview →</span>
          </a>`;
}

/**
 * Generate index page
 */
function generateIndexPage(allGuides) {
  const cardsHtml = allGuides
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(generateTextCard)
    .join('\n');

  // Simple index page template (inline for now)
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annotation Guides - Free Literature Analysis Guides | LuminAIT</title>
  <meta name="description" content="Download free annotation guides for classic literature. Learn to analyze texts with structured, color-coded annotation systems. For students in Years 7-10.">
  <link rel="canonical" href="https://luminait.app/annotations/">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,600&display=swap" rel="stylesheet">

  <!-- Design System CSS -->
  <link rel="stylesheet" href="/components/base.css">
  <link rel="stylesheet" href="/components/page-components.css">

  <style>
    .annotations-hero {
      padding: 4rem 1.5rem 3rem;
      text-align: center;
      background: linear-gradient(135deg, var(--gray-50) 0%, var(--surface) 100%);
      border-bottom: 1px solid var(--gray-200);
    }

    .annotations-hero h1 {
      font-family: var(--font-heading);
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 1rem 0;
    }

    .annotations-hero p {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 48rem;
      margin: 1rem auto;
    }

    .annotations-main {
      max-width: 64rem;
      margin: 0 auto;
      padding: 3rem 1.5rem;
    }

    .annotations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }

    .annotation-card {
      display: block;
      padding: 2rem;
      background: white;
      border: 1px solid var(--gray-200);
      border-radius: 12px;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .annotation-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .annotation-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 1rem 0 0.5rem;
    }

    .annotation-card-meta {
      font-size: 1rem;
      color: var(--text-tertiary);
      margin: 0.5rem 0;
    }

    .annotation-card-lens {
      font-size: 0.875rem;
      color: var(--text-secondary);
      font-style: italic;
      margin: 0.75rem 0;
    }

    .annotation-card-link {
      display: inline-block;
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 600;
      color: var(--accent-primary);
    }

    .method-section {
      background: var(--gray-50);
      padding: 2.5rem 2rem;
      border-radius: 12px;
      border: 1px solid var(--gray-200);
      margin: 3rem 0;
    }

    .method-section h2 {
      font-family: var(--font-heading);
      font-size: 1.875rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .method-section p {
      font-size: 1.125rem;
      line-height: 1.7;
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }

    .footer {
      text-align: center;
      padding: 2rem 1.5rem;
      border-top: 1px solid var(--gray-200);
      color: var(--text-tertiary);
    }

    .footer a {
      color: var(--accent-primary);
      text-decoration: none;
    }
  </style>
</head>
<body>

  <nav class="nav">
    <div class="nav-content">
      <a href="/" class="nav-logo">LuminAIT</a>
      <div class="nav-links">
        <a href="/course.html" class="nav-link">Course</a>
        <a href="/curriculum/" class="nav-link">Curriculum Guides</a>
      </div>
    </div>
  </nav>

  <header class="annotations-hero">
    <div class="badge badge-cool">Free Resources</div>
    <h1>Annotation Guides</h1>
    <p>Download structured annotation guides for classic literature. Learn to identify and analyze key literary patterns with our color-coded system.</p>
  </header>

  <main class="annotations-main">

    <section class="method-section">
      <h2>How Annotation Guides Work</h2>
      <p>Our annotation guides teach you to read like a literary analyst. Each guide focuses on a specific analytical lens (social, psychological, narrative) and provides:</p>
      <ul style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary); margin: 1.5rem 0;">
        <li><strong>Color-coded annotation system</strong> — Mark different types of passages as you read</li>
        <li><strong>Semantic families</strong> — Groups of related words and images to track</li>
        <li><strong>Structured activities</strong> — Guided tasks to deepen your analysis</li>
        <li><strong>Key passage analysis</strong> — Detailed breakdowns of important moments</li>
      </ul>
      <p>Perfect for students in Years 7-10 who want to improve their close reading and analytical writing skills.</p>
    </section>

    <h2 style="font-size: 1.875rem; font-weight: 600; margin: 2rem 0 1.5rem;">Available Annotation Guides</h2>
    <div class="annotations-grid">
${cardsHtml}
    </div>

    <section style="text-align: center; margin: 4rem 0 2rem;">
      <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem;">Want structured, expert-led learning?</h3>
      <p style="font-size: 1.125rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Join our 5-week or 10-week course for personalized feedback and guided analysis.</p>
      <a href="/course.html" style="display: inline-block; padding: 0.875rem 2rem; font-size: 1.125rem; font-weight: 600; color: white; background: var(--accent-primary); border-radius: 6px; text-decoration: none; transition: all 0.2s;">View Course Details →</a>
    </section>

  </main>

  <footer class="footer">
    <p>&copy; 2026 <a href="/">LuminAIT</a> • Melbourne</p>
  </footer>

</body>
</html>`;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
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
  console.log('Building annotation guide pages...\n');

  // Ensure output directory exists
  ensureDir(OUTPUT_DIR);

  // Check if data directory exists
  if (!fs.existsSync(DATA_DIR)) {
    console.log(`Creating data directory: ${DATA_DIR}`);
    ensureDir(DATA_DIR);
    console.log('\nNo annotation guide data files found. Create JSON files in /data/annotation-guides/');
    console.log('Example: /data/annotation-guides/the-outsiders.json\n');
    return;
  }

  // Read all JSON files from data directory
  const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));

  if (dataFiles.length === 0) {
    console.log('No annotation guide data files found in /data/annotation-guides/');
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
    console.log(`  -> /annotations/${data.slug}/index.html`);

    allGuides.push(data);
  }

  // Generate index page
  console.log('\nGenerating index page...');
  const indexHtml = generateIndexPage(allGuides);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);
  console.log('  -> /annotations/index.html');

  console.log(`\nDone! Generated ${dataFiles.length} guide pages + 1 index page.`);
  console.log('\nNext steps:');
  console.log('  1. Extract preview images from PDFs → /images/annotations/[slug]/');
  console.log('  2. Update Formspree form ID in template');
  console.log('  3. Test download flow');
}

// Run build
build();
