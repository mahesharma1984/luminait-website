# Kernel-Derived Distribution (KDD)

## A Methodology for Systematic Content Strategy

**Version:** 2.0  
**Date:** January 23, 2026  
**Based on:** CPEA Framework, Behavioral Marketing Theory  
**Integrates:** PLG-PMF v2.0 (Stage 0), Channel Definitions (Stage 2B)  
**Canonical Application:** Distribution_Strategy_Reading_Writing_PLG_v1_0.md

---

## 1. Overview

Kernel-Derived Distribution (KDD) creates distribution strategy from source material analysis. Rather than imposing marketing frameworks onto content, KDD derives messaging and channel strategy from the structural properties of the source.

**Core Principle:** The marketing message emerges from synthesis of kernel properties and audience needs. Distribution strategy is the optimal path for that derived message to reach qualified users.

```
CPEA (Literary Analysis)          KDD (Distribution Strategy)
─────────────────────────         ─────────────────────────────
Code → Pattern → Effect           Kernel → Message → Funnel
   (derive, don't impose)            (derive, don't impose)
```

---

## 2. The KDD Process

### 2.1 Four-Phase Structure

```
PHASE 0: DISTRIBUTION DIAGNOSIS
└── Stage 0: PLG-PMF Assessment
    └── Output: PLG Score, Distribution Route

PHASE A: EXPLORATION (What can we say?)
├── Stage 1: Audience Mapping
├── Stage 3: Message Derivation
└── Stage 5A: Content Drafts (exploratory)

PHASE B: SELECTION (What should we say?)
├── Stage 4: Funnel Assembly (select core thread)
├── Stage 2: Channel Strategy (constrain by thread)
└── Stage 2B: Execution Constraints

PHASE C: REFINEMENT
└── Stage 5B: Content Drafts (constrained)
```

---

## 3. Stage Definitions

### Stage 0: PLG-PMF Assessment (from PLG-PMF v2.0)

**Purpose:** Evaluate product's PLG readiness before planning distribution.

**Process:**
1. Score three dimensions (TTV, Demonstrability, Aha Clarity)
2. Calculate PLG Score
3. Determine quadrant and distribution route

**Output:**
```
PLG Score: [1.0-5.0]
Quadrant: [A/B/C/D]
Distribution Route: [PLG-Ready / Hybrid / Education]
Entry Point Required: [Yes/No]
```

**How Stage 0 Modifies Downstream Stages:**

| PLG Score | Stage 1 Focus | Stage 4 Architecture | Stage 2 Channel Jobs |
|-----------|---------------|----------------------|----------------------|
| 4.0+ | Solution-aware and above | Traffic → Trial → Activation | Drive trial |
| 3.0-3.9 | Problem-aware and above | Traffic → Trial → Assisted | Drive trial + educate |
| 2.0-2.9 | Include Unaware | Traffic → Entry Point → Core | Drive to entry point |
| <2.0 | Heavy Unaware | Traffic → Content → Trust → Trial | Build awareness first |

---

### Stage 1: Audience Mapping

**Purpose:** Define who the audience is, awareness stages, and pain points the kernel addresses.

**Frameworks Applied:**
- Rogers (Diffusion of Innovation): Who are early adopters?
- Schwartz (Awareness Stages): What stage are most searchers at?
- Pain point mapping: What's hard about this text?

**Output:** `audience_profile` with segments, awareness stages, search terms, pain points.

**Task Type:** REASONING

---

### Stage 3: Message Derivation

**Purpose:** Generate all possible message angles from the kernel. Do not filter yet.

**Process:**
1. For each channel type, ask: "What could we say?"
2. For each pain point, ask: "How does the kernel address this?"
3. For each kernel element, ask: "What hook does this generate?"

**Output:** `message_matrix` with multiple angles per channel, traced to kernel elements.

**Task Type:** REASONING

---

### Stage 5A: Content Drafts (Exploratory)

