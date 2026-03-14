# Prompt System Guide

**Version:** 1.0  
**Purpose:** Define trigger words, optimization strategies, and guardrails for the prompt system  
**Last Updated:** 2026-03-13

---

## 🎯 TRIGGER WORD SYSTEM

### Trigger Words Overview

The project uses **trigger words** to activate specific prompts stored in `/prompts/`. When a user types a trigger word, the AI should execute the corresponding prompt.

### Active Trigger Words

| Trigger Word | Prompt File | Description | Can Run Standalone |
|--------------|-------------|-------------|-------------------|
| `cleanup` | `/prompts/cleanup.md` | Comprehensive audit and cleanup | ✅ Yes |
| `continue` | `/prompts/continue.md` | Resume next logical task | ✅ Yes |
| `cleanup continue` | Both files | Cleanup THEN continue | ✅ Yes (sequential) |

### Usage Examples

**User says:** `cleanup`  
**AI response:** Read and execute `/prompts/cleanup.md` in full

**User says:** `continue`  
**AI response:** Read and execute `/prompts/continue.md` in full

**User says:** `cleanup continue`  
**AI response:** 
1. Execute `/prompts/cleanup.md` completely
2. Wait for cleanup completion
3. Execute `/prompts/continue.md` to start next task

**User says:** `cleanup` followed by `continue` (in next message)  
**AI response:** Execute each prompt separately

---

## 🎨 TRIGGER WORD DETECTION RULES

### When User Message Contains Trigger Word

**AI must:**

1. **Detect trigger word(s)** in user message
2. **Read corresponding prompt file(s)** from `/prompts/`
3. **Execute prompt instructions** exactly as written
4. **Follow prompt's completion criteria** before responding
5. **Present results** according to prompt's output format

### Priority Order

If multiple trigger words detected:

1. `cleanup` ALWAYS runs first
2. `continue` ALWAYS runs second (if both present)
3. Other trigger words follow alphabetical order

### Detection Pattern

**Trigger word is detected if:**
- User message is EXACTLY the trigger word: `cleanup`
- User message contains trigger word as standalone word: `please run cleanup`
- User message contains multiple trigger words: `cleanup continue`

**Trigger word is NOT detected if:**
- Trigger word is part of another word: `cleanupy`, `continuation`
- Trigger word is in a sentence discussing the prompt: `Should I update the cleanup prompt?`
- User is asking about the prompt: `What does the cleanup prompt do?`

### Clarification Required

**If user says:**
- `What does cleanup do?` → Explain prompt, don't execute
- `Show me the cleanup prompt` → Read and display file, don't execute
- `Update cleanup prompt` → Modify prompt file, don't execute
- `cleanup` → Execute prompt immediately

---

## 📋 REPORT NAMING CONVENTIONS

### Standard Report Format

**All reports MUST follow this naming convention:**

```
YYYY-MM-DD-[report-type]-report.md
```

**Examples:**
- `2026-03-13-cleanup-report.md`
- `2026-03-13-css-audit-report.md`
- `2026-03-13-design-system-violations-report.md`

### Report Types

| Report Type | File Name Pattern | Location |
|-------------|-------------------|----------|
| Cleanup Audit | `YYYY-MM-DD-cleanup-report.md` | `/reports/` |
| CSS Audit | `YYYY-MM-DD-css-audit-report.md` | `/reports/` |
| Design System Violations | `YYYY-MM-DD-design-system-violations-report.md` | `/reports/` |
| Route Audit | `YYYY-MM-DD-route-audit-report.md` | `/reports/` |
| Import Audit | `YYYY-MM-DD-import-audit-report.md` | `/reports/` |
| Task Status | `YYYY-MM-DD-task-status-report.md` | `/reports/` |
| Project Status | `YYYY-MM-DD-project-status-report.md` | `/reports/` |
| Contrast Audit | `YYYY-MM-DD-contrast-audit-report.md` | `/reports/` |
| Compliance Audit | `YYYY-MM-DD-compliance-audit-report.md` | `/reports/` |
| Performance Audit | `YYYY-MM-DD-performance-audit-report.md` | `/reports/` |

### Report Location Rules

**Primary Reports:** `/reports/`  
**Archived Reports:** `/reports/archive/`  
**Project-Specific Reports:** `/reports/[project-name]/`

**Archive Rule:**
- Reports older than 30 days → move to `/reports/archive/`
- Reports superseded by newer versions → move to `/reports/archive/`

### Report Template

**All reports must include:**

