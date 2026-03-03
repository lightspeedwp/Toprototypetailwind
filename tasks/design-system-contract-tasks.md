# Design System Contract — Task List

**Generated:** 2026-03-03
**Source:** `/reports/2026-03-03-design-system-contract-audit.md`
**Prompt:** `/prompts/design-system-contract-audit.md`

---

## Phase 1: Critical Fixes (Container Contract + Docs Alignment)

### 1.1 Container Max-Width (Critical — 3 files)

- [ ] `global.css:283` — Replace `max-width: 1440px` with `max-width: var(--container-max-width)`
- [ ] `wordpress-classes.css:138` — Replace `max-width: 1440px` with `max-width: var(--container-max-width)`
- [ ] `parts/header.css:55` — Replace `max-width: 1440px` with `max-width: var(--container-max-width)`

### 1.2 Documentation Token Alignment (Low — 3 docs)

- [ ] `guidelines/design-tokens/colors.md` — Update colour hex values to match current `theme-light.css` and `theme-dark.css` (v5.0 palette)
- [ ] `guidelines/design-tokens/shadows.md` — Update shadow values to match current elevation tokens in theme-light.css (`0px 1px 2px` not `0px 4px 0px`)
- [ ] `guidelines/design-tokens/borders.md` — Update border colour hex values to match current `--border` token (`#BDBDBD` light / `#404040` dark)

---

## Phase 2: Card Grid Column Progression (High — 1 file)

- [ ] `patterns/card-grid.css:52` — Change 2-col breakpoint from `480px` to `640px`
- [ ] `patterns/card-grid.css:63` — Change 3-col breakpoint from `768px` to `1024px`
- [ ] `patterns/card-grid.css:73` — Change 4-col breakpoint from `1024px` to `1280px`
- [ ] `patterns/card-grid.css:82` — Keep 5-col at `1440px` (matches contract)
- [ ] `patterns/card-grid.css:90` — Change 6-col breakpoint from `1600px` to `1680px`

---

## Phase 3: Margin Elimination — Patterns (High — 28 instances)

### 3.1 High Priority (card components — visible on every page)

- [ ] `patterns/feature-card.css:49` — `margin-bottom: 1rem` → use `gap` on parent
- [ ] `patterns/feature-card.css:80` — `margin-bottom: 0.5rem` → use `gap` on parent
- [ ] `patterns/team-card.css:116,123,145,158` — Convert all `margin-bottom` to flex-column `gap`
- [ ] `patterns/blog-card.css:112,140,154` — Convert all `margin-bottom` to flex-column `gap`

### 3.2 Medium Priority (layout patterns)

- [ ] `patterns/mobile-menu.css:213,214,302,355` — Convert margins to gap/padding
- [ ] `patterns/featured-section.css:46` — `margin-top: 3rem` → `padding-block-start` or parent `gap`
- [ ] `patterns/sitemap-grid.css:26,27,58` — Negative margins → padding adjustment or grid approach

### 3.3 Review Required (editorial prose)

- [ ] `patterns/editorial-content.css:172,194,199,221,236,258,279,308` — These are `margin-block` on prose elements (`blockquote`, `table`, `figure`, `hr`, `ul`, `ol`). **May be exempt as semantic prose flow margins.** Human review required.

---

## Phase 4: Margin Elimination — Parts (High — 11 instances)

### 4.1 Header

- [ ] `parts/header.css:237` — `margin-top: 0.5rem` → padding or gap
- [ ] `parts/header.css:329` — `margin-top: 0.125rem` → padding
- [ ] `parts/header.css:347` — `margin-bottom: 0.125rem` → padding
- [ ] `parts/header.css:482` — `margin-bottom: 1rem` → gap on parent
- [ ] `parts/header.css:515` — `margin-bottom: 1rem` → gap on parent

### 4.2 Footer

- [ ] `parts/footer.css:41` — `margin-bottom: 3rem` → `padding-bottom` or parent `gap`
- [ ] `parts/footer.css:68` — `margin-bottom: 1rem` → gap on parent
- [ ] `parts/footer.css:96` — `margin-bottom: 1.5rem` → gap
- [ ] `parts/footer.css:104` — `margin-bottom: 1rem` → gap
- [ ] `parts/footer.css:114` — `margin-bottom: 0.75rem` → gap
- [ ] `parts/footer.css:201` — `margin-bottom: 1rem` → gap
- [ ] `parts/footer.css:251` — `margin-bottom: 1.5rem` → gap
- [ ] `parts/footer.css:273` — `margin-top: 0.125rem` → padding

