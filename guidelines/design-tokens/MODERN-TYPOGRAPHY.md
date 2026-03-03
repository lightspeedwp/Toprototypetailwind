# Modern Fluid Typography System

**Version:** 2.0 - December 2024  
**Status:** ✅ Production Ready  
**Philosophy:** Modern, fluid, accessible, responsive

---

## Overview

This document defines the **modern fluid typography system** for the LightSpeed Tour Operator plugin prototype. The system uses responsive, fluid font sizes with `clamp()` to provide a beautiful, scalable typography experience across all devices.

---

## Key Principles

### 1. **Fluid Typography**
- All font sizes use `clamp()` for responsive scaling
- Smooth transitions across viewport sizes
- No breakpoint-based jumps

### 2. **Proper Hierarchy**
- Complete H1-H6 heading scale
- Clear visual distinction between levels
- Consistent spacing and rhythm

### 3. **Modern Design**
- Tighter letter-spacing for large headings (tracking-tighter)
- Optimized line heights for readability
- Professional font weights (300-700 scale)

### 4. **Accessibility First**
- WCAG 2.1 AA compliant
- Minimum 16px body text
- Readable line heights (1.5 minimum for body)
- Sufficient contrast ratios

---

## Typography Scale

### Heading Sizes (Fluid)

All headings use fluid scaling with `clamp(min, preferred, max)`:

```css
/* H1 - Page title, hero headline */
--text-6xl: clamp(3rem, 5vw + 1rem, 4.5rem);       
/* Mobile: 48px → Desktop: 72px */

/* Display/Hero - Special large text */
--text-5xl: clamp(2.25rem, 4vw + 0.5rem, 3.75rem); 
/* Mobile: 36px → Desktop: 60px */

/* H2 - Major section heading */
--text-4xl: clamp(1.875rem, 3vw + 0.5rem, 3rem);   
/* Mobile: 30px → Desktop: 48px */

/* H3 - Subsection heading */
--text-3xl: clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem);
/* Mobile: 24px → Desktop: 36px */

/* H4 - Minor heading */
--text-2xl: clamp(1.25rem, 2vw + 0.25rem, 1.875rem);
/* Mobile: 20px → Desktop: 30px */

/* H5 - Small heading */
--text-xl: clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem);
/* Mobile: 18px → Desktop: 24px */

/* H6 - Smallest heading */
--text-lg: clamp(1rem, 1vw + 0.125rem, 1.25rem);   
/* Mobile: 16px → Desktop: 20px */
```

---

### Body Text Sizes (Fluid)

```css
/* Body text - Primary content */
--text-base: clamp(1rem, 0.5vw + 0.875rem, 1.125rem); 
/* Mobile: 16px → Desktop: 18px */

/* Small text - Captions, metadata */
--text-sm: clamp(0.875rem, 0.5vw + 0.75rem, 1rem);    
/* Mobile: 14px → Desktop: 16px */

/* Tiny text - Fine print */
--text-xs: clamp(0.75rem, 0.25vw + 0.6875rem, 0.875rem); 
/* Mobile: 12px → Desktop: 14px */
```

---

## Line Heights (Leading)

Optimized for modern, readable design:

```css
--leading-tight: 1.2;       /* Headings (H1-H2) */
--leading-snug: 1.375;      /* Subheadings (H3-H5) */
--leading-normal: 1.5;      /* Body text, H6 */
--leading-relaxed: 1.625;   /* Long-form content, blockquotes */
--leading-loose: 1.75;      /* Spacious layouts */
```

### Usage Guidelines

| Line Height | When to Use | Example |
|-------------|-------------|---------|
| `tight` (1.2) | Large headings (H1-H2) | Page titles, hero headlines |
| `snug` (1.375) | Medium headings (H3-H5) | Section titles, card headings |
| `normal` (1.5) | Body text, small headings | Paragraphs, descriptions, H6 |
| `relaxed` (1.625) | Editorial content | Blog posts, long articles |
| `loose` (1.75) | Special layouts | Quotes, featured content |

---

## Letter Spacing (Tracking)

Modern, professional letter spacing:

```css
--tracking-tighter: -0.05em;   /* Large headings (H1) */
--tracking-tight: -0.025em;    /* Medium headings (H2-H3) */
--tracking-normal: 0em;        /* Body text, small headings */
--tracking-wide: 0.025em;      /* Labels, small caps */
--tracking-wider: 0.05em;      /* Uppercase text */
```

### Usage Guidelines

| Tracking | When to Use | Why |
|----------|-------------|-----|
| `tighter` (-0.05em) | H1, large display text | Improves readability at large sizes |
| `tight` (-0.025em) | H2, H3 | Subtle tightening for emphasis |
| `normal` (0em) | Body text, H4-H6 | Standard spacing |
| `wide` (0.025em) | Labels, UI text | Improves legibility for small text |
| `wider` (0.05em) | ALL CAPS text | Essential for uppercase readability |

