# BUILD SYSTEM DOCUMENTATION

**Date:** January 27, 2026
**Status:** Active
**Purpose:** Complete reference for the LuminAIT website build system

---

## 1. OVERVIEW

The LuminAIT website uses a template-based build system to generate HTML pages from source templates and data files. This ensures consistency while allowing easy updates.

### Build System Components

```
Build System
├── Templates (source of truth)
│   ├── /src/templates/            Main page templates
│   └── /src/partials/             Shared components (nav, footer)
│
├── Data
│   ├── /data/parent-guides/       Parent guide JSON data
│   └── site-config.json           Shared configuration
│
├── Build Scripts
│   ├── build.js                   Main pages (index, course, progress, etc.)
│   ├── build-parent-guides.js     Curriculum directory guides
│   └── build-homepage-guides.js   Homepage book guides
│
└── Output (generated, DO NOT EDIT)
    ├── /[text-slug]/              Homepage books (8 pages)
    ├── /curriculum/               Additional guides (10 pages + index)
    └── /*.html                    Main pages (index, course, etc.)
```

---

## 2. MAIN PAGES BUILD SYSTEM

### 2.1 Build Script: `build.js`

**Purpose:** Generates main site pages (homepage, course, progress, results, etc.)

**Input:**
- Templates: `/src/templates/*.html`
- Partials: `/src/partials/nav.html`
- Config: `site-config.json`

**Output:**
- Root level: `/index.html`, `/course.html`, `/progress.html`, `/results.html`, etc.

**Run:**
```bash
node build.js
```

**Template Syntax:**
```html
<!-- Include partial -->
{{>nav.html}}

<!-- Use config variable -->
<title>{{site.name}} | {{site.tagline}}</title>
```

### 2.2 Critical Rule: Never Edit Root Files Directly

**❌ WRONG:**
```bash
# Editing generated file
vim index.html
```

**✅ CORRECT:**
```bash
# Edit the source template
vim src/templates/index.html

# Rebuild
node build.js
```

**Why:** Any changes to root HTML files will be **overwritten** the next time `build.js` runs. This was the cause of the Jan 27 incident where design updates were lost.

**Reference:** See `CLAUDE.md` Section "Dev Guidelines" for the "Measure First Protocol."

---

## 3. PARENT GUIDE BUILD SYSTEM

### 3.1 Dual Build System

Parent guides are built using TWO separate scripts that output to different locations:

| Aspect | Homepage Books | Curriculum Directory |
|--------|----------------|----------------------|
| **Build Script** | `build-homepage-guides.js` | `build-parent-guides.js` |
| **Output Location** | `/[text-slug]/` (root) | `/curriculum/[text-slug]/` |
| **Number of Pages** | 8 | 10 + index |
| **Books** | the-giver, macbeth, animal-farm, romeo-and-juliet, to-kill-a-mockingbird, a-christmas-carol, blueback, the-outsiders | dracula, jane-eyre, the-simple-gift, the-white-girl, catching-teller-crow, catherine-called-birdy, convenience-store-woman, his-name-was-walter, my-life-as-an-alphabet, the-curious-incident |
| **Purpose** | Direct parent funnel from homepage | Secondary resource via link |

### 3.2 Build Script: `build-homepage-guides.js`

**Purpose:** Generate parent guide pages for homepage books at root level

**Input:**
- Data: `/data/parent-guides/[slug].json` (only homepage books)
- Template: `/src/templates/_parent-guide-template.html`

**Output:**
- `/the-giver/index.html`
- `/macbeth/index.html`
- `/animal-farm/index.html`
- etc. (8 total)

**Run:**
```bash
node build-homepage-guides.js
```

**What it does:**
1. Reads ONLY homepage book slugs (hardcoded list in script)
2. For each book, loads JSON data from `/data/parent-guides/[slug].json`
3. Merges data with template using placeholder replacement
4. Outputs to `/[slug]/index.html` (root level)
5. Does NOT generate an index page (homepage already has text grid)

### 3.3 Build Script: `build-parent-guides.js`

**Purpose:** Generate parent guide pages for curriculum directory

**Input:**
- Data: `/data/parent-guides/*.json` (all JSON files)
- Template: `/src/templates/_parent-guide-template.html`
- Index Template: `/src/templates/curriculum-index.html`

**Output:**
- `/curriculum/dracula/index.html`
- `/curriculum/jane-eyre/index.html`
- etc. (10 guides)
- `/curriculum/index.html` (index page with text grid)

**Run:**
```bash
node build-parent-guides.js
```

**What it does:**
1. Reads ALL JSON files from `/data/parent-guides/`
2. For each JSON file, generates a guide page in `/curriculum/[slug]/`
3. Generates curriculum index page at `/curriculum/index.html` with text cards

