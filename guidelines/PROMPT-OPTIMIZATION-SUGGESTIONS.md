# Prompt System Optimization Suggestions

**Version:** 1.0  
**Purpose:** Advanced strategies to improve prompt system effectiveness  
**Last Updated:** 2026-03-13

---

## 🎯 OPTIMIZATION STRATEGIES

### 1. Prompt Composability

**Current State:**
- Two independent prompts: `cleanup.md` and `continue.md`
- Can be run individually or sequentially

**Optimization Idea:**
Create modular prompt sections that can be composed dynamically:

```
/prompts/modules/
├── environment-check.md       # Verify Figma Make constraints
├── file-system-audit.md       # Scan and categorize files
├── route-verification.md      # Check routes.ts completeness
├── import-validation.md       # Verify all imports resolve
├── design-system-scan.md      # Check CSS variable usage
├── task-status-update.md      # Update task list statuses
├── report-generation.md       # Generate audit reports
└── next-task-finder.md        # Identify next logical task
```

**Benefits:**
- Reusable across multiple prompts
- Easier to maintain and update
- Can compose custom workflows: `cleanup-lite` (skip reports), `quick-continue` (skip guidelines check)

---

### 2. Parameterized Prompts (Future Enhancement)

**Current State:**
- Prompts are executed as-is, no parameters

**Optimization Idea:**
Allow users to pass parameters to customize execution:

**Examples:**
```
cleanup --dry-run
# Preview changes without executing

cleanup --skip-reports
# Run cleanup but don't archive old reports

cleanup --focus=routes
# Only audit routes, skip other checks

continue --priority=high
# Only show high-priority tasks

continue --component=Hero
# Continue work specifically on Hero component
```

**Implementation:**
1. Update `PROMPT-SYSTEM-GUIDE.md` to define parameter syntax
2. Teach AI to parse parameters from trigger word message
3. Add conditional execution logic in prompt files

---

### 3. Prompt Chaining with Dependencies

**Current State:**
- Sequential execution: cleanup → continue
- No dependency checking

**Optimization Idea:**
Define dependencies and prerequisites for prompts:

**Example Chain:**
```
cleanup (prerequisite: none)
  ↓
design-system-audit (prerequisite: cleanup complete)
  ↓
fix-violations (prerequisite: audit report exists)
  ↓
continue (prerequisite: no blocking issues)
```

**Benefits:**
- Prevents running tasks out of order
- Ensures prerequisites are met
- Automatic workflow orchestration

---

### 4. Scheduled Prompt Suggestions

**Current State:**
- User must manually trigger prompts

**Optimization Idea:**
AI suggests prompts based on context:

**Triggers:**
- "It's been 7 days since last cleanup" → Suggest `cleanup`
- "Task list has 5+ incomplete tasks" → Suggest `continue`
- "10+ files modified since last audit" → Suggest `design-system-audit`
- "New route added" → Suggest `route-verification`

**Implementation:**
- Track metadata in `/tasks/.metadata.json`
- AI checks metadata on session start
- Present suggestions proactively

---

### 5. Prompt Result Caching

**Current State:**
- Every audit re-scans entire codebase
- Repetitive work on unchanged files

**Optimization Idea:**
Cache audit results and only re-check modified files:

**Example:**
```
/reports/.cache/
├── file-checksums.json        # Track file hashes
├── last-cleanup-state.json    # State after last cleanup
└── last-audit-findings.json   # Previous audit results
```

**Benefits:**
- Faster execution (skip unchanged files)
- Incremental audits (only scan changes since last run)
- Better diff reporting (show what changed)

---

### 6. Interactive Prompt Modes

**Current State:**
- Prompts run fully automated or require manual confirmation

**Optimization Idea:**
Add interactive checkpoints for user decisions:

**Example:**
```
cleanup (running...)

✅ File system audit complete
Found 5 files to delete. Review:
  - /old-report-1.md (duplicate)
  - /old-report-2.md (superseded)
  - /backup-file.tsx (backup)

[A]pprove all  [R]eview  [S]kip  [Q]uit?

> User: R

Reviewing /old-report-1.md...
Delete this file? [Y/n]
```

