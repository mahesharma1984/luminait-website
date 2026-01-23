# Guide Template Specification

**Version:** 1.0  
**Date:** January 18, 2026

This document specifies how to create "Dread Engine"-style analysis guides from LEM kernel documents (Stages 1-6).

---

## 1. SOURCE DOCUMENT MAPPING

Each section of the guide template pulls from specific kernel stages:

| Guide Section | Source Document(s) | Key Fields |
|---------------|-------------------|------------|
| **Hero / Hook** | Stage 4, Stage 6 | `pattern_name`, `reader_effect`, `core_dynamic` |
| **The Reveal** | Stage 4 | `pattern_name`, `core_dynamic`, 3-point breakdown |
| **Anchor Quote** | Stage 5 | Highest-impact quote from `device_priorities[0]` |
| **Knowledge Gap** | Stage 3, Stage 4 | `dramatic_irony_level`, `reader_effect` |
| **Conflict Matrix** | Stage 3, Stage 6 | Theme tensions from `thematic_explicitness` |
| **Devices (Top 5)** | Stage 5 | First 5 from `device_priorities` with evidence |
| **Dread Tracker** | Stage 1, Stage 5 | `chapter_alignment` + device evidence per section |
| **Essay Toolkit** | Stage 4, Stage 6 | Pattern applications, thesis examples |
| **Modern Mirror** | Manual | Contemporary examples using same pattern |
| **FAQ** | All stages | Common questions + pattern-based answers |
| **Bibliography** | Stage 2 | Edition info, line references |

---

## 2. PATTERN FAMILIES & HOOKS

Different patterns require different hooks:

| Pattern Type | Hook Style | Example Text |
|--------------|------------|--------------|
| **Prophetic Witnessing** | "The Dread Engine" | Romeo & Juliet |
| **Unreliable Perception** | "The Trust Trap" | The Great Gatsby, Gone Girl |
| **Moral Descent** | "The Corruption Engine" | Macbeth, Breaking Bad |
| **Social Exposure** | "The Mask Removal" | Pride and Prejudice, Emma |
| **Coming of Age** | "The Innocence Engine" | To Kill a Mockingbird |
| **Dystopian Warning** | "The Control Engine" | 1984, The Giver |

---

## 3. JSON DATA STRUCTURE

```json
{
  "meta": {
    "text_title": "Romeo and Juliet",
    "author": "William Shakespeare",
    "edition": "New Oxford Shakespeare (Hannah August, ed. 2024)",
    "genre": "tragedy",
    "structure_type": "5ACT",
    "era": "400-year"
  },
  
  "hook": {
    "title": "The Dread Engine",
    "subtitle": "Why Shakespeare Spoils the Ending",
    "tagline": "The Prologue is a spoiler...",
    "insight": "Most stories ask: 'What will happen?' This one asks: 'How will I watch it happen?'"
  },
  
  "pattern": {
    "name": "Prophetic Witnessing",
    "core_dynamic": "Audience receives foreknowledge, watches characters pursue hope toward doom",
    "reader_effect": "Dread rather than suspense",
    "three_points": [
      { "number": 1, "title": "The Prophecy", "text": "..." },
      { "number": 2, "title": "The Gap", "text": "..." },
      { "number": 3, "title": "The Dread", "text": "..." }
    ]
  },
  
  "anchor_quote": {
    "text": "My grave is like to be my wedding bed.",
    "speaker": "Juliet",
    "location": "Act 1 Scene 5",
    "surface_meaning": "What character means",
    "ironic_meaning": "What audience understands",
    "pattern_connection": "How it demonstrates the pattern"
  },
  
  "tension": {
    "title": "Fate vs. Free Will",
    "side_a": { "name": "Fate", "icon": "⚡", "evidence": ["..."] },
    "side_b": { "name": "Free Will", "icon": "🎭", "evidence": ["..."] },
    "insight": "Essay advice for handling this tension"
  },
  
  "devices": [
    {
      "name": "Device Name",
      "tagline": "3-4 word function",
      "icon": "📜",
      "quote": "...",
      "location": "...",
      "impact": "...",
      "link_section": "reveal|gap|tension|trace|toolkit"
    }
  ],
  
  "timeline": {
    "title": "Dread Tracker: Prologue to Tomb",
    "acts": [
      { "number": "I", "title": "The Prophecy", "event": "...", "quote": "...", "dread_level": 1 }
    ]
  },
  
  "toolkit": [
    { "icon": "💡", "title": "The Killer Thesis", "text": "..." }
  ],
  
  "modern_mirror": [
    { "year": "1997", "title": "Titanic", "text": "..." }
  ],
  
  "faq": [
    { "question": "...", "answer": "..." }
  ],
  
  "bibliography": {
    "primary_text": "...",
    "line_references": [{ "quote": "...", "ref": "1.5.132" }],
    "framework": "..."
  }
}
```

---

## 4. KERNEL → JSON EXTRACTION

### From Stage 1 (Structure)
- `meta.structure_type` ← structure_detection
- `timeline.acts[]` ← chapter_alignment (exposition→resolution)

### From Stage 2 (Extraction)  
- `bibliography` ← header metadata
- Device quotes with line numbers

### From Stage 3 (Voice Tagging)
- `tension.title` ← thematic codes
- `pattern.code` ← voice variable concatenation

### From Stage 4 (Pattern Synthesis)
- `pattern.name` ← alignment_pattern.pattern_name
- `pattern.core_dynamic` ← alignment_pattern.core_dynamic
- `pattern.reader_effect` ← alignment_pattern.reader_effect
- `devices` order ← device_priorities

### From Stage 5 (Device Evidence)
- `devices[].quote` ← device evidence tables
- `anchor_quote` ← highest-priority device with best quote

### From Stage 6 (Reasoning)
- `pattern.three_points` ← alignment effect breakdown
- `toolkit` tips ← pattern applications

---

## 5. TEMPLATE SECTIONS

### Hero (The Hook)
- Bold claim, not academic definition
- Pattern → engaging title
- Under 50 words

### The Reveal (Pattern Grid)
- Always 3 points
- Digestible breakdown of complex pattern

### Anchor Quote
- Visual centerpiece
- Shows surface vs. ironic meaning
- Demonstrates pattern in action

### Knowledge Gap (Interactive)
- Slider from Act I → V
- Shows dread/understanding progression

### Conflict Matrix
- Binary tension (always two sides)
- Evidence for both
- Insight: how to handle in essays

### Devices (Top 5)
- Impact tools, not definitions
- Each links to another section
- Quote + Impact format

### Dread Tracker (Timeline)
- Visual gradient (hope → doom)
- Dread dots per act
- Key quote per section

### Essay Toolkit
- 6 practical tips maximum
- "Don't X, Do Y" format
- Code blocks for example phrasing

### Modern Mirror
- 4 contemporary examples
- Shows pattern still works
- Personal connection hook

### FAQ
- 4 questions for SEO
- Matches "People Also Ask"
- Include schema markup

### Bibliography
- Primary text citation
- Line references
- Framework description

---

## 6. CHECKLIST FOR NEW GUIDES

- [ ] Stage 1-6 documents complete
- [ ] Pattern named with engaging hook
- [ ] Anchor quote selected (layered meaning)
- [ ] Top 5 devices chosen
- [ ] Modern examples identified (4)
- [ ] FAQ questions drafted
- [ ] All quotes have line references

---

**END OF SPECIFICATION**
