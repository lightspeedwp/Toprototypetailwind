# Modern Spacing & Fluidity Guidelines (v3.0)

**Principle:** Predictable, fluid vertical and horizontal rhythm with zero margin dependency.

---

## 1. The "Zero Margin" Rule 🚫

To ensure predictable layout composition and alignment with WordPress block theme architecture, **margins are strictly prohibited** for structural layout.

### Why Eliminate Margin?
- **Collapsing Issues:** Margins collapse in unpredictable ways in complex nested layouts.
- **Component Isolation:** A component should not "push" other components away; the container should define the space between its children.
- **WordPress Alignment:** WordPress `theme.json` settings like `blockGap` and `padding` are the primary methods for spacing in the block editor.

### The Replacement Strategy
1. **Vertical Rhythm:** Use `padding-block` (vertical padding) on containers to create space between sections.
2. **Horizontal Rhythm:** Use `padding-inline` (horizontal padding) for gutters.
3. **Child Spacing:** Use `gap` (blockGap) on flex or grid parents to manage space between sibling elements.
4. **Internal Spacing:** Use `padding` within components (cards, buttons).

---

## 2. Fluid Scaling (320px to 1920px) 🌊

All spacing and typography values must be **highly fluid**, using `clamp()` to transition smoothly between minimum (320px) and maximum (1920px) sizes.

### Scaling Parameters
- **Minimum Viewport:** 320px (20rem)
- **Maximum Viewport:** 1920px (120rem)

### Fluid Spacing Scale
| Level | Mobile (320px) | Desktop (1920px) | CSS Variable |
|-------|----------------|------------------|--------------|
| XS    | 8px            | 16px             | `--spacing-element-xs` |
| SM    | 12px           | 24px             | `--spacing-element-sm` |
| MD    | 16px           | 32px             | `--spacing-element-md` |
| LG    | 24px           | 48px             | `--spacing-element-lg` |
| XL    | 32px           | 64px             | `--spacing-element-xl` |
| XXL   | 48px           | 96px             | `--spacing-element-xxl` |

### Fluid Section Scale
| Level | Mobile (320px) | Desktop (1920px) | CSS Variable |
|-------|----------------|------------------|--------------|
| SM    | 40px           | 80px             | `--spacing-section-sm` |
| MD    | 64px           | 128px            | `--spacing-section-md` |
| LG    | 80px           | 160px            | `--spacing-section-lg` |
| XL    | 96px           | 192px            | `--spacing-section-xl` |

---

## 3. WordPress `blockGap` Implementation 🧩

`blockGap` is the standardized way to manage spacing between blocks in WordPress. In this React prototype, we map this to CSS Grid and Flexbox `gap` properties.

### Mapping to Variables
- **Vertical Gap:** `--wp--style--block-gap` (Default vertical space between elements in a stack).
- **Horizontal Gap:** `--wp--style--block-gap-horizontal` (Space between columns).

### Usage Pattern
```tsx
// Stack pattern (Vertical)
<div className="flex flex-col" style={{ gap: 'var(--spacing-gap-md)' }}>
  <BlockA />
  <BlockB />
</div>

// Grid pattern (Horizontal & Vertical)
<div className="grid" style={{ gap: 'var(--spacing-gap-lg)' }}>
  <Card />
  <Card />
</div>
```

---

## 4. Multi-Breakpoint Column Scaling 📊

To optimize for the 1920px target, grid systems must scale up to 6 columns.

| Viewport Range | Breakpoint Name | Columns (Archive) | Max Container Width |
|----------------|-----------------|-------------------|---------------------|
| 320px - 480px  | XS (Mobile)     | 1                 | 100%                |
| 480px - 768px  | SM (Mobile L)   | 2                 | 100%                |
| 768px - 1024px | MD (Tablet)     | 2 - 3             | 720px               |
| 1024px - 1280px| LG (Desktop)    | 3 - 4             | 960px               |
| 1280px - 1600px| XL (Desktop L)  | 4 - 5             | 1200px              |
| 1600px - 1920px| XXL (Ultra)     | 5 - 6             | 1600px              |

---

## 5. Implementation Checklist ✅

- [ ] **Remove all `m-`, `mt-`, `mb-`, `ml-`, `mr-` classes.**
- [ ] **Replace with `gap-`** on parent containers.
- [ ] **Use `py-` (padding-block)** for section separation.
- [ ] **Ensure `clamp()`** is used for all spacing values.
- [ ] **Verify contrast** in dark mode (minimum 4.5:1).
- [ ] **Test at 1920px** to ensure 6-column grid layouts work.
