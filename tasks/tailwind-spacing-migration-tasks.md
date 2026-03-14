# Tailwind Spacing Migration - Action Plan

**Created:** 2026-03-13  
**Status:** 🔴 Not Started  
**Priority:** Medium  
**Estimated Effort:** 24 hours over 4 weeks

---

## 📋 Overview

Migrate 450+ Tailwind spacing classes to WordPress-aligned CSS using design system tokens. This migration will:

- ✅ Enable user customization via CSS variables
- ✅ Improve WordPress `theme.json` compatibility
- ✅ Reduce CSS bundle size (~15%)
- ✅ Simplify build process (no PostCSS Tailwind)
- ✅ Enforce design system compliance

---

## 🎯 Migration Strategy

### Option A: WordPress Utility Classes (Quick)
- Use `.has-padding-*`, `.has-gap-*`, `.has-margin-*` classes
- Fastest migration path
- Still allows some customization via CSS variables

### Option B: External CSS + BEM (Recommended)
- Create dedicated CSS files for each component
- Use BEM naming: `.wp-component__element--modifier`
- Full customization via CSS variables
- Better maintainability and organization

**Recommended:** Option B (External CSS + BEM)

---

## 📅 Phase 1: High-Impact Common Components (Week 1)

### Objective
Migrate 5 most-used common components to eliminate 80 Tailwind classes

### Tasks

#### ✅ Task 1.1: TemplateBrowser Component
- [x] **File:** `/src/app/components/common/TemplateBrowser.tsx`
- [x] **Tailwind Classes:** 15 → 2 (13 removed, 2 icon margins acceptable)
- [x] **Effort:** 2 hours
- [x] **Priority:** Critical (used on every page)
- [x] **Status:** ✅ COMPLETE (2026-03-13)

**Completion Summary:**
- ✅ Created `/src/app/components/common/TemplateBrowser.css` (470 lines)
- ✅ All 13 Tailwind spacing classes replaced with BEM classes
- ✅ CSS uses only design system tokens (`var(--spacing-*)`)
- ✅ Component imports external CSS file
- ✅ Responsive design maintained
- ✅ Dark mode support via CSS variables
- ✅ 2 remaining `ml-2` classes on icons (acceptable - icon utilities)

**Files Modified:**
- `/src/app/components/common/TemplateBrowser.tsx` - Added CSS import, replaced Tailwind classes with BEM
- `/src/app/components/common/TemplateBrowser.css` - NEW FILE (470 lines, 15 BEM sections)

**Verification:**
- ✅ Zero hardcoded spacing values
- ✅ All spacing uses CSS variables from theme-base.css
- ✅ No inline styles
- ✅ BEM naming convention followed
- ✅ Component renders identically
- ✅ Responsive breakpoints work (mobile: <768px)
- ✅ Dark mode tested

**Classes Created:**
1. `.wp-common-template-browser__toggle` - Toggle button
2. `.wp-common-template-browser__panel` - Dropdown panel
3. `.wp-common-template-browser__header` - Panel header
4. `.wp-common-template-browser__header-title-wrapper` - Title container
5. `.wp-common-template-browser__header-title` - Title text
6. `.wp-common-template-browser__close-btn` - Close button
7. `.wp-common-template-browser__search-container` - Search wrapper
8. `.wp-common-template-browser__search` - Search input
9. `.wp-common-template-browser__sort-options` - Sort button container
10. `.wp-common-template-browser__sort-button` - Sort button base
11. `.wp-common-template-browser__sort-button--active` - Active sort
12. `.wp-common-template-browser__sort-button--inactive` - Inactive sort
13. `.wp-common-template-browser__current` - Current template display
14. `.wp-common-template-browser__current-label` - "Current Template" label
15. `.wp-common-template-browser__current-title` - Current template name
16. `.wp-common-template-browser__current-desc` - Current template description
17. `.wp-common-template-browser__category-header` - Category header button
18. `.wp-common-template-browser__category-name` - Category name container
19. `.wp-common-template-browser__category-name-text` - Category name text
20. `.wp-common-template-browser__category-count` - Category count badge
21. `.wp-common-template-browser__category-desc` - Category description
22. `.wp-common-template-browser__page-link` - Page link button base
23. `.wp-common-template-browser__page-link--active` - Active page link
24. `.wp-common-template-browser__page-link--inactive` - Inactive page link
25. `.wp-common-template-browser__page-link-wrapper` - Page link content wrapper
26. `.wp-common-template-browser__page-title` - Page title base
27. `.wp-common-template-browser__page-title--active` - Active page title
28. `.wp-common-template-browser__page-title--inactive` - Inactive page title
29. `.wp-common-template-browser__page-desc` - Page description
30. `.wp-common-template-browser__page-indicator` - Active page indicator dot
31. `.wp-common-template-browser__empty` - Empty state container
32. `.wp-common-template-browser__empty-icon` - Empty state icon
33. `.wp-common-template-browser__empty-text` - Empty state text
34. `.wp-common-template-browser__footer` - Panel footer
35. `.wp-common-template-browser__footer-stats` - Footer statistics text

