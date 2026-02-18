# Instructions for Claude

Before coding, read `/docs/` first using the task-routed order below.

## Task-Routed Reading

### Build Practices (templates, generators, data)
1. `docs/technical/BUILD_SYSTEM.md`
2. `docs/technical/DESIGN_SYSTEM.md`
3. `docs/technical/UX_PROCESS.md`

### Prototyping / New Features
1. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md`
2. `docs/theory/00_COMMERCIAL_THESIS.md` (understand B2B proof hierarchy)
3. `docs/technical/SITE_ARCHITECTURE.md`
4. `docs/theory/02_CUSTOMER_JOURNEY.md`

### Debugging / Regressions
1. `docs/DEBUG_RUNBOOK.md` (symptom lookup -- start here)
2. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md` (Part 4)
3. `docs/technical/BUILD_SYSTEM.md` (Troubleshooting)
4. `docs/technical/UX_PROCESS.md` (Stage 6)

### Development Methodology / Meta-Process
1. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md`
2. `docs/methodology/knowledge-base/README.md` (reading order)
3. `docs/methodology/skills/README.md` (composition guide)

### Product Theory / Messaging / Architecture
1. `docs/theory/00_COMMERCIAL_THESIS.md` (B2B primary — read first)
2. `docs/theory/01_CREDENCE_PROBLEM.md`
3. `docs/theory/02_CUSTOMER_JOURNEY.md`
4. `docs/theory/03_VALIDATION_LOOP.md`
5. `docs/theory/04_CONTENT_DERIVATION.md`
6. `docs/theory/05_CHANNEL_ALIGNMENT.md`
7. `docs/technical/SITE_ARCHITECTURE.md`
8. `docs/technical/FUNNEL_STRATEGY.md`

## Active Project Structure

```
/                           # Generated root pages (do not edit directly)
├── index.html
├── course.html
├── progress.html
├── ...
│
├── site-config.json
├── build.js
├── build-homepage-guides.js
├── build-parent-guides.js
├── build-video-scenes.js
├── build-school-pages.js
├── build-annotation-guides.js
│
├── /src/templates/         # Source templates
├── /src/partials/          # Shared partials (nav/footer/scripts)
├── /data/parent-guides/    # Parent guide content JSON
├── /data/video-scenes/     # Video scene JSON
├── /data/schools/          # School page JSON
├── /data/annotation-guides/# Annotation guide JSON
│
├── /books/                 # Generated homepage book pages
│   ├── the-giver/
│   ├── macbeth/
│   └── ... (8 total)
│
├── /presentations/         # Presentation deck system
│   ├── core/               # Shared scripts
│   ├── partnership/        # Template A: Partnership Economics
│   ├── infrastructure/     # Template B: Teaching Infrastructure
│   ├── scaling/            # Template C: Scaling Teaching
│   ├── co-founder/         # Template D: Co-Founder Pitch
│   └── appendix/           # Supplementary: Scaling Reality
│
├── /generated/             # All generated content
│   ├── curriculum/         # Generated curriculum guide pages
│   ├── annotations/        # Generated annotation preview pages
│   ├── schools/            # Generated school pages
│   └── studio/             # Generated studio scene pages
│
└── /docs/                  # Canonical methodology
```

## Build Workflow (Current)

1. Main pages:
   - Edit: `src/templates/*.html`, `src/partials/*`, `site-config.json`
   - Build: `node build.js`

2. Parent guides (dual system):
   - Homepage texts in /books/: `node build-homepage-guides.js`
   - Curriculum in /generated/curriculum/: `node build-parent-guides.js`
   - Template changes in `src/templates/_parent-guide-template.html` require both scripts

3. Video scenes:
   - Edit: `data/video-scenes/*.json` or `src/templates/_video-scene-template.html`
   - Build: `node build-video-scenes.js`

4. School pages:
   - Edit: `data/schools/*.json`, `src/templates/_school-page-template.html`, `src/templates/schools-index.html`
   - Build: `node build-school-pages.js`

5. Annotation guides:
   - Edit: `data/annotation-guides/*.json` or `src/templates/_annotation-guide-template.html`
   - Build: `node build-annotation-guides.js`

6. Full build:
   - `npm run build:all`

## Source-of-Truth Rules

1. Never edit generated root HTML directly (`index.html`, `course.html`, etc.).
2. Always edit templates/data/config sources.
3. Rebuild with the matching script immediately after source edits.
4. Validate generated output and links.

## Development Protocol

### Measure First
- Before major rebuilds, check diff to avoid wiping uncaptured changes.
- Use concrete before/after checks, not visual guesses.

### Reasoning vs Precision Split
- Reasoning tasks (classification, interpretation, synthesis): use LLM.
- Precision tasks (exact extraction/counting/format validation): use code/scripts.

### Prototype Discipline
- Start with one real case.
- One scoped problem per session.
- Prefer simplest manual path first; automate after repeated stable pattern.

### Failure Gates
- Every build script has implicit hard gates (file not found, template parse error) -- treat these as stop-execution.
- Soft gate: a generated page with broken internal links should warn, not halt the full build.
- Level 0: source files (templates, JSON data, config) must exist and parse correctly before any generation.

### Pattern-First
- Define template structure before populating with data.
- Trace causality: template -> build script -> generated output. Never edit downstream.
- When adding a new page type: define the template first, then the data schema, then populate.

## Architecture Guardrails

1. B2B cohort-build partnership is the primary commercial strategy.
2. Parent-direct, PLG, and video funnels are proof layers that reinforce the B2B sale.
3. B2B messaging is constrained to the partnership page (`/partners/`).
4. Keep page role aligned to journey stage:
   - Text match -> preparation proof -> method confidence -> action.
5. Keep channel jobs distinct:
   - Interpretation/pattern content builds credence.
   - Annotation content demonstrates method/action.
6. Every content asset serves dual duty: its direct audience AND B2B proof.

## Operational Documents

- `docs/DEBUG_RUNBOOK.md` -- symptom-to-fix lookup for common build failures
- `docs/WORKFLOW_REGISTRY.md` -- named build procedures (atomic + composed)
- `docs/CI_RULES.md` -- safety guardrails for commits and AI-assisted work
- `docs/CORE_DOCS_INDEX.md` -- canonical source for each concept

## Documentation Priority

1. `docs/theory/00_COMMERCIAL_THESIS.md` (B2B anchor — read first for any strategy/architecture work)
2. `docs/theory/*` + `docs/technical/*` (canonical product/technical docs)
3. `docs/DEV_GUIDE_Building_Prototypes_v2_0.md` (development methodology)
4. `docs/DEBUG_RUNBOOK.md` + `docs/WORKFLOW_REGISTRY.md` (operational)
5. Agent-specific files (`CLAUDE.md`, `GEMINI.md`)
6. `docs/methodology/*` (reference -- theory and skills)
7. `docs/_archive/*` (reference only)
