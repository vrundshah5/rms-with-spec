# KAN-4 — Design System Improvement: Common CSS, Theme Setup & Tokenizer Integration

## Task Breakdown

| # | Type | Name | Description |
|---|------|------|-------------|
| 1 | Logic/Backend | Generate design tokens using color-token-generator skill | Run the `color-token-generator` skill to produce a structured token output (colors — primary blue, secondary, neutrals; spacing; typography) as CSS variables and/or JSON token files. |
| 2 | Logic/Backend | Configure Tailwind CSS v4 theme and create common CSS file | Wire the generated tokens into Tailwind's `@theme` directive in the main CSS file; create a centralized `common.css` (or equivalent) that defines all CSS custom properties (primary, secondary, spacing, type scale) as the single source of truth for the project. |
| 3 | UI/Design | Update existing atom components to use design tokens | Refactor `Button`, `Input`, and `Label` atoms to consume the new CSS custom properties and Tailwind theme classes, removing any hardcoded color or spacing values. |
| 4 | UI/Design | Update LoginForm molecule and login page with new styles and full responsiveness | Apply the new design tokens to `LoginForm` and `login.tsx`, ensuring the layout is fully responsive across mobile, tablet, and desktop breakpoints and visually consistent with the reference theme. |