**Acceptance Criteria:**
- [x] Zero Tailwind spacing classes in JSX (except 2 acceptable icon margins)
- [x] All spacing uses CSS variables
- [x] Component renders identically
- [x] Responsive breakpoints work
- [x] Dark mode tested

---

#### ✅ Task 1.2: MobileFilterSheet Component
- [x] **File:** `/src/app/components/common/MobileFilterSheet.tsx`
- [x] **Tailwind Classes:** 12 → 2 (10 removed, 2 icon margins acceptable)
- [x] **Effort:** 1.5 hours
- [x] **Priority:** High (mobile UX critical)
- [x] **Status:** ✅ COMPLETE (2026-03-13)

**Completion Summary:**
- ✅ Created `/src/app/components/common/MobileFilterSheet.css` (210 lines)
- ✅ All 10 Tailwind spacing classes replaced with BEM classes
- ✅ CSS uses only design system tokens (`var(--spacing-*)`)
- ✅ Component imports external CSS file
- ✅ Responsive design maintained
- ✅ Dark mode support via CSS variables
- ✅ 2 remaining `ml-2` classes on icon counters (acceptable - icon utilities)

**Files Modified:**
- `/src/app/components/common/MobileFilterSheet.tsx` - Added CSS import, replaced Tailwind classes with BEM
- `/src/app/components/common/MobileFilterSheet.css` - NEW FILE (210 lines, 11 BEM classes)

**Verification:**
- ✅ Zero hardcoded spacing values
- ✅ All spacing uses CSS variables from theme-base.css
- ✅ No inline styles
- ✅ BEM naming convention followed
- ✅ Component renders identically
- ✅ Mobile gestures work (swipe to close, spring animation)
- ✅ Touch interactions responsive (44px+ touch targets)
- ✅ Dark mode tested

**Classes Created:**
1. `.wp-mobile-filter-sheet__header` - Header container with padding
2. `.wp-mobile-filter-sheet__header-content` - Header flex content with gap
3. `.wp-mobile-filter-sheet__close-btn` - Close button padding
4. `.wp-mobile-filter-sheet__content` - Scrollable content padding
5. `.wp-mobile-filter-sheet__category` - Category spacing
6. `.wp-mobile-filter-sheet__category-title` - Category title margin
7. `.wp-mobile-filter-sheet__options` - Options container with gap
8. `.wp-mobile-filter-sheet__option-btn` - Option button padding
9. `.wp-mobile-filter-sheet__footer` - Footer padding and gap
10. `.wp-mobile-filter-sheet__clear-btn` - Clear button padding
11. `.wp-mobile-filter-sheet__apply-btn` - Apply button padding

**Acceptance Criteria:**
- [x] Zero Tailwind spacing classes in JSX (except 2 acceptable icon margins)
- [x] All spacing uses CSS variables
- [x] Component renders identically
- [x] Mobile gestures work (swipe to close, spring animation)
- [x] Touch interactions responsive (44px+ touch targets)
- [x] Dark mode tested

---

#### ✅ Task 1.3: ThemeSwitcher Component
- [x] **File:** `/src/app/components/common/ThemeSwitcher.tsx`
- [x] **Tailwind Classes:** 3 (not 10 - task estimate was high)
- [x] **Effort:** 1 hour
- [x] **Priority:** Medium
- [x] **Status:** ✅ COMPLETE (2026-03-13)

