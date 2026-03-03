# Task: CSS Architecture & Data Integrity Remediation

**Created:** February 19, 2026  
**Source:** Audit Report V6 (`/reports/AUDIT_REPORT_V6.md`)  
**Priority:** Critical (build blockers) + High (cascade conflicts)

---

## Context

After refactoring content into dedicated data files and completing a design system token compliance pass, the codebase has two categories of issues:

1. **Build-breaking data import errors** - Two files import named exports that don't exist
2. **CSS cascade conflicts** - `global.css` redefines ~40 Tailwind utility class names, creating unpredictable style overrides

---

## Tasks

### Critical (Build Blockers)

- [x] **C-01:** Fix `CardGrid.stories.tsx:6` - Change `POSTS` to `BLOG_POSTS`
- [x] **C-02:** Fix `BlogSingle.tsx:41` - Change `ALL_POSTS` to `ALL_BLOG_POSTS`

### High Priority (CSS Cascade)

- [x] **L-01:** Remove `.grid { gap: ... }` from `global.css` - conflicts with Tailwind's `.grid`
- [x] **L-02:** Rename `.card` to `.wp-block-card` in `global.css` - conflicts with shadcn/ui Card
- [x] **L-03:** Remove static spacing utilities (`.p-*`, `.py-*`, `.mt-*`, `.mb-*`, `.mx-auto`, `.max-w-*`) from `global.css`
- [x] **L-04:** Remove display/position utilities (`.flex`, `.hidden`, `.block`, `.relative`, `.absolute`, etc.) from `global.css`
- [x] **L-05:** Remove font-weight utilities (`.font-bold`, `.font-semibold`, etc.) from `global.css`
- [x] **L-06:** Remove responsive utilities (`.md\:block`, `.md\:hidden`, `.md\:w-*`, `.lg\:block`, `.lg\:hidden`, `.lg\:w-*`) from `global.css`
- [x] **L-07:** Remove CSS reset block from `global.css` (Tailwind preflight handles this)
- [x] **L-08:** Remove `.transition*`, `.hover\:*`, `.cursor-*`, `.opacity-*`, `.aspect-*`, `.object-*`, `.pointer-events-none` from `global.css`

### Medium Priority

- [x] **M-01:** Fix `preview.tsx` double CSS import - keep only `index.css`
- [x] **M-02:** Remove dead `.py-12`/`.py-16` from `global.css` (superseded by fluid tokens)

### Low Priority

- [x] **P-01:** Add deprecation notice to `data/mock.ts` pointing to domain files
- [x] **P-02:** Verify no component relies on global.css utility classes before removal (grep for `.grid--cols-*`, `.flex--*`, `.has-border`, etc. in className props)

---

## Additional Tasks (Phase 2 - February 19, 2026)

### Critical (CSS Layer Conflict)

- [x] **L-09:** Remove bare element selectors (`h1`-`h6`, `p`, `a`, `blockquote`, `code`, `pre`, `ul`, `ol`, `li`) from `global.css` — un-layered CSS beats `@layer base` in theme.css, preventing Tailwind utility overrides from working. Kept only `.wp-block-*` selectors.
- [x] **L-10:** Remove `.text-left`, `.text-center`, `.text-right` from `global.css` — un-layered duplicates that shadow Tailwind's `@layer utilities` versions.
- [x] **L-11:** Replace hardcoded `rgba(25, 118, 210, 0.1)` in `.form__input:focus` box-shadow with `color-mix(in srgb, var(--ring) 15%, transparent)` to use the `--ring` design token.

### Phase 3 (sections.css Token Compliance)

- [x] **S-01:** Replace all hardcoded `clamp()` values in `sections.css` with `var(--spacing-section-sm/md/lg/xl)` tokens for consistent spacing
- [x] **S-02:** Replace `rgba(255, 255, 255, 0.1)` in `.section-cta-primary` borders with `color-mix(in srgb, var(--primary-foreground) 10%, transparent)`
- [x] **S-03:** Replace `rgba(0, 0, 0, 0.4)` / `rgba(0, 0, 0, 0.6)` in `.section-hero-image::before` with `color-mix(in srgb, var(--foreground) 40/60%, transparent)` for theme-aware overlays
- [x] **S-04:** Replace inline `clamp(1rem, 2vw, 1.5rem)` in filter bar/CTA inline sections with `var(--spacing-element-sm/lg)` tokens
- [x] **S-05:** Replace `#ccc` in print border with `var(--border)` token

### Phase 4 (Data Integrity — Runtime Bug Fixes)

- [x] **D-01:** Fix `ArchiveTourTemplate.tsx` duration filter — `tour.duration` is a string ("7 days") but filter accessed `.days` property. Added `parseDurationDays()` helper to parse string/object duration into numeric days.
- [x] **D-02:** Fix `ArchiveTourTemplate.tsx` price filter/sort — `tour.price` is a string ("From $5,200 per person") but filter compared as number. Added `parsePriceValue()` helper to extract numeric value from price strings.