### 3.4 Shared Template: `_parent-guide-template.html`

Both build scripts use the SAME template with placeholder replacement:

**Placeholders:**
- `{{TEXT_TITLE}}` → data.title
- `{{AUTHOR}}` → data.author
- `{{YEAR_LEVEL}}` → data.yearLevel
- `{{PATTERN_NAME}}` → data.pattern
- `{{META_DESCRIPTION}}` → data.metaDescription
- `{{WEEKS_CONTENT}}` → Generated HTML from data.weeks array
- `{{OUTCOMES_LIST}}` → Generated HTML from data.outcomes array

**Design System CSS:**
```html
<link rel="stylesheet" href="/components/base.css">
<link rel="stylesheet" href="/components/page-components.css">
<link rel="stylesheet" href="/components/page-parent-guide.css">
```

---

## 4. JSON DATA FORMAT

### 4.1 Parent Guide JSON Structure

**Location:** `/data/parent-guides/[slug].json`

**Required Fields:**
```json
{
  "slug": "the-giver",
  "title": "The Giver",
  "author": "Lois Lowry",
  "yearLevel": "Years 7-8",
  "pattern": "Dystopian Control",
  "metaDescription": "Parent curriculum guide for The Giver...",
  "techniques": ["Symbolism", "Restricted Narration", "Contrasting Imagery"],
  "outcomes": [
    "Identifying and analysing symbolism",
    "Understanding restricted narration",
    ...
  ],
  "weeks": [
    {
      "week": 1,
      "phase": "foundation",
      "phaseName": "Foundation",
      "title": "Understanding the Text",
      "description": "Building foundational understanding...",
      "topics": [
        "Introduction to The Giver...",
        "Understanding the Community...",
        ...
      ]
    },
    {
      "week": 6,
      "phase": "body",
      "phaseName": "Body Paragraphs",
      "title": "Body Paragraph 1",
      "description": "Deep analysis of Symbolism",
      "topics": [...],
      "technique": {
        "name": "Symbolism",
        "description": "Colors, memories, and emotions..."
      }
    },
    ...
  ]
}
```

**Phase Values:**
- `foundation` (weeks 1-2)
- `analysis` (weeks 3-4)
- `writing` (week 5)
- `body` (weeks 6-8) - includes `technique` object
- `completion` (weeks 9-10)

### 4.2 Adding a New Parent Guide

**Steps:**

1. **Create JSON data file:**
   ```bash
   # Create new file
   touch data/parent-guides/new-book.json

   # Copy structure from existing file
   cp data/parent-guides/the-giver.json data/parent-guides/new-book.json

   # Edit with book-specific content
   vim data/parent-guides/new-book.json
   ```

2. **Choose build location:**
   - For homepage: Add slug to `HOMEPAGE_BOOKS` array in `build-homepage-guides.js`
   - For curriculum: No change needed (automatically included)

3. **Build:**
   ```bash
   # If homepage book
   node build-homepage-guides.js

   # If curriculum book
   node build-parent-guides.js
   ```

4. **Verify output:**
   - Homepage: Check `/[slug]/index.html` exists
   - Curriculum: Check `/curriculum/[slug]/index.html` AND `/curriculum/index.html` updated

5. **Commit:**
   ```bash
   git add data/parent-guides/new-book.json [slug]/
   git commit -m "feat: add parent guide for [Book Title]"
   ```

---

## 5. DESIGN SYSTEM COMPLIANCE

### 5.1 CSS Architecture

All generated pages follow the unified design system:

**Import Order (in templates):**
```html
<!-- 1. Fonts -->
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">

<!-- 2. Base tokens -->
<link rel="stylesheet" href="/components/base.css">

<!-- 3. Shared components -->
<link rel="stylesheet" href="/components/page-components.css">

<!-- 4. Page-specific styles -->
<link rel="stylesheet" href="/components/page-marketing.css">
<!-- OR -->
<link rel="stylesheet" href="/components/page-parent-guide.css">
```

**Never:**
- ❌ Inline `<style>` blocks with hundreds of lines
- ❌ Hardcoded colors (use CSS variables from `base.css`)
- ❌ Duplicate component styles across pages

**Always:**
- ✅ Use design tokens (`var(--primary)`, `var(--space-lg)`)
- ✅ Import component CSS files
- ✅ Keep page-specific overrides minimal

**Reference:** See `docs/DESIGN_SYSTEM.md` for complete specification.

### 5.2 Page Length Benchmark

**Good design-system compliance:**
- Main pages: ~300-400 lines
- Parent guides: ~288 lines

**Poor compliance (old system):**
- Pages with embedded CSS: 600-700 lines

