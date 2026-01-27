# SITE ARCHITECTURE v2.0

**Date:** January 27, 2026  
**Status:** Active — canonical reference for URL structure  
**Supersedes:** SITE_ARCHITECTURE_v2_0.md  
**Related:** FUNNEL_ARCHITECTURE_v2_0, METHODOLOGY_DEMO_SPEC_v1_0  
**Superseded/Modified By (Parent Funnel):** FRAMEWORK_Credence_Conversion_Touchpoints_v1_2.md

---

## 1. OVERVIEW

Site structure supporting two distinct funnels:

```
luminait.app/
│
├── FUNNEL 2: PARENT-DIRECT ─────────────────────────────────
│   │
│   ├── /                     → Homepage (text grid, parent-facing)
│   ├── /schools/             → School-first entry point (NEW)
│   │   └── /schools/[school]/→ Text lists by school
│   ├── /[text-slug]/         → ✅ Text-specific course outlines (8 books)
│   │                            (the-giver, macbeth, animal-farm, etc.)
│   └── /course/              → Enrollment
│
├── FUNNEL 1: ANALYSIS GUIDES ───────────────────────────────
│   │
│   ├── /vce/                 → VCE hub (not implemented)
│   │   └── /vce/[text]/      → Full analysis guides
│   ├── /hsc/                 → HSC hub (not implemented)
│   │   └── /hsc/[text]/      → Full analysis guides
│   └── /ib/                  → IB hub (not implemented)
│       └── /ib/[text]/       → Full analysis guides
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

## 2. FUNNEL 2 PAGES (Parent-Direct)

### 2.1 Homepage `/`

**Role:** Entry point for parent-direct funnel. Text-match prominent.

**Audience:** Parents seeking tutoring for their child.

**Content Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo          How It Works | Course       [EN | 中文]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ─────                                                      │
│  Melbourne · Years 7-12                                     │
│                                                             │
│  English tutoring built around                              │
│  your child's text                                          │
│                                                             │
│  Find their book below.                                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TEXT GRID                                                  │
│  ─────────                                                  │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│  │ Romeo & │ │ Macbeth │ │ The     │                       │
│  │ Juliet  │ │         │ │ Giver   │                       │
│  │ Y9-10   │ │ VCE     │ │ Y7-8    │                       │
│  └─────────┘ └─────────┘ └─────────┘                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│  │ Animal  │ │ TKAM    │ │ Gatsby  │                       │
│  │ Farm    │ │         │ │         │                       │
│  │ Y9-10   │ │ Y9-10   │ │ VCE     │                       │
│  └─────────┘ └─────────┘ └─────────┘                       │
│                                                             │
│  Don't see your text? Let us know.                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HOW IT WORKS (3 steps)                                     │
│  ─────────────────────                                      │
│  1. Find your text                                          │
│  2. Work through the guide                                  │
│  3. Get support (course enrollment)                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PARENT CTA                                                 │
│  ──────────                                                 │
│  Looking for structured tutoring?                           │
│  → See Course Details                                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** "English tutoring Melbourne", "text-specific tutoring", branded searches

**Voice:** Parent-facing. "Your child's text", not "your text".

---

### 2.2 School Directory `/schools/` (NEW)

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

### 2.3 Text-Specific Course Outline `/[text-slug]/`

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

**Technical Details:** See `BUILD_SYSTEM.md` for build process documentation.

---

### 2.3 Course Page `/course/`

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
│  NOT SURE WHICH TEXT?                                       │
│  → See our available guides                                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**SEO Target:** Minimal (conversion page, not discovery)

**Voice:** Parent-facing. Warm, clear, addresses concerns.

---

## 3. FUNNEL 1 PAGES (Analysis Guides)

### 3.1 Curriculum Hub `/vce/`, `/hsc/`, `/ib/`

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

### 3.2 Analysis Guide `/vce/[text]/`

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

## 4. SHARED PAGES

### 4.1 How It Works `/curriculum/`

**Role:** Methodology explanation. Supports both funnels.

**Content:** The 5-step system explained. How reading leads to writing.

### 4.2 About `/about/` (Optional)

**Role:** Background, credibility. Low priority.

---

## 5. NAVIGATION

### 5.1 Header (All Pages)

```
Logo: LuminAIT          How It Works | Course       [EN | 中文]
```

**Notes:**
- Logo links to `/`
- "How It Works" links to `/curriculum/`
- "Course" links to `/course/`
- "Schools" links to `/schools/`
- Language toggle on all pages

### 5.2 Footer (All Pages)

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

## 6. URL PATTERNS

### 6.1 Summary Table

| URL | Funnel | Page Type | Audience |
|-----|--------|-----------|----------|
| `/` | 2 | Homepage | Parent |
| `/guides/` | 2 | Guide index | Parent |
| `/guides/[text]/` | 2 | Methodology demo | Parent |
| `/course/` | Both | Enrollment | Parent |
| `/curriculum/` | Both | How It Works | Both |
| `/vce/` | 1 | Curriculum hub | Student |
| `/vce/[text]/` | 1 | Full analysis guide | Student |
| `/hsc/` | 1 | Curriculum hub | Student |
| `/hsc/[text]/` | 1 | Full analysis guide | Student |
| `/ib/` | 1 | Curriculum hub | Student |
| `/ib/[text]/` | 1 | Full analysis guide | Student |

### 6.2 Text Slugs

| Text | Slug |
|------|------|
| To Kill a Mockingbird | `tkam` |
| The Great Gatsby | `gatsby` |
| Romeo and Juliet | `romeo-and-juliet` |
| Macbeth | `macbeth` |
| The Giver | `the-giver` |
| Animal Farm | `animal-farm` |

---

## 7. SEO STRATEGY

### 7.1 By Page Type

| Page Type | Primary Keywords | Intent |
|-----------|------------------|--------|
| Homepage | "English tutoring Melbourne", branded | Navigation |
| Methodology demo | "[text] tutoring", "[text] English help" | Transactional |
| Course | Branded, "[text] course" | Transactional |
| Curriculum hub | "[curriculum] English texts" | Informational |
| Analysis guide | "[text] themes", "[text] analysis" | Informational |

### 7.2 Internal Linking

```
Homepage
    ├── → /guides/[text]/ (text cards)
    ├── → /course/ (CTA)
    └── → /curriculum/ (nav)

