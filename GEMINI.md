# Instructions for Gemini

LuminAIT is a text-specific English tutoring service. It teaches students to analyse prescribed literary texts (The Outsiders, To Kill a Mockingbird, The Giver, etc.) through systematic close reading. The business model relies on text-specificity as a verifiable entry point — parents can confirm "you teach this book" before needing to trust the pedagogy.

---

## Project Structure

```
/studio/                    # Video production workspace
├── /teacher-guides/        # Teacher curriculum guides (HTML)
├── /scenes/                # Generated video scene pages (DO NOT edit)
├── /scripts/               # Video specs and voiceover scripts
├── /assets/                # Images for video scenes
├── ALIGNMENT_SPEC.md       # How guides, scenes, and curriculum connect
├── STYLE_GUIDE.md          # Tone and writing rules (READ THIS)
├── styles.css              # Shared studio styles
└── README.md               # Production interface docs

/data/
├── /video-scenes/          # JSON source data for templated scenes
├── /parent-guides/         # JSON source data for curriculum pages

/curriculum/                # Generated parent-facing curriculum pages

/docs/                      # Framework and methodology
├── /theory/
│   ├── 01_CREDENCE_PROBLEM.md    # Why education is hard to sell
│   ├── 02_CUSTOMER_JOURNEY.md    # Parent + student funnel design
│   ├── 03_VALIDATION_LOOP.md     # Handling friction at price point
│   └── 04_CONTENT_DERIVATION.md  # Deriving messaging from text analysis
├── FRAMEWORK_Scientific_Relational_Pedagogy_v1_0.md  # Pedagogy IP
└── /technical/
    └── VEO_PROMPTS.md            # AI video generation prompts

/src/templates/             # Templates for build.js (site pages)
build.js                    # Generates main site pages
build-video-scenes.js       # Generates video scene HTML from JSON
build-parent-guides.js      # Generates curriculum pages from JSON
```

---

## Required Reading

Before producing any content, read these in order:

1. **`studio/STYLE_GUIDE.md`** — Tone and writing rules. Five specific prohibitions with before/after examples. Read this first. Every artifact you produce must follow it.

2. **`studio/ALIGNMENT_SPEC.md`** — How teacher guides, video scenes, and curriculum connect. Contains the alignment checklist you must verify against before finalising anything.

3. **`docs/theory/04_CONTENT_DERIVATION.md`** — The principle that all content derives from the text kernel, not from imposed frameworks.

4. **`docs/theory/01_CREDENCE_PROBLEM.md`** — Why text-specificity matters. Education is a credence good. Text-specific proof sidesteps the credibility trap.

5. **`docs/FRAMEWORK_Scientific_Relational_Pedagogy_v1_0.md`** — The pedagogical framework: scientific (systematic text analysis) + relational (context-aware, confidence-building).

---

## The Three-Stage Pipeline

### Stage 1: Teacher Guides

**What they are:** HTML documents that map a single analytical pattern across a novel's narrative arc (Exposition → Rising Action → Climax → Falling Action → Resolution).

**Where they live:** `studio/teacher-guides/`

**What they contain:**
- A named pattern (e.g., "Retrospective Processing")
- One of two lenses: Relational (psychology, family, trauma) or Social (class, power, systemic inequality)
- A theme/device/quote grid at each arc position
- An explanation of why each device matters at that specific moment

**What you need to get right:**
- The device-quote-explanation chain must be grounded in the text. Name the quote. Name the specific words. Explain why this device (and not another) reveals what the author needed to reveal at this point.
- Do not use the phrase "executes the pattern." See Style Guide §3.
- Do not write vague abstractions. See Style Guide §5.

### Stage 2: Video Scenes

**What they are:** Visual demonstrations of a single device from a single arc position.

**Where they live:**
- Hand-built scenes: `studio/` (e.g., `outsiders-scene-week3-first-person.html`)
- Templated scenes: `studio/scenes/` (generated from `data/video-scenes/*.json`)
- Scripts: `studio/scripts/`

**What they contain:**
- A 4-phase structure: Hook → Context/Text → Deconstruction → Conclusion
- Highlights and labels on specific words in the quote
- Voiceover script synchronised to visual actions

**What you need to get right:**
- The device, quote, and explanation must match the teacher guide entry for that arc position. See Alignment Spec §B.
- Multiple scenes across an arc must show pattern reinforcement: the same pattern through different devices, with escalating intensity. Not repetition. See Alignment Spec §B.
- Each scene must connect to a specific curriculum week technique. See Alignment Spec §C.
- The hook should state what the scene demonstrates. Not a dramatic aphorism. See Style Guide §1 and §2.
- The CTA should state what exists (the course, the week). Not pressure the viewer. See Style Guide §4.