The Jan 27 refactor reduced page sizes by ~60% by moving CSS to component files.

---

## 6. TROUBLESHOOTING

### 6.1 "My changes disappeared after running build.js"

**Problem:** You edited a root-level HTML file directly.

**Solution:**
1. Check `git diff` to see what changed
2. Edit `/src/templates/[filename].html` instead
3. Reapply your changes to the template
4. Run `node build.js` to regenerate
5. Never edit root files again

**Prevention:** Always edit templates, not output files.

### 6.2 "Parent guide page shows old content"

**Problem:** JSON data updated but pages not rebuilt.

**Solution:**
```bash
# For homepage books
node build-homepage-guides.js

# For curriculum directory
node build-parent-guides.js

# Verify output
git diff [slug]/index.html
```

### 6.3 "New book not appearing in curriculum index"

**Problem:** `build-parent-guides.js` needs to run to regenerate index.

**Solution:**
```bash
# Rebuild all curriculum guides + index
node build-parent-guides.js

# Check index was updated
git diff curriculum/index.html
```

### 6.4 "Homepage book not building"

**Problem:** Slug not in `HOMEPAGE_BOOKS` array.

**Solution:**
```javascript
// Edit build-homepage-guides.js
const HOMEPAGE_BOOKS = [
  'the-giver',
  'macbeth',
  // ... add your book slug here
  'new-book'
];
```

---

## 7. WORKFLOW REFERENCE

### 7.1 Daily Development

```bash
# 1. Edit template or data
vim src/templates/index.html
# OR
vim data/parent-guides/the-giver.json

# 2. Rebuild
node build.js                  # Main pages
node build-homepage-guides.js  # Homepage books
node build-parent-guides.js    # Curriculum directory

# 3. Verify changes
open index.html                # Main pages
open the-giver/index.html      # Homepage book
open curriculum/index.html     # Curriculum index

# 4. Commit
git add [files]
git commit -m "description"
git push origin main
```

### 7.2 Adding New Content

**New main page:**
1. Create template: `src/templates/new-page.html`
2. Add to `build.js` page list
3. Run `node build.js`
4. Verify `/new-page.html` created

**New parent guide:**
1. Create JSON: `data/parent-guides/new-book.json`
2. Run appropriate build script
3. Verify output location

**Update navigation:**
1. Edit `src/partials/nav.html`
2. Run `node build.js` (regenerates all pages with new nav)

---

## 8. BUILD SCRIPT REFERENCE

### Complete Build Command List

```bash
# Main site pages (homepage, course, progress, etc.)
node build.js

# Homepage parent guide books (8 pages at root level)
node build-homepage-guides.js

# Curriculum directory guides (10 pages + index in /curriculum/)
node build-parent-guides.js

# Rebuild everything
node build.js && node build-homepage-guides.js && node build-parent-guides.js
```

### When to Run Each Script

| You Changed | Run This Script |
|-------------|-----------------|
| `/src/templates/index.html` | `node build.js` |
| `/src/templates/course.html` | `node build.js` |
| `/src/partials/nav.html` | `node build.js` (updates all main pages) |
| `/data/parent-guides/the-giver.json` | `node build-homepage-guides.js` |
| `/data/parent-guides/dracula.json` | `node build-parent-guides.js` |
| `/src/templates/_parent-guide-template.html` | Both parent guide scripts |
| `/src/templates/curriculum-index.html` | `node build-parent-guides.js` |

---

## 9. MAINTENANCE

### 9.1 Consolidation Considerations

**Future optimization:** Consider consolidating to single parent guide system.

**Current:** Dual system (root + /curriculum/)
- Pros: SEO optimized for homepage books, clean URLs
- Cons: Dual build scripts, split location

**Possible future:** Single `/curriculum/` location for all guides
- Pros: Single build script, unified location
- Cons: Longer URLs for homepage books, SEO implications

**Decision:** Defer until all texts have parent guides. Current system works well.

### 9.2 Template Updates

When updating `/src/templates/_parent-guide-template.html`:

```bash
# Rebuild ALL parent guides (both locations)
node build-homepage-guides.js && node build-parent-guides.js

# Verify changes applied everywhere
git diff the-giver/index.html curriculum/dracula/index.html
```

---

## 10. RELATED DOCUMENTATION

- **Design System:** `docs/DESIGN_SYSTEM.md`
- **Site Architecture:** `docs/SITE_ARCHITECTURE_v2_0.md`
- **Dev Guidelines:** `CLAUDE.md` (root)
- **Credence Framework:** `docs/FRAMEWORK_Credence_Conversion_Touchpoints_v1_2.md`

---

**END OF DOCUMENT**
