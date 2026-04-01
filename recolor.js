const fs = require('fs');
const infile = process.argv[2] || 'public/lottie/data.json';
const outfile = process.argv[3] || 'public/lottie/data_recolored.json';
const dataRaw = fs.readFileSync(infile, 'utf8');
const obj = JSON.parse(dataRaw);

// Our Target Colors based on Home Screen Hero:
// 1. Dark Branding Blue (#003f7d): [0, 0.247, 0.490, 1]
// 2. Vivid Hero Blue (#3b82f6): [0.231, 0.510, 0.965, 1]
// 3. Medium Hero Blue (#2563eb): [0.145, 0.388, 0.922, 1]
const cDarkBlue = [0.0, 0.247, 0.490, 1];
const cHeroVivid = [0.231, 0.510, 0.965, 1];
const cHeroMedium = [0.145, 0.388, 0.922, 1];
const cSecondaryGreen = [0.0, 0.427, 0.247, 1];

// Helper to determine brightness of an original color array
function getLuminance(r, g, b) {
    return 0.299 * r + 0.587 * g + 0.114 * b;
}

const colorMapCache = new Map();
function getMappedColor(r, g, b) {
    const key = `${r.toFixed(3)},${g.toFixed(3)},${b.toFixed(3)}`;
    if (colorMapCache.has(key)) return colorMapCache.get(key);
    
    const lum = getLuminance(r, g, b);
    let chosenColor;
    
    if (lum > 0.90) {
        // Keep pure whites/light elements identical so they pop off the #e0f1ff background
        chosenColor = [1.0, 1.0, 1.0, 1];
    } else if (lum > 0.65) {
        // Bright elements become vividly colored Hero Blue
        chosenColor = cHeroVivid;
    } else if (lum > 0.35) {
        // Midtones inject Cred2Tech Secondary Green for visual contrast, unless it was originally very blue.
        chosenColor = (b > r) ? cHeroMedium : cSecondaryGreen;
    } else {
        // Shadows become solid Branding Dark Blue
        chosenColor = cDarkBlue;
    }

    colorMapCache.set(key, chosenColor);
    return chosenColor;
}

// Function to traverse and find ALL solid colors in 'c.k' arrays in Lottie JSON
let count = 0;
function traverseAndRecolor(node) {
    if (Array.isArray(node)) {
        // Check if this array is an exact color vector [r, g, b, 1]
        if (node.length === 4 && typeof node[0] === 'number') {
            // Is it a normalized color? (0.0 - 1.0)
            if (node.every(v => v >= 0 && v <= 1)) {
                 const newCol = getMappedColor(node[0], node[1], node[2]);
                 node[0] = newCol[0];
                 node[1] = newCol[1];
                 node[2] = newCol[2];
                 node[3] = 1; // force opacity 1 on color vector
                 count++;
                 return;
            }
        }
        for (let i = 0; i < node.length; i++) {
            traverseAndRecolor(node[i]);
        }
    } else if (node !== null && typeof node === 'object') {
        // Handle specifically gradient fills "gf"
        if (node.ty === 'gf' && node.g && node.g.k && Array.isArray(node.g.k.k)) {
            // gradients are pairs of [position, r, g, b, ...]
            // it's complicated, we skip mutative gradient unless necessary.
            // but we can try to recolor solid objects:
        }
        for (const key of Object.keys(node)) {
            traverseAndRecolor(node[key]);
        }
    }
}

// Start recursive recolor on the JSON structure
traverseAndRecolor(obj);

console.log(`Recolored ${count} solid color nodes!`);

fs.writeFileSync(outfile, JSON.stringify(obj));
