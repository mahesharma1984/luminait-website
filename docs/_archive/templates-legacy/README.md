# Legacy Templates Archive

**Archived on:** February 2, 2026
**Reason:** Replaced by JSON-based build system

## What Happened

These templates were part of the old build approach where each curriculum guide and analysis page was a separate HTML template. They have been superseded by:

1. **Parent curriculum guides**: Now generated from `/data/parent-guides/*.json` via `build-parent-guides.js`
2. **Analysis guides**: Now generated from `/templates/*.html` via `generate_site.py`

## Archived Files

### Curriculum Templates (v2)
- `curriculum_a-christmas-carol_v2.html`
- `curriculum_a-monster-calls_v2.html`
- `curriculum_blueback_v2.html`
- `curriculum_frankenstein_v2.html`
- `curriculum_matilda_v2.html`
- `curriculum_number-the-stars_v2.html`
- `curriculum_station-eleven_v2.html`
- `curriculum_the-giver_v2.html`
- `curriculum_the-outsiders_v2.html`
- `curriculum_to-kill-a-mockingbird_v2.html`

**Replacement:** `src/templates/_parent-guide-template.html` + JSON data files

### Analysis Guide Templates
- `guide.html` - Generic guide template
- `romeo-and-juliet.html` - Specific text guide

**Replacement:** `/templates/*.html` processed by `generate_site.py`

## Active Templates (as of Feb 2026)

### Main Pages (used by `build.js`)
- `index.html` - Homepage
- `method.html` - Method page
- `course.html` - Course details
- `syllabus.html` - Curriculum overview
- `sample.html` - Sample worksheet
- `progress.html` - Progress reports
- `results.html` - Results page

### Template Systems
- `_parent-guide-template.html` - Parent curriculum guide template
- `curriculum-index.html` - Curriculum index page
- `_video-scene-template.html` - Video scene template
- `_school-page-template.html` - School page template
- `schools-index.html` - Schools index page

## Migration Status

All curriculum guides that were migrated from these legacy templates are now data-driven. If you need to create a new guide:

1. Add JSON file to `/data/parent-guides/[slug].json`
2. Run `node build-parent-guides.js`
3. Output appears at `/curriculum/[slug]/index.html`

See `CLAUDE.md` for the current build pipeline documentation.
