# SITE ARCHITECTURE v5.0

**Date:** February 19, 2026
**Status:** Active — canonical reference for site structure and URL patterns
**Supersedes:** v4.0 (B2B primary but parent-direct still live)
**Related:** [Commercial Thesis](../theory/00_COMMERCIAL_THESIS.md) (B2B anchor), [Credence Problem](../theory/01_CREDENCE_PROBLEM.md) (proof strategy), [Customer Journey](../theory/02_CUSTOMER_JOURNEY.md) (parent funnel — archived), [Funnel Strategy](./FUNNEL_STRATEGY.md) (funnel hierarchy), [Content Map](./CONTENT_MAP.md) (production priorities)
**Archived sources:** `../_archive/FUNNEL_ARCHITECTURE_v2_0.md`, `../_archive/METHODOLOGY_DEMO_SPEC_v1_0.md`, `../_archive/FRAMEWORK_Credence_Conversion_Touchpoints_v1_2.md`

---

## 1. OVERVIEW

### 1.1 Strategy

B2B cohort-build partnership is the **PRIMARY** commercial strategy. The site exists to support this sale.

The live site is lean: a B2B partnership page, a condensed teaching method page, annotation guides, and minimal supporting pages. Parent-direct funnel pages (text grid homepage, individual course outlines, school directory, enrollment page) are **archived** — accessible at their URLs for SEO equity and B2B showcase linking, but removed from navigation.

### 1.2 Architectural Principles

These principles derive from the theory chain (see §2) and inform every page decision:

1. **Credence bypass through text-specificity.** Both parents and B2B buyers face the credence problem. Text-specific proof creates verifiable claims. Lead with what can be verified.
2. **Pattern over volume.** One annotation guide proving the template exists is more powerful to a B2B buyer than 21 parent guides showing volume. The system's value is in the repeatable pattern, not the count.
3. **Condensation.** Six separate marketing pages (course, syllabus, method, sample, progress, results) collapse into one page showing the complete system. Shorter path = higher conversion.
4. **Dual-duty assets.** Annotation guides ARE the infrastructure (not descriptions of it). A student downloads them; a B2B buyer evaluates them as proof. Same page, two lenses.
5. **Hub-and-spoke for B2B.** The B2B buyer sees the system from above, not through a linear funnel. Partnership page links out to proof, buyer explores, returns to CTA.
6. **B2B messaging constrained.** B2B language lives ONLY on `/partners/`. Everything else demonstrates infrastructure value through its own audience's lens.

### 1.3 Site Map

```
luminait.app/
│
├── LIVE (navigable) ──────────────────────────────────────────
│   │
│   ├── /                        Homepage (minimal router)
│   ├── /partners/               B2B partnership page [PRIMARY]
│   ├── /method/                 Condensed method page
│   ├── /annotations/            Annotation guides hub
│   │   └── /annotations/[text]/ Text-specific preview + download
│   └── /about/                  About (minimal credibility)
│
├── ACCESSIBLE (unlisted) ─────────────────────────────────────
│   │   Kept for SEO equity + B2B showcase links.
│   │   Not in navigation. Accessible via direct URL.
│   │
│   ├── /[text-slug]/            Parent curriculum guides (8 root)
│   ├── /curriculum/[text]/      Parent curriculum guides (10 more)
│   └── /schools/[school]/       School pages (5)
│
├── PRODUCTION (not public) ───────────────────────────────────
│   │
│   └── /studio/                 Video scene production tool
│       ├── /studio/scenes/      Auto-generated scene pages
│       └── /studio/demos/       Interactive demo files
│
└── ARCHIVED (redirect to /method/) ───────────────────────────
    ├── /course.html             → /method/#enroll
    ├── /syllabus.html           → /method/#ten-week-plan
    ├── /results.html            → /method/#outcomes
    ├── /progress.html           → /method/#measurement
    └── /sample.html             → /method/#artifacts
```

**Live navigable pages:** 5 core + N annotation guides (currently 2)
**Accessible but unlisted:** ~23 (parent guides + school pages)

### 1.4 Build Status Summary

| Layer | Coverage | Notes |
|-------|----------|-------|
| B2B Partnership (`/partners/`) | 0% — PLANNED | Highest priority. Wireframe in §3. |
| Condensed Method (`/method/`) | 0% — PLANNED | Absorbs 6 current pages. Spec in §5. |
| Homepage Router (`/`) | 0% — PLANNED | Replaces parent-facing text grid. Spec in §4. |
| Annotation Guides | ~10% | Hub + 1 text (The Outsiders). Expand per text. |
| Video Production | ~20% | 18 scenes built, all for 1 text (The Outsiders). |
| Parent Guides (unlisted) | 100% | 18 guides built. Remain accessible. |
| School Pages (unlisted) | 100% | 5 schools built. Remain accessible. |

---

## 2. THEORY-TO-ASSET REGISTRY

Every asset on the site materialises a concept from the theory chain. This registry maps theory → asset → status.

### 2.1 Theory Concept → Asset Mapping