**Completion Summary:**
- ✅ Created `/src/app/components/common/ThemeSwitcher.css` (140 lines)
- ✅ All 3 Tailwind spacing classes replaced with BEM class
- ✅ CSS uses only design system tokens (`var(--spacing-*)`)
- ✅ Component imports external CSS file
- ✅ Responsive design maintained (mobile: 16px offset, desktop: 24px offset)
- ✅ Dark mode support via CSS variables
- ✅ Zero remaining Tailwind spacing classes

**Files Modified:**
- `/src/app/components/common/ThemeSwitcher.tsx` - Added CSS import, replaced Tailwind classes with BEM
- `/src/app/components/common/ThemeSwitcher.css` - NEW FILE (140 lines, 1 BEM class + responsive variant)

**Verification:**
- ✅ Zero hardcoded spacing values
- ✅ All spacing uses CSS variables from theme-base.css
- ✅ No inline styles
- ✅ BEM naming convention followed
- ✅ Component renders identically
- ✅ Fixed positioning works (bottom-right corner)
- ✅ Responsive behavior works (smaller offset on mobile)
- ✅ Dark mode toggle functional
- ✅ Touch target ≥ 44px (12px padding + 20px icon = 44px)

**Classes Created:**
1. `.wp-theme-switcher` - Main button with fixed position, padding, and responsive variants

**Tailwind Classes Replaced:**
- `bottom-6` → `.wp-theme-switcher` (CSS: `bottom: var(--spacing-element-lg)` = 24px)
- `right-6` → `.wp-theme-switcher` (CSS: `right: var(--spacing-element-lg)` = 24px)
- `p-3` → `.wp-theme-switcher` (CSS: `padding: var(--spacing-element-sm)` = 12px)

**Responsive Behavior:**
- Desktop (>768px): 24px bottom/right offset
- Mobile (≤768px): 16px bottom/right offset (prevents edge overlap)

**Acceptance Criteria:**
- [x] Zero Tailwind spacing classes
- [x] Theme switcher renders on all screen sizes
- [x] Icon spacing correct (44px touch target)
- [x] Dark mode toggle functional
- [x] Component renders identically

---

#### ⏳ Task 1.4: LoadingState Component
- [ ] **File:** `/src/app/components/common/LoadingState.tsx`
- [ ] **Tailwind Classes:** 20
- [ ] **Effort:** 2.5 hours
- [ ] **Priority:** High (used everywhere)

**Steps:**
1. Create `/src/app/components/common/LoadingState.css`
2. Define BEM classes for 7 loading variants:
   - `.wp-loading-spinner`
   - `.wp-loading-card`
   - `.wp-loading-card__content`
   - `.wp-loading-card__meta`
   - `.wp-loading-list`
   - `.wp-loading-list__item`
   - `.wp-loading-progress`
   - `.wp-loading-progress__bar`
   - `.wp-loading-progress__label`
   - `.wp-loading-inline`
   - `.wp-loading-empty`
   - `.wp-loading-empty__icon`
   - `.wp-loading-empty__title`
   - `.wp-loading-empty__description`
   - `.wp-loading-empty__action`
3. Replace Tailwind classes in JSX for all 7 variants
4. Import CSS in component
5. Test all loading states
6. Test animations

**Acceptance Criteria:**
- [ ] Zero Tailwind spacing classes in JSX
- [ ] All spacing uses CSS variables
- [ ] All 7 loading variants work
- [ ] Animations smooth
- [ ] Accessibility (ARIA labels, role="status")

---

#### ⏳ Task 1.5: Skeleton Component
- [ ] **File:** `/src/app/components/common/Skeleton.tsx`
- [ ] **Tailwind Classes:** 15
- [ ] **Effort:** 2 hours
- [ ] **Priority:** High (loading states)

**Steps:**
1. Create `/src/app/components/common/Skeleton.css`
2. Define BEM classes for skeleton variants:
   - `.wp-skeleton`
   - `.wp-skeleton--pulse`
   - `.wp-skeleton--wave`
   - `.wp-skeleton-card`
   - `.wp-skeleton-card__content`
   - `.wp-skeleton-card__meta`
   - `.wp-skeleton-list`
   - `.wp-skeleton-list__item`
   - `.wp-skeleton-table`
   - `.wp-skeleton-table__header`
   - `.wp-skeleton-table__row`
   - `.wp-skeleton-grid`
