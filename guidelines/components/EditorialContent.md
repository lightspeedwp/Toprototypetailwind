# EditorialContent Pattern

**File:** `/src/app/components/patterns/EditorialContent.tsx`  
**CSS File:** `/src/styles/patterns/editorial-content.css`  
**WordPress Mapping:** Content block / Editorial content pattern  
**Category:** Pattern Component

---

## Purpose

The `EditorialContent` component renders long-form narrative content with proper typography, spacing, and optional metadata (reading time, publication date). It's designed for tour descriptions, blog posts, destination guides, and other content-heavy pages.

**Key Features:**
- Semantic HTML structure (`<article>`, `<header>`, `<section>`)
- Automatic reading time calculation
- Multiple width variants (narrow, standard, wide)
- Optional title, subtitle, and metadata
- Responsive typography using CSS variables
- Dark mode support via CSS variables
- Accessibility-compliant (WCAG 2.1 AA)

---

## When to Use

✅ **DO use for:**
- Tour descriptions (single tour pages)
- Blog post content (blog single pages)
- Destination guides (destination single pages)
- About page content
- Long-form narrative sections
- Editorial content blocks

❌ **Do NOT use for:**
- Short descriptions → Use `<p>` directly
- Card content → Use `BlogCard`, `TourCard`, etc.
- Lists of items → Use `CardGrid` pattern
- Navigation content → Use navigation components

---

## Design System Compliance

### Typography
- **Title:** Uses semantic `<h2>` which receives `var(--text-4xl)`, `var(--font-family-lora)`, `var(--font-weight-semibold)`
- **Subtitle:** Uses `<p>` with muted foreground color
- **Body:** Uses semantic HTML elements that inherit from `theme.css`
- **Reading Time:** Uses `var(--text-sm)` via Tailwind `text-sm` class

### Spacing
- **Vertical spacing:** Uses `var(--spacing-gap-md)` (24px) between sections
- **Paragraph spacing:** Automatic via `theme.css` semantic rules
- **Title margin:** Uses `var(--spacing-gap-lg)` (32px) bottom margin

### Colors
- **Title:** Uses `var(--foreground)` (automatic from semantic HTML)
- **Subtitle:** Uses `var(--muted-foreground)`
- **Body text:** Uses `var(--foreground)` (automatic)
- **Metadata:** Uses `var(--muted-foreground)`

### Dark Mode
All colors automatically switch via CSS variables. No manual dark mode handling required.

---

## Import

```typescript
import { EditorialContent } from "../components/patterns/EditorialContent";
```

**From pages:**
```typescript
import { EditorialContent } from "../components/patterns/EditorialContent";
```

**From components:**
```typescript
import { EditorialContent } from "./EditorialContent";
```

---

## Props

```typescript
interface EditorialContentProps {
  /** Main content (HTML string or React nodes) */
  content: string | React.ReactNode;
  
  /** Optional section title */
  title?: string;
  
  /** Optional subtitle */
  subtitle?: string;
  
  /** Optional reading time in minutes */
  readingTime?: number;
  
  /** Optional publication date */
  publishedDate?: string;
  
  /** Width variant */
  variant?: "narrow" | "standard" | "wide";
  
  /** Additional CSS classes */
  className?: string;
}
```

### Required Props

- **`content`** - Main editorial content
  - Type: `string | React.ReactNode`
  - Can be HTML string or React elements
  - Required

### Optional Props

- **`title`** - Section title (e.g., "About This Tour")
  - Type: `string`
  - Renders as `<h2>` with design system typography
  - Optional

- **`subtitle`** - Subtitle or tagline
  - Type: `string`
  - Renders with muted foreground color
  - Optional

- **`readingTime`** - Estimated reading time in minutes
  - Type: `number`
  - Displayed as "X min read" in metadata bar
  - Optional

- **`publishedDate`** - Publication date string
  - Type: `string`
  - Displayed in metadata bar
  - Optional

- **`variant`** - Content width variant
  - Type: `"narrow" | "standard" | "wide"`
  - Default: `"standard"`
  - Controls `max-width`:
    - `narrow`: 768px (blog posts, forms)
    - `standard`: 1024px (tour descriptions)
    - `wide`: 1280px (full-width editorial)
  - Optional

- **`className`** - Additional CSS classes
  - Type: `string`
  - Optional

---

## Usage Examples

### Basic Usage (Tour Description)

```typescript
<EditorialContent
  content={tour.description}
/>
```

### With Title and Reading Time