| Theory Concept | Source | Asset(s) | URL(s) | Status | Proof Layer |
|---|---|---|---|---|---|
| **Cohort economics model** | 00_COMMERCIAL_THESIS §2 | Partnership page — economics section | `/partners/` | PLANNED | B2B Primary |
| **Engagement structure** | 00_COMMERCIAL_THESIS §4 | Partnership page — engagement section | `/partners/` | PLANNED | B2B Primary |
| **Subordination hierarchy** | 00_COMMERCIAL_THESIS §5 | Partnership page — infrastructure showcase links | `/partners/` | PLANNED | B2B Primary |
| **Credence bypass (text-specificity)** | 01_CREDENCE_PROBLEM §2 | Text-specific annotation guides; parent curriculum guides | `/annotations/[text]/`; `/[text-slug]/` | PARTIAL (1 annotation, 18 parent guides) | Layers 1 + 2 |
| **Reading vs writing hierarchy** | 01_CREDENCE_PROBLEM §3 | Annotation guides (reading entry) → method page (writing outcomes) | `/annotations/` → `/method/` | PARTIAL | Layers 1 + 4 |
| **Parent journey stages 1-4** | 02_CUSTOMER_JOURNEY §2 | Condensed method page (all stages on one page) | `/method/` | PLANNED (replaces 6 separate pages) | Layer 2 |
| **Proof point hierarchy** | 02_CUSTOMER_JOURNEY §3 | Method page artifacts strip (annotation → worksheet → essay) | `/method/#artifacts` | PLANNED | Layer 2 |
| **Validation loop** | 03_VALIDATION_LOOP §2 | Outcomes section on method page (adjacent to pricing) | `/method/#outcomes` | PLANNED | Layer 4 |
| **Kernel-derived content** | 04_CONTENT_DERIVATION §2 | Annotation guides (derived from text kernel analysis) | `/annotations/[text]/` | PARTIAL (1 text) | Layer 1 |
| **Interpretation track (SEO)** | 05_CHANNEL_ALIGNMENT §2 | Parent curriculum guides (text-specific outlines) | `/[text-slug]/`; `/curriculum/[text]/` | LIVE (18 texts, unlisted) | Layer 2 |
| **Annotation track (PLG)** | 05_CHANNEL_ALIGNMENT §3 | Annotation guide preview + download | `/annotations/[text]/` | PARTIAL (1 text) | Layer 3 |
| **Video credence bypass** | 05_CHANNEL_ALIGNMENT §4 | Video scenes for social media | `/studio/scenes/` | PARTIAL (1 text, 18 scenes) | Layer 3 |
| **School-specific trust** | 02_CUSTOMER_JOURNEY §4 | School pages with verified booklists | `/schools/[school]/` | LIVE (5 schools, unlisted) | Layer 2 |
| **Measurement visibility** | 00_COMMERCIAL_THESIS §6 | Method page outcomes section; progress data | `/method/#measurement` | PLANNED | Layer 4 |

### 2.2 Asset Inventory by Proof Layer

**Proof Layer 1: Instructional Infrastructure** (What the partner gets)

| Asset Type | Count | Needed | Pipeline | Status |
|---|---|---|---|---|
| Annotation guides (preview pages) | 1 (The Outsiders) | 1 per text (~18) | JSON → `build-annotation-guides.js` → `/annotations/[text]/` | PARTIAL |
| Annotation guide PDFs | 4 in repo | Per guide | Manual creation → `/social-media-assets/` | EXISTS (unsurfaced) |
| Worksheet PDFs | 7+ in repo | Per text | Manual creation → `/social-media-assets/` | EXISTS (unsurfaced) |
| Method page (system overview) | 0 | 1 | Template → `build.js` → `/method.html` | PLANNED |

**Proof Layer 2: Parent-Facing Assets** (How parents perceive value)

| Asset Type | Count | Needed | Pipeline | Status |
|---|---|---|---|---|
| Parent curriculum guides | 18 (8 root + 10 curriculum) | Sufficient | JSON → build scripts → `/[text-slug]/`, `/curriculum/[text]/` | LIVE (unlisted) |
| School pages | 5 | Expand as partnerships form | JSON → `build-school-pages.js` → `/schools/[school]/` | LIVE (unlisted) |

**Proof Layer 3: PLG / Demand Signal** (That demand exists)

| Asset Type | Count | Needed | Pipeline | Status |
|---|---|---|---|---|
| Annotation downloads | 1 text | Per guide | Linked from annotation preview pages | PARTIAL |
| Video scenes (social content) | 18 (all The Outsiders) | Per text | JSON → `build-video-scenes.js` → `/studio/scenes/` | PARTIAL |
| Video demos (interactive) | 3 | Sufficient | Standalone HTML in `/studio/demos/` | LIVE |

**Proof Layer 4: Outcomes** (That it works)

| Asset Type | Count | Needed | Pipeline | Status |
|---|---|---|---|---|
| Student progress reports | 5 in repo | Surface on method page | PDFs in `/social-media-assets/` | EXISTS (unsurfaced) |
| Student work samples | 75+ in repo | Surface on method page | Images in `/social-media-assets/` | EXISTS (unsurfaced) |
| Before/after writing | In progress/results pages | Consolidate to method page | Currently on `/progress.html`, `/results.html` | LIVE (to be consolidated) |

### 2.3 Unsurfaced Proof Assets

These artefacts exist in the repository but are not linked from any site page. They are high-value proof for both B2B showcase and the condensed method page.

**In `/social-media-assets/`:**

| Asset | Location | Potential Use |
|---|---|---|
| 5 student progress reports | `/social-media-assets/student-*/progress-*` | Method page §4 (Measurement) |
| 75+ student work samples | `/social-media-assets/student-*/*.jpg` | Method page §3 (Artifacts) |
| 4 annotation guide PDFs | `/social-media-assets/annotation-guides/` | Annotation download gates |
| 7+ worksheet PDFs | `/social-media-assets/worksheets/` | Method page §3 (Artifacts), Partnership showcase |

**In `/presentations/`:**