---

## Font Weights

Complete professional scale:

```css
--font-weight-light: 300;      /* Light emphasis */
--font-weight-normal: 400;     /* Body text */
--font-weight-medium: 500;     /* Buttons, labels */
--font-weight-semibold: 600;   /* H2-H6 */
--font-weight-bold: 700;       /* H1, strong emphasis */
```

### Weight Mapping

| Element | Font Weight | Variable | Usage |
|---------|-------------|----------|-------|
| H1 | 700 (Bold) | `--font-weight-bold` | Maximum visual impact |
| H2-H4 | 600 (Semibold) | `--font-weight-semibold` | Clear hierarchy |
| H5-H6 | 500 (Medium) | `--font-weight-medium` | Subtle headings |
| Labels | 500 (Medium) | `--font-weight-medium` | UI emphasis |
| Buttons | 500 (Medium) | `--font-weight-medium` | Clickable clarity |
| Body text | 400 (Normal) | `--font-weight-normal` | Readable content |
| Emphasized | 600 (Semibold) | `--font-weight-semibold` | `<strong>`, `<b>` |

---

## Complete Heading Hierarchy

### H1 - Page Title

```css
h1 {
  font-family: var(--font-family-lora);      /* Serif */
  font-size: var(--text-6xl);                /* 48px - 72px */
  font-weight: var(--font-weight-bold);      /* 700 */
  line-height: var(--leading-tight);         /* 1.2 */
  letter-spacing: var(--tracking-tighter);   /* -0.05em */
}
```

**Usage:**
- Page titles
- Hero headlines
- Primary CTAs

**Example:**
```html
<h1>Explore Iceland's Natural Wonders</h1>
```

---

### H2 - Major Section

```css
h2 {
  font-family: var(--font-family-lora);      /* Serif */
  font-size: var(--text-4xl);                /* 30px - 48px */
  font-weight: var(--font-weight-semibold);  /* 600 */
  line-height: var(--leading-tight);         /* 1.2 */
  letter-spacing: var(--tracking-tight);     /* -0.025em */
}
```

**Usage:**
- Major section headings
- Page section titles
- Primary content blocks

**Example:**
```html
<h2>Popular Tours</h2>
<h2>What Our Customers Say</h2>
```

---

### H3 - Subsection

```css
h3 {
  font-family: var(--font-family-lora);      /* Serif */
  font-size: var(--text-3xl);                /* 24px - 36px */
  font-weight: var(--font-weight-semibold);  /* 600 */
  line-height: var(--leading-snug);          /* 1.375 */
  letter-spacing: var(--tracking-tight);     /* -0.025em */
}
```

**Usage:**
- Subsection titles
- Card headings (featured)
- Content block titles

**Example:**
```html
<h3>Tour Highlights</h3>
<h3>Itinerary Overview</h3>
```

---

### H4 - Minor Heading

```css
h4 {
  font-family: var(--font-family-lora);      /* Serif */
  font-size: var(--text-2xl);                /* 20px - 30px */
  font-weight: var(--font-weight-semibold);  /* 600 */
  line-height: var(--leading-snug);          /* 1.375 */
  letter-spacing: var(--tracking-normal);    /* 0em */
}
```

**Usage:**
- Minor headings
- Card titles (standard)
- List section titles

**Example:**
```html
<h4>Iceland Explorer</h4>
<h4>Day 1: Arrival in Reykjavik</h4>
```

---

### H5 - Small Heading

```css
h5 {
  font-family: var(--font-family-lora);      /* Serif */
  font-size: var(--text-xl);                 /* 18px - 24px */
  font-weight: var(--font-weight-medium);    /* 500 */
  line-height: var(--leading-snug);          /* 1.375 */
  letter-spacing: var(--tracking-normal);    /* 0em */
}
```

**Usage:**
- Small headings
- Sidebar titles
- Widget headings
- Meta information titles

**Example:**
```html
<h5>Tour Details</h5>
<h5>What's Included</h5>
```

---

### H6 - Smallest Heading

```css
h6 {
  font-family: var(--font-family-lora);      /* Serif */
  font-size: var(--text-lg);                 /* 16px - 20px */
  font-weight: var(--font-weight-medium);    /* 500 */
  line-height: var(--leading-normal);        /* 1.5 */
  letter-spacing: var(--tracking-normal);    /* 0em */
}
```

**Usage:**
- Smallest headings
- Inline section titles
- Label-like headings
- Footnote titles

**Example:**
```html
<h6>Additional Notes</h6>
<h6>Terms & Conditions</h6>
```

---

## Body Text Elements

### Paragraph

