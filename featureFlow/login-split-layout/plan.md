# KAN-5 — Enhance Login Page UI with Split Layout (Graphic + Form)

## Task Breakdown

| # | Type | Name | Description |
|---|------|------|-------------|
| KAN-5.1 | UI/Design | Create BrandPanel component | Build a new reusable molecule (`BrandPanel`) for the left panel — contains an illustration placeholder (SVG or image) and an optional tagline, styled using existing design tokens (blue primary, typography, spacing). |
| KAN-5.2 | UI/Design | Create SplitAuthLayout organism | Build a two-column layout organism (`SplitAuthLayout`) with a left slot (graphic) and right slot (form), implementing responsive breakpoints — side-by-side on desktop, hidden/stacked illustration on tablet and mobile. |
| KAN-5.3 | UI/Design | Integrate split layout into login page | Update `src/pages/login.tsx` to compose `SplitAuthLayout` with `BrandPanel` on the left and the existing `LoginForm` molecule on the right; apply token-based shadows and rounded corners to match the modern UI spec. |
| KAN-5.4 | UI/Design | Accessibility audit and enhancements on login page | Verify the updated login page meets accessibility requirements — proper `aria-label` attributes, visible focus states on all inputs and buttons, keyboard navigability, and WCAG contrast ratio compliance. |
