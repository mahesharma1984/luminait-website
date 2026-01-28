# Alignment Spec: Teacher Guides → Video Scenes → Curriculum

This document describes how the three layers of content connect. Every artifact in the video production pipeline must trace back through this chain. If a video scene contains a device, quote, or theme that does not appear in the teacher guide for that arc position, the scene is misaligned. If a teacher guide maps a device that does not connect to a curriculum week objective, the guide has a gap.

---

## A. The Kernel → Teacher Guide Chain

### What the Kernel produces

The Kernel Method is a systematic text analysis that maps every chapter of a novel, categorises literary devices by type and frequency, and connects each device to the author's intent. The output is a structured dataset: which devices appear where, attached to which quotes, serving which themes.

This is the source material for everything. Teacher guides, video scenes, and curriculum outlines all derive from the kernel. Nothing is invented. Nothing is imposed from a marketing framework. The content comes from what the text actually does.

### How a teacher guide organises the kernel

A teacher guide takes the kernel output and organises it through one analytical lens (Relational or Social) around one pattern.

**Structure:**
1. **Pattern** — A named dynamic that operates across the whole novel. Not a theme, not a device. A pattern is the mechanism by which devices produce meaning. Examples:
   - "Retrospective Processing" (Relational lens): the temporal gap between experiencing and narrating creates dual consciousness
   - "Insider Testimony" (Social lens): a narrator from within a marginalised group provides authentic witness to class-based prejudice

2. **Narrative arc** — The novel is divided into five positions: Exposition, Rising Action, Climax, Falling Action, Resolution.

3. **Theme/Device/Quote grid** — At each arc position, the guide maps:
   - Which themes are active (and which are most prominent)
   - Which devices appear
   - A specific quote demonstrating each device
   - An explanation of what the device does at this moment

### The two lenses

Each text gets two teacher guides, one per lens:

| Lens | Foregrounds | Pattern type | Example themes |
|------|------------|--------------|----------------|
| Relational | Psychology, family, trauma, identity development | How the narrator processes experience over time | Brotherhood Bonds, Temporal Understanding, Therapeutic Integration |
| Social | Class, power, societal structures, systemic inequality | How the narrator witnesses and challenges social assumptions | Class-Based Violence, Authentic Working-Class Identity, Systemic Class Barriers |

The two lenses analyse the same text, often the same quotes, but through different frameworks. A quote about Ponyboy's gang can be read relationally (brotherhood as survival mechanism) or socially (gang as class-determined identity). Both readings are valid. The lens determines which one the guide foregrounds.

### The critical rule

Every device-quote pairing in the teacher guide must explain WHY this device matters at this narrative moment. Not just that it appears. Not just that it "executes the pattern."

**Wrong:** "This internal monologue executes the pattern by showing Ponyboy's raw, fragmented thoughts during trauma."

This tells us the device exists and vaguely gestures at what it does, but it does not explain why internal monologue specifically (rather than dialogue, or narration, or action) is the right device for this moment.

**Right:** "Ponyboy's thoughts fragment here — 'The fuzz, I thought dully' — because the fire has overwhelmed his ability to process events in sequence. Internal monologue is the only device that can show this. Dialogue would require him to be coherent enough to speak. Narration would impose the older narrator's retrospective clarity. Internal monologue captures the raw, disorganised state of a mind under trauma, which is exactly what Hinton needs at the climax."

The right version explains:
- What the text literally says ("The fuzz, I thought dully")
- What is happening psychologically (processing has broken down)
- Why this device specifically (not dialogue, not narration — because they would require coherence he does not have)
- Why it matters at this arc position (the climax is when the pressure is greatest)

---

## B. Teacher Guide → Video Scene Chain

### One scene, one device, one arc position

A video scene takes a single device from a single arc position in the teacher guide and turns it into a visual demonstration. The scene does not try to cover the whole guide or the whole arc. It shows one thing working on one quote.

The scene's pedagogical logic must match the teacher guide's explanation for that device at that arc position. If the teacher guide says the internal monologue at the climax shows trauma-induced fragmentation, the video scene must demonstrate fragmentation — not dissociation, not numbness, not some other related concept that sounds similar but is not what the guide says.

### Pattern reinforcement

When multiple scenes cover different arc positions, they should demonstrate the SAME underlying pattern through DIFFERENT devices, with escalating intensity.

The current Week 3 set for The Outsiders (Relational lens) does this:

| Scene | Arc Position | Device | What it shows about the pattern |
|-------|-------------|--------|-------------------------------|
| 1 | Exposition | First-Person Narration | The pattern's foundation: two temporal layers exist in the narration (the boy experiencing, the man remembering) |
| 2 | Rising Action | Flashback | The pattern under pressure: trauma intrudes on the narration, breaking the narrator's control over which memories surface |
| 3 | Climax | Internal Monologue | The pattern at breaking point: the narrator's processing capacity collapses, reducing complex experience to single flat words ("dully") |

Each scene builds on the previous one. Scene 1 establishes dual consciousness. Scene 2 shows what disrupts it. Scene 3 shows what happens when the disruption overwhelms the narrator entirely.

This is pattern reinforcement. Not repetition (saying the same thing three times), but escalation (showing the same mechanism at increasing intensity).

### What a video scene must contain

For each scene, verify these elements trace back to the teacher guide:

1. **Device** — Must appear in the teacher guide's device/quote table for this arc position
2. **Quote** — Must be the same quote (or a subset of it) from the teacher guide entry
3. **Explanation** — Must be consistent with the teacher guide's explanation for why this device matters here
4. **Labels/annotations** — Must name the device accurately and explain it in terms that match the guide
5. **Pedagogical arc** — Must follow: Hook → Context → Deconstruction → Label (not: Hook → Drama → Reveal → Sales pitch)

