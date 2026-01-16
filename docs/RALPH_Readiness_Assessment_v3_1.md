# RALPH READINESS ASSESSMENT

**Version:** 3.1
**Date:** January 16, 2026
**Purpose:** Gate between exploration and automation
**Requires:** DEV_GUIDE_Building_Prototypes_v2_0.md (Stage 1 complete before using this)

---

## WHAT IS RALPH?

Ralph is an autonomous development loop that keeps Claude Code working until a task is complete:

```python
while not done:
    feed prompt to Claude
    Claude works on task
    Claude tries to exit
    if completion_promise in output: done = true
    else: re-feed prompt with file state
```

**Core philosophy:** "Better to fail predictably than succeed unpredictably."

**When it works:** Mechanical tasks with binary success criteria (tests pass, build works, lint clean).

**When it fails:** Exploration, judgment, or precision tasks assigned to the LLM.

---

## THE HANDOFF PROBLEM

Ralph automates Phase 2 (Execution) only. It cannot do exploration.

**YOUR WORKFLOW:**

```
┌─────────────────────────────────────────────────────────────┐
│ PHASE 1: EXPLORATION (Claude + Manual)                      │
│ ├── Break down problem                                      │
│ ├── Test ideas manually                                     │
│ ├── Identify patterns                                       │
│ └── Define what "done" looks like                           │
│                                                             │
│ ══════════════════════════════════════════════════════════  │
│                    RALPH HANDOFF GATE                       │
│ ══════════════════════════════════════════════════════════  │
│                                                             │
│ PHASE 2: EXECUTION (Cursor / Ralph)                         │
│ ├── Build the thing                                         │
│ ├── Test outputs                                            │
│ ├── Find bugs                                               │
│ └── Loop until solved                                       │
│                                                             │
│ PHASE 3: VERIFICATION (Both)                                │
│ ├── Run measurements                                        │
│ ├── Compare before/after                                    │
│ └── If broken → back to Phase 1 or Phase 2                  │
└─────────────────────────────────────────────────────────────┘
```

**The gate question:** Is exploration complete enough to hand off to automation?

- If no → Stay in Phase 1 (manual exploration with Claude).
- If yes → Pass through gate, run Ralph loop.

---

## PRE-RALPH CHECKLIST

Before running any Ralph loop, confirm ALL of these:

### Gate 1: Exploration Complete?

From Exploration-First Dev Guide:

| Question | ✓/✗ |
|----------|-----|
| Can you state the problem in one sentence? | |
| Have you decomposed into sub-problems? | |
| Is the pattern/approach identified? | |
| Can you describe the solution in general terms? | |

If any are ✗ → **STOP. Complete exploration first.**

### Gate 2: R/P Split Clean?

From LLM Capabilities Dev Guide:

| Question | ✓/✗ |
|----------|-----|
| Is Claude only doing reasoning tasks in the prompt? | |
| Are precision tasks (counting, extraction, JSON) handled by code? | |
| Are LLM outputs parsed/validated by code? | |
| Are any extractions verified against source? | |

If any are ✗ → **STOP. Move precision tasks to code first.**

### Gate 3: Backpressure Exists?

From Iterative Fix Protocol:

| Question | ✓/✗ |
|----------|-----|
| Do tests exist that verify output? | |
| Can success be verified programmatically? | |
| Is there a validation script or command? | |
| Does the validation return exit code 0 on success? | |

If any are ✗ → **STOP. Build validation first.**

### Gate 4: Completion Promise Definable?

| Question | ✓/✗ |
|----------|-----|
| Can you define "done" in code terms? | |
| Is there a single command that produces final output? | |
| Can output be verified without human inspection? | |

If any are ✗ → **STOP. Define binary success criteria first.**

---

## RABBIT HOLE DETECTION

Ralph will happily burn through iterations without converging. Watch for these signs:

### In the Loop