```markdown
# [Report Type] Report

**Date:** YYYY-MM-DD  
**Executed By:** AI Assistant  
**Duration:** [time taken or N/A]  
**Status:** ✅ Complete | ⚠️ Warnings | ❌ Issues Found

---

## Executive Summary

[2-3 sentence overview of findings]

---

## Detailed Findings

### Section 1: [Category]

**Status:** ✅ Pass | ⚠️ Warning | ❌ Fail

**Findings:**
- [Finding 1]
- [Finding 2]

**Actions Taken:**
- [Action 1]
- [Action 2]

---

## Metrics

- **Total Items Checked:** X
- **Items Passed:** X
- **Items Failed:** X
- **Items Fixed:** X
- **Items Requiring Manual Review:** X

---

## Recommendations

1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

---

## Next Steps

- [ ] [Action item 1]
- [ ] [Action item 2]

---

## Appendix

### Files Modified
- /path/to/file1.tsx
- /path/to/file2.css

### Files Deleted
- /path/to/old-file.tsx (reason)

### Files Created
- /path/to/new-file.tsx (purpose)
```

---

## 📁 TASK & REPORT CLEANUP PROCEDURES

### Task List Cleanup (Automated by `cleanup` prompt)

**When to archive a task list file:**

✅ **ARCHIVE if:**
- All tasks marked complete: `[x]`
- Task list superseded by newer version
- Task list no longer relevant to project

❌ **DO NOT archive if:**
- Any tasks still incomplete: `[ ]`
- Task list actively referenced in master task list
- Task list contains future planned work

**Archive procedure:**
1. Read task file completely
2. Verify all tasks complete
3. Move file: `/tasks/[file].md` → `/tasks/archive/[file].md`
4. Update master task list:
   ```markdown
   - [x] [Task list name] - [ARCHIVED YYYY-MM-DD]
   ```
5. Document in cleanup report

### Report Cleanup (Automated by `cleanup` prompt)

**When to archive a report:**

✅ **ARCHIVE if:**
- Report older than 30 days
- Report superseded by newer report (same type)
- Report contains obsolete information

❌ **DO NOT delete:**
- Most recent report of each type
- Reports referenced in active documentation
- Reports with historical significance

**Archive procedure:**
1. Identify reports to archive
2. Move file: `/reports/[file].md` → `/reports/archive/[file].md`
3. Document in cleanup report

**Delete only if:**
- Report is duplicate (exact copy)
- Report is incomplete/corrupted
- Report explicitly marked for deletion by user

### Root Directory Cleanup (Automated by `cleanup` prompt)

**Files allowed in root `/`:**

✅ **ALWAYS ALLOWED:**
- `README.md`
- `CHANGELOG.md`
- `Guidelines.md`
- `index.html`
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `.gitignore`
- `pnpm-lock.yaml`

❌ **NEVER ALLOWED (move or delete):**
- Any other `.md` files → Move to `/docs/`
- `.sh` scripts → Move to `/scripts/`
- Report files → Move to `/reports/` or `/reports/archive/`
- Task files → Move to `/tasks/` or `/tasks/archive/`
- Backup files (`*-backup.*`, `*-old.*`) → Delete
- Numbered variants (`file-2.tsx`) → Delete
- Orphaned config files → Delete (if package not installed)

**Cleanup procedure:**
1. Read root directory: `read /`
2. Categorize each file
3. Move documentation files to appropriate folders
4. Delete unauthorized files
5. Document all actions in cleanup report

---

## 🛡️ PROTECTED FILES GUARDRAILS

### Critical Protected Files (NEVER MODIFY OR DELETE)

**Figma Make System Files:**
```
/src/app/components/figma/ImageWithFallback.tsx
/pnpm-lock.yaml
```

**Project Configuration Files:**
```
/index.html
/package.json
/vite.config.ts
/tsconfig.json
/tsconfig.node.json
/.gitignore
```

**Core Guidelines:**
```
/Guidelines.md
```

### Verification Before Any Deletion

**ALWAYS check before deleting:**

1. **Is file in protected list?** → ABORT deletion
2. **Is file referenced in guidelines?** → Review before deletion
3. **Is file imported by other files?** → Check dependencies
4. **Is file part of core architecture?** → Confirm with user
5. **Is file auto-generated?** → Safe to delete if regeneratable

### Protected Directories (Contents Cannot Be Bulk Deleted)

**These directories contain critical code:**
```
/src/app/components/figma/
/src/app/pages/
/src/app/components/parts/
/src/styles/
/guidelines/
```

**Individual files CAN be deleted, but:**
- Must verify no dependencies
- Must have valid reason
- Must document in cleanup report

### Safe-to-Delete Directories (After Verification)

**These directories can be cleaned more aggressively:**
```
/reports/archive/
/tasks/archive/
/docs/archive/
```

**Verification required:**
- Confirm files are truly archived/obsolete
- Check for any active references
- Preserve historical reports if significant

