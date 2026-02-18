# SITE ARCHITECTURE v4.0

**Date:** February 19, 2026
**Status:** Active — canonical reference for URL structure
**Supersedes:** v3.2 (Parent-Direct as primary)
**Related:** [Commercial Thesis](../theory/00_COMMERCIAL_THESIS.md) (B2B anchor), [Customer Journey](../theory/02_CUSTOMER_JOURNEY.md) (parent funnel), [Credence Problem](../theory/01_CREDENCE_PROBLEM.md) (proof point strategy), [Funnel Strategy](./FUNNEL_STRATEGY.md) (funnel hierarchy)
**Archived sources:** `../_archive/FUNNEL_ARCHITECTURE_v2_0.md`, `../_archive/METHODOLOGY_DEMO_SPEC_v1_0.md`, `../_archive/FRAMEWORK_Credence_Conversion_Touchpoints_v1_2.md`

---

## 1. OVERVIEW

Site structure supporting the B2B partnership sale as primary commercial strategy, with parent-direct and PLG funnels as subordinate proof layers.

**Strategy:** B2B cohort-build partnership is the **PRIMARY** commercial strategy. Parent-direct (Funnel 2), PLG (Funnel 1B), and social (Funnel 3) are proof layers that reinforce the B2B sale. B2B messaging is constrained to the partnership page; the rest of the site demonstrates infrastructure value through parent-facing and student-facing assets.

```
luminait.app/
│
├── B2B PARTNERSHIP [PRIMARY COMMERCIAL STRATEGY] ──────────
│   │
│   └── /partners/            → Partnership page (cohort economics,
│                                infrastructure showcase, engagement CTA)
│
├── PROOF LAYER 2: PARENT-DIRECT ───────────────────────────
│   │   (Demonstrates parent experience that partner inherits)
│   │
│   ├── /                     → Homepage (text grid, parent-facing)
│   ├── /schools/             → School-first entry point
│   │   └── /schools/[school]/→ Text lists by school
│   ├── /[text-slug]/         → ✅ Text-specific course outlines (8 books)
│   │                            (the-giver, macbeth, animal-farm, etc.)
│   └── /course/              → Enrollment
│
├── PROOF LAYER 1B: ANNOTATION GUIDE PLG ───────────────────
│   │   (Demonstrates demand signal + infrastructure quality)
│   │
│   ├── /annotations/         → ✅ Annotation guides hub
│   └── /annotations/[text]/  → ✅ Preview + download gate + parent bridge
│                               (the-outsiders, the-giver)
│
├── PROOF LAYER 1: ANALYSIS GUIDES ─────────────────────────
│   │   (Demonstrates analytical depth)
│   │
│   ├── /vce/                 → VCE hub (not implemented)
│   │   └── /vce/[text]/      → Full analysis guides
│   ├── /hsc/                 → HSC hub (not implemented)
│   │   └── /hsc/[text]/      → Full analysis guides
│   └── /ib/                  → IB hub (not implemented)
│       └── /ib/[text]/       → Full analysis guides
│
├── PROOF LAYER 3: VIDEO-TO-PARENT (Social Discovery) ─────
│   │   (Demonstrates reach + credence bypass)
│   │
│   └── /studio/              → Video Studio (scene playback)
│       ├── /studio/scenes/   → ✅ Auto-generated scene pages
│       │   └── /studio/scenes/[slug].html
│       ├── /studio/demos/    → ✅ Interactive demo files (Annotation/Worksheet/Analysis)
│       ├── outsiders-scene.html → Legacy hand-built scene
│       ├── script.js         → StudioController (keyboard/playback)
│       └── styles.css        → Shared studio styles
│
└── SHARED / SUPPORTING ─────────────────────────────────────
    │
    ├── /curriculum/          → ✅ Additional parent guides (10 texts)
    │   └── /curriculum/[slug]/ (dracula, jane-eyre, the-simple-gift, etc.)
    ├── /about/               → About page
    ├── /progress/            → Progress reports showcase
    └── /results/             → Student outcomes
```

---

## 2. B2B PARTNERSHIP PAGE `/partners/`

**Role:** Single B2B surface. Presents the cohort economics model, showcases instructional infrastructure, and links to proof layers across the site. All B2B messaging is constrained to this page.

