# CI Rules: Safety Guardrails

**Purpose:** Safety guardrails for code changes, especially AI-assisted ones.

---

## Hard Rules (Never Violate)

1. **Never commit secrets** -- No API keys, passwords, tokens, or credentials in code
2. **Never force-push to main** -- Protect shared history
3. **Never edit generated HTML files** -- `index.html`, `course.html`, files in `/books/`, `/generated/` are build outputs. Edit source templates/data instead.
4. **Never delete data without backup** -- Always verify backup exists first
5. **Always rebuild after source edits** -- Run the matching build script immediately (see `WORKFLOW_REGISTRY.md`)
6. **Parent guide template changes require both build scripts** -- `node build-homepage-guides.js` AND `node build-parent-guides.js`

---

## Change Safety Rules

### Before Committing

- [ ] Correct build script was run after source edits
- [ ] No secrets in diff (`git diff --staged | grep -i "key\|secret\|password\|token"`)
- [ ] Changes are scoped to the intended files only
- [ ] Generated output matches source changes (no stale content)
- [ ] No generated files were edited directly

### Before Pushing

- [ ] Commit messages are clear and descriptive
- [ ] No unintended files included
- [ ] `npm run build:all` produces clean output
- [ ] Spot-checked at least one generated page in browser

### Before Merging

- [ ] PR reviewed (or self-reviewed for solo projects)
- [ ] No regressions in generated output
- [ ] All page types still render correctly

---

## AI-Assisted Development Rules

When using Claude Code or similar AI tools:

1. **Review all generated code** -- AI output is hypothesis until verified
2. **Don't blindly accept refactors** -- AI may "improve" working code unnecessarily
3. **Check file operations** -- Verify AI isn't modifying generated files directly
4. **Verify deletions** -- Confirm removed code is truly unused
5. **Test after AI changes** -- Rebuild and verify, even if "the change is simple"
6. **Before editing any HTML file, verify it's a source file** -- Check if it's in `src/templates/` or `src/partials/`. If it's in the root, `/books/`, or `/generated/`, it's a build output.
7. **After any build, diff the generated output** -- `git diff` to verify only expected changes occurred