| Signal | Problem | Action |
|--------|---------|--------|
| Same error 3+ times | Not learning from failures | Kill loop, diagnose manually |
| No file changes for 3+ iterations | Spinning without progress | Kill loop, check prompt |
| Output declining (shorter responses) | Context exhaustion | Kill loop, simplify task |
| "I'll try a different approach" repeated | No convergence | Kill loop, reframe problem |
| Introducing new bugs while fixing old | Scope too large | Kill loop, split into sub-tasks |

### Before the Loop

| Signal | Problem | Action |
|--------|---------|--------|
| Requirements include "looks right" | Can't automate verification | Don't start loop |
| Prompt asks for "exact quotes" | Precision task in LLM | Don't start loop |
| Success criteria are vague | Can't define completion | Don't start loop |
| Task requires architectural judgment | Exploration not complete | Don't start loop |

### ABORT TRIGGERS

Kill a Ralph loop immediately if:

1. **Circuit breaker opens** — 3+ loops with no file changes
2. **Same error repeated** — 5+ loops with identical error message
3. **Cost threshold hit** — Iterations × context size > budget
4. **Human judgment needed** — Loop asks "should I...?" or "which approach...?"
5. **Scope creep detected** — Task expands beyond original prompt

**After aborting:**

1. Read the last few iteration outputs
2. Identify where it got stuck
3. Apply R/P recursive diagnostic (from Iterative Fix Protocol)
4. Either fix the blocker manually or reframe the task
5. Restart with tighter scope

---

## OFFICIAL PLUGIN SETUP

The simplest path is the official Anthropic plugin:

```bash
# One-time setup: Add Anthropic's plugin marketplace
/plugin marketplace add anthropics/claude-plugins-official

# Install Ralph Wiggum plugin
/plugin install ralph-wiggum
```

### Running a Loop

```bash
/ralph-loop "<prompt>" --max-iterations N --completion-promise "SIGNAL"
```

**Required flags:**

- `--max-iterations` — Always set this. It's your cost control and abort trigger.
- `--completion-promise` — The exact string Claude must output to signal completion.

**Example:**

```bash
/ralph-loop "Fix all ESLint errors in src/.
Run: npm run lint
If errors, fix them.
Output <promise>LINT_CLEAN</promise> when npm run lint exits 0."
--max-iterations 15
--completion-promise "LINT_CLEAN"
```

### Canceling a Loop

```bash
/cancel-ralph
```

---

## PROMPT STRUCTURE FOR CONVERGENCE

Ralph prompts need to be structured for iteration, not conversation.

### Template

```
[ONE SENTENCE: What is the task?]

CONSTRAINTS:
- [Specific constraint 1]
- [Specific constraint 2]

VALIDATION:
Run: [exact command]
Success: [exact condition]

PROCESS:
1. Run validation
2. If validation fails, read error, fix code
3. Repeat until validation passes
4. Output <promise>SIGNAL</promise> when [condition] is met

DO NOT:
- [Common mistake to avoid]
- [Another common mistake]
```

### Good vs Bad Prompts

