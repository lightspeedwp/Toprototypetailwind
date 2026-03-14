# Reports Processor Orchestrator Prompt

**Version:** 1.0  
**Purpose:** Automated report processing, validation, and task list synchronization  
**Execution:** Run periodically or on-demand to maintain report hygiene  
**Frequency:** Weekly or after major milestone completion

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

## 📋 ORCHESTRATOR WORKFLOW

This prompt orchestrates the following sub-processes in order:

### Phase 1: Report Inventory & Age Assessment
1. List all files in `/reports/` directory
2. Parse dates from filenames (format: `YYYY-MM-DD-*`)
3. Calculate age of each report (days since creation)
4. Categorize reports:
   - **Current** (0-7 days old)
   - **Recent** (8-30 days old)
   - **Old** (31+ days old)
   - **Undated** (no date in filename)

### Phase 2: Report Validation
For each report older than 7 days OR undated:

1. **Read report content**
2. **Identify violations/findings:**
   - Parse sections: "Critical", "High Priority", "Medium Priority", "Low Priority"
   - Extract specific violations with file paths
   - Note acceptance criteria or completion markers

3. **Check if violations are resolved:**
   - Search codebase for reported violations
   - Verify files still exist (or were intentionally deleted)
   - Confirm violations are no longer present
   - Check if acceptance criteria are met

4. **Check for connected task lists:**
   - Look for task list references in report
   - Read referenced task list files
   - Check task completion status

5. **Determine report status:**
   - ✅ **COMPLETE** - All violations resolved, all tasks done
   - 🟡 **PARTIALLY COMPLETE** - Some violations remain, tasks in progress
   - ⏳ **IN PROGRESS** - Active work, recent activity
   - ❌ **OBSOLETE** - Superseded by newer report or no longer relevant

### Phase 3: Task List Synchronization
For each report:

1. **If report has connected task list:**
   - Read task list file
   - Compare report findings to task list items
   - Add missing tasks if new violations found
   - Mark tasks complete if violations resolved
   - Update task status counters (e.g., `[5/10]`)

2. **If report has NO task list but has open violations:**
   - Create new task list file: `/tasks/[report-name]-tasks.md`
   - Generate tasks from report findings
   - Link task list back to report
   - Add task list to master task-list.md

3. **Update master task list:**
   - Mark completed tasks as `[x]`
   - Update status counters
   - Add new task lists if created
   - Archive completed task list references

### Phase 4: Report Cleanup
For each report marked as **COMPLETE**:

1. **Create archive record:**
   - Document completion date
   - List key findings
   - Record resolution summary
   - Save to `/reports/archive/[date]-[name]-summary.md`

2. **Delete original report:**
   - Use `delete_tool` to remove file
   - Verify deletion successful

3. **Update master task list:**
   - Remove references to deleted reports
   - Mark associated tasks as complete
   - Update CHANGELOG.md

For reports marked as **OBSOLETE**:

1. **Archive without processing:**
   - Move to `/reports/archive/obsolete/`
   - Add note explaining why obsolete

### Phase 5: Completion Summary
Generate final report:

```markdown
# Reports Processing Summary

**Date:** YYYY-MM-DD  
**Reports Processed:** X total

## Summary
- ✅ X reports complete (deleted)
- 🟡 X reports partially complete (kept)
- ⏳ X reports in progress (kept)
- ❌ X reports obsolete (archived)
- 📝 X task lists created
- 📝 X task lists updated

## Reports Deleted
1. [report name] - All violations resolved
2. [report name] - Superseded by newer report

## Reports Kept
1. [report name] - X violations remain (task list updated)
2. [report name] - Active work in progress

## Task Lists Created
1. `/tasks/[name]-tasks.md` - X tasks from [report]

## Task Lists Updated
1. `/tasks/[name]-tasks.md` - X tasks completed, X remain

## Next Actions
- [ ] Review remaining reports
- [ ] Continue work on open task lists
- [ ] Run visual regression testing (Phase 7)
```

---

## 🎯 REPORT STATUS CRITERIA

### ✅ COMPLETE (Delete After Archive)

**Criteria:**
- ALL violations listed in report are resolved
- ALL connected tasks marked complete `[x]`
- ALL acceptance criteria met
- NO references to open work
- Report is NOT the most recent audit of its type

