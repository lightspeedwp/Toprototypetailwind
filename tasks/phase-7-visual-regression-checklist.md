# Phase 7: Visual Regression Testing Checklist

**Created:** 2026-03-13  
**Purpose:** Manual visual regression testing across all responsive breakpoints  
**Status:** ⏳ PENDING - Requires Human Verification  
**Estimated Time:** 2-3 hours

---

## 🎯 OBJECTIVE

Verify the Design System Contract implementation (Phases 1-6) has no visual regressions and the new CSS architecture performs correctly across:
- ✅ All 10 responsive breakpoints (320px → 1920px)
- ✅ Light and dark modes
- ✅ Card grid column progressions (1-6 columns)
- ✅ Zero-margin policy implementation
- ✅ Mobile-first media queries

---

## 📐 BREAKPOINT TESTING MATRIX

Test the application at each breakpoint listed below. Check for:
- Layout integrity (no overflow, broken grids, misaligned elements)
- Typography scaling (readable at all sizes)
- Image responsiveness
- Navigation functionality
- Card grid progression (correct column counts)
- Color contrast (WCAG AA minimum 4.5:1)

### Testing Tools

**Browser DevTools:**
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Select "Responsive" mode
4. Manually enter width values below

**Recommended Browsers:**
- Chrome/Edge (primary)
- Firefox (secondary)
- Safari (if available)

---

## ✅ BREAKPOINT CHECKLIST

### 1. Mobile Floor (320px) - 1 Column

- [ ] **Width:** 320px
- [ ] **Expected:** Single column layout, stacked content
- [ ] **Check:**
  - [ ] All text readable (no truncation)
  - [ ] Images scale correctly
  - [ ] Buttons touchable (44px+ target)
  - [ ] Navigation accessible (mobile menu works)
  - [ ] No horizontal scroll
  - [ ] Card grid shows 1 column

**Key Pages to Test:**
- [ ] Homepage (`/`)
- [ ] Tours Archive (`/tours`)
- [ ] Tour Single (`/tours/iceland-explorer`)
- [ ] Destinations Archive (`/destinations`)
- [ ] Blog Archive (`/blog`)

**Notes:** _______________________________________

---

### 2. Large Phone (480px) - 1-2 Column Transition

- [ ] **Width:** 480px
- [ ] **Expected:** Still mostly 1 column, some 2-column grids may start
- [ ] **Check:**
  - [ ] Layout comfortable for reading
  - [ ] Images don't pixelate
  - [ ] Card spacing appropriate
  - [ ] No awkward text wrapping

**Key Pages to Test:**
- [ ] Homepage
- [ ] Tours Archive

**Notes:** _______________________________________

---

### 3. Tablet Portrait / 2-Column Activation (640px)

- [ ] **Width:** 640px
- [ ] **Expected:** Card grids activate 2-column layout
- [ ] **Check:**
  - [ ] Card grid shows **exactly 2 columns**
  - [ ] Gap between cards appropriate
  - [ ] Typography scales up (more comfortable)
  - [ ] Navigation transitions to desktop style
  - [ ] Hero sections show proper layout

**Key Pages to Test:**
- [ ] Tours Archive (verify 2 columns)
- [ ] Destinations Archive (verify 2 columns)
- [ ] Blog Archive (verify 2 columns)
- [ ] Team Archive (verify 2 columns)

**Notes:** _______________________________________

---

### 4. Tablet Landscape (768px)

- [ ] **Width:** 768px
- [ ] **Expected:** More comfortable spacing, still 2 columns for cards
- [ ] **Check:**
  - [ ] Content not too stretched
  - [ ] Sidebar layouts (if any) work well
  - [ ] Filter panels accessible
  - [ ] Forms well-proportioned

**Key Pages to Test:**
- [ ] Tour Single (sidebar layout)
- [ ] FAQ Page (accordion layout)
- [ ] Contact Page (form layout)

**Notes:** _______________________________________

---

### 5. Desktop / 3-Column Activation (1024px)

- [ ] **Width:** 1024px
- [ ] **Expected:** Card grids activate 3-column layout
- [ ] **Check:**
  - [ ] Card grid shows **exactly 3 columns**
  - [ ] Desktop navigation fully expanded
  - [ ] Content container properly centered
  - [ ] Sidebar layouts (2-column with sidebar) activate
  - [ ] No excessive whitespace

**Key Pages to Test:**
- [ ] Tours Archive (verify 3 columns)
- [ ] Destinations Archive (verify 3 columns)
- [ ] Blog Archive (verify 3 columns)
- [ ] Homepage (sections with grids)

**Notes:** _______________________________________

---

### 6. Large Desktop / 4-Column Activation (1280px)

