const fs = require('fs');
const path = require('path');

// Config
const LOGO_SIZE = 64; // Display size
const SPARK_SIZE = 6;
const WRITE_STROKE = 18;
const ANIM_DURATION = 4.2; // seconds
const WRITE_BEGIN = 0.8;
const WRITE_DURATION = 2.8;

// Paths
const LOGO_FILE = path.join(__dirname, '../source/logo-mark.svg');
const TEXT_FILE = path.join(__dirname, 'text_path.svg');

// Read Assets
const logoBuffer = fs.readFileSync(LOGO_FILE);
const logoExt = path.extname(LOGO_FILE).toLowerCase();
const logoMime = logoExt === '.svg'
    ? 'image/svg+xml'
    : (logoExt === '.png' ? 'image/png' : 'image/jpeg');
const logoBase64 = `data:${logoMime};base64,${logoBuffer.toString('base64')}`;

const textSvg = fs.readFileSync(TEXT_FILE, 'utf8');
// Extract path data d="..."
const pathMatch = textSvg.match(/d="([^"]+)"/);
const textPathData = pathMatch ? pathMatch[1] : '';
const viewBoxMatch = textSvg.match(/viewBox="([^"]+)"/);
const viewBox = viewBoxMatch ? viewBoxMatch[1].split(/\s+/).map(Number) : [0, 0, 300, 120];
const [vbX, vbY, vbW, vbH] = viewBox;

if (!textPathData) {
    console.error("Could not find d attribute in text_path.svg");
    process.exit(1);
}

// Layout
const TEXT_OFFSET_X = LOGO_SIZE + 24;
const VIEWBOX_WIDTH = TEXT_OFFSET_X + vbW + 24;
const VIEWBOX_HEIGHT = Math.max(vbH + 16, LOGO_SIZE + 40);
const LOGO_Y = (VIEWBOX_HEIGHT - LOGO_SIZE) / 2;
const TEXT_OFFSET_Y = (VIEWBOX_HEIGHT - vbH) / 2;

// SVG Template
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}" width="800" height="300" preserveAspectRatio="xMinYMid meet">
  <defs>
    <!-- Glow Filter -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Writing Path -->
    <path id="writePath"
          d="${textPathData}"
          transform="translate(${TEXT_OFFSET_X - vbX}, ${TEXT_OFFSET_Y - vbY})"
          pathLength="1" />

    <!-- Mask for Reveal (stroke along the text path) -->
    <mask id="textReveal" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
      <use href="#writePath"
           fill="none"
           stroke="white"
           stroke-width="${WRITE_STROKE}"
           stroke-linecap="round"
           stroke-linejoin="round"
           stroke-dasharray="1"
           stroke-dashoffset="1">
        <animate attributeName="stroke-dashoffset"
                 from="1" to="0"
                 dur="${WRITE_DURATION}s"
                 begin="${WRITE_BEGIN}s"
                 fill="freeze"
                 calcMode="spline"
                 keyTimes="0;1"
                 keySplines="0.42 0 0.58 1" />
      </use>
    </mask>

    <!-- Subtle moving shadow for the "light" effect -->
    <filter id="movingShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#0b2a5a" flood-opacity="0.25">
        <animate attributeName="dx" values="2;-2;1" dur="${WRITE_DURATION}s" begin="${WRITE_BEGIN}s" fill="freeze" />
        <animate attributeName="dy" values="2;-1;1" dur="${WRITE_DURATION}s" begin="${WRITE_BEGIN}s" fill="freeze" />
      </feDropShadow>
    </filter>
  </defs>

  <!-- Background (Optional, useful for debugging transparency) -->
  <!-- <rect width="100%" height="100%" fill="#f0f0f0" /> -->

  <!-- 1. Logo Mark (Nib + Spark) -->
  <image href="${logoBase64}" x="0" y="${LOGO_Y}" width="${LOGO_SIZE}" height="${LOGO_SIZE}" opacity="0">
    <animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="0s" fill="freeze" />
    <animateTransform attributeName="transform" type="scale" from="0.9" to="1" dur="0.8s" begin="0s" fill="freeze" additive="sum" />
    <!-- Center the scale -->
    <animateTransform attributeName="transform" type="translate" from="${LOGO_SIZE / 2 * 0.1} ${LOGO_SIZE / 2 * 0.1}" to="0 0" dur="0.8s" begin="0s" fill="freeze" additive="sum" />
  </image>

  <!-- 2. Text (Masked) -->
  <g opacity="1" filter="url(#movingShadow)">
    <use href="#writePath"
         fill="#2563EB"
         mask="url(#textReveal)"
         filter="url(#glow)" />
  </g>

  <!-- 3. Spark (Glowing Dot) -->
  <!-- Moves from Nib center to writing path -->
  <circle r="${SPARK_SIZE}" fill="#60A5FA" filter="url(#glow)" opacity="0">
     <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="${WRITE_DURATION}s" begin="${WRITE_BEGIN}s" fill="freeze" />
     <animateMotion dur="${WRITE_DURATION}s" begin="${WRITE_BEGIN}s" fill="freeze" keyTimes="0;1" keySplines="0.42 0 0.58 1" calcMode="spline">
       <mpath href="#writePath" />
     </animateMotion>
  </circle>

</svg>`;

const OUTPUT_FILE = path.join(__dirname, 'logo_animation.svg');
fs.writeFileSync(OUTPUT_FILE, svgContent);
console.log(`SVG created at ${OUTPUT_FILE}`);
