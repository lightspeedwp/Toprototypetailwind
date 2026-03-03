# Task List: Inline Styles Removal & Design System Alignment

**Project:** CSS Architecture Cleanup  
**Date:** March 3, 2026  
**Status:** In Progress

---

## 🟥 Phase 1: Critical Fixes (P0)
- [ ] **Task 1.1:** Refactor `DesignSystemVerification.tsx` to remove hardcoded `8px` widths.
  - *Location:* `/src/app/pages/DesignSystemVerification.tsx`
  - *Fix:* Replace with `var(--spacing-2)` or Tailwind `w-2`.

## 🟧 Phase 2: Dynamic Prop Refactor (P1)
- [ ] **Task 2.1:** Refactor `SiteLogo.tsx` to use CSS Variables for width.
  - *Current:* `style={{ width }}`
  - *Target:* `style={{ '--logo-width': width }}` + CSS class.
- [ ] **Task 2.2:** Refactor `RelatedRegionsBlock.tsx` grid logic.
  - *Current:* `style={{ gridTemplateColumns: ... }}`
  - *Target:* Pass column count to CSS variable.
- [ ] **Task 2.3:** Refactor `GroupBlock.tsx` overlay opacity.
  - *Current:* `style={{ opacity: overlayOpacity }}`
  - *Target:* Use `--overlay-opacity` CSS variable.

## 🟦 Phase 3: Developer Tools & Specimens
- [ ] **Task 3.1:** Audit `ComponentShowcase.tsx` for inline styles.
- [ ] **Task 3.2:** Verify all dev tool specimens use `var()` patterns.

## 🟩 Phase 4: Enforcement & Documentation
- [ ] **Task 4.1:** Update `DESIGN-SYSTEM-ENFORCEMENT.md` with "Dynamic Styling" pattern examples.
- [ ] **Task 4.2:** Propose ESLint rule for `react/forbid-dom-props`.

---

**Master Tracking:** Added to `/tasks/task-list.md`
