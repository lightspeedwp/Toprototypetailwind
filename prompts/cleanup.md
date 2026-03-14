# Cleanup & Audit Prompt

**Version:** 1.0  
**Purpose:** Comprehensive audit and cleanup of the project file system, routes, imports, documentation, and task tracking  
**Execution:** Single-session complete cleanup  
**Frequency:** Run regularly (weekly or before major milestones)

---

## 🚨 CRITICAL: FIGMA MAKE ENVIRONMENT CONSTRAINTS

**You are operating in Figma Make, NOT a traditional development environment:**

- ❌ **DO NOT** tell user to refresh browser
- ❌ **DO NOT** tell user to clear cache
- ❌ **DO NOT** tell user to restart dev server
- ❌ **DO NOT** tell user to run npm/pnpm commands manually
- ✅ **DO** use available tools (read, write, edit, delete, file_search, install_package)
- ✅ **DO** make all changes programmatically through tools
- ✅ **DO** verify changes by reading files after modification

---

## 📋 CLEANUP AUDIT CHECKLIST

Execute each section in order. Mark each step as complete before moving to the next.

### 1. FILE SYSTEM AUDIT

#### 1.1 Root Directory Cleanup

**Scan root directory for:**
- ❌ Unauthorized .md files (except README.md, CHANGELOG.md, Guidelines.md)
- ❌ Orphaned config files (.eslintrc, .prettierrc without packages)
- ❌ Numbered variants (file-2.tsx, component-backup.tsx)
- ❌ Old report files (*-report.md, *-summary.md)
- ❌ Task list files (*-tasks.md, *-checklist.md)
- ❌ Shell scripts (*.sh should be in /scripts/)
- ❌ Backup files (*-backup.*, *-old.*)

**Actions:**
1. Read root directory: `read /`
2. Identify unauthorized files
3. Move documentation to `/docs/`
4. Move reports to `/reports/archive/`
5. Move task lists to `/tasks/archive/`
6. Move scripts to `/scripts/`
7. Delete duplicate/obsolete files
8. Document all moves/deletes in cleanup log

#### 1.2 Protected Files Verification

**Verify these files exist and are untouched:**
- `/src/app/components/figma/ImageWithFallback.tsx`
- `/pnpm-lock.yaml`
- `/index.html`
- `/package.json`
- `/vite.config.ts`
- `/tsconfig.json`
- `/tsconfig.node.json`

**Action:** If any protected file is missing or corrupted, flag immediately and DO NOT proceed.

#### 1.3 Directory Structure Validation

**Verify required directories exist:**
```
/
├── /docs/
├── /docs/guides/
├── /docs/figma-make/
├── /guidelines/
├── /guidelines/blocks/
├── /guidelines/components/
├── /guidelines/design-tokens/
├── /guidelines/icons/
├── /guidelines/patterns/
├── /guidelines/styles/
├── /prompts/
├── /reports/
├── /reports/archive/
├── /scripts/
├── /src/
├── /src/app/
├── /src/app/components/
├── /src/app/components/blocks/
├── /src/app/components/common/
├── /src/app/components/parts/
├── /src/app/components/patterns/
├── /src/app/components/ui/
├── /src/app/data/
├── /src/app/hooks/
├── /src/app/lib/
├── /src/app/pages/
├── /src/app/utils/
├── /src/styles/
├── /tasks/
└── /tasks/archive/
```

**Action:** Create any missing directories.

---

### 2. ROUTING AUDIT

#### 2.1 Scan All Pages

**Action:**
1. Read `/src/app/pages/` directory
2. List all .tsx files
3. Extract route paths from each page component
4. Document expected routes

#### 2.2 Verify routes.ts

**Action:**
1. Read `/src/app/routes.tsx` or `/src/app/routes.ts`
2. Compare routes defined vs pages that exist
3. Identify missing routes
4. Identify orphaned routes (routes without corresponding pages)

#### 2.3 Fix Route Definitions

**Action:**
1. Add missing routes to routes file
2. Remove orphaned routes
3. Verify route hierarchy (parent/child relationships)
4. Ensure catch-all 404 route exists: `{ path: "*", Component: NotFound }`
5. Test route imports resolve correctly

---

### 3. IMPORT AUDIT

#### 3.1 CSS Import Verification

**Scan for broken CSS imports in:**
- `/src/app/App.tsx`
- `/src/app/pages/*.tsx`
- `/src/app/components/**/*.tsx`