| Bad (Won't Converge) | Good (Will Converge) |
|---------------------|---------------------|
| "Make the code cleaner" | "Fix all type errors. Run: tsc --noEmit" |
| "Improve test coverage" | "Add tests until coverage > 80%. Run: npm run coverage" |
| "Extract the key quotes" | "Run pytest tests/test_quotes.py until all pass" |
| "Make it work" | "Run ./validate.sh until exit code 0" |

---

## INTEGRATION WITH STAGE 1

This assessment is Stage 2. It requires Stage 1 (Building Prototypes) to be complete.

### From DEV_GUIDE_Building_Prototypes_v2_0

**Exploration stages must be complete:**
- Problem Definition (can state in one sentence)
- Decomposition (sub-problems identified)
- Pattern Recognition (approach tested on real case)
- Abstraction (can describe generally + R/P classified)

**R/P split must be done:**
- Reasoning tasks → Claude prompts
- Precision tasks → Code
- No mixed tasks

**Iterative fix loop applies inside Ralph:**
- Each iteration: measure (run validation) → diagnose (read errors) → fix (change code) → verify (next iteration)

**Structure-first applies to prompts:**
- Define validation command BEFORE task
- Define success criteria BEFORE process
- Don't let Ralph invent success criteria

---

## COMMON PATTERNS

### Pattern: Test-Driven Loop

```bash
/ralph-loop "Implement [FEATURE].

VALIDATION:
Run: pytest tests/test_feature.py -v
Success: All tests pass (exit code 0)

PROCESS:
1. Run tests
2. If tests fail, read error, fix code
3. Repeat until all tests pass

Output <promise>TESTS_PASS</promise> when pytest exits 0."
--max-iterations 30
--completion-promise "TESTS_PASS"
```

### Pattern: Build/Lint Loop

```bash
/ralph-loop "Fix all build and lint errors.

VALIDATION:
Run: npm run build && npm run lint
Success: Both commands exit 0

PROCESS:
1. Run build
2. If build fails, fix errors
3. Run lint
4. If lint fails, fix errors
5. Repeat until both pass

Output <promise>BUILD_CLEAN</promise> when both pass."
--max-iterations 20
--completion-promise "BUILD_CLEAN"
```

### Pattern: Migration Loop

```bash
/ralph-loop "Migrate all [X] to [Y].

VALIDATION:
Run: ./scripts/check_migration.sh
Success: No remaining [X] patterns found

PROCESS:
1. Run check script
2. If patterns found, migrate them
3. Repeat until none remain

DO NOT:
- Change functionality, only syntax
- Touch files outside src/

Output <promise>MIGRATION_DONE</promise> when check passes."
--max-iterations 40
--completion-promise "MIGRATION_DONE"
```

---

## ANTI-PATTERNS

### What Ralph Cannot Do

| Task | Why It Fails | Alternative |
|------|--------------|-------------|
| Exploration | Can't define "done" | Manual exploration first |
| Architectural decisions | No binary verification | Human decides, Ralph implements |
| Security-critical code | Needs human review | Human-in-the-loop |
| "Make it better" tasks | No convergence criteria | Define specific metrics |
| Quote extraction | Precision task | Code extracts, Ralph reasons about them |
| Judgment-heavy work | No programmatic verify | Pre-complete judgment manually |

### Warning Signs in Prompts

| If your prompt says... | Problem |
|------------------------|---------|
| "Extract the exact quote" | Precision task assigned to LLM |
| "Make sure it looks right" | Can't automate verification |
| "Use your judgment" | Exploration not complete |
| "Figure out the best approach" | Pattern not identified |
| "Count how many..." | Precision task assigned to LLM |

---

## QUICK REFERENCE

```
BEFORE RALPH:
□ Exploration complete (can state problem + pattern)
□ R/P split clean (Claude reasons, code verifies)
□ Backpressure exists (validation script works)
□ Completion promise defined (binary, verifiable)

RUNNING RALPH:
/ralph-loop "<prompt>" --max-iterations N --completion-promise "SIGNAL"

ABORT IF:
- Same error 3+ times
- No file changes 3+ iterations
- Human judgment requested
- Scope expanding

AFTER ABORT:
1. Read last outputs
2. Apply R/P diagnostic
3. Fix blocker or reframe
4. Restart with tighter scope
```

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2025 | Initial assessment framework |
| 2.0 | Jan 15, 2026 | Four gates, repo scan protocol |
| 3.0 | Jan 16, 2026 | Handoff gate focus, abort criteria, dev guide integration |
| 3.1 | Jan 16, 2026 | Updated to reference consolidated DEV_GUIDE_Building_Prototypes_v2_0 |

---

**END OF ASSESSMENT**
