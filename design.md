# Design Patterns Reference

This file defines the design patterns and brand references available for this project.
The `design` agent **must read this file first** before implementing any UI work.

---

## Available Brand Design Systems

Brand-specific design patterns are stored in the `design-md/` directory. Each brand folder contains a `README.md` with its design system details.

| Brand | Path |
|-------|------|
| Airbnb | `design-md/airbnb/README.md` |
| Airtable | `design-md/airtable/README.md` |
| Apple | `design-md/apple/README.md` |
| BMW | `design-md/bmw/README.md` |
| Cal | `design-md/cal/README.md` |
| Claude | `design-md/claude/README.md` |
| Clay | `design-md/clay/README.md` |
| ClickHouse | `design-md/clickhouse/README.md` |
| Cohere | `design-md/cohere/README.md` |
| Coinbase | `design-md/coinbase/README.md` |
| Composio | `design-md/composio/README.md` |
| Cursor | `design-md/cursor/README.md` |
| ElevenLabs | `design-md/elevenlabs/README.md` |
| Expo | `design-md/expo/README.md` |
| Ferrari | `design-md/ferrari/README.md` |
| Figma | `design-md/figma/README.md` |
| Framer | `design-md/framer/README.md` |
| HashiCorp | `design-md/hashicorp/README.md` |
| IBM | `design-md/ibm/README.md` |
| Intercom | `design-md/intercom/README.md` |
| Kraken | `design-md/kraken/README.md` |
| Lamborghini | `design-md/lamborghini/README.md` |
| Linear | `design-md/linear.app/README.md` |
| Lovable | `design-md/lovable/README.md` |
| MiniMax | `design-md/minimax/README.md` |
| Mintlify | `design-md/mintlify/README.md` |
| Miro | `design-md/miro/README.md` |
| MongoDB | `design-md/mongodb/README.md` |
| Notion | `design-md/notion/README.md` |
| NVIDIA | `design-md/nvidia/README.md` |
| Ollama | `design-md/ollama/README.md` |
| Pinterest | `design-md/pinterest/README.md` |
| PostHog | `design-md/posthog/README.md` |
| Raycast | `design-md/raycast/README.md` |
| Renault | `design-md/renault/README.md` |
| Replicate | `design-md/replicate/README.md` |
| Resend | `design-md/resend/README.md` |
| Revolut | `design-md/revolut/README.md` |
| Runway ML | `design-md/runwayml/README.md` |
| Sanity | `design-md/sanity/README.md` |
| SEMrush | `design-md/semrush/README.md` |
| Sentry | `design-md/sentry/README.md` |
| SpaceX | `design-md/spacex/README.md` |
| Spotify | `design-md/spotify/README.md` |
| Stripe | `design-md/stripe/README.md` |
| Supabase | `design-md/supabase/README.md` |
| Superhuman | `design-md/superhuman/README.md` |
| Tesla | `design-md/tesla/README.md` |
| Uber | `design-md/uber/README.md` |
| Vercel | `design-md/vercel/README.md` |
| VoltAgent | `design-md/voltagent/README.md` |
| Warp | `design-md/warp/README.md` |
| Webflow | `design-md/webflow/README.md` |
| Wise | `design-md/wise/README.md` |
| Zapier | `design-md/zapier/README.md` |

---

## How to Use

When implementing a UI feature:

1. **Identify the target brand** from the feature description or `spec.yaml`. If no brand is specified, use the project's currently active design system (check `spec.yaml` or ask).
2. **Read the brand's README** from the corresponding `design-md/<brand>/README.md` path listed above.
3. **Apply the design system principles** from that README to all components, layouts, colors, typography, and spacing decisions.
4. If the brand README links to an external URL (e.g. `https://getdesign.md/<brand>/design-md`), fetch and read that page for the full details.

---

## Core Principles (apply regardless of brand)

- Semantic color tokens only — no hardcoded hex values outside `@theme`
- Responsive by default — all layout components need `sm:`, `md:`, `lg:` breakpoints
- Dark mode support — use `dark:` variants or CSS variable tokens
- Accessible — labels linked to inputs, buttons with descriptive text, ARIA where needed
- Tailwind CSS v4 scale for all spacing — no arbitrary pixel values in layout
