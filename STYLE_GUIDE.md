# LuminAIT Brand Style Guide

**Version:** 1.0
**Date:** January 17, 2026

---

## 1. Logo

### Logo Elements

The LuminAIT logo consists of:
- **Wordmark:** "LuminAIT" in two-tone gradient
- **Icon:** Three light rays emanating upward from the dot of the "i"
- **Color transition:** Cyan ("Lumin") → Blue ("AIT")

### Logo Concept

The name combines:
- **Lumin** — light, illumination, clarity
- **AIT** — shorthand suggesting "AI Teaching" or simply the brand suffix

The light rays above the "i" reinforce the illumination concept — understanding dawning, clarity emerging.

### Logo Usage

| Context | Version |
|---------|---------|
| Dark backgrounds | Primary (cyan-to-blue on navy) |
| Light backgrounds | Inverted (navy-to-dark blue on white) |
| Single color | Cyan only or navy only |
| Minimum size | 120px wide for digital |

### Clear Space

Maintain clear space around the logo equal to the height of the "i" dot on all sides.

---

## 2. Color Palette

### Primary Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Deep Navy** | `#0a1628` | `--deep-navy` | Primary background, headers |
| **Navy** | `#0d1b2a` | `--navy` | Secondary background, gradients |
| **Cyan** | `#00d4ff` | `--cyan` | Primary accent, "Lumin" text, highlights |
| **Blue** | `#3b82f6` | `--blue` | Secondary accent, "AIT" text, CTAs |

### Supporting Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Slate 100** | `#f1f5f9` | `--slate-100` | Light backgrounds |
| **Slate 300** | `#cbd5e1` | `--slate-300` | Body text on dark |
| **Slate 400** | `#94a3b8` | `--slate-400` | Secondary text on dark |
| **Slate 500** | `#64748b` | `--slate-500` | Labels, muted text |
| **Slate 600** | `#475569` | `--slate-600` | Body text (secondary) |
| **Slate 700** | `#334155` | `--slate-700` | Body text on light |
| **Slate 800** | `#1e293b` | `--slate-800` | Headings on light |
| **Emerald** | `#10b981` | `--emerald` | Success states, positive indicators |

### Color Relationships

```
DARK THEME (primary):
Background: Deep Navy (#0a1628)
Primary accent: Cyan (#00d4ff)
Secondary accent: Blue (#3b82f6)
Body text: Slate 300 (#cbd5e1)
Muted text: Slate 400 (#94a3b8)

LIGHT THEME (sections):
Background: Slate 100 (#f1f5f9) or White
Primary accent: Blue (#3b82f6)
Body text: Slate 700 (#334155)
Headings: Slate 800 (#1e293b)
```

### Gradients

| Name | CSS | Usage |
|------|-----|-------|
| **Hero gradient** | `linear-gradient(135deg, #0a1628 0%, #0d1b2a 50%, #0f2744 100%)` | Hero sections, dark headers |
| **Cyan glow** | `radial-gradient(ellipse, #00d4ff33 0%, transparent 70%)` | Subtle background accent |
| **Text gradient** | `linear-gradient(90deg, #00d4ff 0%, #3b82f6 100%)` | Special headings (sparingly) |

---

## 3. Typography

### Font Stack

| Role | Font | Fallback | Google Fonts |
|------|------|----------|--------------|
| **Display** | Fraunces | Georgia, serif | `family=Fraunces:ital,wght@0,600;0,700;1,400` |
| **Body** | DM Sans | -apple-system, BlinkMacSystemFont, sans-serif | `family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700` |
| **Chinese** | Noto Sans SC | sans-serif | `family=Noto+Sans+SC:wght@400;500;600;700` |

### Type Scale

| Element | Size | Weight | Line Height | Font |
|---------|------|--------|-------------|------|
| H1 (hero) | 2.5rem (40px) | 600 | 1.2 | Fraunces |
| H2 (section) | 1.75rem (28px) | 600 | 1.3 | Fraunces |
| H3 (card) | 1.25rem (20px) | 600 | 1.4 | Fraunces |
| Body | 1rem (16px) | 400 | 1.6 | DM Sans |
| Small | 0.875rem (14px) | 400 | 1.5 | DM Sans |
| Stat number | 3rem (48px) | 700 | 1.1 | DM Sans |

### Typography Rules

- **Headlines:** Fraunces for display, DM Sans for UI headings
- **Body:** DM Sans throughout
- **Letter spacing:** -0.02em for large display text, normal for body
- **Emphasis:** Use weight (600) rather than italics for emphasis
- **Links:** Cyan on dark, Blue on light, no underline until hover

---

## 4. Iconography

### Icon Style

| Attribute | Specification |
|-----------|---------------|
| Style | Outline or minimal filled |
| Stroke | 1.5-2px |
| Corners | Rounded (2-4px radius) |
| Size | 24px standard, 32px for feature cards |
| Color | Cyan on dark, Blue on light |

### Icon Sources

