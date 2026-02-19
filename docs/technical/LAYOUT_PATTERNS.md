# LAYOUT PATTERNS — Web Pages

**Purpose:** Web-specific layout patterns for each page logic type. This is the rendering layer: how each semantic section type from `06_PAGE_LOGIC.md` appears on a scrolling web page.

**Status:** Active — canonical
**Date:** February 19, 2026
**Version:** 1.0

**Related:**
- `../theory/06_PAGE_LOGIC.md` — defines the semantic section types these patterns render
- `DESIGN_SYSTEM.md` — CSS tokens, component library, import order
- `SITE_ARCHITECTURE.md` — which pages exist and what sections each has
- `VISUAL_ENGAGEMENT.md` — shared visual principles (focal hierarchy, rhythm, spacing)
- `../PRESENTATION_SYSTEM.md` §6 — equivalent patterns for presentation slides

---

## 1. How This Doc Works

Each page logic type has 2–4 standard layout patterns. When building a page section, identify the logic type first (from `06_PAGE_LOGIC.md`), then select a pattern from this doc.

**Selection rule:** Use the simplest pattern that communicates the section's job. Add complexity only when the content requires it.

**CSS rule:** All patterns use design tokens from `base.css` and components from `page-components.css`. Page-specific overrides should be < 50 lines per page (per DESIGN_SYSTEM.md §8). Hardcoded colours are forbidden.

---

## 2. Hero Patterns

Heroes are framing devices, not a logic type. They establish what the page is about.

### 2.1 Centred Hero (default)

**Use when:** The page has a single clear subject. Most pages.

```
┌─────────────────────────────────────────┐
│              [kicker badge]             │
│           h1: Page Title                │
│    p: 1-2 line description (max 760px)  │
│         [jump nav pills]               │
└─────────────────────────────────────────┘
```

**Implementation reference:** Method page hero (`.method-hero`), Partners page hero (`.partners-hero`).

**Specifications:**
- Padding: `3.8rem 0 2rem` (top-heavy for visual weight)
- Max-width: `900px`, centred
- h1: `clamp(2rem, 4vw, 3rem)`
- Description: `1.08rem`, `line-height: 1.7`, `color: var(--text-main)`
- Jump nav: flex-wrap pills with `border-radius: var(--radius-full)`, uppercase, `0.85rem`

### 2.2 Hero with Embedded Proof Card

**Use when:** The page leads with a quantified claim (e.g. partnership page economics).

```
┌─────────────────────────────────────────┐
│              [kicker badge]             │
│           h1: Page Title                │
│    p: 1-2 line description              │
│  ┌─────────────────────────────────┐    │
│  │  Proof card: formula / metric   │    │
│  │  Footnote: supporting context   │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

**Implementation reference:** Partners page (`.economics-card`).

**Specifications:**
- Card: white background, `border: 1px solid rgba(37, 99, 235, 0.2)`, `border-radius: var(--radius-lg)`, `padding: 1.5rem`, `box-shadow: var(--shadow-md)`
- Formula text: `'Fraunces', serif`, `clamp(1.35rem, 3vw, 1.9rem)`, `color: var(--primary-dark)`
- Note: `0.95rem`, `color: var(--text-light)`

### 2.3 Bifurcated Router Hero

**Use when:** The page routes to two distinct audience paths (e.g. homepage).

```
┌─────────────────────────────────────────┐
│           h1: Thesis Statement          │
│  ┌───────────────┐ ┌───────────────┐    │
│  │  Path A Card  │ │  Path B Card  │    │
│  │  Description  │ │  Description  │    │
│  │    [CTA →]    │ │    [CTA →]    │    │
│  └───────────────┘ └───────────────┘    │
└─────────────────────────────────────────┘
```

**Implementation reference:** Homepage router (planned, SITE_ARCHITECTURE §4).

**Specifications:**
- Two equal-width cards using `.grid-2`
- Each card: hover lift, distinct accent colour per path
- Mobile: stack vertically

---

## 3. `type-system` Patterns

System sections show mechanism. They should look directional, stepped, or structured.

### 3.1 Alternating Steps

**Use when:** Showing a sequential process with 2-4 steps. Each step pairs text with a visual (video, image, or diagram).

```
┌──────────────────────────────────────────────┐
│  Step 1                                      │
│  ┌──────────────┐  ┌──────────────────────┐  │
│  │  Text block  │  │   Visual / Video     │  │
│  │  (left)      │  │   (right)            │  │
│  └──────────────┘  └──────────────────────┘  │
│                                              │
│  Step 2                                      │
│  ┌──────────────────────┐  ┌──────────────┐  │
│  │   Visual / Video     │  │  Text block  │  │
│  │   (left)             │  │  (right)     │  │
│  └──────────────────────┘  └──────────────┘  │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Method page 3-step process (`.method-step` + `.grid.grid-2`).

