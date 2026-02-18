# FUNNEL STRATEGY v3.0

**Date:** February 19, 2026
**Status:** Active
**Purpose:** Define the funnel hierarchy with B2B partnership as primary. Parent-direct funnel archived. Annotation guides as active PLG and infrastructure proof.
**Supersedes:** v2.0 (B2B primary but parent-direct still live)
**Related:** [00_COMMERCIAL_THESIS.md](../theory/00_COMMERCIAL_THESIS.md), [SITE_ARCHITECTURE.md](./SITE_ARCHITECTURE.md) (v5.0)

---

## 1. FUNNEL HIERARCHY

**Decision:** B2B cohort-build partnership is the primary commercial strategy. The live site supports two active funnels: the B2B partnership funnel and the annotation guide PLG funnel. Parent-direct funnel pages are archived (accessible but removed from navigation).

```
PRIMARY:      B2B Partnership Funnel
ACTIVE PLG:   Annotation Guide Funnel (dual-duty: student PLG + B2B infrastructure proof)
ACTIVE:       Video-to-Parent (social content production — feeds into annotation/method pages)
ARCHIVED:     Parent-Direct Funnel (pages accessible but unlisted — proof assets for B2B showcase)
REMOVED:      Analysis Guide Hubs (never built — absorbed by annotation guides)
```

### Why This Order

The B2B sale generates ~$20k per engagement and produces a scalable asset (a cohort that the partner operates). Annotation guides are the highest-leverage content because they serve dual duty: students download them (PLG demand signal) while B2B buyers evaluate them as infrastructure proof. Parent-direct pages remain accessible for SEO equity and as B2B showcase examples, but are no longer actively maintained or promoted.

---

## 2. PRIMARY: B2B PARTNERSHIP FUNNEL

**Audience:** Tutoring company operators, education business owners.

**Core path (hub-and-spoke, not linear):**

```
Partnership page → Explores proof links → Returns to partnership page → Engagement proposal
```

The B2B buyer sees the system from above. They don't go through a funnel — they evaluate proof assets via links from the partnership page and return to take action.

### 2.1 Partnership Page

**Goal:** Single B2B surface presenting cohort economics and linking to infrastructure proof.

**Content hierarchy:**

1. Core commercial claim (cohort lifecycle revenue: ~$18–20k)
2. Engagement structure (what we deliver, what partner provides)
3. Infrastructure showcase (links to annotation guide example, method page)
4. Parent experience proof (links to parent guide example, school page example)
5. Outcome proof (links to method page outcomes section)
6. CTA: Request engagement proposal

### 2.2 Infrastructure Showcase

The B2B buyer evaluates existing assets through the lens of "this is what the partnership delivers." One representative example per asset type communicates pattern over volume.

**Proof Layer mapping:**

| What the B2B buyer needs to see | Where it lives | Link from `/partners/` |
|---|---|---|
| What teachers will deliver | Annotation guides | → `/annotations/the-outsiders/` |
| The complete teaching system | Condensed method page | → `/method/` |
| What parents will see | Parent curriculum guide (unlisted) | → `/the-giver/` |
| School-level alignment | School page (unlisted) | → `/schools/mckinnon-sc/` |
| That it works | Method page outcomes section | → `/method/#outcomes` |

### 2.3 Success Metrics

* Partnership page visits → engagement enquiry rate
* Proof link click-through from partnership page (which layers get attention)
* Engagement proposals sent → signed

---

## 3. ACTIVE PLG: ANNOTATION GUIDE FUNNEL

**Role:** Dual-duty funnel. Students discover and download annotation guides (PLG demand signal). B2B buyers evaluate them as infrastructure proof. The same pages serve both audiences without dual messaging.

**Core path (student):**

```
Student SEO/social → Annotation preview → Download gate → Method bridge → /method/ → Enquire
```

**Core path (B2B buyer, via /partners/):**

```
/partners/ infrastructure showcase → Annotation guide example → (evaluates quality) → Back to /partners/
```

**Why annotation guides are the highest-leverage content:**
- They ARE the infrastructure (not descriptions of it)
- Each new guide adds PLG value AND B2B proof value simultaneously
- They demonstrate text-specific depth — the credence bypass in action
- Download volume validates the B2B claim that the system produces discoverable assets

