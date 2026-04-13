# Copilot Global Instructions

## Security: Sensitive File Access Policy

The following files and patterns are **strictly off-limits** for all agents and
Copilot tools. Do NOT read, edit, or reference their contents under any circumstance:

- `.env`, `.env.*`, `.env.local`, `.env.*.local`
- `*.pem`, `*.key`, `*.cert`, `*.p12`, `*.pfx`
- `id_rsa`, `id_ed25519` (SSH private keys)
- `.netrc`, `.npmrc`, `.pypirc`

A `PreToolUse` hook (`.github/hooks/pre-tool-use.sh`) is active and will
**block** any tool call that attempts to access these files. Attempting to
bypass this policy is a violation of the project security contract.

---

## Tech Stack & Standards

### Language
- **TypeScript** is required for all files — no `.js`/`.jsx` files. Use `.ts`/`.tsx` exclusively.
- Enable strict mode. Avoid `any`; use proper types or generics.

### Styling
- **Tailwind CSS** is the only styling solution. No inline styles, CSS modules, or plain CSS unless absolutely necessary.
- Support **dark and light themes** using Tailwind's `dark:` variant. All components must render correctly in both modes.

### API Integration
- Use **React Query (`@tanstack/react-query`)** for all server state (fetching, caching, mutations).
- Use **Axios** with interceptors for HTTP transport. Set up a central Axios instance with request/response interceptors (auth headers, error handling).
- Never call `fetch` or Axios directly inside components — always go through a React Query hook.

### Routing
- Use **`react-router-dom`** for all client-side routing.

### Forms
- Use **`react-hook-form`** for all forms. Pair with `zod` for schema validation via `@hookform/resolvers/zod`.

---

## Project Structure

```
src/
  assets/           # Static assets
  components/
    atoms/          # Generic UI primitives (no business logic)
    molecules/      # Reusable business components (generic names)
    organisms/      # Page sections and complex compositions
  hooks/            # Custom React hooks
  pages/            # Route-level page components
  services/         # Axios instance and API service functions
  types/            # TypeScript type definitions, organized by feature
```

### Path Resolution
- Use `@/` for all imports — Vite resolves `@/` to `src/`.
  ```ts
  // ✅ GOOD
  import { Button } from "@/components/atoms/Button";
  // ❌ BAD
  import { Button } from "../../components/atoms/Button";
  ```

### Types Organization
- Store types in `src/types/` organized by feature domain.
  - `src/types/user.ts`, `src/types/product.ts`, etc.
- Export all types from `src/types/index.ts`.

### Barrel Exports
- Every component folder must have an `index.ts` that re-exports its contents.
  ```ts
  // src/components/atoms/Button/index.ts
  export { Button } from "./Button";
  ```

---

## Atomic Design Structure

Follow **Atomic Design** strictly. The layer a component belongs to determines its responsibilities and naming rules.

### Atoms — `src/components/atoms/`
- Generic, pure UI primitives with no business logic.
- Wrap or extend shadcn/ui primitives here.
- **Always use generic names.**
- Examples: `Button`, `Input`, `Card`, `Badge`, `CurrencyInput`

### Molecules — `src/components/molecules/`
- Reusable components that combine atoms with light business logic.
- **MUST have generic names** — they must be reusable across features.
- Examples: `DataTable`, `ConfirmationNumber`, `SubmissionTimestamp`, `ErrorMessage`, `FilterableChartContainer`, `BalanceTrendViewer`, `AcknowledgementModal`

### Organisms — `src/components/organisms/`
- Page sections and complex compositions. May be page-specific.
- Compose molecules and atoms.
- Examples: `Header`, `PageFooter`, `PurchaseViewWithAllocation`, `PurchaseDataTableWithAllocation`

### Pages — `src/pages/`
- Complete route-level views. One file per route.
- Examples: `invest.tsx`, `make-purchase.tsx`, `success-purchase.tsx`

---

## Component Naming Rules

Use **generic, function-based names**. Names must describe *what a component does*, not where it is used.

```ts
// ✅ GOOD — Generic, reusable names
ConfirmationNumber     // not "PurchaseConfirmationNumber"
SubmissionTimestamp    // not "TransactionTimestamp"
DataTable              // not "PurchaseDataTable"
ErrorMessage           // not "FormErrorMessage"
ConfirmationModal      // not "CancelConfirmationModal"

// ✅ GOOD — Organisms CAN be page-specific (page context is their job)
PurchaseViewWithAllocation     // organism, page-specific is OK
PurchaseDataTableWithAllocation
Header                         // generic layout organism
```

**Rule of thumb:** If a Molecule or Atom name contains a page/feature name (e.g., "Purchase", "Dashboard", "Form"), rename it to a generic equivalent.

---

## Component Architecture Principles

- **Composition over duplication** — build complex UI by composing smaller components, never copy-paste logic.
- **Reusable components** — before creating a new component, check if an existing atom or molecule can be extended or composed.
- Each component lives in its own folder with an `index.ts` barrel export.
- Props interfaces are defined with `interface`, exported from the component file, and named `<ComponentName>Props`.

```tsx
// ✅ GOOD
export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
}

export function DataTable<T>({ data, columns, isLoading }: DataTableProps<T>) {
  // ...
}
```