**Specifications:**
- Grid: `.grid.grid-2`, `align-items: center`
- Step number: `'Fraunces', serif`, `2.4rem`, `color: var(--primary-light)`, `opacity: 0.45`
- Border between steps: `1px solid rgba(0, 0, 0, 0.05)` top border
- Video container: white background, `border-radius: var(--radius-md)`, `box-shadow: var(--shadow-md)`
- Mobile: stack vertically, text above visual

### 3.2 Phase Grid

**Use when:** Showing a multi-phase plan or timeline where phases are parallel, not sequential.

```
┌──────────────────────────────────────────────┐
│  h2: Section Title                           │
│  p: 1-line description                       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │Phase │ │Phase │ │Phase │ │Phase │       │
│  │  1   │ │  2   │ │  3   │ │  4   │       │
│  │ desc │ │ desc │ │ desc │ │ desc │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Method page 10-week plan (`.plan-grid`).

**Specifications:**
- Grid: `grid-template-columns: repeat(4, minmax(0, 1fr))`, `gap: 0.8rem`
- Cards: white, `border: 1px solid rgba(0, 0, 0, 0.08)`, `border-radius: var(--radius-md)`, `padding: 0.9rem`
- h3: `1rem`, `color: var(--text-dark)`, `margin: 0 0 0.35rem`
- Description: `0.9rem`, `color: var(--text-light)`, `line-height: 1.55`
- Responsive: 2 columns at `< 950px`, 1 column at `< 700px`

### 3.3 Term Timeline (horizontal / vertical)

**Use when:** Showing a phased progression over time where each phase has a distinct outcome signal.

```
Desktop (horizontal):
┌──────────────────────────────────────────────────────────┐
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │  Term 1     │ →  │  Term 2     │ →  │  Term 3     │  │
│  │  Implement  │    │  Stabilise  │    │  Replicate  │  │
│  │  • bullet   │    │  • bullet   │    │  • bullet   │  │
│  │  • bullet   │    │  • bullet   │    │  • bullet   │  │
│  │  Signal:... │    │  Signal:... │    │  Signal:... │  │
│  └─────────────┘    └─────────────┘    └─────────────┘  │
│  Footnote: lifecycle context                             │
└──────────────────────────────────────────────────────────┘
```

**Implementation reference:** Partnership page (planned). Adapts from `.plan-grid` + presentation chevron chain pattern.

**Specifications:**
- Grid: `grid-template-columns: repeat(3, minmax(0, 1fr))`, `gap: 1.25rem`
- Connector arrows: CSS `::after` pseudo-elements or thin SVG lines between cards
- Each term card: white background, left border accent (`4px solid var(--primary)` for active, lighter for future), `padding: 1.2rem`
- Outcome signal line: `font-weight: 600`, `color: var(--accent)`, `font-size: 0.9rem`
- Footnote: `0.92rem`, `color: var(--text-light)`, below grid
- Mobile: vertical stack, connector arrows become vertical

### 3.4 Connected Systems Map

**Use when:** Showing how components connect to each other (not a linear process but a network or pipeline).

```
┌──────────────────────────────────────────────────────┐
│  ┌──────────┐   ┌──────────────┐   ┌──────────┐     │
│  │Artefacts │──→│  Delivery    │──→│ Outputs  │     │
│  │• Guide   │   │• Tutor cadence│  │• Student │     │
│  │• Sheet   │   │• Weekly loop │   │  work    │     │
│  │  [link]  │   │  [link]      │   │  [link]  │     │
│  └──────────┘   └──────────────┘   └──────────┘     │
│       ↑                                  │           │
│  ┌──────────┐                    ┌───────▼──────┐   │
│  │Measurement│                   │  Economics   │   │
│  │• Integrity│                   │• Conversion  │   │
│  │  [link]   │                   │• Retention   │   │
│  └──────────┘                    └──────────────┘   │
└──────────────────────────────────────────────────────┘
```

**Implementation reference:** Partnership page (planned). New pattern.

**Specifications:**
- Nodes: card-style (white, border, radius, padding) — same base as `.proof-link-card`
- Connectors: thin lines (`2px solid rgba(0, 0, 0, 0.12)`) with CSS-drawn or SVG arrowheads
- Each node: title, 1-line description, optional "View example →" link
- Layout: CSS Grid with explicit column/row placement, or flexbox with absolute-positioned connectors
- Mobile: linearise into a vertical stack with downward arrows
- Max-width: `1000px` centred

---

## 4. `type-economics` Patterns

Economics sections show causality. They should look like chains, progressions, or causal flows.

### 4.1 Causal Chain

**Use when:** Showing how one improvement causes the next (e.g. teaching consistency → parent trust → higher retention).

```
┌──────────────────────────────────────────────┐
│  h2: Why Revenue Increases                   │
│                                              │
│  ┌───────┐   ┌───────┐   ┌───────┐          │
│  │ Cause │ → │ Cause │ → │Effect │          │
│  │ 1     │   │ 2     │   │       │          │
│  └───────┘   └───────┘   └───────┘          │
│                                              │
│  ┌────────────────────┬──────────────────┐   │
│  │ Conversion Drivers │ Retention Drivers│   │
│  │ • bullet           │ • bullet         │   │
│  │ • bullet           │ • bullet         │   │
│  └────────────────────┴──────────────────┘   │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Partnership page (planned). Adapts from presentation chevron chain.

