# Issue #77: Annotation Guide PLG Funnel — Build Summary

**Date:** February 3, 2026
**Status:** Infrastructure Complete — Ready for Manual Steps
**Related Issue:** #77 (Annotation Guide PLG Funnel)

---

## ✅ COMPLETED

### 1. Data Structure
- **Created:** `data/annotation-guides/the-outsiders.json`
- **Contains:** Full guide metadata, color key, semantic families, activities, download info, parent bridge config
- **Format:** JSON, ready for additional guides (The Giver, etc.)

### 2. Build System
- **Created:** `build-annotation-guides.js`
- **Function:** Reads JSON → generates HTML pages
- **Output:**
  - `/annotations/index.html` (hub page with guide cards)
  - `/annotations/[slug]/index.html` (individual preview pages)
- **Run with:** `node build-annotation-guides.js`

### 3. Template System
- **Created:** `src/templates/_annotation-guide-template.html`
- **Features:**
  - Preview image display
  - Color-coded annotation key
  - Semantic families explanation
  - Formspree email gate integration
  - Parent bridge CTA
  - Secondary course CTA

### 4. Generated Pages
- **Created:** `/annotations/index.html` (hub)
- **Created:** `/annotations/the-outsiders/index.html` (preview)
- **Template:** Professional design, mobile-responsive, design system integrated

### 5. Documentation
- **Updated:** `docs/technical/SITE_ARCHITECTURE.md`
  - Added Funnel 1B (Annotation Guide PLG)
  - Documented URL structure, content flow, conversion metrics
  - Included SEO targets and voice guidelines

### 6. Image Extraction Script
- **Created:** `scripts/extract-pdf-preview.sh`
- **Purpose:** Instructions for manual PDF page extraction
- **Output:** Images for web preview

---

## ⚠️ MANUAL STEPS REQUIRED

### Step 1: Extract Preview Images from PDF

**What to do:**
1. Open `social-media-assets/annotations/Exposition Annotation Guide - The Outsiders (Social Lens).pdf`
2. Export pages 1-2 as PNG (File > Export as PNG in Preview app)
3. Save to `images/annotations/the-outsiders/`
4. Name files:
   - `preview-page-1.png`
   - `preview-page-2.png`
5. Recommended settings:
   - Format: PNG
   - Resolution: 144 DPI (retina)
   - Width: ~1200px

**Why:** The web page displays these as preview images. Without them, the preview section will be empty.

**Alternative (automated):**
```bash
# If you have pdf2image installed:
pip3 install pdf2image pillow
python3 -c "
from pdf2image import convert_from_path
import os

pdf_path = 'social-media-assets/annotations/Exposition Annotation Guide - The Outsiders (Social Lens).pdf'
output_dir = 'images/annotations/the-outsiders'
os.makedirs(output_dir, exist_ok=True)

pages = convert_from_path(pdf_path, first_page=1, last_page=2, dpi=144)
for i, page in enumerate(pages, start=1):
    page.save(f'{output_dir}/preview-page-{i}.png', 'PNG')
    print(f'Saved: preview-page-{i}.png')
"
```

---

### Step 2: Configure Formspree Form ID

