#!/bin/bash
# Archive Completed Task Lists
# This script moves all completed task files from /tasks/ to /tasks/archive/

echo "🗂️  Archiving completed task lists..."
echo ""

# Change to tasks directory
cd "$(dirname "$0")"

# Counter for moved files
moved=0

# List of files to archive
files_to_archive=(
  "PROJECT-COMPLETE.md"
  "phase-0-completion-report.md"
  "phase-1-completion-report.md"
  "phase-2-completion-report.md"
  "phase-2-complete-FINAL.md"
  "phase-2-progress-report.md"
  "phase-4-complete-summary.md"
  "phase-4-wave-1-complete.md"
  "phase-4-wave-2-complete.md"
  "phase-4-wave-3-complete.md"
  "phase-4-wave-4-complete.md"
  "phase-4-wave-5-audit.md"
  "phase-4-wave-5-complete.md"
  "phase-5-complete.md"
  "phase-5-plan.md"
  "phase-6-verification.md"
  "wave-1-migration-complete.md"
  "wave-2-complete.md"
  "wave-2-FINAL-complete.md"
  "wave-2-progress.md"
  "wave-3-complete.md"
  "wave-3-progress.md"
  "wave-3-progress-update.md"
  "wave-4-complete-FINAL.md"
  "homepage-migration-complete.md"
  "homepage-migration-complete-feb-25.md"
  "HOMEPAGE-MIGRATION-GUIDE.md"
  "HOMEPAGE-MIGRATION-REPORT.md"
  "HOMEPAGE-MIGRATION-EXAMPLES.md"
  "wordpress-css-migration-session-feb-27-2026.md"
  "wordpress-css-migration-session-2-feb-27-2026.md"
  "wordpress-css-migration-session-3-feb-27-2026.md"
  "toursingle-migration-complete-feb-25.md"
  "three-page-migrations-report.md"
  "breadcrumbs-css-fix-feb-25.md"
  "session-summary-feb-24-2026.md"
  "continue-session-summary.md"
  "current-status-feb-25-2026.md"
  "progress-summary-feb-25-2026-final.md"
  "progress-tracker.md"
  "task-list-summary.md"
  "tailwind-to-wordpress-migration.md"
  "tailwind-replacement-tasks.md"
  "tailwind-wordpress-migration-summary.md"
  "migration-progress-update.md"
  "css-enabled-summary.md"
  "wordpress-css-migration-audit.md"
  "css-data-audit-remediation.md"
  "jsx-migration-status.md"
  "build-error-fix-summary.md"
  "storybook-tests-removal-complete.md"
  "root-cleanup-tasks.md"
  "option-a-complete-pattern-css.md"
)

# Move each file
for file in "${files_to_archive[@]}"; do
  if [ -f "$file" ]; then
    mv "$file" archive/
    echo "✅ Moved: $file"
    ((moved++))
  else
    echo "⚠️  Not found: $file"
  fi
done

echo ""
echo "📊 Summary:"
echo "   Files moved: $moved"
echo "   Expected: ${#files_to_archive[@]}"
echo ""
echo "✅ Archive complete!"
echo ""
echo "📁 Active files remaining:"
ls -1 *.md | grep -v archive

echo ""
echo "📁 Archived files:"
ls -1 archive/*.md | wc -l
