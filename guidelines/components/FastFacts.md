# FastFacts Pattern

**File:** `/src/app/components/patterns/FastFacts.tsx`  
**CSS File:** `/src/styles/patterns/fast-facts.css`  
**WordPress Mapping:** Meta block / Quick facts sidebar pattern  
**Category:** Pattern Component

---

## Purpose

The `FastFacts` component displays key information in a scannable, icon-driven grid format. It's designed for quick-reference metadata like tour duration, group size, difficulty level, and other essential facts.

**Key Features:**
- Icon + label + value grid layout
- Responsive grid (1-2-3 columns)
- Semantic HTML structure
- Dark mode support via CSS variables
- Accessibility-compliant (WCAG 2.1 AA)
- Empty state handling

---

## When to Use

✅ **DO use for:**
- Tour metadata (duration, group size, difficulty)
- Destination facts (population, language, currency)
- Accommodation details (rooms, rating, facilities count)
- Product specifications
- Key statistics
- Quick-reference information

❌ **Do NOT use for:**
- Long-form content → Use `EditorialContent`
- Lists with descriptions → Use custom list component
- Navigation items → Use navigation components
- Complex data → Use tables or custom layout

---

## Design System Compliance

### Typography
- **Label:** Uses `var(--text-sm)` with `var(--muted-foreground)` color
- **Value:** Uses `var(--text-base)` with `var(--foreground)` color, `var(--font-weight-semibold)`
- **Font family:** Uses `var(--font-family-noto-sans)` for all text

### Spacing
- **Grid gap:** Uses `var(--spacing-gap-md)` (24px)
- **Icon-to-text gap:** Uses `var(--spacing-gap-sm)` (16px)
- **Padding:** Uses `var(--spacing-element-md)` (16px)

### Colors
- **Icon:** Uses `var(--primary)` (olive green)
- **Label:** Uses `var(--muted-foreground)` (subtle text)
- **Value:** Uses `var(--foreground)` (primary text)
- **Border:** Uses `var(--border)` (if bordered variant)

### Icons
- **Size:** `20px` (1.25rem)
- **Stroke width:** `2px`
- **Color:** `var(--primary)`
- **Source:** lucide-react package

### Dark Mode
All colors automatically switch via CSS variables. No manual dark mode handling required.

---

## Import

```typescript
import { FastFacts } from "../components/patterns/FastFacts";
import type { FastFact } from "../data/types";
```

**Icons must be imported from lucide-react:**
```typescript
import { Users, Calendar, MapPin, Clock } from "lucide-react";
```

---

## Data Structure

```typescript
interface FastFact {
  /** Lucide icon component */
  icon: React.ComponentType<{ className?: string }>;
  
  /** Fact label (e.g., "Duration", "Group Size") */
  label: string;
  
  /** Fact value (e.g., "7 days", "Max 12 people") */
  value: string;
}
```

### Example Data

```typescript
const tourFacts: FastFact[] = [
  {
    icon: Calendar,
    label: "Duration",
    value: "7 days / 6 nights"
  },
  {
    icon: Users,
    label: "Group Size",
    value: "Max 12 people"
  },
  {
    icon: MapPin,
    label: "Destinations",
    value: "5 cities"
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Year-round"
  }
];
```

---

## Props

```typescript
interface FastFactsProps {
  /** Array of facts to display */
  facts: FastFact[];
  
  /** Additional CSS classes */
  className?: string;
}
```

### Required Props

- **`facts`** - Array of fact objects
  - Type: `FastFact[]`
  - Each item must have `icon`, `label`, `value`
  - Required

### Optional Props

- **`className`** - Additional CSS classes
  - Type: `string`
  - Optional

---

## Usage Examples

### Tour Metadata

```typescript
import { Calendar, Users, MapPin, Clock, TrendingUp } from "lucide-react";

const tourFacts: FastFact[] = [
  {
    icon: Calendar,
    label: "Duration",
    value: "7 days / 6 nights"
  },
  {
    icon: Users,
    label: "Group Size",
    value: "Max 12 people"
  },
  {
    icon: MapPin,
    label: "Destinations",
    value: "5 cities visited"
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Year-round"
  },
  {
    icon: TrendingUp,
    label: "Difficulty",
    value: "Moderate"
  }
];

<FastFacts facts={tourFacts} />
```

### Destination Facts

