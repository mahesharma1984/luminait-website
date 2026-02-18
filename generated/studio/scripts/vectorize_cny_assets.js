const fs = require('fs');
const PNG = require('pngjs').PNG;
const ImageTracer = require('imagetracerjs');
const path = require('path');

const brainDir = path.resolve('/Users/mahesh/.gemini/antigravity/brain/f8561a19-a38e-4102-940a-9a767f1fe9b1');
const horseInput = path.join(brainDir, 'cny_component_horse_1771365299613.png');
const bookInput = path.join(brainDir, 'cny_component_book_1771365315909.png');
const horseOutput = path.join(brainDir, 'cny_component_horse.svg');
const bookOutput = path.join(brainDir, 'cny_component_book.svg');

// Options for colored vectorization
const horseOptions = {
    ltres: 0.1,
    qtres: 0.1,
    pathomit: 2,
    colorsampling: 2,
    numberofcolors: 16, // Capture the red/gold nuances
    mincolorratio: 0,
    colorquantcycles: 5,
    blurradius: 0,
    blurdelta: 10,
    strokewidth: 0,
    linefilter: false,
    scale: 1,
    roundcoords: 1,
    viewbox: true,
    desc: false,
    // pal: custom palette could be defined here if needed
};

// Options for the book (simpler line art style)
const bookOptions = {
    ltres: 0.1,
    qtres: 0.1,
    pathomit: 4,
    colorsampling: 2,
    numberofcolors: 8, 
    mincolorratio: 0,
    colorquantcycles: 3,
    blurradius: 0,
    strokewidth: 0,
    linefilter: false,
    scale: 1,
    roundcoords: 1,
    viewbox: true,
    desc: false
};

function vectorize(inputPath, outputPath, options) {
    console.log(`Reading PNG image from ${inputPath}`);
    
    try {
        const data = fs.readFileSync(inputPath);
        const png = PNG.sync.read(data);
        
        console.log(`Image decoded. Dimensions: ${png.width} x ${png.height}`);
        
        const imagedata = {
            width: png.width,
            height: png.height,
            data: png.data
        };
        
        const svgstr = ImageTracer.imagedataToSVG(imagedata, options);
        
        if (!svgstr) {
            throw new Error('Generated SVG string is empty');
        }
        
        fs.writeFileSync(outputPath, svgstr);
        console.log(`Process completed. SVG saved to: ${outputPath}`);
        
    } catch (e) {
        console.error(`Error processing ${inputPath}:`, e);
    }
}

vectorize(horseInput, horseOutput, horseOptions);
vectorize(bookInput, bookOutput, bookOptions);
