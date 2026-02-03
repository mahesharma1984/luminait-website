# DEV GUIDE ADDENDUM: Brand Asset Pipeline

Version: 1.0
Date: February 2026
Purpose: Methodology for creating vector brand assets from source images
Complements: DEV_GUIDE Building Prototypes v2.0

---

## OVERVIEW

This guide covers the transformation pipeline for brand assets:

```
+-------------------------------------------------------------+
| SOURCE -> VECTOR -> COMPOSITE -> ANIMATE                   |
|                                                             |
| Raster Image                                                 |
|     v                                                       |
| Color Separation (if multi-color)                           |
|     v                                                       |
| Bitmap Trace (potrace)                                      |
|     v                                                       |
| SVG with Paths                                              |
|     v                                                       |
| Composite (combine elements)                                |
|     v                                                       |
| Skeletonize (if animating)                                  |
|     v                                                       |
| Stroke Animation                                            |
+-------------------------------------------------------------+
```

Use this guide when:
- Converting logo/mark from PNG/JPG to SVG
- Creating lockups (logo + text combinations)
- Building writing/drawing animations
- Need vector assets from raster sources

---

## PART 0: COMPUTATIONAL MOTION DESIGN (LOGO ANIMATION)

Goal: Avoid thrashing by turning motion design into a repeatable, testable process.

### 0.1 Define the job (one job only)
Choose one primary job for the animation:
- Identity moment (brand reveal)
- Guidance (draw attention)
- Feedback (confirm action)

If the job is unclear, stop and define it before building.

### 0.2 Turn intent into constraints
Translate the job into constraints you can test:
- Duration (ms)
- Max strokes (count)
- Max complexity (path count, points)
- Placement (hero, nav, loader, etc.)
- Readability checkpoint (e.g., 60% progress)

### 0.3 Define a motion language
Pick 3-5 primitives and commit to them:
- draw (stroke-dasharray)
- reveal (opacity)
- follow (offset-path or JS point tracking)
- scale-in
- blur-out

Keep the primitive set small so iterations are comparable.

### 0.4 Prototype in low-fidelity motion
Start with:
- Single color
- Single path
- No gradients, particles, or extra effects

Validate timing and sequencing first. Add polish only after timing is locked.

### 0.5 Generate candidates programmatically
Vary one parameter per batch. Example batches:
- Duration: 1200 / 1400 / 1600 ms
- Stroke width: 2 / 3 / 4
- Easing: linear / ease-out / custom bezier

### 0.6 Score candidates by criteria
Define a simple scoring rubric:
- Recognizable by 0.6s
- Legible at 80% progress
- Balanced when paused

Pick the best by criteria, not vibes.

### 0.7 Lock the motion spec
Freeze the winner in a small manifest so every asset uses the same parameters.

Example motion spec (YAML):
```
logo_animation:
  path: brand/animation/logotype_skeleton.svg
  duration_ms: 1400
  easing: cubic-bezier(0.2, 0.6, 0.2, 1)
  stroke_width: 3.2
  stroke_cap: round
  stroke_join: round
  spark: true
  spark_size: 6
```

---

## PART 1: CORE PRINCIPLES

### 1.1 SVG as Source of Truth

Raster formats (PNG, JPG) are outputs, not sources. SVG is the authoritative format.

Wrong:
- Edit PNG exports directly
- Store multiple PNG sizes
- Hand-edit generated PNGs

Right:
- Edit SVG source, regenerate PNGs
- Store one SVG, export at any size
- Regenerate from scripts

Why: Vectors scale infinitely. Edits propagate cleanly. Single source prevents drift.

### 1.2 The Representation Problem

Images exist in different representations. Each transformation has trade-offs.

```
FILLED SHAPE          STROKE PATH           CENTERLINE
(what you see)        (outline)             (skeleton)

   ########              +----+               ----
   ########              |    |               ----
   ########              +----+

Good for:             Good for:              Good for:
- Display             - Scaling              - Animation
- Print               - Outlining            - Writing effect
- Export              - Color fill           - Path following

Bad for:              Bad for:               Bad for:
- Animation           - Writing animation    - Display (too thin)
- Path tracing        - Stroke reveal        - Print
```

Key insight: A filled shape cannot be directly animated as a writing effect. You need the centerline (skeleton) to trace.

### 1.3 Precision Tasks Belong to Code

Applying the R/P split from DEV_GUIDE:

