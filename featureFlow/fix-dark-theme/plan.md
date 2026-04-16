# KAN-8 — Fix Issues in Dark Theme Implementation

## Task Breakdown

| # | Type | Name | Description |
|---|------|------|-------------|
| 1 | Logic/Backend | Consolidate duplicate `.dark` CSS override blocks | Merge the separate `.dark` blocks in `src/index.css` and `src/styles/common.css` into a single source of truth, resolving conflicting property declarations |
| 2 | UI/Design | Fix `Input` atom hardcoded light-mode colors | Replace `bg-white` and `border-neutral-300` with proper Tailwind dark variants so Input renders correctly in dark mode |
| 3 | UI/Design | Align dark mode background colors in login layout | Reconcile `SplitAuthLayout`'s `dark:bg-neutral-950` vs `LoginForm` card's `dark:bg-neutral-900` for intentional surface depth |
| 4 | UI/Design | Fix `ThemeToggle` visibility on dark backgrounds | Update fixed-position toggle to remain visible and accessible in both modes |
| 5 | UI/Design | Audit and fix contrast/readability across all components | Sweep all components for WCAG contrast compliance in dark mode, patching failing elements |
