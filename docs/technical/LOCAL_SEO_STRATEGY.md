# LOCAL SEO STRATEGY v1.0

**Date:** January 30, 2026
**Status:** Active — canonical reference for local SEO implementation
**Related:** [Site Architecture](./SITE_ARCHITECTURE.md) (URL structure), [Credence Problem](../theory/01_CREDENCE_PROBLEM.md) (proof point hierarchy), [Customer Journey](../theory/02_CUSTOMER_JOURNEY.md) (funnel design)

---

## 1. STRATEGIC FOUNDATION

### 1.1 Why Local SEO Matters for Education

Education is a **credence good** — parents cannot evaluate quality before or after purchase. Local SEO solves this by converting credibility signals into **verifiable, binary proof**:

| Traditional Credibility | Local SEO Proof |
|------------------------|-----------------|
| "We're experienced tutors" | "We teach at McKinnon SC" (verifiable) |
| "We know the curriculum" | "Here's McKinnon's 2026 booklist" (binary) |
| "We serve Melbourne" | Google shows our address + reviews |

**Core insight:** Parents who search by school name ("McKinnon SC English tutor") have already self-identified. They trust providers who speak their language.

### 1.2 The McKinnon Model

**Strategy C from PMF Framework** — School-Led Entry creates the highest-trust proof point:

```
PROOF HIERARCHY (weakest → strongest):
├── "We teach English" (generic)
├── "We teach The Giver" (text-specific)
├── "Here's our 10-week plan for The Giver" (text-specific proof) ← CURRENT
├── "Here's McKinnon SC's 2026 booklist" (school-specific proof) ← LOCAL SEO
└── "Here's actual student work" (outcome proof)
```

School-specific proof ranks **second only to showing student work**. It's verifiable (parent can check school's actual booklist), local (signals deep knowledge of specific curriculum), and frictionless (no interpretation required).

### 1.3 The Defensible Moat

Why this strategy cannot be easily replicated:

| Requirement | LuminAIT | Generic Tutor |
|-------------|----------|---------------|
| Systematic booklist tracking | Build system + JSON data | Manual, ad-hoc |
| 100+ school pages | Template-based generation | Would need 3+ months |
| Text-specific content to anchor | 18 text guides already built | None |
| Annual update infrastructure | `build-school-pages.js` | Manual rewrites |
| Local review accumulation | Compounding over time | Starting from zero |

**Result:** First-mover advantage compounds. Each school page builds authority that reinforces the next.

---

## 2. KEYWORD STRATEGY

### 2.1 School-Specific Clustering

**Generic competitor optimizes for:**
- "English tutoring Melbourne" (broad, high competition)
- "Macbeth tutoring" (national, competitive)

**LuminAIT optimizes for:**
- "[School Name] English tutor" (hyper-local, low competition)
- "[School Name] booklist help" (intent-specific)
- "[School Name] [Year Level] English" (granular)
- "[School Name] VCE English tutor" (curriculum-specific)

### 2.2 Keyword Map by Page Type

| Page | Primary Keywords | Secondary Keywords |
|------|------------------|-------------------|
| Homepage `/` | "English tutoring Melbourne", branded | "text-specific tutoring", "Melbourne English tutor" |
| School page `/schools/[school]/` | "[School] English tutor", "[School] booklist" | "[School] VCE/Y9/Y10 English", "[School] tutoring" |
| Text page `/[text-slug]/` | "[text] tutoring Melbourne", "[text] English help" | "[text] essay help", "[text] analysis tutoring" |
| Course `/course/` | Branded, "[text] course" | "English tutoring course Melbourne" |

### 2.3 Long-Tail Advantage

Each school generates 5-10 keyword clusters:
- McKinnon SC English tutor
- McKinnon SC booklist 2026
- McKinnon SC Year 9 English
- McKinnon SC Year 10 English
- McKinnon SC VCE English tutor
- McKinnon SC Macbeth tutoring
- McKinnon SC Animal Farm help

**20 schools × 7 clusters = 140 unique keyword targets** with minimal competition.

---

