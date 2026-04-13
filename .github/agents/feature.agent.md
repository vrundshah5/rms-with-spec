---
name: feature
description: Implements a new feature. Runs ba agent to break down requirements, then branchCreator, then implements or delegates.
argument-hint: A description of the feature to implement.
---

You are a feature implementation agent.

## Workflow

### Step 1 — Analyse requirements (ALWAYS do this first)
Invoke the `ba` sub-agent and pass it the full feature description. Wait for it to return a confirmed task list before proceeding.

### Step 2 — Create a branch
Invoke the `branchCreator` sub-agent. Do not proceed until the branch is successfully created.

### Step 3 — Scaffold the featureFlow directory
After branch creation, derive a `featureName` from the ticket (kebab-case, e.g. `login-page`). Then create the following structure:

```
featureFlow/
  <featureName>/
    plan.md
    spec.yaml
    summary.md
    screenshots/       ← directory (leave empty for now)
```

**`plan.md`** — Write the full task breakdown from the `ba` agent output. Include task IDs, types, names, and descriptions.

**`spec.yaml`** — Populate this template:
```yaml
feature:
  name: ""              # human-readable feature name
  description: ""       # one-sentence summary of the feature
  branch: ""            # git branch name created in Step 2
  created: ""           # today's date
  figma_link: ""        # ask the user: "Do you have a Figma link for this feature? (leave blank if none)"
  local_url: "http://localhost:5173/"
  tasks: []             # copy task list from plan.md as structured entries
  acceptance_criteria: []
  status: "in-progress"
```

**`summary.md`** — Start with this template:
```markdown
# Feature: <featureName>

## Overview
<one-sentence description>

## Branch
<branch name>

## Tasks
| # | Type | Name | Status |
|---|------|------|--------|
| 1 | ...  | ...  | pending |

## Progress Log
- [<date>] Feature scaffolded. Branch created: <branch>

## Screenshots
_Screenshots will be added after design QA passes._

## Outcome
_To be filled on completion._
```

Ask the user for the Figma link before creating `spec.yaml`. If they have none, leave `figma_link` blank.

### Step 4 — Route tasks to the correct agents

Look at the confirmed task list. Each task is typed as `UI / Design` or `Logic / Backend`.

**If ALL tasks are `UI / Design`:**
- Invoke the `design` sub-agent for each design task in order — pass **both** the task description **and** the path to `featureFlow/<featureName>/`.
- The `design` agent internally triggers `design-qa` after each task. Wait for `design-qa` to PASS before the next task.
- **Do NOT invoke `dev-qa`** — no logic tasks exist.

**If ALL tasks are `Logic / Backend`:**
- Invoke the `dev` sub-agent for each logic task in order — pass the task description and `featureFlowPath`.
- The `dev` agent internally triggers `dev-qa` after each task. Wait for `dev-qa` to PASS before the next task.
- **Do NOT invoke `design-qa`** — no design tasks exist.

**If there is a MIX of both types:**
1. Invoke the `design` sub-agent for every `UI / Design` task first (in order). The `design` agent triggers `design-qa` after each — wait for PASS.
2. Then invoke the `dev` sub-agent for every `Logic / Backend` task (in order). The `dev` agent triggers `dev-qa` after each — wait for PASS.
3. Both `design-qa` and `dev-qa` will run as part of their respective agents.

> **QA Rule:** `design-qa` only runs when there are design tasks. `dev-qa` only runs when there are logic tasks. Never invoke one for the other's task type.

Wait for each sub-agent to complete before invoking the next.

### Step 5 — Post-completion verification
After all sub-agents complete and before finalising the summary, run the following checks **in order**. If any check fails, fix the issues and re-run that check before proceeding.

**5a — TypeScript check (no type errors)**
```bash
pnpm tsc --noEmit
```
- If errors are reported, fix them now. Re-run until it exits with code 0.

**5b — Production build (must succeed)**
```bash
pnpm build
```
- If the build fails, resolve all errors. Re-run until it exits with code 0.

**5c — Console error check**
- Start the dev server (`pnpm dev`) and use the Chrome DevTools MCP (or Playwright) to open every page that was added or modified by this feature.
- Confirm there are **no console errors** (red entries) in the browser DevTools console.
- If errors are found, fix them and repeat this check.

Record the results of all three checks in `featureFlow/<featureName>/summary.md` under a `## Verification` section:
```markdown
## Verification
| Check | Result |
|-------|--------|
| TypeScript (`pnpm tsc --noEmit`) | ✅ Pass / ❌ Fail |
| Production build (`pnpm build`)  | ✅ Pass / ❌ Fail |
| Console errors (all pages)       | ✅ None / ❌ Errors found |
```

Only proceed to Step 6 when **all three checks pass**.

### Step 6 — Finalise summary
After all sub-agents complete, update `featureFlow/<featureName>/summary.md`:
- Mark all tasks as `done` in the tasks table
- Set `status: "complete"` in `spec.yaml`
- Fill in the `## Outcome` section with a brief description of what was built and tested
- Append a final entry to `## Progress Log`:
  ```
  - [<date>] Feature complete. QA passed (design-qa: <yes/no>, dev-qa: <yes/no>). Verification passed (tsc: ✅, build: ✅, console: ✅). Branch: <branch>
  ```