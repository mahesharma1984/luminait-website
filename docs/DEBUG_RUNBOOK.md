# Debug Runbook

**Purpose:** Triage > Diagnosis > Action mapping for common build and content failures.

---

## Triage Order

1. **Identify the symptom** -- What's actually wrong? (Use symptom table below)
2. **Trace to component** -- Which build stage/script produces the bad output?
3. **Diagnose root cause** -- Why is it producing bad output?
4. **Fix upstream** -- Fix the root cause, not the symptoms downstream

**Key principle:** Fix upstream, not downstream. If generated HTML is wrong because the template is wrong, fix the template -- don't edit the generated file.

---

## Symptom Table

| # | Symptom | Quick Check | Likely Cause | Fix |
|---|---|---|---|---|
| 1 | Generated HTML has stale content | `git diff index.html` after rebuild | Edited generated file directly instead of template | Revert generated file (`git checkout -- <file>`), edit `src/templates/`, run `node build.js` |
| 2 | Broken internal links after build | Open page in browser, check console for 404s | Template references a path that doesn't match generated output structure | Check `site-config.json` for path definitions, verify template link patterns |
| 3 | Parent guide changes not appearing on homepage | Compare `/books/` output to expected content | Only ran one of the two parent guide build scripts | Run both: `node build-homepage-guides.js` AND `node build-parent-guides.js` |
| 4 | Template change not reflected across all pages | Compare multiple generated pages for the same template | Ran wrong build script for the changed template | Check Build Command Matrix in `AGENTS.md` section 3, run correct script |
| 5 | Build script crashes on data file | Check error output for JSON parse errors | Malformed JSON in `data/` directory | Validate JSON: `node -e "JSON.parse(require('fs').readFileSync('data/...', 'utf8'))"` |
| 6 | Navigation shows wrong active state | Open multiple pages, check nav highlighting | `site-config.json` page entry mismatch or partial not updated | Check page keys in `site-config.json`, verify `src/partials/` nav, rebuild |
| 7 | School/annotation page missing from index | Open index page, look for missing entry | New data file not picked up by build script | Verify filename matches expected pattern in `data/`, run `node build-school-pages.js` or `node build-annotation-guides.js` |
| 8 | Presentation deck broken | Open presentation HTML in browser | Shared script in `presentations/core/` changed or path mismatch | Check `presentations/core/` scripts, verify relative paths in deck HTML |

---

## Diagnostic Procedures

### Procedure 1: Build Output Investigation

```
1. What page/section is wrong?
   > Identify the generated file (root HTML, /books/*, /generated/*)

2. What is the source for this output?
   > Trace: template (src/templates/) + data (data/) + config (site-config.json)

3. Is the source correct?
   > Read the template/data/config -- is the expected content there?

4. Was the correct build script run?
   > Check WORKFLOW_REGISTRY.md for the right script
   > Re-run: node build-<type>.js

5. Did you edit the generated file by mistake?
   > git diff <generated-file> -- if it shows manual edits, revert and rebuild
```

### Procedure 2: Dual-Build Issues (Parent Guides)

```
1. Which output is wrong: /books/ or /generated/curriculum/?
   > /books/ = build-homepage-guides.js
   > /generated/curriculum/ = build-parent-guides.js

2. Was the template changed?
   > If src/templates/_parent-guide-template.html changed, BOTH scripts must run

3. Was only data changed?
   > If data/parent-guides/*.json changed, run whichever script targets the output
   > For homepage book pages: node build-homepage-guides.js
   > For curriculum guide pages: node build-parent-guides.js
```

### Procedure 3: Regression Investigation

```
1. What was the last known good state?
   > git log --oneline -10
   > Check recent commits for template/data/config changes

2. What changed between good and bad?
   > git diff HEAD~5..HEAD -- src/templates/ data/ site-config.json

3. Is the regression in one page type or across all?
   > Spot-check: one book page, one school page, one annotation page

4. Can we roll back?
   > If recent: git revert [commit]
   > If not: fix forward using diagnosis above
```

---

## Escalation Rules

1. **Level 0 failure** (source files missing/corrupt) -- Stop everything, fix immediately
2. **Build script crash** -- Fix before proceeding to other builds
3. **Wrong output content** -- Diagnose source vs build issue, fix upstream
4. **Cosmetic/minor** -- Note it, fix in next session

---

## Recovery Templates

### Minimal Recovery: Rebuild single page type

```bash
# Main pages
node build.js

# Parent guides (homepage)
node build-homepage-guides.js

# Parent guides (curriculum)
node build-parent-guides.js

# Video scenes
node build-video-scenes.js

# School pages
node build-school-pages.js

# Annotation guides
node build-annotation-guides.js
```

### Full Recovery: Clean rebuild of everything

```bash
npm run build:all
```

### Rollback: Revert a directly-edited generated file

```bash
git checkout -- <generated-file>
# Then rebuild from source:
node build.js  # or whichever script generates that file
```