```typescript
<EditorialContent
  title="About This Tour"
  content={tour.description}
  readingTime={8}
/>
```

### Blog Post with Full Metadata

```typescript
<EditorialContent
  title={post.title}
  subtitle={post.excerpt}
  content={post.content}
  readingTime={post.readingTime}
  publishedDate={post.publishedDate}
  variant="narrow"
/>
```

### Wide Variant for Destination Guide

```typescript
<EditorialContent
  title="Discover Iceland"
  subtitle="The Land of Fire and Ice"
  content={destination.longDescription}
  variant="wide"
/>
```

### Multiple Editorial Sections

```typescript
{/* Primary description */}
<EditorialContent
  title="Tour Overview"
  content={tour.description}
/>

{/* Supporting content */}
<EditorialContent
  title="What to Expect"
  content={tour.expectations}
/>

{/* Practical information */}
<EditorialContent
  title="Good to Know"
  content={tour.practicalInfo}
/>
```

---

## Styling

### CSS File Location
`/src/styles/patterns/editorial-content.css`

### BEM Class Structure

```css
.wp-pattern-editorial-content {
  /* Container */
}

.wp-pattern-editorial-content__header {
  /* Title + metadata section */
}

.wp-pattern-editorial-content__title {
  /* Section title (h2) */
}

.wp-pattern-editorial-content__subtitle {
  /* Subtitle */
}

.wp-pattern-editorial-content__meta {
  /* Metadata bar (reading time, date) */
}

.wp-pattern-editorial-content__content {
  /* Main content container */
}

/* Variants */
.wp-pattern-editorial-content--narrow {
  /* max-width: 768px */
}

.wp-pattern-editorial-content--standard {
  /* max-width: 1024px */
}

.wp-pattern-editorial-content--wide {
  /* max-width: 1280px */
}
```

### All Styling Uses CSS Variables

```css
/* Typography */
font-family: var(--font-family-lora);
font-family: var(--font-family-noto-sans);
font-size: var(--text-4xl);
font-size: var(--text-sm);
font-weight: var(--font-weight-semibold);
line-height: var(--leading-relaxed);

/* Spacing */
gap: var(--spacing-gap-md);
margin-bottom: var(--spacing-gap-lg);
padding: var(--spacing-element-md);

/* Colors */
color: var(--foreground);
color: var(--muted-foreground);
background-color: var(--background);

/* Container */
max-width: var(--container-max-width-narrow);
```

**NO hardcoded values allowed.**

---

## Content Guidelines

### Semantic HTML Structure

The component uses semantic HTML for accessibility:

```html
<article className="wp-pattern-editorial-content">
  <header className="wp-pattern-editorial-content__header">
    <h2>Title</h2>
    <p>Subtitle</p>
    <div className="meta">
      <span>8 min read</span>
      <span>Published: Jan 15, 2026</span>
    </div>
  </header>
  
  <section className="wp-pattern-editorial-content__content">
    {/* Editorial content */}
  </section>
</article>
```

### Typography Hierarchy

Editorial content should follow proper heading hierarchy:
- Page title: `<h1>` (rendered by page template)
- Section titles: `<h2>` (EditorialContent title prop)
- Subsections within content: `<h3>`, `<h4>`, etc.

**Example:**
```html
<!-- Page template -->
<h1>Iceland Explorer: 7-Day Adventure</h1>

<!-- EditorialContent title -->
<h2>About This Tour</h2>

<!-- Within content -->
<h3>Day 1: Reykjavik Arrival</h3>
<h4>Morning Activities</h4>
```

### Content Formatting

**Lists:**
```html
<ul>
  <li>Included: Accommodation, meals, guide</li>
  <li>Not included: Flights, travel insurance</li>
</ul>
```

**Blockquotes:**
```html
<blockquote>
  "This tour exceeded all expectations!"
</blockquote>
```

**Emphasis:**
```html
<p>
  <strong>Important:</strong> Passport required for this tour.
</p>
```

---

## Accessibility

### WCAG 2.1 AA Compliance

✅ **Semantic HTML:**
- Uses `<article>`, `<header>`, `<section>` for structure
- Proper heading hierarchy
- Lists use `<ul>`, `<ol>`, `<li>`

✅ **Color Contrast:**
- All text meets 4.5:1 minimum (body text)
- Large text meets 3:1 minimum (headings)
- Uses CSS variables with WCAG-compliant colors

✅ **Keyboard Navigation:**
- No interactive elements (content display only)
- Links within content are keyboard-accessible

