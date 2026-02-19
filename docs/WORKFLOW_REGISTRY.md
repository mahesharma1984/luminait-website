# Workflow Registry

**Purpose:** Named, repeatable procedures for common operations.

---

## Section 1: Atomic Workflows

Atomic workflows are single operations. They can be composed into larger procedures.

### WF-BUILD-MAIN: Build main site pages

**When:** After editing `src/templates/*.html`, `src/partials/*`, or `site-config.json`
**Command:**
```bash
node build.js
```
**Output:** Generated root HTML files (`index.html`, `course.html`, `progress.html`, etc.)
**Verify:** Open generated HTML in browser, check content matches template changes

### WF-BUILD-HOMEPAGE-GUIDES: Build homepage book pages

**When:** After editing `data/parent-guides/*.json` (for `/books/` pages)
**Command:**
```bash
node build-homepage-guides.js
```
**Output:** Generated pages in `/books/*/index.html`
**Verify:** Open a book page (e.g., `/books/the-giver/`), check content

### WF-BUILD-CURRICULUM: Build curriculum guide pages

**When:** After editing `data/parent-guides/*.json` (for `/generated/curriculum/` pages)
**Command:**
```bash
node build-parent-guides.js
```
**Output:** Generated pages in `/generated/curriculum/`
**Verify:** Open a curriculum guide page, check content and index links

### WF-BUILD-SCENES: Build video scene pages

**When:** After editing `data/video-scenes/*.json` or `src/templates/_video-scene-template.html`
**Command:**
```bash
node build-video-scenes.js
```
**Output:** Generated pages in `/generated/studio/`
**Verify:** Open a studio scene page, check content

### WF-BUILD-SCHOOLS: Build school pages

**When:** After editing `data/schools/*.json`, `src/templates/_school-page-template.html`, or `src/templates/schools-index.html`
**Command:**
```bash
node build-school-pages.js
```
**Output:** Generated pages in `/generated/schools/`
**Verify:** Open schools index and individual school pages, check content and links

### WF-BUILD-ANNOTATIONS: Build annotation guide pages

**When:** After editing `data/annotation-guides/*.json` or `src/templates/_annotation-guide-template.html`
**Command:**
```bash
node build-annotation-guides.js
```
**Output:** Generated pages in `/generated/annotations/`
**Verify:** Open annotation index and individual guide pages, check content

### WF-BUILD-ALL: Full site rebuild

**When:** After multi-area changes, uncertainty about which scripts to run, or pre-deploy
**Command:**
```bash
npm run build:all
```
**Output:** All generated content refreshed
**Verify:** Spot-check one page from each type (main, book, curriculum, scene, school, annotation)

### WF-RAG-REBUILD: Rebuild RAG documentation search index

**When:** After adding new docs, major edits to existing docs, or updating `docs/CORE_DOCS_INDEX.md`
**Command:**
```bash
python -m rag.indexer --force
```
**Output:** `outputs/rag/index.jsonl`, `outputs/rag/embeddings.npy` (not committed)
**Verify:** `python -m rag.query "credence problem"` returns `docs/theory/01_CREDENCE_PROBLEM.md` as top result

---

## Section 2: Composed Workflows

Composed workflows combine atomic workflows into multi-step procedures.

### CW-TEMPLATE-CHANGE: Propagate a template change

**When:** A shared template file in `src/templates/` was modified
**Steps:**
1. Identify which build scripts consume the changed template
   - `_parent-guide-template.html` -> `WF-BUILD-HOMEPAGE-GUIDES` + `WF-BUILD-CURRICULUM`
   - `_video-scene-template.html` -> `WF-BUILD-SCENES`
   - `_school-page-template.html` or `schools-index.html` -> `WF-BUILD-SCHOOLS`
   - `_annotation-guide-template.html` -> `WF-BUILD-ANNOTATIONS`
   - Other templates -> `WF-BUILD-MAIN`
2. Run all matching build scripts
3. Verify output across all affected page types
4. `git diff` to confirm only expected files changed

### CW-PARENT-GUIDE-UPDATE: Update parent guide content

**When:** Editing content in `data/parent-guides/*.json`
**Steps:**
1. Edit JSON data file(s)
2. `WF-BUILD-HOMEPAGE-GUIDES` -- rebuild `/books/` pages
3. `WF-BUILD-CURRICULUM` -- rebuild `/generated/curriculum/` pages
4. Verify both outputs show the updated content
5. Commit

### CW-NEW-BOOK: Add a new book to the site

**When:** Adding a completely new text/book
**Steps:**
1. Create new JSON file in `data/parent-guides/`
2. `WF-BUILD-HOMEPAGE-GUIDES` -- generates new `/books/<slug>/` page
3. `WF-BUILD-CURRICULUM` -- generates new curriculum guide page + updates index
4. Update `site-config.json` if the book needs main nav or page references
5. `WF-BUILD-MAIN` -- rebuild main pages to pick up config changes
6. Verify: new book page exists, appears in indexes, all links work
7. Commit

### CW-SAFE-DEPLOY: Pre-deploy verification

**When:** Before pushing changes to deploy
**Steps:**
1. `WF-BUILD-ALL` -- full rebuild
2. Open homepage + 2 random generated pages
3. Check no broken links (browser console, visual scan)
4. `git diff` -- verify only expected files changed
5. Commit and push

---

## Section 3: Cross-Cutting Patterns

Patterns that apply across multiple workflows.

### Pattern 1: Source-of-Truth

After any change:
1. Edit sources (templates, data JSON, config) -- never generated files
2. Run the correct build script
3. Verify generated output
4. Commit both source and generated files together

### Pattern 2: Dual-Build Awareness

Parent guide content lives in two places:
- `/books/` (homepage book pages) -- built by `build-homepage-guides.js`
- `/generated/curriculum/` (curriculum guides) -- built by `build-parent-guides.js`

Template changes to `_parent-guide-template.html` require **both** scripts.
Data changes to `data/parent-guides/*.json` may require one or both depending on scope.

### Pattern 3: Fix Upstream, Not Downstream

When generated output is wrong:
1. Trace to the source that produces it (template? data? config?)
2. Fix the source, not the generated file
3. Rebuild to verify the fix propagated