**Check for:**
- ❌ Non-existent CSS files
- ❌ Incorrect relative paths
- ❌ Orphaned CSS files (CSS files with no imports)

**Action:**
1. Use `file_search` to find all CSS imports: `import.*\.css`
2. Verify each CSS file exists at specified path
3. Fix broken paths
4. Remove imports to non-existent files
5. Create missing CSS files OR remove imports

#### 3.2 JavaScript/TypeScript Import Verification

**Scan for broken JS/TS imports in:**
- All `.tsx` and `.ts` files

**Check for:**
- ❌ Non-existent component imports
- ❌ Incorrect relative paths
- ❌ Circular dependencies
- ❌ Unused imports

**Action:**
1. Use `file_search` to find import statements: `^import.*from`
2. Verify each imported file exists
3. Fix broken relative paths
4. Remove unused imports
5. Flag circular dependencies for manual review

#### 3.3 Asset Import Verification

**Check for:**
- ❌ Broken image imports (`figma:asset/*`, relative image paths)
- ❌ Broken SVG imports
- ❌ Missing alt text on images

**Action:**
1. Search for image imports: `import.*\.(png|jpg|jpeg|webp|svg)`
2. Verify `figma:asset` imports are valid
3. Verify relative SVG paths exist
4. Ensure all `<img>` tags have `alt` attributes
5. Ensure all `<ImageWithFallback>` components have `alt` props

---

### 4. DESIGN SYSTEM COMPLIANCE AUDIT

#### 4.1 CSS Variables Usage

**Scan for violations:**
- ❌ Hardcoded colors: `#[0-9a-fA-F]{3,6}`, `rgb(`, `rgba(`
- ❌ Hardcoded fonts: `font-family: "(?!var\()`
- ❌ Inline styles: `style={{`
- ❌ Dark mode classes: `dark:`

**Action:**
1. Search for hardcoded colors: `file_search("#[0-9a-fA-F]{3,6}")`
2. Search for inline styles: `file_search("style={{")`
3. Search for dark: classes: `file_search("dark:")`
4. Generate violation report
5. Flag files for manual review (DO NOT auto-fix design system violations)

#### 4.2 Typography Compliance

**Check for:**
- ❌ Non-approved fonts (anything other than Lora, Noto Sans, Courier New)
- ❌ Hardcoded font sizes
- ❌ Hardcoded font weights

**Action:**
1. Search for font-family declarations
2. Verify only approved fonts used
3. Flag violations for review

---

### 5. DOCUMENTATION UPDATES

#### 5.1 Update CHANGELOG.md

**Action:**
1. Read `/CHANGELOG.md`
2. Add new entry with today's date: `## [Unreleased] - YYYY-MM-DD`
3. Document cleanup activities under `### Changed`, `### Fixed`, `### Removed`
4. Include summary of files moved, deleted, routes added/removed

**Format:**
```markdown
## [Unreleased] - 2026-03-13

### Changed
- Reorganized task lists: archived 3 completed task files
- Updated master task list status

### Fixed
- Added missing routes for [list pages]
- Fixed broken CSS imports in [list files]
- Corrected relative paths in [list files]

### Removed
- Deleted orphaned config files: [list]
- Archived old reports: [list]
```

#### 5.2 Update Guidelines.md

**Action:**
1. Read `/Guidelines.md`
2. Verify directory structure matches actual project structure
3. Update "Quick Reference Checklist" with current status
4. Add/remove guideline references as needed
5. Update "Active Engineering Projects" section if applicable

#### 5.3 Update Sitemap (If Exists)

**Action:**
1. Check if `/guidelines/overview-sitemap.md` exists
2. Read current routes from `/src/app/routes.tsx`
3. Update sitemap to reflect current page structure
4. Add new pages, remove deleted pages
5. Verify parent/child route relationships

#### 5.4 Update DevTools Pages

**If DevTools exist (Template Browser, Dark Mode Switcher):**

**Action:**
1. Read `/src/app/components/common/TemplateBrowser.tsx` (or similar)
2. Verify list of templates/pages matches actual routes
3. Update template list if needed
4. Test that all links resolve

---

### 6. TASK MANAGEMENT CLEANUP

#### 6.1 Review Master Task List