**Purpose:** Write draft hooks/content for each message angle. Explore, don't polish.

**Channel Formats (from Channel Definitions):**

| Channel | Format | Length | Register |
|---------|--------|--------|----------|
| Social | Vertical video script | 60-90 seconds | Emotional, provocative |
| YouTube | Horizontal video script | 5-10 minutes | Educational, demonstration |
| SEO | Article | 1500-2000 words | Analytical, authoritative |
| Guide | Structured document | 15-20 pages | Systematic, comprehensive |

**Output:** Draft hooks in correct format per channel—multiple options each.

**Task Type:** REASONING

---

### Stage 4: Funnel Assembly (Selection)

**Purpose:** Select the ONE core message thread that unifies the funnel.

**Selection Criteria:**

| Criterion | Test |
|-----------|------|
| Memorable | Can a student repeat it to a friend? |
| Differentiating | Does it separate us from competitors? |
| Pattern-anchored | Does it lead to the kernel's pattern? |
| Funnel-continuous | Can it stretch from agitation to delivery? |

**Output:** `core_thread` with unified message, agitation register, solution register.

**Task Type:** REASONING + PRECISION (must commit to single choice)

---

### Stage 2: Channel Strategy (Constrained)

**Purpose:** Define each channel's ONE job, constrained by the selected thread.

**Process:**
1. Given the thread, what's each channel's role?
2. Define MUST do and MUST NOT do
3. Map success and failure modes

**Channel Jobs by Distribution Route:**

| Channel | PLG-Ready Job | Education Job | Hybrid Job |
|---------|---------------|---------------|------------|
| Social | Drive trial | Build awareness | Drive to entry point |
| SEO | Capture → trial | Capture → content | Capture → entry point |
| YouTube | Demo product | Explain value | Demo entry point |
| Email | Activation nurture | Trust sequence | Entry point → core nurture |

**Output:** `channel_strategy` with jobs, constraints, metrics per channel.

**Task Type:** REASONING

---

### Stage 2B: Execution Constraints

**Purpose:** Specify targeting, prioritisation, and production constraints for MVP.

**Output:**
```json
{
  "seo_targeting": {
    "primary": ["medium-volume, device-focused terms"],
    "avoid": ["high-volume, dominated terms"]
  },
  "platform_priority": {
    "social": "tiktok",
    "rationale": "Fastest to test, lowest production bar"
  },
  "build_sequence": [
    "1. Guide (anchor asset)",
    "2. SEO page (capture)",
    "3. Social hooks (drive traffic)",
    "4. YouTube (later)"
  ],
  "content_specs": {
    "guide_pages": "15-20",
    "video_length": "60-90 sec (social), 7-10 min (youtube)",
    "seo_word_count": "1500-2000"
  }
}
```

**Task Type:** REASONING (business decisions)

---

### Stage 5B: Content Drafts (Refined)

**Purpose:** Rewrite content with constraints from Phase B.

**Channel Constraints to Apply:**

**Social:**
- Format: 60-90 second video script
- Must: Hook in 3 seconds, create curiosity, drive to YouTube
- Must NOT: Explain, educate, use jargon, satisfy curiosity

**YouTube:**
- Format: 5-10 minute video script
- Must: Show mechanism working, use specific examples
- Must NOT: Give complete framework, skip demonstration

**SEO:**
- Format: 1500-2000 word article
- Must: Answer search intent, include pattern preview
- Must NOT: Be complete guide, miss keyword targeting

**Guide:**
- Format: 15-20 page document
- Must: Provide complete framework, practical tools
- Must NOT: Repeat basic info, feel like teaser

**Output:** Final `content_blocks` ready for asset production.

**Task Type:** REASONING (revision) + PRECISION (fit constraints)

---

## 4. Channel Definitions

### 4.1 Required Input Structure

Channel definitions are required input—not derived. Each channel needs:

```json
{
  "platform": "string",
  "format": "string",
  "length": "string",
  "register": "string",
  "funnel_position": "string",
  "job_type": "string",
  "constraints": ["array"],
  "must_not": ["array"],
  "success_metric": "string"
}
```

