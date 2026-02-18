const fs = require('fs');
const path = require('path');

const brainDir = path.resolve('/Users/mahesh/.gemini/antigravity/brain/f8561a19-a38e-4102-940a-9a767f1fe9b1');
const repoDir = path.resolve('/Users/mahesh/Downloads/local-repos/luminait-website');

const horseSvgPath = path.join(brainDir, 'cny_component_horse.svg');
const bookSvgPath = path.join(brainDir, 'cny_component_book.svg');
const logoSvgPath = path.join(repoDir, 'images', 'logo-mark.svg');
const outputSvgPath = path.join(brainDir, 'cny_2026_layered.svg');

function getSvgContent(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Extract everything between <svg ...> and </svg>
    const match = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    return match ? match[1] : '';
}

function getSvgViewBox(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/viewBox="([^"]*)"/i);
    return match ? match[1] : '0 0 100 100'; // Default fallback
}

// Read contents
const horseContent = getSvgContent(horseSvgPath);
const bookContent = getSvgContent(bookSvgPath);
// For logo, we might need to be careful as it has defs/gradients. 
// We should probably extract unique IDs to avoid conflicts if we were merging many files,
// but here it's simple enough to just include it.
const logoContent = getSvgContent(logoSvgPath);

// Create the final SVG
// Using a 1200 x 1200 canvas
const finalSvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="1200" height="1200" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>LuminAIT Chinese New Year 2026</title>
    
    <defs>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;600;700&amp;display=swap');
            .text-title { font-family: 'Fraunces', serif; font-weight: 700; font-size: 60px; fill: #111827; text-anchor: middle; }
            .text-subtitle { font-family: 'Fraunces', serif; font-weight: 600; font-size: 48px; fill: #111827; text-anchor: middle; }
            .text-chinese { font-family: "Noto Serif SC", serif; font-weight: 600; font-size: 48px; fill: #D97706; text-anchor: middle; }
        </style>
    </defs>

    <!-- Layer 1: Background -->
    <g id="layer_background">
        <rect width="1200" height="1200" fill="#FDFCF8" /> <!-- Warm Paper -->
        <!-- Texture overlay could go here -->
    </g>

    <!-- Layer 2: Book (Bottom Center) -->
    <g id="layer_book" transform="translate(300, 600) scale(0.8)">
        <!-- Book is approx 640x640, scaling it down and centering -->
         ${bookContent}
    </g>

    <!-- Layer 3: Horse (Leaping from Book) -->
    <!-- Mirrored to face right. Translate adjusted to keep position roughly centered (Original X=350 + Width~512 = ~860) -->
    <g id="layer_horse" transform="translate(860, 350) scale(-0.8, 0.8)">
         <!-- Horse is approx 640x640 -->
         ${horseContent}
    </g>

    <!-- Layer 4: Logo (Subtle on Page) -->
    <g id="layer_logo" transform="translate(750, 850) scale(0.15)">
        <!-- Logo is 512x512 -->
        ${logoContent}
    </g>

    <!-- Layer 5: Text -->
    <g id="layer_text">
        <text x="600" y="120" class="text-title">LuminAIT wishes you and your</text>
        <text x="600" y="200" class="text-title">children a happy chinese new year.</text>
        <text x="600" y="280" class="text-chinese">新年快乐</text>
    </g>

</svg>`;

fs.writeFileSync(outputSvgPath, finalSvg);
console.log('Final SVG assembled at:', outputSvgPath);
