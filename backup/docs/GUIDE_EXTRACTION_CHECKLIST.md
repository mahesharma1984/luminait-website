# Guide Extraction Checklist

Use this checklist when creating a new analysis guide from LEM kernel documents.

---

## Pre-Flight Check

Before starting extraction, ensure you have:

- [ ] Stage 1: `{text}_stage1_structure.md`
- [ ] Stage 2: `{text}_stage2_extraction.md`
- [ ] Stage 3: `{text}_stage3_voice_tagging.md`
- [ ] Stage 4: `{text}_stage4_pattern_synthesis.md`
- [ ] Stage 5: `{text}_stage5_device_evidence.md`
- [ ] Stage 6: `{text}_stage6_reasoning_document.md`

---

## Step-by-Step Extraction

### Step 1: Meta Information

**Source:** Stage 1 header + Stage 2 header

```json
"meta": {
  "text_title": "[from Stage 1: title]",
  "author": "[from Stage 1]",
  "edition": "[from Stage 2]",
  "genre": "[tragedy/comedy/novel]",
  "structure_type": "[5ACT/3ACT/NOVEL from Stage 1]"
}
```

---

### Step 2: Pattern → Hook

**Source:** Stage 4 `alignment_pattern`

| Stage 4 Field | → | JSON Field |
|---------------|---|------------|
| `pattern_name` | → | `pattern.name` |
| `core_dynamic` | → | `pattern.core_dynamic` |
| `reader_effect` | → | `hook.tagline` |

**Hook Generation:**
```
Pattern Name: "Prophetic Witnessing"
              ↓
Hook Title:   "The Dread Engine"
```

**Pattern → Hook Examples:**

| Pattern | Hook Title |
|---------|------------|
| Prophetic Witnessing | The Dread Engine |
| Unreliable Narration | The Trust Trap |
| Innocent Witness | The Innocence Lens |
| Moral Descent | The Corruption Engine |

---

### Step 3: Three-Point Breakdown

Break the pattern into exactly 3 digestible points:

1. **The Mechanism** — How it works
2. **The Gap/Tension** — What it creates
3. **The Effect** — What reader experiences

---

### Step 4: Anchor Quote Selection

**Source:** Stage 5 device evidence

**Selection Criteria:**
1. Quote demonstrates the core pattern
2. Character "speaks more truly than they know"
3. Has clear surface vs. ironic meaning
4. Memorable and quotable

**Template:**
```json
"anchor_quote": {
  "text": "[exact quote]",
  "speaker": "[character]",
  "location": "[Act X Scene Y]",
  "surface_meaning": "[what character means]",
  "ironic_meaning": "[what audience understands]",
  "pattern_connection": "[how it demonstrates pattern]"
}
```

---

### Step 5: Tension/Conflict Matrix

**Source:** Stage 3 voice tagging + Stage 6 themes

Find the Primary Binary tension. Common examples:

| Text Type | Typical Tension |
|-----------|-----------------|
| Tragedy | Fate vs. Free Will |
| Comedy | Appearance vs. Reality |
| Bildungsroman | Innocence vs. Experience |
| Dystopia | Individual vs. Society |

---

### Step 6: Top 5 Devices

**Source:** Stage 4 `device_priorities` + Stage 5 evidence

**Selection:**
1. Take first 5 from `device_priorities`
2. Find best evidence for each in Stage 5
3. Write impact connecting to pattern

**Per device:**
```json
{
  "name": "[Device name]",
  "tagline": "[3-4 word function]",
  "icon": "[emoji]",
  "quote": "[from Stage 5]",
  "location": "[speaker, line ref]",
  "impact": "[effect → pattern connection]",
  "link_section": "[reveal|gap|tension|trace]"
}
```

---

### Step 7: Timeline/Tracker

**Source:** Stage 1 `chapter_alignment`

**Mapping:**
```
exposition      → Act I    (level: 1)
rising_action   → Act II   (level: 2)
climax          → Act III  (level: 3)
falling_action  → Act IV   (level: 4)
resolution      → Act V    (level: 5)
```

For each: title, event summary, key quote, dread level.

---

### Step 8: Essay Toolkit

**Source:** Stage 4 + Stage 6 reasoning

Generate 6 tips:
1. Thesis tip
2. Connection tip
3. Progression tip
4. Tension tip
5. Quote tip
6. Naming tip

**Format:** "Don't X, Do Y"

---

### Step 9: Modern Mirror

**Manual research** — find 4 examples:
1. Classic film (pre-2000)
2. Recent film (last 5 years)
3. TV or other medium
4. Meta-example

---

### Step 10: FAQ

Create 4 questions:
1. "Main motif in [text]?"
2. "Why does [author] [technique]?"
3. "What is [device] in [text]?"
4. "[Theme A] or [Theme B]?"

---

### Step 11: Bibliography

**Source:** Stage 2 header

```json
"bibliography": {
  "primary_text": "[full citation]",
  "line_references": [
    { "quote": "[from Stage 5]", "ref": "[line]" }
  ],
  "framework": "[pattern name + structure type]"
}
```

---

## Quality Checklist

Before finalizing:

- [ ] Hook title is engaging, not academic
- [ ] Three-point breakdown is digestible
- [ ] Anchor quote shows surface vs. ironic meaning
- [ ] Tension has evidence for BOTH sides
- [ ] All 5 devices link to different sections
- [ ] Timeline shows progression (1→5)
- [ ] Toolkit tips are transformational
- [ ] Modern examples are widely known
- [ ] FAQ matches "People Also Ask" style
- [ ] All line references verified

---

## Output

Save to: `guides/{text-slug}/data.json`

Then generate HTML from template.

---

**END OF CHECKLIST**
