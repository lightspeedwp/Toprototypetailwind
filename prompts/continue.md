# Continue Prompt

**Version:** 1.0  
**Purpose:** Resume work on the next logical task from the project task list  
**Execution:** Single-session task continuation  
**Frequency:** Use anytime you need to get back on track

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

## 📋 CONTINUATION WORKFLOW

Execute each step in order:

### 1. Read Master Task List

**Action:**
1. Read `/tasks/task-list.md`
2. Identify the FIRST task that is NOT marked complete `[ ]`
3. If task references another task file (e.g., `See: /tasks/specific-tasks.md`), read that file

**What to look for:**
- `[ ]` = Open task (NOT started or IN PROGRESS)
- `[x]` = Completed task (SKIP)
- `[ARCHIVED]` = Archived task list (SKIP)
- Status indicators: `[0/10]`, `[5/10]`, `[10/10]`

### 2. Identify Next Logical Task

**Priority Order:**
1. **Critical blockers** - Tasks marked as `🚨 CRITICAL` or `⚠️ BLOCKER`
2. **Active engineering projects** - Referenced in `/Guidelines.md` → "Active Engineering Projects"
3. **Sequential tasks** - Tasks that must be completed in order
4. **High-impact tasks** - Tasks that unblock other work

**Action:**
1. Read task description
2. Check dependencies: Does this task require other tasks to be complete first?
3. If blocked, move to next task
4. If NOT blocked, this is your task

### 3. Verify Task Context

**Before starting work, verify:**

**Read related guidelines:**
- If working on components → read `/guidelines/components/[component].md`
- If working on patterns → read `/guidelines/patterns/[pattern].md`
- If working on design tokens → read `/guidelines/design-tokens/[token].md`
- If working on pages → read `/guidelines/overview-components.md` and page archetypes

**Check existing code:**
- Read files mentioned in task
- Understand current state vs desired state
- Identify what needs to change

**Review design system compliance:**
- Read `/docs/MUST-READ-FIRST.md` (if exists)
- Read `/docs/START-HERE.md` (if exists)
- Verify CSS variables usage rules

### 4. Execute Task

**Follow standard workflow:**

1. **Plan approach:**
   - Use `think` tool to outline your approach
   - Break down task into steps
   - Identify files to modify

2. **Make changes:**
   - Use appropriate tools (read, write, edit, fast_apply_tool)
   - Follow design system rules
   - Use CSS variables from `/src/styles/theme.css`
   - Use only approved fonts (Lora, Noto Sans, Courier New)
   - NO inline styles
   - NO hardcoded colors
   - NO dark: classes

3. **Verify changes:**
   - Read modified files to confirm changes applied
   - Check for TypeScript errors
   - Verify imports resolve
   - Test related functionality if possible

4. **Update task status:**
   - Mark task complete in task file: `[x]`
   - Update master task list if needed
   - Add completion date: `[x] Task name (completed YYYY-MM-DD)`

### 5. Document Completion

**Action:**
1. Update `/CHANGELOG.md`:
   ```markdown
   ## [Unreleased] - YYYY-MM-DD
   
   ### Added
   - [What was added]
   
   ### Changed
   - [What was changed]
   
   ### Fixed
   - [What was fixed]
   ```

2. If significant work, create a brief completion note in task file:
   ```markdown
   **Status:** ✅ COMPLETE (YYYY-MM-DD)
   **Changes:** [Brief summary]
   **Files Modified:** [List key files]
   ```

### 6. Identify Next Task

**Action:**
1. Read updated `/tasks/task-list.md`
2. Identify next incomplete task
3. Present to user:
   ```
   ✅ Task complete: [task name]
   
   📋 Next task: [next task name]
   Status: [X/Y tasks complete in this list]
   
   Ready to continue? Or would you like me to:
   - Work on a different task
   - Run cleanup audit
   - Review design system compliance
   ```

---

## 🎯 TASK COMPLETION CRITERIA

**A task is complete when:**

- ✅ All acceptance criteria met (if specified in task)
- ✅ Code changes follow design system rules
- ✅ No broken imports
- ✅ No TypeScript errors (to best of your knowledge)
- ✅ Files modified correctly
- ✅ Task marked complete `[x]` in task file
- ✅ CHANGELOG.md updated
- ✅ Changes verified by reading files

