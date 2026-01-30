# LOCAL SEO STRATEGY v1.0

**Date:** January 30, 2026
**Status:** Active — canonical reference for local SEO implementation
**Related:** [Site Architecture](./SITE_ARCHITECTURE.md), [Graduate Network Strategy](../P_GTM_Graduate_Network_v1_0.md), [Credence Problem](../theory/01_CREDENCE_PROBLEM.md)

---

## 1. STRATEGIC FOUNDATION

### 1.1 School-by-School Local SEO Model

**Core insight:** Parents search by school name, not just by subject.

**Search behavior:**
- Generic: "English tutoring Melbourne" (broad, competitive)
- School-specific: "McKinnon English tutor" (hyper-local, low competition)

**The McKinnon Model:** Build landing pages for each school showing their 2026 booklist + which texts you cover.

**Why this creates a moat:**
- Competitors optimize for generic keywords
- You own school-specific long-tail keywords
- Each school page builds local authority
- Hard to replicate (requires systematic booklist tracking + alumni network)

### 1.2 Integration with Graduate Network Strategy

**Capital exchange:**
- Your IP: Text-specific methodology + materials
- Graduate's capital: School network + local trust
- Local SEO: Amplifies both (page ranks → graduate delivers → reviews strengthen SEO)

**Compounding effect:**
```
School page ranks for "[School] English tutor"
    ↓
Parent discovers LuminAIT
    ↓
Enrolls with local graduate (McKinnon grad teaches McKinnon students)
    ↓
Leaves Google review mentioning school
    ↓
Page ranks higher → cycle repeats
```

---

## 2. IMPLEMENTATION STATUS

### 2.1 Completed (January 2026)

✅ **School pages build system:**
- `build-school-pages.js` — Generates pages from JSON data
- `_school-page-template.html` — Template with LocalBusiness schema
- `schools-index.html` — Directory listing

✅ **Pilot schools (5):**
- McKinnon Secondary College
- Melbourne Girls College
- Lauriston Girls' School
- Korowa Anglican Girls' School
- Scotch College

✅ **Homepage integration:**
- Schools section added below text grid
- "Or find by school" fold
- 5-column grid (responsive)

✅ **Technical SEO:**
- Organization schema on homepage (EducationalOrganization)
- LocalBusiness schema on each school page
- NAP in footer (Melbourne, VIC, Australia + email)
- Meta title: "Text-Specific English Tutoring Melbourne | LuminAIT"

### 2.2 Pending

⚠️ **Google Business Profile:**
- Set up account
- Claim Melbourne location
- Add service areas
- Weekly posting schedule (30-sec videos)

⚠️ **Review collection:**
- Progress report email → Google review CTA
- Response templates with keywords
- Track review count + ratings

⚠️ **Saturation (20 schools):**
- Expand from 5 → 20 Melbourne schools
- Cover top selective + state schools
- Build `/schools/` index page prominence

---

## 3. KEYWORD STRATEGY

### 3.1 School-Specific Clustering

**Each school generates 5-10 keyword targets:**

| Keyword Type | Example | Competition | Intent |
|--------------|---------|-------------|--------|
| School + subject | "McKinnon English tutor" | Low | High (parent knows school + need) |
| School + booklist | "McKinnon 2026 booklist help" | Very low | Medium (informational → transactional) |
| School + year level | "McKinnon Year 10 English" | Low | Medium |
| School + curriculum | "McKinnon VCE English tutor" | Low | High |
| School + text | "McKinnon Macbeth tutoring" | Very low | Very high |

**Network effect:**
- 20 schools × 7 keyword clusters = 140 unique targets
- Minimal competition on each
- Local intent = high conversion

### 3.2 vs. Generic Keywords

| Generic Keyword | Competition | Your Rank | School-Specific Keyword | Competition | Your Rank |
|-----------------|-------------|-----------|------------------------|-------------|-----------|
| "English tutoring Melbourne" | High | Unknown | "McKinnon SC English tutor" | Low | Top 3 (target) |
| "Macbeth tutoring" | High | Unknown | "McKinnon Macbeth tutoring" | Very low | Top 1 (target) |
| "VCE English help" | High | Unknown | "Lauriston VCE English tutor" | Low | Top 3 (target) |

**Strategic focus:** Own the long tail, not the head.

---

## 4. ON-PAGE SEO ELEMENTS

### 4.1 School Page Template

**URL:** `/schools/[school-slug]/`

**Key elements:**
- **Title tag:** "English Tutoring for [School Name] | LuminAIT Melbourne"
- **Meta description:** "Text-specific English tutoring for [School] students. Courses for [Text 1], [Text 2], [Text 3]. Melbourne."
- **H1:** "English Tutoring for [School Name]"
- **Content:** 2026 booklist by year level, links to text pages, verification date

### 4.2 Schema Markup

**Site-wide (Homepage):**
```json
{
  "@type": "EducationalOrganization",
  "name": "LuminAIT",
  "address": {
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  },
  "areaServed": "Melbourne",
  "email": "hello@luminait.app"
}
```

**School pages:**
```json
{
  "@type": "LocalBusiness",
  "name": "LuminAIT - English Tutoring for [School Name]",
  "address": {...},
  "areaServed": "[School Suburb], Melbourne",
  "makesOffer": [
    {"@type": "Service", "name": "[Text] Tutoring"}
  ]
}
```

### 4.3 NAP Consistency

**NAP = Name, Address, Phone**

**Must match exactly across:**
- Website footer
- Google Business Profile
- Schema markup
- All directory listings