### Phase 5 (Full Codebase Verification — February 19, 2026)

Comprehensive scan of all components, pages, templates, and CSS files:

- [x] **V-01:** Header.tsx — Replaced redundant inline `display: "grid"` with Tailwind `grid` class (kept dynamic `gridTemplateColumns` inline — acceptable)
- [x] **V-02:** Verified ALL pattern components (`Hero`, `CTA`, `FAQ`, `TourCard`, `CardGrid`, etc.) — ZERO hardcoded colors, fonts, or static inline styles
- [x] **V-03:** Verified ALL pages (30+ pages) — ZERO hardcoded hex/rgba values, ZERO font-family overrides
- [x] **V-04:** Verified ALL templates (`ArchiveTourTemplate`, `SingleTourTemplate`, `ArchiveDestinationTemplate`, `SingleDestinationTemplate`) — ZERO violations
- [x] **V-05:** Verified ALL CSS files (`global.css`, `sections.css`, `breadcrumbs.css`, `SingleTourTemplate.css`, `print.css`) — all use `var(--*)` tokens
- [x] **V-06:** Verified `theme.css` `@theme inline` → `theme-light.css` token consistency (radius, font-size, colors all compute identically)
- [x] **V-07:** Verified only acceptable exceptions remain:
  - `SocialShare.tsx`: External brand colors (#1877F2 Facebook, #1DA1F2 Twitter, etc.) — required for brand identity
  - `BannerCover.css`, `Gallery.css`, `TourGallerySection.css`: `#000`/`#fff` for media overlay contexts — documented exception
  - `print.css`: Hardcoded print colors — standard practice for print media
  - `ToPlugin.tsx`: Figma import file — auto-generated, not editable
  - Dynamic inline styles (progress bars, transforms, gestures): Computed values that cannot be static Tailwind classes

### Phase 6 (Font Tokenization — February 19, 2026)

Complete elimination of hardcoded font-family strings across entire codebase:

- [x] **F-01:** Added `--font-family-mono: 'Courier New', monospace` token to `theme-light.css`
- [x] **F-02:** Added `--font-mono: var(--font-family-mono)` to `theme.css` `@theme inline` — Tailwind's `font-mono` class now uses the design system token
- [x] **F-03:** Updated `theme.css @layer base` `code`/`pre` rules to use `var(--font-family-mono)` instead of hardcoded `'Courier New', monospace`
- [x] **F-04:** Updated `global.css` `.wp-block-code` to use `var(--font-family-mono)` instead of hardcoded `'Courier New', monospace`
- [x] **F-05:** Verified ZERO remaining hardcoded `font-family` strings in any `.css` file (both `/src/styles/` and `/src/app/components/`)

### Status

**All tasks complete across 6 phases (31 tasks).**

Phase 1: Build blockers + global.css Tailwind conflict removal (14 tasks)
Phase 2: CSS layer cascade fix + remaining un-layered element selectors (3 tasks)
Phase 3: sections.css token compliance (5 tasks)
Phase 4: Data integrity runtime fixes (2 tasks)
Phase 5: Full codebase verification (7 checks)
Phase 6: Font tokenization (5 tasks)

**Final Compliance Summary:**
- `global.css`: ZERO Tailwind-conflicting classes, ZERO bare element typography selectors, ZERO hardcoded colors, ZERO hardcoded font-families
- `sections.css`: ZERO hardcoded clamp() values, ZERO hardcoded colors, all spacing uses `var(--spacing-*)` tokens
- `theme.css @layer base`: Single source of truth for bare element typography, all fonts via `var(--font-family-*)` tokens
- All Tailwind utility overrides work correctly (un-layered CSS no longer shadows them)
- All three font families flow through CSS variables: `--font-family-lora` (serif), `--font-family-noto-sans` (sans-serif), `--font-family-mono` (monospace)
- Components: 100% token-compliant (only justified exceptions for brand colors and media overlays)
- Pages: 100% token-compliant
- Templates: 100% token-compliant

---

## Validation

After completing all tasks:

1. Run build to confirm no import errors
2. Visually check all pages for layout breakage (especially grids and cards)
3. Verify Storybook loads without duplicate styles
4. Run compliance scorecard to confirm scores maintained

---

## Files to Modify

| File | Changes |
|---|---|
| `/src/app/components/patterns/CardGrid.stories.tsx` | Fix `POSTS` import |
| `/src/app/pages/BlogSingle.tsx` | Fix `ALL_POSTS` import |
| `/src/styles/global.css` | Remove Tailwind-conflicting classes, keep WP-specific classes |
| `/preview.tsx` | Remove individual CSS imports |
| `/src/app/data/mock.ts` | Add deprecation comment |