**Status:** PLANNED (highest priority)

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
│  → Annotation guide example (/annotations/[text]/)          │
│  → Curriculum guide example (/[text-slug]/)                 │
│  → Progress report example (/progress/)                     │
│  → Measurement framework overview                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PARENT EXPERIENCE PROOF                                    │
│  ───────────────────────                                    │
│  "See what parents experience"                              │
│  → Homepage parent journey (/[text-slug]/ → /course/)       │
│  → School-specific pages (/schools/[school]/)               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  OUTCOMES                                                   │
│  ────────                                                   │
│  Observed founder-led cohort outcomes:                      │
│  • Conversion, retention, class growth data                 │
│  • Before/after writing samples                             │
│  → Full results (/results/)                                 │
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

**Navigation:** Accessible via footer link or direct URL. NOT in the parent-facing primary nav to avoid confusing parents.

---

## 3. PROOF LAYER: PARENT-DIRECT PAGES (Funnel 2)

### 3.1 Homepage `/`

**Role:** Entry point for parent-direct funnel. Text-match prominent.

**Audience:** Parents seeking tutoring for their child.

**Content Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo          How It Works | About        [Enquire]    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  Melbourne · Years 7-12                                     │
│                                                             │
│  English tutoring built around                              │
│  your child's text                                          │
│                                                             │
│  TEXT GRID (Select text to see course plan)                 │
│  ─────────                                                  │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│  │ The     │ │ Romeo & │ │ TKAM    │                       │
│  │ Giver   │ │ Juliet  │ │         │                       │
│  │ Y7-8    │ │ Y9-10   │ │ Y9-10   │                       │
│  └─────────┘ └─────────┘ └─────────┘                       │
│  ... (8 books total + "Other Text?" link)                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  METHODOLOGY SECTION                                        │
│  ──────────────────                                         │
│  "The Method" - Text-specific preparation explained         │
│  • Chapter-by-chapter breakdown                             │
│  • Pre-written analysis bank                                │
│  • 10 weeks of structured worksheets                        │
│  + Single hero video (annotation demo)                      │
│  → Link to full method page                                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  RESULTS TEASER                                             │
│  ──────────────                                             │
│  "See what 10 weeks can do"                                 │
│  3 outcome cards → View All Case Studies                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SCHOOLS SECTION (Secondary Entry Point)                    │
│  ──────────────                                             │
│  "Or find by school" - 5 featured schools                   │
│  → View all schools | → Parent Curriculum Guides            │
│  Note: Positioned after proof layer to reinforce            │
│  text-first value proposition                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TESTIMONIALS (Marquee)                                     │
│  ─────────────────────                                      │
│  Auto-scrolling parent/student quotes                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ABOUT / TEACHER PROFILE                                    │
│  ───────────────────────                                    │
│  → Read Bio & Philosophy                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** "English tutoring Melbourne", "text-specific tutoring", branded searches

**Voice:** Parent-facing. "Your child's text", not "your text".

---

### 3.2 School Directory `/schools/`

**Role:** High-relevance entry point. Targets parents searching by school name.

**Audience:** Parents who know their child's school but not necessarily the text details, or who trust school-specific alignment.

**Content Structure:**
- **Index:** List of verified schools + "Request Your School" form (Lead Gen).
- **School Page:** `/schools/[school-slug]/`
    - Hero: "English Tutoring for [School Name]"
    - List: 2026 Text List by Year Level
    - Status: Available / Waitlist
    - CTA: Link to Text Page or Enquire

**SEO Target:** "[School Name] English tutoring", "[School Name] booklist help"

---

### 3.3 Text-Specific Course Outline `/[text-slug]/`

**Role:** The core proof point (Stage 2 of Credence Framework). Proves detailed preparation for the specific text.

**Status:** ✅ IMPLEMENTED (Jan 27, 2026)

**Supersedes:** Methodology Demo (`/guides/[text]`) - Now deprecated.

**Audience:** Parent verifying if you are "ready" for their child's specific book.

