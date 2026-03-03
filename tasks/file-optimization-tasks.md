# File Optimization and Refactoring Tasks

**Date Created:** March 1, 2026  
**Based on:** `/reports/2026-03-01-file-optimization-audit.md`  
**Priority Order:** High → Medium → Low  
**Estimated Total Time:** 15-20 days

---

## Quick Navigation

- [Phase 1: High Priority (Critical)](#phase-1-high-priority-critical)
- [Phase 2: Medium Priority (Important)](#phase-2-medium-priority-important)
- [Phase 3: Low Priority (Cleanup)](#phase-3-low-priority-cleanup)
- [Testing and Validation](#testing-and-validation)
- [Progress Tracking](#progress-tracking)

---

## Phase 1: High Priority (Critical)

**Timeline:** Week 1 (5 days)  
**Focus:** Major file splits, duplicate code extraction

### Task Group 1.1: Split HomePage.tsx (HP-1)

**Estimated Time:** 4-6 hours  
**Complexity:** Medium  
**Impact:** 73% reduction in main file size

- [ ] **Step 1.1.1:** Create new folder `/src/app/components/patterns/homepage/`
  
- [ ] **Step 1.1.2:** Extract `SectionHeader` internal component to `/src/app/components/common/SectionHeader.tsx`
  - Move the `SectionHeader` function from HomePage.tsx
  - Add proper TypeScript interfaces
  - Add JSDoc documentation
  - Export as named export
  
- [ ] **Step 1.1.3:** Create `/src/app/components/patterns/homepage/FeaturedToursSection.tsx`
  - Extract Featured Tours section logic from HomePage.tsx (lines ~193-224)
  - Accept props: `tours`, `section`, `onNavigate`
  - Use `SectionHeader` component
  - Add WordPress BEM class: `.wp-template-home__tours`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.4:** Create `/src/app/components/patterns/homepage/DestinationsSection.tsx`
  - Extract Destinations section logic from HomePage.tsx (lines ~230-262)
  - Accept props: `destinations`, `section`, `onNavigate`
  - Use `SectionHeader` component
  - Add WordPress BEM class: `.wp-template-home__destinations`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.5:** Create `/src/app/components/patterns/homepage/WhyChooseUsSection.tsx`
  - Extract Why Choose Us section logic from HomePage.tsx (lines ~268-281)
  - Accept props: `features`, `section`
  - Use `WhyChooseUsPattern` component
  - Add WordPress BEM class: `.wp-template-home__features`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.6:** Create `/src/app/components/patterns/homepage/StatisticsSection.tsx`
  - Extract Statistics section logic from HomePage.tsx (lines ~287-301)
  - Accept props: `statistics`, `section`
  - Use `StatisticsMetricsPattern` component
  - Add WordPress BEM class: `.wp-template-home__statistics`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.7:** Create `/src/app/components/patterns/homepage/AccommodationSection.tsx`
  - Extract Accommodation section logic from HomePage.tsx (lines ~307-339)
  - Accept props: `accommodation`, `section`, `onNavigate`
  - Use `SectionHeader` component
  - Add WordPress BEM class: `.wp-template-home__accommodation`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.8:** Create `/src/app/components/patterns/homepage/TeamSection.tsx`
  - Extract Team section logic from HomePage.tsx (lines ~345-376)
  - Accept props: `team`, `section`, `onNavigate`
  - Use `SectionHeader` component
  - Add WordPress BEM class: `.wp-template-home__team`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.9:** Create `/src/app/components/patterns/homepage/TestimonialsSection.tsx`
  - Extract Testimonials section logic from HomePage.tsx (lines ~382-426)
  - Accept props: `reviews`, `section`, `onNavigate`
  - Add WordPress BEM class: `.wp-template-home__testimonials`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.10:** Create `/src/app/components/patterns/homepage/BlogSection.tsx`
  - Extract Blog section logic from HomePage.tsx (lines ~432-467)
  - Accept props: `posts`, `section`, `onNavigate`
  - Add WordPress BEM class: `.wp-template-home__blog`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.11:** Create `/src/app/components/patterns/homepage/NewsletterSection.tsx`
  - Extract Newsletter section logic from HomePage.tsx (lines ~485-498)
  - Accept props: `newsletter`, `onSubmit`
  - Use `NewsletterSignupPattern` component
  - Add WordPress BEM class: `.wp-template-home__newsletter`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.12:** Create `/src/app/components/patterns/homepage/FinalCTASection.tsx`
  - Extract Final CTA section logic from HomePage.tsx (lines ~504-532)
  - Accept props: `cta`, `onNavigate`
  - Add WordPress BEM class: `.wp-template-home__cta`
  - Add JSDoc documentation
  
- [ ] **Step 1.1.13:** Create `/src/app/components/patterns/homepage/index.ts` barrel file
  - Re-export all homepage section components
  - Add module-level JSDoc
  
- [ ] **Step 1.1.14:** Refactor `/src/app/pages/HomePage.tsx` to use new section components
  - Import all section components
  - Replace inline section JSX with component calls
  - Maintain existing functionality
  - Verify all props are passed correctly
  - Target: Reduce from 572 lines to ~150 lines
  
- [ ] **Step 1.1.15:** Test HomePage after refactor
  - Verify visual output is identical
  - Test all navigation links
  - Test all button interactions
  - Verify mobile responsiveness
  - Check browser console for errors

**Acceptance Criteria:**
- ✅ HomePage.tsx reduced from 572 to <200 lines
- ✅ 10 new section components created
- ✅ All section components use WordPress BEM classes
- ✅ No visual changes to rendered output
- ✅ All functionality maintained
- ✅ JSDoc documentation added to all new components

---

### Task Group 1.2: Extract Common Section Patterns (HP-2)

**Estimated Time:** 3-4 hours  
**Complexity:** Low-Medium  
**Impact:** Remove ~500 lines of duplicate code

- [ ] **Step 1.2.1:** Create `/src/app/components/common/ViewAllButton.tsx`
  - Extract the repeated "View All" button pattern
  - Accept props: `label`, `href`, `onClick`, `variant` (default: "primary")
  - Use WordPress BEM class: `.wp-view-all`
  - Add icon: `<ArrowRight />` positioned right
  - Add JSDoc documentation
  
- [ ] **Step 1.2.2:** Update HomePage section components to use `ViewAllButton`
  - Replace inline button JSX in all 6 sections
  - Pass appropriate props
  - Verify visual consistency
  
- [ ] **Step 1.2.3:** Update `ToursArchive.tsx` to use `ViewAllButton`
  - Replace "View All" button instances
  - Test functionality
  
- [ ] **Step 1.2.4:** Update `DestinationsArchive.tsx` to use `ViewAllButton`
  - Replace "View All" button instances
  - Test functionality
  
- [ ] **Step 1.2.5:** Create `/src/app/components/patterns/FeaturedSection.tsx`
  - Generic wrapper for "featured content" sections
  - Accept props:
    - `className` (section wrapper class)
    - `header` (section header data)
    - `items` (array of items to render)
    - `gridClassName` (grid layout class)
    - `renderCard` (function to render each item)
    - `viewAll` (optional view all button config)
  - Use generic type: `<T extends { id: string }>`
  - Add JSDoc documentation with usage examples
  
- [ ] **Step 1.2.6:** Refactor `FeaturedToursSection.tsx` to use `FeaturedSection` wrapper
  - Simplify component logic
  - Pass `renderCard` function for `TourCardPattern`
  - Verify functionality
  
- [ ] **Step 1.2.7:** Refactor `DestinationsSection.tsx` to use `FeaturedSection` wrapper
  - Simplify component logic
  - Pass `renderCard` function for `DestinationCard`
  - Verify functionality
  
- [ ] **Step 1.2.8:** Refactor `AccommodationSection.tsx` to use `FeaturedSection` wrapper
  - Simplify component logic
  - Pass `renderCard` function for `AccommodationCard`
  - Verify functionality
  
- [ ] **Step 1.2.9:** Test all refactored sections
  - Verify visual consistency
  - Test navigation interactions
  - Check responsive behavior
  - Verify WordPress BEM classes maintained

**Acceptance Criteria:**
- ✅ `ViewAllButton` component created and used in 10+ places
- ✅ `FeaturedSection` wrapper component created
- ✅ At least 3 homepage sections refactored to use `FeaturedSection`
- ✅ ~500 lines of duplicate code removed
- ✅ All functionality maintained
- ✅ JSDoc documentation added

---

### Task Group 1.3: Split types.ts into Domain Files (HP-3)

**Estimated Time:** 2-3 hours  
**Complexity:** Low  
**Impact:** Improved organization, better import performance

- [ ] **Step 1.3.1:** Create new folder `/src/app/data/types/`
  
- [ ] **Step 1.3.2:** Create `/src/app/data/types/common.ts`
  - Move shared interfaces: `Image`, `Link`, `FAQ`, `CTAButton`, `SectionHeader`, etc.
  - Add module-level JSDoc
  - Export all interfaces
  
- [ ] **Step 1.3.3:** Create `/src/app/data/types/tours.ts`
  - Move tour-related interfaces: `Tour`, `TourItinerary`, `TourInclusion`, `TourCategory`, etc.
  - Import from `common.ts` as needed
  - Add module-level JSDoc
  - Export all interfaces
  
- [ ] **Step 1.3.4:** Create `/src/app/data/types/destinations.ts`
  - Move destination-related interfaces: `Destination`, `Region`, `Country`, `Continent`, etc.
  - Import from `common.ts` as needed
  - Add module-level JSDoc
  - Export all interfaces
  
- [ ] **Step 1.3.5:** Create `/src/app/data/types/accommodation.ts`
  - Move accommodation-related interfaces: `Accommodation`, `AccommodationType`, `RoomType`, etc.
  - Import from `common.ts` as needed
  - Add module-level JSDoc
  - Export all interfaces
  
- [ ] **Step 1.3.6:** Create `/src/app/data/types/blog.ts`
  - Move blog-related interfaces: `BlogPost`, `BlogCategory`, `BlogAuthor`, etc.
  - Import from `common.ts` as needed
  - Add module-level JSDoc
  - Export all interfaces
  
- [ ] **Step 1.3.7:** Create `/src/app/data/types/reviews.ts`
  - Move review-related interfaces: `Review`, `ReviewCategory`, etc.
  - Import from `common.ts` as needed
  - Add module-level JSDoc
  - Export all interfaces
  
- [ ] **Step 1.3.8:** Create `/src/app/data/types/team.ts`
  - Move team-related interfaces: `TeamMember`, `TeamRole`, etc.
  - Import from `common.ts` as needed
  - Add module-level JSDoc
  - Export all interfaces
  
- [ ] **Step 1.3.9:** Create `/src/app/data/types/index.ts` barrel file
  - Re-export all type modules
  - Add module-level JSDoc
  - Maintain backward compatibility
  
- [ ] **Step 1.3.10:** Update `/src/app/data/types.ts` to re-export from `/types/`
  - Add deprecation notice in JSDoc
  - Re-export everything from `/types/index.ts`
  - Do NOT delete (maintain backward compatibility)
  
- [ ] **Step 1.3.11:** Update imports in data files to use new type locations
  - Update `/src/app/data/tours.ts`
  - Update `/src/app/data/destinations/*/`
  - Update `/src/app/data/accommodation.ts`
  - Update other data files as needed
  
- [ ] **Step 1.3.12:** Test TypeScript compilation
  - Run `npm run build` to verify no type errors
  - Check that all imports resolve correctly

**Acceptance Criteria:**
- ✅ `types.ts` split into 7+ domain-specific files
- ✅ All files are <200 lines
- ✅ Backward compatibility maintained via barrel file
- ✅ No TypeScript compilation errors
- ✅ All existing imports continue to work
- ✅ JSDoc documentation added to all type files

---

## Phase 2: Medium Priority (Important)

**Timeline:** Week 2 (5 days)  
**Focus:** Data organization, asset optimization, component consolidation

### Task Group 2.1: Consolidate Destinations Data Imports (MP-1)

**Estimated Time:** 1-2 hours  
**Complexity:** Low  
**Impact:** Simpler bulk imports, better discoverability

- [ ] **Step 2.1.1:** Create `/src/app/data/destinations/africa/index.ts`
  - Re-export all African destination files
  - Export arrays: `AFRICAN_DESTINATIONS`, `AFRICAN_REGIONS`
  - Add module-level JSDoc
  
- [ ] **Step 2.1.2:** Create `/src/app/data/destinations/asia/index.ts`
  - Re-export all Asian destination files
  - Export arrays: `ASIAN_DESTINATIONS`, `ASIAN_REGIONS`
  - Add module-level JSDoc
  
- [ ] **Step 2.1.3:** Create `/src/app/data/destinations/europe/index.ts`
  - Re-export all European destination files
  - Export arrays: `EUROPEAN_DESTINATIONS`, `EUROPEAN_REGIONS`
  - Add module-level JSDoc
  
- [ ] **Step 2.1.4:** Create `/src/app/data/destinations/north-america/index.ts`
  - Re-export all North American destination files
  - Export arrays: `NORTH_AMERICAN_DESTINATIONS`, `NORTH_AMERICAN_REGIONS`
  - Add module-level JSDoc
  
- [ ] **Step 2.1.5:** Create `/src/app/data/destinations/south-america/index.ts`
  - Re-export all South American destination files
  - Export arrays: `SOUTH_AMERICAN_DESTINATIONS`, `SOUTH_AMERICAN_REGIONS`
  - Add module-level JSDoc
  
- [ ] **Step 2.1.6:** Create `/src/app/data/destinations/oceania/index.ts`
  - Re-export all Oceanian destination files
  - Export arrays: `OCEANIAN_DESTINATIONS`, `OCEANIAN_REGIONS`
  - Add module-level JSDoc
  
- [ ] **Step 2.1.7:** Update `/src/app/data/destinations/index.ts`
  - Import continent aggregates
  - Export combined `ALL_DESTINATIONS` array
  - Export continent-specific arrays
  - Add module-level JSDoc
  
- [ ] **Step 2.1.8:** Test imports in destination-related pages
  - Verify `DestinationsArchive.tsx` works correctly
  - Verify continent filtering works
  - Check TypeScript compilation

**Acceptance Criteria:**
- ✅ Index files created for all 6 continents
- ✅ Continent-specific destination arrays exported
- ✅ Main index file aggregates all destinations
- ✅ Backward compatibility maintained
- ✅ JSDoc documentation added
- ✅ All imports resolve correctly

---

### Task Group 2.2: Audit and Optimize SVG Files (MP-2)

**Estimated Time:** 2-3 hours  
**Complexity:** Low  
**Impact:** Reduced file sizes, faster loading

- [ ] **Step 2.2.1:** Install SVGO CLI tool (if not installed)
  ```bash
  npm install -g svgo
  ```
  
- [ ] **Step 2.2.2:** Audit current SVG file sizes
  - Check `/src/imports/svg-*.ts` file sizes
  - Check `/public/logos/logo-*.svg` file sizes
  - Document baseline sizes
  
- [ ] **Step 2.2.3:** Optimize `/src/imports/svg-fhylgnadbp.ts`
  - Run SVGO: `svgo --multipass --pretty src/imports/svg-fhylgnadbp.ts`
  - Manually review output
  - Flatten complex paths if needed
  - Test visual output
  
- [ ] **Step 2.2.4:** Optimize `/src/imports/svg-ixljch9jtm.ts`
  - Run SVGO optimization
  - Review and test
  
- [ ] **Step 2.2.5:** Optimize `/src/imports/svg-njulugncd6.ts`
  - Run SVGO optimization
  - Review and test
  
- [ ] **Step 2.2.6:** Optimize `/src/imports/svg-wplpcom0x3.ts`
  - Run SVGO optimization
  - Review and test
  
- [ ] **Step 2.2.7:** Optimize `/src/imports/svg-urkyk.tsx`
  - Run SVGO optimization
  - Review and test (note: .tsx file, may need special handling)
  
- [ ] **Step 2.2.8:** Optimize `/public/logos/logo-dark.svg`
  - Run SVGO: `svgo --multipass --pretty public/logos/logo-dark.svg`
  - Test visual output in light mode
  
- [ ] **Step 2.2.9:** Optimize `/public/logos/logo-light.svg`
  - Run SVGO optimization
  - Test visual output in dark mode
  
- [ ] **Step 2.2.10:** Document size reductions
  - Compare before/after file sizes
  - Calculate % reduction
  - Update report

**Acceptance Criteria:**
- ✅ All SVG files optimized with SVGO
- ✅ File size reductions documented
- ✅ Visual output verified (no breaking changes)
- ✅ Dark/light mode logo switching works correctly
- ✅ All SVG imports resolve correctly

---

### Task Group 2.3: Consolidate Hero Components (MP-3)

**Estimated Time:** 2-3 hours  
**Complexity:** Medium  
**Impact:** Remove duplicate hero logic

- [ ] **Step 2.3.1:** Audit usage of `Hero.tsx` and `HeroModern.tsx`
  - Identify which pages use each component
  - Document visual/functional differences
  - Determine if consolidation is safe
  
- [ ] **Step 2.3.2:** Design unified Hero component API
  - Define props interface supporting both variants
  - Add `variant` prop: `"default"` | `"modern"`
  - Plan backward compatibility strategy
  
- [ ] **Step 2.3.3:** Update `Hero.tsx` to support both variants
  - Add variant prop with default value `"default"`
  - Extract modern variant logic from `HeroModern.tsx`
  - Use conditional rendering or className composition
  - Maintain existing CSS classes
  
- [ ] **Step 2.3.4:** Update pages using `HeroModern.tsx`
  - Replace imports: `import { Hero } from "..."`
  - Add `variant="modern"` prop
  - Test visual output
  
- [ ] **Step 2.3.5:** Deprecate `HeroModern.tsx`
  - Add deprecation notice in JSDoc
  - Keep file for backward compatibility (do not delete yet)
  - Plan future removal date
  
- [ ] **Step 2.3.6:** Update Hero CSS files
  - Ensure both variants supported in `/src/styles/patterns/hero.css`
  - Add variant-specific classes if needed
  - Test responsive behavior
  
- [ ] **Step 2.3.7:** Test all pages with Hero component
  - HomePage
  - ToursArchive
  - DestinationsArchive
  - Other archive pages
  - Verify visual consistency

**Acceptance Criteria:**
- ✅ Single Hero component supports both variants
- ✅ All pages using Hero/HeroModern updated
- ✅ No visual changes to rendered output
- ✅ Backward compatibility maintained
- ✅ `HeroModern.tsx` deprecated with notice
- ✅ CSS properly supports both variants

---

### Task Group 2.4: Extract ToursArchive Filter Logic (MP-4)

**Estimated Time:** 3-4 hours  
**Complexity:** Medium  
**Impact:** Reusable filter logic across archive pages

- [ ] **Step 2.4.1:** Audit filter logic in `ToursArchive.tsx`
  - Identify filter state management
  - Identify filter UI components
  - Document filter types (taxonomy, search, sort, etc.)
  
- [ ] **Step 2.4.2:** Create `/src/app/hooks/useTourFilters.ts` custom hook
  - Extract filter state management logic
  - Return: `{ filters, setFilter, resetFilters, filteredTours }`
  - Accept: initial tour list, initial filter state
  - Add JSDoc documentation
  
- [ ] **Step 2.4.3:** Create `/src/app/components/patterns/TourFilterPanel.tsx` component
  - Extract filter UI from ToursArchive.tsx
  - Accept props: `filters`, `onFilterChange`, `taxonomies`
  - Use WordPress BEM class: `.wp-pattern-tour-filter-panel`
  - Add JSDoc documentation
  
- [ ] **Step 2.4.4:** Refactor `ToursArchive.tsx` to use new hook and component
  - Import `useTourFilters` hook
  - Import `TourFilterPanel` component
  - Replace inline logic with hook/component calls
  - Verify functionality
  
- [ ] **Step 2.4.5:** Apply same pattern to `DestinationsArchive.tsx` (if applicable)
  - Create `useDestinationFilters` hook
  - Create `DestinationFilterPanel` component
  - Refactor page
  
- [ ] **Step 2.4.6:** Apply same pattern to `AccommodationArchive.tsx` (if applicable)
  - Create `useAccommodationFilters` hook
  - Create `AccommodationFilterPanel` component
  - Refactor page
  
- [ ] **Step 2.4.7:** Create CSS file for filter panel
  - Create `/src/styles/patterns/filter-panel.css`
  - Add WordPress BEM classes
  - Import in global.css
  
- [ ] **Step 2.4.8:** Test filter functionality across all archive pages
  - Test taxonomy filters
  - Test search filters
  - Test sort functionality
  - Test filter reset
  - Verify mobile responsive behavior

**Acceptance Criteria:**
- ✅ `useTourFilters` hook created and documented
- ✅ `TourFilterPanel` component created and documented
- ✅ ToursArchive.tsx refactored to use new hook/component
- ✅ Similar pattern applied to other archive pages
- ✅ All filter functionality maintained
- ✅ CSS follows WordPress BEM conventions
- ✅ Mobile responsiveness maintained

---

## Phase 3: Low Priority (Cleanup)

**Timeline:** Week 3 (5 days)  
**Focus:** CSS cleanup, minor consolidations, import consistency

### Task Group 3.1: Audit CSS for Unused Rules (LP-1)

**Estimated Time:** 2-3 hours  
**Complexity:** Low  
**Impact:** Slightly smaller CSS bundles

- [ ] **Step 3.1.1:** Install PurgeCSS (if not installed)
  ```bash
  npm install -D @fullhuman/postcss-purgecss
  ```
  
- [ ] **Step 3.1.2:** Configure PurgeCSS for analysis
  - Add to PostCSS config (analysis mode, not production mode)
  - Set content paths: all `.tsx` files
  - Set CSS paths: all `.css` files
  
- [ ] **Step 3.1.3:** Run PurgeCSS analysis
  ```bash
  npm run build -- --analyze-css
  ```
  - Document unused selectors
  - Categorize by file
  
- [ ] **Step 3.1.4:** Review unused CSS rules manually
  - Verify they are truly unused
  - Check for dynamic class generation
  - Document false positives
  
- [ ] **Step 3.1.5:** Remove confirmed unused CSS rules
  - Remove unused selectors from CSS files
  - Document changes in commit message
  
- [ ] **Step 3.1.6:** Test visual output after CSS cleanup
  - Check all major pages
  - Verify no visual regressions
  - Check responsive layouts
  
- [ ] **Step 3.1.7:** Document CSS size reduction
  - Measure before/after sizes
  - Calculate % reduction
  - Update report

**Acceptance Criteria:**
- ✅ PurgeCSS analysis completed
- ✅ Unused CSS rules identified and documented
- ✅ Confirmed unused rules removed
- ✅ No visual regressions
- ✅ CSS size reduction documented

---

### Task Group 3.2: Consolidate Logo Components (LP-2)

**Estimated Time:** 1 hour  
**Complexity:** Low  
**Impact:** Slight code reduction

- [ ] **Step 3.2.1:** Audit usage of `Logo.tsx` and `LogoSVG.tsx`
  - Search codebase for imports
  - Document where each is used
  - Determine if both are necessary
  
- [ ] **Step 3.2.2:** Review functional differences
  - `Logo.tsx` - Image-based with light/dark switching
  - `LogoSVG.tsx` - Inline SVG component
  - Decide if consolidation is appropriate
  
- [ ] **Step 3.2.3:** If consolidation is appropriate:
  - Merge functionality into single component
  - Support both image and SVG modes via prop
  - Update all import references
  - Test light/dark mode switching
  
- [ ] **Step 3.2.4:** If both are needed:
  - Document reason in component JSDoc
  - Ensure clear naming distinction
  - Add usage guidelines
  
- [ ] **Step 3.2.5:** Test logo display across site
  - Header logo
  - Footer logo
  - Light/dark mode switching
  - Mobile responsive behavior

**Acceptance Criteria:**
- ✅ Logo component usage audited
- ✅ Decision made: consolidate or keep separate
- ✅ If consolidated: single Logo component works correctly
- ✅ If kept separate: clear documentation added
- ✅ All logo displays work correctly

---

### Task Group 3.3: Verify Import Path Consistency (LP-3)

**Estimated Time:** 1-2 hours  
**Complexity:** Low  
**Impact:** Improved code style consistency

- [ ] **Step 3.3.1:** Audit import patterns across codebase
  - Check for absolute vs relative imports
  - Check for inconsistent relative path depths
  - Document any anomalies
  
- [ ] **Step 3.3.2:** Verify all imports use relative paths (per guidelines)
  - No absolute paths (e.g., `/src/app/...`)
  - No webpack aliases (e.g., `@/...`)
  - Correct relative paths from file location
  
- [ ] **Step 3.3.3:** Fix any inconsistent import paths
  - Update to relative paths
  - Use consistent `../` depth
  - Test that imports resolve correctly
  
- [ ] **Step 3.3.4:** Check for circular dependencies
  - Use `madge` or similar tool
  - Document any circular dependencies found
  - Refactor if necessary
  
- [ ] **Step 3.3.5:** Verify barrel file usage
  - Ensure `index.ts` files used appropriately
  - Check for over-use or under-use
  - Document any issues
  
- [ ] **Step 3.3.6:** Test TypeScript compilation
  - Run `npm run build`
  - Verify no import errors
  - Check bundle size

**Acceptance Criteria:**
- ✅ All imports use relative paths (per guidelines)
- ✅ No absolute paths or aliases used
- ✅ No circular dependencies found
- ✅ Barrel files used appropriately
- ✅ TypeScript compiles without errors
- ✅ No bundle size regressions

---

## Testing and Validation

### Test Checklist (After Each Phase)

- [ ] **Visual Regression Testing**
  - [ ] Homepage renders correctly
  - [ ] All archive pages render correctly
  - [ ] All single pages render correctly
  - [ ] Dark mode switching works
  - [ ] Responsive layouts work (mobile, tablet, desktop)
  
- [ ] **Functional Testing**
  - [ ] Navigation links work
  - [ ] Filter functionality works (archive pages)
  - [ ] Sort functionality works
  - [ ] Search functionality works
  - [ ] Button interactions work
  - [ ] Form submissions work
  
- [ ] **Performance Testing**
  - [ ] Build time (compare before/after)
  - [ ] Bundle size (compare before/after)
  - [ ] Page load time (measure key pages)
  - [ ] Memory usage (check browser DevTools)
  
- [ ] **Code Quality Testing**
  - [ ] TypeScript compilation (no errors)
  - [ ] ESLint passes (no errors)
  - [ ] No console errors in browser
  - [ ] No console warnings in browser
  
- [ ] **Accessibility Testing**
  - [ ] Keyboard navigation works
  - [ ] Screen reader compatibility
  - [ ] WCAG AA compliance maintained
  - [ ] Focus indicators visible

---

## Progress Tracking

### Phase 1 Progress (High Priority)

| Task Group | Status | Completed | Notes |
|------------|--------|-----------|-------|
| 1.1: Split HomePage.tsx | ⏳ Not Started | 0/15 steps | Target: 150 lines |
| 1.2: Extract Common Patterns | ⏳ Not Started | 0/9 steps | Remove 500+ lines |
| 1.3: Split types.ts | ⏳ Not Started | 0/12 steps | Create 7+ files |

### Phase 2 Progress (Medium Priority)

| Task Group | Status | Completed | Notes |
|------------|--------|-----------|-------|
| 2.1: Destinations Data | ⏳ Not Started | 0/8 steps | Add 6 index files |
| 2.2: SVG Optimization | ⏳ Not Started | 0/10 steps | Use SVGO |
| 2.3: Hero Consolidation | ⏳ Not Started | 0/7 steps | Single component |
| 2.4: Filter Extraction | ⏳ Not Started | 0/8 steps | Reusable hook |

### Phase 3 Progress (Low Priority)

| Task Group | Status | Completed | Notes |
|------------|--------|-----------|-------|
| 3.1: CSS Audit | ⏳ Not Started | 0/7 steps | Use PurgeCSS |
| 3.2: Logo Consolidation | ⏳ Not Started | 0/5 steps | Review usage |
| 3.3: Import Consistency | ⏳ Not Started | 0/6 steps | Check relative paths |

### Overall Progress

- **Total Tasks:** 81 steps across 10 task groups
- **Completed:** 0 (0%)
- **In Progress:** 0
- **Not Started:** 81 (100%)
- **Estimated Time:** 15-20 days
- **Target Completion:** March 22, 2026

---

## Success Metrics (Targets)

### Quantitative Targets

- [ ] Reduce `HomePage.tsx` from 572 to <200 lines **(73% reduction)**
- [ ] Remove 500+ lines of duplicate code **(~14% overall reduction)**
- [ ] Split `types.ts` into 7+ domain files **(improve organization)**
- [ ] Add 10+ reusable components/hooks **(improve reusability)**
- [ ] Optimize all SVG files **(size reduction TBD after analysis)**
- [ ] Reduce CSS imports from 30+ to 25-28 **(~10% reduction)**

### Qualitative Targets

- [ ] All page files follow single responsibility principle
- [ ] No duplicate section header logic across pages
- [ ] Improved import performance for data files
- [ ] Better component discoverability
- [ ] Maintained WordPress architectural alignment
- [ ] All styling continues to use CSS variables only
- [ ] No inline styles or hardcoded values introduced

---

## Notes

### Important Reminders

- ✅ **Maintain WordPress BEM Classes** - All refactoring must preserve BEM class names
- ✅ **Use CSS Variables Only** - No hardcoded colors, fonts, spacing
- ✅ **Relative Imports** - Always use relative paths, no absolute or aliases
- ✅ **Backward Compatibility** - Use barrel files and deprecation notices
- ✅ **Test After Each Step** - Verify no breaking changes before moving to next step
- ✅ **Document Changes** - Update JSDoc and guidelines as needed

### Known Issues

- Some pattern components may have inline styling that needs to be moved to CSS
- DestinationsArchive has multiple versions (Simple, Enhanced, Test) that may need consolidation
- Some CSS files may have overlapping rules that need deduplication

### Future Considerations

- Consider implementing automated visual regression testing
- Consider implementing bundle size monitoring in CI/CD
- Consider implementing CSS metrics tracking (unused rules, duplicate selectors)
- Consider creating a component library documentation site

---

**Task List End**  
**Next Action:** Begin Phase 1, Task Group 1.1 (Split HomePage.tsx)
