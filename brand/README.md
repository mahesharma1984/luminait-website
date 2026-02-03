# LuminAIT Brand Asset System

**Version:** 1.0.0
**Last Updated:** February 3, 2026

Single source of truth for all LuminAIT brand assets - logos, templates, animations, and export specifications.

## Philosophy

- **SVG-first**: All assets derive from vector SVG sources
- **Manifest-driven**: `manifest.json` defines all sizes, placements, and export rules
- **Script-generated**: Never manually create PNGs or templates - regenerate from source
- **Portable**: Entire `brand/` folder can be copied to other repos and used without modification

---

## Directory Structure

```
brand/
├── README.md                    # This file
├── manifest.json                # Single source of truth for all export rules
│
├── source/                      # SVG source files (DO NOT edit exports - edit these!)
│   ├── logo-mark.svg            # LuminAIT mark (icon only)
│   └── logotype_cursive.svg     # Full logotype with cursive wordmark
│
├── exports/                     # Generated assets (DO NOT edit - regenerate from source)
│   └── logo/
│       ├── logo-mark_32.png
│       ├── logo-mark_64.png
│       ├── logo-mark_128.png
│       ├── logo-mark_256.png
│       ├── logo-mark_512.png
│       ├── logo-mark_1024.png
│       └── logo-lockup-standard.png
│
├── templates/                   # Asset templates for social/docs (coming soon)
│   ├── social/                  # Instagram, LinkedIn, etc.
│   ├── docs/                    # Worksheets, report cards
│   └── video/                   # Video overlays, logo bugs
│
├── animation/                   # Logo animation files
│   ├── logo_animation.svg       # Animated SVG
│   ├── logo_animation.mp4       # Exported video
│   └── build_svg.js             # Animation build script
│
├── scripts/                     # Build scripts
│   └── export-logos.py          # Generate PNG exports from SVG
│
├── prompts/                     # AI generation prompts (for Gemini/background plates)
└── working/                     # Temporary files (not committed)
```

---

## Quick Start

### Regenerate All Logo Exports

```bash
cd brand/
python3 scripts/export-logos.py
```

This reads `manifest.json` and generates all PNG sizes from SVG sources.

### Add a New Export Size

1. Edit `manifest.json` and add the size to the `sizes` array:
   ```json
   "sizes": [32, 64, 128, 256, 512, 1024, 2048]
   ```
2. Run the export script:
   ```bash
   python3 scripts/export-logos.py
   ```

### Update Logo Design

1. Edit the source SVG in `source/logo-mark.svg`
2. Regenerate all exports:
   ```bash
   python3 scripts/export-logos.py
   ```

All PNGs will be updated automatically.

---

## Manifest Structure

The `manifest.json` defines:

1. **Brand Colors**: Primary and background colors
2. **Logo Exports**: Which SVGs to export, at what sizes, in what formats
3. **Template Specs**: Social media and document template dimensions and logo placement
4. **Fonts**: Typography specifications

### Example Manifest Entry

```json
"logos": {
  "mark": {
    "source": "source/logo-mark.svg",
    "exports": {
      "sizes": [32, 64, 128, 256, 512, 1024],
      "formats": ["png"],
      "output": "exports/logo/logo-mark_{size}.{format}"
    }
  }
}
```

---

## Brand Guidelines

### Logo Usage

| Asset | Use Case | Minimum Size |
|-------|----------|--------------|
| `logo-mark_*.png` | App icons, favicons, social avatars | 32x32px |
| `logo-lockup-standard.png` | Headers, marketing, print | 256px width |
| `logotype_cursive.svg` | Animated logo, hero sections | 512px width |

### Safe Zones

- **Minimum clear space**: 0.5x logo height on all sides
- **Never place logo over busy backgrounds** without ensuring contrast
- **Use templates** in `templates/` for consistent placement

### Color Palette

**Primary Blue:**
- Light: `#4A90D9`
- Default: `#2563EB` ← Use this for most cases
- Dark: `#1A56A8`

**Neutral Gray:**
- Light: `#4B5563`
- Default: `#374151`
- Dark: `#1F2937`

---

## Animation System

The `/animation/` folder contains:

- **Source SVG**: `logo_animation.svg` - animated logo with CSS keyframes
- **Video Export**: `logo_animation.mp4` - video version for embedding
- **Build Scripts**: Convert SVG to video formats

To regenerate animation:

```bash
cd animation/
node build_svg.js
```

See `animation/README.md` for details (if exists).

---

## Templates (Coming Soon)

### Social Media Templates

- Instagram Square (1080x1080)
- Instagram Portrait (1080x1350)
- LinkedIn Post (1200x627)

All templates include:
- Logo placement from manifest
- Safe zones for text
- Background layers for AI-generated content

### Document Templates

- Worksheet (Letter size: 612x792pt)
- Report Card (Letter size: 612x792pt)

---

## Adding Brand to Another Repo

To reuse this brand system in another project (e.g., report card generator):

```bash
# Copy entire brand folder
cp -r luminait-website/brand/ other-project/brand/

# Install dependencies (if using export script)
cd other-project/brand/
pip install cairosvg

# Generate assets
python3 scripts/export-logos.py
```

All exports will regenerate from the SVG sources.

---

## Scripts Reference

### `scripts/export-logos.py`

**Purpose**: Export SVG logos to PNG at multiple sizes
**Dependencies**: `cairosvg` (install via `pip install cairosvg`)
**Usage**: `python3 scripts/export-logos.py`

Reads `manifest.json` and generates all PNG exports to `exports/logo/`.

### `animation/build_svg.js` (if exists)

**Purpose**: Build animated SVG and export to video formats
**Dependencies**: Node.js, `puppeteer` (for video capture)
**Usage**: `node animation/build_svg.js`

---

## Best Practices

### DO ✓

- Always edit SVG sources in `source/`, never edit exports
- Use the export script to generate PNGs
- Add new sizes/formats to `manifest.json`, then regenerate
- Use templates for consistent logo placement

### DON'T ✗

- Don't manually create PNG files - use the export script
- Don't edit files in `exports/` directly (they get overwritten)
- Don't hard-code logo sizes - use manifest specs
- Don't place logos without checking safe zones

---

## Requirements

**For logo export script:**
- Python 3.7+
- `cairosvg` library: `pip install cairosvg`

**For animation system:**
- Node.js 16+
- Dependencies in `animation/package.json`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Feb 3, 2026 | Initial brand system with SVG sources, manifest, and export script |

---

## Questions?

For brand guidelines or asset requests, contact: mahesh@luminait.app