| Asset | Location | Potential Use |
|---|---|---|
| Partnership Economics deck | `/presentations/partnership/` | Source material for `/partners/` content |
| Teaching Infrastructure deck | `/presentations/infrastructure/` | Source material for `/method/` content |
| Scaling Teaching deck | `/presentations/scaling/` | B2B engagement narrative |
| Co-Founder Pitch deck | `/presentations/co-founder/` | Investor/partner context |
| Scaling Reality appendix | `/presentations/appendix/` | Realistic growth projections |

### 2.4 Asset Interconnection Map

```
/partners/ (B2B PRIMARY — hub-and-spoke)
    │
    ├──→ /annotations/the-outsiders/    "See what your teachers will deliver"
    │         │                          (Proof Layer 1: Infrastructure)
    │         └──→ Download PDF
    │
    ├──→ /the-giver/                    "See what parents experience"
    │         │                          (Proof Layer 2: Parent Assets)
    │         └──→ /method/#enroll
    │
    ├──→ /schools/mckinnon-sc/          "See school-level alignment"
    │                                    (Proof Layer 2: Parent Assets)
    │
    ├──→ /method/                        "See the complete system"
    │         │                          (Proof Layers 1+2+4)
    │         ├── #method
    │         ├── #ten-week-plan
    │         ├── #artifacts
    │         ├── #outcomes
    │         └── #enroll
    │
    └──→ /method/#outcomes               "See the results"
                                         (Proof Layer 4: Outcomes)

/ (HOMEPAGE — router)
    │
    ├──→ /partners/                      Path A: "For tutoring companies"
    │
    ├──→ /annotations/                   Path B: "Browse annotation guides"
    │
    └──→ /method/                        Path B: "See how we teach"

/annotations/[text]/ (PLG — student entry)
    │
    ├──→ Download PDF                    Lead capture
    │
    ├──→ /method/                        Parent bridge → full system
    │
    └──→ /annotations/                   Back to hub
```

### 2.5 Coverage Gaps (Prioritised)

| Priority | Gap | Impact | Effort |
|---|---|---|---|
| **P0** | Partnership page (`/partners/`) does not exist | No B2B commercial surface | New page (template + content) |
| **P0** | Condensed method page (`/method/`) does not exist | Cannot archive old pages until replacement exists | Consolidate 6 pages into 1 |
| **P0** | Homepage router does not exist | Current homepage is parent-direct text grid | Redesign homepage template |
| **P1** | Annotation guides for 17/18 texts missing | Weak PLG + infrastructure proof | Expand via `build-annotation-guides.js` |
| **P1** | Unsurfaced proof assets not linked | Student work, worksheets, progress reports exist but aren't visible | Link from method page + partnership page |
| **P2** | Video scenes only for 1 text | Limited social content library | Expand via `build-video-scenes.js` |
| **P2** | Navigation not updated | Current nav reflects parent-direct architecture | Update `site-config.json` |
| **P3** | Redirects for archived URLs | Old URLs should point to method page sections | Server-side or meta refresh redirects |
| **P3** | Partner-facing measurement reporting | No partner-specific outcomes view | New asset type (future) |

---

## 3. B2B PARTNERSHIP PAGE `/partners/`

**Role:** Single B2B surface. Presents the cohort economics model, showcases instructional infrastructure, and links to proof layers across the site. All B2B messaging is constrained to this page.

**Status:** PLANNED (highest priority — P0)

**Audience:** Tutoring company operators, education business owners evaluating a partnership engagement.