**Specifications:**
- Chain nodes: inline-flex items with arrow connectors (CSS `::after`)
- Node styling: `background: var(--primary-light)`, `border-radius: var(--radius-md)`, `padding: 0.6rem 1rem`
- Arrow: CSS triangle or `→` character, `color: var(--primary)`
- Driver subsections: `.split-grid` (2-column), each with h3 + bulleted list
- Mobile: chain wraps vertically; driver columns stack

### 4.2 Metric Highlight Cards

**Use when:** Presenting 2-4 quantified outcomes with brief context.

```
┌──────────────────────────────────────────────────┐
│  ┌──────────────┐ ┌──────────────┐ ┌──────────┐ │
│  │   +34%       │ │   85%        │ │  $18k    │ │
│  │  Writing     │ │  Retention   │ │  Cohort  │ │
│  │  improvement │ │  rate        │ │  revenue │ │
│  └──────────────┘ └──────────────┘ └──────────┘ │
└──────────────────────────────────────────────────┘
```

**Implementation reference:** Adapts from method page metric links and presentation impact metric slides.

**Specifications:**
- Grid: `repeat(auto-fit, minmax(200px, 1fr))`, `gap: 1rem`
- Metric number: `'Fraunces', serif`, `2.5rem`, `font-weight: 700`, `color: var(--accent)` (green for growth) or `color: var(--primary)` (blue for structural)
- Label: uppercase, `0.75rem`, `letter-spacing: 0.1em`, `color: var(--text-light)`
- Context line: `0.95rem`, `color: var(--text-main)`

