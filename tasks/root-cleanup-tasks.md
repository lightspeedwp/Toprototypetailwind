# Root Cleanup Tasks

**Created:** February 25, 2026  
**Based On:** `/reports/root-cleanup/phase-1-files-audit.md`  
**Parent Prompt:** `/prompts/root-cleanup-orchestrator.md`  
**Status:** 🔴 Not Started  
**Priority:** 🚨 CRITICAL  
**Est. Time:** 2-3 hours

---

## 📊 OVERVIEW

- **Files to Delete:** 15 files
- **Files to Move:** 287 files
- **Folders to Create:** 6 folders
- **Files to Keep:** 7 files

**Impact:** Root directory will reduce from 314 files → 7 files (98% reduction!)

---

## 🚨 PHASE 1: DELETE CONFIG FILES (15 files) - HIGH PRIORITY

### Batch 1: ESLint & Prettier (3 files)
- [ ] Delete `.eslintrc.cjs` (ESLint not in package.json)
- [ ] Delete `.prettierrc` (Prettier not needed)
- [ ] Delete `.prettierignore` (Prettier not needed)

**Verification:**
```bash
# After deletion, verify build still works
npm run build
```

### Batch 2: Storybook Files (3 files)
- [ ] Delete `main.ts` (Storybook config)
- [ ] Delete `preview.ts` (Storybook preview)
- [ ] Delete `preview.tsx` (Storybook preview)
- [ ] Delete `Introduction.mdx` (Storybook docs)
- [ ] Delete `Accessibility.mdx` (Storybook docs)
- [ ] Delete `DesignTokens.mdx` (Storybook docs)

**Verification:**
```bash
# Verify no imports reference these files
grep -r "main.ts\|preview.ts\|Introduction.mdx" src/
```

### Batch 3: Orphaned Configs (6 files)
- [ ] Delete `.npmrc` (May interfere with Figma Make)
- [ ] Delete `postcss.config.mjs` (Empty file)
- [ ] Delete `__figma__entrypoint__.ts` (Orphaned)
- [ ] Delete `pnpm-workspace.yaml` (Monorepo config)
- [ ] Delete `design-system-verify.sh` (Old script)
- [ ] Delete `default_shadcn_theme.css` (Not imported)

**Verification:**
```bash
# Verify these aren't imported or required
npm run build
npm run dev
```

---

## 📁 PHASE 2: CREATE FOLDER STRUCTURE - MEDIUM PRIORITY

- [ ] Create `/reports/archive/`
- [ ] Create `/reports/archive/batches/`
- [ ] Create `/reports/archive/completed/`
- [ ] Create `/tasks/archive/`
- [ ] Create `/docs/`
- [ ] Create `/docs/figma-make/`
- [ ] Create `/docs/guides/`
- [ ] Create `/docs/quick-reference/`

**Verification:**
```bash
ls -la /reports/archive/
ls -la /tasks/archive/
ls -la /docs/
```

---

## 📚 PHASE 2.5: MOVE RECENTLY CREATED FILES (Immediate) - HIGH PRIORITY

### Just Created (Need to Move Now):
- [ ] Move `/QUICK-REFERENCE-PROJECT-ORGANIZATION.md` → `/docs/project-organization-quick-reference.md` ✅ DONE
- [ ] Move `/FIGMA-MAKE-CLEANUP-PLAN.md` → `/docs/figma-make/cleanup-plan.md`
- [ ] Move `/FIGMA-MAKE-READY-SUMMARY.md` → `/docs/figma-make/ready-summary.md`
- [ ] Move `/QUICK-START-GUIDE.md` → `/docs/figma-make/quick-start-guide.md`

**Note:** These were just created but should NOT be in root!

---

## 📁 PHASE 2: CREATE FOLDER STRUCTURE - MEDIUM PRIORITY