**B2B proof value:** Download volume, organic traffic, student engagement metrics.

**Success Metrics:**
- Download rate (page → download)
- Method-bridge CTR (download → method page)
- Course enquiry rate (annotation → method → enquire)

---

## 4. ACTIVE: VIDEO-TO-PARENT (Social Content)

**Role:** Demonstrates reach and credence bypass at first contact. 30-second video scenes showing text-specific analysis drive social discovery.

**Core path:**

```
Social video (30s) → Annotation guide or method page → Enquire
```

**Status:** 18 scenes built (all The Outsiders). Production tool at `/studio/`.

**B2B proof value:** Social reach, engagement rates, video-to-site conversion.

---

## 5. ARCHIVED: PARENT-DIRECT FUNNEL

**Status:** ARCHIVED — pages accessible at current URLs but removed from navigation. May be reintroduced when priorities shift.

**Why archived:** The parent-direct funnel was designed as the primary commercial strategy (v1.0–v3.2 of SITE_ARCHITECTURE). Under B2B-primary, separate parent marketing pages (homepage text grid, individual course outlines, course enrollment, school directory) create the impression of a consumer tutoring business rather than an infrastructure company. The condensed method page (`/method/`) absorbs all parent-facing proof into a single surface.

**What remains accessible (unlisted):**
- 18 parent curriculum guides at `/[text-slug]/` and `/curriculum/[text]/`
- 5 school pages at `/schools/[school]/`

**What is archived (redirects to /method/):**
- Course page → `/method/#enroll`
- Syllabus → `/method/#ten-week-plan`
- Results → `/method/#outcomes`
- Progress → `/method/#measurement`
- Sample → `/method/#artifacts`

**Retained value:**
- Unlisted pages retain SEO equity for "[text] tutoring" searches
- Partnership page links to ONE parent guide and ONE school page as representative examples
- Build scripts and JSON data remain intact for potential reintroduction

**Former core path:**
```
Homepage (text selection) → Text guide → Course → Enrollment
```

**Former success metrics:**
- Course inquiry conversion rate
- Text guide → course click-through
- Retention (term-to-term re-enrollment)

---

## 6. REMOVED: ANALYSIS GUIDE HUBS

**Status:** REMOVED from architecture. Never built.

The VCE/HSC/IB analysis guide hubs were planned as curriculum-specific student entry points with a 5-step guide format (Know → See → Find → Build → Write). Annotation guides absorb this role with lower friction and superior dual-duty value. The 5-step analytical depth may inform future annotation guide expansion.

---

## 7. ARCHIVED: A/B TEST SPEC (Parent-Direct Variant)

**Status:** ARCHIVED — no longer applicable. The A/B test was designed to evaluate school-led vs. text-first homepage variants for parent-direct conversion. With parent-direct archived and homepage redesigned as a minimal router, this test is no longer relevant.

Preserved for reference if parent-direct funnel is reintroduced:

- **Control:** Text-first hero. School CTA secondary.
- **Variant:** School search as hero CTA. Text grid secondary.
- **Primary metric:** Course inquiry conversion rate.
- **Decision rule:** Adopt variant only if course inquiries improve ≥10% relative to control.

---

## 8. IMPLEMENTATION NOTES

* Build B2B partnership page as highest priority (P0).
* Build condensed method page as second priority (P0 — required before archiving old pages).
* Redesign homepage as minimal router (P0 — after method page exists).
* Expand annotation guides per text (P1 — highest-leverage ongoing content investment).
* Parent-direct pages remain accessible — do not delete build scripts or data files.
* Use consistent event tracking across B2B funnel and annotation PLG for proof reporting.
* Update `site-config.json` nav flags after method page and homepage are built.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 1, 2026 | Initial (Parent-Direct primary, school-led A/B test planned) |
| 2.0 | Feb 19, 2026 | B2B Partnership as primary; parent-direct, PLG, video reframed as proof layers |
| 3.0 | Feb 19, 2026 | Archived parent-direct funnel. Annotation guides promoted as active dual-duty PLG. Analysis guide hubs removed. Condensed method page replaces 6 separate pages. A/B test archived. |

---

**END OF DOCUMENT**
