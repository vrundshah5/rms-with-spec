# Login Page Design Spec

## Summary

Design a modern premium login page for the current React + Vite app, replacing the default starter UI. The page should present a split desktop layout with a workflow-oriented product panel on the left and an elevated authentication card on the right. The visual direction should feel premium-tech rather than generic SaaS, using cool blue tones, strong structure, restrained motion, and clear form feedback.

## Goals

- Replace the starter screen with a polished login experience.
- Establish a premium visual direction for the product.
- Keep the UI focused on sign-in rather than full authentication flows.
- Include realistic validation, loading, and error states in the design.
- Ensure the layout works well on desktop and mobile.

## Out Of Scope

- Real backend authentication.
- Social sign-in providers.
- Account creation flow.
- Password reset flow implementation beyond a visible link.
- Multi-page routing or dashboard implementation.

## Recommended Approach

Use a premium product login layout.

This approach combines a cool, structured left-side brand panel with a high-contrast, elevated sign-in card. It best matches the chosen direction because it feels modern and product-led without becoming visually noisy. It also fits the current app size: one focused page with a clear hierarchy and enough visual presence to define the product's identity.

## Layout Architecture

The page should occupy the full viewport height and be composed of two primary regions.

- Left panel: product narrative and workflow positioning.
- Right panel: authentication card and all interactive form states.

On wide screens, the two regions should sit side by side. On smaller screens, the layout should stack vertically with the brand panel compressed into a compact top section and the form card remaining the dominant interactive element.

The design should replace the current starter content entirely rather than layering over it.

## Left Panel Design

The left panel should emphasize productivity and workflow rather than abstract brand language. It should contain:

- A small eyebrow label.
- A strong headline.
- A short supporting paragraph.
- Two or three compact workflow highlights.
- One structured visual block that suggests product status or team activity.

The panel should use layered blue tones with subtle gradients, faint grid or glow treatments, and crisp geometry. The purpose is to imply a serious software product, not a marketing landing page.

Example content direction:

- Eyebrow: "Secure workspace"
- Headline: a concise statement about organized work and team momentum.
- Supporting copy: one short sentence about staying aligned and moving faster.
- Highlights: track work in one place, faster team handoff, real-time visibility.

## Login Card Design

The right panel should contain a single focused authentication card with:

- A heading.
- Short helper text.
- Labeled email field.
- Labeled password field.
- Remember-me checkbox.
- Forgot-password link.
- Primary sign-in button.

The card should feel premium through spacing, radius, contrast, shadow, and surface treatment rather than decorative excess. A slightly glassy or high-clarity surface is acceptable as long as the form remains readable and accessible.

## Interaction And States

The design must include realistic UI states from day one.

### Default State

- Empty fields.
- Sign-in button available.
- Quiet helper text.

### Validation State

- Required-field guidance appears when the form is submitted empty.
- Invalid email formatting shows inline field-level feedback.
- Empty password feedback remains concise and local to the field.
- Feedback should be clear without making the layout jump excessively.

### Loading State

- The sign-in button enters a loading state.
- The form becomes temporarily non-interactive during submission.
- Visual feedback should indicate progress without looking like a full-page blocker.

### Error State

- A form-level error message appears inside the card.
- The message should communicate failed sign-in gracefully.
- The card layout should remain stable when the error appears.

## Motion

Motion should be restrained and purposeful.

- Gentle page-load reveal.
- Soft transitions on panel and card entry.
- Clear but subtle hover, focus, and state transitions on inputs and button.

Avoid excessive animation, floating gimmicks, or motion that competes with the form.

## Typography And Visual Language

- Overall tone: premium-tech with restraint.
- Palette: cool blues, pale neutrals, and dark ink tones.
- Typography: more expressive than the Vite starter defaults, while still highly legible.
- Shapes: structured panels with refined radii.
- Background: layered gradients or atmospheric treatment rather than a flat fill.

The result should feel intentional and polished, not like a stock auth template.

## Accessibility Requirements

- Use visible labels for form controls.
- Maintain strong contrast for text and controls.
- Include clear keyboard focus states.
- Use semantic form elements.
- Preserve usability on small screens without horizontal scrolling.
- Ensure state messaging is readable and contextually attached to the relevant control or form.

## Responsive Behavior

- Desktop: split layout with clear separation between left panel and right card.
- Tablet: tighter spacing while preserving split composition when practical.
- Mobile: stacked layout with condensed left-panel content and dominant card area.
- Buttons, inputs, and links must remain easy to tap.

## Testing Expectations

Implementation planning should cover:

- Rendering of the split layout and stacked mobile layout.
- Presence of all required form controls.
- Validation behavior for empty fields and invalid email.
- Loading-state behavior on submit.
- Error-state rendering.
- Basic accessibility checks for labels, roles, and keyboard-visible focus behavior.

## Implementation Notes

- The current app is still the Vite starter, so this work can replace the existing starter markup and styling without needing to preserve any product-specific UI.
- The design should stay within the existing React app structure unless implementation planning finds a strong reason to split components.
- Component boundaries should remain clear: page shell, left product panel, and login card behavior.