**Action:**
1. Read `/tasks/task-list.md`
2. Identify completed tasks (marked with `[x]`)
3. Identify stale/outdated tasks
4. Update status for each task list reference

#### 6.2 Archive Completed Task Files

**Action:**
1. Read `/tasks/` directory
2. For each task file:
   - Check if all tasks marked complete `[x]`
   - If complete: move to `/tasks/archive/`
   - If incomplete: leave in `/tasks/`
3. Document archived files

#### 6.3 Update Task List Status

**Action:**
1. For each active task list in `/tasks/task-list.md`:
   - Read the referenced task file
   - Count total tasks vs completed tasks
   - Update status: `[0/10]`, `[5/10]`, `[10/10 - COMPLETE]`
2. Mark archived task lists with `[ARCHIVED]`

#### 6.4 Clean Up Reports

**Action:**
1. Read `/reports/` directory
2. Identify reports older than 30 days
3. Move old reports to `/reports/archive/`
4. Delete duplicate reports (keep most recent)
5. Organize related reports into subfolders

---

### 7. FINAL VERIFICATION

#### 7.1 Build Test Simulation

**Action:**
1. Verify all imports resolve (no TypeScript errors expected)
2. Check for common issues:
   - Missing default exports in pages
   - Circular dependencies
   - Unused imports that could cause tree-shaking issues

#### 7.2 Generate Cleanup Report

**Create:** `/reports/YYYY-MM-DD-cleanup-report.md`

**Include:**
- Date of cleanup
- Summary of actions taken
- Files moved (with before/after paths)
- Files deleted (with reasons)
- Routes added/removed
- Imports fixed
- Design system violations found (count only, no fixes)
- Task lists archived
- Next recommended actions

**Template:**
```markdown
# Cleanup & Audit Report

**Date:** YYYY-MM-DD  
**Executed By:** AI Assistant  
**Duration:** [time taken]

---

## Summary

- **Files Moved:** X files
- **Files Deleted:** X files
- **Routes Added:** X routes
- **Routes Removed:** X routes
- **Imports Fixed:** X imports
- **Task Lists Archived:** X files
- **Reports Archived:** X files

---

## Detailed Actions

### 1. Root Directory Cleanup
- Moved: [file] → [destination]
- Deleted: [file] (reason)

### 2. Routing Updates
- Added route: [path] → [component]
- Removed route: [path] (reason)

### 3. Import Fixes
- Fixed: [file] - [description]

### 4. Design System Violations Found
- [X violations found - manual review required]
- See: [link to violation list]

### 5. Task Management
- Archived: [task file] (all tasks complete)
- Updated: /tasks/task-list.md

### 6. Documentation Updates
- Updated: CHANGELOG.md
- Updated: Guidelines.md
- Updated: Sitemap

---

## Next Recommended Actions

1. [Action 1]
2. [Action 2]
3. [Action 3]

---

## Protected Files Status

✅ All protected files intact
- /src/app/components/figma/ImageWithFallback.tsx
- /pnpm-lock.yaml
```

#### 7.3 Update Master Task List

**Action:**
1. Read `/tasks/task-list.md`
2. Add new entry:
   ```markdown
   - [x] Project cleanup and audit completed (YYYY-MM-DD)
   ```
3. Update status of any modified task lists

---

## 🎯 COMPLETION CRITERIA

**Cleanup is complete when:**

- ✅ Root directory contains ONLY allowed files
- ✅ All routes in routes.ts have corresponding page files
- ✅ All page files have routes defined
- ✅ Zero broken CSS imports
- ✅ Zero broken JS/TS imports
- ✅ CHANGELOG.md updated with cleanup summary
- ✅ Guidelines.md reflects current structure
- ✅ Sitemap updated (if exists)
- ✅ DevTools updated (if exist)
- ✅ Completed task files archived
- ✅ Master task list status updated
- ✅ Old reports archived
- ✅ Cleanup report generated
- ✅ All protected files intact

---

## 🔄 POST-CLEANUP

**After cleanup completion:**

1. Present cleanup report to user
2. Highlight any critical issues found
3. Ask if user wants to proceed with design system violation fixes (if found)
4. Recommend next logical task from `/tasks/task-list.md`

**DO NOT:**
- Tell user to refresh browser
- Tell user to restart server
- Tell user to clear cache

**DO:**
- Present findings clearly
- Provide actionable next steps
- Ask for user confirmation before major changes