### 4.2 Default Channel Definitions

```json
{
  "social": {
    "platform": "TikTok/Reels/Shorts",
    "format": "vertical_video",
    "length": "60-90 seconds",
    "register": "emotional_provocative",
    "funnel_position": "top_awareness",
    "job_type": "agitate_and_drive",
    "constraints": ["Hook in 3 sec", "No jargon", "Cliffhanger ending"],
    "must_not": ["Explain mechanism", "Satisfy curiosity"],
    "success_metric": "click_through_to_youtube"
  },
  "youtube": {
    "platform": "YouTube",
    "format": "horizontal_video",
    "length": "5-10 minutes",
    "register": "educational_demonstration",
    "funnel_position": "middle_consideration",
    "job_type": "demonstrate_and_prove",
    "constraints": ["Show mechanism with examples", "CTA to guide"],
    "must_not": ["Give complete framework", "Skip demonstration"],
    "success_metric": "guide_download_rate"
  },
  "seo": {
    "platform": "Web/Blog",
    "format": "article",
    "length": "1500-2000 words",
    "register": "analytical_authoritative",
    "funnel_position": "middle_consideration",
    "job_type": "capture_intent_and_convert",
    "constraints": ["Answer search query", "Partial pattern delivery"],
    "must_not": ["Be complete guide", "Miss keyword targeting"],
    "success_metric": "organic_traffic_to_guide_conversion"
  },
  "guide": {
    "platform": "PDF/Web",
    "format": "structured_document",
    "length": "15-20 pages",
    "register": "systematic_comprehensive",
    "funnel_position": "bottom_conversion",
    "job_type": "deliver_complete_value",
    "constraints": ["Complete framework", "Practical tools"],
    "must_not": ["Repeat basic info", "Feel like teaser"],
    "success_metric": "completion_rate"
  }
}
```

---

## 5. The Exploration → Selection Principle

### 5.1 Why Explore Before Constraining?

If you define channel strategy (Stage 2) before exploring message options (Stage 3), you might:
- Miss the best angle because it didn't fit pre-set constraints
- Force the kernel into a framework rather than letting it speak
- Produce generic content that doesn't leverage kernel properties

### 5.2 The CPEA Parallel

In literary analysis, you don't decide "this book is about innocence" then find evidence. You code the text, see what patterns emerge, then articulate.

In distribution strategy, you don't decide "social is for agitation" then write agitation content. You explore what the kernel can say, see what messages emerge, then assign channels.

---

## 6. Integration with Other Methodologies

| Methodology | Relationship |
|-------------|--------------|
| PLG-PMF v2.0 | Source of Stage 0 process |
| Customer Slice v2.0 | Atomic unit informs entry point design |
| MASTER Operations | KDD runs in Marketing Loop |
| CPEA | Upstream; provides text kernel |

---

## 7. Canonical Application

For the complete worked example applying this methodology to text-specific tutoring, see:

**Distribution_Strategy_Reading_Writing_PLG_v1_0.md**

That document demonstrates:
- Stage 0 (PLG assessment) leading to Hybrid route
- Reading entry point design
- Full funnel architecture from capture to retention
- Channel jobs and messaging rules

---

## 8. What This Version Consolidates

| Previous Document | Status |
|-------------------|--------|
| KDD_Methodology_v1_0 | Superseded |
| KDD_Addendum_PLG_PMF_Integration_v1_0 | Folded into Stage 0 |
| KDD_Addendum_Channel_Definitions_v1_0 | Folded into Section 4 |
| KDD_Addendum_Phase_B_Gaps_v1_0 | Folded into Stage 2B |

---

## 9. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 16, 2025 | Initial methodology |
| 2.0 | Jan 23, 2026 | Consolidated addendums; added Stage 0, Stage 2B, Channel Definitions |

---

**END OF DOCUMENT**