```typescript
import { Users, MapPin, DollarSign, Languages, Calendar } from "lucide-react";

const destinationFacts: FastFact[] = [
  {
    icon: Users,
    label: "Population",
    value: "368,792"
  },
  {
    icon: MapPin,
    label: "Capital",
    value: "Reykjavik"
  },
  {
    icon: DollarSign,
    label: "Currency",
    value: "Icelandic króna (ISK)"
  },
  {
    icon: Languages,
    label: "Language",
    value: "Icelandic"
  },
  {
    icon: Calendar,
    label: "Best Time",
    value: "June - August"
  }
];

<FastFacts facts={destinationFacts} />
```

### Accommodation Details

```typescript
import { Home, Star, Users, Wifi, Utensils } from "lucide-react";

const accommodationFacts: FastFact[] = [
  {
    icon: Home,
    label: "Rooms",
    value: "42 rooms"
  },
  {
    icon: Star,
    label: "Rating",
    value: "4.5 stars"
  },
  {
    icon: Users,
    label: "Capacity",
    value: "Up to 84 guests"
  },
  {
    icon: Wifi,
    label: "WiFi",
    value: "Free high-speed"
  },
  {
    icon: Utensils,
    label: "Dining",
    value: "Restaurant & bar"
  }
];

<FastFacts facts={accommodationFacts} />
```

### Empty State Handling

```typescript
const facts: FastFact[] = [];

// Component automatically returns null if facts array is empty
<FastFacts facts={facts} />
// Renders nothing (null)
```

---

## Styling

### CSS File Location
`/src/styles/patterns/fast-facts.css`

### BEM Class Structure

```css
.wp-pattern-fast-facts {
  /* Container - responsive grid */
}

.wp-pattern-fast-facts__item {
  /* Individual fact item */
}

.wp-pattern-fast-facts__icon {
  /* Icon container */
}

.wp-pattern-fast-facts__content {
  /* Label + value container */
}

.wp-pattern-fast-facts__label {
  /* Fact label (muted) */
}

.wp-pattern-fast-facts__value {
  /* Fact value (emphasized) */
}
```

### Responsive Grid

The component uses CSS Grid with responsive column count:

```css
.wp-pattern-fast-facts {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 column */
  gap: var(--spacing-gap-md);
}

@media (min-width: 640px) {
  .wp-pattern-fast-facts {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .wp-pattern-fast-facts {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}
```

### All Styling Uses CSS Variables

```css
/* Typography */
font-family: var(--font-family-noto-sans);
font-size: var(--text-sm);
font-size: var(--text-base);
font-weight: var(--font-weight-semibold);

/* Spacing */
gap: var(--spacing-gap-md);
gap: var(--spacing-gap-sm);
padding: var(--spacing-element-md);

/* Colors */
color: var(--primary);
color: var(--foreground);
color: var(--muted-foreground);
border-color: var(--border);
```

**NO hardcoded values allowed.**

---

## Icon Guidelines

### Verifying Icons Exist

**ALWAYS verify icons exist in lucide-react before using:**

```bash
grep "Calendar" node_modules/lucide-react/dist/esm/icons/index.js
grep "Users" node_modules/lucide-react/dist/esm/icons/index.js
grep "MapPin" node_modules/lucide-react/dist/esm/icons/index.js
```

### Recommended Icons for FastFacts

**Travel/Tour Icons:**
- `Calendar` - Duration, dates
- `Clock` - Time, availability
- `Users` - Group size, capacity
- `MapPin` - Location, destinations
- `TrendingUp` - Difficulty level
- `Plane` - Flight, transport
- `Home` - Accommodation
- `Utensils` - Meals, dining
- `DollarSign` - Price, currency

**Destination Icons:**
- `Globe` - International
- `Languages` - Language
- `Users` - Population
- `MapPin` - Capital city
- `Calendar` - Best time to visit
- `Thermometer` - Temperature, climate
- `Zap` - Voltage, electricity

**Accommodation Icons:**
- `Home` - Rooms, property type
- `Star` - Rating
- `Wifi` - Internet
- `ParkingCircle` - Parking
- `Coffee` - Breakfast
- `Dumbbell` - Fitness, gym
- `Droplet` - Pool, spa

**Full icon reference:** `/guidelines/icons/travel.md` and `/guidelines/icons/interface.md`

---

## Accessibility

### WCAG 2.1 AA Compliance

