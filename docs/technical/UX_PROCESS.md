# UX Process & Validation Checklist

**Version:** 2.0
**Date:** January 27, 2026
**Purpose:** Run through this checklist when building or modifying web pages
**Use when:** Creating new pages, modifying existing pages, reviewing PRs
**Supersedes:** UX_VALIDATION_CHECKLIST_v1_0.md

---

## How Technical Changes Map to the Journey

Every page serves a stage in the customer journey (see [theory/02_CUSTOMER_JOURNEY.md](../theory/02_CUSTOMER_JOURNEY.md)):

| Journey Stage | Page Type | What It Proves | Key Docs |
|---------------|-----------|----------------|----------|
| Stage 1: Text Match | Homepage | "They teach my book" | [SITE_ARCHITECTURE.md](SITE_ARCHITECTURE.md) |
| Stage 2: Preparation Proof | Text-specific outline | "They've prepared for THIS book" | [GUIDE_TEMPLATE_SPEC.md](GUIDE_TEMPLATE_SPEC.md) |
| Stage 3: Method Confidence | Pedagogy pages | "They have a real system" | [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) |
| Stage 4: Action | Course page | "Here's what I get" | [SITE_ARCHITECTURE.md](SITE_ARCHITECTURE.md) |
| Friction → Validation | Results/progress | "It worked for others" | [theory/03_VALIDATION_LOOP.md](../theory/03_VALIDATION_LOOP.md) |

Before building any page, identify which journey stage it serves.

---

## QUICK CHECK (Before Every Change)

Ask these three questions before touching any code:

| # | Question | If No... |
|---|----------|----------|
| 1 | Does a user journey exist for this page? | Create one first (Stage 2) |
| 2 | Does an IA entry exist for this page? | Add it to [SITE_ARCHITECTURE.md](SITE_ARCHITECTURE.md) (Stage 3) |
| 3 | Does a wireframe exist for this page? | Sketch one first (Stage 4) |

**If all three exist:** Proceed to build/modify, then run full validation below.

---

## STAGE 2: USER JOURNEY VALIDATION

### 2.1 User Context

- [ ] **User identified:** Who is this page for? (Parent, student, teacher)
- [ ] **Entry point clear:** How do they arrive at this page?
- [ ] **Mental state understood:** What are they thinking/feeling when they land?
- [ ] **Primary question identified:** What's the ONE thing they need answered?

### 2.2 Jobs to Be Done

- [ ] **Primary job defined:** What task does this page help them complete?
- [ ] **Success criteria clear:** How do we know the page worked?
- [ ] **Exit conditions identified:** What would make them leave without acting?

### 2.3 Journey Position

- [ ] **Previous step clear:** What page/action came before this?
- [ ] **Next step clear:** What should they do after this page?
- [ ] **Escape routes exist:** Can they go back or get help if stuck?

---

## STAGE 3: INFORMATION ARCHITECTURE VALIDATION

### 3.1 Page Inventory

- [ ] **Page exists in IA:** Is this page documented in [SITE_ARCHITECTURE.md](SITE_ARCHITECTURE.md)?
- [ ] **URL follows convention:** Does the URL match defined patterns?
- [ ] **Hierarchy correct:** Is this page at the right level in the site structure?

### 3.2 Content Hierarchy

- [ ] **Sections documented:** Are all content sections defined?
- [ ] **Priority order clear:** Is the most important content first?
- [ ] **Nothing missing:** Does the page have everything the IA specifies?
- [ ] **Nothing extra:** Does the page avoid scope creep beyond IA?

### 3.3 Navigation & Links

- [ ] **Nav consistent:** Does header/footer match other pages?
- [ ] **Cross-links work:** Do all internal links go to correct destinations?
- [ ] **Back/escape routes:** Can user navigate away appropriately?

---

## STAGE 4: WIREFRAME VALIDATION

### 4.1 Structure Match

- [ ] **Sections match wireframe:** Does HTML structure follow wireframe?
- [ ] **Order preserved:** Are sections in the same order as wireframe?
- [ ] **Nothing missing:** Are all wireframe elements implemented?
- [ ] **Nothing extra:** Are there elements not in the wireframe?

### 4.2 Content Zones

- [ ] **Hero/header:** Does it match wireframe hero content?
- [ ] **Primary content:** Does main content match wireframe?
- [ ] **CTAs:** Are calls-to-action in wireframe positions?
- [ ] **Footer:** Does footer match wireframe?

### 4.3 Responsive Considerations

- [ ] **Mobile layout defined:** Does wireframe show mobile version?
- [ ] **Breakpoints identified:** At what widths does layout change?
- [ ] **Touch targets adequate:** Are buttons/links large enough for touch?

---

## STAGE 5: VISUAL DESIGN VALIDATION

> **Reference:** [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) is the canonical source for all styling decisions.

### 5.1 Design System Compliance

- [ ] **CSS imports correct:** Using correct import order?
  ```html
  1. base.css (tokens)
  2. page-components.css (shared patterns)
  3. page-marketing.css (page styles)
  ```
- [ ] **Colors from tokens:** Using CSS variables (`var(--primary)`, `var(--warm)`, etc.)?
  - NOT hardcoded hex values like `#2563EB`
  - See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) Section 3 for full color list
- [ ] **Typography correct:** Using defined fonts (DM Sans body, Fraunces headings)?
- [ ] **Spacing from tokens:** Using `var(--space-md)` etc., not arbitrary values?