3. Replace Tailwind classes in JSX
4. Import CSS in component
5. Test skeleton animations
6. Test all skeleton variants

**Acceptance Criteria:**
- [ ] Zero Tailwind spacing classes in JSX
- [ ] All spacing uses CSS variables
- [ ] Pulse/wave animations work
- [ ] All skeleton types render correctly
- [ ] Responsive layouts

---

### Phase 1 Summary

**Completion Criteria:**
- [ ] All 5 components migrated
- [ ] Zero Tailwind spacing classes in target files
- [ ] All components tested (light + dark mode)
- [ ] Visual regression tests passed
- [ ] Documentation updated

**Total Effort:** 10 hours  
**Target Completion:** End of Week 1

---

## 📅 Phase 2: Pattern Components (Week 2)

### Objective
Migrate 4 reusable pattern components to eliminate 31 Tailwind classes

### Tasks

#### ⏳ Task 2.1: Hero Component
- [ ] **File:** `/src/app/components/patterns/Hero.tsx`
- [ ] **Tailwind Classes:** 10
- [ ] **Effort:** 1.5 hours
- [ ] **Priority:** High (landing pages)

**Steps:**
1. Create `/src/app/components/patterns/Hero.css`
2. Define BEM classes:
   - `.wp-pattern-hero`
   - `.wp-pattern-hero__container`
   - `.wp-pattern-hero__content`
   - `.wp-pattern-hero__title`
   - `.wp-pattern-hero__description`
   - `.wp-pattern-hero__actions`
   - `.wp-pattern-hero__image`
3. Replace Tailwind spacing classes
4. Test responsive breakpoints
5. Test dark mode

**Acceptance Criteria:**
- [ ] Zero Tailwind spacing classes
- [ ] Hero renders on all screen sizes
- [ ] CTA buttons properly spaced
- [ ] Background image responsive

---

#### ⏳ Task 2.2: CardGrid Component
- [ ] **File:** `/src/app/components/patterns/CardGrid.tsx`
- [ ] **Tailwind Classes:** 8
- [ ] **Effort:** 1 hour
- [ ] **Priority:** High (archives)

**Steps:**
1. Create `/src/app/components/patterns/CardGrid.css`
2. Define BEM classes:
   - `.wp-pattern-card-grid`
   - `.wp-pattern-card-grid__container`
   - `.wp-pattern-card-grid__grid`
   - `.wp-pattern-card-grid__empty`
3. Replace Tailwind spacing classes
4. Test responsive grid (1-2-3-4 columns)
5. Test empty state

**Acceptance Criteria:**
- [ ] Zero Tailwind spacing classes
- [ ] Grid responsive on all breakpoints
- [ ] Proper gap spacing between cards
- [ ] Empty state renders correctly

---

#### ⏳ Task 2.3: CTA Component
- [ ] **File:** `/src/app/components/patterns/CTA.tsx`
- [ ] **Tailwind Classes:** 6
- [ ] **Effort:** 1 hour
- [ ] **Priority:** Medium

**Steps:**
1. Create `/src/app/components/patterns/CTA.css`
2. Define BEM classes:
   - `.wp-pattern-cta`
   - `.wp-pattern-cta__container`
   - `.wp-pattern-cta__content`
   - `.wp-pattern-cta__heading`
   - `.wp-pattern-cta__description`
   - `.wp-pattern-cta__actions`
3. Replace Tailwind spacing classes
4. Test button layouts
5. Test responsive behavior

**Acceptance Criteria:**
- [ ] Zero Tailwind spacing classes
- [ ] CTA sections properly spaced
- [ ] Button groups aligned
- [ ] Background colors from CSS variables

---

#### ⏳ Task 2.4: EditorialContent Component
- [ ] **File:** `/src/app/components/patterns/EditorialContent.tsx`
- [ ] **Tailwind Classes:** 7
- [ ] **Effort:** 1 hour
- [ ] **Priority:** Medium

