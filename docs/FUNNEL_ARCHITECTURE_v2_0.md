# FUNNEL ARCHITECTURE v2.0

**Date:** January 24, 2026  
**Status:** Active — canonical reference for all funnel design  
**Supersedes:** FUNNEL_SPEC_v1_0.md (student-led only)  
**Related:** Distribution_Strategy_v1_0, PMF_Addendum_v1_0, PLG_PMF_Alignment_v2_0

---

## 1. OVERVIEW

Two distinct funnels serving different audiences with the same core strength: text-specific, reading-first methodology.

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CORE STRENGTH                               │
│                                                                     │
│   Books + Guides + Methodology (reading-first, text-specific)       │
│                                                                     │
└─────────────────────┬───────────────────────┬───────────────────────┘
                      │                       │
                      ▼                       ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │   FUNNEL 1          │   │   FUNNEL 2          │
        │   Analysis Guides   │   │   Methodology Demo  │
        │   (Student-Led)     │   │   (Parent-Direct)   │
        └─────────────────────┘   └─────────────────────┘
```

Both funnels lead with reading (verifiable, low friction) and deliver writing improvement through experience (credence, high value).

---

## 2. STRATEGIC FOUNDATION

### 2.1 The Core Principle

From PMF_Addendum and Distribution_Strategy:

> Lead with what they can verify (reading). Deliver what they can't evaluate (writing). Let experience do the selling.

**Reading (text-specific):**
- Search attribute — verifiable before purchase
- PLG score ~4.0 — can demonstrate value independently
- Bypasses credibility trap — no credentials required

**Writing (methodology):**
- Credence good — unverifiable even after purchase
- PLG score ~1.8 — requires education funnel
- Discovered through delivery, not sold upfront

### 2.2 Why Two Funnels

| Dimension | Analysis Guides | Methodology Demo |
|-----------|-----------------|------------------|
| Audience | Student (VCE/HSC/IB) | Parent (all levels) |
| Entry behavior | Searches for essay help | Searches for tutoring |
| Autonomy | High (deadline-driven) | Low (decides for child) |
| Content need | Full analysis | Quality signal |
| Conversion path | Long (bridge to parent) | Short (direct) |

Different audiences, different needs, same strength.

---

## 3. FUNNEL 1: ANALYSIS GUIDES (Student-Led)

### 3.1 Summary

Full SEO content play for upper secondary (VCE/HSC/IB). Students search for essay help, find comprehensive guides, bridge to parents for enrollment.

**Best for:** VCE, HSC, IB, upper secondary where students are autonomous and deadline-driven.

### 3.2 Journey Map

```
TRIGGER
────────────────────────────────────────────────────────────
Student has essay due on [Text]. Doesn't know what to write.

SEARCH
────────────────────────────────────────────────────────────
Query: "[text] themes VCE" / "[text] analysis" / "[text] essay"

ENTRY: Guide Page (/vce/tkam/, /hsc/gatsby/, etc.)
────────────────────────────────────────────────────────────
Student lands on full analysis guide.
- Steps 1-4: Open, SEO-indexed, demonstrates value
- Step 5: Gated for email capture

VALUE DEMONSTRATION
────────────────────────────────────────────────────────────
Student consumes guide content.
- "I see what sophisticated analysis looks like"
- Quality is self-evident
- Method becomes visible

EMAIL CAPTURE
────────────────────────────────────────────────────────────
Student provides email for Step 5 / one-sheet download.
- Receives lead magnet (thesis formula, quote bank, exemplar)
- "Use this tonight"

BRIDGE TO PARENT
────────────────────────────────────────────────────────────
Three touchpoints:
1. Guide footer: "Showing this to a parent?"
2. One-sheet CTA: Link to course landing page
3. Email sequence Day 5: "Share with a parent"

PARENT CONVERSION
────────────────────────────────────────────────────────────
Parent lands on /course/ via student referral.
- Already product-aware (student validated quality)
- Sees methodology explained
- Enrolls
```

### 3.3 URL Structure

```
/vce/                     → VCE hub (text list for VCE)
/vce/tkam/                → Full analysis guide
/vce/tkam/themes/         → Themes spoke (optional depth)
/vce/gatsby/              → Full analysis guide
/vce/[text]/              → Pattern repeats

/hsc/                     → HSC hub
/hsc/[text]/              → Full analysis guides

