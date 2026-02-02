const fs = require('fs');
const path = require('path');

// Config
const TEXT_BOUNDS = { minX: 6, maxX: 287, minY: 32, maxY: 84 };
const TEXT_WIDTH = TEXT_BOUNDS.maxX - TEXT_BOUNDS.minX;
const LOGO_SIZE = 60; // Display size
const SPARK_SIZE = 6;
const ANIM_DURATION = 4; // seconds

// Paths
const LOGO_PATH = '../../images/branding/logo-mark.png'; // Relative to brand/animation folder if running form there? 
// Actually script run from root. 
const LOGO_FILE = 'images/branding/logo-mark.png';
const TEXT_FILE = 'text_path.svg';

// Read Assets
const logoBuffer = fs.readFileSync(LOGO_FILE);
const logoBase64 = `data:image/jpeg;base64,${logoBuffer.toString('base64')}`;

const textSvg = fs.readFileSync(TEXT_FILE, 'utf8');
// Extract path data d="..."
const pathMatch = textSvg.match(/d="([^"]+)"/);
const textPathData = pathMatch ? pathMatch[1] : '';

if (!textPathData) {
    console.error("Could not find d attribute in text_path.svg");
    process.exit(1);
}

// Layout
// We want Logo on Left, Text to right.
// Text starts at x=6. Let's shift it.
const TEXT_OFFSET_X = LOGO_SIZE + 20;
// We will wrap the path in a group with transform.

// Animation lengths
const LINE_LENGTH = TEXT_WIDTH + 20; // Length of the reveal line

// SVG Template
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${TEXT_OFFSET_X + TEXT_WIDTH + 20} 120" width="800" height="300">
  <defs>
    <!-- Glow Filter -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Mask for Reveal -->
    <mask id="textReveal">
      <!-- A thick line that wipes across -->
      <path d="M0 60 L${LINE_LENGTH} 60" 
            transform="translate(${TEXT_OFFSET_X}, 0)"
            stroke="white" 
            stroke-width="120" 
            stroke-dasharray="${LINE_LENGTH}" 
            stroke-dashoffset="${LINE_LENGTH}">
        <animate attributeName="stroke-dashoffset" 
                 from="${LINE_LENGTH}" to="0" 
                 dur="2.5s" 
                 begin="1s" 
                 fill="freeze" 
                 calcMode="spline" 
                 keyTimes="0;1" 
                 keySplines="0.42 0 0.58 1" />
      </path>
    </mask>

    <!-- Motion Path for Dot (Hidden) -->
    <!-- Simple horizontal line for now -->
    <!-- Mstart_x start_y L end_x start_y -->
    <!-- Aligned with visual center of text ~ y=60 -->
  </defs>

  <!-- Background (Optional, useful for debugging transparency) -->
  <!-- <rect width="100%" height="100%" fill="#f0f0f0" /> -->

  <!-- 1. Logo Mark (Nib + Spark) -->
  <image href="${logoBase64}" x="0" y="20" width="${LOGO_SIZE}" height="${LOGO_SIZE}" opacity="0">
    <animate attributeName="opacity" from="0" to="1" dur="1s" begin="0s" fill="freeze" />
    <animateTransform attributeName="transform" type="scale" from="0.8" to="1" dur="1s" begin="0s" fill="freeze" additive="sum" />
    <!-- Center the scale -->
    <animateTransform attributeName="transform" type="translate" from="${LOGO_SIZE / 2 * 0.2} ${LOGO_SIZE / 2 * 0.2}" to="0 0" dur="1s" begin="0s" fill="freeze" additive="sum" />
  </image>

  <!-- 2. Text (Masked) -->
  <g transform="translate(${TEXT_OFFSET_X}, 0)" opacity="1">
    <path d="${textPathData}" 
          fill="#2563EB" 
          mask="url(#textReveal)"
          filter="url(#glow)">
       <!-- Optional: Pulse glow at end -->
       <animate attributeName="opacity" values="1;0.8;1" dur="2s" begin="3.5s" repeatCount="indefinite" />
    </path>
  </g>

  <!-- 3. Spark (Glowing Dot) -->
  <!-- Moves from Nib center to writing path -->
  <circle r="${SPARK_SIZE}" fill="#60A5FA" filter="url(#glow)" opacity="0">
     <!-- Fade In -->
     <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.5s" begin="1s" fill="freeze" />
     
     <!-- Motion -->
     <!-- 
        Start: Center of Logo (x=30, y=50)
        End: End of Text (x=TEXT_OFFSET_X + TEXT_WIDTH, y=60)
     -->
     <animateTransform attributeName="transform" type="translate"
        values="${LOGO_SIZE / 2},50; ${TEXT_OFFSET_X},60; ${TEXT_OFFSET_X + TEXT_WIDTH},60"
        keyTimes="0; 0.1; 1"
        dur="2.5s"
        begin="1s"
        fill="freeze" 
        calcMode="spline"
        keySplines="0.4 0 1 1; 0.42 0 0.58 1"
    />
  </circle>

</svg>`;

fs.writeFileSync('brand/animation/logo_animation.svg', svgContent);
console.log('SVG created at brand/animation/logo_animation.svg');
