#!/usr/bin/env python3
"""
Archive Completed Task Lists
Moves completed task files from /tasks/ to /tasks/archive/
"""

import os
import shutil
from pathlib import Path

# Files to archive
FILES_TO_ARCHIVE = [
    "PROJECT-COMPLETE.md",
    "phase-0-completion-report.md",
    "phase-1-completion-report.md",
    "phase-2-completion-report.md",
    "phase-2-complete-FINAL.md",
    "phase-2-progress-report.md",
    "phase-4-complete-summary.md",
    "phase-4-wave-1-complete.md",
    "phase-4-wave-2-complete.md",
    "phase-4-wave-3-complete.md",
    "phase-4-wave-4-complete.md",
    "phase-4-wave-5-audit.md",
    "phase-4-wave-5-complete.md",
    "phase-5-complete.md",
    "phase-5-plan.md",
    "phase-6-verification.md",
    "wave-1-migration-complete.md",
    "wave-2-complete.md",
    "wave-2-FINAL-complete.md",
    "wave-2-progress.md",
    "wave-3-complete.md",
    "wave-3-progress.md",
    "wave-3-progress-update.md",
    "wave-4-complete-FINAL.md",
    "homepage-migration-complete.md",
    "homepage-migration-complete-feb-25.md",
    "HOMEPAGE-MIGRATION-GUIDE.md",
    "HOMEPAGE-MIGRATION-REPORT.md",
    "HOMEPAGE-MIGRATION-EXAMPLES.md",
    "wordpress-css-migration-session-feb-27-2026.md",
    "wordpress-css-migration-session-2-feb-27-2026.md",
    "wordpress-css-migration-session-3-feb-27-2026.md",
    "toursingle-migration-complete-feb-25.md",
    "three-page-migrations-report.md",
    "breadcrumbs-css-fix-feb-25.md",
    "session-summary-feb-24-2026.md",
    "continue-session-summary.md",
    "current-status-feb-25-2026.md",
    "progress-summary-feb-25-2026-final.md",
    "progress-tracker.md",
    "task-list-summary.md",
    "tailwind-to-wordpress-migration.md",
    "tailwind-replacement-tasks.md",
    "tailwind-wordpress-migration-summary.md",
    "migration-progress-update.md",
    "css-enabled-summary.md",
    "wordpress-css-migration-audit.md",
    "css-data-audit-remediation.md",
    "jsx-migration-status.md",
    "build-error-fix-summary.md",
    "storybook-tests-removal-complete.md",
    "root-cleanup-tasks.md",
    "option-a-complete-pattern-css.md",
]

def main():
    # Get script directory
    script_dir = Path(__file__).parent
    archive_dir = script_dir / "archive"
    
    # Ensure archive directory exists
    archive_dir.mkdir(exist_ok=True)
    
    print("🗂️  Archiving completed task lists...\n")
    
    moved = 0
    not_found = 0
    
    for filename in FILES_TO_ARCHIVE:
        source = script_dir / filename
        dest = archive_dir / filename
        
        if source.exists():
            shutil.move(str(source), str(dest))
            print(f"✅ Moved: {filename}")
            moved += 1
        else:
            print(f"⚠️  Not found: {filename}")
            not_found += 1
    
    print(f"\n📊 Summary:")
    print(f"   Files moved: {moved}")
    print(f"   Files not found: {not_found}")
    print(f"   Expected: {len(FILES_TO_ARCHIVE)}")
    
    print(f"\n✅ Archive complete!")
    
    # List active files
    print(f"\n📁 Active files remaining:")
    active_files = sorted([f.name for f in script_dir.glob("*.md") if f.is_file()])
    for f in active_files:
        print(f"   - {f}")
    
    # Count archived files
    archived_count = len(list(archive_dir.glob("*.md")))
    print(f"\n📁 Total archived files: {archived_count}")

if __name__ == "__main__":
    main()
