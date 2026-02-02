const opentype = require('opentype.js');
const fs = require('fs');

opentype.load('/System/Library/Fonts/Supplemental/Brush Script.ttf', function (err, font) {
    if (err) {
        console.error('Could not load font: ' + err);
        process.exit(1);
    } else {
        const path = font.getPath('LuminAIT', 10, 80, 72);
        const pathData = path.toPathData(2);
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120">
  <path d="${pathData}" fill="none" stroke="#2563EB" stroke-width="2" />
</svg>`;
        console.log('Generated path data');
        fs.writeFileSync('text_path.svg', svg);
    }
});
