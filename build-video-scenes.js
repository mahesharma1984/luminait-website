#!/usr/bin/env node
/**
 * LuminAIT Video Scene Build Script
 *
 * Generates video scene HTML files from JSON data.
 * Run with: node build-video-scenes.js
 *
 * Pipeline:
 *   /data/video-scenes/*.json  →  _video-scene-template.html  →  /studio/scenes/{slug}.html
 */

const fs = require('fs');
const path = require('path');

// === PATHS ===
const DATA_DIR = path.join(__dirname, 'data', 'video-scenes');
const TEMPLATES_DIR = path.join(__dirname, 'src', 'templates');
const OUTPUT_DIR = path.join(__dirname, 'studio', 'scenes');

// === LOAD TEMPLATE ===
const sceneTemplate = fs.readFileSync(
  path.join(TEMPLATES_DIR, '_video-scene-template.html'),
  'utf8'
);

// === DEFAULTS ===
const DEFAULTS = {
  description: '',
  assets: {
    coverImage: null,
    contextImage: null,
    ctaImage: null,
    paperTexture: null
  },
  layers: {
    intro: {
      background: '#2c3e50',
      imageStyle: 'height: 80%; box-shadow: 0 20px 50px rgba(0,0,0,0.5);'
    },
    context: {
      background: '#000',
      imageOpacity: 0.8,
      panEffect: true,
      panDuration: '10s',
      overlayText: null,
      overlayPosition: { bottom: '10%', left: '5%' }
    },
    text: {
      background: '#fffdf5',
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: '1.4rem',
      lineHeight: 2.2,
      textColor: '#333',
      padding: '100px'
    },
    outro: {
      background: '#1e3a5f',
      imageStyle: 'width: 100%; height: 100%; object-fit: contain;'
    }
  },
  textContent: [],
  highlights: [],
  labels: [],
  steps: []
};

// === HELPERS ===

