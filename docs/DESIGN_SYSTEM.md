# DESIGN SYSTEM v1.0

**Date:** January 27, 2026
**Status:** Active
**Purpose:** Unified design system for consistent styling across all pages

---

## 1. OVERVIEW

This document defines the LuminAIT design system - a unified approach to styling that ensures consistency while allowing for page-specific variations where intentional.

### Design Philosophy

- **Base tokens first**: Always use CSS variables from `base.css` for colors, spacing, shadows
- **Component classes over inline styles**: Use reusable classes instead of one-off inline styles
- **Page archetypes**: Group pages by purpose (marketing, report, guide) for shared styling
- **Intentional variation**: When pages differ, it should be deliberate and documented

---

## 2. CSS ARCHITECTURE

### File Structure

```
components/
├── base.css              # Design tokens (colors, spacing, typography)
├── page-components.css   # Shared patterns (cards, badges, heroes)
├── page-marketing.css    # All page styles (light, warm, consistent)
├── page-parent-guide.css # Parent curriculum guide pages (/curriculum/)
└── page-guide.css        # Student guide pages (analysis guides) [TODO]
```

### Import Order

Always import CSS in this order in your templates:

```html
<!-- 1. Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans..." rel="stylesheet">

<!-- 2. Base tokens -->
<link rel="stylesheet" href="/components/base.css">

<!-- 3. Shared components -->
<link rel="stylesheet" href="/components/page-components.css">

<!-- 4. Page styles (all pages use same style) -->
<link rel="stylesheet" href="/components/page-marketing.css">

<!-- 5. Page-specific overrides (minimal, in <style> if needed) -->
<style>
  /* Only truly unique styles here */
</style>
```

---

## 3. DESIGN TOKENS (base.css)

### Colors

Always use CSS variables instead of hardcoded colors:

```css
/* Background */
--bg-paper: #FDFCF8          /* Warm paper background */
--bg-paper-dark: #F3F4F6     /* Darker paper */
--bg-white: #FFFFFF          /* Pure white */

/* Text */
--text-main: #334155         /* Primary text */
--text-dark: #111827         /* Headings */
--text-light: #64748B        /* Secondary text */

/* Brand colors */
--primary: #2563EB           /* Royal Blue */
--primary-dark: #1E40AF
--primary-light: #DBEAFE

--accent: #059669            /* Emerald (success) */
--accent-light: #D1FAE5

--warm: #D97706              /* Amber (highlights) */
--warm-light: #FEF3C7
```

### Spacing (8px grid)

```css
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 80px
```

### Border Radius

```css
--radius-sm: 6px
--radius-md: 12px
--radius-lg: 20px
--radius-full: 9999px
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.05)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.05)
--shadow-warm: 0 20px 25px -5px rgba(0, 0, 0, 0.05)
```

---

## 4. SHARED COMPONENTS (page-components.css)

### Hero Sections

```html
<!-- Standard light hero (marketing pages) -->
<header class="hero-standard">
  <div class="badge badge-warm">Melbourne · Years 7-12</div>
  <h1>Your heading</h1>
  <p class="hero-subtitle">Your subtitle</p>
</header>
```

### Badges

```html
<!-- Different badge styles -->
<span class="badge badge-warm">Warm badge</span>
<span class="badge badge-primary">Primary badge</span>
<span class="badge badge-accent">Success badge</span>

<!-- Small badges for cards -->
<span class="badge-sm">Year 7-8</span>
```

### Card Grids

```html
<!-- Responsive card grid -->
<div class="card-grid">
  <div class="content-card">Card 1</div>
  <div class="content-card">Card 2</div>
  <div class="content-card">Card 3</div>
</div>

<!-- Dense grid (more columns) -->
<div class="card-grid-dense">
  <div class="content-card-compact">Card 1</div>
  <div class="content-card-compact">Card 2</div>
</div>
```

### Content Sections

```html
<!-- Centered content section -->
<div class="content-section">
  <h2>Centered content</h2>
  <p>Max-width 800px, centered</p>
</div>

<!-- Wide content section -->
<div class="content-section-wide">
  <p>Max-width 1200px, centered</p>
</div>
```

### Sample/Preview Boxes

```html
<!-- Left-bordered preview -->
<div class="sample-preview">
  <small class="text-label">Student Output Example</small>
  <p>Sample content...</p>
</div>

<!-- Contained content -->
<div class="content-container">
  <h3>Contained content with shadow</h3>
</div>
```

### Typography Helpers