**Steps:**
1. Create `/src/app/components/patterns/EditorialContent.css`
2. Define BEM classes:
   - `.wp-pattern-editorial`
   - `.wp-pattern-editorial__container`
   - `.wp-pattern-editorial__prose`
   - `.wp-pattern-editorial__image`
   - `.wp-pattern-editorial__caption`
3. Replace Tailwind spacing classes
4. Test prose styling
5. Test image layouts

**Acceptance Criteria:**
- [ ] Zero Tailwind spacing classes
- [ ] Editorial content readable
- [ ] Images properly spaced
- [ ] Typography follows design system

---

### Phase 2 Summary

**Completion Criteria:**
- [ ] All 4 pattern components migrated
- [ ] Zero Tailwind spacing classes in target files
- [ ] All patterns tested across page templates
- [ ] Visual regression tests passed

**Total Effort:** 4.5 hours  
**Target Completion:** End of Week 2

---

## 📅 Phase 3: Page Templates (Week 3)

### Objective
Migrate page-specific components (lower priority)

### Tasks

#### ⏳ Task 3.1: ComponentShowcase Page
- [ ] **File:** `/src/app/pages/ComponentShowcase.tsx`
- [ ] **Tailwind Classes:** 25
- [ ] **Effort:** 3 hours
- [ ] **Priority:** Low (dev tools page)

**Steps:**
1. Create `/src/app/pages/ComponentShowcase.css`
2. Define page-specific classes
3. Replace Tailwind spacing classes
4. Test showcase interactions

---

#### ⏳ Task 3.2: BlockDocumentation Page
- [ ] **File:** `/src/app/pages/BlockDocumentation.tsx`
- [ ] **Tailwind Classes:** 20
- [ ] **Effort:** 2.5 hours
- [ ] **Priority:** Low (documentation page)

**Steps:**
1. Create `/src/app/pages/BlockDocumentation.css`
2. Define page-specific classes
3. Replace Tailwind spacing classes
4. Test documentation layouts

---

#### ⏳ Task 3.3: Dev Tool Pages
- [ ] **Files:** Various dev tool pages
- [ ] **Tailwind Classes:** 30
- [ ] **Effort:** 4 hours
- [ ] **Priority:** Low (dev tools)

**Files:**
- SpacingScale.tsx
- ShadowScale.tsx
- RadiusSpecimens.tsx
- CardInteractions.tsx
- AnimationsShowcase.tsx
- PerformanceMonitor.tsx
- AnalyticsDashboard.tsx

**Steps:**
1. Create CSS files for each dev tool page
2. Define page-specific classes
3. Replace Tailwind spacing classes
4. Test dev tool interactions

---

### Phase 3 Summary

**Completion Criteria:**
- [ ] All page templates migrated
- [ ] Zero Tailwind spacing classes in page files
- [ ] All pages tested
- [ ] Dev tools functional

**Total Effort:** 9.5 hours  
**Target Completion:** End of Week 3

---

## 📅 Phase 4: Documentation & Validation (Week 4)

### Objective
Finalize migration, document changes, validate compliance

### Tasks

#### ⏳ Task 4.1: Automated Compliance Audit
- [ ] **Effort:** 1 hour
- [ ] **Priority:** High

**Steps:**
1. Run automated scan for Tailwind spacing classes
2. Generate compliance report
3. Identify any remaining issues
4. Fix any missed classes

**Acceptance Criteria:**
- [ ] Zero Tailwind spacing classes found
- [ ] 100% compliance score
- [ ] Automated audit passes

---

#### ⏳ Task 4.2: Component Documentation Updates
- [ ] **Effort:** 2 hours
- [ ] **Priority:** Medium

**Steps:**
1. Update component README files
2. Document new CSS class structure
3. Add migration notes
4. Update component examples

**Files to Update:**
- `/guidelines/components/TemplateBrowser.md`
- `/guidelines/components/MobileFilterSheet.md`
- `/guidelines/patterns/Hero.md`
- `/guidelines/patterns/CardGrid.md`
- `/guidelines/patterns/CTA.md`

---

#### ⏳ Task 4.3: Performance Benchmarking
- [ ] **Effort:** 30 minutes
- [ ] **Priority:** Medium

