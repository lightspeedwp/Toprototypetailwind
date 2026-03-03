# Task List: Styles, Links & Assets Refactor

**Project:** Quality Assurance & Design System Alignment  
**Date:** March 3, 2026  
**Status:** In Progress

---

## 🟥 Phase 1: Critical Fixes (P0)
- [ ] **Task 1.1:** Fix placeholder legal links in `BookingWizard.tsx`.
  - Link "Terms & Conditions" to `/terms-conditions`.
  - Link "Privacy Policy" to `/privacy-policy`.
- [ ] **Task 1.2:** Fix placeholder pagination links in `Pagination.tsx`.
  - Convert `href="#"` to proper route-based navigation.
- [ ] **Task 1.3:** Refactor `DesignSystemVerification.tsx` to remove hardcoded `8px` widths.
  - *Fix:* Replace with `var(--wp--preset--spacing--20)` or similar.

## 🟧 Phase 2: Asset & Link Optimization (P1)
- [ ] **Task 2.1:** Fix social media placeholder links in `FooterNew.tsx`.
- [ ] **Task 2.2:** Add missing `alt` text to images in:
  - `CTA.tsx`
  - `EnquiryModal.tsx`
  - `ConservationSection.tsx`
  - `WhyBookWithUsPage.tsx`
  - `ReviewsHubPage.tsx`
- [ ] **Task 2.3:** Refactor `SiteLogo.tsx` to use CSS Variables for width.
- [ ] **Task 2.4:** Refactor `RelatedRegionsBlock.tsx` grid logic to use CSS Variables.

## 🟦 Phase 3: Documentation & Enforcement
- [ ] **Task 3.1:** Update `DESIGN-SYSTEM-ENFORCEMENT.md` with Image Alt Text requirements.
- [ ] **Task 3.2:** Update `Guidelines.md` with the broken links prevention policy.

---

**Master Tracking:** Added to `/tasks/task-list.md`
