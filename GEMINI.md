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

**What they are:** Visual demonstrations of a single technique from Week 3 of the curriculum.

**Where they live:**
- Hand-built scenes: `studio/` (e.g., `outsiders-scene-week3-first-person.html`)
- Templated scenes: `studio/scenes/` (generated from `data/video-scenes/*.json`)
- Scripts: `studio/scripts/`

**Production requirement:**
- **3 videos per text**, one for each of the 3 techniques listed in Week 3 of that text's curriculum guide (`data/parent-guides/[text].json`)
- Example (The Outsiders): Technique 1 = First-Person Narration, Technique 2 = Symbolism, Technique 3 = Characterization
- Example (To Kill a Mockingbird): Technique 1 = Symbolism, Technique 2 = First-Person Retrospective Narration, Technique 3 = Social Commentary

**What they contain:**
- A pedagogical structure: **Setup → Demonstration → Reinforcement**
- Highlights and labels on specific words in the quote
- Voiceover script synchronised to visual actions
- Duration: 60-90 seconds total

**Required pedagogical structure:**

1. **Setup (15-20 seconds):**
   - Step 1: Name the text, author, and technique being demonstrated
   - Step 2: Explain what the technique is in simple terms
   - Step 3: State what this scene will show (preview the learning)

2. **Demonstration (35-50 seconds):**
   - Step 4: Provide context for the passage (where in the novel, what's happening)
   - Step 5: Transition to the text layer
   - Step 6-10: **Read the quote aloud**, then analyze it piece by piece
     - CRITICAL: You must narrate the actual quote, not just reference it
     - Read dialogue if present
     - Read the narrator's observations
     - Highlight specific phrases as you analyze them
     - Use labels to identify what each phrase reveals

3. **Reinforcement (10-15 seconds):**
   - Step 11-12: Name the technique again, summarize what it reveals
   - Step 13: Connect to curriculum week with factual CTA (no pressure, no urgency)

**What you need to get right:**
- **Quote narration is mandatory.** The viewer must hear the actual text read aloud, not just see it on screen.
- **Pedagogical setup is mandatory.** Tell them what they'll learn before showing them. This serves both teaching and sales purposes.
- **Clean sentence construction.** No paired simple sentences for dramatic effect ("X is this. Y is that."). Use complete thoughts or complex sentences.
- The device, quote, and explanation must match the teacher guide entry for that arc position (if teacher guide exists). See Alignment Spec §B.
- Each scene must connect to one of the 3 techniques listed in Week 3 of the curriculum guide for that text.
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

6. **No paired simple sentences for dramatic effect.** This is a common AI writing trick. Use complete thoughts or complex sentences instead.
   - Bad: "Courage isn't just standing up. Sometimes it's turning away."
   - Bad: "He doesn't triumph. He turns away."
   - Bad: "He looks physically ill. The truth hurts him."
   - Good: "His body betrays the emotional cost of questioning a vulnerable witness, even when pursuing justice."
   - Good: "He turns away, which breaks his usual courtesy and signals internal conflict."

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

### When asked to produce Week 3 videos for a text:

1. **Check the curriculum guide:** Open `data/parent-guides/[text-slug].json`
2. **Find Week 3:** Look for the week object where `"week": 3`
3. **Extract the 3 techniques:** Week 3's `topics` array will list 3 techniques (Technique 1, Technique 2, Technique 3)
4. **Produce 3 videos:** One video per technique, following the pedagogical structure specified in Stage 2 above
5. **Verify alignment:** Each video must demonstrate the specific technique listed in the curriculum

**Example - The Outsiders:**
```json
"week": 3,
"topics": [
  "Technique 1: First-Person Narration (Ponyboy's voice)",
  "Technique 2: Symbolism (sunsets, gold, hair)",
  "Technique 3: Characterization (humanizing both sides)",
  ...
]
```
→ Produce 3 videos: one on First-Person Narration, one on Symbolism, one on Characterization

### When asked to create a teacher guide:

1. Identify the text, the lens (Relational or Social), and the pattern
2. Read the relevant kernel analysis or the novel
3. Map devices to quotes across the five arc positions (Exposition, Rising Action, Climax, Falling Action, Resolution)
4. For each device-quote pairing, write an explanation that says WHY this device matters here. Name what it reveals that no other device could reveal at this moment.
5. Run the alignment checklist (Alignment Spec §D)
6. Check tone: no "executes the pattern", no antithesis, no vague abstraction

### When asked to create a video scene spec or script:

1. **Setup (Steps 1-3):**
   - Step 1: Name the text, author, and technique (e.g., "In To Kill a Mockingbird, Harper Lee uses Indirect Characterization to reveal what characters won't say directly.")
   - Step 2: Explain what the technique is in simple terms
   - Step 3: Preview what this scene will show

2. **Demonstration (Steps 4-10):**
   - Step 4: Provide context (where in the novel, what's happening)
   - Step 5: Transition to text layer
   - Steps 6-10: **Read the quote aloud first**, then analyze it
     - Read dialogue if present
     - Read the narrator's observations
     - Highlight specific phrases as you analyze
     - Use labels to show what each phrase reveals
     - CRITICAL: Never skip reading the actual quote. The viewer must hear it, not just see it.

3. **Reinforcement (Steps 11-13):**
   - Step 11-12: Name the technique again, summarize what it reveals
   - Step 13: Connect to curriculum week with factual CTA (no pressure)

4. **Verify:**
   - Run the alignment checklist (Alignment Spec §D)
   - Check that sentences follow prohibition #6 (no paired simple sentences)
   - If the scene is based on a teacher guide entry, verify the device and quote match

### When asked to create a full video package:

1. Identify the curriculum week and its listed techniques
2. Identify which teacher guide entries cover those techniques
3. Order the scenes by arc position (Exposition → Rising Action → Climax)
4. Write narration segments connecting each scene to the next, showing how the pattern escalates
5. The opening should state what the video covers (the week, the text, the techniques)
6. The closing should reference the course page without pressure
