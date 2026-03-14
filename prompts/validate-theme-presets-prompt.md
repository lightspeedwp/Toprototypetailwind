# Theme Presets Validation & Refactoring Prompt

## Objective
Validate that all Tailwind utility classes and hardcoded styling values used in the React prototype are fully backed by WordPress-aligned CSS variables in our central stylesheets (`/src/styles/`). 

We are moving away from raw Tailwind utilities toward a strict BEM-based architecture that utilizes `--wp--preset--*` and semantic CSS variables. This ensures 100% parity with WordPress `theme.json` configuration and enables user-driven global style updates.

## Task Requirements

Please execute an audit and then update the architecture based on the following criteria.

### 1. Spacing, Padding, and Margin (Zero Margin Policy)
- **Margin Policy:** Ensure strict adherence to the **Zero Margin Policy**. Margins should *only* be used for negative margin display hacks. 
- **BlockGap / Spacing:** All vertical and horizontal rhythms must use `gap` (BlockGap equivalent) or standard padding. 
- **Validation:** Verify variables like `--wp--preset--spacing--*` exist and are correctly mapped to our fluid scales. Replace any `m-[...]`, `mt-4`, `p-[24px]` with `var(--wp--preset--spacing--*)` or our explicit BEM utility classes (e.g. `has-spacing-md`).

### 2. Presets (Radii, Shadow, Border)
- **Radii:** Ensure `--wp--preset--radius--*` or semantic `--radius-*` variables exist in the stylesheets and are used globally. Remove any inline `rounded-[8px]` or arbitrary rounding.
- **Shadow:** Ensure `--wp--preset--shadow--*` or semantic `--elevation-*` variables exist for light and dark modes. Replace hardcoded shadow utilities.
- **Border:** Define standard border widths and colors.

### 3. Fonts & Typography
- **Fonts:** Replace all Tailwind font scales (e.g. `text-[10px]`, `text-sm`, `text-4xl`) with WordPress-aligned `--wp--preset--font-size--*` variables.
- **Families:** Ensure ONLY `--font-family-lora`, `--font-family-noto-sans`, and `--font-family-courier-new` (or their WP preset equivalents) are used.
- **Missing Variables:** If custom micro-copy sizes (like `10px` uppercase) are frequently used, create a specific semantic variable (e.g. `--wp--preset--font-size--micro` or `--wp--custom--typography--label`).

### 4. Colors & Gradients
- **Colors:** Verify that all colors are defined under the `--wp--preset--color--*` namespace and that they dynamically adjust between light/dark mode.
- **Gradients:** Ensure gradient presets `--wp--preset--gradient--*` exist in `/src/styles/theme-variables.css`.

### 5. Layout Widths
- Ensure layout constants match WordPress `theme.json` alignment rules:
  - `--wp--style--global--content-size`
  - `--wp--style--global--wide-size`
- Use the `.alignwide`, `.alignfull`, and `.wp-container` BEM classes instead of `max-w-[1440px]` or `w-full`.

### 6. Touch Targets & Hardcoded Sizes
- **Touch Targets:** For standard interactive elements (e.g., WCAG AA `44px` minimums), define a new CSS variable (e.g., `--wp--custom--touch-target--default: 44px;`).
- Replace inline classes like `min-h-[44px]`, `w-[100px]` with semantic BEM sizing classes or direct var usage.

### 7. Developer Tools Integration
- **Update Dev Tools:** Enhance the Developer Tools (e.g., `/src/app/pages/dev-tools/DesignTokensReference.tsx`) to surface these new `--wp--preset--*` variables and `--wp--custom--*` variables, reflecting our transition from Tailwind to our internal defined stylesheets.

## Execution Steps for the AI

1. **Audit Files:** Check `/src/styles/theme-base.css`, `/src/styles/theme-variables.css`, `/src/styles/global.css`, and `/src/styles/tailwind.css`.
2. **Add Missing Tokens:** Add the missing presets to the appropriate `.css` files.
3. **Update Guidelines:** Update any relevant guideline files in `/guidelines/design-tokens/` to reflect these newly formalized WordPress variables.
4. **Update Dev Tools:** Modify the `DesignTokensReference.tsx` to list the new structural, touch-target, and layout variables.
5. **Report & Tasks:** Generate an audit report saving it to `/reports/`, and update the master task list.

**Please confirm you understand these instructions and begin step 1 of the execution.**