### Stage 3: Full Package (not yet built)

**What it will be:** Multiple scenes combined with narration and piece-to-camera segments into a cohesive video for one curriculum week.

**What you need to get right:**
- The sequence should follow the narrative arc order (Exposition → Rising Action → Climax)
- Narration segments between scenes should connect the devices to the pattern, showing how each scene builds on the last
- The package should be structured around a single curriculum week's objectives

---

## Tone Rules (Summary)

Full rules with before/after examples are in `studio/STYLE_GUIDE.md`. The short version:

1. **No antithesis as rhetorical trick.** Do not construct paired oppositions for dramatic effect.
   - Bad: "A memory is something you invite in. A flashback is something that kicks down the door."

2. **No dramatic punctuation.** No rhetorical questions, no fragments for drama, no capitalised words for emphasis.
   - Bad: "Panic is loud. But Trauma? Trauma is silent."

3. **No robotic pattern language.** Never write "executes the pattern." Say what the author did and why.
   - Bad: "This foreshadowing executes the pattern by building suspense..."

4. **No pushy sales language.** No guilt, no urgency, no imperative CTAs.
   - Bad: "Don't let them miss the deeper meaning. Enquire now."

5. **No vague abstraction.** Name the quote, the word, the technique. If you cannot be specific, the sentence is too vague.
   - Bad: "The narrator's insider status allows readers to experience conflict through lived experience."

**Write in Australian English.** Analyse, recognise, colour, characterisation.

**Sentence construction:** Simple or complex sentences. No theatrical fragments. One idea per sentence. Ground every claim in specific textual evidence.

---

## Key Concepts

These terms have specific meanings in this project. Use them precisely.

**Kernel** — The output of systematic text analysis: devices mapped across chapters, categorised by type and frequency, connected to authorial intent. The kernel is the source of truth for all content. Nothing is invented or imposed.

**Pattern** — The mechanism by which devices produce meaning across a novel. Not a theme (brotherhood, class). Not a device (symbolism, narration). A pattern is how devices work together to create a specific effect. Example: "Retrospective Processing" — the temporal gap between experiencing and narrating creates dual consciousness.

**Lens** — The analytical framework applied to a text. Relational (psychology, family, identity) or Social (class, power, systemic structures). Same text, same quotes, different readings. The lens determines which dimension the guide foregrounds.

**Pattern reinforcement** — Multiple scenes that demonstrate the same underlying pattern through different devices, with escalating intensity. Scene 1 establishes the pattern. Scene 2 shows it under pressure. Scene 3 shows it at breaking point.

**Credence good** — A product whose quality cannot be evaluated before or after purchase. Education is one. The project sidesteps this by attaching a verifiable "search attribute" (text-specificity) to the credence product.

**Search attribute** — Something the parent can verify before purchase without needing expertise. "Do you teach The Outsiders?" is binary and verifiable. "Are you a good teacher?" is not.

---

## Workflow

### When asked to create a teacher guide:

1. Identify the text, the lens (Relational or Social), and the pattern
2. Read the relevant kernel analysis or the novel
3. Map devices to quotes across the five arc positions (Exposition, Rising Action, Climax, Falling Action, Resolution)
4. For each device-quote pairing, write an explanation that says WHY this device matters here. Name what it reveals that no other device could reveal at this moment.
5. Run the alignment checklist (Alignment Spec §D)
6. Check tone: no "executes the pattern", no antithesis, no vague abstraction

### When asked to create a video scene spec or script:

1. Identify which teacher guide entry this scene is based on (which device, which arc position)
2. Use the same quote from the teacher guide
3. Write the hook as a clear statement of what the scene demonstrates
4. Write the deconstruction by naming specific words from the quote and explaining what they reveal
5. Write the conclusion by referencing the curriculum week and technique
6. Write the CTA as a factual statement
7. Run the alignment checklist (Alignment Spec §D)
8. If part of a multi-scene set, verify pattern reinforcement: does this scene build on the previous one?

### When asked to create a full video package:

1. Identify the curriculum week and its listed techniques
2. Identify which teacher guide entries cover those techniques
3. Order the scenes by arc position (Exposition → Rising Action → Climax)
4. Write narration segments connecting each scene to the next, showing how the pattern escalates
5. The opening should state what the video covers (the week, the text, the techniques)
6. The closing should reference the course page without pressure
