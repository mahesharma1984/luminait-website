# Content Map v2.0

**Purpose:** Define the best content type for each channel and audience, aligned to the B2B proof hierarchy and parent/student funnels.

**Date:** February 19, 2026
**Supersedes:** v1.0 (parent-direct only)

**Related:**
- `../theory/00_COMMERCIAL_THESIS.md` (B2B thesis + subordination hierarchy)
- `../theory/04_CONTENT_DERIVATION.md`
- `../theory/05_CHANNEL_ALIGNMENT.md`
- `./FUNNEL_STRATEGY.md`
- `./SITE_ARCHITECTURE.md`

---

## B2B Proof Layer Mapping

Every content asset serves both its direct audience (parent or student) and the B2B proof surface. The B2B buyer doesn't need separate assets — they need to see existing assets through the lens of "this is what the partnership delivers."

| B2B Proof Layer | What It Proves | Site Assets |
|-----------------|---------------|-------------|
| **1. Instructional Infrastructure** | What the partner gets | Annotation guides, worksheets, measurement gates, diagnostic rubrics |
| **2. Parent-Facing Experience** | How parents perceive value | Curriculum guides, school pages, progress reports, course page |
| **3. PLG / Demand Signal** | That organic demand exists | Annotation downloads, student SEO traffic, email captures |
| **4. Outcomes** | That it works | Before/after writing, conversion/retention data, results page |

---

## Channel → Job → Best Content → CTA → B2B Layer

| Channel | Job | Best Content | Primary CTA | B2B Proof Layer |
|---|---|---|---|---|
| **B2B partnership page** | Present cohort economics + showcase infrastructure | Cohort model + links to proof layers | Request engagement proposal | Primary surface |
| **SEO (text-specific)** | Capture intent + build credence | Interpretation/pattern guide page | Parent outline (`/[text]`) | Layer 2 (parent assets) |
| **Local SEO (school)** | Capture school intent | School page + booklist + links | Text outline (`/[text]`) | Layer 2 (parent assets) |
| **Social video** | Demonstrate expertise in-feed | 30s pattern reveal OR 30s annotation demo (one job per video) | Annotation preview or guide page | Layer 1 (infrastructure showcase) |
| **Social text/images** | Drive clicks | Annotated snippet + 1 line takeaway | Annotation preview (`/annotations/[text]/`) | Layer 1 (infrastructure showcase) |
| **Annotation pages** | Low-friction action + method visibility | Preview pages + download gate | Download → parent outline | Layer 3 (demand signal) |
| **Parent outline** | Preparation proof | 10-week plan for text | Course | Layer 2 (parent assets) |
| **Course page** | Conversion proof | "Method artifacts" strip (Annotation → Worksheet → Essay) | Enquire / Enroll | Layer 2 (parent assets) |
| **Email** | Nurture + bridge | Short sequence: method → outcomes | Parent outline / course | Layer 2 (parent assets) |
| **Results/Progress** | Validation loop | Before/after + metrics | Return to course | Layer 4 (outcomes) |

---

## Production Pack (Per Text)

**Track A — Interpretation (SEO → Proof Layer 2)**
- 1 text guide (pattern/interpretation)
- 1 parent outline (`/[text]`)
- 1 pattern video (30s)

**Track B — Annotation (Social/PLG → Proof Layers 1 + 3)**
- 1 annotation guide (preview + download)
- 1 annotation demo video (30s)
- 2–3 social snippet posts

**Track C — B2B Showcase (links, not new assets)**
- Partnership page links to best examples from Tracks A + B
- Progress/results page links for outcome proof

---

## How the Partnership Page Uses Existing Assets

The B2B page doesn't duplicate content. It curates and links:

```
/partners/
    │
    ├── "See what your teachers will deliver"
    │   → /annotations/the-outsiders/  (annotation guide example)
    │   → /progress/                   (measurement framework)
    │
    ├── "See what parents experience"
    │   → /the-giver/                  (curriculum guide example)
    │   → /schools/mckinnon/           (school page example)
    │   → /course/                     (enrollment page)
    │
    ├── "See the demand"
    │   → Download metrics (annotation guide traffic)
    │   → Email list growth signals
    │
    └── "See the outcomes"
        → /results/                    (before/after writing)
        → Founder-led cohort data
```

---

## Guardrails

- **One job per asset.** Don't mix interpretation and annotation in short-form.
- **Annotation always bridges to parent outline.**
- **Parent outline remains primary consumer conversion path.**
- **B2B messaging stays on /partners/ only.** No B2B language on parent or student pages.
- **Partnership page links to proof, doesn't restate it.** The assets speak for themselves.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 2026 | Initial (parent-direct channel mapping) |
| 2.0 | Feb 19, 2026 | Added B2B proof layer mapping; partnership page curation model; Track C for B2B showcase |

---

**END OF DOCUMENT**