Task: "What font style feels right?" -> Reasoning -> Human/Claude
Task: "Trace this bitmap to vectors" -> Precision -> Code (potrace)
Task: "How should elements be composed?" -> Reasoning -> Claude
Task: "Extract exact path coordinates" -> Precision -> Code
Task: "What animation timing feels good?" -> Reasoning -> Human/Claude
Task: "Calculate path length" -> Precision -> Code (JS)

Never ask Claude to hand-write SVG bezier curves by looking at an image. This is a precision task that will fail.

### 1.4 Transformation Preserves Intent, Not Pixels

Each step in the pipeline interprets the previous output. Perfect fidelity is impossible and unnecessary.

```
Original PNG (1000x1000, 24-bit color)
    v Color separation
Mask PNGs (1000x1000, 1-bit)     <- Some edge detail lost
    v Potrace
SVG paths (resolution-independent) <- Curves smoothed
    v Skeletonize
Centerline (1px conceptual width)  <- Stroke weight lost
```

Accept this. The goal is usable assets, not pixel-perfect reproduction. If you need pixel-perfect, use the original raster.

---

## PART 2: THE TRANSFORMATION PIPELINE

### 2.1 Stage 1: Source Acquisition

Input: Raster image (PNG, JPG) or design tool file
Output: Clean PNG with transparent or solid background

Options:

| Source | Method | Notes |
|--------|--------|-------|
| Figma design | Export as SVG | Best if available - skip to Stage 3 |
| Figma design | Export as PNG | Use if SVG export has issues |
| Existing PNG | Use directly | Ensure sufficient resolution (>= 512px) |
| Photo/scan | Clean up first | Remove artifacts, adjust contrast |

Quality checklist:
- [ ] Resolution >= 512px on shortest edge
- [ ] Clean edges (no JPEG artifacts)
- [ ] Solid colors (no gradients in source - add later)
- [ ] Background is removable (solid color or transparent)

### 2.2 Stage 2: Color Separation

Input: Multi-color PNG
Output: Separate single-color masks

Why: Potrace traces black/white images. Multi-color images need separation.

Method (Python/OpenCV):

```python
import cv2
import numpy as np

img = cv2.imread('source.png')
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Define color ranges for each element
# Example: Extract blue (hue 90-130)
lower_blue = np.array([90, 100, 100])
upper_blue = np.array([130, 255, 255])
blue_mask = cv2.inRange(hsv, lower_blue, upper_blue)

# Example: Extract gray (low saturation, mid value)
lower_gray = np.array([0, 0, 50])
upper_gray = np.array([180, 80, 120])
gray_mask = cv2.inRange(hsv, lower_gray, upper_gray)

# Save masks
cv2.imwrite('blue_layer.bmp', blue_mask)
cv2.imwrite('gray_layer.bmp', gray_mask)
```

Output: One BMP per color layer, white = shape, black = background

### 2.3 Stage 3: Bitmap Tracing

Input: Single-color BMP masks
Output: SVG with vector paths

Tool: potrace (installed via `apt install potrace`)

Command:
```bash
potrace -s --flat -o output.svg input.bmp
```

Flags:
- `-s` - SVG output
- `--flat` - No nested groups
- `-t N` - Suppress speckles smaller than N pixels
- `-a N` - Corner threshold (0 = sharp, 1.34 = smooth)

Understanding potrace output:

```xml
<svg viewBox="0 0 1024 1024">
  <g transform="translate(0,1024) scale(0.1,-0.1)">
    <path d="M6909 7340 c-24 -17..."/>
  </g>
</svg>
```

The transform flips Y-axis and scales. Paths use relative coordinates.

### 2.4 Stage 4: SVG Assembly

Input: Traced SVG paths (one per color)
Output: Combined SVG with proper styling

Pattern:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 1024 1024"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <!-- Define gradients, filters -->
    <linearGradient id="blue-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#4A90D9"/>
      <stop offset="100%" stop-color="#1A56A8"/>
    </linearGradient>
  </defs>

  <!-- Layer 1: Gray elements -->
  <g id="layer-gray" fill="url(#gray-gradient)"
     transform="translate(0,1024) scale(0.1,-0.1)">
    <path d="[path from potrace]"/>
  </g>

  <!-- Layer 2: Blue elements -->
  <g id="layer-blue" fill="url(#blue-gradient)"
     transform="translate(0,1024) scale(0.1,-0.1)">
    <path d="[path from potrace]"/>
  </g>

