# Core Documentation Index

**Updated:** 2026-02-19
**Purpose:** Quick reference for finding documentation. Each concept has ONE canonical location.

---

## Quick Reference

| Question | Answer | Source |
|---|---|---|
| How do I build pages? | See Build Command Matrix | `AGENTS.md` section 3 |
| What's the site architecture? | Lean B2B: /partners/, /method/, /annotations/, router homepage | `docs/technical/SITE_ARCHITECTURE.md` |
| How do I debug a build issue? | Follow the symptom table | `docs/DEBUG_RUNBOOK.md` |
| What are the development rules? | R/P Split, Measure First, Prototype Discipline | `CLAUDE.md` Development Protocol |
| How do I add a new book? | CW-NEW-BOOK workflow | `docs/WORKFLOW_REGISTRY.md` |
| What's the commercial strategy? | B2B cohort-build partnership is primary | `docs/theory/00_COMMERCIAL_THESIS.md` |
| What's the funnel hierarchy? | B2B primary; parent-direct archived; annotations are active PLG | `docs/technical/FUNNEL_STRATEGY.md` |
| Why does the product work? | Credence problem theory | `docs/theory/01_CREDENCE_PROBLEM.md` |
| How do I start a new task? | Use context packets A-E | `docs/START_HERE.md` |
| What are the safety rules? | Hard rules + checklists | `docs/CI_RULES.md` |
| What build script do I run? | Depends on what changed | `docs/WORKFLOW_REGISTRY.md` Section 1 |

---

## Canonical Sources

Each concept has ONE authoritative document. When information conflicts, defer to the canonical source.

| Concept | Canonical Source | Status |
|---|---|---|
| Commercial thesis (B2B primary) | `docs/theory/00_COMMERCIAL_THESIS.md` | AUTHORITATIVE |
| Credence problem theory | `docs/theory/01_CREDENCE_PROBLEM.md` | AUTHORITATIVE |
| Customer journey theory | `docs/theory/02_CUSTOMER_JOURNEY.md` | AUTHORITATIVE |
| Funnel strategy | `docs/technical/FUNNEL_STRATEGY.md` | AUTHORITATIVE |
| Site architecture | `docs/technical/SITE_ARCHITECTURE.md` | AUTHORITATIVE |
| Build system | `docs/technical/BUILD_SYSTEM.md` | AUTHORITATIVE |
| Design system | `docs/technical/DESIGN_SYSTEM.md` | AUTHORITATIVE |
| UX validation process | `docs/technical/UX_PROCESS.md` | AUTHORITATIVE |
| Development methodology | `docs/DEV_GUIDE_Building_Prototypes_v2_0.md` | AUTHORITATIVE |
| Debugging procedures | `docs/DEBUG_RUNBOOK.md` | AUTHORITATIVE |
| Build workflows | `docs/WORKFLOW_REGISTRY.md` | AUTHORITATIVE |
| Safety guardrails | `docs/CI_RULES.md` | AUTHORITATIVE |
| Task routing | `docs/START_HERE.md` | AUTHORITATIVE |
| Brand and voice | `STYLE_GUIDE.md` | AUTHORITATIVE |
| Agent instructions (Claude) | `CLAUDE.md` | AUTHORITATIVE |
| Agent instructions (all) | `AGENTS.md` | AUTHORITATIVE |
| Agent instructions (Gemini) | `GEMINI.md` | AUTHORITATIVE |

---

## Document Categories

### Navigation (How to find things)
- `CLAUDE.md` -- AI assistant instructions and task-routed reading
- `AGENTS.md` -- Universal agent instructions
- `docs/START_HERE.md` -- Context packets for common task types
- `docs/CORE_DOCS_INDEX.md` -- This file (Q&A lookup)

### Product Theory (Why the product works)
- `docs/theory/00_COMMERCIAL_THESIS.md` -- B2B cohort-build as primary strategy (upstream of all theory)
- `docs/theory/01_CREDENCE_PROBLEM.md` -- Why customers doubt
- `docs/theory/02_CUSTOMER_JOURNEY.md` -- Parent journey (proof layer for B2B)
- `docs/theory/03_VALIDATION_LOOP.md` -- How validation informs development
- `docs/theory/04_CONTENT_DERIVATION.md` -- Content sourcing
- `docs/theory/05_CHANNEL_ALIGNMENT.md` -- Channel-specific alignment

### Technical (How the system works)
- `docs/technical/SITE_ARCHITECTURE.md` -- Lean B2B architecture, theory-to-asset registry, page specs
- `docs/technical/BUILD_SYSTEM.md` -- Build scripts and generators
- `docs/technical/DESIGN_SYSTEM.md` -- UI components and styles
- `docs/technical/UX_PROCESS.md` -- 6-stage UX validation
- `docs/technical/FUNNEL_STRATEGY.md` -- Funnel hierarchy (B2B primary, parent-direct archived)
- `docs/technical/CONTENT_MAP.md` -- Channel-to-content mapping, production priorities

### Operations (How to do things)
- `docs/DEBUG_RUNBOOK.md` -- Triage and diagnosis
- `docs/WORKFLOW_REGISTRY.md` -- Named build procedures
- `docs/CI_RULES.md` -- Safety guardrails
- `docs/DEV_GUIDE_Building_Prototypes_v2_0.md` -- Development methodology

### Methodology Reference (Why we do things this way)
- `docs/methodology/knowledge-base/` -- Theoretical foundations (LLM capabilities, task design, causality, measurement, failure)
- `docs/methodology/skills/` -- Composable practices (pattern-first, measurement-driven, failure-gates)
- `docs/methodology/examples/` -- How these skills were discovered
