# CANONICAL STRATEGY OVERVIEW - LuminAIT

Version: 1.0  
Date: February 3, 2026  
Status: Active - canonical summary  
Purpose: Single, comprehensive document that captures the full system, strategy, and execution model.

This document consolidates all active work into one coherent narrative. It does not replace deep references; it points to them for implementation detail.

---

## 1. Core Thesis

LuminAIT is a text-specific English tutoring system. Education is a credence good: parents cannot verify quality before or after purchase. The strategic solution is to make quality visible through text-specific proof, engineered pedagogy, and measurement. When teaching quality is systematised and instrumented, it becomes transferable and produces predictable changes in unit economics (conversion, retention, ARPU, and margins). This causal chain can be contractually bounded so partners pay for outcomes, not promises.

---

## 2. Market Reality and Positioning

### 2.1 The Credence Problem
Parents cannot judge pedagogy. Generic tutoring relies on credentials and reputation signals, creating a credibility trap for new entrants.

### 2.2 The Text-Specific Bypass
Text specificity creates a search attribute inside a credence good. Parents can verify:
- Do you teach the exact book?
- Is the class running this term?
- Is the plan mapped to chapters?

This turns an unprovable claim into a binary check and collapses acquisition friction.

### 2.3 Reading vs Writing Hierarchy
- Reading (text match) is the acquisition lever.
- Writing improvement is the retention lever.
- Lead with what can be verified; let writing value be discovered through delivery.

---

## 3. Pedagogical System (Scientific + Relational)

### 3.1 Scientific Pedagogy
- Explicit instruction
- Cognitive load sequencing
- Retrieval practice
- Worked examples and scaffolding
- Kernel method: treat the text as data, derive patterns, then build delivery

### 3.2 Relational Pedagogy
- School-context specificity
- Assessment awareness
- Confidence-building through visible structure

### 3.3 Transferability
The system is designed to be teachable by others. It reduces dependence on a single instructor and enables controlled scaling through training and QA gates.

---

## 4. Productized Offer (Parent-Direct Core)

### 4.1 Core Offer
- 10-week text-specific course
- Weekly worksheets and structured activities
- Written feedback
- Progress reports (Weeks 4 and 8)

### 4.2 What the Parent Buys
- Clear, visible preparation for their child's exact text
- A structured method that turns reading into analytical writing

---

## 5. Measurement Layer (The Keystone)

Measurement makes quality legible, comparable, and enforceable.

Instrumentation includes:
- Diagnostics at entry
- Progression tracking across core skills
- Outcome visibility for parents and partners

Measurement converts pedagogical quality into an economic signal, enabling outcome-based commercial terms.

---

## 6. Funnel Architecture and Proof Sequence

### 6.1 Primary Funnel (Parent-Direct)
Homepage (text selection) -> Text-specific outline -> Course -> Validation loop if friction occurs.

### 6.2 Secondary Funnels
- Student-led analysis guides (SEO) -> Email capture -> Parent bridge
- Social video discovery -> Depth layer -> Parent outline

### 6.3 Credibility Sequence
1. Text Match (binary)
2. Preparation Proof (text-specific outlines)
3. Method Confidence (generic pedagogy pages)
4. Outcomes Observed (progress/results)

### 6.4 Validation Loop
When price friction occurs, inject outcome proof to spike motivation and loop users back to conversion.

---

## 7. Content System and Channel Alignment

### 7.1 Kernel-Derived Distribution
Content is derived from the text kernel, not imposed marketing frameworks.

### 7.2 Two Tracks, One Kernel
- Interpretation / Pattern track (credence) for SEO and parent proof
- Annotation method track (action) for social and student entry

### 7.3 Channel Jobs (One Job Per Asset)
- SEO: capture text-specific intent
- Social video: demonstrate expertise in-feed
- Annotation pages: low-friction action -> bridge to parent outline
- Parent outline: preparation proof -> course
- Results: validation loop proof

---

## 8. Local SEO and School Strategy

School-specific proof is the strongest verifiable signal after outcomes.

Implementation:
- School landing pages with verified booklists
- LocalBusiness schema
- Internal linking between schools and text outlines
- Annual verification cycle and updates

This creates a defensible moat: local authority, text specificity, and repeatable infrastructure.

---

## 9. Partnership and Distributed Delivery Strategy