```html
<span class="text-title">Large serif title</span>
<span class="text-subtitle">Small subtitle</span>
<span class="text-label">UPPERCASE LABEL</span>
<span class="text-kicker">PRIMARY KICKER</span>
```

---

## 5. PAGE STYLING

### Unified Style (page-marketing.css)

**Used by:** All pages (`index.html`, `course.html`, `progress.html`, `results.html`, etc.)

**Visual identity:** Light, warm, inviting, parent-facing

**Key components:**
- Results preview cards with growth numbers
- Text selection grid
- Feature lists with checkmarks
- Pricing cards
- Hero sections

**Design philosophy:** All pages follow the same consistent, warm styling to create a unified brand experience

```html
<link rel="stylesheet" href="/components/page-marketing.css">
```

**Example:**
```html
<div class="results-preview-grid">
  <a href="/progress.html" class="result-preview-card">
    <div class="result-growth">+34%</div>
    <div class="result-label">Improvement in 1 Term</div>
    <div class="result-quote">"Quote here..."</div>
    <div class="result-student">Student name</div>
  </a>
</div>
```

### Parent Curriculum Guides (page-parent-guide.css)

**Used by:** Parent curriculum guide pages at both root level and `/curriculum/` directory

**Visual identity:** Light, warm, parent-facing (matches site design system)

**Key components:**
- Light hero with warm badge ("Parent Curriculum Guide")
- Learning outcomes list
- 10-week course breakdown with phase-colored cards
- Week cards with phase-colored borders (foundation, analysis, writing, body, completion)
- Toggle buttons for 5-week condensed / 10-week extended views
- Technique highlight boxes (weeks 6-8)
- CTA section ("Ready to get started?")

**CSS Import:**
```html
<link rel="stylesheet" href="/components/base.css">
<link rel="stylesheet" href="/components/page-components.css">
<link rel="stylesheet" href="/components/page-parent-guide.css">
```

**Dual Build System:**

There are TWO build scripts for parent guides, outputting to different locations:

**1. Homepage Books** (8 texts at root level):
- **Build command:** `node build-homepage-guides.js`
- **Output:** `/[text-slug]/index.html` (root level)
- **Books:** the-giver, macbeth, animal-farm, romeo-and-juliet, to-kill-a-mockingbird, a-christmas-carol, blueback, the-outsiders
- **Purpose:** Direct parent funnel from homepage text grid

**2. Additional Curriculum Guides** (10 texts in /curriculum/):
- **Build command:** `node build-parent-guides.js`
- **Output:** `/curriculum/[text-slug]/index.html` + `/curriculum/index.html`
- **Books:** dracula, jane-eyre, the-simple-gift, the-white-girl, catching-teller-crow, catherine-called-birdy, convenience-store-woman, his-name-was-walter, my-life-as-an-alphabet, the-curious-incident
- **Purpose:** Secondary parent resource accessed via "View Parent Curriculum Guides" link

**Data Source:** JSON files in `/data/parent-guides/` (shared by both build scripts)

**Template:** `/src/templates/_parent-guide-template.html` with `{{PLACEHOLDERS}}`

**Build Pipeline Diagram:**

```
JSON Data Files (18 total)         Build Scripts                  Output
──────────────────────             ─────────────                  ──────

/data/parent-guides/               build-homepage-guides.js       ROOT LEVEL
├── the-giver.json        ───┐     (homepage books only)          ├── /the-giver/
├── macbeth.json          ───┤                                    │   └── index.html
├── animal-farm.json      ───┤                                    ├── /macbeth/
├── romeo-and-juliet.json ───┤                                    │   └── index.html
├── [4 more homepage]     ───┘                                    └── ...

├── dracula.json          ───┐     build-parent-guides.js         /curriculum/
├── jane-eyre.json        ───┤     (curriculum directory)         ├── dracula/
├── the-simple-gift.json  ───┤                                    │   └── index.html
└── [7 more curriculum]   ───┘                                    ├── jane-eyre/
                                                                   │   └── index.html
        BOTH USE:                                                  ├── index.html
        ────────────                                               └── ...
        /src/templates/_parent-guide-template.html
        (same template, same styling, same structure)
```

**Result:** 18 total parent curriculum guide pages, all using identical design system and structure.

**How It Works:**

1. **Data Files** (`/data/parent-guides/*.json`)
   - Each JSON file contains structured curriculum data for one text
   - Fields: `title`, `author`, `yearLevel`, `pattern`, `weeks[]`, `outcomes[]`, `slug`, `metaDescription`
   - Example: `jane-eyre.json` contains all content for Jane Eyre curriculum guide