---

## 🔄 PROMPT OPTIMIZATION STRATEGIES

### Optimization Goals

1. **Reduce manual work** - Automate repetitive tasks
2. **Improve consistency** - Standardize outputs
3. **Increase reliability** - Reduce errors
4. **Enhance discoverability** - Make prompts easy to use
5. **Maintain compliance** - Enforce design system rules

### Optimization Techniques

#### 1. Modular Prompts

**Instead of:**
- One massive prompt that does everything

**Use:**
- Specialized prompts for specific tasks
- Composable prompts that can be chained
- Reusable prompt sections

**Example:**
```
/prompts/cleanup.md - Comprehensive audit
/prompts/continue.md - Task continuation
/prompts/design-system-audit.md - Design system only
/prompts/route-audit.md - Routes only
```

#### 2. Checklist-Driven Execution

**Every prompt should have:**
- Clear numbered steps
- Checkbox format for tracking
- Success criteria for each step
- Completion criteria for overall prompt

**Benefits:**
- AI can track progress
- User can see what's happening
- Easy to resume if interrupted

#### 3. Context Loading

**Every prompt should:**
- State environment constraints (Figma Make)
- Load relevant guidelines
- Reference related documentation
- Establish design system rules

**Example:**
```markdown
## BEFORE STARTING

1. Read `/Guidelines.md` sections X, Y, Z
2. Review design system rules in `/docs/START-HERE.md`
3. Verify environment: Figma Make (no browser refresh)
```

#### 4. Self-Documenting Actions

**Every action should:**
- State what is being done
- State why it's being done
- Document results
- Flag any issues

**Example:**
```markdown
**Action:** Moving orphaned report files to /reports/archive/
**Reason:** Reports older than 30 days per cleanup policy
**Files:** 3 files moved
**Result:** ✅ Success
```

#### 5. Fail-Safe Mechanisms

**Every prompt should:**
- Verify protected files before deletion
- Check dependencies before moving files
- Confirm user intent for major changes
- Provide rollback suggestions if available

**Example:**
```markdown
⚠️ WARNING: About to delete 5 files
**Files:**
- /old-file-1.md
- /old-file-2.md

**Reason:** Duplicate/obsolete reports
**Confirm:** These files have no active references

**Proceeding with deletion...**
```

---

## 🚀 ADVANCED TRIGGER WORD FEATURES (FUTURE)

### Parameterized Triggers (Future Enhancement)

**Concept:** Pass parameters to trigger words

**Examples:**
- `cleanup --dry-run` → Preview cleanup without executing
- `continue --task=5` → Jump to specific task number
- `audit --component=Hero` → Audit specific component
- `report --type=css --days=7` → Generate CSS report for last 7 days

### Composite Triggers (Future Enhancement)

**Concept:** Combine multiple prompts with logic

**Examples:**
- `cleanup && continue` → Run both, stop if cleanup fails
- `audit || continue` → Audit first, continue if no errors
- `cleanup --skip-reports && continue` → Skip report cleanup, then continue

### Scheduled Triggers (Future Enhancement)

**Concept:** Prompts that suggest running based on time/events

**Examples:**
- `cleanup` suggested every Monday
- `continue` suggested after major changes
- Design system audit suggested after modifying theme.css

---

## 📚 RELATED DOCUMENTATION

**For prompt execution:**
- `/prompts/cleanup.md` - Cleanup audit prompt
- `/prompts/continue.md` - Task continuation prompt

**For design system compliance:**
- `/docs/MUST-READ-FIRST.md` - Critical rules
- `/docs/START-HERE.md` - Visual guide
- `/Guidelines.md` - Project overview

**For file organization:**
- `/Guidelines.md` → "File Organization & Root Directory Rules"
- `/Guidelines.md` → "Project Organization & Workflow"

**For task management:**
- `/tasks/task-list.md` - Master task list
- `/Guidelines.md` → "Task Management"

---

## ✅ QUICK REFERENCE

### When User Says "cleanup"
1. Read `/prompts/cleanup.md`
2. Execute all steps in order
3. Generate cleanup report
4. Present summary to user

### When User Says "continue"
1. Read `/prompts/continue.md`
2. Check `/tasks/task-list.md` for next task
3. Execute next task
4. Update task status
5. Suggest next task

### When User Says "cleanup continue"
1. Execute cleanup prompt fully
2. Wait for cleanup completion
3. Execute continue prompt
4. Present combined results

### When In Doubt
- Read the prompt file
- Follow its instructions exactly
- Don't improvise
- Don't skip steps

---

**Remember:** Trigger words are shortcuts to execute proven workflows. They ensure consistency, reduce errors, and save time. Use them liberally!
