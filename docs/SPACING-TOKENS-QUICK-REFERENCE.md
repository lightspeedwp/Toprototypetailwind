# 🎨 Spacing Tokens - Quick Reference Card

**Updated:** 2026-03-13  
**Quick access to all spacing CSS variables**

---

## 📐 Spacing Token Categories

### 1. Section Spacing (Large Vertical)

Use for large vertical padding between page sections.

| Token | Value | px | Use Case |
|-------|-------|-------|----------|
| `--spacing-section-sm` | 2rem | 32px | Small section spacing |
| `--spacing-section-md` | 4rem | 64px | Medium section spacing |
| `--spacing-section-lg` | 6rem | 96px | Large section spacing |
| `--spacing-section-xl` | 8rem | 128px | Extra large section spacing |

**Usage:**
```css
.hero-section {
  padding-block: var(--spacing-section-lg);
}
```

---

### 2. Gap Spacing (Flexbox/Grid)

Use for gaps between flex/grid items.

| Token | Value | px | Use Case |
|-------|-------|-------|----------|
| `--spacing-gap-xs` | 0.5rem | 8px | Tight gaps (inline badges, chips) |
| `--spacing-gap-sm` | 1rem | 16px | Small gaps (button groups) |
| `--spacing-gap-md` | 1.5rem | 24px | Medium gaps (card grids) |
| `--spacing-gap-lg` | 2rem | 32px | Large gaps (section content) |
| `--spacing-gap-xl` | 2.5rem | 40px | Extra large gaps (major sections) |

**Usage:**
```css
.card-grid {
  display: grid;
  gap: var(--spacing-gap-lg);
}
```

---

### 3. Element Spacing (Padding/Margin)

Use for component padding and margins.

| Token | Value | px | Use Case |
|-------|-------|-------|----------|
| `--spacing-element-xs` | 0.5rem | 8px | Tight spacing (badges, chips) |
| `--spacing-element-sm` | 0.75rem | 12px | Small spacing (compact buttons) |
| `--spacing-element-md` | 1rem | 16px | Medium spacing (standard cards) |
| `--spacing-element-lg` | 1.5rem | 24px | Large spacing (prominent cards) |
| `--spacing-element-xl` | 2rem | 32px | Extra large (hero blocks) |
| `--spacing-element-2xl` | 3rem | 48px | 2x large (major sections) |
| `--spacing-element-3xl` | 4rem | 64px | 3x large (page sections) |

**Usage:**
```css
.card {
  padding: var(--spacing-element-lg);
  margin-bottom: var(--spacing-element-md);
}
```

---

### 4. Container Padding (Responsive)

Use for container horizontal padding.

| Token | Value | px | Use Case |
|-------|-------|-------|----------|
| `--spacing-container-sm` | 1rem | 16px | Mobile container padding |
| `--spacing-container-md` | 1.5rem | 24px | Tablet container padding |
| `--spacing-container-lg` | 2rem | 32px | Desktop container padding |

**Usage:**
```css
.container {
  padding-inline: var(--spacing-container-sm);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--spacing-container-md);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-inline: var(--spacing-container-lg);
  }
}
```

---

### 5. Container Max-Widths

Use for container width constraints.

| Token | Value | Use Case |
|-------|-------|----------|
| `--container-max-width` | 1600px | Maximum content width |
| `--container-max-width-narrow` | 768px | Narrow (blog posts, forms) |
| `--container-max-width-wide` | 1280px | Wide (archives, grids) |

**Usage:**
```css
.container {
  max-width: var(--container-max-width-wide);
  margin-inline: auto;
}
```

---

### 6. Header Spacing

Use for header and navigation heights.

| Token | Value | px | Use Case |
|-------|-------|-------|----------|
| `--header-bar-height` | 4rem | 64px | Desktop header height |
| `--header-mobile-height` | 3.5rem | 56px | Mobile header height |

**Usage:**
```css
.header {
  height: var(--header-bar-height);
}

@media (max-width: 767px) {
  .header {
    height: var(--header-mobile-height);
  }
}
```

---

### 7. Z-Index Layers

Use for consistent z-index layering.

| Token | Value | Use Case |
|-------|-------|----------|
| `--z-dropdown` | 1000 | Dropdown menus |
| `--z-sticky` | 1020 | Sticky headers/navs |
| `--z-fixed` | 1030 | Fixed elements |
| `--z-modal-backdrop` | 1040 | Modal backdrops |
| `--z-modal` | 1050 | Modal dialogs |
| `--z-popover` | 1060 | Popovers |
| `--z-tooltip` | 1070 | Tooltips |

**Usage:**
```css
.modal-backdrop {
  z-index: var(--z-modal-backdrop);
}

.modal {
  z-index: var(--z-modal);
}
```

---

## 🎯 Quick Conversion Chart

### Tailwind → CSS Variable

| Tailwind | CSS Variable | Value |
|----------|--------------|-------|
| `gap-2` | `var(--spacing-gap-xs)` | 8px |
| `gap-4` | `var(--spacing-gap-sm)` | 16px |
| `gap-6` | `var(--spacing-gap-md)` | 24px |
| `gap-8` | `var(--spacing-gap-lg)` | 32px |
| `p-2` | `var(--spacing-element-xs)` | 8px |
| `p-3` | `var(--spacing-element-sm)` | 12px |
| `p-4` | `var(--spacing-element-md)` | 16px |
| `p-6` | `var(--spacing-element-lg)` | 24px |
| `p-8` | `var(--spacing-element-xl)` | 32px |
| `p-12` | `var(--spacing-element-2xl)` | 48px |
| `m-4` | `var(--spacing-element-md)` | 16px |
| `mb-4` | `var(--spacing-element-md)` | 16px |
| `mt-6` | `var(--spacing-element-lg)` | 24px |

