# Presentation Rules & Guidelines

## Overview
This document outlines the rules, patterns, and best practices for creating luminAIT presentations. The presentation system is built on HTML/CSS with a fixed slide format optimized for both screen display and PDF export.

---

## 1. Technical Specifications

### Slide Dimensions
- **Width:** 1280px
- **Height:** 720px
- **Aspect Ratio:** 16:9
- **Format:** HTML-based slides with CSS styling

### File Structure
```
/presentation/
├── index.html           # Main presentation HTML
├── style.css            # Design system and slide styles
├── script.js            # Navigation logic
├── generate_pdf.js      # PDF generation script
├── logotype_trimmed.svg # Brand logotype
└── logo-mark.svg        # Brand mark
```

---

## 2. Design System

### Color Variables
```css
--bg-color: #f8fafc          /* Background */
--slide-bg: #ffffff          /* Slide background */
--text-primary: #1e293b      /* Primary text */
--text-secondary: #334155    /* Secondary text */
--accent-color: #2563eb      /* Primary accent (blue) */
--accent-dark: #1e40af       /* Dark accent */
--accent-light: #e0f2fe      /* Light accent */
--success-color: #16a34a     /* Success green */
--warning-color: #ca8a04     /* Warning yellow */
--neutral-bg: #f3f4f6        /* Neutral background */
```

### Typography Scale
- **h2 (Slide Title):** 3.5rem, font-weight: 800
- **h3 (Subtitle):** 1.5rem, font-weight: 600
- **Paragraph:** 1.2rem
- **List Items:** 1.25rem
- **Font Family:** 'Inter', system-ui, -apple-system, sans-serif

### Spacing
- **Slide Padding:** 80px (top/sides), 40px (bottom)
- **Title Slide Padding:** 60px 80px
- **Content Margins:** Varies by component, typically 1-2rem

---

## 3. Slide Structure Rules

### Basic Slide Template
```html
<div class="slide">
    <img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo">
    <h2>Main Slide Title</h2>
    <h3>Subtitle or Context Statement</h3>

    <!-- Content goes here -->

</div>
```

### Required Elements
1. **Brand Logo** - Every slide (except title) must include the logo in top-right
2. **h2** - Main slide heading (centered, large, bold)
3. **h3** - Subtitle with underline accent (centered, smaller, context)
4. **Content** - Body content using approved layout patterns

### Title Slide (Slide 1) Structure
```html
<div class="slide title-slide active">
    <div class="title-top-plane">
        <img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo"
             style="filter: brightness(0) invert(1); ...">
        <h1>Main Title</h1>
        <p class="thesis-statement">Value proposition statement</p>
    </div>
    <div class="title-bottom-plane">
        <div class="economic-claim">
            → Key claim <br>
            <span class="formula">(formula)</span>
        </div>
    </div>
</div>
```