---

## Phase 5: Margin Elimination — Templates (High — 24 instances)

### 5.1 Home Template

- [ ] `templates/home.css:112` — `margin-bottom: 3rem` → section gap
- [ ] `templates/home.css:123` — `margin-bottom: 1rem` → flex gap
- [ ] `templates/home.css:265` — `margin-top: 3rem` → padding-block-start
- [ ] `templates/home.css:319,327` — margin-bottom → gap
- [ ] `templates/home.css:404,416` — margin-bottom/top in media query → gap

### 5.2 Single Tour Template

- [ ] `templates/single-tour.css:98,106,118,126,131,139,144,152` — Extensive margin-bottom usage → convert parent sections to flex gap
- [ ] `templates/single-tour.css:183,191,198,231,239,263,282` — Continued margin pattern → gap conversion

### 5.3 Archive Template

- [ ] `templates/archive.css:68,92,159,222,353,390,398,415,424` — margin-bottom/top → gap/padding

### 5.4 Single Template

- [ ] `templates/single.css:84,141,150,159,164,210` — margin-bottom/top → gap/padding

---

## Phase 6: Desktop-First Media Query Migration (Medium — 21 instances)

Convert all `@media (max-width:)` to mobile-first `@media (min-width:)`:

### 6.1 Pattern CSS

- [ ] `hero.css:398` — `max-width: 640px` → refactor to mobile-first base
- [ ] `card-grid.css:197` — `max-width: 640px` → refactor
- [ ] `faq.css:250` — `max-width: 640px` → refactor
- [ ] `cta.css:318` — `max-width: 640px` → refactor
- [ ] `editorial-content.css:349` — `max-width: 640px` → refactor
- [ ] `cards.css:333,483` — `max-width: 640px` → refactor
- [ ] `archive-header.css:123` — `max-width: 640px` → refactor
- [ ] `fast-facts.css:207` — `max-width: 640px` → refactor
- [ ] `related-content.css:163` — `max-width: 640px` → refactor
- [ ] `pagination.css:129` — `max-width: 640px` → refactor
- [ ] `breadcrumbs.css:165` — `max-width: 640px` → refactor
- [ ] `feature-card.css:170` — `max-width: 768px` → refactor
- [ ] `notification-banner.css:153` — `max-width: 640px` → refactor

### 6.2 Template CSS

- [ ] `home.css:402` — `max-width: 767px` → refactor
- [ ] `archive-tours.css:126` — `max-width: 767px` → refactor

### 6.3 Part CSS

- [ ] `header.css:640,707` — `max-width: 1023px` → refactor

### 6.4 Shared CSS

- [ ] `sections.css:262` — `max-width: 640px` → refactor
- [ ] `sections.css:891` — `max-width: 768px` → refactor

---

## Phase 7: Verification & Regression (Post-Implementation)

- [ ] Visual regression check at **320px** (mobile floor)
- [ ] Visual regression check at **480px** (large phone)
- [ ] Visual regression check at **640px** (2-column activation)
- [ ] Visual regression check at **768px** (tablet)
- [ ] Visual regression check at **1024px** (desktop / 3-column)
- [ ] Visual regression check at **1280px** (4-column activation)
- [ ] Visual regression check at **1440px** (5-column activation)
- [ ] Visual regression check at **1600px** (container max-width boundary)
- [ ] Visual regression check at **1680px** (6-column activation)
- [ ] Visual regression check at **1920px** (design ceiling)
- [ ] Dark mode contrast verification (WCAG AA)
- [ ] Run compliance scorecard
- [ ] Human review sign-off on flagged items

---

**Total Tasks:** ~95
**Estimated Effort:** Phase 1-2 (quick, ~30 min) | Phase 3-5 (medium, ~4 hrs) | Phase 6 (medium, ~2 hrs) | Phase 7 (manual, ~2 hrs)
