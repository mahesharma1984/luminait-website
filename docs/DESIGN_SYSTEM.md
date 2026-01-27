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
├── page-marketing.css    # Marketing pages (homepage, course)
├── page-report.css       # Report pages (progress, results)
└── page-guide.css        # Guide pages (analysis guides) [TODO]
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

<!-- 4. Page archetype (choose one) -->
<link rel="stylesheet" href="/components/page-marketing.css">
<!-- OR -->
<link rel="stylesheet" href="/components/page-report.css">

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

## 5. PAGE ARCHETYPES

### Marketing Pages (page-marketing.css)

**Used by:** `index.html`, `course.html`

**Visual identity:** Light, warm, inviting, parent-facing

**Key components:**
- Results preview cards with growth numbers
- Text selection grid
- Feature lists with checkmarks
- Pricing cards

**When to use:** Parent-facing conversion pages that need warm, approachable styling

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

### Report Pages (page-report.css)

**Used by:** `progress.html`, `results.html`

**Visual identity:** Dark navy headers, formal, data-focused

**Key components:**
- Dark gradient page header
- Sample report cards
- Skills grid
- Score tables
- Rewrite comparison cards
- CTA sections

**When to use:** Progress tracking, data visualization, formal reporting

**Color overrides:**
```css
--report-navy: #1e3a5f
--report-cyan: #2d9cdb
--report-green: #27ae60
```

```html
<link rel="stylesheet" href="/components/page-report.css">
```

**Example:**
```html
<header class="page-header">
  <div class="page-header-content">
    <h1>Progress Reports</h1>
    <p class="subtitle">How we track development</p>
  </div>
</header>

<div class="sample-report">
  <div class="report-header">
    <div class="report-badge">Sample Report</div>
    <h3 class="report-title">Student Progress Report</h3>
  </div>
  <div class="report-body">
    <!-- Report sections -->
  </div>
</div>
```

### Guide Pages (page-guide.css) [TODO]

**Used by:** Analysis guide pages (`/vce/`, `/hsc/`, `/ib/`)

**Visual identity:** Student-facing, clean, content-focused

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

## 8. ADDING NEW PAGES

### Checklist

1. **Choose page archetype**: Marketing, Report, or Guide?
2. **Import correct CSS files**:
   ```html
   <link rel="stylesheet" href="/components/base.css">
   <link rel="stylesheet" href="/components/page-components.css">
   <link rel="stylesheet" href="/components/page-[archetype].css">
   ```
3. **Use existing components**: Check `page-components.css` first
4. **Minimal custom styles**: Only add unique styles in `<style>` block
5. **Run validation**: `node build.js` to check for style issues
6. **Document differences**: If styling differs significantly, document why

---

## 9. MIGRATING EXISTING PAGES

### Current Status (Jan 27, 2026)

| Page | Status | Component CSS | Notes |
|------|--------|---------------|-------|
| index.html | ⚠ Needs migration | None | 228 lines inline styles |
| progress.html | ⚠ Needs migration | None | 386 lines inline styles |
| course.html | ⚠ Needs migration | None | Inline styles |
| syllabus.html | ⚠ Needs migration | None | Inline styles |
| sample.html | ⚠ Needs migration | None | Inline styles |
| results.html | ⚠ Needs migration | None | Inline styles |

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

- [ ] Create `page-guide.css` for analysis guide pages
- [ ] Add dark mode support with color scheme override
- [ ] Create interactive component documentation
- [ ] Add visual regression testing
- [ ] Create Figma design system matching CSS

---

## 12. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 27, 2026 | Initial design system specification |

---

**END OF DOCUMENT**
