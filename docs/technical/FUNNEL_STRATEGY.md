# FUNNEL STRATEGY v2.0

**Date:** February 19, 2026
**Status:** Active
**Purpose:** Define the funnel hierarchy with B2B partnership as primary and parent-direct / PLG as subordinate proof layers.
**Supersedes:** v1.0 (Parent-Direct as primary)
**Related:** [00_COMMERCIAL_THESIS.md](../theory/00_COMMERCIAL_THESIS.md), [02_CUSTOMER_JOURNEY.md](../theory/02_CUSTOMER_JOURNEY.md)

---

## 1. FUNNEL HIERARCHY

**Decision:** B2B cohort-build partnership is the primary commercial strategy. Parent-direct and PLG are subordinate funnels that reinforce the B2B sale by demonstrating infrastructure value, parent experience, and organic demand.

```
PRIMARY:     B2B Partnership Funnel
PROOF LAYER: Parent-Direct Funnel (Funnel 2)
PROOF LAYER: PLG / Annotation Funnel (Funnel 1B)
PROOF LAYER: Video-to-Parent (Funnel 3)
PROOF LAYER: Analysis Guides (Funnel 1)
```

### Why This Order

The B2B sale generates more revenue per engagement (~$20k fee + ongoing licensing) and produces a scalable asset (a cohort that the partner operates). Parent-direct conversions (~$500/course) remain valuable but are better framed as proof of the parent experience that the B2B partner will inherit.

---

## 2. PRIMARY: B2B PARTNERSHIP FUNNEL

**Audience:** Tutoring company operators, education business owners.

**Core path:**

```
Partnership page → Infrastructure showcase → Engagement proposal
```

### 2.1 Partnership Page

**Goal:** Single B2B surface that presents the cohort economics model and links to infrastructure proof.

**Content hierarchy:**

1. Core commercial claim (cohort lifecycle revenue: ~$18–20k)
2. Engagement structure (what we deliver, what partner provides)
3. Infrastructure showcase (links to annotation guides, measurement, parent guides)
4. Outcome proof (links to results, before/after)
5. CTA: Request engagement proposal

### 2.2 Infrastructure Showcase

The B2B buyer doesn't need a separate set of assets. They need to see the existing assets through the lens of "this is what your teachers will deliver" and "this is what your parents will see."

**Proof Layer mapping:**

| What the B2B buyer needs to see | Where it already lives |
|---|---|
| What teachers will deliver | Annotation guides, worksheets |
| What parents will see | Curriculum guides, progress reports, school pages |
| That demand exists | Annotation download traffic, student SEO |
| That it works | Results page, before/after writing |

### 2.3 Success Metrics

* Partnership page visits → engagement enquiry rate
* Time on infrastructure showcase pages from B2B referral
* Engagement proposals sent → signed

---

## 3. PROOF LAYER: PARENT-DIRECT (Funnel 2)

**Decision:** Parent-Direct remains the primary consumer conversion path. It is no longer the primary commercial strategy — it is the parent experience that the B2B partner will inherit and that demonstrates retention/value perception.

**Core path:**

```
Homepage (text selection) → Text guide → Course → Enrollment
```

**Secondary entry points (handoff into text guides):**

```
Schools page → Text guide → Course
Video demo → Text guide → Course
```

### 3.1 Homepage Hierarchy

**Goal:** Make text selection the dominant action.

**Priorities:**

1. Text selection grid + clear CTA (primary)
2. Proof of specificity (e.g., "See the 10-week plan for that exact text")
3. Video demos (supporting proof)
4. School CTA (secondary)
5. Outcomes / testimonials / about

### 3.2 Navigation Alignment

* "Texts" or "Find Text" should be a top-level nav item.
* "Schools" remains in nav but secondary.
* "Course" is the conversion endpoint.
* Partnership page is accessible but not in the parent-facing primary nav.

### 3.3 Course Page Alignment

* Add "What this looks like for your child's text" with a link back to the relevant guide.
* Keep generic claims below text-specific proof.

### 3.4 Success Metrics

* Course inquiry conversion rate
* Text guide → course click-through
* Retention (term-to-term re-enrollment)

---

## 4. PROOF LAYER: PLG / ANNOTATION FUNNEL (Funnel 1B)

**Role:** Demonstrates organic student demand for the infrastructure. Downloads and traffic validate the B2B claim that the system produces discoverable, usable assets.

**Core path:**

```
Student SEO/social → Annotation preview → Download gate → Parent bridge
```

**B2B proof value:** Download volume, organic traffic, parent-bridge conversion rate.

---

## 5. PROOF LAYER: VIDEO-TO-PARENT (Funnel 3)

**Role:** Demonstrates reach and credence bypass at first contact. Shows B2B partners that the infrastructure generates social content that drives discovery.

**Core path:**

```
Social video (30s) → Depth layer (guide/outline) → Enrollment
```

**B2B proof value:** Social reach, engagement rates, video-to-site conversion.

---

## 6. PROOF LAYER: ANALYSIS GUIDES (Funnel 1)

**Role:** Full SEO content demonstrating analytical depth. Captures student email, bridges to parent.

**Core path:**

```
Student search → Full analysis guide → Email capture → Parent bridge → Course
```

**B2B proof value:** SEO rankings, content depth, email list growth.

---

## 7. FUTURE A/B TEST (Parent-Direct Variant)

**Objective:** Evaluate whether a school-led entry point improves parent-direct conversion without hurting the overall funnel.

### 7.1 Variants

**Control (Option A):** Text-first hero and primary CTA. School CTA is secondary.

**Variant (Option B):** School search as the hero CTA. Text grid becomes secondary.

### 7.2 Metrics

**Primary:** Course inquiry conversion rate, school page → text guide CTR.

**Secondary:** Time on page, text guide visit rate, course page visits per session.

### 7.3 Guardrails

* Overall conversion rate should not drop more than 10% vs control.
* Text guide entry rate should not fall below 60% of control.

### 7.4 Decision Rule

Adopt Option B only if: course inquiries improve ≥10% relative to control, and guardrail metrics remain within bounds.

---

## 8. IMPLEMENTATION NOTES

* Implement B2B partnership page as highest priority (new).
* Parent-direct funnel is already live — no changes to existing pages.
* PLG/annotation funnel is already live — no changes needed.
* Use consistent event tracking across all funnels for B2B proof reporting.
* If analytics are missing, instrument before running any A/B tests.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 1, 2026 | Initial (Parent-Direct primary, school-led A/B test planned) |
| 2.0 | Feb 19, 2026 | B2B Partnership as primary; parent-direct, PLG, video reframed as proof layers; added infrastructure showcase mapping |

---

**END OF DOCUMENT**
