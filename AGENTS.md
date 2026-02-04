# Agent Instructions (LuminAIT Website)

These instructions apply to all coding assistants (Codex, Claude, Gemini).

## 1) Read Docs First (Task-Routed)

Before editing code, load only the docs needed for the task.

### A. Build Practices (templates, generators, data)
Read in this order:
1. `docs/technical/BUILD_SYSTEM.md`
2. `docs/technical/DESIGN_SYSTEM.md`
3. `docs/technical/UX_PROCESS.md`

### B. Prototyping / New Feature Development
Read in this order:
1. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md`
2. `docs/technical/SITE_ARCHITECTURE.md`
3. `docs/theory/02_CUSTOMER_JOURNEY.md`

### C. Debugging / Regressions
Read in this order:
1. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md` (Part 4: Measure -> Diagnose -> Fix -> Verify)
2. `docs/technical/BUILD_SYSTEM.md` (Troubleshooting section)
3. `docs/technical/UX_PROCESS.md` (Stage 6 Build Validation)

### D. Product Theory / Messaging / Architecture
Read in this order:
1. `docs/theory/01_CREDENCE_PROBLEM.md`
2. `docs/theory/02_CUSTOMER_JOURNEY.md`
3. `docs/theory/03_VALIDATION_LOOP.md`
4. `docs/theory/04_CONTENT_DERIVATION.md`
5. `docs/theory/05_CHANNEL_ALIGNMENT.md`
6. `docs/technical/SITE_ARCHITECTURE.md`
7. `docs/technical/FUNNEL_STRATEGY.md`

## 2) Source-of-Truth Rules (Non-Negotiable)

1. Never edit generated root HTML directly (`index.html`, `course.html`, etc.).
2. Edit sources only:
- Main pages: `src/templates/*.html` + `src/partials/*`
- Parent guides content: `data/parent-guides/*.json`
- Video scenes content: `data/video-scenes/*.json`
- School pages content: `data/schools/*.json`
- Annotation guides content: `data/annotation-guides/*.json`
3. Rebuild with the correct script immediately after source edits.
4. Validate output and links before finishing.

## 3) Build Command Matrix

Use these commands based on what changed:

- `src/templates/*.html`, `src/partials/*`, `site-config.json` -> `node build.js`
- `data/parent-guides/*.json` (homepage books) -> `node build-homepage-guides.js`
- `data/parent-guides/*.json` (curriculum guides/index) -> `node build-parent-guides.js`
- `src/templates/_parent-guide-template.html` -> run both parent guide builds
- `data/video-scenes/*.json` or `src/templates/_video-scene-template.html` -> `node build-video-scenes.js`
- `data/schools/*.json`, `src/templates/_school-page-template.html`, `src/templates/schools-index.html` -> `node build-school-pages.js`
- `data/annotation-guides/*.json`, `src/templates/_annotation-guide-template.html` -> `node build-annotation-guides.js`

Convenience:
- Full site build: `npm run build:all`

## 4) Prototyping Rules (From DEV_GUIDE)

1. Start with one real case.
2. Keep one problem per chat/session.
3. Complete exploration before execution:
- Problem definition -> decomposition -> pattern recognition -> abstraction -> build
4. Prefer the simplest working version first (manual before automation).
5. Classify tasks as Reasoning vs Precision:
- Reasoning -> LLM
- Precision (exact extraction/counting/format enforcement) -> code/scripts

## 5) Debugging Protocol (Mandatory)

1. Measure first (baseline with concrete output).
2. Diagnose root cause using Reasoning/Precision split.
3. Apply minimal fix for one scoped issue.
4. Verify with the same measurement.
5. Re-test at least one additional real case.

Do not use "looks right" as evidence.

## 6) Architecture & Messaging Guardrails

1. Funnel 2 (Parent-Direct) is primary.
2. Keep page purpose aligned to journey stage:
- Text match -> preparation proof -> method confidence -> action
3. Do not mix channel jobs in short-form assets:
- Interpretation/pattern content builds credence
- Annotation content builds method/action
4. Maintain parent-facing voice on parent funnel pages.

## 7) Additional Functions / Pipelines Available

Beyond core builds, this repo also has:

1. Annotation guide pipeline
- Build: `node build-annotation-guides.js`
- Inputs: `data/annotation-guides/*.json`
- Outputs: `annotations/[slug]/index.html`, `annotations/index.html`

2. PDF preview extraction helper
- Script: `scripts/extract-pdf-preview.sh`
- Purpose: guide + fallback for extracting preview PNGs from PDFs

3. Asset compositing utility
- Script: `composite_assets.py`
- Purpose: compose social/video image assets from template files

## 8) Documentation Precedence

If docs conflict, use this order:
1. `docs/theory/*` and `docs/technical/*` (canonical)
2. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md`
3. Agent-specific files (`CLAUDE.md`, `GEMINI.md`)
4. `docs/_archive/*` (reference only)

## 9) Known Drift to Correct

`CLAUDE.md` currently references `generate_site.py` and `/templates/` guide generation paths that are not present in this repo snapshot. Prefer the active JS build pipelines documented in `docs/technical/BUILD_SYSTEM.md`.