```css
p {
  font-family: var(--font-family-noto-sans); /* Sans-serif */
  font-size: var(--text-base);               /* 16px - 18px */
  font-weight: var(--font-weight-normal);    /* 400 */
  line-height: var(--leading-normal);        /* 1.5 */
  letter-spacing: var(--tracking-normal);    /* 0em */
}
```

**Usage:**
- All body text
- Descriptions
- Content blocks

---

### Label

```css
label {
  font-family: var(--font-family-lora);      /* Serif */
  font-size: var(--text-base);               /* 16px - 18px */
  font-weight: var(--font-weight-medium);    /* 500 */
  line-height: var(--leading-normal);        /* 1.5 */
  letter-spacing: var(--tracking-normal);    /* 0em */
}
```

**Usage:**
- Form labels
- UI labels
- Metadata labels

---

### Button

```css
button {
  font-family: var(--font-family-noto-sans); /* Sans-serif */
  font-size: var(--text-base);               /* 16px - 18px */
  font-weight: var(--font-weight-medium);    /* 500 */
  line-height: var(--leading-normal);        /* 1.5 */
  letter-spacing: var(--tracking-normal);    /* 0em */
}
```

**Usage:**
- All buttons
- CTAs
- Interactive elements

---

### Small Text

```css
small {
  font-size: var(--text-sm);                 /* 14px - 16px */
  line-height: var(--leading-normal);        /* 1.5 */
}
```

**Usage:**
- Captions
- Metadata
- Secondary information
- Timestamps

---

### Blockquote

```css
blockquote {
  font-family: var(--font-family-lora);      /* Serif */
  font-size: var(--text-xl);                 /* 18px - 24px */
  font-weight: var(--font-weight-normal);    /* 400 */
  line-height: var(--leading-relaxed);       /* 1.625 */
  font-style: italic;
}
```

**Usage:**
- Testimonials
- Pull quotes
- Featured quotes

---

## Typography by Component Type

### Hero Section

```html
<section class="hero">
  <h1>Discover Iceland</h1>              <!-- 48-72px, bold, tight -->
  <p class="lead">Experience...</p>       <!-- 16-18px, normal -->
</section>
```

**Typography:**
- H1: `--text-6xl`, bold (700), tight leading, tighter tracking
- Lead paragraph: `--text-base`, normal weight

---

### Card Grid

```html
<div class="card">
  <h3>Iceland Explorer</h3>              <!-- 24-36px, semibold -->
  <p>Explore the land of fire...</p>     <!-- 16-18px, normal -->
  <small>8 days • From $2,499</small>    <!-- 14-16px, normal -->
</div>
```

**Typography:**
- Card title (H3): `--text-3xl`, semibold (600)
- Description (p): `--text-base`, normal (400)
- Metadata (small): `--text-sm`, normal (400)

---

### Archive Header

```html
<header class="archive-header">
  <h1>All Tours</h1>                     <!-- 48-72px, bold -->
  <p>Discover our complete...</p>        <!-- 16-18px, normal -->
</header>
```

**Typography:**
- Page title (H1): `--text-6xl`, bold (700)
- Description (p): `--text-base`, normal (400)

---

### Section with Subsections

```html
<section>
  <h2>Tour Details</h2>                  <!-- 30-48px, semibold -->
  
  <div>
    <h3>Itinerary</h3>                   <!-- 24-36px, semibold -->
    <h4>Day 1: Arrival</h4>              <!-- 20-30px, semibold -->
    <p>Arrive in Reykjavik...</p>        <!-- 16-18px, normal -->
  </div>
  
  <div>
    <h3>What's Included</h3>             <!-- 24-36px, semibold -->
    <h5>Accommodation</h5>               <!-- 18-24px, medium -->
    <p>7 nights in hotels...</p>         <!-- 16-18px, normal -->
  </div>
</section>
```

---

## Accessibility Requirements

### Minimum Font Sizes

✅ **Body text:** 16px minimum (1rem)  
✅ **Small text:** 14px minimum (0.875rem)  
✅ **Tiny text:** 12px minimum (0.75rem)

### Line Height Requirements

✅ **Headings:** 1.2 minimum (tight)  
✅ **Body text:** 1.5 minimum (normal)  
✅ **Long-form:** 1.625 recommended (relaxed)

### Contrast Ratios

All text must meet WCAG 2.1 AA standards:

✅ **Normal text (16px):** 4.5:1 minimum  
✅ **Large text (18px+):** 3:1 minimum  
✅ **Headings (24px+):** 3:1 minimum

---

## Responsive Behavior

### Mobile (< 768px)

- H1: 48px
- H2: 30px
- H3: 24px
- H4: 20px
- H5: 18px
- H6: 16px
- Body: 16px

### Tablet (768px - 1024px)

