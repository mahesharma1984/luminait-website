# luminAIT Presentation System

**Comprehensive Guide for All Presentation Templates**

Version: 2.1
Last Updated: 2026-02-06

---

## Table of Contents

1. [Overview](#overview)
2. [System Architecture](#system-architecture)
3. [Three Presentation Templates](#three-presentation-templates)
4. [Shared Technical Specifications](#shared-technical-specifications)
5. [Design Systems Comparison](#design-systems-comparison)
   - 5.5 [Logo & Logotype Usage](#logo--logotype-usage)
6. [Layout Patterns Library](#layout-patterns-library)
   - 6.5 [Visual Engagement Principles](#visual-engagement-principles)
7. [Content Guidelines](#content-guidelines)
8. [Navigation & Interaction](#navigation--interaction)
9. [PDF Generation](#pdf-generation)
10. [Workflow & Best Practices](#workflow--best-practices)
11. [Template Selection Guide](#template-selection-guide)

---

## 1. Overview

The luminAIT presentation system consists of **three distinct presentation templates**, each optimized for different audiences and purposes. All three share common technical infrastructure but differ in visual design and narrative focus.

### Current State (Pre-Refactor)
```
/presentation/     → Partnership Economics Overview (13 slides)
/pitch-a/          → Teaching Infrastructure (11 slides)
/pitch-b/          → How luminAIT Scales Teaching (11 slides)
```

**Problem:** Each folder contains duplicate scripts (script.js, generate_pdf.js) causing maintenance bloat.

**Solution:** Shared core scripts with template-specific content/styles (see Section 2).

---

## 2. System Architecture

### Proposed Shared Structure

```
/presentation-core/          # Shared infrastructure (NEW)
├── script.js                # Shared navigation logic
├── generate_pdf.js          # Shared PDF generator
└── assets/
    ├── logotype_trimmed.svg
    └── logo-mark.svg

/presentation/               # Template A: Partnership Economics
├── index.html               # Content & structure
├── style.css                # Design system
└── config.json              # Template configuration (NEW)

/pitch-a/                    # Template B: Teaching Infrastructure
├── index.html
├── style.css
└── config.json

/pitch-b/                    # Template C: Scaling Teaching
├── pitch-b.html
├── style.css
└── config.json
```

### Benefits
- **Single source of truth** for navigation logic
- **DRY principle** - scripts maintained in one place
- **Template-specific** styling and content
- **Easy updates** - change script.js once, affects all templates

---

## 3. Three Presentation Templates

### Template A: Partnership Economics Overview (`/presentation/`)

**Purpose:** Comprehensive B2B partnership pitch with full economic framework
**Slides:** 13
**Audience:** Partners evaluating full economic partnership
**File:** `index.html`

**Content Focus:**
- Core economic problem
- System inputs/outputs
- Baseline economics comparison
- Full system pipeline with feedback loop
- Economic causal chain
- Designed outcomes with metrics
- Measurement framework
- Two-phase deployment model
- B2C vs B2B positioning
- Partnership terms
- Commercial structure ($75k implementation fee)
- Operational proof
- Risk mitigation

**Visual System:**
- Vibrant blue accent (#2563eb)
- Extended color palette (success green, warning yellow)
- Split-plane title slide (dark top, white bottom)
- Advanced components (chevron chains, loop arrows, deployment phases)
- Process flows with auto-generated arrows
- Feature cards with emphasis hierarchy

**When to Use:**
- Full partnership conversations
- Commercial/financial details matter
- Need advanced layout patterns
- Comprehensive economic framework required

---

### Template B: Teaching Infrastructure (`/pitch-a/`)

**Purpose:** B2B sales pitch focused on teaching infrastructure as economic solution
**Slides:** 11
**Audience:** Business partners who need teaching infrastructure
**File:** `index.html`

**Content Focus:**
- Structural problem definition
- Why traditional solutions fail
- What luminAIT is (boundary definition)
- What luminAIT builds (system components)
- Economic causal chain
- Designed business outcomes
- B2B engagement model
- Phase 1 proof-before-scale
- Economic impact projections
- Positioning clarity (what it is/isn't)

**Visual System:**
- Slate gray accent (#334155) - professional, subdued
- Type-based slide system (problem/system/economics/boundary)
- Lane diagrams for causal flows
- Constraint-text footer on every slide
- Symmetric grids and invariant frames
- Logo opacity control for dark backgrounds

**Unique Features:**
- **Strict slide grammar** with 4 visual types:
  - `.type-problem` → Dark background, white text
  - `.type-system` → White background
  - `.type-economics` → Light gray background
  - `.type-boundary` → Light gray with invariant frames

**When to Use:**
- Business partner presentations
- Emphasizing systems thinking
- Problem-solution narrative is primary
- Need clear visual type differentiation

---

### Template C: How luminAIT Scales Teaching (`/pitch-b/`)

**Purpose:** Operational implementation pitch with specific scaling mechanics
**Slides:** 11
**Audience:** Educational institutions understanding scaling limitations
**File:** `pitch-b.html`

**Content Focus:**
- Problem specific to secondary English
- Fixed constraints in teaching
- Scalable unit definition (text-anchored cohorts)
- Retention effects
- Infrastructure control points
- Growth mechanics
- Conservative revenue calculations ($18k per cohort)
- Phase 1 effects
- Larger revenue sources
- Infrastructure characteristics

**Visual System:**
- Slate gray accent (#334155) - matches pitch-a
- Simplest CSS of all three templates (~377 lines)
- Content-block based structure
- Clean lists with arrow bullets (→)
- Highlight boxes with border-left emphasis
- Split layouts for comparisons
- Outcome cards and grid systems

**Unique Features:**
- **Content-first approach** - no dedicated title slide class
- **Specific metrics visible** - $18k cohort revenue, exact retention %
- **Operational language** - cohort lifespan, term-based calculations
- **Simplest to maintain** - minimal CSS complexity

**When to Use:**
- Explaining implementation mechanics
- Audience needs operational clarity
- Focus on scalable units and constraints
- Prefer simpler CSS maintenance

---

## 4. Shared Technical Specifications

### Slide Dimensions (All Templates)
- **Width:** 1280px
- **Height:** 720px
- **Aspect Ratio:** 16:9
- **Format:** HTML + CSS with JavaScript navigation

### File Requirements (All Templates)
- `index.html` or `pitch-b.html` - Main presentation structure
- `style.css` - Template-specific design system
- `script.js` - Navigation logic (to be shared)
- `generate_pdf.js` - PDF generation (to be shared)
- `logotype_trimmed.svg` - Brand logotype
- `logo-mark.svg` - Brand mark (optional)

### Browser Support
- Modern browsers with CSS Grid and Flexbox
- Puppeteer for PDF generation (Node.js required)

---

## 5. Design Systems Comparison

### Color Palettes

#### Template A: Partnership Economics (Vibrant)
```css
--bg-color: #f8fafc          /* Slate 50 */
--slide-bg: #ffffff          /* White */
--text-primary: #1e293b      /* Slate 800 */
--text-secondary: #334155    /* Slate 700 */
--accent-color: #2563eb      /* Blue 600 - DISTINCTIVE */
--accent-dark: #1e40af       /* Blue 700 */
--accent-light: #e0f2fe      /* Blue 50 */
--success-color: #16a34a     /* Green 600 */
--success-bg: #dcfce7        /* Green 50 */
--warning-color: #ca8a04     /* Yellow 600 */
--warning-bg: #fef9c3        /* Yellow 50 */
--neutral-bg: #f3f4f6        /* Gray 100 */
```

**Color Strategy:** Semantic color coding for visual hierarchy
- Blue = Primary actions, key points
- Green = Positive outcomes, growth
- Yellow = Caution, constraints
- Red/Pink = Problems, risks

#### Template B & C: Pitch-A/B (Professional)
```css
--bg-color: #f8fafc          /* Slate 50 */
--slide-bg: #ffffff          /* White */
--text-primary: #0f172a or #475569  /* Slate 900/600 */
--accent-color: #334155      /* Slate 700 - SUBDUED */
--accent-light: #e2e8f0      /* Slate 200 */
--highlight-bg: #f1f5f9      /* Slate 100 */
--border-color: #cbd5e1      /* Slate 300 */
```

**Color Strategy:** Minimal color palette for professional clarity
- Single accent color (slate gray)
- Emphasis through hierarchy, not color variety
- Clean, text-focused design

### Typography (All Templates)

**Font Family:** `'Inter', system-ui, -apple-system, sans-serif`

**Scale:**
- **h1 (Title Slide):** 3.5-4rem, font-weight: 800
- **h2 (Slide Title):** 3-3.5rem, font-weight: 800
- **h3 (Subtitle):** 1.4-1.5rem, font-weight: 600
- **Body Paragraph:** 1.1-1.2rem
- **List Items:** 1.15-1.25rem
- **Small Text:** 0.9-1rem

**Line Heights:**
- Headings: 1.1-1.3
- Body: 1.5-1.6

**Headline Constraints:**
- **h1 max-width:** 900px (prevents overly long title lines)
- **h2 max-width:** 1000px (maintains focal point, prevents edge-to-edge sprawl)
- **h3 max-width:** 800px (optimal readability for subtitle length)
- **Optimal line length:** 45-75 characters for body text
- **Never exceed:** Full slide width for headings (creates visual tension at edges)

**Emphasis Rules:**

When to use **bold**:
- Key terms on first mention
- Numeric values or metrics
- Action words in lists
- Contrasting concepts (e.g., "Before" vs "After")

When to use color emphasis:
- Template A: Semantic meaning (blue = primary, green = positive, yellow = caution)
- Template B/C: Sparingly, only for critical differentiation
- Avoid overuse: Max 2-3 color-emphasized items per slide

When to use scale (larger text):
- Opening statement of slide
- Critical metric or outcome
- Call-to-action or conclusion
- Never scale more than one element per slide

**Display Font Pairing (Optional):**
- Current system: Single font (Inter) for all text
- Optional pairing: Consider display font for h1 title slides only
- Requirement: Must maintain high readability at distance
- Avoid: Script fonts, overly stylized faces, light weights below 600

**Character Limits by Element:**
- **h1:** 6-10 words maximum
- **h2:** 3-7 words optimal (enforced in content guidelines)
- **h3:** 5-10 words optimal (provides context without overwhelming)
- **List item:** 10-15 words maximum per line
- **Body paragraph:** 2-3 lines maximum per block

### Spacing Systems

**Template A (Partnership Economics):**
- Slide padding: 80px (top/sides), 40px (bottom)
- Title slide: 60px 80px
- Component gaps: 20-40px

**Template B & C (Pitch-A/B):**
- Slide padding: 60px (all sides)
- Component gaps: 20-30px
- Tighter, more compact layout

### Background Treatment & Texture Rules

**Slide Backgrounds:**

Current system uses flat color backgrounds:
- White (`#ffffff`) - Primary slide background
- Slate 50 (`#f8fafc`) - Deck container background
- Light gray (`#f3f4f6` / `#f1f5f9`) - Economics/boundary slides
- Dark slate (`#1e293b` / `#0f172a`) - Problem slides (Template B)

**Adding Subtle Texture (Optional):**

To avoid sterile flatness while maintaining professionalism:
- **Subtle grain:** `background-image: url('data:image/svg+xml,...')` with 2-5% opacity noise
- **Gradient overlays:** Linear gradients with max 3-5% color shift (e.g., `#ffffff` to `#fefefe`)
- **Radial vignette:** Slight darkening at edges (5-10% opacity) for visual focus

**Rules:**
- Texture must not interfere with text readability
- No photos or illustrations as full-slide backgrounds
- Gradients should be imperceptible on casual viewing
- Test in both screen and PDF output for consistency

**Template-Specific Guidance:**
- **Template A:** Can use light blue gradient overlays on accent slides
- **Template B/C:** Flat colors preferred; texture only if subtle and professional

### Image & Illustration Usage

**Maximum Per Slide:** 1 image or illustration

**Placement Rules:**
- Never overlap with text (maintain clear separation)
- Align to grid (left/right columns or centered)
- Maintain aspect ratio (no distortion)
- Size: Maximum 40-50% of slide width for side-aligned, 60% for centered

**Image Treatment:**
- **Crop consistency:** Use consistent aspect ratios across deck (16:9 or 4:3)
- **Overlay style:** If using overlays, apply consistent treatment (e.g., 20% dark overlay)
- **Border:** Optional 1-2px border in `--border-color` for definition
- **Corner radius:** 8px for soft edges, 0px for formal/data visualization

**Illustration Style:**
- Prefer diagrams and schematic illustrations over decorative images
- Line-based illustrations align better with content-first design
- Color palette must match template design system
- Avoid stock photos unless necessary for context

**When to Use Images:**
- Demonstrating interface or product features
- Showing concrete examples (annotated text samples)
- Data visualization (charts, graphs - see diagram guide)
- Proof/credibility (screenshots of results)

**When to Avoid Images:**
- Decorative purposes only (no content value)
- Generic stock imagery (reduces credibility)
- Multiple images competing for attention
- Images that don't add clarity to the message

**Implementation Example:**
```html
<div class="slide">
    <img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo">
    <h2>Annotation Interface</h2>
    <h3>Students engage directly with text structure</h3>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
        <div>
            <ul>
                <li>Text-anchored interaction</li>
                <li>Real-time feedback</li>
                <li>Evidence tracking</li>
            </ul>
        </div>
        <div>
            <img src="screenshot-annotation.png" alt="Annotation interface example"
                 style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color);">
        </div>
    </div>
</div>
```

---

## 5.5 Logo & Logotype Usage

### Asset Types

The presentation system uses three logo variants:

- **`logotype_trimmed.svg`** - Full brand name + mark (primary asset)
- **`logo-mark.svg`** - Icon/mark only (compact contexts)
- **`logotype_cursive.svg`** - Specialty variant (optional, limited use)

### Placement Rules by Context

#### Title Slides (All Templates)

**Asset:** Full logotype (`logotype_trimmed.svg`)

**Placement by Template:**
- **Template A:** Centered in dark top plane, part of split-plane design
- **Template B:** Centered above heading with vertical margin auto
- **Template C:** Standard top-right positioning (content-first approach)

**Treatment:**
- Size: 2-3x larger than standard slides (60-80px height)
- Dark backgrounds: Apply white inversion via `filter: brightness(0) invert(1);`
- Light backgrounds: Use standard dark logo
- Clear space: Minimum 40-60px from all edges

**Example (Template A title slide):**
```html
<img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo"
     style="filter: brightness(0) invert(1); position: relative; top: auto; right: auto; margin-bottom: 20px;">
```

#### Standard Slides (All Templates)

**Asset:** Full logotype (`logotype_trimmed.svg`)

**Placement:** Top-right corner via `.brand-logo` class

**Specifications:**
- Position: Absolute, top-right
- Size: 24-32px height (standard)
- Minimum size: 18px height
- Clear space: 20px minimum from edges
- Opacity: 1.0 (never faded unless intentional brand treatment)

**Example:**
```html
<img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo">
```

**Never:**
- Overlay logo on top of content text
- Scale below 18px height (readability threshold)
- Rotate or distort aspect ratio

### Dark/Light Background Variants

**Light Backgrounds (Default):**
- Use standard logo (dark color)
- No filter required
- Maintains brand color

**Dark Backgrounds:**
- Apply CSS filter: `filter: brightness(0) invert(1);`
- Produces white logo for contrast
- Commonly used on title slides and `.type-problem` slides (Template B)

**Opacity Control (Template B Specific):**
- Template B uses logo opacity control for dark background slides
- Adjust via inline style or CSS class when needed for visual hierarchy

### When to Use Logo Mark Only

Use `logo-mark.svg` (icon only) in these contexts:

- **Space-constrained layouts** - When horizontal space < 120px
- **Footer attributions** - Small-scale credits or watermarks
- **Icon/favicon contexts** - Browser tabs, mobile bookmarks
- **Repeated branding** - Where logotype would be visually heavy

**Never use logo mark:**
- On title slides (always use full logotype)
- As primary slide branding (always prefer logotype)
- When adequate space exists for full logotype

### Size & Clear Space Standards

**Minimum Sizes:**
- Logo mark: 16px × 16px
- Full logotype: 18px height

**Optimal Sizes:**
- Standard slides: 24-32px height
- Title slides: 60-80px height
- Footer/attribution: 16-20px height

**Clear Space Rule:**
- Minimum clear space: 0.5x logo height on all sides
- Example: 32px logo = 16px minimum clear space
- Prevents visual crowding and maintains brand dignity

**Maximum Size:**
- Title slides: 80px height (prevents overpowering content)
- Standard slides: 40px height (maintains hierarchy)

### Template-Specific Guidelines

#### Template A: Partnership Economics
- **Color treatment:** May use accent color overlay on logo for special emphasis slides
- **Title slide:** White inverted logo on dark blue/slate background
- **Standard slides:** Standard dark logo, top-right, 28-32px height
- **Flexibility:** Higher visual variety allowed due to vibrant design system

#### Template B & C: Professional/Operational
- **Color treatment:** Always standard grayscale (no color overlays)
- **Consistency:** Strict uniform sizing across all slides
- **Opacity:** Template B may adjust opacity on dark slides for subtle branding
- **Simplicity:** Minimal logo variations to maintain professional tone

### Implementation Checklist

When adding logos to slides:

- [ ] Correct asset chosen (logotype vs logo mark)
- [ ] Proper size for context (title vs standard slide)
- [ ] Clear space maintained (minimum 0.5x height)
- [ ] Dark/light treatment correct for background
- [ ] Alt text included (`alt="luminAIT"`)
- [ ] No content overlap or visual crowding
- [ ] Consistent with template design system

---

## 6. Layout Patterns Library

### Universal Patterns (All Templates)

#### Basic Slide Structure
```html
<div class="slide">
    <img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo">
    <h2>Main Slide Title</h2>
    <h3>Subtitle or Context Statement</h3>

    <!-- Content using layout patterns below -->

</div>
```

#### Simple List
```html
<ul>
    <li>First point with automatic bullet</li>
    <li>Second point with automatic bullet</li>
    <li>Third point with automatic bullet</li>
</ul>
```

**Styling:**
- Template A: Blue bullet (•)
- Template B: Orange/slate bullet
- Template C: Arrow bullet (→)

---

### Template A Exclusive Patterns

#### 1. Triangle Layout (Causal Relationships)
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

**Use Case:** Show root causes with branching effects
**Example:** Slide 2 - Core Economic Problem

#### 2. Split Columns (Input/Output)
```html
<div class="split-columns">
    <div class="column-group">
        <h4>System Inputs</h4>
        <div class="feature-card">
            <strong>Feature Title</strong>
            <p>Description</p>
        </div>
    </div>
    <div class="column-group">
        <h4>Economic Outputs</h4>
        <div class="feature-card highlight">
            <strong>Feature Title</strong>
            <p>Description</p>
        </div>
    </div>
</div>
```

**Use Case:** Compare/contrast inputs vs outputs
**Example:** Slide 2.5 - What luminAIT Is

#### 3. Three-Column Cards (Component Emphasis)
```html
<div class="col-3-card">
    <div class="card card-faded">
        <span class="card-title">1. Pedagogy</span>
        <ul><li>Item 1</li></ul>
    </div>
    <div class="card card-faded">
        <span class="card-title">2. Execution</span>
        <ul><li>Item 1</li></ul>
    </div>
    <div class="card card-dominant">
        <span class="card-title">3. Measurement</span>
        <ul><li>Item 1</li></ul>
    </div>
</div>
```

**Card Modifiers:**
- `card-faded` - 60% opacity, scale(0.98)
- `card-dominant` - scale(1.05), border, shadow, emphasized

**Use Case:** Show three components with one emphasized
**Example:** Slide 4 - What luminAIT Actually Builds

#### 4. Process Flow (Sequential Pipeline)
```html
<div class="process-flow">
    <div class="process-node">
        <span class="process-title">1. Kernel</span>
        <ul>
            <li>Narratology Analysis</li>
            <li>Pedagogical Primitives</li>
        </ul>
    </div>
    <div class="process-node">
        <span class="process-title">2. Execution</span>
        <ul>
            <li>Annotation Guides</li>
            <li>Writing Tasks</li>
        </ul>
    </div>
    <!-- Auto-arrow appears between nodes -->
</div>
```

**Auto-Feature:** Arrows (→) automatically appear between nodes
**Use Case:** Show sequential steps or pipeline
**Example:** Slide 5 - System Pipeline

#### 5. Chevron Chain (Progressive Momentum)
```html
<div class="chevron-chain">
    <div class="chevron opacity-low">Better Outcomes</div>
    <div class="chevron opacity-med">Higher Perceived Value</div>
    <div class="chevron opacity-high">Higher Conversion</div>
    <div class="chevron opacity-full">Higher Retention</div>
    <div class="chevron active weight-heavy">Margin Expansion</div>
</div>
```

**Opacity Modifiers:**
- `opacity-low` - 40%
- `opacity-med` - 60%
- `opacity-high` - 80%
- `opacity-full` - 100%
- `active` - Blue background, white text
- `weight-heavy` - Bold, scale(1.05)

**Use Case:** Show causal progression with final emphasis
**Example:** Slide 6 - Economic Causal Chain

#### 6. Deployment Phases (Multi-Phase Cards)
```html
<div class="deployment-phases">
    <div class="phase-card phase-1">
        <div class="phase-badge">Economic verification happens here</div>
        <p class="phase-title">Phase 1: Founder-Led Calibration</p>
        <ul>
            <li>Direct delivery with students</li>
            <li>Measurement of conversion/retention/ARPU</li>
        </ul>
    </div>
    <div class="phase-card phase-2">
        <p class="phase-title">Phase 2: Handover and Replication</p>
        <ul>
            <li>Trained teachers run system</li>
            <li>Economics compound operationally</li>
        </ul>
    </div>
</div>
```

**Phase Styling:**
- `phase-1` - Blue border, light blue background, emphasized
- `phase-2` - Standard card styling
- `phase-badge` - Floating badge with important label

**Use Case:** Show deployment phases with one emphasized
**Example:** Slide 9 - Deployment Model

#### 7. Measurement Grid (Dual Metrics)
```html
<div class="measurement-split-grid">
    <div class="measurement-column">
        <h4 class="column-header">Learning Quality Signals</h4>
        <div style="background: #e0f2fe; padding: 20px; border-radius: 8px;">
            <strong>Reading evidence quality</strong>
            <ul>
                <li>Annotation correctness</li>
                <li>Coverage across clusters</li>
            </ul>
        </div>
    </div>
    <div class="measurement-column">
        <h4 class="column-header">Business Signals</h4>
        <div style="background: #fef9c3; padding: 20px; border-radius: 8px;">
            <strong>Progression</strong>
            <ul>
                <li>Week-by-week skill deltas</li>
            </ul>
        </div>
    </div>
</div>
```

**Use Case:** Show two categories of metrics side-by-side
**Example:** Slide 8 - What Gets Measured

#### 8. Pricing Block
```html
<div class="price-block">
    <p class="price-label">Implementation Fee due on signing</p>
    <div class="price-row">
        <span class="price-value">$75,000</span>
        <span class="price-suffix">(one-time)</span>
    </div>
    <p class="price-upside">Unlocking $150k–$300k verified upside</p>
</div>
```

**Use Case:** Display pricing or key financial numbers
**Example:** Slide 12 - Commercial Terms

#### 9. Loop Arrow (Feedback Loop)
```html
<div class="loop-arrow-container">
    <svg width="100%" height="60" viewBox="0 0 800 60" fill="none">
        <path d="M 700 0 Q 700 40 400 40 Q 100 40 100 0"
              stroke="var(--accent-color)" stroke-width="2"
              fill="none" stroke-dasharray="5,5"
              marker-end="url(#arrowhead)" />
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                    refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7"
                         fill="var(--accent-color)" />
            </marker>
        </defs>
    </svg>
    <div class="loop-label">Constraint feedback / Quality correction</div>
</div>
```

**Use Case:** Show feedback loops in system diagrams
**Example:** Slide 5 - System Pipeline

#### 10. Section Divider / Scene Change Slide

```html
<div class="slide section-divider">
    <img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo">
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
        <h2 style="font-size: 4rem; margin-bottom: 20px;">The Solution</h2>
        <div style="width: 200px; height: 4px; background: var(--accent-color); border-radius: 2px;"></div>
    </div>
</div>
```

**Use Case:** Mark major section transitions in the deck (e.g., Problem → Solution → Proof)
**Styling:**
- Centered layout with vertical centering
- Extra large heading (4rem instead of standard 3rem)
- Accent line or visual separator below heading
- Minimal content (title only, no body text)
- Optional: Different background color to emphasize break

**When to Use:**
- Decks with 10+ slides needing clear section breaks
- Transitioning between problem/solution/proof sections
- Before major topic shifts
- Limit to 1-2 per deck (overuse dilutes impact)

#### 11. Impact Metric Slide Pattern

```html
<div class="slide impact-metric">
    <img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo">
    <h2>Measured Economic Impact</h2>
    <h3>Verified results from Phase 1 deployment</h3>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 60px;">
        <div class="metric-card">
            <div class="metric-value" style="font-size: 3.5rem; font-weight: 800; color: var(--success-color); line-height: 1;">
                +47%
            </div>
            <div class="metric-label" style="font-size: 1.2rem; font-weight: 600; margin-top: 10px; color: var(--text-secondary);">
                Conversion Rate
            </div>
            <p style="font-size: 0.95rem; margin-top: 10px; opacity: 0.7;">
                Trial to paid subscriber
            </p>
        </div>

        <div class="metric-card">
            <div class="metric-value" style="font-size: 3.5rem; font-weight: 800; color: var(--success-color); line-height: 1;">
                2.3x
            </div>
            <div class="metric-label" style="font-size: 1.2rem; font-weight: 600; margin-top: 10px; color: var(--text-secondary);">
                Retention
            </div>
            <p style="font-size: 0.95rem; margin-top: 10px; opacity: 0.7;">
                Term-over-term retention
            </p>
        </div>

        <div class="metric-card">
            <div class="metric-value" style="font-size: 3.5rem; font-weight: 800; color: var(--success-color); line-height: 1;">
                $240k
            </div>
            <div class="metric-label" style="font-size: 1.2rem; font-weight: 600; margin-top: 10px; color: var(--text-secondary);">
                Annual Revenue
            </div>
            <p style="font-size: 0.95rem; margin-top: 10px; opacity: 0.7;">
                Per 100 student cohort
            </p>
        </div>
    </div>
</div>
```

**Use Case:** Display 2-4 key metrics with high visual impact
**Component Structure:**
- Large metric value (3.5-4rem, bold, accent color)
- Metric label (1.2rem, semibold, secondary color)
- Supporting detail (0.95rem, muted)

**Styling Guidelines:**
- Use success green for positive metrics
- Use warning yellow for constraint metrics
- Use accent blue for neutral/descriptive metrics
- Grid layout: 2 columns (for 2 or 4 metrics), 3 columns (for 3 metrics)
- Consistent card sizing across row

**When to Use:**
- Showing quantified business outcomes
- Proof slides (verified results)
- Economic impact summaries
- Comparison slides (before/after metrics)

#### 12. Diagram Style Guide

**Purpose:** Consistent visual language for diagrams across all templates.

**Line Weights:**
- **Primary paths/flows:** 2-3px stroke width
- **Secondary connections:** 1-2px stroke width
- **Borders/frames:** 1-2px stroke width
- **Emphasis:** Up to 4px for critical paths

**Arrowheads:**
- **Style:** Filled triangle or chevron
- **Size:** 8-12px width, 6-8px height
- **Color:** Match stroke color
- **Placement:** End of path, 0px offset

**SVG Implementation:**
```html
<svg width="100%" height="80" viewBox="0 0 800 80">
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7"
                refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-color)" />
        </marker>
    </defs>
    <path d="M 50 40 L 750 40"
          stroke="var(--accent-color)"
          stroke-width="2"
          fill="none"
          marker-end="url(#arrowhead)" />
</svg>
```

**Corner Radius:**
- **Boxes/cards:** 8px (soft, modern)
- **Emphasis boxes:** 12px (friendlier feel)
- **Small elements:** 4px (subtle softness)
- **Formal diagrams:** 0px (sharp, technical)

**Label Style:**
- **Font size:** 0.9-1rem (smaller than body text)
- **Font weight:** 600 (semibold for readability)
- **Color:** `var(--text-secondary)` or matching diagram color
- **Placement:** Above or beside element (never inside unless box is large)
- **Background:** Optional white background with padding for clarity

**Color Palette for Diagrams:**
- Use template-specific accent colors
- Max 3-4 colors per diagram
- Maintain semantic consistency (blue = input, green = output, etc.)
- Sufficient contrast (4.5:1 minimum) between elements

**Spacing & Alignment:**
- **Node spacing:** Minimum 60px between diagram elements
- **Grid alignment:** Align all elements to invisible grid (prevents messy appearance)
- **Consistent sizing:** Same-level elements should be same size
- **Vertical centering:** Center labels and text within shapes

**Common Diagram Types:**

**Flow Diagram:**
- Left-to-right flow (Western reading direction)
- Arrows show sequence
- 2-3px stroke weight
- Boxes with 8px radius

**Causal Chain:**
- Horizontal or chevron layout
- Progressive opacity or color intensity
- Labels inside or above boxes
- Final element emphasized (larger or different color)

**Hierarchy/Tree:**
- Top-down layout
- Thinner strokes for connections (1px)
- Parent boxes larger or darker than children
- Symmetric branching preferred

**Loop/Cycle:**
- Circular or curved path
- Dashed line for feedback (stroke-dasharray: "5,5")
- Arrow returns to start point
- Label describes loop function

---

### Template B Exclusive Patterns

#### 1. Lane Diagram (Horizontal Flow)
```html
<div class="lane-diagram">
    <div class="lane-row">
        <div class="lane-item">
            <div class="lane-label">Step 1</div>
            <p>Description</p>
        </div>
        <div class="lane-arrow">→</div>
        <div class="lane-item">
            <div class="lane-label">Step 2</div>
            <p>Description</p>
        </div>
    </div>
</div>
```

**Use Case:** Show horizontal causal flows
**Example:** Economic causal chain slides

#### 2. Invariant Frame (Boundary Definition)
```html
<div class="invariant-frame">
    <div class="frame-label">Core Invariant</div>
    <p>Content that represents fixed constraint or boundary condition</p>
</div>
```

**Use Case:** Highlight fixed constraints or boundaries
**Styling:** White background, thick border, label badge

#### 3. Three-Column Grid
```html
<div class="three-col-grid">
    <div class="grid-item">
        <strong>Item 1</strong>
        <p>Description</p>
    </div>
    <div class="grid-item">
        <strong>Item 2</strong>
        <p>Description</p>
    </div>
    <div class="grid-item">
        <strong>Item 3</strong>
        <p>Description</p>
    </div>
</div>
```

**Use Case:** Show three equal components in a row
**Styling:** Symmetric layout with equal spacing

#### 4. Constraint Text Footer
```html
<div class="constraint-text">
    Fixed constraint or key caveat text appears here
</div>
```

**Use Case:** Add constraint notes at bottom of slides
**Styling:** Gray background, smaller text, bottom-aligned

---

### Template C Exclusive Patterns

#### 1. Content Block
```html
<div class="content-block">
    <p><strong>Label:</strong> Content here</p>
    <ul class="clean-list">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
```

**Use Case:** Standard content container with vertical flow
**Styling:** Flex column with consistent gaps

#### 2. Highlight Box
```html
<div class="highlight-box">
    <p><strong>Emphasized Point</strong></p>
    <p>Supporting detail that needs visual emphasis</p>
</div>
```

**Use Case:** Callouts, important notes, key takeaways
**Styling:** Border-left accent, light background

#### 3. Split Layout (Comparison)
```html
<div class="split-layout">
    <div class="split-left">
        <p><strong>Option A</strong></p>
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
        </ul>
    </div>
    <div class="split-right">
        <p><strong>Option B</strong></p>
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
        </ul>
    </div>
</div>
```

**Use Case:** Compare/contrast two approaches or options
**Styling:** 50/50 split with gap

#### 4. Outcome Card
```html
<div class="outcome-card">
    <div class="outcome-value">$18k</div>
    <div class="outcome-label">Per Cohort Revenue</div>
    <p class="outcome-detail">Conservative estimate over 2 terms</p>
</div>
```

**Use Case:** Display specific metrics or outcomes
**Styling:** Large number, small label, detail text below

---

## 6.5 Visual Engagement Principles

### Overview

Visual engagement keeps audiences focused and prevents monotony across multi-slide presentations. These principles apply across all three templates but should be adapted to each template's design system.

### 1. Contrast & Focal Hierarchy

**Purpose:** Direct viewer attention to the most important element on each slide.

**Implementation:**
- **One dominant element per slide** - Scale, color, or position creates clear focal point
- **Contrast ratios:** Minimum 4.5:1 for body text, 7:1 for headings (WCAG AA)
- **Visual weight distribution:** 60% focal element, 30% supporting, 10% tertiary

**Techniques:**
- Size contrast (large heading vs smaller body)
- Color contrast (accent color vs neutral)
- Density contrast (dense text block vs white space)
- Position contrast (centered vs edge-aligned)

**Example:**
```html
<!-- Dominant element: Large metric -->
<div class="outcome-card" style="transform: scale(1.1);">
    <div class="outcome-value" style="font-size: 4rem; color: var(--accent-color);">$18k</div>
    <div class="outcome-label">Per Cohort Revenue</div>
</div>
<!-- Supporting elements: Smaller, muted -->
<ul style="font-size: 1rem; opacity: 0.8;">
    <li>Conservative estimate over 2 terms</li>
</ul>
```

### 2. Rhythm & Layout Variation Cadence

**Purpose:** Prevent visual monotony by varying slide layouts throughout the deck.

**Layout Variation Pattern:**
- **Every 2-3 slides:** Change layout pattern (list → diagram → split columns)
- **Every 4-5 slides:** Change visual density (text-heavy → visual-heavy)
- **Every 6-8 slides:** Introduce accent slide (different background color, bold statement)

**Rhythm Guidelines:**
- Opening: High visual impact (title slide, bold statement)
- Middle: Varied rhythm (problem → solution → evidence → outcome)
- Closing: Return to high impact (call-to-action, contact)

**Layout Cadence Example (11-slide deck):**
1. Title (high impact)
2. Problem (text + diagram)
3. Solution overview (split columns)
4. Solution details (process flow)
5. Economics (chevron chain)
6. **Accent slide** (bold statement, different background)
7. Evidence (measurement grid)
8. Outcomes (outcome cards)
9. Implementation (deployment phases)
10. Positioning (invariant frames)
11. Call-to-action (centered, high impact)

### 3. Asymmetry for Engagement

**Purpose:** Symmetric layouts feel static; strategic asymmetry creates visual tension and interest.

**Asymmetry Techniques:**
- **60/40 split** instead of 50/50 (e.g., text left 60%, image right 40%)
- **Off-center focal points** (position key element at 1/3 or 2/3 width)
- **Unequal column heights** in multi-column layouts
- **Diagonal elements** (arrows, chevrons) break horizontal/vertical monotony

**Rules:**
- Asymmetry must have purpose (guides eye flow, emphasizes hierarchy)
- Maintain balance (visual weight, not geometric symmetry)
- Avoid chaos (max 1-2 asymmetric elements per slide)

**Example:**
```html
<!-- 60/40 split instead of 50/50 -->
<div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px;">
    <div>
        <h3>Detailed explanation occupies more space</h3>
        <ul><li>Point 1</li><li>Point 2</li></ul>
    </div>
    <div class="highlight-box">
        <strong>Key takeaway</strong>
        <p>Concise, emphasized</p>
    </div>
</div>
```

### 4. White Space Optimization

**Purpose:** White space (negative space) prevents cognitive overload and guides eye movement.

**White Space Allocation:**
- **Minimum 30% of slide area** should be empty (no text, no graphics)
- **Breathing room:** 40-60px between major sections
- **Margins:** Never place content within 60px of slide edges (except intentional edge-to-edge design)

**Strategic White Space:**
- Around focal elements (isolates, emphasizes)
- Between list items (improves scannability)
- Left/right of headings (prevents wall-of-text feeling)

**Common Mistakes:**
- Filling all available space ("more is better" fallacy)
- Evenly distributing elements (creates flatness)
- Inconsistent gaps (10px here, 40px there)

### 5. Visual Tension Management

**Purpose:** Tension (unresolved visual elements) keeps viewers engaged, but too much creates confusion.

**Productive Tension:**
- **Arrows/chevrons pointing forward** - Implies continuation, forward momentum
- **Incomplete loops** - Implies process in motion (feedback loops)
- **Asymmetric positioning** - Implies direction, flow
- **Progressive opacity** (chevron chains) - Implies causal sequence

**Destructive Tension (Avoid):**
- Elements pointing off-slide (where does eye go?)
- Orphaned text blocks (no clear relationship to other elements)
- Competing focal points (two large elements fighting for attention)
- Misaligned grids (breaks visual coherence)

**Resolution Techniques:**
- Complete visual loops (arrows return to start)
- Align elements to consistent grid
- Use connecting elements (arrows, lines) to show relationships
- Limit to one "open" tension element per slide

### 6. Color Psychology & Semantic Coding

**Purpose:** Color conveys meaning beyond aesthetics.

**Template A (Vibrant) - Semantic Color:**
- Blue (`#2563eb`) = Primary action, key points, forward motion
- Green (`#16a34a`) = Positive outcomes, growth, success
- Yellow (`#ca8a04`) = Caution, constraints, limitations
- Red/Pink = Problems, risks, pain points

**Template B/C (Professional) - Hierarchy Color:**
- Dark backgrounds = Problem definition
- White backgrounds = Solution/system description
- Light gray = Economics, boundaries, constraints
- Minimal color variety = Professional, serious tone

**Usage Rules:**
- Consistent color meaning across deck (don't switch meanings mid-deck)
- Max 3-4 semantic colors per deck (prevents confusion)
- Reserve accent color for truly important elements (loses impact if overused)

### 7. Engagement Checklist (Per Slide)

When designing or reviewing a slide:

- [ ] **One clear focal point** - Eye knows where to look first
- [ ] **Contrast sufficient** - Text readable, hierarchy clear
- [ ] **White space adequate** - At least 30% empty space
- [ ] **Layout varied from previous slide** - Not repetitive
- [ ] **Asymmetry present (if appropriate)** - Not rigidly symmetric
- [ ] **Visual tension productive** - Arrows/flows make sense
- [ ] **Color semantics consistent** - Matches deck-wide meaning
- [ ] **Typography hierarchy clear** - h2 > h3 > body visually distinct

---

## 7. Content Guidelines

### Slide Hierarchy (All Templates)

**Hierarchy Enforcement Rules:**

Every slide must have **exactly one primary visual block** - the element that captures attention first. This prevents competing focal points and visual confusion.

**Primary Block Options:**
1. **h2 heading** - Default primary block for most slides
2. **Large metric/number** - Impact metric slides
3. **Diagram/visual** - Process flows, causal chains
4. **Emphasized card** - Card-dominant patterns

**Secondary elements support the primary block:**
- h3 subtitle (provides context)
- Body text (elaborates)
- Lists (details)
- Supporting graphics (clarifies)

**Standard Slide Hierarchy:**
```
h2 (Main Title) → 3-7 words, outcome-focused [PRIMARY BLOCK]
h3 (Subtitle) → 5-10 words MAX, context or constraint [SECONDARY]
Content → Using approved layout patterns [TERTIARY]
```

**H3 Maximum Length Enforcement:**
- **Strict limit:** 10 words maximum
- **Optimal:** 5-7 words
- **Character limit:** ~60-70 characters including spaces
- **Rationale:** Subtitles provide context, not full explanations
- **If longer:** Split into h3 + body paragraph, or shorten wording

**Visual Weight Distribution:**
- **Primary block:** 50-60% of visual weight
- **Secondary elements:** 30-40% of visual weight
- **Tertiary elements:** 10-20% of visual weight

**Enforcement Checklist:**
- [ ] One clear primary block identified
- [ ] h3 subtitle ≤ 10 words
- [ ] No competing focal points (e.g., two large elements of equal size)
- [ ] Visual hierarchy flows: primary → secondary → tertiary
- [ ] Eye can scan slide in intended order (top-to-bottom or focal-to-supporting)

**Title Slide Variations:**

**Template A:**
- Split-plane design (dark top, white bottom)
- h1 instead of h2
- Thesis statement + economic formula
- Inverted white logo on dark background

**Template B:**
- Centered layout with vertical margin auto
- Large logo above heading
- Simple thesis statement format
- No dedicated title-slide class

**Template C:**
- Regular slide structure (not title-optimized)
- Standard logo positioning (top-right)
- Content-first approach
- h2 used (not h1)

### Text Guidelines

**Headings:**
- **h2:** 3-7 words, action or outcome-focused
- **h3:** 5-10 words, provides context or constraint

**Body Text:**
- Keep paragraphs under 2-3 lines
- Use bullet points for lists
- Bold key terms and phrases
- Use strong emphasis sparingly

**Lists:**
- 3-5 items per list (maximum 7)
- Parallel structure (all start with verbs, or all nouns)
- Concise: 1-2 lines per item
- Use sub-bullets sparingly

### Visual Emphasis

**One Primary Element Rule:**

Each slide should emphasize **exactly one** primary element through:
- **Scale:** Larger than surrounding elements (1.5-2x size)
- **Color:** Accent color vs neutral surroundings
- **Position:** Centered or isolated with white space
- **Weight:** Bolder font weight or thicker borders

**Never:**
- Create two equally-weighted focal points
- Use all-caps for entire headings (reduces readability)
- Bold entire paragraphs (eliminates emphasis contrast)
- Use more than one accent color per slide (creates confusion)

**Template A (Color-Coded):**
- Blue = Primary actions, key points
- Green = Positive outcomes, growth
- Yellow = Caution, constraints
- Red/Pink = Problems, risks
- **Limit:** Max 2 semantic colors per slide (e.g., blue heading + green outcome)

**Template B & C (Hierarchy-Coded):**
- Dark backgrounds = Problem slides
- White backgrounds = System slides
- Light gray = Economic/boundary slides
- Emphasis through layout, not color variety
- **Limit:** One accent element per slide (border, background, or text color)

### Layout Hierarchy Rules

**Grid Alignment:**
- All elements must align to consistent grid
- Use CSS Grid or Flexbox for precise alignment
- Avoid pixel-pushing (manual positioning)

**Z-Index Hierarchy:**
1. Logo (always visible, but subtle)
2. Primary heading (h2)
3. Secondary heading (h3)
4. Content blocks (diagrams, lists, cards)
5. Background elements (textures, subtle graphics)

**Reading Flow:**
- **Western reading pattern:** Top-left → top-right → bottom-left → bottom-right
- **F-pattern:** Heading spans width, content blocks left-aligned
- **Z-pattern:** Title top-left, visual top-right, CTA bottom-right

**Violations to Avoid:**
- Orphaned text (disconnected from other elements)
- Centered body text (harder to scan than left-aligned)
- Inconsistent alignment (some left, some centered on same slide)
- Breaking visual grid without purpose

---

## 8. Navigation & Interaction

### Shared Navigation (All Templates)

**Controls:**
- Previous/Next buttons (bottom-right)
- Slide counter (current / total)

**Keyboard Shortcuts:**
- `→` Right Arrow → Next slide
- `Space` → Next slide
- `Enter` → Next slide
- `←` Left Arrow → Previous slide

**Button States:**
- Disabled at boundaries (first/last slide)
- Opacity changes when at edges (0.3 = disabled)

### Transitions

**All templates use:**
- Fade in/out (0.3-0.4s ease-in-out)
- Only one slide visible at a time
- First slide has `.active` class on page load

### Motion & Animation Constraints

**Standard Slide Transition:**
- **Type:** Fade only (opacity change)
- **Duration:** 0.3-0.4s
- **Easing:** `ease-in-out` (smooth acceleration/deceleration)
- **No horizontal/vertical sliding** (distracting, inconsistent PDF output)

**Approved Animation Types (Maximum 1-2 per deck):**

1. **Fade In (Current Standard)**
   - Smoothest, most professional
   - PDF-safe (renders correctly in static output)
   - Cognitive load: Minimal

2. **Scale + Fade (Optional Enhancement)**
   - Element scales from 0.95 to 1.0 while fading in
   - Subtle depth effect
   - Use sparingly (title slides, section dividers only)
   ```css
   @keyframes slideIn {
       from { opacity: 0; transform: scale(0.95); }
       to { opacity: 1; transform: scale(1); }
   }
   ```

**Forbidden Animations:**
- ❌ Horizontal slide (left/right) - Implies linear sequence, conflicts with branching narratives
- ❌ Vertical slide (up/down) - Disorienting
- ❌ Zoom in/out (>1.1 scale) - Motion sickness trigger
- ❌ Rotation - Gimmicky, no functional purpose
- ❌ 3D flips/cubes - Distracting, renders poorly in PDF

**Within-Slide Animation (Stagger Rules):**

If animating multiple elements on a single slide (e.g., list items appearing sequentially):

**Stagger Timing:**
- **First element:** 0s delay
- **Second element:** 0.1-0.15s delay
- **Third element:** 0.2-0.3s delay
- **Maximum elements to stagger:** 5 (beyond 5, appears sequential is tedious)
- **Total sequence duration:** < 1.5s (prevents audience impatience)

**Example:**
```css
.slide.active li:nth-child(1) { animation: fadeIn 0.4s ease-in-out 0s; }
.slide.active li:nth-child(2) { animation: fadeIn 0.4s ease-in-out 0.15s; }
.slide.active li:nth-child(3) { animation: fadeIn 0.4s ease-in-out 0.3s; }
```

**When to Avoid Motion:**
- **Bullet points:** Current system shows all at once (better for self-paced reading)
- **Diagrams:** Animate only if demonstrating sequence; otherwise show complete
- **Metrics:** Show all simultaneously (allows comparison)
- **PDFs:** All animations render as final state (design with static output in mind)

**Motion Accessibility:**
- Respect `prefers-reduced-motion` media query
- Provide instant transitions for users with vestibular disorders
```css
@media (prefers-reduced-motion: reduce) {
    .slide { transition: none !important; }
}
```

**Performance Guidelines:**
- Use CSS transitions/animations (GPU-accelerated)
- Avoid JavaScript-based animations (janky, CPU-intensive)
- Limit simultaneous animations to 3-5 elements max
- Test on lower-end devices (ensure smooth 60fps)

### JavaScript Implementation

```javascript
// Shared across all templates (to be centralized)
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSlideEl = document.getElementById('currentSlideNum');
    const totalSlidesEl = document.getElementById('totalSlidesNum');

    let currentSlide = 0;
    const totalSlides = slides.length;

    totalSlidesEl.textContent = totalSlides;
    updateSlide(currentSlide);

    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlideEl.textContent = index + 1;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;
        prevBtn.style.opacity = index === 0 ? '0.3' : '1';
        nextBtn.style.opacity = index === totalSlides - 1 ? '0.3' : '1';
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide(currentSlide);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide(currentSlide);
        }
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});
```

---

## 9. PDF Generation

### Shared Puppeteer Script

```javascript
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    const filePath = path.resolve(__dirname, 'index.html');
    const fileUrl = `file://${filePath}`;

    console.log(`Loading ${fileUrl}...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    await page.addStyleTag({
      content: `
      @media print {
        @page { size: 1280px 720px; margin: 0; }
        body { margin: 0; }
        .slide { break-after: always; page-break-after: always; }
      }
    `
    });

    console.log('Generating PDF...');
    await page.pdf({
      path: 'output.pdf',  // Template-specific via config
      printBackground: true,
      width: '1280px',
      height: '720px',
      landscape: false
    });

    console.log('PDF generated successfully');
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
```

### Template-Specific Outputs

**Current outputs:**
- `/presentation/` → `presentation_v1.8.pdf`
- `/pitch-a/` → `pitch_a.pdf`
- `/pitch-b/` → (no PDF currently generated)

### Requirements

- Puppeteer installed: `npm install puppeteer`
- All SVG assets in same directory as HTML
- Print backgrounds enabled in browser

### Command

```bash
# From within each template folder
node generate_pdf.js
```

---

## 10. Workflow & Best Practices

### Adding a New Slide

1. **Copy existing slide block:**
   ```html
   <div class="slide">
       <img src="logotype_trimmed.svg" alt="luminAIT" class="brand-logo">
       <h2>New Slide Title</h2>
       <h3>New Subtitle</h3>
       <!-- Content -->
   </div>
   ```

2. **Remove `.active` class** (only first slide should have it)

3. **Choose layout pattern** from template-specific library

4. **Replace content** with new material

5. **Test navigation** works correctly

6. **Regenerate PDF:** `node generate_pdf.js`

### Modifying Styling

1. **Edit `style.css`** only (avoid inline styles except title slide logo)
2. **Use existing CSS variables** for colors
3. **Test both screen and PDF output**
4. **Document new patterns** in this file if creating reusable components

### Updating Content

1. Edit HTML file (`index.html` or `pitch-b.html`)
2. Maintain semantic HTML structure
3. Use existing component classes
4. Validate with browser dev tools
5. Regenerate PDF

### Quality Checklist

**Structure:**
- [ ] Every slide has h2 and h3
- [ ] Logo appears on all non-title slides
- [ ] Slide count is accurate in controls
- [ ] First slide has `.active` class

**Content:**
- [ ] No slide exceeds 7 bullet points
- [ ] Headings are concise
- [ ] Text is scannable
- [ ] Key terms are bolded

**Design:**
- [ ] Colors use CSS variables
- [ ] Spacing is consistent
- [ ] Visual hierarchy is clear
- [ ] Layout patterns used correctly

**Technical:**
- [ ] Navigation works (keyboard + buttons)
- [ ] PDF generates without errors
- [ ] All assets load correctly
- [ ] No console errors

### Deck-Level Engagement QA Checklist

**Purpose:** Ensure visual engagement and variation across the entire deck, not just individual slides.

This checklist should be run after completing the full deck to audit overall engagement quality.

#### Layout Variation Cadence

Audit slide layout patterns across the deck:

- [ ] **No more than 2 consecutive slides** use identical layout pattern
- [ ] **Every 3-4 slides:** Layout pattern changes (list → diagram → split → cards)
- [ ] **Every 5-7 slides:** Visual density shifts (text-heavy → visual-heavy)
- [ ] **At least 1 section divider** if deck has 10+ slides

**Layout Pattern Inventory:**
- Count how many slides use each pattern (lists, diagrams, split columns, etc.)
- Ensure no single pattern dominates (max 40% of deck)
- Verify transitions between patterns feel intentional, not random

#### Contrast Mix Validation

Audit visual contrast and focal point distribution:

- [ ] **Every slide has one clear focal point** (no competing elements)
- [ ] **At least 3 different focal point types** across deck (heading, metric, diagram, visual)
- [ ] **Color contrast ratios meet WCAG AA** (4.5:1 body, 7:1 headings)
- [ ] **Background variety:** At least 2 different background treatments (if deck > 8 slides)

**Contrast Patterns:**
- Opening: High contrast (dark bg or large heading)
- Middle: Varied contrast (mix of approaches)
- Closing: High contrast (return to impact)

#### Visual Rhythm Audit

Evaluate pacing and visual interest over time:

- [ ] **No visual monotony:** Layout changes prevent repetitive feel
- [ ] **Rhythm pattern identified:** Problem → Solution → Proof → Outcome (or similar)
- [ ] **Accent slides present:** 1-2 high-impact slides with distinct treatment
- [ ] **White space varies:** Dense slides followed by spacious slides for breathing room

**Rhythm Test:**
- Flip through deck rapidly (2 seconds per slide)
- Should feel varied, not monotonous
- Should have clear visual "peaks" (high impact slides) and "valleys" (supporting detail)

#### Engagement Red Flags

Common issues that reduce engagement:

**Visual:**
- [ ] ❌ **More than 3 consecutive text-only slides** (add diagrams, metrics, or visuals)
- [ ] ❌ **Identical heading sizes across all slides** (vary for emphasis)
- [ ] ❌ **Same color palette on every slide** (introduce accent variations)
- [ ] ❌ **No visual breaks** (every slide feels equally dense)

**Hierarchy:**
- [ ] ❌ **Competing focal points** on multiple slides (unclear where to look)
- [ ] ❌ **Headings too long** (multiple h2 or h3 exceed character limits)
- [ ] ❌ **Lists exceed 7 items** (break into multiple slides or condense)
- [ ] ❌ **No primary element** (flat visual hierarchy)

**Readability:**
- [ ] ❌ **Text too small** (< 1rem body, < 3rem h2)
- [ ] ❌ **Insufficient contrast** (light gray text on white background)
- [ ] ❌ **Walls of text** (paragraphs > 3 lines without breaks)
- [ ] ❌ **Inconsistent spacing** (gaps vary wildly between slides)

#### Deck Coherence Check

Ensure deck feels unified, not like a collection of random slides:

- [ ] **Visual style consistent** (colors, fonts, spacing match design system)
- [ ] **Logo placement consistent** (same position on all standard slides)
- [ ] **Pattern usage consistent** (e.g., blue always means "primary action")
- [ ] **Navigation narrative clear** (story flows from slide to slide)

**Coherence Test Questions:**
1. Can you identify which template this is at a glance?
2. Do accent colors have consistent meaning across slides?
3. Does each slide feel like part of the same deck?
4. Is visual complexity balanced (not all simple, not all complex)?

#### Performance Metrics (Engagement Goals)

Target metrics for effective decks:

- **Layout variety:** Minimum 4 different patterns across 10-slide deck
- **Focal point distribution:** No focal type > 50% of slides
- **White space:** Minimum 30% empty space per slide (average)
- **Text density:** Maximum 40% of slides are text-heavy
- **Visual peaks:** 2-3 high-impact slides per 10-slide deck
- **Section breaks:** 1 divider per 8-10 slides (if deck is sectioned)

#### Final Engagement Review

Before finalizing deck:

1. **Rapid flip test:** Flip through deck at 2s per slide - does it feel varied and engaging?
2. **5-minute glance test:** Can someone understand core narrative from headings alone?
3. **Squint test:** Blur eyes - do focal points stand out clearly?
4. **Colleague review:** Ask someone unfamiliar with deck "What stands out?" on each slide
5. **PDF export test:** Does deck maintain visual interest in static PDF format?

---

## 11. Template Selection Guide

### Decision Matrix

| Criteria | Template A (Partnership) | Template B (Infrastructure) | Template C (Scaling) |
|----------|-------------------------|----------------------------|---------------------|
| **Audience** | Full partnership evaluation | Business partners | Educational institutions |
| **Depth** | Comprehensive (13 slides) | Strategic (11 slides) | Operational (11 slides) |
| **Focus** | Economic transformation | Teaching infrastructure | Scaling mechanics |
| **Visual System** | Vibrant, color-coded | Professional, type-based | Simple, content-first |
| **Complexity** | High (8+ layout patterns) | Medium (lane diagrams, frames) | Low (minimal components) |
| **Commercial Details** | Full pricing ($75k) | Phase model | Specific cohort revenue ($18k) |
| **Best For** | Full B2B partnership pitch | Systems thinking emphasis | Operational clarity |
| **Maintenance** | High (747 lines CSS) | Medium (428 lines CSS) | Low (377 lines CSS) |

### Use Template A When:
- Presenting full partnership economics
- Commercial/financial details are critical
- Need advanced visual patterns
- Audience expects comprehensive framework
- B2C proof + B2B monetization both matter

### Use Template B When:
- Emphasizing structural/systems thinking
- Problem-solution narrative is primary
- Need clear slide type differentiation
- Professional, subdued visual approach preferred
- Highlighting teaching infrastructure as solution

### Use Template C When:
- Explaining specific implementation mechanics
- Audience needs operational/tactical clarity
- Focus is on scalable units and constraints
- Simpler maintenance is priority
- Want to show specific revenue calculations

---

## 12. Troubleshooting

### Slide Not Showing
- **Check:** Another slide has `.active` class
- **Check:** Slide is inside `.deck-container`
- **Fix:** Remove extra `.active` classes

### Navigation Broken
- **Check:** `script.js` is loaded in HTML
- **Check:** Browser console for JavaScript errors
- **Check:** Button IDs match script selectors (`prevBtn`, `nextBtn`)
- **Fix:** Verify DOM element IDs are correct

### PDF Generation Fails
- **Check:** Puppeteer installed (`npm install puppeteer`)
- **Check:** File paths in `generate_pdf.js` are correct
- **Check:** All SVG assets are accessible
- **Fix:** Run `npm install` in presentation folder

### Styling Issues
- **Check:** CSS variable names match design system
- **Check:** Class names for typos
- **Use:** Browser dev tools to inspect element styles
- **Fix:** Verify CSS file is linked in HTML `<head>`

### Logo Not Appearing
- **Check:** SVG file exists in same directory as HTML
- **Check:** Path in `<img src="">` is correct
- **Fix:** Verify file name matches (case-sensitive)

---

## 13. Migration Plan (Shared Core)

### Phase 1: Create Shared Core
1. Create `/presentation-core/` folder
2. Move `script.js` to core (single source)
3. Move `generate_pdf.js` to core (with config support)
4. Move assets to `/presentation-core/assets/`

### Phase 2: Update Templates
1. Update each HTML to reference `../presentation-core/script.js`
2. Create `config.json` in each template folder
3. Update PDF generator to read config for output path
4. Test all three presentations

### Phase 3: Clean Up
1. Delete duplicate `script.js` files from templates
2. Delete duplicate `generate_pdf.js` files
3. Delete duplicate asset files
4. Update documentation

### Phase 4: Validation
1. Test navigation in all three templates
2. Generate PDFs for all three
3. Verify no broken links or missing assets
4. Commit changes

### Config File Structure (Proposed)

```json
{
  "templateName": "Partnership Economics Overview",
  "htmlFile": "index.html",
  "pdfOutput": "presentation_v1.8.pdf",
  "slideCount": 13,
  "designSystem": "vibrant-blue"
}
```

---

## Version History

- **v2.1** (2026-02-06): Added visual engagement priorities and logo usage rules (Issue #99)
  - New Section 5.5: Logo & Logotype Usage (placement, sizing, dark/light variants)
  - New Section 6.5: Visual Engagement Principles (contrast, rhythm, asymmetry, white space, tension)
  - Enhanced typography system with headline constraints and emphasis rules
  - Added background treatment and image usage guidelines
  - New slide patterns: Section divider, impact metric, diagram style guide
  - Strengthened hierarchy rules with one primary element enforcement
  - Motion/transition constraints and stagger timing rules
  - Deck-level engagement QA checklist for overall visual rhythm audit
- **v2.0** (2026-02-05): Comprehensive documentation covering all three templates
- **v1.0** (2026-02-05): Initial documentation for `/presentation/` only

---

## Next Steps

1. **Refactor to shared core** (eliminate duplication)
2. **Create build script** for generating all presentations
3. **Add template config files** for customization
4. **Automate PDF generation** for all templates at once

---

## Contact & Support

For questions or issues with the presentation system, refer to the main project documentation in `/docs/` or contact the luminAIT development team.