/ib/                      → IB hub  
/ib/[text]/               → Full analysis guides
```

### 3.4 Page Specs

**Curriculum Hub (/vce/, /hsc/, /ib/):**
- Text list for that curriculum
- Brief methodology mention
- SEO target: "[curriculum] English texts", "[curriculum] text analysis"

**Analysis Guide (/vce/[text]/):**
- Full 5-step structure (see GUIDE_TEMPLATE_SPEC_v1_1)
- Steps 1-4 open, Step 5 gated
- Email capture CTA
- Parent bridge in footer
- SEO target: "[text] themes [curriculum]", "[text] analysis"

### 3.5 Metrics

| Stage | Metric | Target |
|-------|--------|--------|
| SEO → Guide | Impressions, CTR | 1000+ impressions/month, >5% CTR |
| Guide | Time on page, scroll | >3 min, >60% scroll |
| Guide → Email | Capture rate | >5% of visitors |
| Email → Landing | Click rate | >20% of sequence |
| Landing → Enroll | Conversion | >10% of visitors |

### 3.6 Assets Required

- [ ] Curriculum hub pages (/vce/, /hsc/, /ib/)
- [ ] Full analysis guides per text (pipeline exists)
- [ ] One-sheet lead magnets per text
- [ ] Email nurture sequence (3 emails)
- [ ] Parent bridge CTAs in guides

---

## 4. FUNNEL 2: METHODOLOGY DEMO (Parent-Direct)

### 4.1 Summary

Parent-facing entry point for all year levels. Parents see text-match and methodology quality, enroll directly. No bridge needed.

**Best for:** All year levels (7-12), parents who know their child needs help and are evaluating options.

### 4.2 Journey Map

```
TRIGGER
────────────────────────────────────────────────────────────
School assigns [Text]. Parent knows child needs help with English.

SEARCH / REFERRAL
────────────────────────────────────────────────────────────
Query: "[text] tutoring Melbourne" / "English tutor [area]"
Or: Referral from another parent / sees flyer

ENTRY: Homepage (/)
────────────────────────────────────────────────────────────
Parent lands on text grid.
- Sees text-match immediately: "We teach [Text]"
- Scans for their child's book
- Clicks through to methodology demo

METHODOLOGY DEMO (/guides/[text]/)
────────────────────────────────────────────────────────────
Parent sees HOW you teach this text.
- Not full guide — methodology preview
- Quality is visible: "This is sophisticated"
- Text-specific: "They clearly know this book"
- Trust builds through demonstrated expertise

COURSE CTA
────────────────────────────────────────────────────────────
Clear path to enrollment:
- "Enroll in the [Text] course"
- Course details, pricing, logistics
- Text-match reinforced throughout

ENROLLMENT
────────────────────────────────────────────────────────────
Parent enrolls on /course/ page.
- Short path: Homepage → Demo → Course → Enroll
- No bridge needed (parent is already there)
```

### 4.3 URL Structure

```
/                         → Homepage (text grid, parent-facing)
/guides/                  → Guides index (optional)
/guides/tkam/             → Methodology demo page
/guides/gatsby/           → Methodology demo page
/guides/[text]/           → Pattern repeats
/course/                  → Course enrollment page
```

### 4.4 Page Specs

**Homepage (/):**
- Hero: Text-match prominent ("Find your child's text")
- Text grid: Books you teach, clickable to demo pages
- Brief "How It Works" (3 steps)
- Course CTA
- Parent voice throughout ("your child" not "you")

**Methodology Demo (/guides/[text]/):**
- NOT the full analysis guide — a preview
- Shows HOW you teach this text
- Sections:
  - What we cover (themes, devices, structure)
  - How we teach it (methodology visible)
  - Sample insight (one sophisticated observation)
  - What students produce (outcome preview)
- CTA: "Enroll in the [Text] course"
- Parent voice

**Course Page (/course/):**
- Full course details
- Pricing (5-week, 10-week options)
- What's included
- Enrollment form/CTA
- Text-specific framing where possible

### 4.5 Metrics

| Stage | Metric | Target |
|-------|--------|--------|
| Traffic → Homepage | Visits | Baseline + growth |
| Homepage → Demo | Click-through | >30% click a text |
| Demo → Course | Click-through | >20% click course CTA |
| Course → Enroll | Conversion | >10% of visitors |

### 4.6 Assets Required

- [ ] Homepage redesign (parent voice, text-match prominent)
- [ ] Methodology demo pages per text
- [ ] Course page update (text-specific framing)
- [ ] Flyer/print assets with text list + QR to homepage

---

## 5. RELATIONSHIP BETWEEN FUNNELS

### 5.1 Separation

The funnels are distinct. A visitor is in one or the other:

| Signal | Likely Funnel |
|--------|---------------|
| Lands on /vce/[text]/ | Funnel 1 (student) |
| Lands on / or /guides/[text]/ | Funnel 2 (parent) |
| Searches "[text] themes" | Funnel 1 |
| Searches "[text] tutoring" | Funnel 2 |
| Referred by another parent | Funnel 2 |
| Referred by student | Funnel 1 → 2 (bridge) |

### 5.2 Shared Assets

| Asset | Funnel 1 | Funnel 2 |
|-------|----------|----------|
| Kernel (text analysis) | Source for guide | Source for demo |
| Course page | Destination | Destination |
| Methodology (TVODE) | Demonstrated in guide | Previewed in demo |
| Text list | Per curriculum | All texts |

### 5.3 Build Order

**Phase 1: Funnel 2 (Parent-Direct)**
- Simpler, shorter path
- Tests core value prop
- Fewer assets required
- Start with one text (TKAM)

**Phase 2: Funnel 1 (Analysis Guides)**
- Build on existing pipeline
- Add curriculum structure (/vce/, /hsc/, /ib/)
- Scale content production
- Requires email infrastructure

---

## 6. MESSAGING HIERARCHY

Both funnels follow the same hierarchy, but with different depth:

```
LEVEL 1: TEXT MATCH (Both funnels)
─────────────────────────────────────────────────
"We teach [Text]"
- Verifiable, binary, no trust required
- This is the entry point

