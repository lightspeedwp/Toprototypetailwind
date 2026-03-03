# HomePage JSX Migration Guide

**Date:** February 24, 2026  
**Component:** `/src/app/pages/HomePage.tsx`  
**CSS File:** `/src/styles/templates/home.css`  
**Status:** Ready to migrate  

---

## 📋 MIGRATION OVERVIEW

This guide demonstrates how to migrate the HomePage component from **Tailwind utility classes** to **WordPress BEM classes** using the CSS we created.

**Key Principles:**
- Replace Tailwind classes with `.wp-template-home__*` classes
- Keep CSS variable usage (already correct)
- Maintain font families (already using Lora & Noto Sans)
- Preserve responsive behavior
- Zero visual changes

---

## 🔍 CURRENT STATE ANALYSIS

### **What's Already Correct** ✅

1. **Semantic HTML** - Using proper elements (main, section, h2, p)
2. **CSS Variables** - Theme colors via Tailwind classes (bg-primary, text-muted-foreground)
3. **Font Families** - Lora for headings, Noto Sans for body (via theme.css)
4. **Data-Driven** - All content from mock data
5. **Responsive** - Grid layouts respond to breakpoints

### **What Needs Migration** 🔄

1. **Section wrappers** - Replace generic `section` with `.wp-template-home__tours`, etc.
2. **Grid layouts** - Replace `grid grid-cols-* gap-6` with `.wp-template-home__tours-grid`
3. **Section headers** - Replace inline classes with `.wp-template-home__section-header`
4. **Spacing classes** - Replace `mb-12`, `mt-12` with CSS class spacing
5. **Button wrappers** - Replace `text-center mt-12` with `.wp-template-home__view-all`

---

## 📝 MIGRATION CHECKLIST

### **HomePage Sections to Migrate:**

- [ ] Main wrapper (`<main>`) → `.wp-template-home`
- [ ] Hero section → Already uses Hero component (no change)
- [ ] Featured Tours section → `.wp-template-home__tours`
- [ ] Destinations section → `.wp-template-home__destinations`
- [ ] Why Choose Us section → `.wp-template-home__features`
- [ ] Statistics section → `.wp-template-home__statistics`
- [ ] Accommodation section → `.wp-template-home__accommodation`
- [ ] Team section → `.wp-template-home__team`
- [ ] Testimonials section → `.wp-template-home__testimonials`
- [ ] Blog section → `.wp-template-home__blog`
- [ ] FAQ section → `.wp-template-home__faq`
- [ ] Newsletter section → `.wp-template-home__newsletter`
- [ ] CTA section → `.wp-template-home__cta`

---

## 🔧 MIGRATION EXAMPLES

### **Example 1: Main Wrapper**

#### **BEFORE (Tailwind)**
```tsx
<main className="min-h-screen">
  {/* sections */}
</main>
```

#### **AFTER (WordPress CSS)**
```tsx
<main className="wp-template-home">
  {/* sections */}
</main>
```

**CSS in home.css:**
```css
.wp-template-home {
  min-height: 100vh;
  background-color: var(--background);
  color: var(--foreground);
}
```

---

### **Example 2: Section Wrapper (Destinations)**

#### **BEFORE (Tailwind)**
```tsx
<section className="section-card-grid-alternate bg-primary/5">
  <Container>
    {/* content */}
  </Container>
</section>
```

#### **AFTER (WordPress CSS)**
```tsx
<section className="wp-template-home__destinations">
  <Container>
    {/* content */}
  </Container>
</section>
```

**CSS in home.css:**
```css
.wp-template-home__destinations {
  padding-block: var(--spacing-section-md);
  background-color: rgba(var(--primary), 0.05);
}
```

**Notes:**
- `section-card-grid-alternate` → `.wp-template-home__destinations`
- `bg-primary/5` → CSS handles background
- Container stays the same (common component)

---

### **Example 3: Grid Layout (Tours)**

#### **BEFORE (Tailwind)**
```tsx
<CardGrid columns={3}>
  {featuredTours.map((tour) => (
    <TourCardPattern key={tour.id} tour={tour} />
  ))}
</CardGrid>
```

#### **AFTER (WordPress CSS)**
```tsx
<div className="wp-template-home__tours-grid">
  {featuredTours.map((tour) => (
    <TourCardPattern key={tour.id} tour={tour} />
  ))}
</div>
```