---

## 5. `type-proof` Patterns

Proof sections show evidence. They should look concrete, linkable, and embedded.

### 5.1 Artefact Card Grid

**Use when:** Linking to 2-4 proof artefacts. Each card points to a real page or asset.

```
┌──────────────────────────────────────────────┐
│  ┌──────────────┐ ┌──────────────┐ ┌──────┐ │
│  │  [label]     │ │  [label]     │ │[label]│ │
│  │  Title       │ │  Title       │ │Title  │ │
│  │  1-line desc │ │  1-line desc │ │1-line │ │
│  │  View →      │ │  View →      │ │View → │ │
│  └──────────────┘ └──────────────┘ └──────┘ │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Method page artefact grid (`.artifact-grid`, `.artifact-card`), Partners page proof grid (`.proof-grid`, `.proof-link-card`).

**Specifications:**
- Grid: `repeat(3, minmax(0, 1fr))` (artefacts) or `repeat(2, minmax(0, 1fr))` (proof links), `gap: 0.8rem–1rem`
- Card: white, `border: 1px solid rgba(0, 0, 0, 0.08)`, `border-radius: var(--radius-md)`, `padding: 1rem`
- Label: uppercase, `0.75rem`, `font-weight: 700`, `color: var(--primary)`
- Link: `font-weight: 700`, `color: var(--primary)`, `0.9rem`
- Hover: `translateY(-2px)`, `box-shadow: var(--shadow-md)`
- Mobile: 1 column

### 5.2 Outcomes Band

**Use when:** Presenting a soft-background summary of results or outcomes, typically with bullet points.

```
┌──────────────────────────────────────────────┐
│  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐  │
│  │  Soft background band                  │  │
│  │  • Outcome statement 1                 │  │
│  │  • Outcome statement 2                 │  │
│  │  • Outcome statement 3                 │  │
│  │  [metric pill links]                   │  │
│  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘  │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Method page outcomes band (`.outcomes-band`), Partners page outcomes band.

**Specifications:**
- Band: `background: var(--section-soft)`, `border: 1px solid rgba(0, 0, 0, 0.07)`, `border-radius: var(--radius-md)`, `padding: 1rem`
- List: `padding-left: 1.1rem`, `line-height: 1.7`, `color: var(--text-main)`
- Metric links (optional): flex-wrap pills, white background, `border: 1px solid rgba(0, 0, 0, 0.15)`, `border-radius: var(--radius-sm)`, `0.85rem`, `font-weight: 700`

### 5.3 Tabbed Preview (interactive)

**Use when:** Showing multiple artefact types that share the same display space. User switches between views.

```
┌──────────────────────────────────────────────┐
│  [Annotation] [Worksheet] [Report]  ← tabs   │
│  ┌──────────────────────────────────────┐    │
│  │                                      │    │
│  │   Preview content / looping video    │    │
│  │                                      │    │
│  └──────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Partnership page (planned). New pattern.

**Specifications:**
- Tab bar: flex, `gap: 0.6rem`, pill-style buttons matching jump nav styling
- Active tab: `background: var(--primary)`, `color: white`
- Inactive tab: `background: white`, `border: 1px solid rgba(0, 0, 0, 0.14)`
- Preview area: aspect-ratio `16/9` container, white background, `border-radius: var(--radius-md)`, `box-shadow: var(--shadow-md)`
- Video: `<video muted playsinline autoplay loop>` with poster fallback image
- Crossfade: `transition: opacity 0.4s ease`

### 5.4 Baseline Strip

**Use when:** Providing a brief contextual qualifier or methodology note beneath proof content.

```
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
│  Dashed border, white bg                    │
│  "Baseline: [qualifying statement]"         │
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
```

**Implementation reference:** Partners page (`.baseline-strip`).

**Specifications:**
- `font-size: 0.92rem`, `color: var(--text-light)`, white background
- `border: 1px dashed rgba(0, 0, 0, 0.15)`, `border-radius: var(--radius-sm)`, `padding: 0.8rem`

---

## 6. `type-boundary` Patterns

Boundary sections clarify scope. They should look balanced, comparative, and clear.

### 6.1 Split Grid (IS / ISN'T)

**Use when:** Showing two parallel lists (what's included vs. not, what we deliver vs. what you provide).

```
┌──────────────────────────────────────────────┐
│  ┌───────────────────┐ ┌──────────────────┐  │
│  │  What We Deliver  │ │ What You Provide │  │
│  │  • item           │ │ • item           │  │
│  │  • item           │ │ • item           │  │
│  │  • item           │ │ • item           │  │
│  └───────────────────┘ └──────────────────┘  │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Partners page engagement structure (`.split-grid`, `.split-card`).

