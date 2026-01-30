# Add Video Demonstration Section to Homepage

## Context

**Problem:** Our homepage currently relies on text-based proof points (text grid, sample output, results cards). While this serves the text-match stage (Stage 1) effectively, it doesn't demonstrate methodology visibility (Stage 2) early enough.

**Strategic rationale:**
- Video converts credence moments into experience attributes ([01_CREDENCE_PROBLEM.md:86-94](../docs/theory/01_CREDENCE_PROBLEM.md))
- "A 30-second analysis video demonstrates text knowledge, analytical depth, and teaching method without requiring trust or effort from the parent"
- Video spikes motivation instantly through passive consumption ([03_VALIDATION_LOOP.md:110-124](../docs/theory/03_VALIDATION_LOOP.md))

**Design inspiration:** [sudowrite.com](https://sudowrite.com) — clean, spacious layout with feature demonstrations via short videos/GIFs

**Related docs:**
- [02_CUSTOMER_JOURNEY.md §4](../docs/theory/02_CUSTOMER_JOURNEY.md) — Funnel 3: Video-to-Parent
- [01_CREDENCE_PROBLEM.md §4](../docs/theory/01_CREDENCE_PROBLEM.md) — Proof Point Hierarchy

---

## Requirements

### 1. Video Demonstration Section

**Location:** Between text selection grid and results preview section (after current line 169, before line 171 in `index.html`)

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  Section Heading: "See how we teach close reading"      │
│  Subheading: "Watch text-specific analysis in action"   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [Video 1]          [Video 2]          [Video 3]        │
│  Annotation         Worksheet          Analysis         │
│  in Action          Example            Output           │
│                                                         │
│  5-10 sec loop      5-10 sec loop      5-10 sec loop    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Grid specifications:**
- 3-column grid on desktop (min-width: 900px)
- 1-column stack on mobile
- Gap between items: 40-60px (Sudowrite uses 80px)
- Each card max-width: 320px
- Centered container with max-width: 1100px

**Video specifications:**
- **Duration:** 5-10 seconds each (looping)
- **Format:** MP4, autoplay, muted, loop
- **Aspect ratio:** 16:9 or 4:3 (to be determined by available scenes)
- **Source:** Clips extracted from existing video scenes in `/studio/scenes/`
- **Fallback:** Poster image if video doesn't load

**Card structure:**
```html
<div class="video-demo-card">
  <video autoplay muted loop playsinline>
    <source src="/studio/assets/clips/[clip-name].mp4" type="video/mp4">
  </video>
  <h4>Annotation in Action</h4>
  <p>See how we break down specific quotes using TVODE analysis</p>
</div>
```

---

### 2. Content Requirements

**Three video types to demonstrate:**

1. **Annotation in Action**
   - Shows text with highlights and labels appearing
   - Demonstrates TVODE structure visually
   - Example source: The Outsiders first-person narration scene

2. **Worksheet Example**
   - Shows a student worksheet with questions/prompts
   - Could show a fill-in-the-blank or quote analysis grid
   - Example source: Any scene with visible worksheet structure

3. **Analysis Output**
   - Shows a completed analysis or essay excerpt
   - Demonstrates the end product students create
   - Could be animated text appearing with highlights

**Video extraction task:**
- Review existing scenes in `/studio/scenes/` or hand-built scenes
- Identify 3 moments that demonstrate each type
- Extract 5-10 second clips showing:
  - Annotation appearing on text (with labels)
  - A worksheet structure being filled
  - Analysis output being composed
- Save clips to `/studio/assets/clips/`

---

### 3. Design System Alignment

**Follow existing design tokens:**
- Section background: `var(--section-paper)` or `var(--section-soft)`
- Heading color: `var(--text-dark)`
- Card background: `var(--bg-paper)` or white with shadow
- Border radius: `8px` (consistent with text-card)
- Shadow: `var(--shadow-md)` for cards

**Typography:**
- Section heading: `<h2>` with existing h2 styles
- Card title: `font-size: 1.1rem`, `font-weight: 600`
- Card description: `font-size: 0.95rem`, `color: var(--text-light)`

**Spacing (Sudowrite-inspired cleanup):**
- Section padding: `80px 0` (increase from current 60px)
- Card internal padding: `20px`
- Gap between cards: `48px` (desktop), `32px` (mobile)

---

### 4. Implementation Steps

#### Step 1: Extract Video Clips
- [ ] Review `/studio/scenes/*.html` for clip candidates
- [ ] Identify 3 clips (annotation, worksheet, analysis)
- [ ] Extract 5-10 second segments
- [ ] Optimize for web (compress, reasonable file size)
- [ ] Save to `/studio/assets/clips/`

#### Step 2: Update Template
- [ ] Edit `/src/templates/index.html` (NOT root `index.html`)
- [ ] Add new section after text-selection-grid
- [ ] Insert 3-column video grid with cards
- [ ] Add responsive breakpoints for mobile

#### Step 3: Add Styles
- [ ] Create `.video-demo-section` styles
- [ ] Create `.video-demo-grid` (3-column flex/grid)
- [ ] Create `.video-demo-card` with hover states
- [ ] Style `<video>` elements (border-radius, shadow)
- [ ] Add mobile responsive styles (@media max-width: 900px)

#### Step 4: Rebuild and Test
- [ ] Run `node build.js` to regenerate `index.html`
- [ ] Test autoplay/loop on Chrome, Safari, Firefox
- [ ] Test mobile layout (videos should stack)
- [ ] Check performance (file sizes, loading speed)
- [ ] Verify accessibility (add aria-labels to videos)

---

### 5. Acceptance Criteria

**Visual:**
- ✅ 3 videos displayed in clean grid layout
- ✅ Generous spacing matches Sudowrite aesthetic (not cramped)
- ✅ Videos autoplay and loop smoothly
- ✅ Cards have subtle hover effect (optional: slight scale or shadow increase)
- ✅ Mobile layout stacks cards vertically

**Technical:**
- ✅ Videos are muted and autoplay (required for browser autoplay policies)
- ✅ `playsinline` attribute present (prevents fullscreen on iOS)
- ✅ Fallback poster images in case video fails
- ✅ File sizes optimized (<2MB per clip)
- ✅ Template source updated (not just root file)

**Strategic:**
- ✅ Demonstrates methodology without giving away the product
- ✅ Shows text-specificity (not generic tutoring visuals)
- ✅ Appears AFTER text-match grid (preserves Stage 1 fast path)
- ✅ Section heading emphasizes "close reading" and "text-specific"

---

## Technical Notes

**Video autoplay requirements:**
```html
<video
  autoplay
  muted
  loop
  playsinline
  poster="/studio/assets/clips/[clip-name]-poster.jpg"
>
  <source src="/studio/assets/clips/[clip-name].mp4" type="video/mp4">
  Your browser does not support video.
</video>
```

**CSS Grid approach (recommended):**
```css
.video-demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .video-demo-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

**File naming convention:**
```
/studio/assets/clips/
├── annotation-demo.mp4
├── annotation-demo-poster.jpg
├── worksheet-demo.mp4
├── worksheet-demo-poster.jpg
├── analysis-output-demo.mp4
└── analysis-output-demo-poster.jpg
```

---

## Future Extensions (Not in Scope)

- Text-specific video swapping (show clips from the book they selected)
- Click-to-expand modal for longer video
- Video caption/subtitle overlay
- Analytics tracking (video play rate, completion rate)
- A/B testing different clip types

---

## References

- Design inspiration: https://sudowrite.com (feature grid with media)
- Strategic context: `/docs/theory/01_CREDENCE_PROBLEM.md` (§4: Proof Point Hierarchy)
- Customer journey: `/docs/theory/02_CUSTOMER_JOURNEY.md` (§4: Funnel 3)
- Validation loop: `/docs/theory/03_VALIDATION_LOOP.md` (§4.4: Video as Productive Reassurance)
