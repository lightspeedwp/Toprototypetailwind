# Color Design Tokens

## Purpose

This document defines the **semantic color system** used throughout the LightSpeed Tour Operator plugin prototype. All colors are defined as CSS custom properties in `/src/styles/theme.css`.

**🎨 CRITICAL:**  
- **NEVER hardcode color values** (no `#ffffff`, `rgb()`, or `rgba()`)
- **NEVER use inline `style={{ color: ... }}`** - All colors must be applied via CSS classes
- **ALWAYS use semantic tokens** via Tailwind classes or CSS variables
- **Automatic dark mode** - All color tokens automatically switch in dark mode

---

## Color System Philosophy

**Semantic, not literal:** Color token names describe their **purpose**, not their appearance.

- ✅ `--primary` (describes role)
- ❌ `--green` (describes appearance)

**Theme-agnostic:** Tokens work for both light and dark modes through CSS variable substitution.

**Accessibility-first:** All color combinations meet WCAG 2.1 AA contrast requirements.

---

## Core Color Tokens

### Background Colors

```css
--background: rgba(255, 255, 255, 1);           /* Light mode */
--background: rgba(20, 20, 20, 1);              /* Dark mode */
```

**Usage:** Main application background

**Tailwind Class:** `bg-background`

**Example:**
```typescript
<div className="bg-background">
  Content
</div>
```

---

### Foreground Colors

```css
--foreground: rgba(9, 9, 9, 1);                 /* Light mode */
--foreground: rgba(245, 245, 245, 1);           /* Dark mode */
```

**Usage:** Primary text color

**Tailwind Class:** `text-foreground`

**Example:**
```typescript
<p className="text-foreground">
  Default text color
</p>
```

---

### Primary Colors

```css
--primary: rgba(74, 115, 17, 1);                /* Olive green */
--primary-foreground: rgba(255, 255, 255, 1);   /* White */
```

**Usage:** Primary brand actions (buttons, links, key UI elements)

**Tailwind Classes:** `bg-primary`, `text-primary`, `border-primary`, `text-primary-foreground`

**Example:**
```typescript
<button className="bg-primary text-primary-foreground rounded-md px-4 py-2">
  Book Now
</button>
```

**❌ NEVER do this:**
```typescript
<button style={{ backgroundColor: '#4a7311', color: '#ffffff' }}>
  Hardcoded colors
</button>
```

---

### Secondary Colors

```css
--secondary: rgba(172, 159, 124, 1);            /* Light: Beige */
--secondary: rgba(120, 110, 85, 1);             /* Dark: Darker beige */
--secondary-foreground: rgba(9, 9, 9, 1);       /* Light: Dark text */
--secondary-foreground: rgba(245, 245, 245, 1); /* Dark: Light text */
```

**Usage:** Secondary actions, alternative UI elements (NOT destructive)

**Tailwind Classes:** `bg-secondary`, `text-secondary`, `border-secondary`

**Example:**
```typescript
<button className="bg-secondary text-secondary-foreground">
  Learn More
</button>
```

---

### Accent Colors

```css
--accent: rgba(247, 174, 0, 1);                 /* Gold/amber */
--accent-foreground: rgba(255, 255, 255, 1);    /* Light: White */
--accent-foreground: rgba(0, 0, 0, 1);          /* Dark: Black */
```

**Usage:** Highlights, featured content, special emphasis

**Tailwind Classes:** `bg-accent`, `text-accent`, `border-accent`

**Example:**
```typescript
<span className="text-accent font-medium">
  Featured
</span>
```

---

### Muted Colors

```css
--muted: rgba(225, 225, 225, 1);                /* Light: Light gray */
--muted: rgba(60, 60, 60, 1);                   /* Dark: Dark gray */
--muted-foreground: rgba(86, 86, 86, 1);        /* Light: Medium gray */
--muted-foreground: rgba(150, 150, 150, 1);     /* Dark: Light gray */
```

**Usage:** Disabled states, subtle backgrounds, secondary text

**Tailwind Classes:** `bg-muted`, `text-muted-foreground`

**Example:**
```typescript
<p className="text-muted-foreground text-sm">
  Optional secondary information
</p>
```

---

### Destructive Colors