- [ ] **Width:** 1280px
- [ ] **Expected:** Card grids activate 4-column layout
- [ ] **Check:**
  - [ ] Card grid shows **exactly 4 columns**
  - [ ] Content feels balanced (not too wide)
  - [ ] Typography remains readable
  - [ ] Images scale appropriately
  - [ ] Footer sections well-distributed

**Key Pages to Test:**
- [ ] Tours Archive (verify 4 columns)
- [ ] Destinations Archive (verify 4 columns)
- [ ] Accommodation Archive (verify 4 columns)

**Notes:** _______________________________________

---

### 7. XL Desktop / 5-Column Activation (1440px)

- [ ] **Width:** 1440px
- [ ] **Expected:** Card grids activate 5-column layout
- [ ] **Check:**
  - [ ] Card grid shows **exactly 5 columns**
  - [ ] Container max-width (1600px) not reached yet
  - [ ] Content well-proportioned
  - [ ] No layout shifts
  - [ ] Sticky elements (filters, sidebar) work correctly

**Key Pages to Test:**
- [ ] Tours Archive (verify 5 columns)
- [ ] Destinations Archive (verify 5 columns)
- [ ] Specials Archive (verify 5 columns)

**Notes:** _______________________________________

---

### 8. Container Max-Width Boundary (1600px)

- [ ] **Width:** 1600px
- [ ] **Expected:** Container hits max-width, content centered with equal margins
- [ ] **Check:**
  - [ ] Container max-width active (`var(--container-max-width)`)
  - [ ] Content centered with equal left/right whitespace
  - [ ] Card grid still 5 columns
  - [ ] Background colors extend full width
  - [ ] No visual issues at boundary

**Key Pages to Test:**
- [ ] Homepage (verify centered container)
- [ ] Tours Archive
- [ ] Any page with full-width backgrounds

**Notes:** _______________________________________

---

### 9. XXL Desktop / 6-Column Activation (1680px)

- [ ] **Width:** 1680px
- [ ] **Expected:** Card grids activate 6-column layout (maximum)
- [ ] **Check:**
  - [ ] Card grid shows **exactly 6 columns**
  - [ ] Container still centered (max-width 1600px)
  - [ ] Layout feels spacious but not sparse
  - [ ] Cards still readable (not too small)
  - [ ] Equal margins on left/right

**Key Pages to Test:**
- [ ] Tours Archive (verify 6 columns)
- [ ] Destinations Archive (verify 6 columns)
- [ ] Reviews Archive (verify 6 columns)

**Notes:** _______________________________________

---

### 10. Design Ceiling (1920px)

- [ ] **Width:** 1920px
- [ ] **Expected:** Same as 1680px (no further breakpoints), generous margins
- [ ] **Check:**
  - [ ] Card grid still 6 columns (maximum)
  - [ ] Container still centered (max-width 1600px)
  - [ ] Generous left/right whitespace
  - [ ] Background colors/images scale appropriately
  - [ ] No layout issues at maximum width

**Key Pages to Test:**
- [ ] Homepage
- [ ] Any archive page
- [ ] Any single page

**Notes:** _______________________________________

---

## 🌓 DARK MODE TESTING

Test **light mode** and **dark mode** at 3 key breakpoints:

### Breakpoints to Test:
1. **Mobile (640px)**
2. **Tablet (1024px)**
3. **Desktop (1440px)**

### What to Check:

- [ ] **Theme switcher works** (toggle between light/dark)
- [ ] **Colors invert correctly** (no broken colors)
- [ ] **Text remains readable** (sufficient contrast)
- [ ] **Images look appropriate** (no harsh white backgrounds)
- [ ] **Shadows/borders visible** (not lost in dark background)
- [ ] **Focus states visible** (ring-ring color appropriate)
- [ ] **Logo switches correctly** (dark logo in light mode, light logo in dark mode)

### WCAG AA Contrast Verification

Use browser DevTools or online contrast checker:
- [ ] **Body text vs background:** ≥ 4.5:1 (WCAG AA)
- [ ] **Heading text vs background:** ≥ 4.5:1
- [ ] **Link text vs background:** ≥ 4.5:1
- [ ] **Button text vs button background:** ≥ 4.5:1
- [ ] **Icon vs background:** ≥ 3:1 (large graphics)

**Per recent audit:** All contrast ratios should already be ≥ 7:1 (exceeds WCAG AA)

**Tools:**
- Chrome DevTools: Inspect element → Contrast ratio
- Online: https://webaim.org/resources/contrastchecker/

**Notes:** _______________________________________

---

## 🔍 SPECIFIC FEATURES TO VERIFY

### Zero-Margin Policy

- [ ] **No unwanted gaps** between sections
- [ ] **Spacing via gap/padding** (not margin)
- [ ] **Consistent spacing** across all pages
- [ ] **Editorial prose margins** (EXEMPT - h2/h3/p/ul/ol) work correctly

### Card Grid Progression

Verify column counts at each breakpoint:

