# Content Map v3.0

**Purpose:** Define the best content type for each channel and audience, aligned to the B2B proof hierarchy. Annotation guides are the primary production focus.

**Date:** February 19, 2026
**Supersedes:** v2.0 (parent-direct channel mapping still active)

**Related:**
- `../theory/00_COMMERCIAL_THESIS.md` (B2B thesis + subordination hierarchy)
- `../theory/04_CONTENT_DERIVATION.md`
- `../theory/05_CHANNEL_ALIGNMENT.md`
- `./FUNNEL_STRATEGY.md`
- `./SITE_ARCHITECTURE.md`

---

## B2B Proof Layer Mapping

Every content asset serves both its direct audience and the B2B proof surface. The B2B buyer sees existing assets through the lens of "this is what the partnership delivers."

| B2B Proof Layer | What It Proves | Site Assets |
|-----------------|---------------|-------------|
| **1. Instructional Infrastructure** | What the partner gets | Annotation guides, worksheets, method page |
| **2. Parent-Facing Experience** | How parents perceive value | Parent curriculum guides (unlisted), school pages (unlisted) |
| **3. PLG / Demand Signal** | That organic demand exists | Annotation downloads, student SEO traffic |
| **4. Outcomes** | That it works | Method page outcomes section, before/after writing |

---

## Channel → Job → Best Content → CTA → B2B Layer

| Channel | Job | Best Content | Primary CTA | B2B Proof Layer | Production Status |
|---|---|---|---|---|---|
| **B2B partnership page** | Present cohort economics + showcase infrastructure | Cohort model + links to proof layers | Request engagement proposal | Primary surface | PLANNED |
| **SEO (annotation-specific)** | Capture student intent + build demand signal | Annotation guide preview page | Download guide → method bridge | Layer 3 (demand signal) | ACTIVE (expand) |
| **Social video** | Demonstrate expertise in-feed | 30s pattern reveal OR 30s annotation demo | Annotation guide or method page | Layer 1 (infrastructure) | ACTIVE (expand) |
| **Social text/images** | Drive clicks | Annotated snippet + 1 line takeaway | Annotation preview | Layer 1 (infrastructure) | ACTIVE |
| **Annotation pages** | Low-friction action + method visibility | Preview pages + download gate | Download → method bridge | Layer 3 (demand signal) | ACTIVE (expand) |
| **Method page** | Complete system proof | Condensed method + outcomes + pricing | Enquire | Layers 1+2+4 | PLANNED |
| **Email** | Nurture + bridge | Short sequence: method → outcomes | Method page / enquire | Layer 2 (parent assets) | NOT BUILT |
| **Parent guides (unlisted)** | B2B showcase + SEO equity | 10-week plan for text | Method page | Layer 2 (parent assets) | LIVE (18 texts, unlisted) |
| **School pages (unlisted)** | B2B showcase + local SEO | School booklist + text links | Method page | Layer 2 (parent assets) | LIVE (5 schools, unlisted) |

---

## Production Priority

**ACTIVE production (invest here):**

| Track | Content Type | Pipeline | B2B Proof Layer |
|---|---|---|---|
| **A — Annotation Guides** | Preview page + downloadable PDF per text | JSON → `build-annotation-guides.js` → `/annotations/[text]/` | Layers 1 + 3 |
| **B — Video Scenes** | 30s social content per text | JSON → `build-video-scenes.js` → `/studio/scenes/` | Layer 1 |
| **C — B2B Showcase** | Partnership page linking to best examples | Template → `build.js` → `/partners/` | Primary |

**PAUSED production (existing assets sufficient):**

| Track | Content Type | Status | Notes |
|---|---|---|---|
| Parent curriculum guides | 10-week text outlines | 18 built | No new guides needed. Existing ones serve as B2B showcase examples. |
| School pages | School-specific booklists | 5 built | Expand only if specific partnerships require it. |
| Social text/images | Annotated snippets | Ad hoc | Created as needed from annotation guide content. |

---

## Production Pack (Per Text)

**Track A — Annotation Guide (PRIMARY)**
- 1 annotation guide (preview page + downloadable PDF)
- 1 annotation demo video (30s) for social
- 2–3 social snippet posts from guide content

**Track B — B2B Showcase (links, not new assets)**
- Partnership page updated with best annotation guide example
- Method page linked from annotation guide's method bridge

**Track C — ARCHIVED (not actively produced)**
- ~~Parent curriculum guide~~ (18 already built — sufficient)
- ~~Pattern video for interpretation track~~ (merged into annotation video)

---

## How the Partnership Page Uses Existing Assets

The B2B page curates and links. It does not duplicate content. One representative example per asset type communicates pattern over volume.

```
/partners/
    │
    ├── "See what your teachers will deliver"
    │   → /annotations/the-outsiders/  (annotation guide example)
    │   → /method/                     (complete teaching system)
    │
    ├── "See what parents experience"
    │   → /the-giver/                  (parent guide example — unlisted)
    │   → /schools/mckinnon-sc/        (school page example — unlisted)
    │
    ├── "See the demand"
    │   → Download metrics (annotation guide traffic)
    │   → Student SEO signals
    │
    └── "See the outcomes"
        → /method/#outcomes            (before/after writing, data)
```

---

## Guardrails

- **One job per asset.** Don't mix interpretation and annotation in short-form.
- **Annotation guides bridge to method page.** (Not to individual parent guides — the condensed method page is the parent-facing endpoint.)
- **Method page is the single consumer conversion surface.** All parent-facing paths lead here.
- **B2B messaging stays on /partners/ only.** No B2B language on method, annotation, or other pages.
- **Partnership page links to proof, doesn't restate it.** The assets speak for themselves.
- **Pattern over volume.** One annotation guide example is more powerful than listing all 18 parent guides.
- **Parent guides are unlisted, not deleted.** They retain SEO equity and serve as B2B showcase links.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 2026 | Initial (parent-direct channel mapping) |
| 2.0 | Feb 19, 2026 | Added B2B proof layer mapping; partnership page curation model; Track C for B2B showcase |
| 3.0 | Feb 19, 2026 | Annotation guides as primary production focus. Parent-direct content production paused. Method page replaces course/results as consumer endpoint. Updated channel table and production packs. |

---

**END OF DOCUMENT**