---

## C. Video Scene → Curriculum Alignment

### The curriculum defines weekly objectives

The parent curriculum (source: `/data/parent-guides/[text].json`) defines a 10-week structure. Each week has a phase, a title, and a list of topics. Video scenes must connect to a specific week's objectives.

For The Outsiders, Week 3 ("Analysing Key Techniques") covers:
- Technique 1: First-Person Narration (Ponyboy's voice)
- Technique 2: Symbolism (sunsets, gold, hair)
- Technique 3: Characterisation (humanising both sides)
- Collecting textual evidence for each technique

### Mapping scenes to curriculum

Each video scene device must connect to one of the week's techniques. The connection does not need to be a direct name match — flashback is not listed as a Week 3 technique — but the scene must demonstrate something that serves a listed technique's learning outcome.

| Scene | Device | Week 3 Technique | Connection |
|-------|--------|-------------------|------------|
| First-Person Narration (Exposition) | First-Person Narration | Technique 1: First-Person Narration | Direct match. The scene demonstrates how Ponyboy's first-person voice operates on two temporal levels. |
| Flashback (Rising Action) | Flashback | Technique 1 (extended) | Flashback is a function of first-person narration in this novel. Ponyboy can only flash back because he is narrating retrospectively. The scene extends understanding of how first-person narration handles time. |
| Internal Monologue (Climax) | Internal Monologue | Technique 1 (extended) | Internal monologue is the interior layer of first-person narration. The scene shows what happens to Ponyboy's voice under extreme pressure, deepening the student's understanding of how narration reveals psychology. |

The key insight: all three Week 3 scenes are extensions of Technique 1 (First-Person Narration). Flashback and internal monologue are not separate techniques here. They are aspects of how first-person narration works in this novel. The scenes demonstrate this by showing the same narrator's voice in different states across the arc.

---

## D. Alignment Checklist

Before finalising any teacher guide entry, video scene, or script, verify:

### For teacher guide entries
- [ ] The device appears in the kernel analysis for this chapter/arc position
- [ ] The quote is transcribed accurately from the novel
- [ ] The explanation says WHY this device matters here, not just THAT it appears
- [ ] The explanation names what the device reveals that no other device could reveal at this moment
- [ ] The theme connection is specific (which theme, how it advances)
- [ ] The language follows the Style Guide (no "executes the pattern", no antithesis, no vague abstraction)

### For video scenes
- [ ] The device matches a teacher guide entry for this arc position
- [ ] The quote matches the teacher guide's quote for this device
- [ ] The scene's teaching concept is consistent with the teacher guide's explanation
- [ ] Labels and annotations name the device accurately
- [ ] The scene connects to a specific curriculum week technique
- [ ] If part of a multi-scene set, the scene builds on previous scenes (escalation, not repetition)
- [ ] The CTA is factual, not pushy (see Style Guide §4)

### For video scripts
- [ ] The voiceover explains the device, not performs it
- [ ] The hook states what the scene will demonstrate, not a dramatic aphorism
- [ ] Specific words from the quote are named and explained
- [ ] The conclusion references the curriculum week and technique by name
- [ ] The CTA states what exists (the course, the week) without creating urgency or guilt

---

## E. Worked Example

### Chain: "thought dully" → Internal Monologue → Climax → Week 3

**Step 1: Kernel observation**

The kernel analysis of The Outsiders maps Chapter 6 (the church fire). It identifies internal monologue as a device, with this quote:

> "I tried to think but there was a high-pitched screaming going on, and I couldn't tell whether it was inside my head or out. Then I realized it was a siren. 'The fuzz,' I thought dully."

The kernel notes: the phrase "thought dully" contrasts with the surrounding chaos. The narrator's internal processing has gone flat while the external world is at maximum intensity.

**Step 2: Teacher guide entry (Relational lens, Climax)**

The teacher guide places this at the Climax arc position under the Retrospective Processing pattern. The entry should read something like:

| Device | Quote | Why it matters here |
|--------|-------|-------------------|
| Internal Monologue | "I tried to think but there was a high-pitched screaming going on... 'The fuzz,' I thought dully." | Ponyboy's thoughts fragment at the climax. He cannot distinguish the siren from his own panic ('couldn't tell whether it was inside my head or out'). The word 'dully' marks the point where his mind stops trying to process the crisis and goes flat. Internal monologue is the only device that can show this state — dialogue would require coherence, narration would impose retrospective clarity. The retrospective processing pattern is at breaking point: the gap between experiencing and narrating has collapsed because the experience has overwhelmed the narrator's capacity to make sense of it. |

**Step 3: Video scene spec**

The scene takes this single entry and visualises it:

- **Phase 1 (Hook):** State the teaching concept plainly. "This passage shows what happens to Ponyboy's narration when the events become too much to process."
- **Phase 2 (Text):** Display the full quote on screen.
- **Phase 3 (Deconstruction):**
  - Highlight "high-pitched screaming" — label: "External chaos. The world outside."
  - Highlight "thought dully" — label: "Internal shutdown. The mind going flat."
  - Voiceover explains the contrast: the screaming is loud, but Ponyboy's response is quiet. The word "dully" is the evidence.
- **Phase 4 (Conclusion):** "This is internal monologue — the narrator's unfiltered thought. Week 3 of the curriculum covers how first-person narration reveals psychology. The course page has details."

**Step 4: Curriculum alignment**

The scene connects to Week 3, Technique 1 (First-Person Narration). Internal monologue is the interior layer of first-person narration. The scene deepens understanding of how Ponyboy's voice changes under pressure, which is a direct extension of the Week 3 objective: "Identifying and analysing first-person narration."

In the three-scene set, this is the third and most intense scene, showing the pattern (retrospective processing / dual consciousness) at its breaking point.
