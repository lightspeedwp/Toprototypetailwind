# Breadcrumbs CSS Fix - February 25, 2026

## ❌ ISSUE IDENTIFIED

**Problem:** Breadcrumbs styles were broken  
**Root Cause:** Missing CSS file for WordPress BEM breadcrumbs pattern  
**Component:** `/src/app/components/patterns/BreadcrumbsPattern.tsx`

### What Was Missing:
- **CSS File:** `/src/styles/patterns/breadcrumbs.css` did not exist
- **Import:** CSS file was not imported in `global.css`

### What Existed:
- **Component:** BreadcrumbsPattern.tsx uses `.wp-pattern-breadcrumbs__*` classes ✅
- **Old CSS:** `/src/styles/breadcrumbs.css` uses `.breadcrumb-*` classes (different naming) ❌

---

## ✅ SOLUTION IMPLEMENTED

### 1. Created WordPress BEM CSS File

**File:** `/src/styles/patterns/breadcrumbs.css`  
**Lines:** 160+ lines of comprehensive styling

**Classes Defined:**
- `.wp-pattern-breadcrumbs` - Container with background and border
- `.wp-pattern-breadcrumbs__list` - Horizontal flex list
- `.wp-pattern-breadcrumbs__item` - Individual breadcrumb item
- `.wp-pattern-breadcrumbs__link` - Clickable link with hover states
- `.wp-pattern-breadcrumbs__current` - Current page indicator
- `.wp-pattern-breadcrumbs__current--active` - Active state styling
- `.wp-pattern-breadcrumbs__home` - Home icon wrapper
- `.wp-pattern-breadcrumbs__home-icon` - Home icon styling
- `.wp-pattern-breadcrumbs__separator` - Text separator
- `.wp-pattern-breadcrumbs__separator-icon` - Icon separator (chevron)

### 2. Updated Global CSS Imports

**File:** `/src/styles/global.css`  
**Change:** Added breadcrumbs import in navigation patterns section

```css
/* Navigation Patterns */
@import './patterns/mobile-menu.css';
@import './patterns/taxonomy-nav.css';
@import './patterns/breadcrumbs.css'; /* NEW */
```

---

## 🎨 CSS FEATURES

### Design System Compliance:
- ✅ **CSS Variables Only:** All colors, typography, spacing use `var(--*)`
- ✅ **Font Family:** Noto Sans via `var(--font-family-noto-sans)`
- ✅ **Font Sizes:** `var(--text-sm)` (14px), `var(--text-xs)` (12px on mobile)
- ✅ **Colors:** Semantic tokens (muted, foreground, primary, border)
- ✅ **Spacing:** Fluid gaps and padding
- ✅ **Dark Mode:** Automatic via CSS custom properties

### Visual Features:
- ✅ Horizontal flex layout with wrapping
- ✅ Muted background with border
- ✅ Hover states on links (color changes to primary)
- ✅ Focus states for accessibility (ring outline)
- ✅ Current page emphasized (medium font weight)
- ✅ Separators with reduced opacity
- ✅ Optional home icon support
- ✅ Responsive sizing on mobile (smaller text/icons)

### Accessibility:
- ✅ Focus visible outlines
- ✅ Color transitions
- ✅ Proper contrast ratios
- ✅ Semantic HTML support (nav, ol, li)
- ✅ aria-hidden on decorative icons

---

## 📋 BREADCRUMBS COMPONENT USAGE

The BreadcrumbsPattern component now has full styling support:

```tsx
<BreadcrumbsPattern
  items={[
    { label: "Home", href: "/", onClick: () => navigateTo("home-page") },
    { label: "Special Offers", isCurrent: true }
  ]}
  showHomeIcon={true}  // Optional home icon (default: true)
  separator="chevron"  // chevron | slash | arrow (default: chevron)
/>
```

### Props Supported:
- **items** - Array of breadcrumb items (label, href, onClick, isCurrent)
- **showHomeIcon** - Display home icon for first item (default: true)
- **separator** - Separator style: 'chevron' | 'slash' | 'arrow' (default: 'chevron')
- **className** - Optional additional CSS classes

---

## 🧪 TESTING CHECKLIST

### Visual Testing:
- [ ] **Light Mode:** Verify breadcrumbs display with correct background
- [ ] **Dark Mode:** Verify breadcrumbs adapt to dark theme
- [ ] **Home Icon:** Verify home icon displays when showHomeIcon={true}
- [ ] **Separators:** Verify chevron separators display between items
- [ ] **Current Page:** Verify last item is styled as current (medium weight, no link)
- [ ] **Hover States:** Verify links change to primary color on hover
- [ ] **Focus States:** Verify keyboard focus ring appears

### Responsive Testing:
- [ ] **Mobile (< 640px):** Verify smaller font size (12px) and icons (14px)
- [ ] **Tablet (640px - 1024px):** Verify standard font size (14px)
- [ ] **Desktop (> 1024px):** Verify standard font size (14px)
- [ ] **Wrapping:** Verify breadcrumbs wrap nicely on narrow screens

### Functional Testing:
- [ ] **Click Links:** Verify onClick handlers fire correctly
- [ ] **Navigation:** Verify href links work if onClick not provided
- [ ] **Accessibility:** Verify keyboard navigation works (Tab to focus, Enter to activate)
- [ ] **Screen Reader:** Verify aria-label="Breadcrumb" on nav element

---

## 📊 IMPACT

### Before:
- ❌ Breadcrumbs had no styling (broken)
- ❌ CSS file missing
- ❌ Classes not defined

### After:
- ✅ Breadcrumbs fully styled
- ✅ CSS file created (160+ lines)
- ✅ All classes defined
- ✅ Design system compliant
- ✅ Dark mode support
- ✅ Responsive
- ✅ Accessible

### Files Changed:
1. **Created:** `/src/styles/patterns/breadcrumbs.css` (160 lines)
2. **Updated:** `/src/styles/global.css` (1 import added)

### No Component Changes:
- ✅ **BreadcrumbsPattern.tsx** - No changes needed (already using correct classes)
- ✅ **SpecialsArchive.tsx** - No changes needed (already using component correctly)

---

## ✅ RESOLUTION

**Status:** ✅ **FIXED**  
**Time:** 10 minutes  
**Root Cause:** Missing CSS file  
**Solution:** Created WordPress BEM CSS file and imported it

The breadcrumbs should now display correctly on all pages including SpecialsArchive.tsx. The styling uses CSS custom properties from the design system and supports automatic dark mode switching.

---

**Notes:**
- Old `/src/styles/breadcrumbs.css` file still exists but uses different class names (`.breadcrumb-*`)
- New `/src/styles/patterns/breadcrumbs.css` uses WordPress BEM naming (`.wp-pattern-breadcrumbs__*`)
- Component already used correct WordPress BEM classes - only CSS file was missing
- No need to restart dev server - CSS is hot-reloaded automatically