**CSS in home.css:**
```css
.wp-template-home__tours-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .wp-template-home__tours-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .wp-template-home__tours-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Notes:**
- `CardGrid columns={3}` → `<div className="wp-template-home__tours-grid">`
- Responsive breakpoints defined in CSS
- Same visual result, cleaner JSX

---

### **Example 4: Section Header (Inline)**

#### **BEFORE (Tailwind)**
```tsx
<div className="text-center mb-12">
  <h2 className="mb-4">{testimonialsSection.title}</h2>
  <p className="text-muted-foreground max-w-2xl mx-auto">
    {testimonialsSection.description}
  </p>
</div>
```

#### **AFTER (WordPress CSS)**
```tsx
<div className="wp-template-home__section-header">
  <h2 className="wp-template-home__section-title">
    {testimonialsSection.title}
  </h2>
  <p className="wp-template-home__section-description">
    {testimonialsSection.description}
  </p>
</div>
```

**CSS in home.css:**
```css
.wp-template-home__section-header {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 48rem;
  margin-inline: auto;
}

.wp-template-home__section-title {
  font-family: var(--font-family-lora);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  color: var(--foreground);
  margin-bottom: 1rem;
}

.wp-template-home__section-description {
  font-family: var(--font-family-noto-sans);
  font-size: var(--text-lg);
  color: var(--muted-foreground);
  line-height: var(--leading-relaxed);
}
```

**Notes:**
- `text-center mb-12` → `.wp-template-home__section-header`
- `mb-4` on h2 → `.wp-template-home__section-title` (has margin-bottom)
- `text-muted-foreground max-w-2xl mx-auto` → `.wp-template-home__section-description`

---

### **Example 5: View All Button**

#### **BEFORE (Tailwind)**
```tsx
<div className="text-center mt-12">
  <Button
    variant="primary"
    size="default"
    onClick={() => nav(toursSection.viewAllHref!)}
    icon={<ArrowRight className="w-4 h-4" />}
    iconPosition="right"
  >
    {toursSection.viewAllLabel}
  </Button>
</div>
```

#### **AFTER (WordPress CSS)**
```tsx
<div className="wp-template-home__view-all">
  <Button
    variant="primary"
    size="default"
    onClick={() => nav(toursSection.viewAllHref!)}
    icon={<ArrowRight className="w-4 h-4" />}
    iconPosition="right"
  >
    {toursSection.viewAllLabel}
  </Button>
</div>
```

**CSS in home.css:**
```css
.wp-template-home__view-all {
  text-align: center;
  margin-top: 3rem;
}
```

**Notes:**
- `text-center mt-12` → `.wp-template-home__view-all`
- Button component stays the same (uses its own CSS)
- Icon sizing (`w-4 h-4`) stays the same (Tailwind utilities for icons are OK)

---

### **Example 6: CTA Section**

#### **BEFORE (Tailwind)**
```tsx
<section className="section-cta-primary">
  <Container>
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="mb-4">{cta.title}</h2>
      <p className="mb-8 opacity-95">{cta.description}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* buttons */}
      </div>
    </div>
  </Container>
</section>
```

#### **AFTER (WordPress CSS)**
```tsx
<section className="wp-template-home__cta">
  <Container>
    <div className="wp-template-home__section-header">
      <h2 className="wp-template-home__section-title">{cta.title}</h2>
      <p className="wp-template-home__section-description opacity-95">
        {cta.description}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        {/* buttons */}
      </div>
    </div>
  </Container>
