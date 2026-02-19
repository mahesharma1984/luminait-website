# VISUAL ENGAGEMENT — Shared Principles

**Purpose:** Visual design principles that apply across both web pages and presentation decks. These are medium-independent rules extracted from `PRESENTATION_SYSTEM.md` §6.5 and generalised for all surfaces.

**Status:** Active — canonical
**Date:** February 19, 2026
**Version:** 1.0

**Related:**
- `../theory/06_PAGE_LOGIC.md` — defines what each section communicates (semantic layer)
- `LAYOUT_PATTERNS.md` — web-specific rendering of each section type
- `DESIGN_SYSTEM.md` — CSS tokens and component library
- `../PRESENTATION_SYSTEM.md` — presentation-specific application of these principles

---

## 1. Why This Doc Exists

The presentation system had detailed visual engagement principles (§6.5) covering focal hierarchy, rhythm, spacing, and colour semantics. The website had none. This doc extracts those principles into a shared reference and adds web-specific application notes.

**Scope:** This doc covers *principles* — the reasoning behind visual decisions. It does not cover *patterns* (specific CSS layouts, which live in `LAYOUT_PATTERNS.md`) or *tokens* (specific values, which live in `DESIGN_SYSTEM.md`).

---

## 2. Focal Hierarchy

### 2.1 The Rule

Every section (web) or slide (presentation) has **exactly one primary visual element**. This element receives the most visual weight. Everything else is supporting or tertiary.

**Weight distribution target:** 60% focal element, 30% supporting, 10% tertiary.

### 2.2 How to Create Focal Weight

| Technique | How It Works |
|---|---|
| **Scale** | Focal element is 1.5–2× larger than surrounding elements |
| **Colour** | Focal element uses accent colour; surroundings use neutral |
| **Position** | Focal element is centred or isolated with surrounding white space |
| **Weight** | Bolder font weight or thicker borders on focal element |
| **Contrast** | Focal element has highest contrast ratio against background |

### 2.3 What NOT to Do

- Two equally-weighted focal points in the same section/slide (creates competition)
- All-caps for entire headings (reduces readability, flattens hierarchy)
- Bold entire paragraphs (eliminates emphasis contrast)
- More than one accent colour per section (creates confusion)

### 2.4 Focal Point Types by Page Logic

| Logic Type | Typical Focal Point |
|---|---|
| `type-system` | The process visual (timeline, pipeline, phase grid) |
| `type-economics` | The causal chain or the headline metric number |
| `type-proof` | The embedded artefact or preview |
| `type-boundary` | The split comparison (both columns together form the focal unit) |
| `type-action` | The primary CTA button |
| `type-problem` | The constraint statement or the problem diagram |

### 2.5 WCAG Contrast Requirements

| Element | Minimum Contrast Ratio |
|---|---|
| Body text | 4.5:1 against background |
| Headings | 7:1 against background |
| Interactive elements | 3:1 against adjacent colours |
| Disabled elements | No minimum (greyed out by convention) |

---

## 3. Colour Semantics

### 3.1 Semantic Colour Map

Colours carry consistent meaning across the site and presentations. These meanings are invariant.

| Colour | Token | Semantic Meaning | Use For |
|---|---|---|---|
| Royal blue | `var(--primary)` / `#2563EB` | Primary action, key points, system elements | CTAs, links, active states, system diagrams |
| Emerald green | `var(--accent)` / `#059669` | Positive outcomes, growth, success signals | Metrics, outcome indicators, growth numbers |
| Amber | `var(--warm)` / `#D97706` | Caution, constraints, attention needed | Warnings, constraint markers, attention badges |
| Slate text | `var(--text-dark)` / `#111827` | Information hierarchy | Headlines, labels |
| Light text | `var(--text-light)` / `#64748B` | Supporting context | Descriptions, metadata, footnotes |

### 3.2 Colour Usage Rules