2. **Single Template** (`/src/templates/_parent-guide-template.html`)
   - One HTML template file used for ALL parent guides
   - Contains placeholders: `{{TEXT_TITLE}}`, `{{AUTHOR}}`, `{{YEAR_LEVEL}}`, `{{WEEKS_CONTENT}}`, etc.
   - Defines structure, design, and styling (imports `page-parent-guide.css`)
   - **Source of truth for layout and design**

3. **Build Script** (`build-parent-guides.js`)
   - Reads all JSON files from `/data/parent-guides/`
   - For each JSON file:
     - Loads the template
     - Replaces placeholders with data from JSON
     - Generates week cards, outcomes list, etc.
     - Writes output to `/curriculum/[slug]/index.html`
   - Also generates index page at `/curriculum/index.html` with links to all guides

**Adding a New Parent Guide:**

```bash
# 1. Create JSON data file
cat > data/parent-guides/frankenstein.json <<EOF
{
  "title": "Frankenstein",
  "author": "Mary Shelley",
  "slug": "frankenstein",
  "yearLevel": "Year 10",
  "pattern": "Creation & Responsibility",
  "metaDescription": "...",
  "weeks": [ ... ],
  "outcomes": [ ... ]
}
EOF

# 2. Run build script
node build-parent-guides.js

# 3. Output appears at:
#    /curriculum/frankenstein/index.html
#    /curriculum/index.html (updated)
```

**DO NOT:**
- ✗ Create individual HTML files in `/src/templates/curriculum_*.html` (legacy approach)
- ✗ Edit generated files in `/curriculum/` directly (they get overwritten)
- ✗ Add inline styles to the template (use `page-parent-guide.css` component classes)

**DO:**
- ✓ Edit JSON data files for content changes
- ✓ Edit `_parent-guide-template.html` for layout/structure changes
- ✓ Run `node build-parent-guides.js` after any changes
- ✓ Use design system tokens and component classes

### Future: Student Guide Pages (page-guide.css) [TODO]

**Used by:** Student analysis guide pages (`/vce/`, `/hsc/`, `/ib/`)

**Visual identity:** Student-facing, clean, content-focused (but still following the same warm aesthetic)

**Status:** To be created when guide pages are built

---

## 6. STYLE VALIDATION

The build system (`build.js`) includes automatic style validation that checks for:

1. **Hardcoded colors**: Warns if more than 3 hex colors found (use CSS variables instead)
2. **Large inline style blocks**: Warns if `<style>` block exceeds 200 lines
3. **Excessive inline styles**: Warns if more than 15 `style=""` attributes found
4. **Missing component imports**: Suggests importing component CSS files

Run `node build.js` to see validation warnings.

---

## 7. BEST PRACTICES

### DO ✓

- Use CSS variables from `base.css` for colors, spacing, shadows
- Import component CSS files for shared patterns
- Use semantic class names (`.result-card`, `.skill-grid`)
- Keep inline styles minimal (< 5 per page)
- Document intentional visual differences

### DON'T ✗

- Hardcode colors like `#2563EB` (use `var(--primary)`)
- Copy-paste large style blocks between templates
- Use inline `style=""` for recurring patterns
- Create page-specific versions of shared components
- Add styles without checking if a component class exists

---

## 8. ADDING NEW PAGES — COMPLETE PROCEDURE

Adding a new page requires coordination across multiple docs. This is the single source of truth.

### Overview

```
Step 1: Define the page (UX_VALIDATION_CHECKLIST)
Step 2: Document in site architecture (SITE_ARCHITECTURE)
Step 3: Create template with correct CSS
Step 4: Build and validate
Step 5: Test and commit
```

### Step 1: Define the Page

**Reference:** `docs/UX_VALIDATION_CHECKLIST_v1_0.md` Stages 2-4

Before touching any code:
- [ ] Define user journey (who lands here, what they need)
- [ ] Define page purpose and content sections
- [ ] Sketch wireframe or content outline

### Step 2: Document in Site Architecture

**Reference:** `docs/SITE_ARCHITECTURE_v2_0.md`

- [ ] Add page to URL structure in appropriate funnel
- [ ] Define page type (marketing, guide, report)
- [ ] Add to navigation if needed

### Step 3: Create Template

**Location:** `src/templates/` for main pages

