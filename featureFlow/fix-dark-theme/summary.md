# Feature: fix-dark-theme

## Overview
Fix all dark theme UI/UX inconsistencies across the Resource Management System application.

## Branch
fix/kan-8-dark-theme

## Tasks
| # | Type | Name | Status |
|---|------|------|--------|
| 1 | Logic/Backend | Consolidate duplicate .dark CSS override blocks | done |
| 2 | UI/Design | Fix Input atom hardcoded light-mode colors | done |
| 3 | UI/Design | Align dark mode background colors in login layout | done |
| 4 | UI/Design | Fix ThemeToggle visibility on dark backgrounds | done |
| 5 | UI/Design | Audit and fix contrast/readability across all components | done |

## Progress Log
- [2026-04-16] Feature scaffolded. Branch created: fix/kan-8-dark-theme
- [2026-04-16] Design implemented: removed duplicate `.dark` block from `src/styles/common.css`; replaced hardcoded colors in `Input.tsx` with semantic tokens; updated `SplitAuthLayout.tsx` right-panel dark bg to `var(--color-background)`; updated `LoginForm.tsx` card bg to `var(--color-card)`; added `bg-[var(--color-card)]` + `shadow-sm` to `ThemeToggle.tsx`; fixed icon dark contrast and error message dark color in `LoginForm.tsx`.

## Screenshots
_Screenshots will be added after design QA passes._

## Outcome
_To be filled on completion._