- **Maximum 2 semantic colours per section** (e.g. blue heading + green metric)
- **Blue is the default accent.** Use green only for growth/outcome metrics. Use amber only for constraints or warnings.
- **No red on web pages.** Red implies error or danger. Problem framing uses structural language and positioning, not colour alarm.
- **Presentation exception:** Template A uses a broader palette (blue, green, yellow, red) because slides have more controlled viewing contexts. Web pages should be more restrained.

### 3.3 Background Treatments

| Background | Token | When to Use |
|---|---|---|
| Warm paper | `var(--bg-paper)` / `#FDFCF8` | Default page background |
| White | `var(--bg-white)` / `#FFFFFF` | Cards, elevated surfaces, content containers |
| Soft section | `var(--section-soft)` | Outcomes bands, soft-emphasis sections |
| Gradient (blue) | `linear-gradient(135deg, var(--primary-dark), var(--primary))` | Action sections / CTAs only |
| Dark (presentations only) | Slate-800+ | Problem slides in decks. Not used on web pages. |

---

## 4. White Space

### 4.1 The Rule

White space is not empty space — it's structural. It creates grouping, separation, and breathing room.

**Minimum white space:** 30% of any viewport (web section or slide) should be empty.

### 4.2 Spacing Scale

The spacing scale uses an 8px base (from `base.css`):

| Token | Value | Use For |
|---|---|---|
| `--space-xs` | 4px | Tight gaps between inline elements |
| `--space-sm` | 8px | Gaps between related items in a group |
| `--space-md` | 16px | Standard component padding, grid gaps |
| `--space-lg` | 24px | Section internal padding, card padding |
| `--space-xl` | 32px | Major section padding |
| `--space-2xl` | 48px | Large vertical gaps between major sections |
| `--space-3xl` | 64px | Page-level vertical rhythm |

### 4.3 Spacing Allocation by Component

| Component | Spacing Rule |
|---|---|
| Hero section | `3.8rem` top padding, `2rem` bottom → top-heavy for visual anchor |
| Content sections | `3.25rem` vertical padding, separated by `1px` top border |
| Card internal padding | `0.9rem–1.2rem` depending on density |
| Grid gaps | `0.8rem` (compact grids) to `1.25rem` (airy grids) |
| Between section title and content | `1rem–1.35rem` |
| Edge margins (page-level) | Handled by container max-width + auto margin |

### 4.4 When to Add More Space

If a section feels cramped or visually noisy:
1. First check: is the content trying to do two jobs? (Split into two sections)
2. Then check: is the grid too dense? (Reduce columns or increase gap)
3. Then check: is the section padding sufficient? (Increase to next spacing token)
4. Last resort: add a visual break (outcomes band, baseline strip) between dense sections

---

## 5. Layout Rhythm and Variation

### 5.1 The Rule (Web Pages)

**Vary layout density every 2-3 sections.** A page where every section uses the same layout pattern (e.g. all 3-column grids) creates visual monotony.

### 5.2 Density Spectrum

| Density Level | Examples | Visual Character |
|---|---|---|
| **High** | 4-column grid, connected map, alternating steps with video | Complex, many elements, high information density |
| **Medium** | 3-column card grid, split grid, causal chain | Moderate elements, clear structure |
| **Low** | Outcomes band, baseline strip, single paragraph + metric | Few elements, breathing room |
| **Action** | Gradient CTA panel | Visually distinct break from content |

### 5.3 Rhythm Patterns

Good page rhythms:

```
Method page:  High → High → Medium → Low → Low → Action
              (3-step) (4-grid) (3-grid) (band)  (brief)  (gradient)

Partners:     Medium → High → Medium → Medium → Medium → Low → Action
              (hero+card) (timeline) (causal) (split) (proof) (outcomes) (CTA)
```

Bad page rhythm:

```
              High → High → High → High → Action
              (monotonous — every section looks the same)
```

### 5.4 The Rule (Presentations)

- Every 2-3 slides: change layout pattern
- Every 4-5 slides: change visual density
- Every 6-8 slides: introduce an accent slide (section divider, impact metric)
- Maximum 40% of deck uses a single pattern

### 5.5 Rhythm Audit Checklist

For web pages (adapt from presentation deck-level QA):