**Specifications:**
- Grid: `repeat(2, minmax(0, 1fr))`, `gap: 1.25rem`
- Cards: white, `border: 1px solid rgba(0, 0, 0, 0.08)`, `border-radius: var(--radius-md)`, `padding: 1.2rem`
- h3: `1.1rem`, `color: var(--text-dark)`, `margin: 0 0 0.75rem`
- List: `padding-left: 1.1rem`, `color: var(--text-main)`, `line-height: 1.75`
- Mobile: stack vertically

---

## 7. `type-action` Patterns

Action sections convert. They should be visually distinct and contain everything needed to act.

### 7.1 Gradient CTA Panel

**Use when:** The page has a single primary conversion goal.

```
┌──────────────────────────────────────────────┐
│  ╔══════════════════════════════════════════╗ │
│  ║  h2: Call to Action Title               ║ │
│  ║  p: 1-line context                      ║ │
│  ║  [Primary CTA]  [Secondary CTA]        ║ │
│  ╚══════════════════════════════════════════╝ │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Partners page CTA (`.cta-panel`), Method page enrol (`.enrol-section`).

**Specifications:**
- Background: `linear-gradient(135deg, var(--primary-dark), var(--primary))`
- `color: white`, `border-radius: var(--radius-lg)`, `padding: 1.4rem–1.6rem`, `text-align: center`
- Primary button: `background: white`, `color: var(--primary-dark)`, `font-weight: 700`, `border-radius: var(--radius-sm)`, `padding: 0.7rem 1rem`
- Secondary button: `border: 1px solid rgba(255, 255, 255, 0.7)`, `color: white`
- Button container: `display: flex`, `gap: 0.75rem`, `justify-content: center`, `flex-wrap: wrap`

### 7.2 CTA with Price Grid

**Use when:** The conversion includes pricing options.

```
┌──────────────────────────────────────────────┐
│  ╔══════════════════════════════════════════╗ │
│  ║  h2: Enrol Now                          ║ │
│  ║  ┌───────────┐  ┌───────────┐           ║ │
│  ║  │ Option A  │  │ Option B  │           ║ │
│  ║  │ $XXX/term │  │ $XXX/term │           ║ │
│  ║  │ details   │  │ details   │           ║ │
│  ║  └───────────┘  └───────────┘           ║ │
│  ║  [Enquire Now]  [View Guides]           ║ │
│  ╚══════════════════════════════════════════╝ │
└──────────────────────────────────────────────┘
```

**Implementation reference:** Method page enrol section (`.enrol-section`, `.price-grid`, `.price-card`).

**Specifications:**
- Price grid: `repeat(2, minmax(0, 1fr))`, `gap: 0.7rem`, inside gradient panel
- Price cards: `background: rgba(255, 255, 255, 0.14)`, `border: 1px solid rgba(255, 255, 255, 0.3)`, `border-radius: var(--radius-md)`, `padding: 0.9rem`
- Card h3: `color: white`, `1rem`
- Card description: `color: rgba(255, 255, 255, 0.9)`, `0.9rem`

---

## 8. Section Spacing and Rhythm

### 8.1 Vertical Spacing

| Between | Spacing | CSS |
|---|---|---|
| Hero → first section | `3rem` | Built into hero bottom padding |
| Section → section | `3.25rem` | `.partners-section { padding: 3.25rem 0; }` |
| Section border | `1px solid rgba(0, 0, 0, 0.05)` top border | Thin visual break |
| Elements within section | `0.8rem–1.25rem` | Component-specific gaps |

### 8.2 Container Widths

| Content Type | Max-Width | CSS Reference |
|---|---|---|
| Narrow text (descriptions, paragraphs) | `760px` | `.partners-subtitle` |
| Standard content sections | `800px` | `.content-section` |
| Hero containers | `900–920px` | `.method-hero`, `.partners-hero` |
| Wide content (grids, maps, full-width) | `1000–1200px` | `.content-section-wide`, `.content-container` |

### 8.3 Visual Rhythm Rule

**Vary layout density every 2-3 sections.** The method page achieves this:

```
Dense   → Dense   → Medium → Light  → Light  → Action
(3-step) (4-grid) (3-grid) (band)  (brief)  (gradient)
```

This prevents monotony. If two adjacent sections have identical density (e.g. both 4-column grids), interpose a lighter section (outcomes band, brief paragraph).

---

## 9. Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 950px` | Full multi-column grids, side-by-side layouts |
| `700px–950px` | Reduce columns (4→2, 3→2), maintain side-by-side for splits |
| `< 700px` | Single column, stacked layouts, full-width cards |
| `< 600px` | Text grid single column, increased touch targets |

