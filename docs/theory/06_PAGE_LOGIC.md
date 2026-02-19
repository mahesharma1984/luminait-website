# 06: Page Logic

**Purpose:** Define the canonical semantic section types that every page — web or presentation — assembles from. Page logic sits between theory (which defines *what* needs to be communicated) and architecture (which defines *how* it's rendered in a specific medium).

**Status:** Active — canonical
**Date:** February 19, 2026
**Version:** 1.0

**Related:**
- `00_COMMERCIAL_THESIS.md` — defines what must be proved (economics, mechanism, infrastructure)
- `01_CREDENCE_PROBLEM.md` — defines why proof must be visible and structured
- `02_CUSTOMER_JOURNEY.md` — defines the sequence audiences need
- `../technical/SITE_ARCHITECTURE.md` — web-specific page composition using these types
- `../technical/LAYOUT_PATTERNS.md` — web-specific visual patterns per logic type
- `../technical/VISUAL_ENGAGEMENT.md` — shared visual principles across media
- `../PRESENTATION_SYSTEM.md` — presentation-specific patterns per logic type

---

## 1. The Core Idea

Every page communicates by assembling sections. Each section has a semantic job — it answers a specific kind of question for the audience. These jobs are finite and recurring.

A method page and a partnership page both need to show "how the system works." A presentation deck and a web page both need to show "why the economics improve." The content differs; the section type is the same.

**Page logic types** are the vocabulary for these section jobs. They are medium-independent: the same type appears as a slide in a presentation, a scrollable section on a web page, or a panel in a PDF. What changes is the layout pattern (the visual expression), not the semantic job.

```
Theory layer        → What the business needs to communicate
Page logic layer    → What kind of section communicates it (THIS DOC)
Architecture layer  → How that section type renders in a specific medium
```

---

## 2. The Six Page Logic Types

### 2.1 `type-problem`

**Job:** Establish what's broken, missing, or at risk. Frame the context that makes everything else necessary.

**Answers:** "Why does this matter?" / "What's the structural issue?"

**Constraints:**
- States the problem as a structural condition, not a complaint
- Names the mechanism that creates the problem (not just symptoms)
- Does not propose a solution — that's `type-system`

**Examples in use:**
- Presentation Template B: "The Variable Teacher Problem" (invariant frame slide)
- Presentation Template A: "The Teaching Quality Problem" (triangle layout)
- Method page: implicit — no dedicated problem section because audience arrives with problem already felt (parent searching for tutoring)

**When to include:** When the audience doesn't yet understand *why* the product's approach is necessary. B2B pages almost always need this. Parent-facing pages often skip it because the parent's search query IS the problem statement.

**Typical position:** First or second section. Never after `type-economics`.

---

### 2.2 `type-system`

**Job:** Show the mechanism — how the product works. Answer "what happens" with enough structural detail that the audience can see the moving parts.

**Answers:** "How does this work?" / "What are the components?" / "What's the process?"

**Constraints:**
- Shows mechanism, not outcome. "Artefacts + measurement → delivery → outputs" is system. "Students improve 34%" is outcome.
- Uses stepped visuals: timelines, pipelines, maps, lane diagrams, phase cards
- Each component should be concrete enough to link to proof (an artefact, a page, an example)
- Prefer process language (verb-led) over feature language (noun-led)

**Examples in use:**
- Method page: 3-step process (Annotation → Structured Activity → Analytical Writing) with alternating text + video
- Method page: 10-week plan grid (4 phase cards)
- Partnership page (planned): 3-term timeline (Implement → Stabilise → Replicate)
- Partnership page (planned): Infrastructure map (Artefacts → Measurement → Delivery → Outputs → Economics)
- Presentation Template A: Process flow slides, deployment phase cards
- Presentation Template B: Lane diagrams, 3-column grids

**Composition rule:** A `type-system` section should precede any `type-economics` section. You can't claim revenue growth without first showing the mechanism that produces it.

**Typical position:** After `type-problem` or hero. Core of the page.

---

### 2.3 `type-economics`

**Job:** Show why the numbers improve. Connect the mechanism (from `type-system`) to financial or outcome metrics through a causal chain.

**Answers:** "Why does revenue grow?" / "Why does retention improve?" / "What drives the unit economics?"

**Constraints:**
- Must trace causality, not just state outcomes. "Teaching consistency → parents see progress → higher trust → higher retention" is a causal chain. "Retention is 85%" is just a metric.
- Quantified where possible, but the chain matters more than the number
- Should reference the mechanism shown in the preceding `type-system` section

**Examples in use:**
- Presentation Template A: Chevron chain (progression), measurement grid (dual metrics)
- Presentation Template C: Outcome cards with specific cohort revenue ($18k)
- Partnership page (planned): "Why revenue increases" causal chain panel
- Commercial thesis §2: Cohort economics three-phase model (Ramp → Stabilisation → Steady State)

**Prerequisite:** A `type-system` section must appear before `type-economics` on the same page. The causal chain references the mechanism.

**Typical position:** Middle-to-late. After at least one `type-system` section.

---

### 2.4 `type-proof`

**Job:** Show evidence that the system works. Point to verifiable artefacts, not claims. The proof section doesn't argue — it links.

**Answers:** "Can I see it?" / "What does the output look like?" / "Is this real?"

**Constraints:**
- Links to artefacts or embeds examples — never makes unsupported claims
- One representative example per asset type communicates pattern over volume
- Each proof element should have: title, 1-line description, link or embed
- Proof sections can be interactive (tabs, loops, previews) or static (card grids with links)

**Examples in use:**
- Method page: "What students produce" — 3 artifact cards (annotation, worksheet, essay) with links
- Method page: Outcomes band with metric links
- Partnership page: Infrastructure showcase — 4 proof-link cards pointing to annotation guide, method page, parent guide, school page
- Partnership page (planned): Artefact preview tabs with looping video/animation
- Presentation Template A: Impact metric slides, evidence slides
- Annotation preview pages: The entire page IS proof (the annotation guide itself)

**Composition rule:** Proof sections can appear anywhere after a `type-system` section. They are strongest adjacent to `type-economics` (justifying the numbers) or adjacent to `type-action` (reducing friction at the conversion point — this is the validation loop from 03_VALIDATION_LOOP.md).

**Typical position:** Flexible. Often interleaved with `type-system` and `type-economics`.

---

### 2.5 `type-boundary`

**Job:** Clarify what the product IS and ISN'T. Define scope, constraints, and positioning. Reduce ambiguity about what the audience is evaluating.

**Answers:** "What's included?" / "What's not included?" / "How is this different from X?"

**Constraints:**
- Uses comparison structure: IS / ISN'T, included / not included, this / not that
- States constraints as design choices, not limitations ("We build one cohort at a time" not "We can only handle one cohort")
- Tone is precise, not defensive

**Examples in use:**
- Presentation Template B: Invariant frame slides (what doesn't change)
- Presentation Template A: Engagement structure split (What We Deliver / What You Provide)
- Partnership page: Split grid — what luminAIT delivers vs. what the partner provides
- Commercial thesis §3: "Unit of Scale" — cohorts are discrete, not elastic

**When to include:** When there's a real risk of misunderstanding scope. B2B pages need this (partners must know what they're responsible for). Method/annotation pages rarely need it (the audience isn't evaluating scope).

**Typical position:** After `type-system`, before or alongside `type-economics`. Never first.

---

### 2.6 `type-action`

**Job:** Convert attention into a specific next step. Present the CTA with enough context that the audience knows exactly what they're committing to.

**Answers:** "What do I do next?" / "What does it cost?" / "How do I start?"

**Constraints:**
- One primary CTA per page. Secondary CTAs are permitted but visually subordinate.
- Adjacent to proof whenever possible (validation loop principle: spike motivation at the friction point)
- Includes: action button + brief context (price, time commitment, what happens next)
- Visually distinct from the rest of the page (gradient background, colour shift, or clear visual break)

**Examples in use:**
- Method page: Enrol section with gradient background, price grid, two CTAs (primary: "Enquire Now", secondary: "View text guides")
- Partnership page: CTA panel with gradient — "Request an Engagement Proposal"
- Annotation preview page: Download gate + method bridge CTA
- Presentation Template A: Pricing block slide, commercial terms slide

**Composition rule:** `type-action` is always last (or near-last). It should follow at least one `type-proof` section.

**Typical position:** Final section on every page that has a conversion goal.

---

## 3. Composition Rules

### 3.1 Ordering Constraints

These are hard rules, not preferences:

| Rule | Rationale |
|---|---|
| `type-system` before `type-economics` | Can't claim growth without showing the mechanism |
| `type-proof` after at least one `type-system` | Proof validates a system; proof without context is noise |
| `type-action` last (or near-last) | Audience needs system + proof before they act |
| `type-problem` first (when present) | Problem frames everything that follows |
| `type-boundary` never first | Defining scope before showing the system is premature |

### 3.2 The Standard Narrative Arc

Most pages follow this sequence:

```
[problem] → system → [economics] → proof → [boundary] → action
```

Brackets indicate optional types. The minimal viable page is:

```
system → proof → action
```

The method page follows this minimal arc (system = 3-step method + 10-week plan, proof = artefacts + outcomes, action = enrol). It skips problem and boundary because the parent audience arrives with the problem already felt and doesn't need scope definition.

The partnership page follows the full arc (problem implied in hero, system = timeline + infrastructure map, economics = causal chain, proof = showcase links, boundary = split grid, action = engagement CTA).

### 3.3 Section Density by Page Type

| Page Type | Typical Sections | Reason |
|---|---|---|
| B2B partnership | 6-8 sections | Full proof chain needed; buyer evaluates system comprehensively |
| Method/pedagogy | 5-6 sections | Shows complete system; replaces multiple former pages |
| Annotation preview | 4-5 sections | Proof-heavy; the page itself IS infrastructure |
| Homepage router | 1-2 sections | Minimal; routes to other pages |
| Presentation deck | 8-13 slides | Each slide ≈ one section; constrained by viewport |

---

## 4. Page Logic Applied to Current Pages

### 4.1 Method Page (`/method/`)

| Section | Logic Type | Content |
|---|---|---|
| Hero + jump nav | — (navigation scaffold) | Title, description, anchor links |
| The Method | `type-system` | 3-step process with alternating text + video |
| 10-Week Plan | `type-system` | 4-phase grid (Foundation → Analysis → Writing → Body → Completion) |
| What Students Produce | `type-proof` | 3 artifact cards with links |
| Outcomes | `type-proof` | Outcome list + metric links |
| Measurement | `type-proof` | Brief measurement anchor |
| Enrol | `type-action` | Gradient CTA with price grid |

**Arc:** system → system → proof → proof → proof → action

This is a proof-heavy page. Two system sections establish the method, then three proof sections reinforce it before the CTA. No problem section (audience arrives with problem felt). No economics section (parent-facing pages don't need unit economics). No boundary section (scope is clear from context).

### 4.2 Partnership Page (`/partners/`)

| Section | Logic Type | Content |
|---|---|---|
| Hero + economics card | `type-economics` (opening claim) | Lifecycle revenue number + formula |
| 3-Term Timeline (planned) | `type-system` | Implement → Stabilise → Replicate |
| Why Revenue Increases (planned) | `type-economics` | Causal chain + conversion/retention drivers |
| Engagement Structure | `type-boundary` | What We Deliver / What You Provide split |
| Infrastructure Showcase | `type-proof` | Proof-link cards to annotation guide, method, parent guide, school page |
| Outcomes | `type-proof` | Outcomes band + baseline strip |
| CTA | `type-action` | Gradient panel — request engagement proposal |

**Arc:** economics (claim) → system → economics (justification) → boundary → proof → proof → action

This page front-loads the economic claim, then justifies it with system and detailed economics, defines boundaries, shows proof, and converts. The leading economics section works here because the B2B audience is evaluating an investment — the number is the hook.

**Note:** The hero's leading `type-economics` is an exception to the "system before economics" rule. It works because the economics card is a claim, not a causal chain. The detailed causal justification still follows the system section.

### 4.3 Annotation Preview Page (`/annotations/[text]/`)

| Section | Logic Type | Content |
|---|---|---|
| Hero | — | Text title, pattern name, hook |
| Preview | `type-proof` | Annotation guide preview (the artefact itself) |
| Method Explanation | `type-system` | Brief method context (how annotations fit the system) |
| Download Gate | `type-action` | Download CTA (primary) |
| Method Bridge | `type-system` + `type-proof` | Link to method page showing the full system |
| Secondary CTA | `type-action` | Enquire (secondary) |

**Arc:** proof → system → action → system/proof → action

This is an unusual page because the proof IS the product. The annotation guide preview dominates. System sections provide just enough context to make the proof meaningful.

### 4.4 Presentation Decks

Each presentation deck maps to the same logic types:

| Template | Slide Sequence (logic types) |
|---|---|
| A (Partnership Economics) | problem → system → system → economics → economics → proof → boundary → action |
| B (Infrastructure) | problem → problem → system → system → system → boundary → proof → action |
| C (Scaling) | system → system → economics → economics → proof → boundary → action |

The presentations use more granular sections (one per slide) but follow the same arc and composition rules.

---

## 5. Hero Sections and Logic Types

Heroes are not a logic type — they're a **framing device** that can express any type's content in a condensed form. The hero's job is to establish what the page is about and create enough pull to scroll.

| Page | Hero Expresses | Why |
|---|---|---|
| Method | System (compressed) | "Here's how we teach" — the method IS the page |
| Partners | Economics (claim) | "$18-20k cohort lifecycle revenue" — the number is the hook |
| Annotation | Proof (preview) | The text name + pattern hook — the artefact IS the page |
| Homepage | Routing (neither) | Bifurcated paths — the hero routes, not argues |

Heroes can contain an economic claim, a system summary, or a proof preview. What they should NOT do is argue — that's the body's job. The hero compresses; the body justifies.

---

## 6. Visualization Opportunities by Logic Type

Each logic type has natural visual expressions. These are medium-independent — the specific CSS/layout implementation lives in `LAYOUT_PATTERNS.md` (web) or `PRESENTATION_SYSTEM.md` (decks).

| Logic Type | Natural Visualizations |
|---|---|
| `type-problem` | Constraint diagrams, invariant frames, "what happens without this" sequences |
| `type-system` | Timelines, pipelines, lane diagrams, phase cards, stepped process visuals, flow maps with connectors |
| `type-economics` | Causal chain arrows, chevron progressions, metric highlight cards, before/after comparisons |
| `type-proof` | Artefact embeds, tabbed previews, looping video/animation, card grids with links, sample previews |
| `type-boundary` | Split columns (IS/ISN'T), included/excluded lists, comparison tables |
| `type-action` | Gradient panels, price cards, button groups, gradient CTAs with adjacent proof |

**Key principle:** The visualization should make the section's job visually obvious. A `type-system` section should look like a process or mechanism (stepped, directional). A `type-proof` section should look like evidence (embedded, linkable, concrete). If the visual doesn't match the semantic job, the section is mis-typed or mis-designed.

---

## 7. Relationship to Other Docs

```
docs/theory/
├── 00_COMMERCIAL_THESIS.md      What must be communicated (content)
├── 01_CREDENCE_PROBLEM.md       Why proof must be structured (constraint)
├── 02_CUSTOMER_JOURNEY.md       What sequence audiences need (ordering)
├── 03_VALIDATION_LOOP.md        How proof rescues friction (placement)
├── 04_CONTENT_DERIVATION.md     Where content comes from (source)
├── 05_CHANNEL_ALIGNMENT.md      Which channels carry which jobs (distribution)
└── 06_PAGE_LOGIC.md             ← THIS: What semantic types build pages (composition)

docs/technical/
├── SITE_ARCHITECTURE.md         Which pages exist and what they contain (web)
├── LAYOUT_PATTERNS.md           Web-specific visual patterns per logic type (web rendering)
├── VISUAL_ENGAGEMENT.md         Shared visual principles (cross-medium)
├── DESIGN_SYSTEM.md             CSS tokens and shared components (web implementation)
└── BUILD_SYSTEM.md              Template pipeline and build scripts (web build)

docs/
└── PRESENTATION_SYSTEM.md       Presentation-specific patterns and build (deck rendering)
```

**How they connect:**

1. Theory docs (00–05) define WHAT needs communicating and WHY.
2. Page logic (06) defines the SECTION TYPES that carry that communication.
3. Architecture docs define WHERE those section types appear (which pages, which slides).
4. Layout/visual docs define HOW those section types render (CSS patterns, visual principles).

---

## 8. Anti-Patterns

| Anti-Pattern | Why It Fails | Fix |
|---|---|---|
| Economics before system | Claims without mechanism feel ungrounded | Move system section before economics |
| Proof without system context | Evidence without framework is noise | Add brief system framing before proof |
| Action without adjacent proof | CTA at the friction point lacks validation loop support | Place proof section before or alongside action |
| Problem section on parent-facing pages | Parents arrive with problem felt; re-stating it feels patronising | Skip problem; lead with system |
| Boundary section first | Defining limits before showing value is defensive | Lead with system or problem |
| Mixed-type sections | A section that tries to be both system and economics is unclear | Split into two sections with distinct jobs |
| Feature lists masquerading as system | "We offer X, Y, Z" is not a mechanism | Restructure as a process or pipeline showing how components connect |

---

**END OF DOCUMENT**