**Actions:**
1. Create archive summary
2. Delete original report
3. Update master task list
4. Update CHANGELOG.md

### 🟡 PARTIALLY COMPLETE (Keep)

**Criteria:**
- SOME violations resolved, SOME remain
- Connected task list has mix of `[x]` and `[ ]`
- Active work in progress
- Recent updates to task list (< 7 days)

**Actions:**
1. Keep report
2. Update connected task list
3. Add missing tasks if needed
4. Update master task list counters

### ⏳ IN PROGRESS (Keep)

**Criteria:**
- Report is recent (< 7 days old)
- Connected task list actively being worked
- No violations resolved yet (work just started)

**Actions:**
1. Keep report
2. Verify task list exists
3. Create task list if missing

### ❌ OBSOLETE (Archive)

**Criteria:**
- Superseded by newer report of same type
- Subject matter no longer relevant (feature removed, approach changed)
- Report references deleted/moved files
- Audit methodology outdated

**Actions:**
1. Move to `/reports/archive/obsolete/`
2. Add note explaining why obsolete
3. Remove from master task list

---

## 📚 REQUIRED GUIDELINES REVIEW

**Before processing ANY report, read these guidelines:**

### Core Guidelines
1. **`/guidelines/Guidelines.md`** - Master guidelines, file organization rules
   - Section: "CRITICAL: FILE ORGANIZATION & ROOT DIRECTORY RULES"
   - Section: "PROJECT ORGANIZATION & WORKFLOW"
   - Section: "Quick Reference Checklist"

2. **`/docs/START-HERE.md`** - Design system enforcement (if exists)
   - CSS variable requirements
   - Font usage rules
   - Styling compliance

3. **`/docs/MUST-READ-FIRST.md`** - Critical rules (if exists)
   - Rule #1: CSS variables only
   - Rule #2: Only 3 fonts

### Design System Guidelines
4. **`/guidelines/design-tokens/colors.md`** - Color system
5. **`/guidelines/design-tokens/typography.md`** - Typography system
6. **`/guidelines/design-tokens/spacing.md`** - Spacing system

### Component Guidelines
7. **`/guidelines/overview-components.md`** - Component architecture
8. **`/guidelines/overview-patterns.md`** - Pattern composition

### Task Management Guidelines
9. **`/guidelines/Guidelines.md`** - Section: "PROJECT ORGANIZATION & WORKFLOW"
   - Task management rules
   - Prompt management rules
   - Report management rules
   - Folder structure rules

---

## 🔍 VALIDATION METHODS

### Method 1: File Search for Violations

**For hardcoded color violations:**
```
file_search({
  content_pattern: "#[0-9a-fA-F]{6}",
  name_pattern: "**/*.css",
  context_lines: 2
})
```

**For inline style violations:**
```
file_search({
  content_pattern: "style={{",
  name_pattern: "**/*.tsx",
  context_lines: 2
})
```

**For Tailwind spacing classes:**
```
file_search({
  content_pattern: "\\b(p-[0-9]|px-[0-9]|py-[0-9]|gap-[0-9]|m-[0-9])\\b",
  name_pattern: "**/*.tsx",
  context_lines: 2
})
```

**For broken links:**
```
file_search({
  content_pattern: 'href="#"',
  name_pattern: "**/*.tsx",
  context_lines: 2
})
```

### Method 2: Task List Progress Check

**Read task list and count:**
```typescript
const content = await read({ path: "/tasks/[task-list].md" });
const lines = content.split('\n');
const total = lines.filter(line => line.match(/^- \[.\]/)).length;
const complete = lines.filter(line => line.match(/^- \[x\]/i)).length;
const progress = complete / total;
```

### Method 3: Report Cross-Reference

**Check if newer report exists:**
```typescript
const reports = await read({ path: "/reports/" });
const typePrefix = "design-system-contract";
const matchingReports = reports.filter(r => r.startsWith(typePrefix));
const sortedReports = matchingReports.sort().reverse();
const newestReport = sortedReports[0];
```

---

## 📝 TASK LIST GENERATION TEMPLATE

When creating a new task list from a report:

