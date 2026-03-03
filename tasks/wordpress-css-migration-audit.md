# WordPress CSS Migration Audit & Task Generation

## Objective
Audit the entire codebase to identify and replace ALL Tailwind CSS utility classes with WordPress theme.json-aligned CSS classes that use semantic naming conventions and CSS custom properties.

## Audit Scope

### Files to Audit
- `/src/app/pages/**/*.tsx` - All page templates
- `/src/app/components/**/*.tsx` - All components (parts, patterns, blocks, common)
- `/src/styles/**/*.css` - All stylesheets

### Exclusions
- `/src/app/components/figma/**/*` - Protected Figma utilities
- `/src/app/components/ui/**/*` - shadcn/ui library (can be migrated separately)
- `node_modules/**/*` - Third-party code

## WordPress CSS Class Conventions

### Naming Pattern: Block Element Modifier (BEM)
```
.wp-block-{namespace}-{block-name}
.wp-block-{namespace}-{block-name}__element
.wp-block-{namespace}-{block-name}--modifier
```

### Examples
```css
/* Block */
.wp-block-lts-hero { }

/* Element */
.wp-block-lts-hero__title { }
.wp-block-lts-hero__content { }
.wp-block-lts-hero__image { }

/* Modifier */
.wp-block-lts-hero--full-width { }
.wp-block-lts-hero--centered { }
```

## Tailwind to WordPress Mapping Rules

### Layout Classes
| Tailwind | WordPress Class | CSS Custom Properties |
|----------|----------------|----------------------|
| `container` | `.wp-block-lts-container` | `max-width: var(--wp--custom--spacing--outer);` |
| `mx-auto` | `.wp-block-lts-container--centered` | `margin-inline: auto;` |
| `flex` | `.wp-block-lts-layout--flex` | `display: flex;` |
| `grid` | `.wp-block-lts-layout--grid` | `display: grid;` |
| `flex-col` | `.wp-block-lts-layout--flex-col` | `flex-direction: column;` |
| `items-center` | `.wp-block-lts-layout--items-center` | `align-items: center;` |
| `justify-between` | `.wp-block-lts-layout--justify-between` | `justify-content: space-between;` |

### Spacing Classes
| Tailwind | WordPress Class | CSS Custom Properties |
|----------|----------------|----------------------|
| `p-4` | `.has-padding-4` | `padding: var(--wp--preset--spacing--40);` |
| `py-8` | `.has-vertical-padding-8` | `padding-block: var(--wp--preset--spacing--80);` |
| `px-6` | `.has-horizontal-padding-6` | `padding-inline: var(--wp--preset--spacing--60);` |
| `gap-4` | `.has-gap-4` | `gap: var(--wp--preset--spacing--40);` |
| `mb-12` | `.has-margin-bottom-12` | `margin-bottom: var(--wp--preset--spacing--120);` |

### Color Classes
| Tailwind | WordPress Class | CSS Custom Properties |
|----------|----------------|----------------------|
| `bg-background` | `.has-background-background-color` | `background-color: var(--wp--preset--color--background);` |
| `text-foreground` | `.has-foreground-color` | `color: var(--wp--preset--color--foreground);` |
| `bg-primary` | `.has-primary-background-color` | `background-color: var(--wp--preset--color--primary);` |
| `text-primary` | `.has-primary-color` | `color: var(--wp--preset--color--primary);` |
| `border-border` | `.has-border-border-color` | `border-color: var(--wp--preset--color--border);` |

### Typography Classes
| Tailwind | WordPress Class | CSS Custom Properties |
|----------|----------------|----------------------|
| `font-serif` | `.has-lora-font-family` | `font-family: var(--wp--preset--font-family--lora);` |
| `font-sans` | `.has-noto-sans-font-family` | `font-family: var(--wp--preset--font-family--noto-sans);` |
| `font-mono` | `.has-courier-new-font-family` | `font-family: var(--wp--preset--font-family--courier-new);` |
| `text-base` | `.has-base-font-size` | `font-size: var(--wp--preset--font-size--base);` |
| `text-lg` | `.has-large-font-size` | `font-size: var(--wp--preset--font-size--large);` |

