const fs = require('fs');
const jpeg = require('jpeg-js');
const ImageTracer = require('imagetracerjs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');
const inputPath = path.join(rootDir, 'brand', 'working', 'logotype_cursive.png');
const outputPath = path.join(rootDir, 'brand', 'source', 'logotype_cursive.svg');

// Options optimized for black text
const options = {
    ltres: 0.1, // High fidelity
    qtres: 0.1,
    pathomit: 4, // Remove dust
    colorsampling: 2,
    numberofcolors: 2, // Force black/white
    mincolorratio: 0,
    colorquantcycles: 5,
    blurradius: 0,
    blurdelta: 20,
    strokewidth: 0,
    linefilter: false,
    scale: 1,
    roundcoords: 1,
    viewbox: true,
    desc: false,
    pal: [{ r: 255, g: 255, b: 255, a: 0 }, { r: 0, g: 0, b: 0, a: 255 }] // Palette
};

console.log('Reading JPEG image from ' + inputPath);

try {
    const jpegData = fs.readFileSync(inputPath);
    const rawImageData = jpeg.decode(jpegData, { useTArray: true }); // useTArray for Uint8Array

    console.log('Image decoded. Dimensions:', rawImageData.width, 'x', rawImageData.height);

    const imagedata = {
        width: rawImageData.width,
        height: rawImageData.height,
        data: rawImageData.data
    };

    const svgstr = ImageTracer.imagedataToSVG(imagedata, options);

    if (!svgstr) {
        throw new Error('Generated SVG string is empty');
    }

    fs.writeFileSync(outputPath, svgstr);
    console.log('Process completed. SVG saved to:', outputPath);

} catch (e) {
    console.error('Error:', e);
}
