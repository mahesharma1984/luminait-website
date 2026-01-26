# LuminAIT Brand Style Guide

**Version:** 2.0  
**Date:** January 25, 2026
**Theme:** Natural / Paper / Academic

---

## 1. Brand Philosophy

**"The Natural Path to Brilliance"**

LuminAIT has shifted from a "Tech/AI" aesthetic to a "Human/Academic" aesthetic. We want to feel like a high-end university press or a well-designed textbook, not a SaaS dashboard.

**Key Attributes:**
- **Warm & Organic:** Use off-whites and paper textures, not stark white or dark mode.
- **Academic Authority:** Serif headings (Fraunces) convey literary depth.
- **Human Connection:** Focus on student work, teacher faces, and testimonials. 
- **Tech-Enabled, Not Tech-Forward:** AI is the engine, not the showroom.

---

## 2. Color Palette

### Primary Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Warm Paper** | `#FDFCF8` | `--bg-paper` | Primary background. Warm off-white. |
| **Paper Dark** | `#F3F4F6` | `--bg-paper-dark` | Secondary background, sections. |
| **Charcoal** | `#334155` | `--text-main` | Primary body text. Softer than black. |
| **Ink Black** | `#111827` | `--text-dark` | Headings. Strong contrast. |
| **Royal Blue** | `#2563EB` | `--primary` | Primary accent, Buttons, Links. |
| **Amber** | `#D97706` | `--warm` | Trust signals, badges, warmth. |

### Color Relationships

```
BACKGROUNDS:
Primary: Warm Paper (#FDFCF8) - Creates the "book page" feel.
Secondary: Paper Dark (#F3F4F6) - Used for distinct sections.
Surface: White (#FFFFFF) - Used for cards to create lift.

TEXT:
Headings: Ink Black (#111827) - Sharp, legible, authoritative.
Body: Charcoal (#334155) - Legible but not harsh.
Meta/Labels: Slate 500 (#64748B) - Subtle supporting text.

ACCENTS:
Action: Royal Blue (#2563EB) - Clickable elements.
Highlight: Amber (#D97706) - "Recommended", "Popular", or academic highlights.
```

---

## 3. Typography

### Font Stack

| Role | Font | Fallback | Rationale |
|------|------|----------|-----------|
| **Display** | **Fraunces** | Georgia, serif | Variable serif. Classic, literary, academic. |
| **Body** | **DM Sans** | sans-serif | Clean, modern, high readability for UI. |
| **Quote** | **Georgia** | serif | Used for student essay samples to look like typewritten text. |

### Type Scale

| Element | Size | Weight | Font | Usage |
|---------|------|--------|------|-------|
| H1 | 2.5rem+ | 600 | Fraunces | Page titles. |
| H2 | 2rem | 600 | Fraunces | Section headers. |
| H3 | 1.5rem | 600 | Fraunces | Card titles. |
| Body | 1rem | 400 | DM Sans | Standard reading text. |
| Label | 0.85rem | 500 | DM Sans | Badges, meta info. |

---

## 4. UI Components

### Cards ("The Clean Card")
Instead of glassmorphism, we use clean, white cards that sit on the warm background.

```css
background: white;
border: 1px solid rgba(0,0,0,0.03);
border-radius: 12px;
box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* Soft, natural shadow */
```

### Buttons
Rounded, friendly, clickable.

*   **Primary:** Royal Blue background, White text.
*   **Secondary:** White background, Dark text, Border.

### Trust Signals (The "Human" Touch)
To counter the "AI" stigma, we explicitly visualize human elements:
*   **Teacher Profiles:** Circular avatars, real names.
*   **Testimonials:** Quote design with "serif" quotation marks.
*   **Sample Output:** Visual snippets of student writing (serif font, blue vertical bar).

---

## 5. Layout & Spacing

*   **Grid:** 8px baseline. 
*   **Breathing Room:** generous whitespace (64px+) between sections.
*   **Container:** Max-width 1200px for main content, 800px for reading text.

---

## 6. Do's and Don'ts

*   **DO** use "Warm Paper" (#FDFCF8) as the default background.
*   **DO** use Fraunces for all major headings.
*   **DO** show real content (essay snippets) over abstract icons.
*   **DON'T** use dark mode or neon gradients (deprecated v1.0).
*   **DON'T** use "tech" jargon. Speak like a supportive teacher.

---

**END OF STYLE GUIDE v2.0**
