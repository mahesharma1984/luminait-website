const opentype = require('opentype.js');
const fs = require('fs');
const path = require('path');

const TEXT = 'LuminAIT';
const FONT_SIZE = 72;
const FONT_CANDIDATES = [
    '/System/Library/Fonts/Supplemental/Bradley Hand Bold.ttf',
    '/System/Library/Fonts/Supplemental/Brush Script.ttf',
    '/System/Library/Fonts/Supplemental/Zapfino.ttf'
];

const OUTPUT_FILE = path.join(__dirname, 'text_path.svg');

const tryLoadFont = (index) => {
    if (index >= FONT_CANDIDATES.length) {
        console.error('Could not load any fallback font.');
        process.exit(1);
    }

    const fontPath = FONT_CANDIDATES[index];
    if (!fs.existsSync(fontPath)) {
        return tryLoadFont(index + 1);
    }

    opentype.load(fontPath, function (err, font) {
        if (err) {
            return tryLoadFont(index + 1);
        }

        const textPath = font.getPath(TEXT, 0, FONT_SIZE, FONT_SIZE);
        const bbox = textPath.getBoundingBox();
        const padding = 8;

        // Keep the path as-is and use a viewBox that tightly fits it.
        const viewBox = [
            bbox.x1 - padding,
            bbox.y1 - padding,
            (bbox.x2 - bbox.x1) + padding * 2,
            (bbox.y2 - bbox.y1) + padding * 2
        ].join(' ');

        const pathData = textPath.toPathData(2);
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
  <path d="${pathData}" fill="none" stroke="#2563EB" stroke-width="2" />
</svg>`;

        console.log(`Generated path data using ${path.basename(fontPath)}`);
        fs.writeFileSync(OUTPUT_FILE, svg);
    });
};

tryLoadFont(0);