## 3. TECHNICAL IMPLEMENTATION

### 3.1 Schema Markup

**Organization (site-wide, in `<head>`):**
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "LuminAIT",
  "description": "Text-specific English tutoring for Melbourne secondary students",
  "url": "https://luminait.app",
  "logo": "https://luminait.app/assets/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  },
  "areaServed": {
    "@type": "City",
    "name": "Melbourne"
  },
  "sameAs": [
    "https://www.instagram.com/luminait",
    "https://www.facebook.com/luminait"
  ]
}
```

**LocalBusiness (school pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LuminAIT - English Tutoring for [School Name]",
  "description": "Text-specific English tutoring aligned with [School Name]'s 2026 curriculum",
  "url": "https://luminait.app/schools/[school-slug]/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[school-lat]",
    "longitude": "[school-lng]"
  },
  "areaServed": {
    "@type": "Place",
    "name": "[School Suburb], Melbourne"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "[Text] Tutoring",
        "description": "10-week course for [Text]"
      }
    }
  ]
}
```

**Course (text pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "[Text] English Tutoring",
  "description": "10-week text-specific English course for [Text]",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "LuminAIT"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "duration": "P10W"
  }
}
```

### 3.2 Google Business Profile

**Setup requirements:**
- Business name: LuminAIT
- Category: Educational Service (primary), Tutor (secondary)
- Address: Melbourne business address (required for local pack)
- Service area: Melbourne metropolitan area
- Services: List each text as a service ("Macbeth Tutoring", "The Giver Tutoring", etc.)

**Weekly posting schedule:**
- Monday: 30-second video from `/studio/scenes/` (repurposed)
- Thursday: Text tip or analysis snippet
- Content includes keywords: "Melbourne", school names, text names

**Review strategy:**
- Request reviews after course completion (via progress report email)
- Response template with keywords:
  > "Thank you for your review! We loved helping [Student] with their [Text] analysis at [School]. Our text-specific approach to Melbourne secondary English continues to deliver results."

### 3.3 NAP Consistency

**NAP = Name, Address, Phone**

Must be identical across:
- Website footer
- Google Business Profile
- All directory listings
- Schema markup

**Footer template (update in `src/partials/footer.html`):**
```html
<footer>
  <div class="footer-nap">
    <strong>LuminAIT</strong><br>
    Melbourne, VIC<br>
    <a href="tel:+61XXXXXXXXX">04XX XXX XXX</a><br>
    <a href="mailto:hello@luminait.app">hello@luminait.app</a>
  </div>
</footer>
```

**Note:** Format must match exactly. "Melbourne, VIC" not "Melbourne VIC" or "Melbourne, Victoria".

---

## 4. CONTENT STRATEGY

### 4.1 School Page Structure

**URL:** `/schools/[school-slug]/`

**Template structure:**
```
┌─────────────────────────────────────────────────────────────┐
│ H1: English Tutoring for [School Name]                      │
│ Subhead: 2026 Booklist · Text-Specific Courses              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ HERO                                                        │
│ "We teach the exact texts [School Name] has chosen"         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 2026 BOOKLIST                                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Year 9          │ Year 10         │ VCE               │ │
│ │ • Animal Farm   │ • Macbeth       │ • The Great Gatsby│ │
│ │ • [Text]        │ • [Text]        │ • [Text]          │ │
│ │ [View Course]   │ [View Course]   │ [View Course]     │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ WHY [SCHOOL] PARENTS CHOOSE US                              │
│ • Curriculum-aligned: We follow [School]'s exact texts      │
│ • Text-specific: 10-week courses built for each book        │
│ • Proven results: [Testimonial from school parent]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ CTA: "See Your Child's Text" → links to text grid           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER (with NAP)                                           │
└─────────────────────────────────────────────────────────────┘
```

**SEO elements:**
- Title: "English Tutoring for [School Name] | LuminAIT Melbourne"
- Meta description: "Text-specific English tutoring aligned with [School Name]'s 2026 booklist. Courses for [Text 1], [Text 2], [Text 3]. Melbourne."
- H1: "English Tutoring for [School Name]"
- Schema: LocalBusiness + Course markup

### 4.2 Booklist Verification Process

**Annual cycle (December-January):**
1. Check school websites for 2026 booklists
2. Update `/data/schools/[school].json`
3. Run `node build-school-pages.js`
4. Verify pages updated correctly
5. Post "2026 booklists updated" to Google Business Profile

**Verification sources:**
- School website (booklist section)
- Campion or other booklist providers
- Direct contact with school (if needed)

**Data freshness signal:**
- Include "Last verified: [Date]" on school pages
- Shows Google the content is maintained

### 4.3 Internal Linking

```
School Page (/schools/[school]/)
    ├── → /[text-slug]/ (each text in booklist)
    ├── → /course/ (enrollment CTA)
    └── → / (homepage, "See all texts")