### Border & Radius Classes
| Tailwind | WordPress Class | CSS Custom Properties |
|----------|----------------|----------------------|
| `rounded-md` | `.has-border-radius-medium` | `border-radius: var(--wp--custom--border-radius--medium);` |
| `rounded-lg` | `.has-border-radius-large` | `border-radius: var(--wp--custom--border-radius--large);` |
| `border` | `.has-border` | `border: 1px solid var(--wp--preset--color--border);` |
| `border-2` | `.has-border-2` | `border-width: 2px;` |

### Shadow Classes
| Tailwind | WordPress Class | CSS Custom Properties |
|----------|----------------|----------------------|
| `shadow-sm` | `.has-shadow-small` | `box-shadow: var(--wp--custom--shadow--small);` |
| `shadow-md` | `.has-shadow-medium` | `box-shadow: var(--wp--custom--shadow--medium);` |

### Responsive Classes
| Tailwind | WordPress Class Pattern |
|----------|------------------------|
| `md:flex` | `.md\:has-flex-layout` |
| `lg:grid-cols-3` | `.lg\:has-grid-3-cols` |
| `sm:text-lg` | `.sm\:has-large-font-size` |

## Audit Process

### Step 1: Component Inventory
Create a comprehensive list of ALL components using Tailwind classes:

```bash
# Find all .tsx files with className attributes
find src/app -name "*.tsx" -type f ! -path "*/figma/*" ! -path "*/ui/*" -exec grep -l "className" {} \;
```

### Step 2: Tailwind Class Extraction
For each component, extract all unique Tailwind utility classes:

```bash
# Extract all className values
grep -r "className=\"[^\"]*\"" src/app --include="*.tsx" --exclude-dir={figma,ui} | \
  sed 's/.*className="\([^"]*\)".*/\1/' | \
  tr ' ' '\n' | \
  sort -u
```

### Step 3: Classification by Category
Group Tailwind classes into categories:
- Layout (flex, grid, container)
- Spacing (padding, margin, gap)
- Colors (bg-, text-, border-)
- Typography (font-, text-, leading-)
- Borders (border, rounded)
- Shadows (shadow-)
- Responsive prefixes (sm:, md:, lg:)

### Step 4: WordPress Class Creation
For each Tailwind class, create corresponding WordPress-aligned:
1. CSS class name (BEM convention)
2. CSS custom property reference
3. CSS definition in appropriate stylesheet

### Step 5: Component Migration Priority
Prioritize components by type:
1. **Template Parts** (Header, Footer) - Highest impact
2. **Page Templates** (Single, Archive) - Core structure
3. **Patterns** (Hero, CardGrid, CTA) - Reusable compositions
4. **Blocks** (Tour operator blocks) - Content-specific
5. **Common** (Container, Logo) - Utilities

## Task List Structure

For each component, create tasks in this format:

```markdown
### [Component Name] - [File Path]

**Priority:** [High/Medium/Low]
**Category:** [Template Part/Page Template/Pattern/Block/Common]
**Estimated Effort:** [Small/Medium/Large]

#### Current Tailwind Classes
- `flex items-center justify-between`
- `py-4 px-6`
- `bg-background text-foreground`

#### Target WordPress Classes
- `.wp-block-lts-[component]--layout-flex`
- `.wp-block-lts-[component]--centered`
- `.has-vertical-padding-4`
- `.has-horizontal-padding-6`
- `.has-background-background-color`
- `.has-foreground-color`

#### CSS to Add
```css
.wp-block-lts-[component] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--wp--preset--spacing--40);
  padding-inline: var(--wp--preset--spacing--60);
  background-color: var(--wp--preset--color--background);
  color: var(--wp--preset--color--foreground);
}
```

#### Files to Modify
- [ ] `/src/app/components/[path]/[Component].tsx`
- [ ] `/src/styles/blocks/[component].css` (create if needed)
- [ ] `/src/styles/global.css` (import new stylesheet)

#### Testing Checklist
- [ ] Component renders correctly
- [ ] Light mode styling matches original
- [ ] Dark mode styling matches original
- [ ] Responsive breakpoints work
- [ ] No Tailwind classes remain
```