**What to do:**
1. Go to [formspree.io](https://formspree.io) and create a new form
2. Form name: "Annotation Guide Downloads"
3. Copy the form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
4. Update `src/templates/_annotation-guide-template.html` line 370:
   - Find: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace with: `action="https://formspree.io/f/xyzabc123"` (your actual ID)
5. Rebuild: `node build-annotation-guides.js`

**Why:** The download gate needs a working form endpoint to capture emails and trigger PDF delivery.

**Form configuration:**
- Name: "Annotation Guide Downloads"
- Redirect after submission: (optional) `/annotations/the-outsiders/` with `?downloaded=true`
- Email notification: Enable (to get notified of downloads)
- Autoresponder: (optional) Set up email with PDF attachment

---

### Step 3: Rebuild Pages After Updates

**When to run:**
- After extracting preview images
- After updating Formspree form ID
- After editing JSON data
- After changing template

**Command:**
```bash
node build-annotation-guides.js
```

**Output:**
```
Building annotation guide pages...

Processing: The Outsiders (the-outsiders)
  -> /annotations/the-outsiders/index.html

Generating index page...
  -> /annotations/index.html

Done! Generated 1 guide pages + 1 index page.
```

---

## 📂 FILE STRUCTURE

```
luminait-website/
├── data/annotation-guides/          # Source data (JSON)
│   └── the-outsiders.json
│
├── src/templates/                   # Templates
│   └── _annotation-guide-template.html
│
├── annotations/                     # Generated output (DO NOT EDIT)
│   ├── index.html                   # Hub page
│   └── the-outsiders/
│       └── index.html               # Preview page
│
├── images/annotations/              # Preview images
│   └── the-outsiders/
│       ├── preview-page-1.png       # ⚠️ MANUAL: Extract from PDF
│       └── preview-page-2.png       # ⚠️ MANUAL: Extract from PDF
│
├── social-media-assets/annotations/ # Source PDFs
│   ├── Exposition Annotation Guide - The Outsiders (Social Lens).pdf
│   ├── The Giver - Chapter 1.pdf
│   └── The giver - chapter 3.pdf
│
├── scripts/
│   └── extract-pdf-preview.sh       # PDF extraction helper
│
└── build-annotation-guides.js       # Build script
```

---

## 🔄 FUNNEL FLOW

```
┌─────────────────────────────────────────────────────────────┐
│                    STUDENT ENTRY                            │
│                                                             │
│  SEO/Social → /annotations/[text]/                          │
│               (annotation guide preview)                     │
│                       ↓                                     │
│               Preview pages 1-2                             │
│               Method explanation                            │
│                       ↓                                     │
│               Email gate (Formspree)                        │
│                       ↓                                     │
│               Download PDF                                  │
│                       ↓                                     │
│  ┌───────────────────────────────────────────────┐         │
│  │         PARENT BRIDGE (FUNNEL HANDOFF)        │         │
│  │                                               │         │
│  │  "Show your parent the 10-week plan"          │         │
│  │  → /course.html (or /curriculum/[text]/)      │         │
│  └───────────────────────────────────────────────┘         │
│                       ↓                                     │
│                Parent-Direct Funnel                         │
│                (Primary conversion)                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 NEXT STEPS (To Launch)

### Immediate (Required for Functionality):
1. ✅ Extract preview images from Outsiders PDF
2. ✅ Configure Formspree form ID
3. ✅ Rebuild pages with `node build-annotation-guides.js`
4. Test download flow locally
5. Deploy to production

### Short-term (Complete the MVP):
1. Add The Giver annotation guides:
   - Create `data/annotation-guides/the-giver-ch1.json`
   - Create `data/annotation-guides/the-giver-ch3.json`
   - Extract preview images
   - Rebuild
2. Test email gate flow end-to-end
3. Set up Formspree autoresponder with PDF attachment
4. Add analytics tracking (download events, parent bridge CTR)

### Medium-term (Optimization):
1. A/B test email gate vs. low-price purchase ($5-10)
2. Track conversion metrics:
   - Download rate (page → download)
   - Parent-bridge CTR (download → curriculum/course)
   - Course enquiry rate
3. Add more texts (expand catalog)
4. SEO optimization for annotation guide keywords

---

## 📊 SUCCESS METRICS (From Issue #77)

Track these in analytics:
- **Download rate:** % of visitors who download the PDF
- **Parent-bridge CTR:** % of downloaders who click parent bridge CTA
- **Course CTR:** % who click "Enquire about course"
- **Conversion lift:** Compare annotation entry vs. baseline parent-direct traffic

---

## 🔗 RELATED DOCUMENTATION

- [SITE_ARCHITECTURE.md](docs/technical/SITE_ARCHITECTURE.md) - Funnel 1B section
- [ISSUE_Annotation_Guide_PLG_Funnel.md](ISSUE_Annotation_Guide_PLG_Funnel.md) - Original issue spec
- [BUILD_SYSTEM.md](docs/technical/BUILD_SYSTEM.md) - Build pipeline overview
- [CLAUDE.md](CLAUDE.md) - Project instructions

---

## 🚀 DEPLOYMENT CHECKLIST

Before deploying to production:
- [ ] Preview images extracted and in place
- [ ] Formspree form ID configured
- [ ] Pages rebuilt with final configuration
- [ ] Local testing complete (download flow works)
- [ ] PDF is accessible and downloads correctly
- [ ] Parent bridge links work (→ `/course.html`)
- [ ] Mobile responsive testing done
- [ ] SEO meta tags verified (title, description)
- [ ] Git commit with clear message
- [ ] Push to production
- [ ] Verify live URLs work
- [ ] Test Formspree form on live site

---

**Status:** Ready for manual image extraction and Formspree configuration, then ready to deploy.
