# Instructions for Claude

**Before doing any work, read `/docs/` first.**

Key documents:

**Theory** (read in order — problem → journey → mechanism → content):
- `docs/theory/01_CREDENCE_PROBLEM.md` - Why education is hard to sell
- `docs/theory/02_CUSTOMER_JOURNEY.md` - Parent + student funnel design
- `docs/theory/03_VALIDATION_LOOP.md` - Handling friction/hesitation
- `docs/theory/04_CONTENT_DERIVATION.md` - Deriving messaging from text analysis

**Technical:**
- `docs/technical/SITE_ARCHITECTURE.md` - URL structure for both funnels
- `docs/technical/DESIGN_SYSTEM.md` - CSS variables, components, visual standards
- `docs/technical/BUILD_SYSTEM.md` - Build scripts, templates, partial injection
- `docs/technical/UX_PROCESS.md` - Page development checklist + journey mapping
- `docs/technical/GUIDE_TEMPLATE_SPEC.md` - How analysis guide pages work
- `docs/technical/GUIDE_EXTRACTION_CHECKLIST.md` - Creating new guides from kernels

**Operational** (at docs root):
- `DEV_GUIDE_Building_Prototypes_v2_0.md` - Core dev methodology
- `RALPH_Readiness_Assessment_v3_1.md` - Automation readiness
- `P_GTM_Partnership_v3_0.md` - Partnership strategy
- `FRAMEWORK_Scientific_Relational_Pedagogy_v1_0.md` - Pedagogy IP

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
├── /data/parent-guides/    # JSON data for parent curriculum guides
├── build-parent-guides.js  # Generates parent curriculum pages
├── /curriculum/            # Generated parent guide pages
│
├── /data/video-scenes/     # JSON data for video scene pages
├── build-video-scenes.js   # Generates video scene HTML
├── /studio/                # Video Studio (animation tool)
│   ├── /assets/            # Images for video scenes
│   ├── /scenes/            # Generated scene pages (DO NOT edit)
│   ├── /scripts/           # Video specs and voiceover scripts
│   ├── script.js           # Shared animation controller
│   └── styles.css          # Shared studio styles
│
├── /components/            # Shared JS/CSS
├── /guides/                # Generated guide pages
├── /docs/                  # Methodology (READ FIRST)
│   ├── /theory/            # Why: credence problem → journey → loop → derivation
│   ├── /technical/         # How: site arch, design system, build, UX process, guides
│   └── /_archive/          # Superseded strategy docs (reference only)
```

## Workflow

1. **Main pages**: Edit `/src/templates/`, run `node build.js`
2. **Guide pages**: Edit `/templates/`, run `python generate_site.py`
3. **Parent curriculum guides**:
   - **Content changes**: Edit `/data/parent-guides/*.json`
   - **Layout changes**: Edit `/src/templates/_parent-guide-template.html`
   - Run `node build-parent-guides.js`
   - Output: `/curriculum/[slug]/index.html` (auto-generated, DO NOT edit)
4. **Config changes**: Edit `site-config.json`, rebuild affected pages
5. **Video scenes**:
   - **Content changes**: Edit `/data/video-scenes/*.json`
   - **Layout changes**: Edit `/src/templates/_video-scene-template.html`
   - Run `node build-video-scenes.js`
   - Output: `/studio/scenes/[slug].html` (auto-generated, DO NOT edit)

### Parent Curriculum Guide Pipeline

**Source of Truth**: JSON files in `/data/parent-guides/`

```
/data/parent-guides/*.json  →  build-parent-guides.js  →  /curriculum/*/index.html
                   ↓                                            ↑
    _parent-guide-template.html ──────────────────────────────┘
    (single template for all guides)
```

**To add a new guide:**
1. Create `data/parent-guides/[text-slug].json` with curriculum data
2. Run `node build-parent-guides.js`
3. Output appears at `/curriculum/[text-slug]/index.html`

**Legacy files (DO NOT USE):**
- `/src/templates/curriculum_*.html` - Old approach, unmigrated guides
- All content should be in JSON format going forward

### Video Scene Pipeline

**Source of Truth**: JSON files in `/data/video-scenes/`

```
/data/video-scenes/*.json  →  build-video-scenes.js  →  /studio/scenes/*.html
                   ↓                                            ↑
    _video-scene-template.html ─────────────────────────────────┘
    (single template for all scenes)
```

**To add a new video scene:**
1. Create `data/video-scenes/[slug].json` with scene data
2. Add required assets (cover image, etc.) to `/studio/assets/`
3. Run `node build-video-scenes.js`
4. Output appears at `/studio/scenes/[slug].html`

**Legacy files (hand-built, kept for reference):**
- `studio/outsiders-scene.html` - Original hand-built scene
- `studio/annotation-giver.html` - Annotation format (not yet templated)

## Dev Guidelines (Added Jan 27, 2026)

### 1. Source of Truth
- **Root HTML files** (`index.html`, `course.html`, `progress.html`) are **READ-ONLY ARTIFACTS** generated by the build system.
- **NEVER** edit root files directly.
- **ALWAYS** edit `src/templates/` or configuration.
- **Incident**: On Jan 27, `progress.html` was manually updated in root but not in templates, causing `build.js` to overwrite the new design with the old one.

### 2. Measure First Protocol
- Before running destructive commands (like `node build.js`), **CHECK THE DIFF**.
- Compare the template against the live root file to ensure you aren't about to wipe out uncaptured progress.
- Reference: `docs/DEV_GUIDE_Building_Prototypes_v2_0.md`, Section 4.2 ("Measure First").

### 3. R/P Split (Reasoning vs Precision)
- **Problem**: LLMs are good at reasoning ("why this design works") but bad at precision ("copying 500 lines exactly").
- **Solution**: Use code for precision tasks (moving files, matching strings). Use Claude for reasoning.
- Reference: `docs/DEV_GUIDE_Building_Prototypes_v2_0.md`, Part 2.
