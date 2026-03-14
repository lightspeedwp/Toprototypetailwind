# Tailwind to WordPress CSS Migration Guide

**Version:** 2.0  
**Last Updated:** 2026-03-13  
**Status:** Active Migration

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Why Migrate?](#why-migrate)
3. [Design System Tokens](#design-system-tokens)
4. [Migration Patterns](#migration-patterns)
5. [Class Conversion Reference](#class-conversion-reference)
6. [Practical Examples](#practical-examples)
7. [Component Migration Checklist](#component-migration-checklist)
8. [Common Pitfalls](#common-pitfalls)

---

## Overview

This guide provides a comprehensive approach to migrating from Tailwind CSS utility classes to WordPress-aligned CSS classes that use design system tokens.

### Key Principles

1. **CSS Variables Only** - All styling uses CSS variables from `theme-base.css`
2. **WordPress Naming** - Follow WordPress block editor conventions (`.has-*`, `.wp-block-*`, `.is-*`)
3. **Semantic HTML** - Use proper HTML elements instead of div soup
4. **Zero Hardcoded Values** - Everything references design system tokens
5. **BEM for Components** - Component-specific styling uses BEM methodology

---

## Why Migrate?

### Benefits of WordPress-Aligned CSS

✅ **User Customization** - Users can customize entire site by editing 3 CSS files  
✅ **Design System Compliance** - Enforces consistent styling via tokens  
✅ **WordPress Compatibility** - Direct mapping to `theme.json` presets  
✅ **Automatic Dark Mode** - CSS variables handle light/dark mode automatically  
✅ **No Build Step** - Pure CSS, no PostCSS/Tailwind compilation required  
✅ **Better Performance** - Smaller CSS bundle, no utility class bloat  
✅ **Maintainability** - Single source of truth for design tokens

### Limitations of Tailwind in This Context

❌ **Hardcoded Values** - `p-4` compiles to `padding: 1rem` (not customizable)  
❌ **No User Control** - Users can't edit design without rebuilding  
❌ **Dark Mode Classes** - `dark:` prefix adds complexity and duplication  
❌ **Not WordPress Native** - Doesn't align with `theme.json` standards  
❌ **Build Dependency** - Requires PostCSS compilation step

---

## Design System Tokens

### Available CSS Variables

All tokens are defined in `/src/styles/theme-base.css`:

#### Spacing Tokens

```css
/* Section Spacing (large vertical spacing) */
--spacing-section-sm: 2rem;    /* 32px  - Small section */
--spacing-section-md: 4rem;    /* 64px  - Medium section */
--spacing-section-lg: 6rem;    /* 96px  - Large section */
--spacing-section-xl: 8rem;    /* 128px - Extra large section */

/* Gap Spacing (flexbox/grid gaps) */
--spacing-gap-xs: 0.5rem;      /* 8px   - Tight gap */
--spacing-gap-sm: 1rem;        /* 16px  - Small gap */
--spacing-gap-md: 1.5rem;      /* 24px  - Medium gap */
--spacing-gap-lg: 2rem;        /* 32px  - Large gap */
--spacing-gap-xl: 2.5rem;      /* 40px  - Extra large gap */

/* Element Spacing (padding/margin for components) */
--spacing-element-xs: 0.5rem;  /* 8px   - Tight spacing, badges, chips */
--spacing-element-sm: 0.75rem; /* 12px  - Small buttons, compact cards */
--spacing-element-md: 1rem;    /* 16px  - Standard buttons, cards, forms */
--spacing-element-lg: 1.5rem;  /* 24px  - Large cards, sections */
--spacing-element-xl: 2rem;    /* 32px  - Feature sections, hero blocks */
--spacing-element-2xl: 3rem;   /* 48px  - Major sections */
--spacing-element-3xl: 4rem;   /* 64px  - Page sections */

/* Container Padding (responsive) */
--spacing-container-sm: 1rem;   /* Mobile */
--spacing-container-md: 1.5rem; /* Tablet */
--spacing-container-lg: 2rem;   /* Desktop */
```

#### Typography Tokens

```css
/* Font Families */
--font-family-lora: 'Lora', serif;           /* Headings, labels */
--font-family-noto-sans: 'Noto Sans', sans-serif; /* Body text */
--font-family-mono: 'Courier New', monospace; /* Code blocks */

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px - Base font size */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Font Weights */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

#### Color Tokens

All colors are defined in `theme-light.css` and `theme-dark.css`:

```css
/* Semantic Colors (automatically switch for dark mode) */
--background        /* Page background */
--foreground        /* Primary text color */
--card              /* Card background */
--card-foreground   /* Card text */
--primary           /* Brand color */
--primary-foreground /* Text on primary */
--secondary         /* Secondary brand color */
--muted             /* Muted background */
--muted-foreground  /* Muted text */
--border            /* Border color */
--input             /* Input border */
--ring              /* Focus ring */
--accent            /* Accent color */
--destructive       /* Error/delete */
--success           /* Success state */
--warning           /* Warning state */
```

#### Border & Radius Tokens

```css
/* Border Radius */
--radius-sm: 0.125rem;  /* 2px */
--radius-md: 0.25rem;   /* 4px */
--radius-lg: 0.375rem;  /* 6px */
--radius-xl: 0.5rem;    /* 8px */
--radius: 0.375rem;     /* Default radius */
```

---

## Migration Patterns

### Pattern 1: Layout Classes

**Before (Tailwind):**
```tsx
<div className="flex flex-col gap-4 items-center justify-between">
```

**After (WordPress):**
```tsx
<div className="wp-block-lts-layout--flex wp-block-lts-layout--flex-col wp-block-lts-layout--items-center wp-block-lts-layout--justify-between has-gap-md">
```

**Or Better (External CSS):**
```tsx
// JSX
<div className="my-component">

// my-component.css
.my-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-gap-md);
}
```

### Pattern 2: Spacing Classes

**Before (Tailwind):**
```tsx
<div className="p-6 px-8 mb-4">
```

**After (WordPress Utility):**
```tsx
<div className="has-vertical-padding-lg has-horizontal-padding-xl has-margin-bottom-md">
```

**Or Better (External CSS + Design Tokens):**
```tsx
// JSX
<div className="card">

// card.css
.card {
  padding-block: var(--spacing-element-lg);   /* Vertical padding: 24px */
  padding-inline: var(--spacing-element-xl);  /* Horizontal padding: 32px */
  margin-bottom: var(--spacing-element-md);   /* Bottom margin: 16px */
}
```

### Pattern 3: Typography Classes

**Before (Tailwind):**
```tsx
<h2 className="text-4xl font-semibold leading-tight tracking-tight">
```

**After (Semantic HTML):**
```tsx
<h2>
  Semantic Heading
</h2>
```

**Why?** The `h2` element automatically gets:
- `font-size: var(--text-4xl)` → 36px
- `font-weight: var(--font-weight-semibold)` → 600
- `line-height: var(--leading-tight)` → 1.2
- `letter-spacing: var(--tracking-tight)` → -0.025em
- From `theme.css` base styles

**Override only when needed:**
```tsx
<h2 className="has-3xl-font-size">
  Slightly smaller heading
</h2>
```

### Pattern 4: Color Classes

**Before (Tailwind):**
```tsx
<div className="bg-white text-gray-900 border-gray-200">
```

**After (WordPress + CSS Variables):**
```tsx
<div className="has-card-background-color has-card-foreground-color has-border-border-color">
```

**Or Better (External CSS):**
```tsx
// JSX
<div className="card">

// card.css
.card {
  background-color: var(--card);
  color: var(--card-foreground);
  border-color: var(--border);
}
```

### Pattern 5: Responsive Classes

**Before (Tailwind):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**After (WordPress):**
```tsx
<div className="wp-block-lts-layout--grid wp-block-lts-layout--grid-cols-1 md:wp-block-lts-layout--grid-cols-2 lg:wp-block-lts-layout--grid-cols-3 has-gap-lg">
```

**Or Better (External CSS + Media Queries):**
```tsx
// JSX
<div className="grid-container">

// grid-container.css
.grid-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: var(--spacing-gap-lg);
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

---

## Class Conversion Reference

### Complete Tailwind → WordPress Mapping

#### Layout

| Tailwind | WordPress Utility | External CSS (Recommended) |
|----------|------------------|----------------------------|
| `flex` | `.wp-block-lts-layout--flex` | `display: flex;` |
| `flex-col` | `.wp-block-lts-layout--flex-col` | `flex-direction: column;` |
| `flex-row` | `.wp-block-lts-layout--flex-row` | `flex-direction: row;` |
| `items-center` | `.wp-block-lts-layout--items-center` | `align-items: center;` |
| `justify-between` | `.wp-block-lts-layout--justify-between` | `justify-content: space-between;` |
| `grid` | `.wp-block-lts-layout--grid` | `display: grid;` |
| `grid-cols-3` | `.wp-block-lts-layout--grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` |

#### Spacing - Padding

| Tailwind | WordPress Utility | CSS Variable (Recommended) |
|----------|------------------|----------------------------|
| `p-2` | `.has-padding-xs` | `padding: var(--spacing-element-xs);` |
| `p-3` | `.has-padding-sm` | `padding: var(--spacing-element-sm);` |
| `p-4` | `.has-padding-md` | `padding: var(--spacing-element-md);` |
| `p-6` | `.has-padding-lg` | `padding: var(--spacing-element-lg);` |
| `p-8` | `.has-padding-xl` | `padding: var(--spacing-element-xl);` |
| `p-12` | `.has-padding-2xl` | `padding: var(--spacing-element-2xl);` |
| `py-4` | `.has-vertical-padding-md` | `padding-block: var(--spacing-element-md);` |
| `px-6` | `.has-horizontal-padding-lg` | `padding-inline: var(--spacing-element-lg);` |
| `pt-4` | `.has-padding-top-md` | `padding-top: var(--spacing-element-md);` |
| `pb-4` | `.has-padding-bottom-md` | `padding-bottom: var(--spacing-element-md);` |

#### Spacing - Margin

| Tailwind | WordPress Utility | CSS Variable (Recommended) |
|----------|------------------|----------------------------|
| `m-2` | `.has-margin-xs` | `margin: var(--spacing-element-xs);` |
| `m-4` | `.has-margin-md` | `margin: var(--spacing-element-md);` |
| `m-6` | `.has-margin-lg` | `margin: var(--spacing-element-lg);` |
| `mb-4` | `.has-margin-bottom-md` | `margin-bottom: var(--spacing-element-md);` |
| `mt-6` | `.has-margin-top-lg` | `margin-top: var(--spacing-element-lg);` |
| `mx-auto` | `.has-horizontal-margin-auto` | `margin-inline: auto;` |
| `my-8` | `.has-vertical-margin-xl` | `margin-block: var(--spacing-element-xl);` |

#### Spacing - Gap

| Tailwind | WordPress Utility | CSS Variable (Recommended) |
|----------|------------------|----------------------------|
| `gap-2` | `.has-gap-xs` | `gap: var(--spacing-gap-xs);` |
| `gap-4` | `.has-gap-sm` | `gap: var(--spacing-gap-sm);` |
| `gap-6` | `.has-gap-md` | `gap: var(--spacing-gap-md);` |
| `gap-8` | `.has-gap-lg` | `gap: var(--spacing-gap-lg);` |
| `gap-10` | `.has-gap-xl` | `gap: var(--spacing-gap-xl);` |

#### Typography

| Tailwind | WordPress Utility | Semantic HTML (Recommended) |
|----------|------------------|----------------------------|
| `text-xs` | `.has-xs-font-size` | `<small>` or CSS: `font-size: var(--text-xs);` |
| `text-sm` | `.has-sm-font-size` | CSS: `font-size: var(--text-sm);` |
| `text-base` | `.has-base-font-size` | `<p>` (default) |
| `text-lg` | `.has-lg-font-size` | CSS: `font-size: var(--text-lg);` |
| `text-xl` | `.has-xl-font-size` | `<h5>` or CSS: `font-size: var(--text-xl);` |
| `text-2xl` | `.has-2xl-font-size` | `<h4>` or CSS: `font-size: var(--text-2xl);` |
| `text-3xl` | `.has-3xl-font-size` | `<h3>` or CSS: `font-size: var(--text-3xl);` |
| `text-4xl` | `.has-4xl-font-size` | `<h2>` or CSS: `font-size: var(--text-4xl);` |
| `text-6xl` | `.has-6xl-font-size` | `<h1>` or CSS: `font-size: var(--text-6xl);` |
| `font-normal` | `.has-normal-font-weight` | CSS: `font-weight: var(--font-weight-normal);` |
| `font-medium` | `.has-medium-font-weight` | CSS: `font-weight: var(--font-weight-medium);` |
| `font-semibold` | `.has-semibold-font-weight` | CSS: `font-weight: var(--font-weight-semibold);` |
| `font-bold` | `.has-bold-font-weight` | CSS: `font-weight: var(--font-weight-bold);` |

#### Colors

| Tailwind | WordPress Utility | CSS Variable (Recommended) |
|----------|------------------|----------------------------|
| `bg-white` | `.has-background-background-color` | `background-color: var(--background);` |
| `text-gray-900` | `.has-foreground-color` | `color: var(--foreground);` |
| `bg-gray-100` | `.has-muted-background-color` | `background-color: var(--muted);` |
| `text-gray-600` | `.has-muted-foreground-color` | `color: var(--muted-foreground);` |
| `bg-green-600` | `.has-primary-background-color` | `background-color: var(--primary);` |
| `text-green-600` | `.has-primary-color` | `color: var(--primary);` |
| `border-gray-200` | `.has-border-border-color` | `border-color: var(--border);` |

#### Border & Radius

| Tailwind | WordPress Utility | CSS Variable (Recommended) |
|----------|------------------|----------------------------|
| `border` | `.has-border` | `border: 1px solid var(--border);` |
| `border-2` | `.has-border-2` | `border-width: 2px;` |
| `rounded` | `.has-border-radius-md` | `border-radius: var(--radius);` |
| `rounded-sm` | `.has-border-radius-sm` | `border-radius: var(--radius-sm);` |
| `rounded-lg` | `.has-border-radius-lg` | `border-radius: var(--radius-lg);` |
| `rounded-xl` | `.has-border-radius-xl` | `border-radius: var(--radius-xl);` |
| `rounded-full` | `.has-border-radius-full` | `border-radius: 9999px;` |

---

## Practical Examples

### Example 1: Card Component Migration

**Before (Tailwind):**
```tsx
export function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-base text-gray-600">
        {description}
      </p>
    </div>
  );
}
```

**After (WordPress CSS + BEM):**
```tsx
// Card.tsx
import './Card.css';

export function Card({ title, description }: CardProps) {
  return (
    <div className="wp-card">
      <h3 className="wp-card__title">
        {title}
      </h3>
      <p className="wp-card__description">
        {description}
      </p>
    </div>
  );
}
```

```css
/* Card.css */
.wp-card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-element-lg);
  transition: box-shadow var(--transition-base);
}

.wp-card:hover {
  box-shadow: var(--box-shadow-sm);
}

.wp-card__title {
  /* h3 gets these automatically from theme.css: */
  /* font-size: var(--text-3xl); */
  /* font-weight: var(--font-weight-semibold); */
  /* color: var(--foreground); */
  margin-bottom: var(--spacing-element-md);
}

.wp-card__description {
  /* p gets these automatically from theme.css: */
  /* font-size: var(--text-base); */
  /* color: var(--foreground); */
  color: var(--muted-foreground); /* Override to muted */
}
```

### Example 2: Grid Layout Migration

**Before (Tailwind):**
```tsx
export function TourGrid({ tours }: TourGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
```

**After (WordPress CSS + BEM):**
```tsx
// TourGrid.tsx
import './TourGrid.css';

export function TourGrid({ tours }: TourGridProps) {
  return (
    <div className="wp-pattern-tour-grid">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
```

```css
/* TourGrid.css */
.wp-pattern-tour-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: var(--spacing-gap-lg);
  padding: var(--spacing-element-xl);
}

@media (min-width: 768px) {
  .wp-pattern-tour-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .wp-pattern-tour-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

### Example 3: Button Component Migration

**Before (Tailwind):**
```tsx
export function Button({ children, variant = 'primary' }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-colors";
  const variantClasses = variant === 'primary' 
    ? "bg-green-600 text-white hover:bg-green-700"
    : "bg-gray-200 text-gray-900 hover:bg-gray-300";
    
  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}
```

**After (WordPress CSS + BEM):**
```tsx
// Button.tsx
import './Button.css';

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`wp-button wp-button--${variant}`}>
      {children}
    </button>
  );
}
```

```css
/* Button.css */
.wp-button {
  padding-inline: var(--spacing-element-lg);
  padding-block: var(--spacing-element-sm);
  border-radius: var(--radius);
  font-family: var(--font-family-noto-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  transition: background-color var(--transition-base), color var(--transition-base);
  border: none;
  cursor: pointer;
}

.wp-button--primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.wp-button--primary:hover {
  background-color: color-mix(in srgb, var(--primary) 90%, black);
}

.wp-button--secondary {
  background-color: var(--muted);
  color: var(--muted-foreground);
}

.wp-button--secondary:hover {
  background-color: color-mix(in srgb, var(--muted) 90%, black);
}

.wp-button:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

---

## Component Migration Checklist

Use this checklist when migrating a component:

### Before Starting
- [ ] Read the component's current code
- [ ] Identify all Tailwind classes used
- [ ] Check if external CSS file exists (if not, create one)
- [ ] Review design system tokens that apply

### During Migration
- [ ] Create/update external CSS file with BEM classes
- [ ] Replace Tailwind classes with BEM classes
- [ ] Use CSS variables for all spacing values
- [ ] Use CSS variables for all colors
- [ ] Use semantic HTML where possible (h1-h6, p, etc.)
- [ ] Handle responsive breakpoints with media queries
- [ ] Test light and dark modes
- [ ] Verify no hardcoded values remain

### After Migration
- [ ] Delete all Tailwind classes from JSX
- [ ] Verify component renders identically
- [ ] Check responsive behavior
- [ ] Test dark mode
- [ ] Verify design system compliance
- [ ] Update component documentation

---

## Common Pitfalls

### Pitfall 1: Forgetting to Use CSS Variables

❌ **Wrong:**
```css
.card {
  padding: 1.5rem;
  background-color: #ffffff;
}
```

✅ **Correct:**
```css
.card {
  padding: var(--spacing-element-lg);
  background-color: var(--card);
}
```

### Pitfall 2: Overriding Semantic HTML Defaults

❌ **Wrong:**
```tsx
<h2 className="has-3xl-font-size has-medium-font-weight">
  Heading
</h2>
```

✅ **Correct:**
```tsx
<h2>Heading</h2>
<!-- Gets font-size: var(--text-4xl) and font-weight: 600 automatically -->
```

### Pitfall 3: Using Tailwind Responsive Prefixes

❌ **Wrong:**
```tsx
<div className="md:has-padding-6 lg:has-padding-8">
```

✅ **Correct:**
```css
.component {
  padding: var(--spacing-element-md);
}

@media (min-width: 768px) {
  .component {
    padding: var(--spacing-element-lg);
  }
}

@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-element-xl);
  }
}
```

### Pitfall 4: Mixing Tailwind and WordPress Classes

❌ **Wrong:**
```tsx
<div className="flex gap-4 has-padding-lg">
```

✅ **Correct:**
```tsx
<div className="wp-block-lts-layout--flex has-gap-sm has-padding-lg">
<!-- OR better: -->
<div className="my-container">
```

### Pitfall 5: Not Using BEM for Component-Specific Styles

❌ **Wrong:**
```tsx
<div className="card has-padding-lg">
  <h3 className="has-2xl-font-size">Title</h3>
  <p className="has-muted-foreground-color">Description</p>
</div>
```

✅ **Correct:**
```tsx
<div className="wp-card">
  <h3 className="wp-card__title">Title</h3>
  <p className="wp-card__description">Description</p>
</div>
```

---

## Migration Strategy

### Phase 1: High-Impact Components (Week 1)
1. Card components (TourCard, DestinationCard, BlogCard)
2. Layout components (Hero, ArchiveHeader, CardGrid)
3. Navigation components (Header, Footer, MobileMenu)

### Phase 2: Form & Interactive Components (Week 2)
4. Form components (Input, Textarea, Select, Button)
5. Modal/Dialog components
6. Filter components

### Phase 3: Utility & Page Components (Week 3)
7. Utility components (Container, Logo, BackToTopButton)
8. Page templates (single, archive, taxonomy)
9. Dev tool pages

### Phase 4: Polish & Documentation (Week 4)
10. Audit all components for compliance
11. Update component documentation
12. Generate migration report
13. Create before/after examples

---

## Quick Reference: CSS Variable Usage

### DO ✅

```css
/* Spacing */
padding: var(--spacing-element-md);
gap: var(--spacing-gap-lg);
margin-bottom: var(--spacing-element-sm);

/* Typography */
font-family: var(--font-family-lora);
font-size: var(--text-2xl);
font-weight: var(--font-weight-semibold);

/* Colors */
background-color: var(--card);
color: var(--foreground);
border-color: var(--border);

/* Border & Radius */
border-radius: var(--radius-lg);

/* Transitions */
transition: all var(--transition-base);
```

### DON'T ❌

```css
/* Hardcoded values */
padding: 16px;
gap: 1.5rem;
margin-bottom: 12px;

/* Hardcoded fonts */
font-family: "Arial", sans-serif;
font-size: 24px;
font-weight: 600;

/* Hardcoded colors */
background-color: #ffffff;
color: #333333;
border-color: #e5e5e5;

/* Hardcoded radius */
border-radius: 8px;

/* Hardcoded transitions */
transition: all 150ms ease-in-out;
```

---

## Resources

- **Design System Tokens:** `/src/styles/theme-base.css`
- **WordPress Utility Classes:** `/src/styles/wordpress-classes.css`
- **BEM Guidelines:** `/guidelines/css-wordpress-classes.md`
- **Component Examples:** `/src/app/components/`
- **Pattern Guidelines:** `/guidelines/patterns/`

---

## Need Help?

- **Design System Guide:** `/docs/DESIGN-SYSTEM-GUIDE.md`
- **CSS Variables Reference:** `/docs/CSS-VARIABLES-COMPLETE.md`
- **Component Guidelines:** `/guidelines/components/`

---

**Last Updated:** 2026-03-13  
**Maintained By:** AI Assistant  
**Project:** LightSpeed Tour Operator Plugin Prototype