```css
--destructive: rgba(204, 0, 0, 1);              /* Light: Red */
--destructive: rgba(220, 38, 38, 1);            /* Dark: Lighter red */
--destructive-foreground: rgba(255, 255, 255, 1); /* White */
```

**Usage:** Delete actions, error states, warnings

**Tailwind Classes:** `bg-destructive`, `text-destructive`, `border-destructive`

**Example:**
```typescript
<button className="bg-destructive text-destructive-foreground">
  Delete
</button>
```

---

## Container Colors

### Card Colors

```css
--card: rgba(255, 255, 255, 1);                 /* Light mode */
--card: rgba(30, 30, 30, 1);                    /* Dark mode */
--card-foreground: rgba(9, 9, 9, 1);            /* Light mode */
--card-foreground: rgba(245, 245, 245, 1);      /* Dark mode */
```

**Usage:** Cards, modals, containers

**Tailwind Classes:** `bg-card`, `text-card-foreground`

**Example:**
```typescript
<div className="bg-card text-card-foreground rounded-lg p-6 shadow">
  Card content
</div>
```

---

### Popover Colors

```css
--popover: rgba(255, 255, 255, 1);              /* Light mode */
--popover: rgba(30, 30, 30, 1);                 /* Dark mode */
--popover-foreground: rgba(9, 9, 9, 1);         /* Light mode */
--popover-foreground: rgba(245, 245, 245, 1);   /* Dark mode */
```

**Usage:** Dropdowns, tooltips, popovers

**Tailwind Classes:** `bg-popover`, `text-popover-foreground`

**Example:**
```typescript
<div className="bg-popover text-popover-foreground rounded shadow-lg">
  Dropdown content
</div>
```

---

## Border & Input Colors

### Border Color

```css
--border: rgba(117, 117, 117, 1);               /* Light: Medium gray */
--border: rgba(80, 80, 80, 1);                  /* Dark: Lighter gray */
```

**Usage:** Default border color for all elements

**Tailwind Class:** `border-border`

**Example:**
```typescript
<div className="border border-border rounded">
  Bordered content
</div>
```

---

### Input Colors

```css
--input: rgba(255, 255, 255, 1);                /* Light mode */
--input: rgba(40, 40, 40, 1);                   /* Dark mode */
--input-background: rgba(255, 255, 255, 1);     /* Light mode */
--input-background: rgba(40, 40, 40, 1);        /* Dark mode */
```

**Usage:** Input fields, text areas

**Tailwind Classes:** `bg-input`, `bg-input-background`

**Example:**
```typescript
<input
  type="text"
  className="bg-input-background border border-border rounded px-3 py-2"
/>
```

---

### Ring Color (Focus State)

```css
--ring: rgba(0, 71, 208, 1);                    /* Light: Blue */
--ring: rgba(96, 165, 250, 1);                  /* Dark: Lighter blue */
```

**Usage:** Focus rings, outlines, keyboard navigation indicators

**Tailwind Class:** `ring-ring`

**Example:**
```typescript
<button className="focus:ring-2 focus:ring-ring focus:ring-offset-2">
  Focusable
</button>
```

---

## Sidebar Colors (Navigation)

```css
--sidebar: rgba(81, 75, 58, 1);                 /* Light: Dark brown */
--sidebar: rgba(30, 30, 30, 1);                 /* Dark: Very dark */
--sidebar-foreground: rgba(255, 255, 255, 1);   /* White */
--sidebar-primary: rgba(247, 174, 0, 1);        /* Gold */
--sidebar-accent: rgba(248, 247, 245, 1);       /* Light: Off-white */
--sidebar-accent: rgba(50, 50, 50, 1);          /* Dark: Dark gray */
--sidebar-border: rgba(172, 159, 124, 1);       /* Beige */
--sidebar-border: rgba(80, 80, 80, 1);          /* Dark: Gray */
--sidebar-ring: rgba(247, 174, 0, 1);           /* Gold */
```

**Usage:** Site header, navigation menus, persistent UI

**Tailwind Classes:** `bg-sidebar`, `text-sidebar-foreground`, etc.

**Example:**
```typescript
<nav className="bg-sidebar text-sidebar-foreground">
  <a href="/" className="hover:text-sidebar-primary">
    Home
  </a>
</nav>
```

