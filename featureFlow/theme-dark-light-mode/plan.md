# Plan: Theme Configuration – Dark & Light Mode Implementation

## Jira Ticket
- Key: KAN-7
- Type: Task
- Priority: Medium
- URL: https://vrund-shah.atlassian.net/browse/KAN-7

## Task Breakdown

| ID | Type | Name | Description |
|----|------|------|-------------|
| KAN-7.1 | Logic / Backend | Implement `useTheme` hook + `ThemeProvider` | React context + hook managing `light/dark` state, persists to localStorage, toggles `dark` class on `<html>` |
| KAN-7.2 | UI / Design | Dark mode semantic token overrides | Add `.dark {}` block in index.css remapping semantic CSS variables to dark-appropriate values |
| KAN-7.3 | UI / Design | Build `ThemeToggle` atom component | Sun/moon icon button, calls `useTheme().toggle()`, keyboard-accessible, design token colours |
| KAN-7.4 | UI / Design | Place `ThemeToggle` in app layout | Mount toggle in top-right corner across all screens |

## Dependency Order
1. KAN-7.1 (Logic) — must run first, KAN-7.3 depends on it
2. KAN-7.2 (UI) — CSS-only, can follow KAN-7.1
3. KAN-7.3 (UI) — depends on KAN-7.1
4. KAN-7.4 (UI) — depends on KAN-7.3