### 9.1 P-GTM Framework
Partnerships are selected via Gap -> Container -> Exchange gates, then scored for alignment and sequenced by proof requirements.

### 9.2 Partner Proof Layer
Partners need integration proof, not just parent-facing proof. Required assets:
- Partner hub page
- Partner pack (operational + economic clarity)
- Proof-of-transfer (partner-taught outcomes)

### 9.3 Graduate Network Model
- Capital arbitrage: LuminAIT IP vs local school trust
- Graduated hourly model aligns incentives
- Quality gates enforce methodology fidelity
- Graduate content engine feeds social and local SEO

---

## 10. Unit Economics Causal Chain

Mechanistic links (not correlations):
- Better outcomes -> higher perceived value
- Higher perceived value -> higher conversion
- Progress visibility -> higher retention
- Trust -> ARPU expansion
- Teacher leverage -> margin expansion

These links are measurable and form the basis for outcome-based commercial terms and bounded pilots.

---

## 11. Operations and Build System

### 11.1 Source of Truth
- Templates in src/templates
- Partials in src/partials
- Config in site-config.json
- Data in /data (parent guides, video scenes, schools)

Never edit root HTML files directly. Always rebuild from templates.

### 11.2 Build Scripts
- build.js (main pages)
- build-parent-guides.js (curriculum guides)
- build-homepage-guides.js (homepage books)
- build-video-scenes.js (studio scenes)
- build-school-pages.js (school pages)

### 11.3 Design System
- base.css tokens
- page-components.css shared patterns
- page-marketing.css page-level styles
- minimal inline overrides only

---

## 12. Governance and Quality Control

### 12.1 R/P Split
Reasoning tasks go to the LLM. Precision tasks go to code. This prevents hallucinated precision in production workflows.

### 12.2 Measure-First Protocol
Before destructive builds or major refactors, measure current state, compare templates to output, and preserve deltas.

### 12.3 RALPH Gate
Automation is only used after exploration is complete and validation is programmable.

---

## 13. Status Snapshot (What Is Live vs In Progress)

Live and implemented:
- Parent-direct funnel core (homepage text grid, text-specific outlines, course page)
- 18 text-specific outlines (8 root, 10 curriculum)
- Progress and results proof pages
- Video studio build pipeline

In progress or planned:
- School page expansion and local SEO saturation
- Partner hub and partner pack
- Proof-of-transfer pilots with non-founder teachers
- Expanded analysis guides and annotation assets per text

---

## 14. Open Gaps

- More outcome data tied to specific texts and cohorts
- Partner-facing proof assets (pack, pilot case study)
- Expanded school pages and verified booklists
- Consistent instrumentation and analytics across funnel stages

---

## Appendix A - Canonical Reference Map

Strategy and theory:
- docs/theory/01_CREDENCE_PROBLEM.md
- docs/theory/02_CUSTOMER_JOURNEY.md
- docs/theory/03_VALIDATION_LOOP.md
- docs/theory/04_CONTENT_DERIVATION.md
- docs/theory/05_CHANNEL_ALIGNMENT.md

Product and pedagogy:
- docs/FRAMEWORK_Scientific_Relational_Pedagogy_v1_0.md
- docs/FRAMEWORK_Validation_Loop_v1_0.md

Go-to-market and partnerships:
- docs/P_GTM_Partnership_v3_0.md
- docs/P_GTM_Partner_Unit_Economics_v1_0.md
- docs/technical/PARTNER_PROOF_LAYER.md
- docs/P_GTM_Graduate_Network_v1_0.md

Funnel and content operations:
- docs/technical/SITE_ARCHITECTURE.md
- docs/technical/FUNNEL_STRATEGY.md
- docs/technical/CONTENT_MAP.md
- docs/technical/GUIDE_TEMPLATE_SPEC.md
- docs/technical/GUIDE_EXTRACTION_CHECKLIST.md

Build and design system:
- docs/technical/BUILD_SYSTEM.md
- docs/technical/DESIGN_SYSTEM.md
- docs/technical/UX_PROCESS.md

Local SEO:
- docs/technical/LOCAL_SEO_STRATEGY.md

Dev process and automation:
- docs/DEV_GUIDE_Building_Prototypes_v2_0.md
- docs/RALPH_Readiness_Assessment_v3_1.md
- docs/DEV_GUIDE_ADDENDUM_Brand_Asset_Pipeline.md

---

END OF DOCUMENT
