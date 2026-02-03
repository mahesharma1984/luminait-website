# ISSUE #78: Add Annotated Chapter Example to Outsiders Guide

**Date:** February 3, 2026
**Status:** Proposed
**Related:** Issue #77 (Annotation Guide PLG Funnel)
**Priority:** High - Enhances value proposition

## Problem

The Outsiders annotation guide preview page only shows the **teaching guide** (how to annotate), but we have a **student-annotated chapter** (Chapter 1 with actual annotations) that demonstrates the system in action.

Showing both provides:
1. **Teaching tool** - Instructions, color key, activities
2. **Proof of concept** - Real example of completed work

## Current Assets

- `Exposition Annotation Guide - The Outsiders (Social Lens).pdf` (143 KB, 8 pages) - Teaching guide
- `Outsiders_Chapter1.pdf` (1.5 MB, 13 pages) - **NEW** - Student-annotated chapter with visible highlights, margin notes, and color-coding

## Goal

Update `/annotations/the-outsiders/` to offer BOTH downloads:
1. **Exposition Annotation Guide** - "Learn the system"
2. **Chapter 1 Annotated Example** - "See it in action"

## Scope

### Data Structure Changes
- Update `data/annotation-guides/the-outsiders.json`
- Change `download` (single) to `downloads` (array)
- Add metadata for both PDFs

### Template Changes
- Update `src/templates/_annotation-guide-template.html`
- Support multiple downloads in download gate section
- Show both options with descriptions

### Assets
- Extract preview images from annotated chapter (pages 1-2)
- Add to `images/annotations/the-outsiders/`

### Build
- Rebuild with `node build-annotation-guides.js`
- Test both download options

## Implementation Plan

1. Extract preview images from `Outsiders_Chapter1.pdf`
2. Update JSON data structure (single download → array)
3. Update template to handle multiple downloads
4. Rebuild pages
5. Commit and push

## Success Criteria

- Both PDFs available for download
- Preview images show annotated chapter example
- Clear distinction between guide vs. example
- Email gate captures for either download

## Value Add

**Before:** Student gets teaching guide only
**After:** Student gets teaching guide + real example of completed work

This significantly strengthens the value proposition by showing exactly what the finished product looks like.