### 5.2 Component Consistency

- [ ] **Using shared components?** Check `page-components.css` before creating new styles
- [ ] **Buttons match:** Using `.btn`, `.btn-primary`, `.btn-secondary`?
- [ ] **Cards match:** Using `.content-card`, `.card-grid`?
- [ ] **Badges match:** Using `.badge`, `.badge-warm`, `.badge-primary`?
- [ ] **Heroes match:** Using `.hero-standard` for marketing pages?

### 5.3 Style Validation

- [ ] **Run build validation:** `node build.js` checks for style issues
- [ ] **Minimal inline styles:** < 5 `style=""` attributes per page
- [ ] **Minimal custom CSS:** Custom `<style>` block < 50 lines
- [ ] **No hardcoded colors:** Build will warn if > 3 hex colors found

### 5.4 Voice & Tone

- [ ] **Audience-appropriate:** Is copy written for the right user?
- [ ] **Consistent voice:** Does it sound like other pages?
- [ ] **No jargon:** Is language accessible to the audience?

---

## STAGE 6: BUILD VALIDATION

### 6.1 Functionality

- [ ] **Interactive elements work:** Do all buttons, links, toggles function?
- [ ] **Forms submit:** Do forms send data correctly?
- [ ] **States handled:** Are hover, active, selected states implemented?
- [ ] **Errors handled:** What happens when things go wrong?

### 6.2 Performance

- [ ] **Page loads fast:** Is there unnecessary weight?
- [ ] **Images optimized:** Are images appropriately sized?
- [ ] **No render blocking:** Does content appear quickly?

### 6.3 Accessibility

- [ ] **Semantic HTML:** Using appropriate heading levels, landmarks?
- [ ] **Alt text:** Do images have alt text?
- [ ] **Keyboard navigable:** Can you tab through the page?
- [ ] **Color contrast:** Is text readable against backgrounds?

### 6.4 Cross-browser/Device

- [ ] **Mobile tested:** Does it work on phone?
- [ ] **Tablet tested:** Does it work on tablet?
- [ ] **Desktop tested:** Does it work on desktop?
- [ ] **Major browsers:** Chrome, Safari, Firefox?

---

## CHANGE-SPECIFIC CHECKLISTS

### Adding a New Page

1. [ ] Document user journey (Stage 2)
2. [ ] Add to information architecture (Stage 3)
3. [ ] Create wireframe (Stage 4)
4. [ ] Confirm visual design approach (Stage 5)
5. [ ] Build page (Stage 6)
6. [ ] Run full validation above
7. [ ] Update cross-links on related pages

### Modifying Existing Page

1. [ ] Review existing journey — does change affect it?
2. [ ] Review existing IA — does change affect structure?
3. [ ] Review existing wireframe — does change require wireframe update?
4. [ ] Make change
5. [ ] Run relevant validation sections
6. [ ] Check cross-links still work

### Adding New Section to Page

1. [ ] Does this section belong on this page? (Check IA)
2. [ ] Where in the content hierarchy? (Check wireframe)
3. [ ] Update wireframe if needed
4. [ ] Build section
5. [ ] Validate structure match, content hierarchy

### Styling/Visual Changes Only

1. [ ] Check style guide compliance
2. [ ] Check component consistency with other pages
3. [ ] Test responsive behavior
4. [ ] Test accessibility (contrast, etc.)

---

## RED FLAGS

Stop and reconsider if:

| Red Flag | What It Means |
|----------|---------------|
| "I'm not sure who this page is for" | Missing Stage 2 — define user first |
| "I'm not sure where this fits in the site" | Missing Stage 3 — update IA first |
| "I'm just going to figure it out as I build" | Missing Stage 4 — sketch wireframe first |
| "This page looks different from others" | Stage 5 violation — check style guide |
| "I'm adding this feature because it's cool" | Scope creep — check against user journey |
| "I'll fix the mobile version later" | Stage 6 risk — design mobile-first |

---

## DOCUMENTATION UPDATES

After completing page work:

- [ ] **Journey still accurate?** Update journey docs if journey changed
- [ ] **IA still accurate?** Update [SITE_ARCHITECTURE.md](SITE_ARCHITECTURE.md) if structure changed
- [ ] **Wireframe still accurate?** Update wireframe if layout changed
- [ ] **New patterns?** Add to [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) if new components created

---

## SIGN-OFF TEMPLATE

Use this when completing page work:

```
## Page Validation: [Page Name]

**Date:** [Date]
**URL:** [URL]
**Change type:** [New page / Modification / Style only]
**Journey stage served:** [Stage 1-4 / Validation Loop]

### Validation Summary

| Stage | Status | Notes |
|-------|--------|-------|
| 2. Journey | ✓ / ✗ | |
| 3. IA | ✓ / ✗ | |
| 4. Wireframe | ✓ / ✗ | |
| 5. Visual | ✓ / ✗ | |
| 6. Build | ✓ / ✗ | |

### Issues Found
- [None / List issues]

### Documentation Updated
- [ ] SITE_ARCHITECTURE
- [ ] DESIGN_SYSTEM
- [ ] Wireframes

**Validated by:** [Name]
```

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | Jan 27, 2026 | Renamed to UX_PROCESS; added journey stage mapping; updated doc references |
| 1.0 | Jan 24, 2026 | Initial checklist (as UX_VALIDATION_CHECKLIST_v1_0) |

---

**END OF DOCUMENT**