✅ **Semantic HTML:**
- Uses `<div>` for grid (no semantic meaning needed)
- Each fact item uses `<div>` with proper ARIA roles if needed
- Icon + text relationship clear visually and structurally

✅ **Color Contrast:**
- Icon color (primary): 7.23:1 on white background (AAA)
- Label (muted-foreground): 7.03:1 on white (AAA)
- Value (foreground): 21:1 on white (AAA)

✅ **Icon Accessibility:**
- Icons are decorative (paired with text label)
- `aria-hidden="true"` on icon elements
- Text labels provide all information

✅ **Keyboard Navigation:**
- No interactive elements (display only)
- Screen readers announce each fact via text content

---

## Page Template Usage

### Tour Single Page

```typescript
<PageLayout>
  <main>
    {/* Hero */}
    <Hero title={tour.title} backgroundImage={tour.heroImage} />
    
    {/* Fast Facts Section */}
    <section className="wp-section wp-section--muted">
      <Container>
        <h2>Tour Essentials</h2>
        <FastFacts facts={tour.fastFacts} />
      </Container>
    </section>
    
    {/* Editorial Content */}
    <section className="wp-section wp-section--white">
      <Container>
        <EditorialContent
          title="About This Tour"
          content={tour.description}
        />
      </Container>
    </section>
  </main>
</PageLayout>
```

### Destination Single Page

```typescript
<PageLayout>
  <main>
    {/* Hero */}
    <Hero title={destination.title} />
    
    {/* Quick Facts */}
    <section className="wp-section wp-section--white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Fast Facts Sidebar */}
          <aside className="lg:col-span-1">
            <h2>Quick Facts</h2>
            <FastFacts facts={destination.fastFacts} />
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <EditorialContent content={destination.description} />
          </div>
        </div>
      </Container>
    </section>
  </main>
</PageLayout>
```

---

## Related Components

- **`EditorialContent`** - Long-form narrative content (often used together)
- **`Hero`** - Page header (precedes FastFacts)
- **`Container`** - Width constraint wrapper
- **`CardGrid`** - Grid layout for card items

---

## WordPress Alignment

### Block Pattern Mapping

In WordPress, this would be registered as a **meta block pattern**:

```php
// patterns/fast-facts.php
register_block_pattern(
  'lsx-tour-operator/fast-facts',
  array(
    'title'       => __( 'Fast Facts Grid', 'lsx-tour-operator' ),
    'description' => __( 'Icon-driven key facts in responsive grid', 'lsx-tour-operator' ),
    'content'     => '<!-- wp:group {"className":"wp-pattern-fast-facts"} -->
                      <!-- wp:heading {"level":2} /-->
                      <!-- wp:columns /-->
                      <!-- /wp:group -->',
    'categories'  => array( 'lsx-tour-operator' ),
  )
);
```

---

## Testing Checklist

Before using this component, verify:

- [ ] All icons verified in lucide-react
- [ ] Facts array contains valid data
- [ ] Grid responds correctly (1-2-3 columns)
- [ ] Icon color uses `var(--primary)`
- [ ] Label uses `var(--muted-foreground)`
- [ ] Value uses `var(--foreground)` and semibold weight
- [ ] Dark mode colors switch automatically
- [ ] Empty state returns `null`
- [ ] No hardcoded colors/fonts/spacing
- [ ] WCAG 2.1 AA compliant

---

## Common Pitfalls

❌ **Don't hardcode facts:**
```typescript
<FastFacts facts={[
  { icon: Calendar, label: "Duration", value: "7 days" } // Hardcoded
]} />
```

✅ **Use data from mock files:**
```typescript
<FastFacts facts={tour.fastFacts} /> // From mock data
```

---

❌ **Don't use non-existent icons:**
```typescript
import { NonExistentIcon } from "lucide-react"; // ERROR
```

✅ **Verify icons exist first:**
```bash
grep "Calendar" node_modules/lucide-react/dist/esm/icons/index.js
```

---

❌ **Don't render empty facts:**
```typescript
{facts.length === 0 && <FastFacts facts={facts} />}
// Component already handles this
```

✅ **Component handles empty state:**
```typescript
<FastFacts facts={facts} />
// Returns null if array is empty
```

---

## Version History

- **v1.0** (2026-02-01) - Initial implementation
- **v1.1** (2026-03-13) - Added comprehensive guidelines

---

**Status:** ✅ Complete and Production-Ready  
**Last Updated:** March 13, 2026