## CSS File Organization

### New Directory Structure
```
/src/styles/
├── theme.css                    # Main entry point, CSS custom properties
├── theme-light.css              # Light mode token values
├── theme-dark.css               # Dark mode token values
├── global.css                   # Global styles, imports
├── wordpress-classes.css        # NEW: WordPress utility classes
├── blocks/                      # NEW: Block-specific styles
│   ├── hero.css
│   ├── card-grid.css
│   ├── cta.css
│   └── ...
├── parts/                       # NEW: Template part styles
│   ├── header.css
│   └── footer.css
└── utilities/                   # NEW: Utility classes
    ├── layout.css
    ├── spacing.css
    └── typography.css
```

### wordpress-classes.css Template
```css
/**
 * WordPress Theme.json Aligned Utility Classes
 * 
 * These classes follow WordPress block theme conventions:
 * - BEM naming: .wp-block-{namespace}-{block}__element--modifier
 * - Semantic naming: .has-{property}-{value}
 * - CSS custom properties only (no hardcoded values)
 * - Automatic dark mode via theme.css variables
 */

/* Layout Utilities */
.wp-block-lts-layout--flex { display: flex; }
.wp-block-lts-layout--grid { display: grid; }
.wp-block-lts-layout--flex-col { flex-direction: column; }
.wp-block-lts-layout--items-center { align-items: center; }
.wp-block-lts-layout--justify-between { justify-content: space-between; }

/* Container */
.wp-block-lts-container {
  max-width: var(--wp--custom--spacing--outer);
  margin-inline: auto;
  padding-inline: var(--wp--preset--spacing--40);
}

/* Spacing Utilities */
.has-padding-4 { padding: var(--wp--preset--spacing--40); }
.has-padding-6 { padding: var(--wp--preset--spacing--60); }
.has-padding-8 { padding: var(--wp--preset--spacing--80); }

.has-vertical-padding-4 { padding-block: var(--wp--preset--spacing--40); }
.has-vertical-padding-6 { padding-block: var(--wp--preset--spacing--60); }
.has-vertical-padding-8 { padding-block: var(--wp--preset--spacing--80); }

/* Color Utilities */
.has-background-background-color { background-color: var(--wp--preset--color--background); }
.has-foreground-color { color: var(--wp--preset--color--foreground); }
.has-primary-background-color { background-color: var(--wp--preset--color--primary); }
.has-primary-color { color: var(--wp--preset--color--primary); }

/* Typography Utilities */
.has-lora-font-family { font-family: var(--wp--preset--font-family--lora); }
.has-noto-sans-font-family { font-family: var(--wp--preset--font-family--noto-sans); }
.has-base-font-size { font-size: var(--wp--preset--font-size--base); }
.has-large-font-size { font-size: var(--wp--preset--font-size--large); }

/* Border & Radius Utilities */
.has-border { border: 1px solid var(--wp--preset--color--border); }
.has-border-radius-medium { border-radius: var(--wp--custom--border-radius--medium); }

/* Shadow Utilities */
.has-shadow-small { box-shadow: var(--wp--custom--shadow--small); }

/* Responsive Utilities */
@media (min-width: 768px) {
  .md\:has-flex-layout { display: flex; }
  .md\:has-grid-layout { display: grid; }
}

@media (min-width: 1024px) {
  .lg\:has-grid-3-cols { grid-template-columns: repeat(3, 1fr); }
}
```

## Success Criteria

### Phase 1: Audit Complete
- [ ] All .tsx files scanned
- [ ] All Tailwind classes extracted and categorized
- [ ] WordPress class mappings documented
- [ ] Task list generated in `/tasks/tailwind-to-wordpress-migration.md`

### Phase 2: CSS Foundation
- [ ] `wordpress-classes.css` created with all utility classes
- [ ] Block-specific stylesheets created in `/src/styles/blocks/`
- [ ] Template part stylesheets created in `/src/styles/parts/`
- [ ] All stylesheets imported in `global.css`