Text Page (/[text-slug]/)
    ├── → /schools/[school]/ ("Schools that teach [Text]")
    ├── → /course/ (CTA)
    └── → / (back to homepage)

Homepage (/)
    ├── → /schools/ (school directory index)
    ├── → /[text-slug]/ (text cards)
    └── → /course/ (CTA)
```

---

## 5. SCALING PLAYBOOK

### Phase 1: Pilot (5 Schools)

**Timeline:** 2 weeks

**Goal:** Validate school page template + SEO tracking

**Schools:**
1. McKinnon Secondary College (state, high-performing)
2. Melbourne Girls College (state, girls)
3. Lauriston Girls' School (private, girls)
4. Korowa Anglican Girls' School (private, girls)
5. Scotch College (private, boys)

**Deliverables:**
- [ ] Verify 5 school booklists
- [ ] Create `/data/schools/[school].json` for each
- [ ] Build `build-school-pages.js`
- [ ] Deploy 5 school pages
- [ ] Add LocalBusiness schema
- [ ] Set up Google Search Console tracking for school keywords

### Phase 2: Saturation (20 Schools)

**Timeline:** 4 weeks after Phase 1

**Goal:** Dominate "[School] English tutor" queries for Melbourne

**Expansion criteria:**
- Top 20 Melbourne secondary schools by enrollment
- Mix of state, private, single-sex, co-ed
- Priority: Schools whose booklists include our existing 18 texts

**Deliverables:**
- [ ] Verify 15 additional booklists
- [ ] Generate 15 additional school pages
- [ ] Build `/schools/` index page (directory of all schools)
- [ ] Add "Schools we serve" section to homepage
- [ ] Start weekly Google Business Profile posts

### Phase 3: Partnership Leverage

**Timeline:** After 3 months of organic traffic

**Goal:** Convert local authority into official partnerships

**Trigger:** When a school page reaches 50+ monthly visits

**Approach:**
1. Compile traffic data: "100+ parents from [School] found us"
2. Contact school: "We're the most-visited tutoring resource for your parents"
3. Offer: Newsletter mention, parent night sponsorship, or official recommendation

**Partnership tiers:**
- Tier 1: School links to our school page (backlink)
- Tier 2: Newsletter mention or parent portal listing
- Tier 3: Official tutoring partner (highest trust)

### Phase 4: Geographic Expansion

**Timeline:** After Melbourne saturation (20+ schools)

**Markets:**
- Sydney (HSC curriculum) — different texts, same strategy
- Brisbane (Queensland curriculum)
- Adelaide, Perth (smaller markets)

**Per-market playbook:**
1. Identify top 20 schools
2. Verify curriculum/booklists
3. Create text guides for market-specific texts (if new)
4. Deploy school pages
5. Set up market-specific Google Business Profile (or service area)

---

## 6. MEASUREMENT

### 6.1 Key Metrics

| Metric | Tool | Target |
|--------|------|--------|
| "[School] English tutor" rankings | Google Search Console | Top 3 for each school |
| School page impressions | Google Search Console | 100+/month per school |
| School page → text page clicks | Google Analytics | 30%+ CTR |
| Google Business Profile views | GBP Dashboard | 500+/month |
| Review count | GBP Dashboard | 10+ reviews (5-star average) |
| Conversion: school page → course inquiry | Google Analytics | 5%+ |

### 6.2 Tracking Setup

**Google Search Console:**
- Add property: luminait.app
- Filter by page: `/schools/`
- Track queries containing school names

**Google Analytics:**
- Event: `school_page_view` (page, school name)
- Event: `text_click_from_school` (school, text)
- Goal: Course page visit from school page

**Google Business Profile:**
- Weekly check: views, searches, actions
- Monthly: review count + response rate

### 6.3 Competitive Monitoring

**Monthly audit:**
1. Search "[School] English tutor" for each school
2. Record: Our position, top 3 competitors
3. Identify: New competitors entering school-specific keywords
4. Action: If competitor appears, strengthen that school page (more content, internal links)

---

## 7. BUILD SYSTEM INTEGRATION

### 7.1 Data Structure

**File:** `/data/schools/[school-slug].json`

```json
{
  "slug": "mckinnon-sc",
  "schoolName": "McKinnon Secondary College",
  "shortName": "McKinnon SC",
  "location": {
    "suburb": "McKinnon",
    "state": "VIC",
    "coordinates": {
      "lat": -37.9012,
      "lng": 145.0456
    }
  },
  "type": "state",
  "gender": "co-ed",
  "booklist2026": {
    "year7": ["The Giver"],
    "year8": ["The Outsiders"],
    "year9": ["Animal Farm", "Romeo and Juliet"],
    "year10": ["Macbeth", "To Kill a Mockingbird"],
    "vce": ["The Great Gatsby", "Ransom"]
  },
  "verifiedDate": "2026-01-15",
  "testimonial": {
    "quote": "Finally, a tutor who knows exactly what my daughter is studying.",
    "parent": "Sarah M.",
    "year": "Year 10 parent"
  }
}
```

### 7.2 Build Script

**File:** `build-school-pages.js`

**Pattern:** Follow `build-parent-guides.js` structure

```
/data/schools/*.json  →  build-school-pages.js  →  /schools/[slug]/index.html
                ↓                                          ↑
  _school-page-template.html ──────────────────────────────┘
```

**Features:**
- Read all JSON files from `/data/schools/`
- Generate `/schools/[slug]/index.html` for each
- Generate `/schools/index.html` (directory listing)
- Inject LocalBusiness schema into each page
- Link texts to existing `/[text-slug]/` pages

### 7.3 Template

**File:** `/src/templates/_school-page-template.html`

**Variables:**
- `{{schoolName}}` — Full school name
- `{{shortName}}` — Short name for headings
- `{{suburb}}` — Location for schema
- `{{booklist}}` — Rendered year-by-year text grid
- `{{testimonial}}` — Parent quote (if available)
- `{{verifiedDate}}` — Last booklist verification
- `{{schema}}` — JSON-LD LocalBusiness markup

---

## 8. REFERENCE: "THE SEO GUY" CHECKLIST

The following local SEO tactics (from practitioner consensus) map to our strategy:

| Tactic | LuminAIT Implementation | Status |
|--------|------------------------|--------|
| **Meta title = keyword + city** | "English Tutoring for [School] \| LuminAIT Melbourne" | Template |
| **Address in footer** | NAP in footer partial | TODO |
| **H1 = service + location** | "English Tutoring for [School Name]" | Template |
| **Location pages for each area** | `/schools/[school]/` for 20+ schools | Phase 1-2 |
| **Schema markup** | LocalBusiness + Course + EducationalOrganization | Template |
| **GBP category correct** | Educational Service + Tutor | Setup |
| **GBP photos weekly** | 30-second videos from `/studio/scenes/` | Ongoing |
| **Review responses with keywords** | Template with school + text names | Ongoing |
| **Consistent NAP** | Single source of truth in site-config.json | TODO |
| **Niche directories** | Education directories, VCE/HSC platforms | Phase 3 |

---

## 9. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 30, 2026 | Initial local SEO strategy documentation |

---

**END OF DOCUMENT**
