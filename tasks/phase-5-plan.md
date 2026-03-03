# 📋 PHASE 5 PLAN - TEMPLATE PARTS MIGRATION

**Date:** February 24, 2026  
**Session:** WordPress BEM CSS Migration - Phase 5  
**Status:** 📝 **PLANNING**

---

## 🎯 **PHASE 5 OBJECTIVE**

Migrate the 2 template parts (Header and Footer) to use WordPress BEM CSS, completing the full architecture migration.

---

## 📊 **TEMPLATE PARTS AUDIT**

### **Files Identified:**

1. **Header.tsx** - Main site header (active)
2. **Footer.tsx** - Main site footer (active)
3. HeaderNew.tsx - Alternative header (backup/experimental)
4. FooterNew.tsx - Alternative footer (backup/experimental)
5. MobileMenu.tsx - Mobile menu (may need review)

**Focus:** Migrate Header.tsx and Footer.tsx (the active template parts)

---

## 🔍 **HEADER.TSX ANALYSIS**

**Current State:**
- **Size:** Large (~550+ lines)
- **Complexity:** High
- **Features:**
  - Sticky header with scroll behavior
  - Desktop navigation with mega menus
  - Mobile menu integration
  - Search functionality (overlay/modal)
  - Dark mode toggle
  - Logo integration
  - Multiple sub-components (NavigationBlock, SearchBlock)

**CSS Usage:**
- Uses Tailwind utility classes throughout
- Inline class composition with cn()
- Responsive breakpoints (lg:, md:, sm:)
- Dynamic classes based on state (isScrolled, activeMenu)

**Components Used:**
- Logo (common component)
- MobileMenuPattern (pattern component)
- NavigationBlock (sub-component)
- SearchBlock (sub-component)
- Multiple lucide-react icons

**Migration Complexity:** ⭐⭐⭐⭐ HIGH

---

## 🔍 **FOOTER.TSX ANALYSIS**

**Current State:**
- **Size:** Medium (~350+ lines)
- **Complexity:** Medium
- **Features:**
  - Multi-column navigation (4 columns)
  - Newsletter signup form
  - Social media links
  - Contact information
  - Legal links and copyright
  - Developer tools access (template browser link)

**CSS Usage:**
- Uses Tailwind utility classes
- Grid layout (4 columns → responsive)
- Form elements (newsletter signup)
- Social icon buttons

**Components Used:**
- Logo (common component)
- Container (common component)
- Multiple lucide-react icons

**Migration Complexity:** ⭐⭐⭐ MEDIUM-HIGH

---

## 📋 **MIGRATION STRATEGY**

### **Approach A: Full Migration (Recommended)**

**Pros:**
- Complete consistency with pattern components
- Full BEM CSS architecture
- Centralized styling
- Easy to maintain

**Cons:**
- Higher time investment (~60-90 minutes total)
- More complex due to size

**Steps:**
1. Create `/src/styles/parts/header.css` (BEM classes)
2. Create `/src/styles/parts/footer.css` (BEM classes)
3. Update Header.tsx to use `.wp-part-header__*` classes
4. Update Footer.tsx to use `.wp-part-footer__*` classes
5. Test all interactive features (menus, search, forms)
6. Verify responsive behavior
7. Test dark mode

---

### **Approach B: Partial Migration**

**Pros:**
- Faster (~30-40 minutes)
- Focus on main structure only

**Cons:**
- Inconsistent with rest of codebase
- Sub-components still using Tailwind

**Steps:**
1. Migrate only outer structure and main layout
2. Leave sub-components (NavigationBlock, SearchBlock) as-is
3. Update only top-level classes

---

### **Approach C: Skip for Now**

**Pros:**
- Move directly to Phase 6 (verification)
- Template parts already work well

**Cons:**
- Incomplete migration
- Won't have full BEM CSS consistency

---

## 💡 **RECOMMENDATION**

**Go with Approach A: Full Migration**

**Why:**
- We've come this far - let's complete it!
- Headers and footers are critical UI elements
- Consistency across entire codebase
- Better maintainability long-term
- Worth the time investment (~60-90 minutes)

---

## 📝 **FULL MIGRATION PLAN**

### **Step 1: Header Migration (40-50 minutes)**

**1.1. Create CSS File**
- `/src/styles/parts/header.css`
- Define BEM classes: `.wp-part-header__*`
- Sections: wrapper, inner, logo, nav, actions, mobile-menu