LEVEL 2: METHODOLOGY VISIBLE (Both funnels)
─────────────────────────────────────────────────
"Here's how we teach it"
- Funnel 1: Full demonstration (Steps 1-5)
- Funnel 2: Preview (enough to signal quality)
- Trust builds through visible expertise

LEVEL 3: OUTCOMES (Post-enrollment)
─────────────────────────────────────────────────
"Here's what your child will produce"
- Discovered through delivery
- Progress reports, before/after
- Drives retention and referral
```

**Do lead with:**
- "We teach To Kill a Mockingbird"
- "Your child is studying Macbeth — so are we"
- "Find your child's text below"

**Don't lead with:**
- "Improve your child's writing"
- "Analytical essay skills"
- "Critical thinking development"

---

## 7. INTEGRATION WITH EXISTING DOCS

### 7.1 What This Supersedes

| Document | Status |
|----------|--------|
| FUNNEL_SPEC_v1_0.md | Superseded (was student-led only) |
| site_architecture_full.md | Superseded by SITE_ARCHITECTURE_v2_0 |

### 7.2 What This Extends

| Document | Relationship |
|----------|--------------|
| Distribution_Strategy_v1_0 | This implements that strategy |
| PMF_Addendum_v1_0 | This applies reading/writing hierarchy |
| PLG_PMF_Alignment_v2_0 | This is Quadrant A solution |
| GUIDE_TEMPLATE_SPEC_v1_1 | Funnel 1 uses this for full guides |

### 7.3 New Docs Required

| Document | Purpose |
|----------|---------|
| SITE_ARCHITECTURE_v2_0 | URL structure for both funnels |
| METHODOLOGY_DEMO_SPEC_v1_0 | Parent-facing demo page spec |

---

## 8. NEXT STEPS

### Immediate (Funnel 2 MVP)

1. [ ] Build TKAM methodology demo page
2. [ ] Update homepage with parent voice + text grid
3. [ ] Update course page with text-specific framing
4. [ ] Test: Does parent understand offer? Do they click through?
5. [ ] Iterate message until conversion

### Near-term (Funnel 1 Foundation)

1. [ ] Create /vce/ hub page
2. [ ] Move existing TKAM guide to /vce/tkam/
3. [ ] Add email capture + one-sheet
4. [ ] Build parent bridge CTAs

### Later (Scale)

1. [ ] Expand curriculum hubs (/hsc/, /ib/)
2. [ ] Scale guide production via pipeline
3. [ ] Add school-specific pages (if booklists sourced)

---

## 9. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 19, 2026 | Student-led funnel only (as FUNNEL_SPEC) |
| 2.0 | Jan 24, 2026 | Two-funnel architecture: student-led + parent-direct |

---

**END OF DOCUMENT**