✅ **Screen Readers:**
- Semantic HTML provides proper document outline
- Reading time announced as "8 minutes read"
- Publication dates use proper date format

---

## Page Template Usage

### Single Tour Page

```typescript
<PageLayout>
  <main>
    {/* Hero */}
    <Hero
      title={tour.title}
      backgroundImage={tour.heroImage}
    />
    
    {/* Primary description */}
    <section className="wp-section wp-section--white">
      <Container>
        <EditorialContent
          title="About This Tour"
          content={tour.description}
          readingTime={tour.readingTime}
        />
      </Container>
    </section>
    
    {/* Itinerary */}
    <section className="wp-section wp-section--muted">
      <Container>
        <EditorialContent
          title="Day-by-Day Itinerary"
          content={tour.itinerary}
        />
      </Container>
    </section>
    
    {/* Practical info */}
    <section className="wp-section wp-section--white">
      <Container>
        <EditorialContent
          title="What's Included"
          content={tour.inclusions}
        />
      </Container>
    </section>
  </main>
</PageLayout>
```

### Blog Post Page

```typescript
<PageLayout>
  <main>
    {/* Article */}
    <section className="wp-section wp-section--white">
      <Container>
        <EditorialContent
          title={post.title}
          subtitle={post.excerpt}
          content={post.content}
          readingTime={post.readingTime}
          publishedDate={post.publishedDate}
          variant="narrow"
        />
      </Container>
    </section>
    
    {/* Related posts */}
    <section className="wp-section wp-section--muted">
      <Container>
        <h2>Related Posts</h2>
        <CardGrid items={relatedPosts} variant="3-col" />
      </Container>
    </section>
  </main>
</PageLayout>
```

---

## Related Components

- **`Hero`** - Page header/hero section (precedes editorial content)
- **`FastFacts`** - Meta/quick-facts sidebar pattern
- **`CTA`** - Call-to-action pattern (follows editorial content)
- **`CardGrid`** - Related content grid
- **`Container`** - Width constraint wrapper

---

## WordPress Alignment

### Block Pattern Mapping

In WordPress, this would be registered as a **content block pattern**:

```php
// patterns/editorial-content.php
register_block_pattern(
  'lsx-tour-operator/editorial-content',
  array(
    'title'       => __( 'Editorial Content', 'lsx-tour-operator' ),
    'description' => __( 'Long-form narrative content with title and metadata', 'lsx-tour-operator' ),
    'content'     => '<!-- wp:group {"className":"wp-pattern-editorial-content"} -->
                      <!-- wp:heading {"level":2} /-->
                      <!-- wp:paragraph /-->
                      <!-- /wp:group -->',
    'categories'  => array( 'lsx-tour-operator' ),
  )
);
```

### Template Usage

```html
<!-- single-tour.html -->
<!-- wp:pattern {"slug":"lsx-tour-operator/editorial-content"} /-->
```

---

## Testing Checklist

Before using this component, verify:

- [ ] Content renders with proper typography
- [ ] Title uses `<h2>` with correct design system styles
- [ ] Reading time displays correctly (if provided)
- [ ] Publication date displays correctly (if provided)
- [ ] Variant controls max-width correctly
- [ ] Dark mode colors switch automatically
- [ ] Responsive spacing works on mobile
- [ ] Semantic HTML structure is correct
- [ ] WCAG 2.1 AA compliant
- [ ] No hardcoded colors/fonts/spacing

---

## Common Pitfalls

❌ **Don't hardcode content:**
```typescript
<EditorialContent
  content="Lorem ipsum dolor sit amet..." // Hardcoded
/>
```

✅ **Use data from mock files:**
```typescript
<EditorialContent
  content={tour.description} // From mock data
/>
```

---

❌ **Don't use inline styles:**
```typescript
<EditorialContent
  content={tour.description}
  style={{ maxWidth: '800px' }} // WRONG
/>
```

✅ **Use variant prop:**
```typescript
<EditorialContent
  content={tour.description}
  variant="narrow" // CORRECT
/>
```

---

❌ **Don't nest EditorialContent:**
```typescript
<EditorialContent content={
  <EditorialContent content="..." /> // WRONG
} />
```

✅ **Use multiple sections:**
```typescript
<EditorialContent title="Section 1" content={content1} />
<EditorialContent title="Section 2" content={content2} />
```

---

## Version History

- **v1.0** (2026-02-01) - Initial implementation
- **v1.1** (2026-03-13) - Added comprehensive guidelines

---

**Status:** ✅ Complete and Production-Ready  
**Last Updated:** March 13, 2026
