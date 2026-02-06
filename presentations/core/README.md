# luminAIT Presentation Core

**Shared infrastructure for all luminAIT presentation templates**

This folder contains the shared scripts and assets used by all presentation templates to eliminate code duplication and centralize maintenance.

---

## Structure

```
/presentation-core/
├── script.js            # Shared navigation logic (used by all templates)
├── generate_pdf.js      # Configurable PDF generator
├── build-all.js         # Build script for all presentations
├── assets/              # Shared brand assets (future)
└── README.md            # This file
```

---

## Usage

### Generate PDF for a Single Template

From within any template folder (`/presentation/`, `/pitch-a/`, `/pitch-b/`):

```bash
node ../presentation-core/generate_pdf.js
```

This will:
1. Read the `config.json` in that folder
2. Generate a PDF using the configured HTML file
3. Output the PDF with the configured filename

### Generate PDFs for All Templates

From the `presentation-core` folder or project root:

```bash
node presentation-core/build-all.js
```

This will:
1. Build PDFs for all three presentation templates
2. Show progress for each build
3. Display summary of successes/failures

---

## Template Configuration

Each presentation template folder should have a `config.json` file:

```json
{
  "templateName": "Partnership Economics Overview",
  "htmlFile": "index.html",
  "pdfOutput": "presentation.pdf",
  "slideCount": 13,
  "designSystem": "vibrant-blue",
  "description": "Comprehensive B2B partnership pitch"
}
```

**Fields:**
- `templateName` - Human-readable name for the template
- `htmlFile` - HTML file to convert (e.g., "index.html" or "pitch-b.html")
- `pdfOutput` - Output PDF filename
- `slideCount` - Number of slides (for documentation)
- `designSystem` - Design system identifier (for documentation)
- `description` - Brief description of the template purpose

---

## Integration with Templates

### HTML Files

Templates should reference the shared script:

```html
<script src="../presentation-core/script.js"></script>
```

Instead of maintaining separate `script.js` files in each template folder.

### Navigation Controls Required

The shared script expects these elements in the HTML:

```html
<div class="controls">
    <button id="prevBtn" class="control-btn" aria-label="Previous Slide">
        <!-- Previous icon -->
    </button>
    <div>
        <span id="currentSlideNum">1</span> / <span id="totalSlidesNum">--</span>
    </div>
    <button id="nextBtn" class="control-btn" aria-label="Next Slide">
        <!-- Next icon -->
    </button>
</div>
```

### Slides Structure

Slides must have the `.slide` class and the first slide should have `.active`:

```html
<div class="slide active">
    <!-- Slide 1 content -->
</div>
<div class="slide">
    <!-- Slide 2 content -->
</div>
```

---

## Shared Assets (Future)

Brand assets like logos can be placed in `/presentation-core/assets/` and referenced from templates:

```html
<img src="../presentation-core/assets/logotype_trimmed.svg" alt="luminAIT">
```

---

## Keyboard Shortcuts

The shared script provides these keyboard shortcuts:

- **→** (Right Arrow) - Next slide
- **Space** - Next slide
- **Enter** - Next slide
- **←** (Left Arrow) - Previous slide

---

## Requirements

- **Node.js** - To run the build scripts
- **Puppeteer** - For PDF generation
  ```bash
  npm install puppeteer
  ```

---

## Benefits of Shared Core

✓ **Single source of truth** - Navigation logic maintained in one place
✓ **DRY principle** - No duplicate code across templates
✓ **Easy updates** - Change once, affects all templates
✓ **Consistent behavior** - All presentations work the same way
✓ **Reduced maintenance** - Fewer files to update
✓ **Build automation** - Generate all PDFs with one command

---

## Migration Checklist

To migrate a template to use the shared core:

- [ ] Create `config.json` in template folder
- [ ] Update HTML to reference `../presentation-core/script.js`
- [ ] Remove local `script.js` file
- [ ] Remove local `generate_pdf.js` file
- [ ] Test navigation still works
- [ ] Test PDF generation works
- [ ] Verify keyboard shortcuts work

---

## Troubleshooting

### PDF Generation Fails

**Check:** Puppeteer is installed
```bash
npm install puppeteer
```

**Check:** Running from the template directory
```bash
cd /path/to/template
node ../presentation-core/generate_pdf.js
```

**Check:** `config.json` exists and is valid JSON

### Navigation Doesn't Work

**Check:** Script is properly referenced in HTML
```html
<script src="../presentation-core/script.js"></script>
```

**Check:** Required DOM elements exist (`prevBtn`, `nextBtn`, etc.)

**Check:** Browser console for JavaScript errors

---

## Version History

- **v1.0** (2026-02-05): Initial shared core infrastructure created

---

## Related Documentation

- **Main Documentation:** `/docs/PRESENTATION_SYSTEM.md` - Comprehensive guide
- **Template A:** `/presentation/` - Partnership Economics Overview
- **Template B:** `/pitch-a/` - Teaching Infrastructure
- **Template C:** `/pitch-b/` - How luminAIT Scales Teaching