- H1: 54px (interpolated)
- H2: 36px (interpolated)
- H3: 28px (interpolated)
- H4: 23px (interpolated)
- H5: 20px (interpolated)
- H6: 17px (interpolated)
- Body: 17px (interpolated)

### Desktop (> 1024px)

- H1: 72px
- H2: 48px
- H3: 36px
- H4: 30px
- H5: 24px
- H6: 20px
- Body: 18px

**Note:** Fluid scaling happens smoothly between these sizes using `clamp()`.

---

## Usage Rules

### Rule 1: Use Semantic HTML

✅ **Always use proper heading hierarchy:**

```html
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
      <h4>Detail</h4>
        <h5>Minor Detail</h5>
          <h6>Fine Print</h6>
```

❌ **Never skip levels:**

```html
<h1>Page Title</h1>
  <h3>Section</h3>  <!-- BAD: Skipped H2 -->
```

---

### Rule 2: One H1 Per Page

✅ **One and only one:**

```html
<h1>Tours Archive</h1>  <!-- Single H1 -->
<h2>Featured Tours</h2>
<h2>All Tours</h2>
```

❌ **Never multiple H1s:**

```html
<h1>Tours</h1>
<h1>Destinations</h1>  <!-- BAD: Second H1 -->
```

---

### Rule 3: Don't Override Typography Classes

The design system automatically styles HTML elements. Only override when intentionally deviating.

✅ **Let semantic HTML work:**

```html
<h2>Section Title</h2>  <!-- Gets 30-48px, 600 weight automatically -->
```

❌ **Don't add unnecessary classes:**

```html
<h2 class="text-4xl font-semibold">  <!-- Redundant -->
```

---

### Rule 4: Use CSS Variables

When you need to override, use CSS variables:

✅ **Correct:**

```tsx
<h3 style={{
  fontSize: 'var(--text-3xl)',
  fontWeight: 'var(--font-weight-semibold)',
  lineHeight: 'var(--leading-snug)'
}}>
  Custom Heading
</h3>
```

❌ **Avoid:**

```tsx
<h3 style={{ fontSize: '36px', fontWeight: '600' }}>
  <!-- Hardcoded values -->
</h3>
```

---

## Modern Typography Checklist

Before deploying any component:

- [ ] Proper heading hierarchy (H1-H6)
- [ ] One H1 per page
- [ ] Semantic HTML used
- [ ] No skipped heading levels
- [ ] Fluid font sizes (`clamp()` in CSS)
- [ ] Appropriate line heights
- [ ] Correct letter-spacing
- [ ] Proper font weights
- [ ] WCAG AA contrast met
- [ ] Minimum 16px body text
- [ ] Mobile-tested (responsive)
- [ ] Desktop-tested (large screens)
- [ ] Dark mode tested

---

## Benefits of Fluid Typography

### 1. **Responsive Without Breakpoints**
- Smooth scaling across all screen sizes
- No jarring jumps at breakpoints
- Perfect for any viewport

### 2. **Improved Readability**
- Optimized for mobile and desktop
- Proper sizing for all devices
- Better user experience

### 3. **Modern Aesthetic**
- Professional, polished look
- Contemporary design trends
- Matches user expectations

### 4. **Easier Maintenance**
- One system, all devices
- Less CSS code
- Simpler debugging

### 5. **Accessibility Built-In**
- Minimum sizes guaranteed
- Readable line heights
- User zoom friendly

---

## Migration from Old System

### Old Fixed Sizes (Deprecated)

```css
/* OLD - Don't use */
--text-4xl: 60px;  /* Fixed */
--text-2xl: 32px;  /* Fixed */
--text-xl: 20px;   /* Fixed */
--text-lg: 16px;   /* Fixed */
```

### New Fluid Sizes (Current)

```css
/* NEW - Use these */
--text-6xl: clamp(3rem, 5vw + 1rem, 4.5rem);       /* Fluid H1 */
--text-4xl: clamp(1.875rem, 3vw + 0.5rem, 3rem);   /* Fluid H2 */
--text-3xl: clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem);/* Fluid H3 */
--text-2xl: clamp(1.25rem, 2vw + 0.25rem, 1.875rem);/* Fluid H4 */
--text-xl: clamp(1.125rem, 1.5vw + 0.25rem, 1.5rem);/* Fluid H5 */
--text-lg: clamp(1rem, 1vw + 0.125rem, 1.25rem);   /* Fluid H6 */
```

---

## Related Documentation

- [design-tokens/colors.md](colors.md) - Color system
- [design-tokens/spacing.md](spacing.md) - Spacing system
- [overview-components.md](../overview-components.md) - Component usage
- [components/Hero.md](../components/Hero.md) - Hero typography
- [components/EditorialContent.md](../components/EditorialContent.md) - Content typography

---

**Last Updated:** December 25, 2024  
**Version:** 2.0  
**Author:** LightSpeed Design System Team