| Breakpoint | Expected Columns | Actual Columns |
|------------|------------------|----------------|
| 320px      | 1                | ___            |
| 640px      | 2                | ___            |
| 1024px     | 3                | ___            |
| 1280px     | 4                | ___            |
| 1440px     | 5                | ___            |
| 1680px     | 6                | ___            |

**Pages to Check:**
- Tours Archive
- Destinations Archive
- Blog Archive
- Accommodation Archive
- Team Archive
- Reviews Archive
- Specials Archive

### Mobile-First Media Queries

- [ ] **Base styles apply first** (mobile styles at 320px without media query)
- [ ] **Progressive enhancement** (features add at larger breakpoints)
- [ ] **No desktop-first queries** (`max-width` should not exist except in exempt files)
- [ ] **Smooth transitions** between breakpoints (no jarring layout shifts)

### Container Max-Width

- [ ] **Container max-width:** 1600px (`var(--container-max-width)`)
- [ ] **Centered at wide viewports** (1600px+)
- [ ] **Equal left/right margins** (at 1600px+)
- [ ] **Full-width backgrounds** extend edge-to-edge

### Sticky Elements

- [ ] **Header sticky** at all breakpoints
- [ ] **Filter panels sticky** (on archive pages at desktop)
- [ ] **Sidebar sticky** (on single pages at desktop)
- [ ] **Table of Contents sticky** (on single pages)
- [ ] **Back-to-top button** appears on scroll

### Navigation

- [ ] **Mobile menu** (< 1024px)
  - [ ] Hamburger icon visible
  - [ ] Menu opens/closes smoothly
  - [ ] Links accessible
  - [ ] Dark mode switcher in menu
- [ ] **Desktop navigation** (≥ 1024px)
  - [ ] Horizontal menu visible
  - [ ] Dropdowns work (if applicable)
  - [ ] Dark mode switcher in header
  - [ ] Search accessible

---

## 🧪 AUTOMATED CHECKS (Optional - Browser Console)

In Figma Make environment, automated audits run in browser console:

### 1. Performance Monitor
```javascript
// Automatically runs in dev mode (check browser console)
// Look for: "Performance Monitor Results"
```

### 2. Compliance Scorecard
```javascript
// Automatically runs in dev mode (check browser console)
// Look for: "Compliance Scorecard Report"
// Target: 90%+ in all categories
```

### 3. Contrast Auditor
```javascript
// Automatically runs in dev mode (check browser console)
// Look for: "Contrast Audit Report"
// Target: 100% WCAG AA compliance
```

**Check Console for:**
- [ ] Performance metrics (FCP, LCP, FID, CLS)
- [ ] Compliance scores (typography, semantic HTML, spacing)
- [ ] Contrast ratios (all text/background pairs)
- [ ] Any warnings or errors

---

## 📊 COMPLETION CRITERIA

Phase 7 is **COMPLETE** when:

- ✅ All 10 breakpoints tested (320px → 1920px)
- ✅ Light and dark modes verified at 3 key breakpoints
- ✅ Card grid column progression correct (1-6 columns)
- ✅ Zero visual regressions identified
- ✅ WCAG AA contrast verified (≥ 4.5:1)
- ✅ Sticky elements work correctly
- ✅ Navigation functional at all breakpoints
- ✅ Container max-width correct (1600px, centered at wider viewports)
- ✅ Zero margin policy verified
- ✅ Mobile-first queries working correctly
- ✅ No horizontal scroll at any breakpoint
- ✅ All automated audits passing (console checks)

---

## 📝 FINDINGS LOG

**Use this section to document any issues found during testing:**

### Issue #1
- **Breakpoint:** _______
- **Page:** _______
- **Description:** _______
- **Severity:** Critical / High / Medium / Low
- **Action Required:** _______

### Issue #2
- **Breakpoint:** _______
- **Page:** _______
- **Description:** _______
- **Severity:** Critical / High / Medium / Low
- **Action Required:** _______

_(Add more as needed)_

---

## 🎉 SIGN-OFF

**Tester Name:** _______________________  
**Date Completed:** _______________________  
**Status:** ✅ PASS / ⚠️ PASS WITH MINOR ISSUES / ❌ FAIL  

**Notes:** _______________________________________

---

## 🔗 RELATED DOCUMENTS

- **Audit Report:** `/reports/2026-03-03-design-system-contract-audit.md`
- **Task List:** `/tasks/design-system-contract-tasks.md`
- **Design Tokens:** `/guidelines/design-tokens/`
- **CSS Files:** `/src/styles/`
- **Card Grid CSS:** `/src/styles/patterns/card-grid.css` (v2.0.0)

---

**When testing is complete, mark Phase 7 tasks as complete in `/tasks/design-system-contract-tasks.md` and update `/tasks/task-list.md` to reflect 100% completion of Design System Contract Audit.**