function deepMerge(defaults, overrides) {
  const result = { ...defaults };
  for (const key of Object.keys(overrides)) {
    if (
      overrides[key] !== null &&
      typeof overrides[key] === 'object' &&
      !Array.isArray(overrides[key]) &&
      typeof defaults[key] === 'object' &&
      !Array.isArray(defaults[key])
    ) {
      result[key] = deepMerge(defaults[key] || {}, overrides[key]);
    } else {
      result[key] = overrides[key];
    }
  }
  return result;
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// === GENERATORS ===

function generateSceneStyles(data) {
  const intro = data.layers.intro;
  const text = data.layers.text;
  let css = '';

  // Layer management
  css += `
        /* LAYER MANAGEMENT */
        .stage-layer {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            opacity: 0;
            transition: opacity 0.8s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .stage-layer.active {
            opacity: 1;
            z-index: 10;
        }
`;

  // Intro
  css += `
        /* INTRO */
        #layer-intro { background: ${intro.background}; }
        #layer-intro img { ${intro.imageStyle} }
`;

  // Context (conditional)
  if (data.assets.contextImage) {
    const ctx = data.layers.context;
    css += `
        /* CONTEXT */
        #layer-context { background: ${ctx.background}; }
        #layer-context img {
            width: 100%; height: 100%;
            object-fit: cover;
            opacity: ${ctx.imageOpacity};
            ${ctx.panEffect ? `transition: transform ${ctx.panDuration} ease-out; transform: scale(1.1);` : ''}
        }
        ${ctx.panEffect ? '.context-pan { transform: scale(1.0) !important; }' : ''}
`;
    if (ctx.overlayText) {
      const pos = ctx.overlayPosition || { bottom: '10%', left: '5%' };
      const posCSS = Object.entries(pos).map(([k, v]) => `${k}: ${v};`).join(' ');
      css += `
        .context-overlay {
            position: absolute;
            ${posCSS}
            color: white;
            font-family: 'Helvetica Neue', sans-serif;
            text-transform: uppercase;
            font-weight: 800;
            font-size: 4rem;
            text-shadow: 0 2px 10px black;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
        }
        .context-overlay.show {
            opacity: 1;
            transform: translateY(0);
        }
`;
    }
  }

  // Text
  const bgImage = data.assets.paperTexture
    ? `background: url('../assets/${data.assets.paperTexture}'), ${text.background};`
    : `background: ${text.background};`;

  css += `
        /* TEXT */
        #layer-text {
            font-family: ${text.fontFamily};
            font-size: ${text.fontSize};
            line-height: ${text.lineHeight};
            color: ${text.textColor};
            padding: ${text.padding};
            box-sizing: border-box;
            ${bgImage}
            transform-origin: top left;
            transition: transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .book-text { max-width: 800px; margin: 0 auto; }
`;

  // Highlight styles
  css += `
        /* HIGHLIGHTS */
        .highlight-mark {
            position: absolute;
            pointer-events: none;
            z-index: 20;
            border-radius: 2px;
            opacity: 0;
            transition: opacity 0.6s ease;
        }
        .highlight-mark.type-yellow {
            mix-blend-mode: multiply;
        }
        .highlight-mark.type-yellow.draw-stroke { opacity: 0.6; }
        .highlight-mark.type-underline.draw-stroke { opacity: 1; }
`;

  // Annotation label overrides (scene-specific on top of styles.css base)
  css += `
        /* LABELS (scene overrides) */
        .annotation-label {
            border-left: 4px solid #3498db;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            font-family: sans-serif;
            font-size: 1rem;
            z-index: 30;
        }
`;

  // Subtitles
  css += `
        /* SUBTITLES */
        .subtitle-layer {
            position: absolute;
            bottom: 8%; left: 50%;
            transform: translateX(-50%);
            width: 80%;
            text-align: center;
            font-family: 'DM Sans', sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: white;
            text-shadow: 0 2px 4px rgba(0,0,0,0.8);
            z-index: 100;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .subtitle-layer.show { opacity: 1; }
`;

  return css;
}

function generateContextLayer(data) {
  if (!data.assets.contextImage) return '';

  const ctx = data.layers.context;
  let html = `
        <!-- CONTEXT LAYER -->
        <div id="layer-context" class="stage-layer">
            <img src="../assets/${data.assets.contextImage}" id="img-context" alt="Context Image">`;

  if (ctx.overlayText) {
    html += `
            <div class="context-overlay" id="txt-context">${escapeHtml(ctx.overlayText)}</div>`;
  }

  html += `
        </div>`;
  return html;
}

function generateOutroLayer(data) {
  if (!data.assets.ctaImage) return '';

  const outro = data.layers.outro;
  return `
        <!-- OUTRO LAYER -->
        <div id="layer-outro" class="stage-layer" style="background: ${outro.background};">
            <img src="../assets/${data.assets.ctaImage}" style="${outro.imageStyle}" alt="Call to Action">
        </div>`;
}

function generateTextParagraphs(data) {
  if (!data.textContent || data.textContent.length === 0) return '';
  return data.textContent
    .map(p => `                <p>${p.html}</p>`)
    .join('\n\n');
}

function generateHighlights(data) {
  if (!data.highlights || data.highlights.length === 0) return '';

  return data.highlights.map(h => {
    const isYellow = (h.type || 'yellow') === 'yellow';
    const color = h.color || (isYellow ? '#ffeb3b' : '#3498db');
    const height = h.height || (isYellow ? '1.6%' : '0.4%');
    const typeClass = isYellow ? 'type-yellow' : 'type-underline';

    return `            <div class="highlight-mark ${typeClass}" id="${h.id}" style="top: ${h.top}; left: ${h.left}; width: ${h.width}; height: ${height}; background: ${color};"></div>`;
  }).join('\n');
}

function generateLabels(data) {
  if (!data.labels || data.labels.length === 0) return '';

  return data.labels.map(l => {
    const borderColor = l.borderColor || '#3498db';
    return `            <div class="annotation-label" id="${l.id}" style="top: ${l.top}; left: ${l.left}; border-left-color: ${borderColor};">
                <strong>${l.title}</strong><br>${l.body}
            </div>`;
  }).join('\n\n');
}

function generateSceneStepsJSON(data) {
  const steps = data.steps.map(s => ({
    duration: s.duration,
    text: s.subtitle
  }));
  return JSON.stringify(steps, null, 8);
}

function generateActionJS(action) {
  switch (action.type) {
    case 'showLayer':
      return `document.getElementById('layer-${action.target}').classList.add('active');`;
    case 'hideLayer':
      return `document.getElementById('layer-${action.target}').classList.remove('active');`;
    case 'panImage':
      return `setTimeout(function() { document.getElementById('img-context').classList.add('context-pan'); }, 100);`;
    case 'showOverlay':
      return `document.getElementById('txt-context').classList.add('show');`;
    case 'showHighlight':
      return `document.getElementById('${action.target}').classList.add('draw-stroke');`;
    case 'showLabel':
      return `document.getElementById('${action.target}').classList.add('show');`;
    case 'zoomText':
      return `document.getElementById('layer-text').style.transform = '${action.transform}';`;
    case 'fadeElement':
      return `document.getElementById('${action.target}').style.opacity = '${action.opacity}';`;
    case 'hideElement':
      return `document.getElementById('${action.target}').style.opacity = '0';`;
    case 'addClass':
      return `document.getElementById('${action.target}').classList.add('${action.class}');`;
    case 'removeClass':
      return `document.getElementById('${action.target}').classList.remove('${action.class}');`;
    default:
      return `// Unknown action: ${action.type}`;
  }
}

function generateStepHandler(data) {
  let js = `        window.addEventListener('studio-step', function(e) {\n`;
  js += `            var step = e.detail.step;\n\n`;

  // Step 0: Reset
  js += `            // RESET\n`;
  js += `            if (step === 0) {\n`;
  js += `                document.getElementById('layer-intro').classList.add('active');\n`;

  const layerIds = ['context', 'text', 'outro'];
  for (const id of layerIds) {
    js += `                var el_${id} = document.getElementById('layer-${id}');\n`;
    js += `                if (el_${id}) el_${id}.classList.remove('active');\n`;
  }

  // Reset highlights
  for (const h of data.highlights) {
    js += `                var rh_${h.id.replace(/-/g, '_')} = document.getElementById('${h.id}');\n`;
    js += `                if (rh_${h.id.replace(/-/g, '_')}) { rh_${h.id.replace(/-/g, '_')}.classList.remove('draw-stroke'); rh_${h.id.replace(/-/g, '_')}.style.opacity = ''; }\n`;
  }

  // Reset labels
  for (const l of data.labels) {
    js += `                var rl_${l.id.replace(/-/g, '_')} = document.getElementById('${l.id}');\n`;
    js += `                if (rl_${l.id.replace(/-/g, '_')}) { rl_${l.id.replace(/-/g, '_')}.classList.remove('show'); rl_${l.id.replace(/-/g, '_')}.style.opacity = ''; }\n`;
  }

  // Reset text zoom
  js += `                var textLayer = document.getElementById('layer-text');\n`;
  js += `                if (textLayer) textLayer.style.transform = '';\n`;

  // Reset context pan
  js += `                var ctxImg = document.getElementById('img-context');\n`;
  js += `                if (ctxImg) ctxImg.classList.remove('context-pan');\n`;

  // Reset context overlay
  js += `                var ctxTxt = document.getElementById('txt-context');\n`;
  js += `                if (ctxTxt) ctxTxt.classList.remove('show');\n`;

  js += `            }\n`;

  // Each step
  data.steps.forEach((step, index) => {
    const stepNum = index + 1;
    js += `\n            // Step ${stepNum}\n`;
    js += `            if (step === ${stepNum}) {\n`;
    for (const action of step.actions) {
      js += `                ${generateActionJS(action)}\n`;
    }
    js += `            }\n`;
  });

  js += `        });\n`;
  return js;
}

// === MAIN: Generate a single scene page ===
function generateScenePage(data) {
  data = deepMerge(DEFAULTS, data);
  let html = sceneTemplate;

  // Scalar replacements
  html = html.replace(/\{\{SCENE_TITLE\}\}/g, escapeHtml(data.sceneTitle));
  html = html.replace(/\{\{COVER_IMAGE\}\}/g, data.assets.coverImage);

  // Generated blocks
  html = html.replace('{{SCENE_STYLES}}', generateSceneStyles(data));
  html = html.replace('{{CONTEXT_LAYER_HTML}}', generateContextLayer(data));
  html = html.replace('{{OUTRO_LAYER_HTML}}', generateOutroLayer(data));
  html = html.replace('{{TEXT_PARAGRAPHS}}', generateTextParagraphs(data));
  html = html.replace('{{HIGHLIGHTS_HTML}}', generateHighlights(data));
  html = html.replace('{{LABELS_HTML}}', generateLabels(data));
  html = html.replace('{{SCENE_STEPS_JSON}}', generateSceneStepsJSON(data));
  html = html.replace('{{STEP_HANDLER_JS}}', generateStepHandler(data));

  return html;
}

// === MAIN: Build all scenes ===
function build() {
  console.log('Building video scene pages...\n');

  ensureDir(OUTPUT_DIR);

  if (!fs.existsSync(DATA_DIR)) {
    ensureDir(DATA_DIR);
    console.log('No scene data files found. Create JSON files in /data/video-scenes/');
    return;
  }

  const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
  if (dataFiles.length === 0) {
    console.log('No scene data files found in /data/video-scenes/');
    return;
  }

  let count = 0;
  for (const file of dataFiles) {
    const filePath = path.join(DATA_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (!data.slug || !data.sceneTitle || !data.assets || !data.assets.coverImage) {
      console.error(`  SKIP: ${file} — missing required fields (slug, sceneTitle, assets.coverImage)`);
      continue;
    }

    console.log(`  ${data.sceneTitle} (${data.slug})`);

    const sceneHtml = generateScenePage(data);
    const outputPath = path.join(OUTPUT_DIR, `${data.slug}.html`);
    fs.writeFileSync(outputPath, sceneHtml);
    console.log(`    → studio/scenes/${data.slug}.html`);
    count++;
  }

  console.log(`\nDone. Generated ${count} scene file${count !== 1 ? 's' : ''}.`);
}

build();