**Implementation:**
- 8 homepage books at root level: `/the-giver/`, `/macbeth/`, `/animal-farm/`, etc.
- 10 additional curriculum guides at `/curriculum/[slug]/`
- Built from JSON data using `build-homepage-guides.js` and `build-parent-guides.js`
- Design system compliant (uses `/components/page-parent-guide.css`)

**Content Structure:**
1. **Hero:** Title, Author, Year Level, Badge ("Parent Curriculum Guide")
2. **What They'll Learn:** List of learning outcomes for the 10-week course
3. **10-Week Breakdown:**
   - Week-by-week cards with phase indicators (Foundation, Analysis, Writing, Body, Completion)
   - Weekly topics and skills
   - Technique highlight boxes for body paragraph weeks
   - Toggle between 5-week condensed and 10-week extended views
4. **CTA:** "Ready to get started?" → Link to `/course.html`

**What It Proves:**
- "They've mapped every week to this text"
- "They know what techniques matter in THIS book"
- "They've thought through the skill progression"
- "This is what my child will learn"

**What It Doesn't Give Away:**
- The actual worksheets
- The full analysis bank
- Teaching method implementation details

**SEO Target:** "[text] tutoring", "[text] English help", "[text] curriculum"

**Voice:** Parent-facing. "Your child will learn...", "Week-by-week breakdown"

**Technical Details:** See `BUILD_SYSTEM.md` (this directory) for build process documentation.

---

### 3.4 Course Page `/course/`

**Role:** Enrollment page. What they're buying.

**Audience:** Parent ready to evaluate offer.

**Content Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ NAV                                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  5 weeks. One text. Complete essay.                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  WHAT'S INCLUDED                                            │
│  ───────────────                                            │
│  • Weekly worksheets tailored to your child's text          │
│  • Written feedback on every submission                     │
│  • Final essay and assessment                               │
│  • Progress report for parents                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HOW IT WORKS                                               │
│  ────────────                                               │
│  Week 1: Understanding the text                             │
│  Week 2: Identifying patterns and devices                   │
│  Week 3: Building analytical sentences                      │
│  Week 4: Structuring the essay                              │
│  Week 5: Writing and revision                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PRICING                                                    │
│  ───────                                                    │
│  5-week course: $275                                        │
│  10-week course: $495                                       │
│                                                             │
│  [Enroll Now]                                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TEXT SELECTION HELPER                                      │
│  ─────────────────────                                      │
│  "Not sure which text your child is studying?"              │
│  "We have detailed course plans for 18+ texts..."           │
│  [Browse Available Texts →] [View All Course Plans]         │
│  Links: /#text-selection, /curriculum/                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** Minimal (conversion page, not discovery)

**Voice:** Parent-facing. Warm, clear, addresses concerns.

**Text-Specific Flow:** The text selection helper completes the parent-direct loop:
`Homepage → Text Guide → Course Page → [Back to Text Selection]`

---

## 4. PROOF LAYER: ANALYSIS GUIDE PAGES (Funnel 1)

### 4.1 Curriculum Hub `/vce/`, `/hsc/`, `/ib/`

**Role:** Entry point for curriculum-specific student searches.

**Audience:** Students searching for help with their curriculum.

**Content Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ NAV                                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  VCE English Text Analysis                                  │
│                                                             │
│  In-depth guides for VCE English texts.                     │
│  Pattern-based analysis that shows you HOW texts            │
│  create meaning.                                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  VCE TEXTS                                                  │
│  ─────────                                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ The Great Gatsby        F. Scott Fitzgerald         │   │
│  │ The Impossible Dream    → Full Analysis Guide       │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Macbeth                 William Shakespeare         │   │
│  │ Ambition's Corruption   → Full Analysis Guide       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HOW TO USE THESE GUIDES                                    │
│  ───────────────────────                                    │
│  Brief methodology explanation...                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** "VCE English texts", "VCE text analysis", "[curriculum] essay help"

**Voice:** Student-facing. Direct, useful, no fluff.

---

### 4.2 Analysis Guide `/vce/[text]/`

**Role:** Full SEO content. Steps 1-5. Demonstrates value, captures email.

**Audience:** Student searching for essay help.

**Content Structure:** Per GUIDE_TEMPLATE_SPEC_v1_1

