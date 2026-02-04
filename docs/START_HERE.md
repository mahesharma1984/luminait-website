# START HERE: Docs by Job (Operating vs Strategy)

Purpose: keep context small during prototyping, UX, and SEO work.

Rule: load one small context packet first (3-5 docs), not the entire docs folder.

## 1) Operating Docs (How to Build and Validate)

Use these for implementation and execution.

### Core Operating Docs
1. `docs/technical/BUILD_SYSTEM.md`
2. `docs/technical/SITE_ARCHITECTURE.md`
3. `docs/technical/DESIGN_SYSTEM.md`
4. `docs/technical/UX_PROCESS.md`
5. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md`

### When to Use
- editing templates/data
- running build scripts
- validating UX and page quality
- debugging regressions

## 2) Strategy Docs (Why the Product/Funnel Works)

Use these when decisions depend on messaging, funnel stage, or channel role.

### Core Strategy Docs
1. `docs/theory/01_CREDENCE_PROBLEM.md`
2. `docs/theory/02_CUSTOMER_JOURNEY.md`
3. `docs/theory/03_VALIDATION_LOOP.md`
4. `docs/theory/04_CONTENT_DERIVATION.md`
5. `docs/theory/05_CHANNEL_ALIGNMENT.md`
6. `docs/technical/FUNNEL_STRATEGY.md`

### When to Use
- deciding page purpose, CTA hierarchy, or copy angle
- deciding what belongs in SEO vs social vs annotation assets
- fixing conversion friction points

## 3) Small Context Packets (Recommended)

### Packet A: UX Prototyping (New section/page layout)
Load:
1. `docs/technical/UX_PROCESS.md`
2. `docs/technical/DESIGN_SYSTEM.md`
3. `docs/technical/SITE_ARCHITECTURE.md`
4. `docs/theory/02_CUSTOMER_JOURNEY.md`

Expected output:
- wireframe-aligned section/page
- correct journey stage and CTA
- design-system compliant markup/styles

### Packet B: SEO Prototyping (School/Text landing pages)
Load:
1. `docs/technical/LOCAL_SEO_STRATEGY.md`
2. `docs/technical/SITE_ARCHITECTURE.md`
3. `docs/technical/BUILD_SYSTEM.md`
4. `docs/technical/UX_PROCESS.md`

Expected output:
- valid page type and URL pattern
- correct data/template edits
- rebuilt output pages with correct internal links

### Packet C: UX + SEO Conversion Tuning (Existing page)
Load:
1. `docs/theory/01_CREDENCE_PROBLEM.md`
2. `docs/theory/02_CUSTOMER_JOURNEY.md`
3. `docs/technical/UX_PROCESS.md`
4. `docs/technical/SITE_ARCHITECTURE.md`

Expected output:
- copy and layout aligned to journey stage
- stronger next-step clarity (CTA progression)
- no channel-job mixing

### Packet D: Debugging / Regression
Load:
1. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md` (Part 4)
2. `docs/technical/BUILD_SYSTEM.md` (Troubleshooting)
3. `docs/technical/UX_PROCESS.md` (Stage 6)

Expected output:
- measured baseline
- scoped fix
- verified before/after result

### Packet E: Messaging / Channel Strategy
Load:
1. `docs/theory/04_CONTENT_DERIVATION.md`
2. `docs/theory/05_CHANNEL_ALIGNMENT.md`
3. `docs/technical/FUNNEL_STRATEGY.md`

Expected output:
- clear channel job assignment
- consistent CTA bridge (annotation -> parent outline/course)

## 4) Quick Selection Guide

- If you are coding or rebuilding pages: start with an Operating packet.
- If you are changing messaging/positioning: add one Strategy packet.
- If blocked by uncertainty: use Packet D (debug) first, then return.

## 5) Minimal Default for Most Prototyping

For most UX/SEO prototype tasks, start with:
1. `docs/technical/BUILD_SYSTEM.md`
2. `docs/technical/SITE_ARCHITECTURE.md`
3. `docs/technical/UX_PROCESS.md`
4. `docs/theory/02_CUSTOMER_JOURNEY.md`

Add more docs only when a concrete decision requires them.
