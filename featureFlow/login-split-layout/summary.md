# Feature: login-split-layout

## Overview
Enhance login page with a modern split-screen layout — left graphic/branding panel and right login form — with full responsiveness and accessibility.

## Branch
feature/KAN-5-login-split-layout

## Tasks
| # | Type | Name | Status |
|---|------|------|--------|
| KAN-5.1 | UI/Design | Create BrandPanel component | done |
| KAN-5.2 | UI/Design | Create SplitAuthLayout organism | done |
| KAN-5.3 | UI/Design | Integrate split layout into login page | done |
| KAN-5.4 | UI/Design | Accessibility audit and enhancements on login page | done |

## Progress Log
- [2026-04-14] Feature scaffolded. Branch created: feature/KAN-5-login-split-layout
- [2026-04-14] KAN-5.1 done: Created BrandPanel molecule (BrandPanel.tsx, index.ts); updated molecules/index.ts barrel export
- [2026-04-14] KAN-5.2 done: Created SplitAuthLayout organism (SplitAuthLayout.tsx, index.ts); created organisms/index.ts barrel export
- [2026-04-14] KAN-5.3 done: Updated login.tsx — replaced old layout with SplitAuthLayout + BrandPanel left panel, LoginForm + "Forgot password?" link in right panel (rounded-2xl shadow-xl wrapper)
- [2026-04-14] KAN-5.4 done: Accessibility audit — fixed BrandPanel outer div (role="complementary" → aria-hidden="true"); added aria-label="Login form" to <form>; added focus-visible ring to password toggle button and "Forgot password?" link; verified label/input associations, color contrast (#2563eb on white ≈ 5.17:1 passes WCAG AA), and SplitAuthLayout aria-hidden usage
- [2026-04-14] Feature complete. QA passed (design-qa: yes, dev-qa: no logic tasks). Verification passed (tsc: ✅, build: ✅, console: ✅). Branch: feature/KAN-5-login-split-layout

## Verification
| Check | Result |
|-------|--------|
| TypeScript (`pnpm tsc --noEmit`) | ✅ Pass |
| Production build (`pnpm build`)  | ✅ Pass |
| Console errors (all pages)       | ✅ None |

## Screenshots
_Screenshots will be added after design QA passes._

## Outcome
Implemented a modern split-screen login page for KAN-5. Added a `BrandPanel` molecule (left panel: inline SVG team illustration + tagline on a deep-blue gradient background) and a `SplitAuthLayout` organism (50/50 desktop split; left panel hidden on mobile with form centered full-width). Updated `login.tsx` to compose both with the existing `LoginForm` and added a "Forgot password?" link. Full accessibility pass: `aria-hidden` on decorative panel, `aria-label="Login form"` on form, focus-visible rings on all interactive elements, WCAG AA contrast verified. All checks pass.