Methodology Demo
    ├── → /course/ (CTA)
    ├── → / (back to texts)
    └── → /vce/[text]/ (if full guide exists, "Want more depth?")

Curriculum Hub
    ├── → /vce/[text]/ (text cards)
    └── → /course/ (parent bridge)

Analysis Guide
    ├── → /course/ (parent bridge)
    └── → / (if parent landed here by mistake)
```

---

## 8. BUILD PHASES

### Phase 1: Funnel 2 MVP (Now)

**Goal:** Test parent-direct funnel with one text.

| Page | Status | Action |
|------|--------|--------|
| `/` | Exists, needs update | Refine parent voice, text-match prominence |
| `/guides/tkam/` | New | Build methodology demo |
| `/course/` | Exists | Update with text-specific framing |

### Phase 2: Funnel 2 Expansion

**Goal:** Methodology demos for all texts.

| Page | Status | Action |
|------|--------|--------|
| `/guides/gatsby/` | New | Build methodology demo |
| `/guides/macbeth/` | New | Build methodology demo |
| `/guides/[etc.]/` | New | Build methodology demos |

### Phase 3: Funnel 1 Foundation

**Goal:** VCE analysis guides live.

| Page | Status | Action |
|------|--------|--------|
| `/vce/` | New | Build curriculum hub |
| `/vce/tkam/` | Exists (current guide) | Move to new URL |
| `/vce/gatsby/` | New | Build via pipeline |

### Phase 4: Funnel 1 Expansion

**Goal:** HSC, IB hubs and guides.

| Page | Status | Action |
|------|--------|--------|
| `/hsc/` | New | Build when HSC texts confirmed |
| `/ib/` | New | Build when IB texts confirmed |

---

## 9. TECHNICAL REQUIREMENTS

### 9.1 SEO

- [ ] XML sitemap (auto-generated)
- [ ] robots.txt
- [ ] Google Search Console verified
- [ ] Meta titles/descriptions per page
- [ ] Schema markup: Organization, Article, Book
- [ ] Canonical URLs

### 9.2 Performance

- [ ] Static HTML (current approach)
- [ ] Minimal JS
- [ ] Core Web Vitals passing

### 9.3 Analytics

- [ ] Page views, time on page, scroll depth
- [ ] Track: text card clicks (which texts get interest)
- [ ] Track: course page visits by source
- [ ] Search Console: queries, impressions, CTR

### 9.4 Language

- [ ] EN/ZH toggle on all Funnel 2 pages
- [ ] Chinese translations for homepage, course, methodology demos

### 9.5 Styling

All pages must follow the unified design system. See `docs/DESIGN_SYSTEM.md`.

| Page Type | CSS File | Voice |
|-----------|----------|-------|
| Parent-facing (Funnel 2) | `page-marketing.css` | Warm, parent-focused |
| Student-facing (Funnel 1) | `page-guide.css` [TODO] | Direct, useful |

**Adding new pages:** Follow `DESIGN_SYSTEM.md` Section 8 for complete procedure.

---

---

## 10. IMPLEMENTATION NOTES

### 10.1 Dual Parent Guide System

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

## 11. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 11, 2025 | Initial architecture (student-led only) |
| 2.0 | Jan 24, 2026 | Two-funnel architecture |
| 2.1 | Jan 27, 2026 | Added Schools Directory (/schools/) |
| 2.2 | Jan 27, 2026 | Implemented text-specific course outlines (18 total guides: 8 at root + 10 in /curriculum/) |

---

**END OF DOCUMENT**
