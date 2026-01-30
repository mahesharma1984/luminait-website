# AI Video Prompts (Veo / Runway / Sora)

**The Problem**: AI Video models cannot render legible, specific text ("I had two things on my mind..."). It comes out as gibberish.
**The Solution (Hybrid)**: Use AI to generate **Motion Backgrounds** (Atmosphere). Use the Studio to overlay **Crisp Text**.

---

## Phase 0: The Hook (Cinematic Intro)
**Goal**: A high-end product shot of the book.
**Prompt**:
> Cinematic close-up pan of a vintage 1960s book "The Outsiders" lying on rough concrete. Dramatic lighting, rainy street reflection. 4k, shallow depth of field, slow motion.

## Phase 1: Context (Field Building)
**Goal**: Atmosphere of 1960s Tulsa / Greaser Culture (No dialogue).
**Prompt A (The Gang)**:
> 1960s film grain style. A group of cool teenage greasers in leather jackets leaning on a 1965 Mustang at night. Smoking, looking tough. High contrast black and white photography. Slow motion.
**Prompt B (The Icon)**:
> Paul Newman style movie star from 1967. Close up portrait. Looking cool and detached. Blue eyes piercing. Film grain.

## Phase 2: The Text (Paper Texture)
**Goal**: A subtle, moving background for the text overlay (so it's not dead static).
**Prompt**:
> Macro shot of old paper texture. Subtle dust particles floating in a shaft of light. Very slow camera drift. Warm vintage tone. High detail.

## Phase 4: The Outro (Service Background)
**Goal**: Professional abstract background for the "Enquire Now" card.
**Prompt**:
> Abstract deep blue and gold geometric shapes moving slowly. Corporate premium feel. Soft lighting, glassmorphism style. 4k loop.

---

## The Workflow
1.  **Generate**: Paste these prompts into Veo/Runway.
2.  **Download**: Save the `.mp4` files.
3.  **Import**: Drop them into `studio/assets/`.
4.  **Result**: The code plays the video background, and draws the *perfect* text highlights on top.
