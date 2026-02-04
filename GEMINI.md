# Instructions for Gemini

Before doing any work, read `/docs/` first.

## Reading Order

### Core Theory
1. `docs/theory/01_CREDENCE_PROBLEM.md`
2. `docs/theory/02_CUSTOMER_JOURNEY.md`
3. `docs/theory/03_VALIDATION_LOOP.md`
4. `docs/theory/04_CONTENT_DERIVATION.md`
5. `docs/theory/05_CHANNEL_ALIGNMENT.md`

### Technical
1. `docs/technical/BUILD_SYSTEM.md`
2. `docs/technical/SITE_ARCHITECTURE.md`
3. `docs/technical/VEO_PROMPTS.md`

### Video Production
1. `studio/STYLE_GUIDE.md` (read first for scripts/copy)
2. `studio/ALIGNMENT_SPEC.md`

### Pedagogy
1. `docs/FRAMEWORK_Scientific_Relational_Pedagogy_v1_0.md`

## Project Structure

```
/studio/                    # Video production workspace
├── /teacher-guides/        # Teacher curriculum guides (HTML)
├── /scenes/                # Generated video scene pages (DO NOT edit)
├── /scripts/               # Video specs and voiceover scripts
├── /assets/                # Images for video scenes
├── ALIGNMENT_SPEC.md       # How guides, scenes, and curriculum connect
├── STYLE_GUIDE.md          # Tone and writing rules
└── styles.css              # Shared studio styles

/data/
├── /video-scenes/          # JSON source data for templated scenes
├── /parent-guides/         # JSON source data for curriculum pages
├── /annotation-guides/     # JSON source data for annotation guides
├── /schools/               # JSON source data for school pages

/curriculum/                # Generated parent-facing curriculum pages
/annotations/               # Generated annotation preview pages
/docs/                      # Framework and methodology (READ FIRST)
```

## Workflow

1. **Video scenes**: Edit `/data/video-scenes/*.json`, run `node build-video-scenes.js`
2. **Parent guides (homepage books)**: Edit `/data/parent-guides/*.json`, run `node build-homepage-guides.js`
3. **Parent guides (curriculum directory)**: Edit `/data/parent-guides/*.json`, run `node build-parent-guides.js`
4. **Annotation guides**: Edit `/data/annotation-guides/*.json`, run `node build-annotation-guides.js`

## Channel Guardrails

1. Keep jobs separate:
   - Pattern interpretation assets = credence proof.
   - Annotation assets = method/action.
2. One short-form video should do one job, not both.
3. Parent bridge must stay explicit:
   - Annotation assets should link to parent outline/course path.

## Source-of-Truth Rules

1. Do not edit generated files in `/studio/scenes/`, `/curriculum/`, or `/annotations/`.
2. Edit data/template sources and rebuild.
3. Verify generated output after each build.

**Write in Australian English.** Analyse, recognise, colour, characterisation.