Recommended: Lucide, Heroicons, or Phosphor (outline variants)

### Custom Icon: Light Rays

The logo's light ray motif can be used as a standalone icon or decorative element:
- Three rays emanating upward at ~30° angles
- Central ray vertical
- Dot at base (optional)

---

## 5. Spacing

### Base Unit

8px grid system

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing, inline elements |
| sm | 8px | Related elements |
| md | 16px | Standard padding |
| lg | 24px | Section internal padding |
| xl | 32px | Card padding |
| 2xl | 48px | Section gaps |
| 3xl | 64px | Major section separation |
| 4xl | 80px | Hero padding |

### Section Rhythm

- Section vertical padding: 3-4rem (48-64px) minimum
- Between major sections: 0 (backgrounds create separation)
- Card gaps: 1.5rem (24px)

---

## 6. Components

### Buttons

**Primary (CTA):**
```css
background: var(--blue);           /* #3b82f6 */
color: white;
padding: 1rem 2.5rem;
border-radius: 50px;
font-weight: 600;
box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
```

**Primary hover:**
```css
background: #2563eb;
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
```

**Secondary:**
```css
background: transparent;
color: var(--cyan);                /* #00d4ff */
border: 1px solid var(--cyan);
padding: 0.75rem 1.5rem;
border-radius: 50px;
```

### Cards

**Card on light:**
```css
background: white;
border-radius: 12-20px;
padding: 2rem;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
```

**Card on dark:**
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
```

### Stats

```css
.stat-value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--cyan);              /* #00d4ff */
}
.stat-label {
  font-size: 1rem;
  color: var(--slate-300);         /* #cbd5e1 */
}
```

---

## 7. Section Backgrounds

### Alternating Pattern

| Section | Background |
|---------|------------|
| Hero | Navy gradient |
| Problem | Slate 100 (light gray) |
| Solution | White |
| How It Works | Slate 100 |
| Course | White |
| Stats/Proof | Navy gradient |
| CTA | Navy gradient |

### Background Effects

- **Cyan glow:** Subtle radial gradient in hero, positioned top-right
- **No images:** Rely on color and typography, not stock photos

---

## 8. Motion

### Transitions

| Property | Duration | Easing |
|----------|----------|--------|
| Color/background | 0.2s | ease |
| Transform | 0.2s-0.3s | ease |
| Opacity | 0.3s | ease-in-out |

### Hover States

- Buttons: lift (translateY -2px) + shadow increase
- Cards: subtle lift (translateY -4px to -6px) + shadow increase
- Links: color shift to lighter variant

### Animations

- **Typewriter:** Hero author cycling (80ms per character)
- **Marquee:** Currently teaching scroll (30s loop, linear)
- **Fade in:** Sections on scroll (optional, 0.6s ease-out)

---

## 9. Voice & Tone

### Brand Voice

| Attribute | Description |
|-----------|-------------|
| **Clear** | No jargon, no edu-speak. Say what you mean. |
| **Confident** | We know this works. Not boastful, but assured. |
| **Warm** | We care about students. Not corporate, not cold. |
| **Direct** | Short sentences. Active voice. Get to the point. |

### Writing Guidelines

- Lead with outcomes, not features
- Use "your child" not "students" (parent-facing)
- Avoid superlatives ("best," "revolutionary")
- Be specific: "5 weeks" not "short course"
- One idea per sentence

### Example Tone

**Not this:** "Our innovative pedagogical methodology leverages systematic frameworks to optimize analytical writing outcomes."

**This:** "We teach your child to understand the text. The writing follows naturally."

---

## 10. Application Examples

### Hero Section

- Deep navy background with subtle cyan glow
- Logo centered or top-left
- Headline in Cyan, subtitle in Slate 300
- Single blue CTA button

### Feature Cards

- White background on light section
- Icon in accent color
- Fraunces heading (600 weight)
- Slate 600/700 body text
- Subtle shadow, no border

### Stats Section

- Navy gradient background
- Numbers in Cyan (3rem)
- Labels in Slate 300

---

## 11. Don'ts

- ❌ Don't use colors outside the palette
- ❌ Don't stretch or distort the logo
- ❌ Don't use the logo on busy backgrounds
- ❌ Don't use stock photos of students/classrooms
- ❌ Don't use more than two type weights per page
- ❌ Don't center body text (headings only)
- ❌ Don't use pure black (#000) — use Deep Navy
- ❌ Don't use pure white (#fff) for large background areas — use Slate 100

---

## 12. CSS Implementation

### CSS Variables (defined in `:root`)

```css
:root {
  /* Primary colors */
  --deep-navy: #0a1628;
  --navy: #0d1b2a;
  --cyan: #00d4ff;
  --cyan-glow: #00d4ff33;
  --blue: #3b82f6;
  --emerald: #10b981;

  /* Slate scale */
  --slate-100: #f1f5f9;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1e293b;
}
```

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=Fraunces:ital,wght@0,600;0,700;1,400&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

**END OF STYLE GUIDE**
