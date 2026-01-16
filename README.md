# LuminAIT Landing Page

Marketing landing page for LuminAIT Learning - Analytical Writing Course.

## Pages

- `index.html` - Homepage (site map linking to all sections)
- `course.html` - Course details, pricing, what's included
- `syllabus.html` - 10-week curriculum breakdown
- `sample.html` - Sample worksheet
- `progress.html` - Progress reports explanation
- `results.html` - Results and outcomes

## Build System

The site uses a simple build system to keep content synchronized across pages. All shared content (navigation, footers, page summaries) is defined in a single config file.

### How It Works

```
site-config.json     # Single source of truth for all page data
src/templates/       # Page templates with placeholders
src/partials/        # Shared components (nav, footer, scripts)
build.js             # Build script that generates HTML
```

### Running the Build

**After making changes to any page content**, run:

```bash
node build.js
```

This regenerates all HTML files from the templates.

### What's Synchronized

- **Navigation links** - Automatically generated on all pages with correct active states
- **Footer links** - Consistent across all pages
- **Homepage cards** - Generated from page descriptions in config
- **Course pricing/stats** - Updated from a single location
- **Results stats** - Updated from a single location

### Making Changes

1. **To update page summaries on homepage**: Edit `site-config.json` → run `node build.js`
2. **To update navigation/footer**: Edit `src/partials/` → run `node build.js`
3. **To update page-specific content**: Edit `src/templates/<page>.html` → run `node build.js`
4. **To update pricing/stats**: Edit `site-config.json` → run `node build.js`

### Key Files

| File | Purpose |
|------|---------|
| `site-config.json` | All page metadata, pricing, results stats |
| `src/partials/nav.html` | Navigation template |
| `src/partials/footer-simple.html` | Simple footer (most pages) |
| `src/partials/footer-course.html` | Detailed footer (course page) |
| `src/partials/scripts.html` | Shared JavaScript |

## Deployment

Connected to Netlify. Push to `main` to deploy.

## Local Preview

Open any `.html` file in a browser.