- [ ] No two adjacent sections use identical layout patterns
- [ ] At least 3 different pattern types across the page
- [ ] Density varies: high sections are followed by medium or low
- [ ] Action section is visually distinct from everything above it
- [ ] On rapid scroll, the page feels varied, not repetitive

---

## 6. Asymmetry and Visual Tension

### 6.1 Productive Asymmetry

Slight asymmetry creates visual interest. Pure symmetry can feel static.

| Technique | Application |
|---|---|
| **60/40 content splits** | Instead of 50/50 columns, give the visual slightly more or less space |
| **Off-centre focal points** | Place the primary element at 1/3 or 2/3 width, not dead centre |
| **Top-heavy heroes** | More padding above the h1 than below (anchors the page visually) |
| **Unequal card heights** | Allow natural content-driven height variation in grids (don't force equal height unless cards are truly equivalent) |

### 6.2 Productive vs Destructive Tension

**Productive tension** (use):
- Arrows pointing forward (progress, flow)
- Process that builds toward completion
- Asymmetric positioning that draws the eye along a path

**Destructive tension** (avoid):
- Elements that point off-screen or off-section (feels unresolved)
- Orphaned blocks (disconnected from any visual group)
- Competing focal points (eye bounces between two equally weighted elements)

---

## 7. Typography Hierarchy

### 7.1 Web Page Scale

| Element | Font | Size | Weight | Colour |
|---|---|---|---|---|
| h1 | Fraunces, serif | `clamp(2rem, 4vw, 3rem)` | 700 | `var(--text-dark)` |
| h2 | Fraunces, serif | `1.4–1.6rem` | 700 | `var(--text-dark)` |
| h3 | DM Sans, sans-serif | `1–1.1rem` | 600 | `var(--text-dark)` |
| Body | DM Sans, sans-serif | `0.95–1.08rem` | 400 | `var(--text-main)` |
| Labels | DM Sans, sans-serif | `0.75rem` uppercase | 600 | `var(--text-light)` |
| Small / footnotes | DM Sans, sans-serif | `0.85–0.9rem` | 400 | `var(--text-light)` |

### 7.2 Headline Constraints

| Element | Word Limit | Max Width | Rationale |
|---|---|---|---|
| h1 (page title) | 6-10 words | `900px` container | Must be scannable in <2 seconds |
| h2 (section title) | 3-7 words | Natural container width | Section titles should be glanceable |
| h3 (subsection) | 5-12 words | Card/column width | Provides context without competing with h2 |
| Description paragraph | 1-2 sentences | `760px` | Longer descriptions need their own block, not hero subtitle |

### 7.3 Presentation Scale (Reference)

Presentation typography uses larger sizes for projected display:

| Element | Size | Weight |
|---|---|---|
| h1 (title slides) | 3.5–4rem | 800 |
| h2 (slide titles) | 3–3.5rem | 800 |
| h3 (subtitles) | 1.4–1.5rem | 600 |
| Body | 1.1–1.2rem | 400 |
| Small | 0.9–1rem | 400 |

---

## 8. Diagram Style Guide

### 8.1 When to Use Diagrams

Diagrams are appropriate for `type-system` and `type-economics` sections where the content shows connections, flows, or causality. They are NOT appropriate for `type-proof` (use artefact embeds instead) or `type-action` (use CTAs).

### 8.2 Diagram Specifications

| Element | Specification |
|---|---|
| **Primary connectors** | `2–3px` solid, `rgba(0, 0, 0, 0.12)` or `var(--primary)` at 30% opacity |
| **Secondary connectors** | `1–2px` solid or dashed, lighter opacity |
| **Arrowheads** | 8–12px width, filled triangle, same colour as connector |
| **Node cards** | Same styling as artefact cards (white, border, radius, padding) |
| **Node titles** | h3 weight and size |
| **Node descriptions** | Body text size, `var(--text-light)` |
| **Corner radius** | `8px` (soft) for most nodes, `4px` (subtle) for tight grids |
| **Label styling** | Uppercase, `0.75rem`, placed above or beside connectors |

### 8.3 Diagram Types and Logic Type Alignment

| Diagram Type | Best For | Logic Type |
|---|---|---|
| **Flow (linear)** | Sequential processes | `type-system` |
| **Pipeline (multi-lane)** | Parallel processes with handoffs | `type-system` |
| **Causal chain** | One thing causing the next | `type-economics` |
| **Hub-and-spoke** | Central concept with peripheral proofs | `type-proof` (as navigation aid) |
| **Hierarchy/tree** | Subordination relationships | `type-boundary` |
| **Loop** | Feedback or iterative processes | `type-system` (validation loop) |

### 8.4 Web vs Presentation Differences

| Aspect | Web | Presentation |
|---|---|---|
| **Connector implementation** | CSS borders, pseudo-elements, or inline SVG | CSS borders or embedded SVG |
| **Interactivity** | Hover states on nodes (optional) | None (static) |
| **Responsive** | Must linearise to vertical on mobile | Fixed viewport |
| **Max complexity** | 5-7 nodes (viewport constraint) | 3-5 nodes per slide (cognitive constraint) |
| **Colour** | Restrained (blue + grey) | Template-dependent (A: vibrant, B/C: restrained) |

---

## 9. Motion and Animation (Web)

### 9.1 General Principle

Motion on web pages should be functional (clarifying state changes) not decorative (attracting attention). Less is more.

### 9.2 Approved Animations

| Animation | Where | Duration | Easing |
|---|---|---|---|
| Card hover lift | All interactive cards | `0.2s` | `ease` |
| Tab content crossfade | Tabbed preview panels | `0.4s` | `ease` |
| Scroll-triggered opacity | Step blocks (scrollytelling) | `0.5s` | `ease` |
| Video playback | Muted autoplay loops | N/A (continuous) | N/A |

### 9.3 Forbidden Animations

- Parallax scrolling (distracting, performance-heavy)
- Horizontal slide-in from off-screen (implies separate page)
- Bounce or spring effects (playful, wrong tone)
- Auto-advancing carousels (users should control their pace)
- Decorative particle effects (no functional purpose)

### 9.4 Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```

All pages must respect the `prefers-reduced-motion` media query. Autoplay videos should use `muted` and `playsinline` attributes. Provide poster images as static fallbacks.

---

## 10. Engagement Audit Checklist (Web Pages)

Run this checklist after building or significantly modifying a page.

### Visual Hierarchy
- [ ] Every section has one clear focal point
- [ ] No competing focal points in the same viewport
- [ ] Heading hierarchy is clear (h1 > h2 > h3, no skips)
- [ ] Accent colour used for emphasis, not decoration

### Layout Rhythm
- [ ] No two adjacent sections use identical layout patterns
- [ ] At least 3 different pattern types across the page
- [ ] Density varies (high sections followed by medium or low)
- [ ] Action section is visually distinct

### White Space
- [ ] Sections don't feel cramped
- [ ] Cards have sufficient internal padding (≥ `0.9rem`)
- [ ] Grid gaps are consistent within each section
- [ ] Page-level containers prevent full-bleed content (max-width applied)

### Colour
- [ ] Maximum 2 semantic colours per section
- [ ] Colours carry consistent meaning (blue = action, green = growth)
- [ ] No hardcoded colour values (all use CSS variables)
- [ ] Contrast ratios meet WCAG AA

### Typography
- [ ] Headlines are scannable (within word limits)
- [ ] Body text is readable (adequate line-height, appropriate size)
- [ ] Labels are clearly subordinate to headings
- [ ] No all-caps headings

### Responsive
- [ ] Grids collapse correctly at breakpoints
- [ ] Touch targets are ≥ 44px × 44px
- [ ] Text remains readable on mobile (no truncation)
- [ ] Videos maintain aspect ratio

### Rapid Scroll Test
- [ ] Scroll through the page in 5 seconds — does it feel varied and structured?
- [ ] Can you identify the action section instantly? (It should be visually distinct)
- [ ] Do section boundaries feel clear?

---

**END OF DOCUMENT**