#### 3a. CSS Imports (Required — ALWAYS in this order)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/components/base.css">
<link rel="stylesheet" href="/components/page-components.css">
<link rel="stylesheet" href="/components/page-marketing.css">
```

#### 3b. Use Existing Components

Check `page-components.css` FIRST. Available patterns:
- Hero: `.hero-standard`
- Badges: `.badge`, `.badge-warm`, `.badge-primary`, `.badge-accent`
- Cards: `.content-card`, `.card-grid`, `.card-grid-dense`
- Sections: `.content-section`, `.content-section-wide`
- Previews: `.sample-preview`, `.content-container`
- Typography: `.text-title`, `.text-subtitle`, `.text-label`, `.text-kicker`

#### 3c. Use Design Tokens (NEVER hardcode values)

| Instead of... | Use... |
|---------------|--------|
| `#2563EB` | `var(--primary)` |
| `#D97706` | `var(--warm)` |
| `#059669` | `var(--accent)` |
| `16px` | `var(--space-md)` |
| `margin: 24px` | `margin: var(--space-lg)` |

#### 3d. Minimize Custom Styles

- Custom `<style>` block: < 50 lines
- Inline `style=""`: < 5 per page
- If pattern repeats, add to `page-components.css`

### Step 4: Build and Validate

```bash
node build.js
```

Build will warn if:
- ⚠ Too many hardcoded colors (> 3 hex values)
- ⚠ Large inline style block (> 200 lines)
- ⚠ Excessive inline styles (> 15 attributes)
- ℹ Missing component CSS imports

**Fix all warnings before committing.**

### Step 5: Final Validation

**Reference:** `docs/UX_VALIDATION_CHECKLIST_v1_0.md` Stages 5-6

- [ ] Design system compliance (colors, spacing, components)
- [ ] Component consistency with existing pages
- [ ] Responsive behavior (mobile, tablet, desktop)
- [ ] Accessibility (semantic HTML, alt text, keyboard nav)

### Quick Reference by Page Type

| Page Type | CSS File | Voice | Examples |
|-----------|----------|-------|----------|
| Marketing (parent-facing) | `page-marketing.css` | Warm, parent-focused | index.html, course.html |
| Parent curriculum guide | `page-parent-guide.css` | Warm, parent-focused | /curriculum/jane-eyre/ |
| Guide (student-facing) | `page-guide.css` [TODO] | Direct, useful | /vce/tkam/ |
| Curriculum outline | `page-marketing.css` | Parent-focused | curriculum_*.html |

---

## 9. MIGRATING EXISTING PAGES

### Current Status (Jan 27, 2026)

| Page | Status | Component CSS | Notes |
|------|--------|---------------|-------|
| index.html | ✓ Migrated | page-marketing.css | Using unified style |
| progress.html | ✓ Migrated | page-marketing.css | Using unified style |
| course.html | ⚠ Needs migration | None | 446 lines inline styles |
| syllabus.html | ⚠ Needs migration | None | 217 lines inline styles |
| sample.html | ⚠ Needs migration | None | 311 lines inline styles |
| results.html | ⚠ Needs migration | None | 327 lines inline styles |

### Migration Steps

1. Identify page archetype (marketing, report, guide)
2. Import appropriate component CSS files
3. Replace inline styles with component classes
4. Extract any truly unique styles to minimal `<style>` block
5. Test that page looks identical
6. Commit changes

---

## 10. TROUBLESHOOTING

### Page looks different after migration

- Check CSS import order (base → components → archetype → custom)
- Verify all component classes are spelled correctly
- Check browser dev tools for CSS specificity conflicts

### Component not available

- Check if pattern exists in `page-components.css`
- If unique to one archetype, check archetype CSS file
- If truly unique, add to page-specific `<style>` block

### Build warnings

- Read validation messages in build output
- Fix hardcoded colors by using CSS variables
- Extract repeated patterns to component CSS

---

## 11. FUTURE ENHANCEMENTS

- [x] Create `page-parent-guide.css` for parent curriculum guides (Jan 27, 2026)
- [ ] Create `page-guide.css` for student analysis guide pages
- [ ] Add dark mode support with color scheme override
- [ ] Create interactive component documentation
- [ ] Add visual regression testing
- [ ] Create Figma design system matching CSS

---

## 12. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.1 | Jan 27, 2026 | Added page-parent-guide.css for /curriculum/ pages |
| 1.0 | Jan 27, 2026 | Initial design system specification |

---

**END OF DOCUMENT**