---

## 🔄 SPECIAL CASES

### Case 1: Task List File References Another File

**Example:**
```markdown
- [ ] CSS Architecture Refactor - See: /tasks/css-refactor-tasks.md
```

**Action:**
1. Read `/tasks/css-refactor-tasks.md`
2. Find first incomplete task in that file
3. Execute that task
4. Update status in BOTH files:
   - Mark task complete in `/tasks/css-refactor-tasks.md`
   - Update status counter in `/tasks/task-list.md`: `[5/10]`

### Case 2: Task is Blocked

**Example:**
```markdown
- [ ] Implement dark mode (BLOCKED: awaiting design tokens)
```

**Action:**
1. Identify blocker
2. Check if blocker is resolved
3. If NOT resolved: Skip to next task and inform user
4. If resolved: Remove `BLOCKED` label and proceed

### Case 3: Task is Too Large

**If a task would take multiple sessions:**

**Action:**
1. Break task into sub-tasks
2. Create new task file: `/tasks/[task-name]-subtasks.md`
3. Complete first sub-task
4. Update master task list to reference subtasks file
5. Present progress to user

### Case 4: No Open Tasks

**If all tasks complete:**

**Action:**
1. Congratulate completion! 🎉
2. Suggest running cleanup audit: `Use /prompts/cleanup.md`
3. Ask user what they'd like to work on next
4. Offer to create new task list based on project goals

---

## 📚 QUICK REFERENCE

**Read these FIRST before starting any task:**

### Design System Rules (MANDATORY)
- `/docs/MUST-READ-FIRST.md` - 2 critical rules
- `/docs/START-HERE.md` - Visual guide
- `/Guidelines.md` - Project overview

### Component Work
- `/guidelines/components/[component].md` - Component-specific rules
- `/guidelines/overview-components.md` - Component architecture

### Pattern Work
- `/guidelines/patterns/[pattern].md` - Pattern-specific rules
- `/guidelines/overview-patterns.md` - Pattern composition

### Styling Work
- `/guidelines/design-tokens/colors.md` - Color system
- `/guidelines/design-tokens/typography.md` - Typography rules
- `/guidelines/design-tokens/spacing.md` - Spacing scale

### Page Work
- `/guidelines/overview-components.md` - Page archetypes
- `/guidelines/blocks/overview-blocks.md` - WordPress blocks

---

## ✅ COMPLETION TEMPLATE

**When presenting completion to user:**

```markdown
✅ **Task Complete:** [Task Name]

**What was done:**
- [Change 1]
- [Change 2]
- [Change 3]

**Files modified:**
- /path/to/file1.tsx
- /path/to/file2.css

**Verification:**
- ✅ Design system compliance
- ✅ No broken imports
- ✅ CSS variables used
- ✅ Approved fonts only
- ✅ No inline styles

---

📋 **Next Task:** [Next task name]

**From:** /tasks/[file].md  
**Status:** [X/Y complete]  
**Priority:** [High/Medium/Low]

Ready to continue?
```

---

## 🛑 DO NOT

- ❌ Tell user to refresh browser
- ❌ Tell user to clear cache  
- ❌ Tell user to restart dev server
- ❌ Tell user to run commands manually
- ❌ Skip reading guidelines before starting work
- ❌ Hardcode colors, fonts, or spacing
- ❌ Use inline styles
- ❌ Use dark: classes
- ❌ Create numbered backup files

## ✅ ALWAYS DO

- ✅ Read task details carefully
- ✅ Check dependencies before starting
- ✅ Follow design system rules
- ✅ Use CSS variables from theme.css
- ✅ Use only approved fonts
- ✅ Verify changes by reading files
- ✅ Update task status when complete
- ✅ Update CHANGELOG.md
- ✅ Present clear completion summary
- ✅ Suggest next task

---

## 🎯 SUCCESS METRICS

**You're on track when:**

- Tasks are completed in logical order
- Design system compliance maintained
- No rework needed due to guideline violations
- Progress documented in CHANGELOG
- Task status always up-to-date
- User knows what's next

---

**Remember:** You're in Figma Make. All changes happen through tools. No browser refreshes. No cache clearing. Just code.