</svg>
```

Key decisions:
- Layer order (what's on top?)
- Fill colors or gradients
- Stroke vs fill
- ViewBox cropping (center the content)

### 2.5 Stage 5: Compositing

Input: Multiple SVG assets (logo, text, etc.)
Output: Combined lockup

Two approaches:

A. Raster compositing (simpler):
```python
from PIL import Image
import cairosvg

# Render each SVG to PNG
cairosvg.svg2png(url='logo.svg', write_to='logo.png', output_width=100)
cairosvg.svg2png(url='text.svg', write_to='text.png', output_width=300)

# Composite with PIL
canvas = Image.new('RGBA', (400, 100), (0,0,0,0))
canvas.paste(logo, (0, 10), logo)
canvas.paste(text, (90, 0), text)
canvas.save('lockup.png')
```

B. SVG compositing (preserves vectors):
```xml
<svg viewBox="0 0 400 100">
  <!-- Embed logo with transform -->
  <g transform="translate(0, 10) scale(0.1)">
    [logo paths]
  </g>

  <!-- Embed text with transform -->
  <g transform="translate(90, 0)">
    [text paths]
  </g>
</svg>
```

When to use which:
- Raster: Quick iteration, final output is PNG anyway
- Vector: Need scalable output, further editing

---

## PART 3: ANIMATION PREPARATION

### 3.1 The Centerline Problem

Filled shapes can't be animated as writing. You need the path the pen would follow.

```
FILLED TEXT              CENTERLINE

  ######                    --+
  ##                        |
  ####                      --+
  ##                        |
  ######                    --+

Can't animate stroke     Can animate stroke
```

### 3.2 Skeletonization

Input: Filled shape (SVG or PNG)
Output: Single-pixel-wide centerline

Method (Python/scikit-image):

```python
from PIL import Image
import numpy as np
from skimage import morphology

# Load and binarize
img = np.array(Image.open('text.png').convert('L'))
binary = img < 128  # True where text is

# Skeletonize
skeleton = morphology.skeletonize(binary)

# Save
Image.fromarray((skeleton * 255).astype(np.uint8)).save('skeleton.png')
```

Then trace the skeleton:
```bash
potrace -s skeleton.bmp -o skeleton.svg
```

### 3.3 Path Ordering Problem

Skeletonization produces unordered pixels. For animation, you need a single continuous path with correct drawing order.

Options:

| Approach | Complexity | Quality |
|----------|------------|---------|
| Accept disconnected paths | Low | Spark jumps between strokes |
| Manual path in Figma | Medium | Best quality, human effort |
| Graph traversal algorithm | High | Automated but complex |

Recommendation: For high-quality writing animation, create the stroke path manually in Figma. It's faster than debugging automated solutions.

### 3.4 Stroke Animation Technique

SVG stroke-dasharray method:

```html
<svg viewBox="0 0 400 100">
  <style>
    .write-path {
      stroke-dasharray: 1000;  /* Total path length */
      stroke-dashoffset: 1000; /* Start hidden */
      animation: write 3s ease forwards;
    }

    @keyframes write {
      to { stroke-dashoffset: 0; }
    }
  </style>

  <path class="write-path"
        d="[centerline path]"
        fill="none"
        stroke="#1A56A8"
        stroke-width="3"/>
</svg>
```

Get path length with JavaScript:
```javascript
const path = document.querySelector('path');
const length = path.getTotalLength();
console.log(length); // Use this for stroke-dasharray
```

### 3.5 Spark/Particle Following Path

CSS offset-path method:
```css
.spark {
  offset-path: path('[same path as text]');
  offset-distance: 0%;
  animation: follow 3s ease forwards;
}

@keyframes follow {
  to { offset-distance: 100%; }
}
```

JavaScript method (more control):
```javascript
const path = document.querySelector('#text-path');
const spark = document.querySelector('#spark');

function animate(progress) {
  const length = path.getTotalLength();
  const point = path.getPointAtLength(length * progress);
  spark.style.transform = `translate(${point.x}px, ${point.y}px)`;
}
```

---

## PART 4: DECISION FRAMEWORK

### 4.1 Source Format Decision

```
Do you have the original design file (Figma, Illustrator)?
  YES -> Export as SVG directly (skip bitmap tracing)
  NO  -> Continue to bitmap pipeline