**Title Slide Rules:**
- Dark gradient background (linear-gradient(135deg, #1e293b 0%, #0f172a 100%))
- Split into two planes: top (dark) and bottom (white)
- Logo inverted to white
- h1 instead of h2
- Bottom plane has economic claim with formula

---

## 4. Layout Patterns

### Pattern 1: Triangle/Branching Layout
**Use Case:** Show causal relationships or hierarchies

```html
<div class="triangle-layout causal-triangle">
    <div class="triangle-item root">
        <strong>Root Cause</strong>
    </div>
    <div class="triangle-branches">
        <div class="triangle-item">
            <strong>Effect 1</strong>
        </div>
        <div class="triangle-item">
            <strong>Effect 2</strong>
        </div>
    </div>
</div>
```

### Pattern 2: Split Columns
**Use Case:** Compare/contrast two concepts

```html
<div class="split-columns">
    <div class="column-group">
        <h4>Column 1 Header</h4>
        <div class="feature-card">
            <strong>Feature Title</strong>
            <p>Feature description</p>
        </div>
    </div>
    <div class="column-group">
        <h4>Column 2 Header</h4>
        <div class="feature-card highlight">
            <strong>Feature Title</strong>
            <p>Feature description</p>
        </div>
    </div>
</div>
```

### Pattern 3: Three-Column Cards
**Use Case:** Show three equal components or phases

```html
<div class="col-3-card">
    <div class="card card-faded">
        <span class="card-title">1. First</span>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
    <div class="card card-faded">
        <span class="card-title">2. Second</span>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
    <div class="card card-dominant">
        <span class="card-title">3. Third (Emphasized)</span>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
</div>
```

**Card Modifiers:**
- `card-faded` - Reduced opacity, slight scale down (0.98)
- `card-dominant` - Emphasized with scale up (1.05), border, shadow

### Pattern 4: Process Flow
**Use Case:** Sequential steps or pipeline

```html
<div class="process-flow">
    <div class="process-node">
        <span class="process-title">1. Step Name</span>
        <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
        </ul>
    </div>
    <div class="process-node">
        <span class="process-title">2. Step Name</span>
        <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
        </ul>
    </div>
    <!-- Arrow automatically appears between nodes -->
</div>
```

### Pattern 5: Chevron Chain
**Use Case:** Progressive momentum or causal sequence

```html
<div class="chevron-chain">
    <div class="chevron opacity-low">Step 1</div>
    <div class="chevron opacity-med">Step 2</div>
    <div class="chevron opacity-high">Step 3</div>
    <div class="chevron opacity-full">Step 4</div>
    <div class="chevron active weight-heavy">Final Step</div>
</div>
```

**Opacity Modifiers:**
- `opacity-low` - 40%
- `opacity-med` - 60%
- `opacity-high` - 80%
- `opacity-full` - 100%
- `active` - Blue background with white text
- `weight-heavy` - Bold, scaled up (1.05)

### Pattern 6: Deployment Phases
**Use Case:** Multi-phase plans with emphasis on one phase

```html
<div class="deployment-phases">
    <div class="phase-card phase-1">
        <div class="phase-badge">Important Badge</div>
        <p class="phase-title">Phase 1: Name<br><span>Duration</span></p>
        <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
        </ul>
    </div>
    <div class="phase-card phase-2">
        <p class="phase-title">Phase 2: Name</p>
        <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
        </ul>
    </div>
</div>
```

### Pattern 7: Measurement Grid
**Use Case:** Show metrics or dual categories

```html
<div class="measurement-split-grid">
    <div class="measurement-column">
        <h4 class="column-header">Category 1</h4>
        <!-- Content boxes -->
    </div>
    <div class="measurement-column">
        <h4 class="column-header">Category 2</h4>
        <!-- Content boxes -->
    </div>
</div>
```

### Pattern 8: Pricing Block
**Use Case:** Display pricing or key numbers

```html
<div class="price-block">
    <p class="price-label">Label Text</p>
    <div class="price-row">
        <span class="price-value">$75,000</span>
        <span class="price-suffix">(one-time)</span>
    </div>
    <p class="price-upside">Value proposition</p>
</div>
```

---

## 5. Component Library

### Consequence Box
```html
<div class="consequence-box">
    <p><strong>Header:</strong></p>
    <div class="consequence-list">
        <span>Item 1</span>
        <span class="separator">•</span>
        <span>Item 2</span>
        <span class="separator">•</span>
        <span>Item 3</span>
    </div>
</div>
```

### Claim Box
```html
<div class="claim-box">
    <p><strong>Claim:</strong> Main statement here.</p>
</div>
```

### Footer Strip
```html
<div class="footer-strip">
    <p><strong>Key Point</strong> — Supporting statement</p>
</div>
```

### Feature Card
```html
<div class="feature-card">
    <strong>Feature Name</strong>
    <p>Description text</p>
</div>
```

---

## 6. Content Guidelines

### Hierarchy Rules
1. **One main idea per slide** - Each slide should communicate a single core concept
2. **Title hierarchy** - h2 (main) → h3 (subtitle) → content
3. **Visual weight** - Most important elements should be visually dominant
4. **Progressive disclosure** - Build complexity gradually across slides

### Text Guidelines
1. **Headings:**
   - h2: 3-7 words, action or outcome-focused
   - h3: 5-10 words, provides context or constraint

2. **Body Text:**
   - Keep paragraphs under 2-3 lines
   - Use bullet points for lists (automatic blue bullet styling)
   - Bold key terms and phrases

3. **Lists:**
   - 3-5 items per list (maximum 7)
   - Parallel structure (all start with verbs, or all nouns, etc.)
   - Concise: 1-2 lines per item

### Visual Emphasis
1. **Color Coding:**
   - Blue (accent) - Primary actions, key points
   - Green (success) - Positive outcomes, growth
   - Yellow (warning) - Caution, constraints
   - Red/Pink - Problems, risks

2. **Sizing:**
   - Use scale to show importance (card-dominant, weight-heavy)
   - Consistent spacing maintains rhythm

3. **Opacity:**
   - Fade non-critical elements
   - Full opacity for emphasis

---

## 7. Navigation & Interaction

### Controls
- **Previous/Next buttons** - Bottom right corner
- **Slide counter** - Shows current/total (e.g., "1 / 13")
- **Keyboard shortcuts:**
  - Right Arrow / Space / Enter → Next slide
  - Left Arrow → Previous slide

### Slide Transitions
- Fade in/out (0.4s ease-in-out)
- Only one slide visible at a time
- First slide has `.active` class on load

---

## 8. PDF Generation

### Command
```bash
node generate_pdf.js
```

### Requirements
- Puppeteer installed (`npm install puppeteer`)
- All SVG assets in the same directory
- Presentation must be in `index.html`

### Output
- File: `presentation.pdf`
- Format: 1280x720px per page
- Print backgrounds enabled
- Page break after each slide

---

## 9. Best Practices

### DO:
✓ Use consistent spacing and alignment
✓ Maintain visual hierarchy (h2 → h3 → content)
✓ Apply brand colors from CSS variables
✓ Use approved layout patterns
✓ Keep text concise and scannable
✓ Test both screen and PDF output
✓ Use semantic HTML structure
✓ Include alt text for images

### DON'T:
✗ Mix multiple layout patterns on one slide
✗ Exceed 7 bullet points per list
✗ Use colors outside the design system
✗ Remove the brand logo from slides
✗ Create custom CSS without documenting
✗ Use inline styles (except for title slide logo)
✗ Overcrowd slides with dense text
✗ Change slide dimensions

---

## 10. Slide Flow Principles

### Opening Slides (1-3)
- **Slide 1:** Title + Value Proposition
- **Slide 2:** Problem Statement
- **Slide 3:** Solution Overview

### Body Slides (4-11)
- System details
- Process flows
- Economic models
- Evidence/proof
- Deployment plans

### Closing Slides (12-13)
- Commercial terms
- Positioning clarity
- Call to action

### Narrative Arc
1. **Hook** - Problem that matters economically
2. **Context** - Why typical solutions fail
3. **Solution** - What luminAIT provides
4. **Mechanism** - How it works
5. **Proof** - Evidence it works
6. **Implementation** - How to deploy
7. **Terms** - Commercial structure
8. **Clarity** - What this is/isn't

---

## 11. Common Patterns Reference

| Pattern | Use Case | File Location |
|---------|----------|---------------|
| Title Split | Opening slide | Slide 1 |
| Causal Triangle | Show root cause + effects | Slide 2 |
| Split Columns | Compare two concepts | Slides 2.5, 8, 12, 13 |
| Three Cards | Show three components | Slide 4 |
| Process Flow | Sequential steps | Slides 4, 5 |
| Chevron Chain | Progressive momentum | Slide 6 |
| Grid Metrics | Show 2x2 or 1x2 numbers | Slides 7, 8 |
| Deployment Phases | Multi-phase plans | Slide 9 |
| Pricing Block | Financial terms | Slide 12 |

---

## 12. Modification Workflow

### To Add a New Slide:
1. Copy an existing slide `<div class="slide">...</div>`
2. Remove `.active` class
3. Update h2 and h3
4. Choose appropriate layout pattern
5. Replace content
6. Test navigation

### To Modify Styling:
1. Edit `style.css` only (never inline styles)
2. Use existing CSS variables
3. Test both screen and PDF output
4. Document new patterns in this file

### To Update Content:
1. Edit `index.html`
2. Maintain semantic HTML structure
3. Use existing component classes
4. Regenerate PDF: `node generate_pdf.js`

---

## 13. Quality Checklist

Before finalizing a presentation:

**Structure:**
- [ ] Every slide has h2 and h3
- [ ] Logo appears on all non-title slides
- [ ] Slide count is accurate in controls
- [ ] First slide has `.active` class

**Content:**
- [ ] No slide exceeds 7 bullet points
- [ ] Headings are concise (h2: 3-7 words, h3: 5-10 words)
- [ ] Text is scannable and hierarchical
- [ ] Key terms are bolded

**Design:**
- [ ] Colors use CSS variables only
- [ ] Spacing is consistent
- [ ] Visual hierarchy is clear
- [ ] Layout patterns are used correctly

**Technical:**
- [ ] Navigation works (keyboard + buttons)
- [ ] PDF generates without errors
- [ ] All SVG assets load correctly
- [ ] No console errors

---

## 14. Troubleshooting

### Slide Not Showing
- Check if another slide has `.active` class
- Verify slide is inside `.deck-container`

### Navigation Broken
- Ensure `script.js` is loaded
- Check console for JavaScript errors
- Verify button IDs match script selectors

### PDF Generation Fails
- Install puppeteer: `npm install puppeteer`
- Check file paths in `generate_pdf.js`
- Ensure all assets are accessible

### Styling Issues
- Verify CSS variable names
- Check for typos in class names
- Use browser dev tools to inspect

---

## Version History
- **v1.0** (2026-02-05): Initial documentation created from existing presentation system

---

## Contact & Support
For questions or issues with the presentation system, refer to the main project documentation or contact the luminAIT development team.