---

## 📝 Common Usage Patterns

### Card Component
```css
.wp-card {
  padding: var(--spacing-element-lg);
  margin-bottom: var(--spacing-element-md);
  border-radius: var(--radius-lg);
  background-color: var(--card);
  border: 1px solid var(--border);
}
```

### Grid Layout
```css
.wp-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-gap-lg);
  padding: var(--spacing-element-xl);
}
```

### Section Spacing
```css
.wp-section {
  padding-block: var(--spacing-section-md);
}

.wp-section--large {
  padding-block: var(--spacing-section-lg);
}
```

### Button Spacing
```css
.wp-button {
  padding-inline: var(--spacing-element-lg);
  padding-block: var(--spacing-element-sm);
  gap: var(--spacing-gap-xs);
}
```

### Form Spacing
```css
.wp-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-element-md);
}

.wp-form__field {
  margin-bottom: var(--spacing-element-sm);
}
```

---

## 🎨 WordPress Utility Classes

### Padding

```html
<!-- All sides -->
<div class="has-padding-xs">   <!-- 8px -->
<div class="has-padding-sm">   <!-- 12px -->
<div class="has-padding-md">   <!-- 16px -->
<div class="has-padding-lg">   <!-- 24px -->
<div class="has-padding-xl">   <!-- 32px -->

<!-- Vertical (block) -->
<div class="has-vertical-padding-md">  <!-- padding-block -->

<!-- Horizontal (inline) -->
<div class="has-horizontal-padding-lg"> <!-- padding-inline -->

<!-- Individual sides -->
<div class="has-padding-top-sm">
<div class="has-padding-bottom-lg">
```

### Margin

```html
<!-- All sides -->
<div class="has-margin-xs">    <!-- 8px -->
<div class="has-margin-md">    <!-- 16px -->
<div class="has-margin-lg">    <!-- 24px -->

<!-- Vertical (block) -->
<div class="has-vertical-margin-md">

<!-- Horizontal (inline) -->
<div class="has-horizontal-margin-auto"> <!-- Center -->

<!-- Individual sides -->
<div class="has-margin-bottom-md">
<div class="has-margin-top-lg">
```

### Gap

```html
<!-- Flexbox/Grid gaps -->
<div class="has-gap-xs">       <!-- 8px -->
<div class="has-gap-sm">       <!-- 16px -->
<div class="has-gap-md">       <!-- 24px -->
<div class="has-gap-lg">       <!-- 32px -->
<div class="has-gap-xl">       <!-- 40px -->

<!-- Row gap -->
<div class="has-row-gap-md">

<!-- Column gap -->
<div class="has-col-gap-lg">
```

### Section Spacing

```html
<!-- Large vertical padding -->
<section class="has-section-padding-sm">  <!-- 32px -->
<section class="has-section-padding-md">  <!-- 64px -->
<section class="has-section-padding-lg">  <!-- 96px -->
<section class="has-section-padding-xl">  <!-- 128px -->
```

---

## 🚀 Quick Start Examples

### Example 1: Simple Card
```tsx
// Card.tsx
import './Card.css';

export function Card({ title, children }) {
  return (
    <div className="wp-card">
      <h3 className="wp-card__title">{title}</h3>
      <div className="wp-card__content">{children}</div>
    </div>
  );
}
```

```css
/* Card.css */
.wp-card {
  padding: var(--spacing-element-lg);
  margin-bottom: var(--spacing-element-md);
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.wp-card__title {
  margin-bottom: var(--spacing-element-sm);
}

.wp-card__content {
  gap: var(--spacing-gap-sm);
}
```

### Example 2: Grid Layout
```tsx
// CardGrid.tsx
import './CardGrid.css';

export function CardGrid({ children }) {
  return (
    <div className="wp-card-grid">
      {children}
    </div>
  );
}
```

```css
/* CardGrid.css */
.wp-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-gap-lg);
  padding: var(--spacing-element-xl);
}

@media (min-width: 768px) {
  .wp-card-grid {
    gap: var(--spacing-gap-xl);
  }
}
```

### Example 3: Section
```tsx
// Section.tsx
import './Section.css';

export function Section({ children, size = 'md' }) {
  return (
    <section className={`wp-section wp-section--${size}`}>
      <div className="wp-section__container">
        {children}
      </div>
    </section>
  );
}
```

```css
/* Section.css */
.wp-section {
  padding-block: var(--spacing-section-md);
}

.wp-section--sm {
  padding-block: var(--spacing-section-sm);
}

.wp-section--lg {
  padding-block: var(--spacing-section-lg);
}

.wp-section__container {
  max-width: var(--container-max-width-wide);
  margin-inline: auto;
  padding-inline: var(--spacing-container-sm);
}

@media (min-width: 768px) {
  .wp-section__container {
    padding-inline: var(--spacing-container-md);
  }
}

@media (min-width: 1024px) {
  .wp-section__container {
    padding-inline: var(--spacing-container-lg);
  }
}
```

---

## 📚 Related Documentation

- **Complete Migration Guide:** `/docs/TAILWIND-TO-WORDPRESS-MIGRATION-GUIDE.md`
- **Audit Report:** `/docs/SPACING-AUDIT-REPORT.md`
- **Migration Summary:** `/docs/SPACING-MIGRATION-SUMMARY.md`
- **Task List:** `/tasks/tailwind-spacing-migration-tasks.md`
- **Theme Tokens:** `/src/styles/theme-base.css`
- **WordPress Classes:** `/src/styles/wordpress-classes.css`

---

**Print this reference card and keep it handy while migrating components!**

**Last Updated:** 2026-03-13  
**Version:** 1.0