**Current NAP:**
```
Name: LuminAIT
Address: Melbourne, VIC, Australia
Email: hello@luminait.app
```

*Note: Physical address to be added when office established*

---

## 5. OFF-PAGE SEO ELEMENTS

### 5.1 Google Business Profile

**Setup:**
- Business name: LuminAIT
- Category: Educational Service (primary), Tutor (secondary)
- Service area: Melbourne metropolitan area
- Services: List each text ("Macbeth Tutoring", "The Giver Tutoring", etc.)

**Weekly posting schedule:**
- Monday: 30-second analysis video (repurposed from `/studio/`)
- Thursday: Text tip or curriculum update
- Include keywords: Melbourne, school names, text names

### 5.2 Review Strategy

**Collection:**
- Post-course email: "Please leave a Google review"
- Progress report showcase → review CTA
- Target: 10+ reviews, 5-star average

**Response template:**
```
Thank you for your review! We loved helping [Student] with their
[Text] analysis at [School]. Our text-specific approach to Melbourne
secondary English continues to deliver results.
```

**Why:** Keywords in review responses feed Google's algorithm

### 5.3 Local Citations

**Where to list:**
- Education directories (Australia-specific tutoring platforms)
- VCE/HSC provider directories
- Local chambers of commerce
- School partner portals (if applicable)

**Ensure NAP consistency across all listings**

---

## 6. MEASUREMENT

### 6.1 Key Metrics

| Metric | Tool | Target |
|--------|------|--------|
| "[School] English tutor" rankings | Google Search Console | Top 3 for each school |
| School page impressions | Google Search Console | 100+/month per school |
| School page → text page CTR | Google Analytics | 30%+ |
| GBP views | GBP Dashboard | 500+/month |
| Review count | GBP Dashboard | 10+ (5-star avg) |
| Conversion: school page → course | Google Analytics | 5%+ |

### 6.2 Tracking Setup

**Google Search Console:**
- Add property: luminait.app
- Filter by page: `/schools/`
- Track queries containing school names
- Monitor position changes for target keywords

**Google Analytics:**
- Event: `school_page_view` (page, school name)
- Event: `text_click_from_school` (school, text)
- Goal: Course page visit from school page

**Google Business Profile:**
- Weekly check: views, searches, actions (calls, website visits)
- Monthly: review count + rating + response rate

---

## 7. SCALING ROADMAP

### Phase 1: Pilot (5 Schools) — COMPLETE

✅ McKinnon, Melbourne Girls, Lauriston, Korowa, Scotch
✅ Pages built, schema added, indexed
✅ Homepage integration complete

**Next:** Monitor rankings for 30 days, collect baseline data

### Phase 2: Saturation (20 Schools) — Q1 2026

**Expansion criteria:**
- Top 20 Melbourne schools by enrollment
- Mix of state/private, single-sex/co-ed
- Priority: Schools whose booklists match existing 18 texts

**Deliverables:**
- [ ] Verify 15 additional school booklists
- [ ] Generate 15 additional school pages
- [ ] Build `/schools/` index prominence
- [ ] Set up Google Business Profile
- [ ] Start weekly posting schedule

### Phase 3: Partnership Leverage — Q2-Q3 2026

**Trigger:** When school page reaches 50+ monthly visits

**Approach:**
1. Compile traffic data: "100+ parents from [School] found us"
2. Contact school: "We're the most-visited tutoring resource for your parents"
3. Offer: Newsletter mention, parent night sponsorship, official recommendation

### Phase 4: Geographic Expansion — Q4 2026+

**Markets:** Sydney (HSC), Brisbane, Adelaide

**Per-market playbook:**
1. Identify top 20 schools
2. Verify curriculum/booklists
3. Deploy school pages
4. Set up market-specific GBP (or expand service area)

---

## 8. INTEGRATION WITH GRADUATE NETWORK

**From P_GTM_Graduate_Network_v1_0.md:**

| SEO Element | Graduate Network Enhancement |
|-------------|------------------------------|
| School landing page | Graduate teaches at that school → authentic presence |
| Local reviews | Parents from specific school → geo-targeted credibility |
| Video content | Graduate creates analysis videos → embedded in school pages |
| Word-of-mouth | Graduate's network amplifies SEO discovery |

**The moat:**
- SEO captures intent ("McKinnon English tutor")
- Graduate delivers with local credibility (McKinnon alumni)
- Reviews strengthen SEO ranking
- Cycle compounds

**Competitor challenge:**
- To replicate, they need: (1) School pages, (2) Alumni at each school, (3) Text-specific materials, (4) Local reviews
- Hard to copy one; impossible to copy all four

---

## 9. "THE SEO GUY" CHECKLIST STATUS

Reference: Local business SEO best practices

| Tactic | Status | Implementation |
|--------|--------|----------------|
| ✅ Meta title = keyword + city | DONE | "Text-Specific English Tutoring Melbourne \| LuminAIT" |
| ✅ Address in footer (NAP) | DONE | Melbourne, VIC, Australia + email |
| ✅ H1 = service + location | DONE | School pages: "English Tutoring for [School]" |
| ✅ Location pages | DONE | 5 schools live, 15 more pending |
| ✅ Schema markup | DONE | EducationalOrganization + LocalBusiness |
| ⚠️ GBP setup | TODO | Account creation + weekly posts |
| ⚠️ Review responses | TODO | Template ready, need active reviews |
| ⚠️ Photos weekly | TODO | 30-sec videos from `/studio/` |
| ⚠️ NAP citations | TODO | Education directories |

---

## 10. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 30, 2026 | Initial local SEO strategy documentation |

---

**END OF DOCUMENT**