```
Step 1: Know the Text (open)
Step 2: See the Pattern (open)
Step 3: Find the Proof (open)  
Step 4: Build the Claim (open)
Step 5: Write the Essay (gated — email capture)

+ One-sheet download CTA
+ Parent bridge footer
```

**SEO Target:** "[text] themes VCE", "[text] analysis", "[text] literary devices"

**Voice:** Student-facing. Peer-to-capable-peer. "Here's what sophisticated analysis looks like."

---

## 5. PROOF LAYER: ANNOTATION GUIDE PLG PAGES (Funnel 1B)

### 5.1 Annotations Hub `/annotations/`

**Role:** Student-first entry point. Lower-friction PLG funnel that captures student intent via SEO/social, then bridges to parent-direct conversion.

**Audience:** Students searching for annotation guides or text analysis help.

**Content Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo          Course | Curriculum Guides  [Enquire]    │
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
│  ┌─────────────────────────────────────────────────────┐   │
│  │ The Outsiders                                       │   │
│  │ Exposition Annotation Guide                         │   │
│  │ S.E. Hinton • Chapters 1-2                          │   │
│  │ Social — "Class-Naive Witnessing"                   │   │
│  │ → View Preview                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ The Giver                                           │   │
│  │ Chapter Annotation Guide                            │   │
│  │ Lois Lowry • Chapter 1                              │   │
│  │ → View Preview                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  COURSE CTA                                                 │
│  ──────────                                                 │
│  Want structured, expert-led learning?                      │
│  [View Course Details →]                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** "annotation guide [text]", "[text] literary analysis guide", "how to annotate [text]"

**Voice:** Student-facing. Helpful, practical, direct.

---

### 5.2 Annotation Preview Page `/annotations/[text]/`

**Role:** Preview + download gate + parent bridge. Demonstrates value, captures email/intent, bridges to parent-direct funnel.

**Audience:** Students seeking specific text help. Secondary: Parents researching alongside student.

**Content Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo          ← All Annotation Guides   [Enquire]      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  The Outsiders                                              │
│  Exposition Annotation Guide                                │
│                                                             │
│  S.E. Hinton • Chapters 1-2 • Years 7-9                     │
│  Social — "Class-Naive Witnessing"                          │
│  How Ponyboy reveals class structures he can't              │
│  fully articulate                                           │
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
│  Color Key:                                                 │
│  • Class Signifiers (objects showing group identity)        │
│  • Social Boundaries (places/barriers separating groups)    │
│  • Innocence Markers (vulnerability, naivety)               │
│                                                             │
│  What to Look For:                                          │
│  Semantic families with examples + key questions            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  DOWNLOAD GATE                                              │
│  ─────────────                                              │
│  Download the Full Guide                                    │
│  8-page PDF with structured activities, discovery           │
│  questions, and key passage analysis.                       │
│                                                             │
│  [Email input field]                                        │
│  [Download Free Guide →]                                    │
│                                                             │
│  143 KB PDF • No signup required • Instant download         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PARENT BRIDGE                                              │
│  ─────────────                                              │
│  Show your parent the full 10-week plan                     │
│  This annotation guide is just the beginning. See the       │
│  complete curriculum your child will follow.                │
│  [View Parent Curriculum Guide →]                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECONDARY CTA                                              │
│  ──────────────                                             │
│  Want expert guidance?                                      │
│  Join our 5-week or 10-week course for personalized        │
│  feedback and structured learning.                          │
│  [Enquire About the Course →]                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** "[text] annotation guide", "how to annotate [text]", "[text] chapter analysis"

**Voice:** Student-facing initially, transitions to parent-facing in bridge section.

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
Parent bridge CTA (funnel handoff)
  ↓
