# Instructions for Claude

**Before doing any work, read `/docs/` first.**

Key documents:
- `DEV_GUIDE_Building_Prototypes_v2_0.md` - Core methodology
- `GUIDE_TEMPLATE_SPEC.md` - How guide pages work
- `GUIDE_EXTRACTION_CHECKLIST.md` - Creating new guides
- `FUNNEL_ARCHITECTURE_v2_0.md` - Two-funnel strategy (student + parent)
- `SITE_ARCHITECTURE_v2_0.md` - URL structure for both funnels
- `METHODOLOGY_DEMO_SPEC_v1_0.md` - Parent-facing demo page spec

## Project Structure

```
/                           # Root HTML files (deployed)
├── index.html              # Homepage
├── course.html             # Course details
├── ...
│
├── site-config.json        # Shared config (SEO, contact, pricing)
│
├── /src/templates/         # Templates for build.js
├── build.js                # Generates main pages from templates
│
├── /templates/             # Templates for generate_site.py
├── generate_site.py        # Generates analysis guide pages
│
├── /components/            # Shared JS/CSS
├── /guides/                # Generated guide pages
├── /docs/                  # Methodology (READ FIRST)
```

## Workflow

1. **Main pages**: Edit `/src/templates/`, run `node build.js`
2. **Guide pages**: Edit `/templates/`, run `python generate_site.py`
3. **Config changes**: Edit `site-config.json`, rebuild affected pages
