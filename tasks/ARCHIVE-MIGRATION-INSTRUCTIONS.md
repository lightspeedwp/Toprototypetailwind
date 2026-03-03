# Task Archive Migration Script

This file lists all completed task files that should be moved from `/tasks/` to `/tasks/archive/`.

## Files to Archive (Move to /tasks/archive/)

### Phase Completion Reports (9 files)
```bash
mv /tasks/PROJECT-COMPLETE.md /tasks/archive/
mv /tasks/phase-0-completion-report.md /tasks/archive/
mv /tasks/phase-1-completion-report.md /tasks/archive/
mv /tasks/phase-2-completion-report.md /tasks/archive/
mv /tasks/phase-2-complete-FINAL.md /tasks/archive/
mv /tasks/phase-2-progress-report.md /tasks/archive/
mv /tasks/phase-4-complete-summary.md /tasks/archive/
mv /tasks/phase-5-complete.md /tasks/archive/
mv /tasks/phase-6-verification.md /tasks/archive/
```

### Wave Completion Reports (16 files)
```bash
mv /tasks/wave-1-migration-complete.md /tasks/archive/
mv /tasks/wave-2-complete.md /tasks/archive/
mv /tasks/wave-2-FINAL-complete.md /tasks/archive/
mv /tasks/wave-2-progress.md /tasks/archive/
mv /tasks/wave-3-complete.md /tasks/archive/
mv /tasks/wave-3-progress.md /tasks/archive/
mv /tasks/wave-3-progress-update.md /tasks/archive/
mv /tasks/wave-4-complete-FINAL.md /tasks/archive/
mv /tasks/phase-4-wave-1-complete.md /tasks/archive/
mv /tasks/phase-4-wave-2-complete.md /tasks/archive/
mv /tasks/phase-4-wave-3-complete.md /tasks/archive/
mv /tasks/phase-4-wave-4-complete.md /tasks/archive/
mv /tasks/phase-4-wave-5-audit.md /tasks/archive/
mv /tasks/phase-4-wave-5-complete.md /tasks/archive/
mv /tasks/phase-5-plan.md /tasks/archive/
mv /tasks/option-a-complete-pattern-css.md /tasks/archive/
```

### Homepage Migration Reports (5 files)
```bash
mv /tasks/homepage-migration-complete.md /tasks/archive/
mv /tasks/homepage-migration-complete-feb-25.md /tasks/archive/
mv /tasks/HOMEPAGE-MIGRATION-GUIDE.md /tasks/archive/
mv /tasks/HOMEPAGE-MIGRATION-REPORT.md /tasks/archive/
mv /tasks/HOMEPAGE-MIGRATION-EXAMPLES.md /tasks/archive/
```

### Migration Session Reports (6 files)
```bash
mv /tasks/wordpress-css-migration-session-feb-27-2026.md /tasks/archive/
mv /tasks/wordpress-css-migration-session-2-feb-27-2026.md /tasks/archive/
mv /tasks/wordpress-css-migration-session-3-feb-27-2026.md /tasks/archive/
mv /tasks/toursingle-migration-complete-feb-25.md /tasks/archive/
mv /tasks/three-page-migrations-report.md /tasks/archive/
mv /tasks/breadcrumbs-css-fix-feb-25.md /tasks/archive/
```

### Session & Progress Summaries (6 files)
```bash
mv /tasks/session-summary-feb-24-2026.md /tasks/archive/
mv /tasks/continue-session-summary.md /tasks/archive/
mv /tasks/current-status-feb-25-2026.md /tasks/archive/
mv /tasks/progress-summary-feb-25-2026-final.md /tasks/archive/
mv /tasks/progress-tracker.md /tasks/archive/
mv /tasks/task-list-summary.md /tasks/archive/
```

### Migration Planning Documents (5 files)
```bash
mv /tasks/tailwind-to-wordpress-migration.md /tasks/archive/
mv /tasks/tailwind-replacement-tasks.md /tasks/archive/
mv /tasks/tailwind-wordpress-migration-summary.md /tasks/archive/
mv /tasks/migration-progress-update.md /tasks/archive/
mv /tasks/css-enabled-summary.md /tasks/archive/
```

### Audit & Fix Reports (5 files)
```bash
mv /tasks/wordpress-css-migration-audit.md /tasks/archive/
mv /tasks/css-data-audit-remediation.md /tasks/archive/
mv /tasks/jsx-migration-status.md /tasks/archive/
mv /tasks/build-error-fix-summary.md /tasks/archive/
mv /tasks/storybook-tests-removal-complete.md /tasks/archive/
```

### Cleanup Reports (1 file)
```bash
mv /tasks/root-cleanup-tasks.md /tasks/archive/
```

## Files to Keep Active (DO NOT MOVE)

These files remain in `/tasks/` as active references:

```bash
# Master task list - KEEP
/tasks/task-list.md

# Active reference guides - KEEP
/tasks/README.md
/tasks/CSS-TESTING-GUIDE.md
/tasks/QUICK-START-WORDPRESS-CLASSES.md
/tasks/DOCUMENTATION-INDEX.md
/tasks/QUICK-ACTION-CARD.md
```

## Execute All Moves

To execute all moves at once, run:

```bash
# From project root
cd /tasks

# Move all completed reports
mv PROJECT-COMPLETE.md phase-*.md wave-*.md homepage-migration-*.md HOMEPAGE-*.md wordpress-css-migration-session-*.md toursingle-*.md three-page-*.md breadcrumbs-*.md session-summary-*.md continue-session-summary.md current-status-*.md progress-summary-*.md progress-tracker.md task-list-summary.md tailwind-*.md migration-progress-update.md css-enabled-summary.md css-data-audit-remediation.md jsx-migration-status.md build-error-fix-summary.md storybook-tests-removal-complete.md root-cleanup-tasks.md option-a-complete-pattern-css.md archive/
```

## Summary

**Total Files to Archive:** 53 files  
**Files to Keep Active:** 6 files  
**Result:** Clean `/tasks/` folder with only master task list and active references

---

**Created:** February 27, 2026
