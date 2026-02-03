# ISSUE: Annotation Guide PLG Funnel (Annotations Hub + Preview + Gate + Bridge)

**Date:** Feb 2, 2026
**Status:** Proposed
**Related Docs:**
- `docs/technical/FUNNEL_STRATEGY.md`
- `docs/technical/SITE_ARCHITECTURE.md`
- `docs/theory/02_CUSTOMER_JOURNEY.md`
- `docs/theory/04_CONTENT_DERIVATION.md`
- `docs/theory/03_VALIDATION_LOOP.md`

## Problem
The current funnel relies on parent-direct conversion. Annotation guides can be a lower-friction PLG entry, but there is no coherent /annotations pathway that captures student intent and bridges to the parent outline and course.

## Goal
Create an **annotation-guide-first** entry path that:
1) Captures student intent via SEO and social,
2) Drives **download** (email gate or low-price test),
3) Bridges to the **parent outline** (`/[text-slug]/` or `/curriculum/[slug]/`),
4) Preserves the parent-direct funnel as the primary conversion path.

## Non-Goals
- Replace parent-direct funnel or change its primary CTA
- Build full `/vce/` analysis guides yet
- Rewrite core course pages (only add bridge/loop touchpoints if needed)

## Scope
- New URL group: `/annotations/`
- New landing template(s): index + per-text annotation preview
- Gate experiments: email capture vs low-price purchase
- Bridge CTA to parent outlines and course

## Proposed Information Architecture
- `/annotations/` (index: text list + brief explanation + CTA)
- `/annotations/[text-slug]/` (preview page + download gate + parent bridge)
- Optional later: `/annotations/[text-slug]/[section]/` (section previews)

## Key Page Requirements
**Annotation Preview Page** (`/annotations/[text]/`)
- Hero: text + "Annotation Guide (Preview)"
- Preview: 1–2 annotated pages or a single annotated excerpt
- Method: short section on how annotations work
- Primary CTA: "Download Full Guide"
- Parent bridge: "Show your parent the 10-week plan" → `/<text-slug>/` or `/curriculum/[slug]/`
- Secondary CTA: "Enquire" → `/course.html`

## Gate Test (Run Both)
A/B the gate once enough traffic exists:
- Variant A: Email gate (low friction, list growth)
- Variant B: Low-price purchase (intent + revenue)

## Success Metrics
- Download rate (page → download)
- Parent-bridge CTR (downloaded → outline)
- Course CTR (downloaded → course)
- Conversion lift vs baseline traffic

## Open Questions
- Final download mechanism: email provider and/or payments?
- PDF hosting location and naming conventions?
- Which initial text(s) to launch first?

## Assets
- Annotation PDFs exist locally (path to confirm)