</section>
```

**CSS in home.css:**
```css
.wp-template-home__cta {
  padding-block: var(--spacing-section-lg);
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.wp-template-home__cta .wp-template-home__section-title,
.wp-template-home__cta .wp-template-home__section-description {
  color: var(--primary-foreground);
}
```

**Notes:**
- `section-cta-primary` → `.wp-template-home__cta`
- Section header classes applied
- Layout utilities (`flex`, `gap-4`) stay for button arrangement
- CTA section has special color override in CSS

---

## 🎯 COMPLETE MIGRATION PATTERN

### **Standard Section Pattern**

Every section follows this structure:

```tsx
<section className="wp-template-home__[section-name]">
  <Container>
    {/* Option A: Use SectionHeader component */}
    <SectionHeader section={sectionData} icon={Icon} />
    
    {/* Option B: Inline header */}
    <div className="wp-template-home__section-header">
      <h2 className="wp-template-home__section-title">{title}</h2>
      <p className="wp-template-home__section-description">{description}</p>
    </div>
    
    {/* Grid layout */}
    <div className="wp-template-home__[section-name]-grid">
      {items.map((item) => <Card key={item.id} item={item} />)}
    </div>
    
    {/* View all button (if applicable) */}
    <div className="wp-template-home__view-all">
      <Button onClick={handleViewAll}>View All</Button>
    </div>
  </Container>
</section>
```

**Available Sections:**
- `__tours` - Tours section
- `__destinations` - Destinations section
- `__features` - Why Choose Us section
- `__statistics` - Statistics section
- `__accommodation` - Accommodation section
- `__team` - Team section
- `__testimonials` - Testimonials section
- `__blog` - Blog section
- `__faq` - FAQ section
- `__newsletter` - Newsletter section
- `__cta` - Final CTA section

**Available Grids:**
- `__tours-grid` - 3 columns
- `__destinations-grid` - 4 columns
- `__accommodation-grid` - 3 columns
- `__team-grid` - 4 columns
- `__testimonials-grid` - 3 columns
- `__blog-grid` - 3 columns

---

## 🚧 MIGRATION WORKFLOW

### **Step-by-Step Process**

1. **Create a backup** (optional, but recommended)
   ```bash
   cp /src/app/pages/HomePage.tsx /src/app/pages/HomePage.backup.tsx
   ```

2. **Migrate section by section**
   - Start with main wrapper
   - Move to first section (Tours)
   - Test in browser after each section
   - Continue through all sections

3. **Test after each change**
   - Save file
   - Check browser (should hot reload)
   - Verify section looks correct
   - Check responsive behavior
   - Test dark mode

4. **Remove backup when complete**
   ```bash
   rm /src/app/pages/HomePage.backup.tsx
   ```

---

## ⚠️ WHAT TO KEEP (DON'T CHANGE)

### **Keep These Tailwind Classes:**

✅ **Layout utilities for small elements:**
- `flex`, `items-center`, `justify-center`, `gap-4`
- Useful for button groups, icon+text combinations

✅ **Icon sizing:**
- `w-4 h-4`, `w-5 h-5`, `w-6 h-6`
- Icons need explicit sizing

✅ **Responsive utilities (when needed):**
- `hidden md:block`, `md:flex`, `lg:grid-cols-4`
- Use when CSS doesn't provide specific responsive class

✅ **Utility overrides:**
- `opacity-95`, `max-w-3xl`
- One-off adjustments that don't warrant a CSS class

✅ **Component-specific classes:**
- Classes from components (Button, Hero, CardGrid)
- These components manage their own styling

---

## 🎨 VISUAL REGRESSION CHECKLIST

After migration, verify these visuals match original:

### **Layout & Spacing**
- [ ] Section spacing consistent (padding-block)
- [ ] Grid gaps correct (1.5rem)
- [ ] Section header margins (mb-12 → 3rem)
- [ ] View all button margins (mt-12 → 3rem)

### **Typography**
- [ ] Section titles: Lora, 2xl/4xl, semibold
- [ ] Section descriptions: Noto Sans, lg, muted color
- [ ] Line heights: tight (titles), relaxed (descriptions)

### **Colors**
- [ ] Section backgrounds alternate correctly
- [ ] CTA section: primary background, light text
- [ ] Text colors: foreground, muted-foreground
- [ ] Hover states work

### **Responsive**
- [ ] Mobile: 1 column grids
- [ ] Tablet: 2 column grids
- [ ] Desktop: 3-4 column grids as specified
- [ ] Section padding scales with viewport

### **Dark Mode**
- [ ] All sections switch colors
- [ ] Text remains readable
- [ ] Backgrounds use semantic tokens
- [ ] No hardcoded colors remain

---

## 📊 BEFORE/AFTER COMPARISON

### **Code Complexity**

**Before (Tailwind):**
```tsx
<section className="section-card-grid-default">
  <Container>
    <div className="text-center mb-12">
      <h2 className="mb-4">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => <Card key={item.id} />)}
    </div>
    <div className="text-center mt-12">
      <Button>View All</Button>
    </div>
  </Container>
</section>
```

**After (WordPress CSS):**
```tsx
<section className="wp-template-home__tours">
  <Container>
    <div className="wp-template-home__section-header">
      <h2 className="wp-template-home__section-title">{title}</h2>
      <p className="wp-template-home__section-description">
        {description}
      </p>
    </div>
    <div className="wp-template-home__tours-grid">
      {items.map((item) => <Card key={item.id} />)}
    </div>
    <div className="wp-template-home__view-all">
      <Button>View All</Button>
    </div>
  </Container>