Is the source image clean (solid colors, crisp edges)?
  YES -> Proceed with potrace
  NO  -> Clean up first or get better source

Is the image multi-colored?
  YES -> Color separation first
  NO  -> Trace directly
```

### 4.2 Animation Decision

```
Do you need a writing animation?
  NO  -> Use filled shapes, animate opacity/position/scale
  YES -> Continue

Do you have the stroke path already?
  YES -> Use stroke-dasharray animation
  NO  -> Continue

Is the text simple (few strokes)?
  YES -> Draw path manually in Figma
  NO  -> Skeletonize, accept quality trade-offs
```

### 4.3 Tool Selection

| Task | Tool | Why |
|------|------|-----|
| Bitmap -> Vector | potrace | Industry standard, handles complex shapes |
| Color separation | OpenCV/Python | Precise HSV control |
| Skeletonization | scikit-image | Reliable morphology operations |
| SVG rendering | cairosvg | Python integration, accurate |
| Raster compositing | PIL/Pillow | Simple, well-documented |
| Path creation | Figma | Visual, precise, human-controlled |

---

## PART 5: FILE STRUCTURE

```
brand/
├── source/                    # Authoritative vector sources
│   ├── logo-mark.svg          # Primary logo
│   └── logotype_cursive.svg   # Logotype (vector)
├── exports/                   # Generated outputs (never edit)
│   └── logo/
│       ├── logo-mark_32.png
│       ├── logo-mark_128.png
│       ├── logo-mark_512.png
│       └── logo-lockup.png
├── animation/                 # Animation assets
│   ├── logotype_skeleton.svg  # Centerline path
│   ├── logo_animation.html    # Web animation
│   └── logo_animation.mp4     # Video export
├── working/                   # Intermediate files (can delete)
│   └── logotype_cursive.png   # Raster input used for tracing
├── scripts/
│   ├── export-logos.py
│   └── trace-bitmap.sh
├── manifest.json              # Export configuration
└── DEV_GUIDE_ADDENDUM_Brand_Asset_Pipeline.md
```

Standardization rules:
- All brand assets live under `/brand`
- Do not store brand assets under `/images/branding`
- SVGs in `brand/source` are the source of truth
- Rasters go to `brand/working` (inputs or intermediates)
- Animation-specific paths live in `brand/animation`

---

## PART 6: COMMON PATTERNS

### 6.1 PNG Logo -> SVG

```bash
# 1. If multi-color, separate in Python first
python3 separate_colors.py input.png

# 2. Trace each layer
potrace -s --flat -o layer1.svg layer1.bmp
potrace -s --flat -o layer2.svg layer2.bmp

# 3. Combine in Python/manually
python3 combine_svg.py layer1.svg layer2.svg -o final.svg
```

### 6.2 Static Lockup

```python
# 1. Render SVG elements to PNG
cairosvg.svg2png(url='logo.svg', write_to='logo.png', output_width=100)

# 2. Handle text (may need color conversion)
# ... process text image ...

# 3. Composite
canvas = Image.new('RGBA', (width, height), (0,0,0,0))
canvas.paste(logo, position, logo)
canvas.paste(text, position, text)
canvas.save('lockup.png')
```

### 6.3 Writing Animation

```
1. Get/create centerline path (Figma or skeletonize)
2. Export as SVG with stroke (not fill)
3. Measure path length: path.getTotalLength()
4. Apply stroke-dasharray animation
5. Add spark element with offset-path
6. Export to video if needed (Puppeteer -> FFmpeg)
```

---

## PART 7: TROUBLESHOOTING

Potrace output is inverted
- Potrace traces black by default
- Invert your mask: `cv2.bitwise_not(mask)`

SVG appears tiny or offset
- Check viewBox vs actual content bounds
- Potrace uses a coordinate system that may need adjustment
- Use `translate()` and `scale()` in SVG transforms

Colors don't separate cleanly
- Source image has gradients or anti-aliasing
- Adjust HSV thresholds
- Or: Accept some overlap and layer with appropriate z-order

Skeleton has breaks
- Thin areas in original get disconnected
- Try dilating before skeletonizing: `morphology.dilation(binary)`
- Or: Accept breaks, handle in animation

Animation stutters
- Path too complex (too many points)
- Simplify path: reduce points in Figma or use potrace `-t` flag
- Or: Use JavaScript animation with requestAnimationFrame

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 2026 | Initial methodology |

---

END OF GUIDE
