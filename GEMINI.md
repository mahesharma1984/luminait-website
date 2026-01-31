# Instructions for Gemini

**Before doing any work, read `/docs/` first.**

Key documents:

**Theory** (read in order):
- `docs/theory/01_CREDENCE_PROBLEM.md` - Why education is hard to sell
- `docs/theory/02_CUSTOMER_JOURNEY.md` - Parent + student funnel design
- `docs/theory/03_VALIDATION_LOOP.md` - Handling friction/hesitation
- `docs/theory/04_CONTENT_DERIVATION.md` - Deriving messaging from text analysis

**Technical:**
- `docs/technical/SITE_ARCHITECTURE.md` - URL structure for all three funnels
- `docs/technical/DESIGN_SYSTEM.md` - CSS variables, components, visual standards
- `docs/technical/VEO_PROMPTS.md` - AI video generation prompts

**Pedagogy:**
- `docs/FRAMEWORK_Scientific_Relational_Pedagogy_v1_0.md` - Pedagogy IP

**Video Production:**
- `studio/STYLE_GUIDE.md` - Tone and writing rules (READ THIS FIRST for video work)
- `studio/ALIGNMENT_SPEC.md` - How teacher guides, video scenes, and curriculum connect

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

/curriculum/                # Generated parent-facing curriculum pages
/docs/                      # Framework and methodology (READ FIRST)
```

## Workflow

1. **Video scenes**: Edit `/data/video-scenes/*.json`, run `node build-video-scenes.js`
2. **Parent guides**: Edit `/data/parent-guides/*.json`, run `node build-parent-guides.js`

**Write in Australian English.** Analyse, recognise, colour, characterisation.
