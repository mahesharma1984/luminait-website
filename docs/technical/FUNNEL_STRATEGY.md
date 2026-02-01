# FUNNEL STRATEGY v1.0

**Date:** February 1, 2026  
**Status:** Active  
**Purpose:** Define the primary funnel and document a future A/B test for a school-led variant.

---

## 1. PRIMARY STRATEGY (Option A — Parent-Direct)

**Decision:** Parent-Direct (text-first) is the primary funnel.  
**Rationale:** Text guides are the strongest proof asset and the most universal handoff point from all entry sources.

**Core path:**
```
Homepage (text selection) → Text guide → Course
```

**Secondary entry points (handoff into text guides):**
```
Schools page → Text guide → Course
Video demo → Text guide → Course
```

### 1.1 Homepage Hierarchy
**Goal:** Make text selection the dominant action.

**Priorities:**
1. Text selection grid + clear CTA (primary)
2. Proof of specificity (e.g., “See the 10-week plan for that exact text”)
3. Video demos (supporting proof)
4. School CTA (secondary)
5. Outcomes / testimonials / about

### 1.2 Navigation Alignment
**Goal:** Keep navigation consistent with the primary funnel.

**Guidelines:**
- “Texts” or “Find Text” should be a top-level nav item.
- “Schools” remains in nav but secondary.
- “Course” is the conversion endpoint.

### 1.3 Course Page Alignment
**Goal:** Make the course feel text-specific.

**Guidelines:**
- Add “What this looks like for your child’s text” with a link back to the relevant guide.
- Keep generic claims below text-specific proof.

---

## 2. FUTURE A/B TEST (Option B — School-Led Variant)

**Objective:** Evaluate whether a school-led entry point improves conversion and local SEO outcomes without hurting parent-direct conversions.

### 2.1 Hypothesis
If the homepage is school-led (primary CTA = “Find your school”), then parents searching by school will convert at a higher rate, while overall conversions will not fall below the parent-direct baseline.

### 2.2 Variants
**Control (Option A):**
- Text-first hero and primary CTA
- School CTA is secondary

**Variant (Option B):**
- School search as the hero CTA
- Text grid becomes secondary

### 2.3 Metrics
**Primary:**
- Course inquiry conversion rate
- School page → text guide click-through rate

**Secondary:**
- Time on page
- Text guide visit rate
- Course page visits per session

### 2.4 Guardrails
- Overall conversion rate should not drop more than 10% vs control.
- Text guide entry rate should not fall below 60% of control.

### 2.5 Test Length
- Minimum 2 weeks or 500 sessions per variant (whichever is longer).

### 2.6 Decision Rule
Adopt Option B only if:
- Course inquiries improve ≥ 10% relative to control, and
- Guardrail metrics remain within bounds.

---

## 3. IMPLEMENTATION NOTES

- Implement Option A first.
- Use consistent event tracking for text selection, school selection, demo clicks, and course CTA.
- If analytics are missing, instrument before running the test.

---

**END OF DOCUMENT**