**Responsive rules:**
- All grids collapse to single column at `< 700px`
- Split grids collapse at `< 700px` (not `< 950px` — they're more readable as pairs)
- Video containers maintain `16:9` aspect ratio at all sizes
- Touch targets: minimum `44px × 44px` for all interactive elements
- Font scaling: use `clamp()` for h1/h2 (`clamp(2rem, 4vw, 3rem)`)

---

## 10. Pattern Selection Guide

| I need to show... | Logic Type | Pattern | Reference |
|---|---|---|---|
| A sequential process (2-4 steps) | `type-system` | Alternating Steps | §3.1 |
| A multi-phase plan | `type-system` | Phase Grid | §3.2 |
| A phased timeline with outcomes | `type-system` | Term Timeline | §3.3 |
| How components connect | `type-system` | Connected Systems Map | §3.4 |
| Why metrics improve (causally) | `type-economics` | Causal Chain | §4.1 |
| Key metrics with context | `type-economics` | Metric Highlight Cards | §4.2 |
| Links to proof artefacts | `type-proof` | Artefact Card Grid | §5.1 |
| Outcome summaries | `type-proof` | Outcomes Band | §5.2 |
| Multiple artefact previews | `type-proof` | Tabbed Preview | §5.3 |
| Qualifying context | `type-proof` | Baseline Strip | §5.4 |
| Scope / responsibility split | `type-boundary` | Split Grid | §6.1 |
| Primary conversion CTA | `type-action` | Gradient CTA Panel | §7.1 |
| Conversion with pricing | `type-action` | CTA with Price Grid | §7.2 |

---

## 11. Adding New Patterns

When a new page requires a pattern not listed here:

1. **Check if an existing pattern can be adapted.** Most cases are variations of existing patterns with different content.
2. **If genuinely new:** define the pattern with an ASCII wireframe, specify all CSS values using design tokens, and add it to the appropriate logic type section in this doc.
3. **Build the pattern in the page-specific `<style>` block first** (< 50 lines). If it's reused across 2+ pages, promote it to `page-components.css`.
4. **Document the responsive behaviour.** Every pattern needs a mobile stack specification.

---

**END OF DOCUMENT**