### Phase 3: Component Migration
- [ ] All components converted to WordPress classes
- [ ] All Tailwind classes removed from codebase
- [ ] Visual regression testing confirms no styling changes
- [ ] Light and dark modes work identically

### Phase 4: Verification
- [ ] Zero Tailwind utilities in component files
- [ ] Zero hardcoded color values
- [ ] All components use CSS custom properties
- [ ] Responsive breakpoints functional
- [ ] WCAG AA/AAA compliance maintained

## Automation Scripts

### Extract Tailwind Classes
```bash
#!/bin/bash
# extract-tailwind-classes.sh

echo "Extracting Tailwind classes from codebase..."

find src/app -name "*.tsx" -type f ! -path "*/figma/*" ! -path "*/ui/*" | while read file; do
  echo "=== $file ===" >> tailwind-classes.txt
  grep -o 'className="[^"]*"' "$file" | \
    sed 's/className="//;s/"$//' | \
    tr ' ' '\n' | \
    grep -v '^$' | \
    sort -u >> tailwind-classes.txt
  echo "" >> tailwind-classes.txt
done

echo "Extraction complete. Results in tailwind-classes.txt"
```

### Verify Migration
```bash
#!/bin/bash
# verify-migration.sh

echo "Verifying Tailwind removal..."

# Count remaining Tailwind classes
tailwind_count=$(grep -r "className=\"[^\"]*\(flex\|grid\|p-\|m-\|bg-\|text-\).*\"" src/app --include="*.tsx" --exclude-dir={figma,ui} | wc -l)

if [ $tailwind_count -eq 0 ]; then
  echo "✅ SUCCESS: No Tailwind classes found"
  exit 0
else
  echo "❌ FAIL: Found $tailwind_count files with Tailwind classes"
  grep -r "className=\"[^\"]*\(flex\|grid\|p-\|m-\|bg-\|text-\).*\"" src/app --include="*.tsx" --exclude-dir={figma,ui}
  exit 1
fi
```

## Migration Strategy

### Approach A: Big Bang (Fastest but Riskier)
1. Create all WordPress CSS classes upfront
2. Migrate all components in parallel
3. Single large PR with comprehensive testing

**Pros:**
- Fastest completion time
- Single context switch
- Consistent approach

**Cons:**
- High risk of regressions
- Difficult to test incrementally
- Large PR review burden

### Approach B: Incremental (Slower but Safer)
1. Migrate by component category (parts → templates → patterns → blocks)
2. Test each category thoroughly before proceeding
3. Multiple smaller PRs with focused testing

**Pros:**
- Lower risk of regressions
- Easier to test and review
- Can pause/resume easily

**Cons:**
- Longer total time
- Multiple context switches
- Mixed Tailwind/WordPress classes during migration

### Recommended: Approach B (Incremental)

**Phase 1:** Template Parts (2 components)
- Header, Footer
- Highest visibility, test thoroughly

**Phase 2:** Page Templates (8 templates)
- Archive, Single, Taxonomy templates
- Core structure components

**Phase 3:** Patterns (15-20 components)
- Hero, CardGrid, CTA, Editorial
- Reusable compositions

**Phase 4:** Blocks (30+ components)
- Tour operator blocks
- Content-specific components

**Phase 5:** Common Utilities (5-10 components)
- Container, Logo, BackToTop
- Low-risk utilities

## Next Steps

1. **Review this audit specification** - Confirm approach and conventions
2. **Run extraction scripts** - Generate comprehensive Tailwind class inventory
3. **Generate task list** - Create detailed migration tasks in `/tasks/tailwind-to-wordpress-migration.md`
4. **Create CSS foundation** - Build `wordpress-classes.css` and block stylesheets
5. **Begin incremental migration** - Start with Template Parts (highest priority)

---

## Notes

- This migration maintains 100% visual fidelity
- All CSS custom properties preserved
- Design system compliance unchanged
- Only class names and CSS organization changes
- WordPress theme.json alignment achieved