**Steps:**
1. Measure CSS bundle size (before/after)
2. Measure First Contentful Paint (FCP)
3. Measure Time to Interactive (TTI)
4. Document performance improvements

**Metrics to Track:**
- CSS bundle size reduction
- FCP improvement
- TTI improvement
- Build time reduction

---

#### ⏳ Task 4.4: Migration Completion Report
- [ ] **Effort:** 30 minutes
- [ ] **Priority:** High

**Steps:**
1. Generate final audit report
2. Document lessons learned
3. Create before/after comparison
4. Archive migration documentation

**Deliverables:**
- `/docs/SPACING-MIGRATION-COMPLETION-REPORT.md`
- `/docs/SPACING-MIGRATION-LESSONS-LEARNED.md`
- Before/after screenshots
- Performance metrics

---

### Phase 4 Summary

**Completion Criteria:**
- [ ] 100% migration compliance
- [ ] All documentation updated
- [ ] Performance metrics documented
- [ ] Completion report published

**Total Effort:** 4 hours  
**Target Completion:** End of Week 4

---

## 📊 Overall Progress Tracking

### Summary

| Phase | Components | Classes | Hours | Status |
|-------|-----------|---------|-------|--------|
| Phase 1 | 5 | 80 | 10h | 🔴 Not Started |
| Phase 2 | 4 | 31 | 4.5h | 🔴 Not Started |
| Phase 3 | 10+ | 75+ | 9.5h | 🔴 Not Started |
| Phase 4 | - | - | 4h | 🔴 Not Started |
| **TOTAL** | **19+** | **186+** | **28h** | **🔴 0% Complete** |

### Status Legend
- 🔴 Not Started
- 🟡 In Progress
- 🟢 Complete
- ✅ Verified

---

## 🎯 Success Criteria

### Component Migration Checklist (Per Component)

- [ ] External CSS file created with BEM naming
- [ ] All Tailwind spacing classes removed from JSX
- [ ] All spacing uses CSS variables (`var(--spacing-*)`)
- [ ] Component renders identically (visual regression)
- [ ] Responsive behavior maintained
- [ ] Dark mode tested and working
- [ ] No new inline styles added
- [ ] Component documentation updated

### Overall Migration Success Criteria

- [ ] 100% of targeted components migrated
- [ ] Zero Tailwind spacing classes remain
- [ ] 100% design system compliance
- [ ] CSS bundle size reduced by ~15%
- [ ] FCP improved by ~50ms
- [ ] All visual regression tests passed
- [ ] Documentation complete

---

## 🚨 Blockers & Risks

### Potential Blockers

1. **Component Dependencies**
   - Some components import other components
   - Need to migrate in dependency order

2. **Breaking Changes**
   - CSS class name changes could affect tests
   - Need to update Playwright/Jest selectors

3. **Responsive Breakpoints**
   - Some Tailwind responsive classes (md:, lg:)
   - Need to replicate with media queries

### Risk Mitigation

- **Visual Regression Testing** - Compare before/after screenshots
- **Incremental Migration** - One component at a time
- **Git Branches** - Create feature branch per phase
- **Rollback Plan** - Keep Tailwind classes until verification

---

## 📚 Resources

### Migration Guide
- `/docs/TAILWIND-TO-WORDPRESS-MIGRATION-GUIDE.md`

### Audit Report
- `/docs/SPACING-AUDIT-REPORT.md`

### Design System Reference
- `/src/styles/theme-base.css` - All spacing tokens
- `/src/styles/wordpress-classes.css` - WordPress utility classes
- `/docs/CSS-VARIABLES-COMPLETE.md` - Complete CSS variable reference

### Component Guidelines
- `/guidelines/components/` - Component-specific guidelines
- `/guidelines/patterns/` - Pattern guidelines

---

## 🎉 Next Actions

1. **Review this task list** with team
2. **Approve migration approach** (Option A or B)
3. **Assign Phase 1 tasks** to developers
4. **Set up feature branch** (`feature/tailwind-spacing-migration`)
5. **Begin Task 1.1** (TemplateBrowser component)

---

**Document Version:** 1.0  
**Last Updated:** 2026-03-13  
**Maintained By:** Development Team  
**Status:** 🔴 Awaiting Approval