- [x] Create `/docs/` ✅
- [ ] Create `/reports/archive/`
- [ ] Create `/reports/archive/batches/`
- [ ] Create `/reports/archive/completed/`
- [ ] Create `/tasks/archive/`
- [ ] Create `/docs/figma-make/`
```

---

## 📚 PHASE 3: MOVE DOCUMENTATION FILES (287 files) - MEDIUM PRIORITY

### Batch 1: Figma Make Documentation (5 files)
- [ ] Move `FIGMA-MAKE-CLEANUP-PLAN.md` → `/docs/figma-make/`
- [ ] Move `FIGMA-MAKE-READY-SUMMARY.md` → `/docs/figma-make/`
- [ ] Move `QUICK-START-GUIDE.md` → `/docs/figma-make/`

### Batch 2: Batch Reports (65+ files)
- [ ] Move all `BATCH-*.md` files → `/reports/archive/batches/`

**Pattern:**
```bash
BATCH-2-COMPLETE.md
BATCH-3-COMPLETE.md
BATCH-4-ACCESSIBILITY-AUDIT-COMPLETE.md
... (62 more batch files)
```

### Batch 3: Completed Work Reports (50+ files)
- [ ] Move all `*COMPLETE*.md` files → `/reports/archive/completed/`
- [ ] Move all `*FINISHED*.md` files → `/reports/archive/completed/`
- [ ] Move all `*DONE*.md` files → `/reports/archive/completed/`

**Pattern:**
```bash
AUDIT-COMPLETE.md
AUTOMATION-COMPLETE-SUMMARY.md
CSS-MIGRATION-COMPLETE.md
... (47 more completed files)
```

### Batch 4: Audit Reports (50+ files)
- [ ] Move `AUDIT-*.md` files → `/reports/archive/`
- [ ] Move `*-AUDIT-*.md` files → `/reports/archive/`

**Pattern:**
```bash
AUDIT-EXECUTIVE-SUMMARY.md
AUDIT-FINDINGS-AND-FIX-GUIDE.md
ACCESSIBILITY-IMPROVEMENTS-PHASE-2.md
ARCHIVE-AUDIT-EXECUTIVE-SUMMARY.md
... (46 more audit files)
```

### Batch 5: Recent Reports (Keep in /reports/)
- [ ] Identify reports created in last 7 days (Feb 18-25)
- [ ] Move to `/reports/` (not archive)

**Criteria:** Files modified after February 18, 2026

### Batch 6: Task Files (20+ files)
- [ ] Move completed task files → `/tasks/archive/`
- [ ] Keep active task files in `/tasks/`

**Pattern:**
```bash
*TASK*.md (if completed)
*TODO*.md (if completed)
*CHECKLIST*.md (if completed)
```

### Batch 7: General Documentation (100+ files)
- [ ] Review remaining .md files
- [ ] Move guidelines to `/guidelines/` (if applicable)
- [ ] Move general docs to `/docs/`

**Criteria:** Files that don't fit other categories

---

## ✅ PHASE 4: VERIFICATION - HIGH PRIORITY

### After Each Batch:
- [ ] Run `npm run build` - Verify build succeeds
- [ ] Run `npm run dev` - Verify dev server starts
- [ ] Check browser console - No errors
- [ ] Test key pages - Home, Tours, Destinations

### Final Verification:
- [ ] All 15 config files deleted
- [ ] All 287 .md files moved to organized folders
- [ ] Root directory has only 7 essential files
- [ ] Build succeeds: `npm run build`
- [ ] Dev server works: `npm run dev`
- [ ] All pages render correctly
- [ ] No TypeScript errors
- [ ] No console errors

---

## 📊 PROGRESS TRACKING

### Files Deleted:
- [ ] 0/15 files deleted

### Files Moved:
- [ ] 0/287 files moved

### Folders Created:
- [ ] 0/6 folders created

**Overall Progress:** 0% complete

---

## ⚠️ SAFETY CHECKLIST

Before deleting/moving ANY file:

- [ ] Verify file is not imported anywhere
- [ ] Verify file is not referenced in configs
- [ ] Verify file is not needed for build
- [ ] Test build after each batch
- [ ] Commit changes incrementally

**If unsure:** Move to archive first, test, then delete

---

## 🎯 SUCCESS CRITERIA

- [x] Root directory: 314 files → 7 files ✅
- [ ] All config files deleted (15 files)
- [ ] All documentation organized (287 files)
- [ ] Build succeeds without errors
- [ ] Dev server starts without errors
- [ ] All pages render correctly
- [ ] No TypeScript errors
- [ ] No console errors

---

## 📝 EXECUTION ORDER

### Recommended Sequence:

1. **Create folders first** (Phase 2)
   - Ensures destination folders exist

2. **Move files second** (Phase 3)
   - Preserves files if needed later

3. **Delete configs last** (Phase 1)
   - Only after verification they're not needed

4. **Verify after each batch** (Phase 4)
   - Catch issues early

### Alternative Sequence (Safer):

1. Create archive folders
2. Move all files to archive
3. Test build
4. Delete confirmed orphaned files
5. Organize archived files into subfolders

---

## 🔄 ROLLBACK PLAN

If issues occur after cleanup:

### Step 1: Identify Problem
```bash
# Check build errors
npm run build

# Check TypeScript errors
npx tsc --noEmit
```

### Step 2: Restore Files
```bash
# If files were moved (not deleted), restore from archive
cp /reports/archive/[filename] /
```

### Step 3: Test Again
```bash
npm run build
npm run dev
```

---

## 📈 EXPECTED BENEFITS

### After Cleanup:

1. **Faster Builds**
   - Fewer files to scan
   - Faster Vite hot reload

2. **Cleaner Git Diffs**
   - Only essential files tracked
   - Easier to review changes

3. **Better Organization**
   - Documentation organized by purpose
   - Easy to find files

4. **Professional Structure**
   - Industry-standard folder layout
   - Ready for Figma Make publication

5. **Improved Performance**
   - Smaller bundle size
   - Fewer unused files

---

## 🚀 NEXT STEPS AFTER COMPLETION

1. [ ] Update `/tasks/task-list.md` - Mark root cleanup as complete
2. [ ] Run Phase 2 audit - Component orphans
3. [ ] Run Phase 3 audit - Styles audit
4. [ ] Run Phase 4 audit - Imports audit
5. [ ] Generate master cleanup report
6. [ ] Test Figma Make publication
7. [ ] Update README.md with new structure

---

## 📝 NOTES

### Important Reminders:
- ✅ Test after each batch
- ✅ Commit incrementally
- ✅ Keep archive for 30 days
- ✅ Document what was deleted

### Files to NEVER Delete:
- ❌ index.html
- ❌ package.json
- ❌ vite.config.ts
- ❌ tsconfig files
- ❌ .gitignore
- ❌ Anything in /src/
- ❌ Anything in /guidelines/

---

**Status:** 🔴 Ready to Start  
**Last Updated:** February 25, 2026  
**Assigned To:** Developer / AI Assistant  
**Priority:** 🚨 CRITICAL