---

## Chart Colors

```css
--chart-1: rgba(74, 115, 17, 1);                /* Primary green */
--chart-2: rgba(247, 174, 0, 1);                /* Accent gold */
--chart-3: rgba(172, 159, 124, 1);              /* Secondary beige */
--chart-4: rgba(81, 75, 58, 1);                 /* Sidebar brown */
--chart-5: rgba(117, 117, 117, 1);              /* Border gray */
```

**Usage:** Data visualization, charts, graphs

**Tailwind Classes:** `bg-chart-1`, `text-chart-2`, etc.

**Example:**
```typescript
<div className="bg-chart-1 h-20" style={{ width: '60%' }}>
  Chart bar
</div>
```

---

## Color Usage Rules

### 1. Always Use Semantic Tokens

**✅ Good:**
```typescript
<button className="bg-primary text-primary-foreground">
  Primary Action
</button>
```

**❌ Bad:**
```typescript
<button className="bg-green-600 text-white">
  Hardcoded color
</button>
```

---

### 2. Pair Colors Correctly

Always use matching foreground colors:

**✅ Good:**
```typescript
<div className="bg-primary text-primary-foreground">...</div>
<div className="bg-secondary text-secondary-foreground">...</div>
<div className="bg-card text-card-foreground">...</div>
```

**❌ Bad:**
```typescript
<div className="bg-primary text-secondary-foreground">
  Mismatched colors
</div>
```

---

### 3. Respect Dark Mode

Colors automatically adapt to dark mode. Don't hardcode dark mode overrides:

**✅ Good:**
```typescript
<div className="bg-background text-foreground">
  Automatically adapts
</div>
```

**❌ Bad:**
```typescript
<div className="bg-white dark:bg-gray-900">
  Manual dark mode override
</div>
```

---

### 4. Use Muted for Secondary Content

**✅ Good:**
```typescript
<p className="text-foreground">Primary content</p>
<p className="text-muted-foreground text-sm">Secondary info</p>
```

---

### 5. Use Accent Sparingly

Accent color is for **highlights only**:

**✅ Good:**
```typescript
<span className="text-accent font-medium">Featured</span>
<span className="text-accent font-medium">20% Off</span>
```

**❌ Bad:**
```typescript
<p className="text-accent">
  Every paragraph in accent color
</p>
```

---

## Color Combinations Reference

### Primary Action
```typescript
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Button
</button>
```

### Secondary Action
```typescript
<button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
  Secondary Button
</button>
```

### Ghost/Outline Button
```typescript
<button className="border border-border text-foreground hover:bg-muted">
  Ghost Button
</button>
```

### Destructive Action
```typescript
<button className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
  Delete
</button>
```

### Card
```typescript
<div className="bg-card text-card-foreground border border-border rounded-lg p-6">
  Card content
</div>
```

### Feature Highlight
```typescript
<div className="bg-accent/10 border border-accent rounded-lg p-4">
  <p className="text-accent font-medium">Featured Tour</p>
</div>
```

---

## Accessibility

### Contrast Requirements

All color pairs must meet WCAG 2.1 AA contrast ratios:
- **Normal text:** 4.5:1
- **Large text (18px+):** 3:1
- **UI components:** 3:1

### Testing

Current color pairs that meet AA standards:
- `--primary` + `--primary-foreground` ✅
- `--secondary` + `--secondary-foreground` ✅
- `--accent` + `--accent-foreground` ✅
- `--destructive` + `--destructive-foreground` ✅
- `--background` + `--foreground` ✅

---

## CSS Variable Reference

### Accessing in Tailwind

```typescript
// Background
className="bg-primary"          // Uses --color-primary
className="text-primary"        // Uses --color-primary
className="border-primary"      // Uses --color-primary

// Arbitrary values
className="bg-[var(--primary)]" // Direct CSS variable access
```

### Accessing in Custom CSS

```css
.custom-component {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border-color: var(--border);
}
```

---

## Related Documentation

- [design-tokens/typography.md](typography.md) - Typography tokens
- [design-tokens/spacing.md](spacing.md) - Spacing tokens
- [design-tokens/shadows.md](shadows.md) - Shadow tokens
- [overview-components.md](../overview-components.md) - Component usage