Parent curriculum guide or course page (parent-direct funnel)
```

**Content Pipeline:**
```
/data/annotation-guides/*.json → build-annotation-guides.js → /annotations/[slug]/index.html
```

**Gate Strategy (Future A/B Test):**
- Variant A: Email capture (low friction, list growth)
- Variant B: Low-price purchase ($5-10, intent + revenue signal)

**Success Metrics:**
- Download rate (page → download)
- Parent-bridge CTR (downloaded → outline/course)
- Course conversion rate (annotation → course enquiry)

---

## 6. PROOF LAYER: VIDEO-TO-PARENT PAGES (Funnel 3)

### 6.1 Video Studio `/studio/`

**Role:** Hosts 30-second animated video scenes that demonstrate text analysis. These are recorded as screen captures for social media (Instagram Reels, TikTok, YouTube Shorts).

**Audience:** Parents encountering LuminAIT through social media video. The video creates instant credibility by showing what analysis looks like in practice — bypassing the credence problem through specific demonstration.

**How it works:**
- Each scene is a self-contained HTML page with layered animations (intro → context → text analysis → outro)
- `script.js` (StudioController) handles SPACE/ArrowRight to advance steps, R to reset, A for auto-play
- Scene pages define `window.sceneSteps` (timing/subtitles) and a `studio-step` event handler (visual actions per step)
- Scenes are opened in Chrome fullscreen (F11), screen-recorded, then exported for social

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

See `BUILD_SYSTEM.md` for the full build pipeline documentation.

**Not a public-facing URL** — `/studio/` is a production tool, not a page visitors navigate to.

### 6.2 Interactive Demos `/studio/demos/`

**Role:** Dual-purpose pages that serve as (1) source for video screen capture and (2) interactive demonstrations linked from the homepage.

**Audience:**
1. **Production:** Video creator recording clips for the homepage/social.
2. **Homepage Visitor:** Viewing the "The Method" section and clicking "View Interactive Demo".

**Pages:**
*   `/studio/demos/demo-annotation.html` (The Outsiders loop)
*   `/studio/demos/demo-worksheet.html` (Interactive sorting/sequencing)
*   `/studio/demos/demo-analysis.html` (Essay typing simulator)

**Technical Implementation:**
*   Standalone HTML files (no build step necessary).
*   Auto-play on load (for video recording).
*   Looping animations.

---

## 7. SHARED PAGES

### 7.1 How It Works `/curriculum/`

**Role:** Methodology explanation. Supports both funnels.

**Content:** The 5-step system explained. How reading leads to writing.

### 7.2 About `/about/` (Optional)

**Role:** Background, credibility. Low priority.

---

## 8. NAVIGATION

### 8.1 Header (All Pages)

**Current Implementation:** Nav is generated from `site-config.json` via the build system.

```
Logo: LuminAIT    The Method | Texts | Schools | Course | Results | About    [Enquire]
```

**Navigation Structure:**
- Logo → `/` (homepage)
- The Method → `/method/` (teaching methodology)
- Texts → `/#text-selection` (jump to text grid on homepage)
- Schools → `/schools/` (school directory)
- Course → `/course/` (enrollment page)
- Results → `/results/` (student outcomes)
- About → `/about/` (teacher profile & philosophy)
- Enquire → `mailto:hello@luminait.app` (CTA button)

**Technical Implementation:**
- Nav partial: `/src/partials/nav.html`
- Generated via: `{{NAV_LINKS}}` placeholder in build system
- Controlled by: `showInNav` flag in `site-config.json`
- Bilingual support: EN/ZH text for all links
- Active state: Current page highlighted with `.active` class

**Managing Nav:**
- To add/remove nav items: Update `showInNav: true/false` in `site-config.json`
- To reorder nav: Reorder pages array in `site-config.json`
- To change nav text: Update `navTitle` in page config
- After changes: Run `node build.js` to regenerate pages

### 8.2 Footer (All Pages)

```
LuminAIT

Texts                    Resources              Contact
─────────                ─────────              ───────
Romeo and Juliet         How It Works           Email
Macbeth                  Course                 Phone
The Giver                VCE Guides
[etc.]

© 2026 · Melbourne
```

---

## 9. URL PATTERNS

### 9.1 Summary Table

| URL | Role | Page Type | Audience |
|-----|------|-----------|----------|
| `/partners/` | B2B Primary | Partnership page | Business |
| `/` | Proof Layer 2 | Homepage | Parent |
| `/[text-slug]/` | Proof Layer 2 | Text-specific outline | Parent |
| `/schools/` | Proof Layer 2 | School directory | Parent |
| `/schools/[school]/` | Proof Layer 2 | School page | Parent |
| `/course/` | Proof Layer 2 | Enrollment | Parent |
| `/curriculum/` | Proof Layer 2 | Additional guides | Parent |
| `/curriculum/[slug]/` | Proof Layer 2 | Curriculum guide | Parent |
| `/annotations/` | Proof Layer 1B | Annotation hub | Student |
| `/annotations/[text]/` | Proof Layer 1B | Annotation preview | Student |
| `/vce/` | Proof Layer 1 | Curriculum hub | Student |
| `/vce/[text]/` | Proof Layer 1 | Full analysis guide | Student |
| `/hsc/` | Proof Layer 1 | Curriculum hub | Student |
| `/hsc/[text]/` | Proof Layer 1 | Full analysis guide | Student |
| `/ib/` | Proof Layer 1 | Curriculum hub | Student |
| `/ib/[text]/` | Proof Layer 1 | Full analysis guide | Student |
| `/studio/` | Proof Layer 3 | Video studio (internal) | Production |
| `/studio/scenes/[slug].html` | Proof Layer 3 | Auto-generated scene | Production |
| `/progress/` | Proof Layer 4 | Progress reports | Parent/B2B |
| `/results/` | Proof Layer 4 | Student outcomes | Parent/B2B |

### 9.2 Text Slugs

| Text | Slug |
|------|------|
| To Kill a Mockingbird | `tkam` |
| The Great Gatsby | `gatsby` |
| Romeo and Juliet | `romeo-and-juliet` |
| Macbeth | `macbeth` |
| The Giver | `the-giver` |
| Animal Farm | `animal-farm` |

---

## 10. SEO STRATEGY

**For detailed local SEO implementation, see [LOCAL_SEO_STRATEGY.md](./LOCAL_SEO_STRATEGY.md)**

### 10.1 By Page Type

| Page Type | Primary Keywords | Intent |
|-----------|------------------|--------|
| Partnership page | "English tutoring partnership", branded B2B | Transactional (B2B) |
| Homepage | "English tutoring Melbourne", branded | Navigation |
| Text-specific outline | "[text] tutoring", "[text] English help" | Transactional |
| Course | Branded, "[text] course" | Transactional |
| Annotation guide | "[text] annotation guide", "how to annotate [text]" | Informational |
| Curriculum hub | "[curriculum] English texts" | Informational |
| Analysis guide | "[text] themes", "[text] analysis" | Informational |

### 10.2 Internal Linking

```
Partnership Page (/partners/)
    ├── → /annotations/[text]/ (infrastructure showcase)
    ├── → /[text-slug]/ (parent experience example)
    ├── → /progress/ (measurement proof)
    ├── → /results/ (outcomes proof)
    └── → /schools/[school]/ (school integration proof)

Homepage
    ├── → /[text-slug]/ (text cards)
    ├── → /course/ (CTA)
    └── → /curriculum/ (nav)

Text-Specific Outline
    ├── → /course/ (CTA)
    ├── → / (back to texts)
    └── → /vce/[text]/ (if full guide exists, "Want more depth?")

Annotation Preview
    ├── → /[text-slug]/ (parent bridge)
    ├── → /course/ (secondary CTA)
    └── → /annotations/ (back to hub)

Analysis Guide
    ├── → /course/ (parent bridge)
    └── → / (if parent landed here by mistake)
```

---

## 11. BUILD PHASES

### Phase 0: B2B Partnership Surface (Highest Priority)

**Goal:** Create the B2B partnership page that showcases cohort economics and links to infrastructure proof.

| Page | Status | Action |
|------|--------|--------|
| `/partners/` | New | Build partnership page (template + content) |

### Phase 1: Parent-Direct (Complete)

**Goal:** Parent-direct funnel operational.

| Page | Status | Action |
|------|--------|--------|
| `/` | ✅ Live | Homepage with text grid |
| `/[text-slug]/` | ✅ Live (18 texts) | Text-specific outlines |
| `/course/` | ✅ Live | Enrollment page |
| `/schools/` | ✅ Live | School directory |

### Phase 2: PLG Expansion

**Goal:** Expand annotation guides per text.

| Page | Status | Action |
|------|--------|--------|
| `/annotations/` | ✅ Live | Annotation hub |
| `/annotations/[text]/` | ✅ Live (2 texts) | Expand to more texts |

### Phase 3: Analysis Guides Foundation

**Goal:** VCE analysis guides live.

| Page | Status | Action |
|------|--------|--------|
| `/vce/` | New | Build curriculum hub |
| `/vce/[text]/` | New | Build via pipeline |

### Phase 4: Analysis Guides Expansion

**Goal:** HSC, IB hubs and guides.

| Page | Status | Action |
|------|--------|--------|
| `/hsc/` | New | Build when HSC texts confirmed |
| `/ib/` | New | Build when IB texts confirmed |

---

## 12. TECHNICAL REQUIREMENTS

### 12.1 SEO

- [ ] XML sitemap (auto-generated)
- [ ] robots.txt
- [ ] Google Search Console verified
- [ ] Meta titles/descriptions per page
- [ ] Schema markup: Organization, Article, Book
- [ ] Canonical URLs

### 12.2 Performance

- [ ] Static HTML (current approach)
- [ ] Minimal JS
- [ ] Core Web Vitals passing

### 12.3 Analytics

- [ ] Page views, time on page, scroll depth
- [ ] Track: text card clicks (which texts get interest)
- [ ] Track: course page visits by source
- [ ] Search Console: queries, impressions, CTR

### 12.4 Language

- [ ] EN/ZH toggle on all Funnel 2 pages
- [ ] Chinese translations for homepage, course, methodology demos

### 12.5 Styling

All pages must follow the unified design system. See `DESIGN_SYSTEM.md` (this directory).

| Page Type | CSS File | Voice |
|-----------|----------|-------|
| B2B partnership | `page-marketing.css` + B2B overrides | Direct, evidence-based |
| Parent-facing (Proof Layer 2) | `page-marketing.css` | Warm, parent-focused |
| Student-facing (Proof Layers 1/1B) | `page-guide.css` [TODO] | Direct, useful |

**Adding new pages:** Follow `DESIGN_SYSTEM.md` (this directory) Section 8 for complete procedure.

---

## 13. IMPLEMENTATION NOTES

### 13.1 Dual Parent Guide System

**Why two locations for parent guides?**

- **Root level** (`/the-giver/`, `/macbeth/`, etc.): Homepage books
  - 8 texts featured on homepage text grid
  - Direct parent funnel: homepage → text page → course
  - Built with: `build-homepage-guides.js`

- **Curriculum directory** (`/curriculum/dracula/`, `/curriculum/jane-eyre/`, etc.): Additional guides
  - 10 additional texts not on homepage
  - Accessed via "View Parent Curriculum Guides" link on homepage
  - Includes curriculum index page at `/curriculum/`
  - Built with: `build-parent-guides.js`

**Both use the same:**
- JSON data format (`/data/parent-guides/[slug].json`)
- Template (`/src/templates/_parent-guide-template.html`)
- Design system (`/components/page-parent-guide.css`)
- 10-week course outline structure

**Future consolidation:** Once all texts have parent guides, consider moving homepage to use `/curriculum/` links instead of root-level pages. Current structure optimizes for SEO ([text] vs /curriculum/[text]).

---

## 14. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 11, 2025 | Initial architecture (student-led only) |
| 2.0 | Jan 24, 2026 | Two-funnel architecture |
| 2.1 | Jan 27, 2026 | Added Schools Directory (/schools/) |
| 2.2 | Jan 27, 2026 | Implemented text-specific course outlines (18 total guides: 8 at root + 10 in /curriculum/) |
| 3.0 | Jan 28, 2026 | Three-funnel architecture: added Funnel 3 (Video-to-Parent) with /studio/ and /studio/scenes/ |
| 3.1 | Jan 30, 2026 | Updated homepage structure to reflect Video Demo Section integration |
| 3.2 | Feb 2, 2026 | Parent-Direct as PRIMARY. Repositioned schools section after results. Added text selection helper to course page. |
| 4.0 | Feb 19, 2026 | **B2B Partnership as PRIMARY commercial strategy.** Added /partners/ page definition. All funnels reframed as proof layers. Section numbering updated. URL patterns table updated with B2B proof layer roles. |

---

**END OF DOCUMENT**