**Benefits:**
- More control for users
- Safer for destructive operations
- Educational (users see what's happening)

---

### 7. Prompt Templates Library

**Current State:**
- Two hardcoded prompts

**Optimization Idea:**
Create prompt template library for common scenarios:

**Template Examples:**
```
/prompts/templates/
├── new-feature-workflow.md     # Feature → tests → docs → tasks
├── bug-fix-workflow.md         # Reproduce → fix → verify → update
├── refactor-workflow.md        # Plan → migrate → test → cleanup
├── release-workflow.md         # Audit → changelog → docs → tag
└── hotfix-workflow.md          # Quick fix without full cleanup
```

**Usage:**
```
User: "I want to add a new feature"
AI: "I'll use the new-feature-workflow template. Let's start..."
```

---

### 8. Cross-Prompt Context Sharing

**Current State:**
- Each prompt runs independently
- Context doesn't carry over

**Optimization Idea:**
Share context between prompts via session state:

**Example:**
```
cleanup (finds 10 design system violations)
  → Saves to /reports/.session/violations.json

continue (reads violations.json)
  → "Before continuing, should we fix these violations first?"
```

**Benefits:**
- Smarter recommendations
- Prevent rework (don't start new feature if violations exist)
- Better project health awareness

---

### 9. Prompt Performance Metrics

**Current State:**
- No tracking of prompt effectiveness

**Optimization Idea:**
Track metrics to improve prompts over time:

**Metrics to Track:**
```json
{
  "prompt": "cleanup",
  "executions": 45,
  "avg_duration": "2.3min",
  "success_rate": "95%",
  "files_cleaned": {
    "avg": 12,
    "max": 34,
    "min": 2
  },
  "user_satisfaction": "4.5/5"
}
```

**Use Metrics To:**
- Identify slow prompts (optimize them)
- Find low-success prompts (improve instructions)
- Prioritize maintenance (work on most-used prompts)

---

### 10. Natural Language Prompt Activation

**Current State:**
- Exact trigger words: `cleanup`, `continue`

**Optimization Idea:**
Recognize natural language variations:

**Examples:**
- "Can you clean up the project?" → Trigger `cleanup`
- "Let's continue with the next task" → Trigger `continue`
- "Run the cleanup and then keep going" → Trigger `cleanup continue`
- "What should I work on next?" → Trigger `continue`

**Implementation:**
- Define intent patterns in `PROMPT-SYSTEM-GUIDE.md`
- AI matches user message to intent
- Execute corresponding prompt

---

## 🛡️ SAFETY ENHANCEMENTS

### 1. Protected Files Verification (IMPLEMENTED)

**Current State:**
- Protected files list in cleanup prompt

**Enhancement:**
Create separate protected files registry:

```
/guidelines/PROTECTED-FILES.md

## System Files (NEVER MODIFY OR DELETE)
- /src/app/components/figma/ImageWithFallback.tsx
- /pnpm-lock.yaml
...

## Critical Configuration (MODIFY WITH CAUTION)
- /package.json
- /vite.config.ts
...

## Generated Files (SAFE TO DELETE IF REGENERATABLE)
- /.cache/
- /reports/
```

**Benefits:**
- Single source of truth
- Easy to update
- Can be referenced by multiple prompts

---

### 2. Rollback Mechanism

**Enhancement:**
Create snapshots before destructive operations:

**Example:**
```
cleanup (starting...)

Creating snapshot: /reports/.snapshots/2026-03-13-pre-cleanup/
  - Backed up 15 files
  - Snapshot ID: abc123

Proceeding with cleanup...

[15 minutes later]

"Oh no, I need that file back!"

AI: "I can restore from snapshot abc123. Which file?"
```

**Implementation:**
- Copy affected files to `.snapshots/` before deletion
- Keep snapshots for 7 days
- Provide `restore` command

---

### 3. Dependency Graph for File Deletion

**Enhancement:**
Before deleting a file, check what imports it:

**Example:**
```
cleanup (checking dependencies...)

⚠️ WARNING: /src/app/components/OldComponent.tsx is imported by:
  - /src/app/pages/HomePage.tsx (line 12)
  - /src/app/pages/AboutPage.tsx (line 8)

Cannot delete safely. Options:
1. Remove imports first
2. Skip deletion
3. Delete anyway (may break build)

What would you like to do?
```

---

## 📊 REPORTING ENHANCEMENTS

### 1. Diff Reports

**Enhancement:**
Show what changed between audits:

**Example:**
```
# Cleanup Report - 2026-03-13

## Changes Since Last Cleanup (2026-03-06)

### Files
- ✅ Cleaned: 12 files (↓ from 18 last time)
- 🆕 New files requiring cleanup: 3
- ✅ Resolved: 8 issues from last report

### Routes
- ➕ Added: 2 routes (Profile, Settings)
- ➖ Removed: 1 route (OldFeature)
- ✅ No missing routes (improvement from 3 missing last time)

### Design System Compliance
- 📈 Improved: 85% → 92% (↑ 7%)
- 🔧 Fixed: 14 violations
- 🚨 New violations: 2 (flag for review)
```

---

### 2. Trend Visualization

**Enhancement:**
Track metrics over time:

**Example:**
```
Design System Compliance Trend (Last 8 Cleanups)

 100% │           
  90% │      ╱────●
  80% │    ╱
  70% │  ╱
  60% │●
      └─────────────────
      Jan    Feb    Mar

📈 Overall trend: IMPROVING
🎯 Target (95%): 3% away
⏱ Est. time to target: 2 more cleanups
```

---

### 3. Actionable Recommendations

**Enhancement:**
Provide specific next steps based on findings:

**Example:**
```
# Recommendations Based on Audit Findings

## Critical (Do First) 🚨
1. Fix 2 design system violations in Hero.tsx (estimated 15 min)
2. Add missing route for NewFeature page (estimated 5 min)

## High Priority (This Week) ⚠️
3. Update 5 components still using inline styles (estimated 1 hour)
4. Archive 8 completed task lists (estimated 10 min)

## Medium Priority (This Month) 📋
5. Refactor 3 large components (estimated 3 hours)
6. Update documentation for new patterns (estimated 1 hour)

## Low Priority (When Available) 💡
7. Optimize image loading in gallery (estimated 2 hours)
8. Add unit tests for filters (estimated 4 hours)

💡 Tip: Start with Critical items. They're quick wins with high impact!
```

---

## 🔧 IMPLEMENTATION ROADMAP

### Phase 1: Foundation (COMPLETE ✅)
- [x] Create `cleanup.md` prompt
- [x] Create `continue.md` prompt
- [x] Create `PROMPT-SYSTEM-GUIDE.md`
- [x] Update `Guidelines.md` with trigger word system
- [x] Define protected files guardrails

### Phase 2: Enhanced Reporting (NEXT)
- [ ] Implement diff reports (show changes since last audit)
- [ ] Add actionable recommendations to cleanup report
- [ ] Create report templates for consistency

### Phase 3: Safety Features
- [ ] Create `PROTECTED-FILES.md` registry
- [ ] Implement snapshot/rollback mechanism
- [ ] Add dependency checking before deletion

### Phase 4: Composability
- [ ] Break prompts into modular sections (`/prompts/modules/`)
- [ ] Create prompt template library
- [ ] Implement prompt chaining with dependencies

### Phase 5: Intelligence
- [ ] Add cross-prompt context sharing
- [ ] Implement natural language trigger detection
- [ ] Add scheduled prompt suggestions

### Phase 6: Performance
- [ ] Implement result caching
- [ ] Add performance metrics tracking
- [ ] Create trend visualization reports

### Phase 7: Interactivity
- [ ] Add interactive prompt modes
- [ ] Implement parameterized prompts (`cleanup --dry-run`)
- [ ] Create prompt wizard for complex workflows

---

## 🎯 SUCCESS METRICS

**How to measure prompt system effectiveness:**

### Efficiency Metrics
- **Time saved:** Compare manual workflow vs automated prompt
- **Error reduction:** Track issues found/fixed per prompt execution
- **Consistency:** Measure adherence to guidelines before/after prompts

### Usage Metrics
- **Adoption rate:** How often are prompts used?
- **User satisfaction:** Survey after prompt execution
- **Success rate:** Percentage of prompts completed without issues

### Quality Metrics
- **Code health:** Track design system compliance over time
- **Technical debt:** Measure files needing cleanup before/after
- **Documentation currency:** Track how often docs are updated

---

## 📚 RELATED DOCUMENTATION

**Core Prompt System:**
- `/prompts/cleanup.md` - Cleanup audit prompt
- `/prompts/continue.md` - Task continuation prompt
- `/guidelines/PROMPT-SYSTEM-GUIDE.md` - System overview and trigger words

**Supporting Documentation:**
- `/Guidelines.md` - Project overview with trigger word section
- `/docs/START-HERE.md` - Design system rules
- `/tasks/task-list.md` - Master task list

**Future Enhancements:**
- `/guidelines/PROTECTED-FILES.md` (planned)
- `/prompts/modules/` (planned)
- `/prompts/templates/` (planned)

---

## 💡 CONTRIBUTION IDEAS

**Have ideas for improving the prompt system?**

1. Document your idea in this file under appropriate section
2. Create a proof-of-concept prompt in `/prompts/experimental/`
3. Test it on your workflow
4. Share results and iterate

**What makes a good prompt:**
- ✅ Clear success criteria
- ✅ Step-by-step checklist
- ✅ Error handling
- ✅ Documentation of actions taken
- ✅ Suggestions for next steps

---

**Remember:** The goal is to make repetitive tasks effortless, not to automate away thoughtfulness. Prompts should augment human decision-making, not replace it.