</section>
```

**Benefits:**
- ✅ More semantic class names
- ✅ Easier to understand structure
- ✅ Responsive behavior in CSS (not JSX)
- ✅ Centralized styling
- ✅ WordPress-aligned naming

---

## 🎯 SUCCESS CRITERIA

Migration is successful if:

### ✅ **Visual Fidelity**
- [ ] Zero visual changes
- [ ] All sections look identical
- [ ] Spacing matches exactly
- [ ] Colors unchanged
- [ ] Typography unchanged

### ✅ **Functionality**
- [ ] All buttons work
- [ ] Navigation works
- [ ] Dark mode toggle works
- [ ] Responsive behavior maintained
- [ ] No console errors

### ✅ **Code Quality**
- [ ] Semantic class names throughout
- [ ] Reduced className complexity
- [ ] WordPress BEM pattern used
- [ ] No inline styles
- [ ] No hardcoded values

### ✅ **Performance**
- [ ] Page loads same speed
- [ ] No layout shifts
- [ ] Smooth interactions
- [ ] CSS file size reasonable

---

## 🔍 TESTING CHECKLIST

After migration, test:

### **Desktop (1440px)**
- [ ] All sections visible
- [ ] Grids display correct columns
- [ ] Spacing looks good
- [ ] No overflow

### **Tablet (768px)**
- [ ] Grids collapse to 2 columns
- [ ] Section spacing scales
- [ ] Text remains readable

### **Mobile (375px)**
- [ ] Grids collapse to 1 column
- [ ] Section spacing appropriate
- [ ] Buttons remain tappable (44px)
- [ ] No horizontal scroll

### **Dark Mode**
- [ ] Toggle in header works
- [ ] All sections update
- [ ] Text readable
- [ ] Contrast good

### **Interactions**
- [ ] Hover states work
- [ ] Focus states visible (Tab key)
- [ ] Buttons clickable
- [ ] Navigation works

---

## 💡 PRO TIPS

### **Tip 1: Migrate Section by Section**
Don't try to migrate the entire file at once. Do one section, test, then move to the next.

### **Tip 2: Keep Browser Open**
Hot reload will show changes immediately. Watch for visual breaks.

### **Tip 3: Use DevTools**
Inspect elements to see which CSS classes are applied and what styles they provide.

### **Tip 4: Compare Side by Side**
Open two browser windows: one with old code, one with new. Compare visually.

### **Tip 5: Document Issues**
If something doesn't look right, note it down with a screenshot. Debug later.

### **Tip 6: Use Git**
Commit after each successful section migration. Easy to rollback if needed.

---

## 🚀 NEXT STEPS

After HomePage migration:

1. **Test thoroughly** (all breakpoints, dark mode)
2. **Document any issues** found
3. **Fix issues** before moving on
4. **Migrate next page** (choose from archives or singles)
5. **Repeat process** until all pages migrated

**Recommended Order:**
1. ✅ HomePage (complex, good reference)
2. ToursArchive (uses generic + specific CSS)
3. TourSingle (uses generic + specific CSS)
4. AboutPage (utility page)
5. All other archives (generic CSS)
6. All other singles (generic CSS)
7. All other utility pages (generic CSS)

---

## 📞 HELP & RESOURCES

### **Documentation**
- **Quick Start Guide:** `/tasks/QUICK-START-WORDPRESS-CLASSES.md`
- **HomePage CSS:** `/src/styles/templates/home.css`
- **Testing Guide:** `/tasks/CSS-TESTING-GUIDE.md`

### **CSS Class Reference**
All available classes documented in home.css:
- Section wrappers: `__tours`, `__destinations`, etc.
- Grid layouts: `__tours-grid`, `__destinations-grid`, etc.
- Section headers: `__section-header`, `__section-title`, etc.
- View all buttons: `__view-all`

### **Debugging**
- Browser DevTools → Elements tab
- Inspect element → See applied CSS classes
- Computed tab → See final CSS values
- Network tab → Verify CSS files loaded

---

## ✨ FINAL NOTES

This migration demonstrates the power of WordPress-aligned CSS classes:

**Before:** Scattered utility classes throughout JSX  
**After:** Semantic, reusable CSS classes with centralized styling

**Benefits:**
- ✅ Easier to maintain
- ✅ More readable code
- ✅ Better WordPress alignment
- ✅ Centralized styling
- ✅ Responsive behavior in CSS

**The migration preserves:**
- ✅ 100% visual fidelity
- ✅ All functionality
- ✅ Design system compliance
- ✅ Dark mode support
- ✅ Responsive behavior

---

**Migration Guide Status:** ✅ COMPLETE  
**Ready to Migrate:** YES  
**Estimated Time:** 30-45 minutes  
**Difficulty:** Medium  

**Good luck with the migration! 🚀**
