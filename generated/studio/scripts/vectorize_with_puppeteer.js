const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const ImageTracer = require('imagetracerjs');

const brainDir = path.resolve('/Users/mahesh/.gemini/antigravity/brain/f8561a19-a38e-4102-940a-9a767f1fe9b1');
const horseInput = path.join(brainDir, 'cny_component_horse_1771365299613.png');
const bookInput = path.join(brainDir, 'cny_component_book_1771365315909.png');
const horseOutput = path.join(brainDir, 'cny_component_horse.svg');
const bookOutput = path.join(brainDir, 'cny_component_book.svg');

// Options for colored vectorization
const horseOptions = {
    ltres: 1, // Lower detail for cleaner SVG
    qtres: 1,
    pathomit: 8,
    colorsampling: 2,
    numberofcolors: 16,
    mincolorratio: 0,
    colorquantcycles: 3,
    blurradius: 0,
    blurdelta: 20,
    strokewidth: 0,
    linefilter: false,
    scale: 1,
    roundcoords: 1,
    viewbox: true,
    desc: false
};

// Options for the book (simpler line art style)
const bookOptions = {
    ltres: 1,
    qtres: 1,
    pathomit: 8,
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

async function getImageData(browser, distinctInputPath) {
    const page = await browser.newPage();

    // Read file as base64
    const bitmap = fs.readFileSync(distinctInputPath);
    const base64 = Buffer.from(bitmap).toString('base64');
    const dataUri = `data:image/png;base64,${base64}`;

    const evaluatedData = await page.evaluate((uri) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, img.width, img.height);

                // Return simple object (cannot return ImageData directly as it's not serializable)
                resolve({
                    width: imageData.width,
                    height: imageData.height,
                    data: Array.from(imageData.data) // Convert Uint8ClampedArray to normal array
                });
            };
            img.onerror = reject;
            img.src = uri;
        });
    }, dataUri);

    await page.close();
    return evaluatedData;
}

async function vectorize(browser, inputPath, outputPath, options) {
    console.log(`Processing ${inputPath}...`);
    try {
        const imageData = await getImageData(browser, inputPath);
        console.log(`Image loaded: ${imageData.width}x${imageData.height}`);

        // Reconstruct for ImageTracer
        const traceInput = {
            width: imageData.width,
            height: imageData.height,
            data: imageData.data
        };

        const svgstr = ImageTracer.imagedataToSVG(traceInput, options);

        // Post-processing: Remove white/near-white paths
        // ImageTracer output usually looks like <path fill="rgb(255,255,255)" ... />
        // We will remove paths where R, G, and B are all > 250
        let filteredSvg = svgstr.replace(/<path[^>]*fill="rgb\((\d+),(\d+),(\d+)\)"[^>]*\/>/g, (match, r, g, b) => {
            if (parseInt(r) > 240 && parseInt(g) > 240 && parseInt(b) > 240) {
                return ''; // Remove white/near-white path
            }
            return match;
        });

        fs.writeFileSync(outputPath, filteredSvg);
        console.log(`Saved SVG to ${outputPath} (White background removed)`);
    } catch (e) {
        console.error(`Error vectorizing ${inputPath}:`, e);
    }
}

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    try {
        await vectorize(browser, horseInput, horseOutput, horseOptions);
        await vectorize(browser, bookInput, bookOutput, bookOptions);
    } catch (e) {
        console.error("Script failed:", e);
    } finally {
        await browser.close();
    }
})();