**1.2. Update Header.tsx**
- Replace Tailwind classes with BEM classes
- Header wrapper: `.wp-part-header`
- Inner container: `.wp-part-header__inner`
- Logo area: `.wp-part-header__logo`
- Desktop nav: `.wp-part-header__nav`
- Actions area: `.wp-part-header__actions`
- Theme toggle: `.wp-part-header__theme-toggle`
- Search: `.wp-part-header__search`
- Mobile toggle: `.wp-part-header__mobile-toggle`
- State modifiers: `--scrolled`, `--menu-open`

**1.3. Sub-components**
- NavigationBlock: `.wp-part-header__navigation__*`
- SearchBlock: `.wp-part-header__search__*`
- Mega menu: `.wp-part-header__mega-menu__*`

---

### **Step 2: Footer Migration (20-30 minutes)**

**2.1. Create CSS File**
- `/src/styles/parts/footer.css`
- Define BEM classes: `.wp-part-footer__*`
- Sections: wrapper, top, columns, newsletter, bottom, legal

**2.2. Update Footer.tsx**
- Replace Tailwind classes with BEM classes
- Footer wrapper: `.wp-part-footer`
- Top section: `.wp-part-footer__top`
- Columns: `.wp-part-footer__columns`
- Column: `.wp-part-footer__column`
- Newsletter: `.wp-part-footer__newsletter`
- Social links: `.wp-part-footer__social`
- Bottom section: `.wp-part-footer__bottom`
- Legal links: `.wp-part-footer__legal`
- Copyright: `.wp-part-footer__copyright`

---

### **Step 3: Testing (10-15 minutes)**

**3.1. Functional Testing**
- Desktop navigation (all menu items work)
- Mega menus (hover, click interactions)
- Mobile menu (open/close, navigation)
- Search (open, close, submit)
- Dark mode toggle (persist to localStorage)
- Newsletter signup (form submission)
- All footer links work

**3.2. Visual Testing**
- Layout matches original design
- Responsive breakpoints work correctly
- Dark mode styles applied correctly
- Hover states work
- Focus states visible (accessibility)

**3.3. Accessibility Testing**
- Keyboard navigation works
- ARIA labels present
- Focus indicators visible
- Screen reader friendly

---

## ⏱️ **TIME ESTIMATE**

**Header Migration:** 40-50 minutes  
**Footer Migration:** 20-30 minutes  
**Testing:** 10-15 minutes  
**Total:** **70-95 minutes** (~1h 15min - 1h 35min)

---

## ✅ **COMPLETION CRITERIA**

- [ ] Header.tsx uses WordPress BEM CSS (`.wp-part-header__*`)
- [ ] Footer.tsx uses WordPress BEM CSS (`.wp-part-footer__*`)
- [ ] All Tailwind classes replaced with BEM classes
- [ ] `/src/styles/parts/header.css` created
- [ ] `/src/styles/parts/footer.css` created
- [ ] All interactive features working (menus, search, forms)
- [ ] Responsive design working (desktop, tablet, mobile)
- [ ] Dark mode working correctly
- [ ] Zero visual regressions
- [ ] Zero breaking changes
- [ ] 100% backward compatible

---

## 📈 **PROJECT IMPACT**

**After Phase 5 Completion:**
- ✅ **23 components migrated** (21 patterns + 2 parts)
- ✅ **100% WordPress BEM CSS architecture**
- ✅ **Full design system compliance**
- ✅ **Unified codebase structure**
- ✅ **Production-ready**

---

## 🎯 **NEXT STEPS**

**Option 1: Proceed with Full Migration** 🎯 **RECOMMENDED**
- Start with Header.tsx migration
- Then Footer.tsx migration
- Complete testing
- Move to Phase 6 (Final Verification)

**Option 2: Partial Migration**
- Quick structure-only migration
- Leave sub-components as-is

**Option 3: Skip to Phase 6**
- Move directly to final verification
- Accept incomplete template parts migration

---

## 💭 **DECISION NEEDED**

**Which approach would you like to pursue?**

1. **Full Migration** - Complete BEM CSS for Header and Footer (~70-95 min)
2. **Partial Migration** - Structure only (~30-40 min)
3. **Skip to Phase 6** - Final verification and testing

**My Recommendation:** **Option 1 - Full Migration**

We've achieved 100% migration for all pattern components. Let's complete the architecture by migrating the template parts too! It's worth the investment for long-term consistency and maintainability.

---

**Status:** **AWAITING DECISION** 🤔  
**Ready to proceed with:** Full Header + Footer Migration 🚀