```markdown
# [Report Name] - Task List

**Created:** YYYY-MM-DD  
**Source Report:** `/reports/[date]-[name].md`  
**Status:** 🔴 Not Started / 🟡 In Progress / ✅ Complete  
**Priority:** Critical / High / Medium / Low  

---

## 📋 Overview

[Brief description of what needs to be done based on report findings]

**Key Findings:**
- [Critical violation 1]
- [Critical violation 2]
- [High priority violation 1]

**Total Tasks:** X  
**Estimated Effort:** X hours  

---

## 🚨 Critical Priority Tasks

### ✅ Task 1.1: [Task Name]
- [ ] **File:** `/path/to/file.tsx`
- [ ] **Violation:** [Specific violation from report]
- [ ] **Fix:** [How to fix it]
- [ ] **Effort:** X hours
- [ ] **Priority:** Critical

**Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Acceptance Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

**Verification:**
```bash
file_search({ content_pattern: "[pattern]", name_pattern: "**/*.tsx" })
```

---

## ⚠️ High Priority Tasks

[Same structure as Critical]

---

## 📋 Medium Priority Tasks

[Same structure as Critical]

---

## 🔍 Low Priority Tasks

[Same structure as Critical]

---

## ✅ COMPLETION CRITERIA

**This task list is complete when:**
- [ ] All critical tasks resolved
- [ ] All high priority tasks resolved
- [ ] All medium priority tasks resolved (or deferred)
- [ ] All verification checks pass
- [ ] No violations remain in source report
- [ ] CHANGELOG.md updated
- [ ] Master task list updated
```

---

## 🔄 MASTER TASK LIST UPDATE TEMPLATE

When adding new task list to master:

```markdown
### Active Tasks — [Category]
- [ ] **[Task List Name]:** [Brief description]
  - *Source Report:* [/reports/[date]-[name].md](/reports/[date]-[name].md)
  - *Task List:* [/tasks/[name]-tasks.md](/tasks/[name]-tasks.md)
  - *Status:* [X/Y tasks complete] ([percentage]%)
  - *Priority:* Critical / High / Medium / Low
  - *Findings:* [X Critical, Y High, Z Medium, W Low]
```

When marking task list complete:

```markdown
### Completed Tasks — [Category]
- [x] **[Task List Name]:** [Brief description] ✅ **COMPLETE** YYYY-MM-DD
  - *Source Report:* DELETED (archived)
  - *Task List:* ARCHIVED
  - *Status:* ✅ 100% Complete (Y/Y tasks)
  - *Resolution:* [Brief summary of what was fixed]
```

---

## 🛑 DO NOT

- ❌ Delete reports less than 7 days old (unless explicitly obsolete)
- ❌ Delete reports with open violations (unless superseded)
- ❌ Delete task lists with incomplete tasks
- ❌ Skip guideline review before processing
- ❌ Assume violations are resolved without verification
- ❌ Archive reports without creating summary
- ❌ Tell user to refresh browser or clear cache

## ✅ ALWAYS DO

- ✅ Read report content fully before deciding
- ✅ Verify violations with file_search
- ✅ Check for connected task lists
- ✅ Create task list if report has open violations
- ✅ Update master task list
- ✅ Create archive summary before deleting
- ✅ Update CHANGELOG.md
- ✅ Present clear summary to user
- ✅ Use tools (read, write, delete, file_search)

---

## 📊 EXECUTION CHECKLIST

Before running this orchestrator:

- [ ] Read all required guidelines (listed above)
- [ ] Verify current date
- [ ] Calculate 7-day cutoff date
- [ ] Review master task list current status

During execution:

- [ ] Process Phase 1: Inventory
- [ ] Process Phase 2: Validation
- [ ] Process Phase 3: Task Sync
- [ ] Process Phase 4: Cleanup
- [ ] Process Phase 5: Summary

After execution:

- [ ] Verify all deleted reports archived
- [ ] Verify master task list updated
- [ ] Verify CHANGELOG.md updated
- [ ] Present summary to user
- [ ] Suggest next actions

---

## 🎯 SUCCESS METRICS

**You're on track when:**

- All reports older than 7 days reviewed
- Complete reports deleted (after archive)
- Open violations have task lists
- Master task list is current
- No orphaned reports or task lists
- User knows what to work on next

---

**Remember:** This is an orchestrator. It coordinates other processes but doesn't do all the work itself. Break down complex validations into smaller file_search and read operations.