**Content Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo          (standard nav — partners page not in     │
│                     parent-facing primary nav)               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  Cohort Build Partnership                                   │
│                                                             │
│  We design, launch, stabilise, and hand over a single       │
│  text-anchored cohort capable of generating ~$18–20k        │
│  in lifecycle revenue.                                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  COHORT ECONOMICS                                           │
│  ────────────────                                           │
│  10 students × $600/term × 3-term lifecycle = ~$18k         │
│  Ramp visual: Term 1 (build) → Term 2 (stabilise)          │
│              → Term 3+ (steady state)                       │
│  Expansion: text-by-text replication                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ENGAGEMENT STRUCTURE                                       │
│  ────────────────────                                       │
│  What we deliver:                                           │
│  1. Design one viable cohort                                │
│  2. Deliver Term 1 directly                                 │
│  3. Stabilise progression + retention                       │
│  4. Train your teachers                                     │
│  5. Hand over delivery framework                            │
│  6. Continue materials licensing                            │
│                                                             │
│  What you provide:                                          │
│  • Lead flow • Operations • Teachers                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  INFRASTRUCTURE SHOWCASE                                    │
│  ───────────────────────                                    │
│  "See what your teachers will deliver"                      │
│  → Annotation guide example (/annotations/the-outsiders/)   │
│  → Teaching method overview (/method/)                      │
│  Note: "18 texts currently built; new texts deployed in     │
│   <2 weeks from kernel analysis"                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PARENT EXPERIENCE PROOF                                    │
│  ───────────────────────                                    │
│  "See what parents experience"                              │
│  → Parent curriculum guide example (/the-giver/)            │
│  → School-specific page example (/schools/mckinnon-sc/)     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  OUTCOMES                                                   │
│  ────────                                                   │
│  Observed founder-led cohort outcomes:                      │
│  • Conversion, retention, class growth data                 │
│  • Before/after writing samples                             │
│  → Full outcomes (/method/#outcomes)                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CTA                                                        │
│  ───                                                        │
│  [Request Engagement Proposal]                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** "English tutoring partnership", "tutoring business infrastructure", branded B2B searches

**Voice:** Business-facing. Direct, evidence-based, no marketing language. Show the math.

**Design:** Uses `page-marketing.css` base with B2B-specific overrides. Clean, data-forward layout. No parent-voice softness.

**Navigation:** Accessible via homepage Path A and footer link. NOT in the parent-facing primary nav.

---

## 4. HOMEPAGE `/` (Minimal Router)

**Role:** Bifurcated landing page that routes two audiences to their correct path in under 5 seconds.

**Status:** PLANNED (P0 — depends on `/partners/` and `/method/` existing first)

**Audience:** Both B2B buyers and parents/students arriving at the root URL.

**Content Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo          How We Teach | Annotations | About       │
│                                                 [Enquire]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  Text-specific English tutoring infrastructure.             │
│                                                             │
│  One sentence that works for both audiences.                │
│  Professional, clean. Not "tutoring company marketing."     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TWO PATHS (visually prominent, above the fold)            │
│  ─────────                                                  │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │ FOR TUTORING         │  │ FOR STUDENTS &       │          │
│  │ COMPANIES            │  │ PARENTS              │          │
│  │                      │  │                      │          │
│  │ We design, launch,   │  │ Download free         │          │
│  │ and stabilise text-  │  │ annotation guides     │          │
│  │ anchored cohorts     │  │ for your text.        │          │
│  │ that generate ~$18-  │  │                      │          │
│  │ 20k in lifecycle     │  │ Or explore our       │          │
│  │ revenue.             │  │ teaching method.     │          │
│  │                      │  │                      │          │
│  │ [Learn about         │  │ [Browse annotation   │          │
│  │  partnerships →]     │  │  guides →]           │          │
│  │                      │  │ [See how we teach →] │          │
│  └─────────────────────┘  └─────────────────────┘          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**What it does NOT contain:**
- Text selection grid (the parent-direct Stage 1 mechanism is archived)
- Methodology deep dive (belongs on `/method/`)
- Results/testimonials (belongs on `/method/`)
- Schools section (school pages are accessible but unlisted)

**SEO Target:** "LuminAIT", "English tutoring Melbourne", branded searches

**Voice:** Professional, clean. Works for both audiences.

**Design:** Technology company landing page feel, not tutoring company marketing page. The "warmth" of parent-facing messaging lives on the pages parents actually visit.

---

## 5. CONDENSED METHOD PAGE `/method/`

**Role:** Single page that demonstrates the complete teaching system. Replaces course.html, syllabus.html, method.html (current), sample.html, progress.html, and results.html.

**Status:** PLANNED (P0)

**Audience:**
- Parents who click "See how we teach" from homepage Path B
- B2B buyers who want to understand the method depth (linked from partnership page's infrastructure showcase)
- Organic SEO traffic for "English tutoring Melbourne", "analytical writing tutoring"

**Why condense:** The separate pages existed to serve different stages of the parent-direct funnel (method = Stage 3, course = Stage 4, results = validation loop). When B2B is primary and parent-direct is a proof layer, these stages collapse. The B2B buyer needs to see the complete system on one surface. The parent needs a shorter path to the same information.

**Content Structure (single long page, section-anchored):**

```
┌─────────────────────────────────────────────────────────────┐
│ NAV                                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  § THE METHOD (#method)                                     │
│  ──────────────────────                                     │
│  "How we teach analytical writing"                          │
│                                                             │
│  3-step process:                                            │
│  Annotation → Structured Activity → Analysis                │
│                                                             │
│  One embedded video demo or screenshot of each step         │
│  (from /studio/demos/)                                      │
│                                                             │
│  (Absorbs current method.html content)                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  § THE 10-WEEK PLAN (#ten-week-plan)                        │
│  ────────────────────────────────────                       │
│  "What a text-specific course looks like"                   │
│                                                             │
│  Generic 10-week structure:                                 │
│  Foundation (Wk 1-2) → Analysis (Wk 3-5)                   │
│  → Writing (Wk 6-8) → Completion (Wk 9-10)                 │
│                                                             │
│  ONE text-specific example shown as representative          │
│  (e.g., The Outsiders)                                      │
│                                                             │
│  Note: "We build this plan for every prescribed text.       │
│  See an example: [The Outsiders plan →]"                    │
│                                                             │
│  (Absorbs current course.html + syllabus.html content)      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  § WHAT STUDENTS PRODUCE (#artifacts)                       │
│  ────────────────────────────────────                       │
│  Method artifacts strip: Annotation → Worksheet → Essay     │
│                                                             │
│  Sample worksheet (screenshot or interactive demo)          │
│  Before/after writing samples                               │
│                                                             │
│  (Absorbs current sample.html content)                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  § MEASUREMENT & OUTCOMES (#outcomes)                       │
│  ────────────────────────────────────                       │
│  Progress report format                                     │
│  Outcome data (improvement rates, per-term gains)           │
│  Before/after student writing comparison                    │
│                                                             │
│  (Absorbs current progress.html + results.html content)     │
│  (Serves as validation loop — adjacent to pricing)          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  § ENROLL / ENQUIRE (#enroll)                               │
│  ────────────────────────────                               │
│  Pricing: 5-week ($275) / 10-week ($495)                    │
│                                                             │
│  [Enquire →]                                                │
│                                                             │
│  Text helper: "Find your child's text"                      │
│  → /annotations/ (annotation guides hub)                    │
│                                                             │
│  (Absorbs current course.html pricing section)              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Why this works for both audiences:** A parent sees "here's how my child will be taught." A B2B buyer sees "here's the system my teachers will deliver." Same content, different lens. The page needs no B2B messaging — the B2B buyer is already viewing it through the partnership page's frame.

**SEO Target:** "English tutoring Melbourne", "analytical writing tutoring", "[text] essay tutoring"

**Voice:** Professional, clear. Neither heavily parent-warm nor B2B-cold. Let the system speak.

**Design:** Uses `page-marketing.css`. Single long page with sticky section nav or jump links. Each section is independently linkable via anchors.

---

## 6. ANNOTATION GUIDES `/annotations/`

**Role:** Student-first entry point AND infrastructure proof for B2B buyers. The highest-leverage content type on the site because annotation guides ARE the infrastructure — not descriptions of it.

**Status:** Hub + 1 text (The Outsiders). Expand per text.

**Dual-duty mechanism:**
- **Student path:** SEO/social → hub → guide preview → download → parent bridge → `/method/`
- **B2B path:** `/partners/` infrastructure showcase → links to guide as example → buyer sees what the system produces

The same page serves both audiences without dual messaging. The artefact speaks for itself in both contexts.

### 6.1 Annotations Hub `/annotations/`

**Audience:** Students searching for annotation guides or text analysis help.

**Content Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo       How We Teach | Annotations | About [Enquire]│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  Annotation Guides                                          │
│                                                             │
│  Download structured annotation guides for classic          │
│  literature. Learn to identify and analyze key literary     │
│  patterns with our color-coded system.                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  METHOD EXPLANATION                                         │
│  ──────────────────                                         │
│  How annotation guides work:                                │
│  • Color-coded annotation system                            │
│  • Semantic families to track                               │
│  • Structured activities                                    │
│  • Key passage analysis                                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  AVAILABLE GUIDES                                           │
│  ────────────────                                           │
│  [Text cards — one per available guide]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  METHOD CTA                                                 │
│  ──────────                                                 │
│  Want structured, expert-led learning?                      │
│  [See how we teach →]                                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** "annotation guide [text]", "[text] literary analysis guide", "how to annotate [text]"

**Voice:** Student-facing. Helpful, practical, direct.

### 6.2 Annotation Preview Page `/annotations/[text]/`

**Role:** Preview + download gate + parent/method bridge. Demonstrates value, captures email/intent, bridges to method page.

**Audience:** Students seeking specific text help. Secondary: Parents researching alongside student. Tertiary: B2B buyers evaluating infrastructure quality.

**Content Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo          ← All Annotation Guides   [Enquire]      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  [Text Title]                                               │
│  [Guide Type] Annotation Guide                              │
│                                                             │
│  [Author] • [Chapters] • [Year Level]                       │
│  [Lens] — [Lens Description]                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PREVIEW SECTION                                            │
│  ───────────────                                            │
│  See how our annotation guides work.                        │
│  [Image: Page 1 preview]  [Image: Page 2 preview]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  METHOD SECTION                                             │
│  ──────────────                                             │
│  How This Guide Works:                                      │
│  Color Key + Semantic Families + Key Questions              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  DOWNLOAD GATE                                              │
│  ─────────────                                              │
│  Download the Full Guide                                    │
│  [Email input field]                                        │
│  [Download Free Guide →]                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  METHOD BRIDGE                                              │
│  ─────────────                                              │
│  This annotation guide is just the beginning.               │
│  See the complete teaching method and 10-week plan.         │
│  [See how we teach →] (/method/)                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECONDARY CTA                                              │
│  ──────────────                                             │
│  Want expert guidance?                                      │
│  [Enquire about the course →]                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Conversion Flow:**
```
Student finds guide (SEO/social)
  ↓
Preview + method explanation (value demonstration)
  ↓
Email gate (lead capture)
  ↓
Download PDF (instant gratification)
  ↓
Method bridge CTA (funnel handoff → /method/)
  ↓
Method page (complete system + pricing + enquiry)
```

**Content Pipeline:**
```
/data/annotation-guides/*.json → build-annotation-guides.js → /annotations/[slug]/index.html
```

**SEO Target:** "[text] annotation guide", "how to annotate [text]", "[text] chapter analysis"

**Voice:** Student-facing initially, transitions to parent-facing in bridge section.

**Success Metrics:**
- Download rate (page → download)
- Method-bridge CTR (downloaded → method page)
- Course enquiry rate (annotation → method → enquiry)

---

## 7. VIDEO STUDIO `/studio/`

**Role:** Production tool for 30-second animated video scenes demonstrating text analysis. Screen-recorded for social media (Instagram Reels, TikTok, YouTube Shorts). Not a public-facing URL.

**Status:** 18 scenes built (all for The Outsiders).

**How it works:**
- Each scene is a self-contained HTML page with layered animations
- `script.js` (StudioController) handles SPACE/ArrowRight to advance, R to reset, A for auto-play
- Scenes are opened in Chrome fullscreen, screen-recorded, then exported for social

**Scene structure:**
```
Step 0: Book cover (intro layer)
Step 1-2: Context image with overlay text
Step 3-6: Text passage with highlights, annotations, zoom effects
Step 7: Call-to-action (outro layer)
```

**Content pipeline:**
```
/data/video-scenes/*.json → build-video-scenes.js → /studio/scenes/[slug].html
```

**Interactive Demos** (`/studio/demos/`):
- `/studio/demos/demo-annotation.html` (The Outsiders annotation loop)
- `/studio/demos/demo-worksheet.html` (Interactive sorting/sequencing)
- `/studio/demos/demo-analysis.html` (Essay typing simulator)
- Standalone HTML files. Auto-play on load. Used as embedded demos on method page.

See `BUILD_SYSTEM.md` for full pipeline documentation.

---

## 8. ABOUT PAGE `/about/`

**Role:** Background, credibility. Minimal. Supports both audiences peripherally.

**Status:** ✅ Live

---

## 9. NAVIGATION

### 9.1 Header (All Pages)

**Target Implementation:**

```
Logo: LuminAIT       How We Teach | Annotations | About     [Enquire]
```

- Logo → `/` (homepage router)
- How We Teach → `/method/` (condensed method page)
- Annotations → `/annotations/` (annotation guides hub)
- About → `/about/`
- Enquire → `mailto:hello@luminait.app` (CTA button)

**What was removed from nav:**
- "Texts" (parent-direct Stage 1 mechanism — archived)
- "Schools" (school pages accessible but unlisted)
- "Course" (absorbed into `/method/`)
- "Results" (absorbed into `/method/`)
- "The Method" renamed to "How We Teach" (clearer for both audiences)

**What is NOT in nav:**
- `/partners/` — accessible via homepage Path A and footer, not in parent-facing nav

**Technical Implementation:**
- Nav partial: `/src/partials/nav.html`
- Generated via: `{{NAV_LINKS}}` placeholder in build system
- Controlled by: `showInNav` flag in `site-config.json`
- Bilingual support: EN/ZH text for all links
- After changes: Run `node build.js` to regenerate pages

### 9.2 Footer (All Pages)

```
LuminAIT

For Partners               Resources              Contact
──────────                 ─────────              ───────
Partnership Info           How We Teach           Email
                           Annotation Guides      Phone
                           About

Melbourne, VIC · © 2026
```

The footer provides the secondary route to `/partners/` without polluting the parent-facing nav.

---

## 10. URL PATTERNS

### 10.1 Summary Table

| URL | Status | Role | Page Type | Audience |
|-----|--------|------|-----------|----------|
| `/` | PLANNED | Router | Homepage | Both |
| `/partners/` | PLANNED | B2B Primary | Partnership page | Business |
| `/method/` | PLANNED | Complete system | Method + course + outcomes | Both |
| `/annotations/` | ✅ Live | PLG + Proof Layer 1 | Annotation hub | Student/B2B |
| `/annotations/[text]/` | ✅ Live (1 text) | PLG + Proof Layer 1 | Annotation preview | Student/B2B |
| `/about/` | ✅ Live | Credibility | About | Both |
| `/[text-slug]/` | UNLISTED | Proof Layer 2 | Parent curriculum guide | Parent (via link) |
| `/curriculum/[text]/` | UNLISTED | Proof Layer 2 | Parent curriculum guide | Parent (via link) |
| `/schools/[school]/` | UNLISTED | Proof Layer 2 | School page | Parent (via link) |
| `/studio/` | PRODUCTION | Video production | Studio tool | Internal |
| `/studio/scenes/[slug].html` | PRODUCTION | Video production | Scene page | Internal |
| `/studio/demos/*.html` | PRODUCTION | Video production | Interactive demos | Internal |
| `/course.html` | ARCHIVED | → `/method/#enroll` | Redirect | — |
| `/syllabus.html` | ARCHIVED | → `/method/#ten-week-plan` | Redirect | — |
| `/results.html` | ARCHIVED | → `/method/#outcomes` | Redirect | — |
| `/progress.html` | ARCHIVED | → `/method/#measurement` | Redirect | — |
| `/sample.html` | ARCHIVED | → `/method/#artifacts` | Redirect | — |

### 10.2 Text Slugs

| Text | Slug | Parent Guide | Annotation Guide |
|------|------|:---:|:---:|
| The Outsiders | `the-outsiders` | ✅ | ✅ |
| The Giver | `the-giver` | ✅ | ✅ |
| Macbeth | `macbeth` | ✅ | — |
| Animal Farm | `animal-farm` | ✅ | — |
| Romeo and Juliet | `romeo-and-juliet` | ✅ | — |
| To Kill a Mockingbird | `tkam` | ✅ | — |
| A Christmas Carol | `a-christmas-carol` | ✅ | — |
| Blueback | `blueback` | ✅ | — |
| Dracula | `dracula` | ✅ (curriculum) | — |
| Jane Eyre | `jane-eyre` | ✅ (curriculum) | — |
| The Simple Gift | `the-simple-gift` | ✅ (curriculum) | — |
| The White Girl | `the-white-girl` | ✅ (curriculum) | — |
| Catching Teller Crow | `catching-teller-crow` | ✅ (curriculum) | — |
| Catherine Called Birdy | `catherine-called-birdy` | ✅ (curriculum) | — |
| Convenience Store Woman | `convenience-store-woman` | ✅ (curriculum) | — |
| His Name Was Walter | `his-name-was-walter` | ✅ (curriculum) | — |
| My Life as an Alphabet | `my-life-as-an-alphabet` | ✅ (curriculum) | — |
| The Curious Incident | `the-curious-incident` | ✅ (curriculum) | — |

---

## 11. SEO STRATEGY

**For detailed local SEO implementation, see [LOCAL_SEO_STRATEGY.md](./LOCAL_SEO_STRATEGY.md)**

### 11.1 By Page Type

| Page Type | Primary Keywords | Intent | Status |
|-----------|------------------|--------|--------|
| Homepage (router) | "LuminAIT", "English tutoring Melbourne" | Navigation | PLANNED |
| Partnership page | "English tutoring partnership", "tutoring business infrastructure" | Transactional (B2B) | PLANNED |
| Method page | "English tutoring method", "analytical writing tutoring" | Informational/Transactional | PLANNED |
| Annotation guide | "[text] annotation guide", "how to annotate [text]" | Informational | LIVE (1 text) |
| Parent guide (unlisted) | "[text] tutoring", "[text] English help" | Transactional | LIVE (18 texts) |
| School page (unlisted) | "[school] English tutoring" | Local/Transactional | LIVE (5 schools) |

### 11.2 Internal Linking

```
Partnership Page (/partners/) — hub-and-spoke
    ├── → /annotations/the-outsiders/  (infrastructure example)
    ├── → /method/                     (complete system)
    ├── → /the-giver/                  (parent experience example)
    ├── → /schools/mckinnon-sc/        (school alignment example)
    └── → /method/#outcomes            (outcome proof)

Homepage (/) — router
    ├── → /partners/                   (Path A: B2B)
    ├── → /annotations/                (Path B: student/parent)
    └── → /method/                     (Path B: student/parent)

Annotation Preview (/annotations/[text]/)
    ├── → Download PDF                 (lead capture)
    ├── → /method/                     (method bridge)
    └── → /annotations/                (back to hub)

Method Page (/method/)
    ├── → /annotations/                (text helper → guides)
    └── → mailto:hello@luminait.app    (enquiry CTA)
```

---

## 12. BUILD PHASES

### Phase 0: Build `/partners/` (Highest Priority)

**Goal:** B2B commercial surface exists.

| Page | Status | Action |
|------|--------|--------|
| `/partners/` | New | Build template + content per §3 wireframe |

### Phase 1: Build Condensed `/method/`

**Goal:** Single page replaces 6 current marketing pages.

| Page | Status | Action |
|------|--------|--------|
| `/method/` | Redesign | Consolidate course + syllabus + method + sample + progress + results per §5 spec |

### Phase 2: Redesign Homepage as Router

**Goal:** Minimal landing page routing both audiences.

| Page | Status | Action |
|------|--------|--------|
| `/` | Redesign | Replace text-grid homepage with two-path router per §4 spec |

### Phase 3: Update Navigation

**Goal:** Nav reflects new architecture.

| Change | Action |
|--------|--------|
| Remove from nav | Texts, Schools, Course, Results |
| Add to nav | "How We Teach" (method), "Annotations" |
| Add to footer | "For Partners" link |
| Config | Update `site-config.json` `showInNav` flags |
| Rebuild | `node build.js` |

### Phase 4: Set Up Redirects

**Goal:** Old URLs point to correct method page sections.

| Old URL | Redirect To |
|---------|-------------|
| `/course.html` | `/method/#enroll` |
| `/syllabus.html` | `/method/#ten-week-plan` |
| `/results.html` | `/method/#outcomes` |
| `/progress.html` | `/method/#measurement` |
| `/sample.html` | `/method/#artifacts` |

### Phase 5: Expand Annotation Guides

**Goal:** Highest-leverage content investment. Each new guide adds PLG value AND B2B proof value simultaneously.

| Action | Pipeline |
|--------|----------|
| Create JSON data per text | `/data/annotation-guides/[text].json` |
| Build | `node build-annotation-guides.js` |
| Verify | Check `/annotations/[text]/index.html` |

---

## 13. TECHNICAL REQUIREMENTS

### 13.1 SEO

- [ ] XML sitemap (auto-generated — exclude archived URLs, include unlisted)
- [ ] robots.txt
- [ ] Google Search Console verified
- [ ] Meta titles/descriptions per page
- [ ] Schema markup: Organization, Article, Book
- [ ] Canonical URLs
- [ ] 301 redirects for archived pages

### 13.2 Performance

- [ ] Static HTML (current approach)
- [ ] Minimal JS
- [ ] Core Web Vitals passing

### 13.3 Analytics

- [ ] Page views, time on page, scroll depth
- [ ] Track: annotation guide downloads by text
- [ ] Track: method page section views (which sections get attention)
- [ ] Track: partnership page → proof link clicks (which proof layers B2B buyers explore)
- [ ] Search Console: queries, impressions, CTR

### 13.4 Language

- [ ] EN/ZH toggle on method page and annotation pages
- [ ] Chinese translations for method page, annotation hub

### 13.5 Styling

All pages must follow the unified design system. See `DESIGN_SYSTEM.md` (this directory).

| Page Type | CSS File | Voice |
|-----------|----------|-------|
| Homepage (router) | `page-marketing.css` + minimal overrides | Professional, clean |
| B2B partnership | `page-marketing.css` + B2B overrides | Direct, evidence-based |
| Method page | `page-marketing.css` | Professional, system-focused |
| Annotation guides | `page-guide.css` [TODO] | Direct, useful |

**Adding new pages:** Follow `DESIGN_SYSTEM.md` (this directory) Section 8 for complete procedure.

### 13.6 Template Reference Models (B2B)

The implementation remains a static template/build system (`src/templates` + build scripts). External templates are used as **layout/reference models only**, not as a platform migration.

**Primary reference model (approved):**
- **B2bizz** (Webflow template)
  - Template listing: <https://webflow.com/templates/html/b2bizz-website-template>
  - Live preview: <https://b2bizz-wbs.webflow.io/>
  - Why this is primary: closest fit to B2B proof-led hierarchy (`/partners/` as commercial surface, hub-and-spoke proof exploration, strong commercial CTA return path).

**Secondary reference models (fallbacks):**
- **Partner** (Webflow template): <https://webflow.com/templates/html/partner-business-website-template>
- **Strategis** (Webflow template): <https://webflow.com/templates/html/strategis-website-template>

**Model-to-page mapping:**
- `/partners/`: Use B2B consulting/commercial landing structure (economic claim → engagement structure → proof links by layer → CTA).
- `/` (router): Use minimal bifurcated hero + two path cards (B2B path, student/parent path), no legacy parent-direct content blocks.
- `/method/`: Use long-form proof page structure with anchored sections and clear jump navigation.

**Adaptation rules (non-negotiable):**
1. Keep B2B messaging constrained to `/partners/` only.
2. Keep all implementation inside existing build system (no CMS/framework swap).
3. Do not import template-specific JS/CMS features that conflict with static generation.
4. Preserve internal URL architecture and proof-layer linking defined in this document.
5. Preserve design system tokens/components (`base.css`, `page-components.css`, `page-marketing.css`).

**Anti-patterns (do not adopt):**
- SaaS app UI patterns that foreground product dashboards over proof assets.
- Feature-grid-first layouts that hide economics and evidence below the fold.
- Consumer tutoring tone/styles on `/partners/` (must remain direct and evidence-led).

---

## 14. ARCHIVED PAGES

These page specifications are preserved for reference. They may be reintroduced when priorities shift back to parent-direct acquisition. The pages remain accessible at their current URLs (unlisted) but are no longer part of the navigable site.

### 14.1 Old Homepage (Text Grid)

**Was:** Parent-direct entry point with text selection grid as primary action.

**Content sections (in order):**
1. Hero: "English tutoring built around your child's text"
2. Text Grid: 8 book cards → text-specific outlines
3. Methodology Section: "The Method" with single hero video
4. Results Teaser: 3 outcome cards
5. Schools Section: 5 featured schools
6. Testimonials: Auto-scrolling parent/student quotes
7. About / Teacher Profile

**SEO Target:** "English tutoring Melbourne", "text-specific tutoring"
**Voice:** Parent-facing. "Your child's text", not "your text."

### 14.2 Old Course Page `/course.html`

**Was:** Enrollment page. Pricing and course details.

**Content sections:**
1. Hero: "5 weeks. One text. Complete essay."
2. What's Included (weekly worksheets, feedback, assessment, progress report)
3. How It Works (5-week progression)
4. Pricing: 5-week $275 / 10-week $495
5. Text Selection Helper linking back to homepage

**Redirect:** → `/method/#enroll`

### 14.3 Old School Directory `/schools/`

**Was:** Index page listing all verified schools with "Request Your School" form.

**Status:** Individual school pages remain accessible at `/schools/[school]/`. The index page is archived. School pages include LocalBusiness schema for local SEO.

**Schools built:** McKinnon SC, Lauriston, Melbourne Girls, Korowa, Scotch College

### 14.4 Old Curriculum Index `/curriculum/`

**Was:** Index page showing all 18 curriculum guide text cards.

**Status:** Individual guides remain accessible at `/curriculum/[text]/`. The index page is archived. Guides are generated from JSON + template via `build-parent-guides.js`.

### 14.5 Analysis Guide Hubs (VCE/HSC/IB)

**Was:** Planned curriculum-specific student entry points. Never built.

**Status:** Removed from architecture. Annotation guides (`/annotations/`) absorb the student-entry role with lower friction and dual B2B proof value. The 5-step analysis guide format (Know → See → Find → Build → Write) may inform future annotation guide depth, but separate VCE/HSC/IB hubs are no longer planned.

---

## 15. IMPLEMENTATION NOTES

### 15.1 Dual Parent Guide System (Unlisted)

Parent guides remain accessible at two URL patterns:

- **Root level** (`/the-giver/`, `/macbeth/`, etc.): 8 homepage books
  - Built with: `build-homepage-guides.js`

- **Curriculum directory** (`/curriculum/dracula/`, `/curriculum/jane-eyre/`, etc.): 10 additional texts
  - Built with: `build-parent-guides.js`
  - Includes curriculum index page at `/curriculum/`

**Both use the same:**
- JSON data format (`/data/parent-guides/[slug].json`)
- Template (`/src/templates/_parent-guide-template.html`)
- Design system (`/components/page-parent-guide.css`)
- 10-week course outline structure

**These pages are unlisted** — not in navigation, but accessible via direct URL and linked from `/partners/` as parent experience examples. They retain SEO equity for "[text] tutoring" searches.

---

## 16. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 11, 2025 | Initial architecture (student-led only) |
| 2.0 | Jan 24, 2026 | Two-funnel architecture |
| 2.1 | Jan 27, 2026 | Added Schools Directory (/schools/) |
| 2.2 | Jan 27, 2026 | Implemented text-specific course outlines (18 total guides: 8 at root + 10 in /curriculum/) |
| 3.0 | Jan 28, 2026 | Three-funnel architecture: added Funnel 3 (Video-to-Parent) with /studio/ and /studio/scenes/ |
| 3.1 | Jan 30, 2026 | Updated homepage structure to reflect Video Demo Section integration |
| 3.2 | Feb 2, 2026 | Parent-Direct as PRIMARY. Repositioned schools section after results. Added text selection helper to course page. |
| 4.0 | Feb 19, 2026 | B2B Partnership as PRIMARY commercial strategy. Added /partners/ page definition. All funnels reframed as proof layers. |
| 5.0 | Feb 19, 2026 | **Lean B2B architecture.** Archived parent-direct funnel pages. Condensed course+method+outcomes into `/method/`. Homepage redesigned as minimal router. Annotation guides promoted as dual-duty PLG + infrastructure proof. Added theory-to-asset registry (§2). Analysis guide hubs (VCE/HSC/IB) removed — annotation guides absorb that role. |

---

**END OF DOCUMENT**
