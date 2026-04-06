# Login Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Vite starter screen with a premium split-layout login page that includes validation, loading, and error states.

**Architecture:** Keep a single-page React app with a top-level `App` shell and two focused components: a left product narrative panel and a right login card. Keep visual styling centralized in CSS with clear design tokens. Add client-side form state in one component and cover behavior with component tests.

**Tech Stack:** React 19, Vite 8, Vitest, React Testing Library, CSS (no UI framework)

---

### Task 1: Set Up Test Harness For UI Behavior

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `src/test/setup.js`
- Create: `src/App.test.jsx`

- [ ] **Step 1: Install test dependencies**

Run:
```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

Expected: dependencies are added to `devDependencies`.

- [ ] **Step 2: Add test scripts to package.json**

Update scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- [ ] **Step 3: Configure Vitest environment in vite.config.js**

Set config:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true,
  },
})
```

- [ ] **Step 4: Create test setup file**

`src/test/setup.js`:
```js
import '@testing-library/jest-dom/vitest'
```

- [ ] **Step 5: Write the failing page-structure test**

`src/App.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App login layout', () => {
  it('renders login heading and form controls', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /remember me/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 6: Run the test to verify RED state**

Run:
```bash
pnpm test
```

Expected: FAIL because current starter page does not render login controls.

- [ ] **Step 7: Commit harness setup**

Run:
```bash
git add package.json pnpm-lock.yaml vite.config.js src/test/setup.js src/App.test.jsx
git commit -m "test: add vitest harness for login page"
```

### Task 2: Build Semantic Split Layout Skeleton

**Files:**
- Modify: `src/App.jsx`
- Create: `src/components/LoginPanel.jsx`
- Create: `src/components/ProductPanel.jsx`

- [ ] **Step 1: Write a failing test for split panel landmarks**

Append to `src/App.test.jsx`:
```jsx
it('renders two named regions for product and authentication', () => {
  render(<App />)

  expect(screen.getByRole('region', { name: /product overview/i })).toBeInTheDocument()
  expect(screen.getByRole('region', { name: /sign in panel/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run targeted test to confirm failure**

Run:
```bash
pnpm test -- App.test.jsx
```

Expected: FAIL on missing region roles.

- [ ] **Step 3: Create ProductPanel component**

`src/components/ProductPanel.jsx`:
```jsx
export default function ProductPanel() {
  return (
    <section className="product-panel" aria-label="Product overview">
      <p className="eyebrow">Secure workspace</p>
      <h1>Keep your team workflow moving with clarity.</h1>
      <p className="panel-copy">
        Track tasks, handoffs, and progress in one place without losing momentum.
      </p>
      <ul className="highlights" aria-label="Workflow highlights">
        <li>Track work in one place</li>
        <li>Faster team handoff</li>
        <li>Real-time visibility</li>
      </ul>
      <div className="status-block" aria-hidden="true">
        <span>Live updates</span>
        <strong>12 tasks moved today</strong>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create LoginPanel component markup**

`src/components/LoginPanel.jsx`:
```jsx
export default function LoginPanel() {
  return (
    <section className="login-panel" aria-label="Sign in panel">
      <div className="login-card">
        <h2>Welcome back</h2>
        <p className="helper">Sign in to continue to your workspace.</p>

        <form noValidate>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" />

          <div className="form-row">
            <label className="checkbox-label" htmlFor="rememberMe">
              <input id="rememberMe" name="rememberMe" type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Compose page in App.jsx**

`src/App.jsx`:
```jsx
import ProductPanel from './components/ProductPanel'
import LoginPanel from './components/LoginPanel'
import './App.css'

function App() {
  return (
    <main className="auth-page">
      <ProductPanel />
      <LoginPanel />
    </main>
  )
}

export default App
```

- [ ] **Step 6: Run tests to verify GREEN state**

Run:
```bash
pnpm test -- App.test.jsx
```

Expected: PASS for structure and control presence tests.

- [ ] **Step 7: Commit semantic layout**

Run:
```bash
git add src/App.jsx src/components/ProductPanel.jsx src/components/LoginPanel.jsx src/App.test.jsx
git commit -m "feat: add semantic split login layout skeleton"
```

### Task 3: Implement Premium-Tech Visual System

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css`

- [ ] **Step 1: Write a failing style contract test**

Append to `src/App.test.jsx`:
```jsx
it('uses premium split container and card classes', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.auth-page')).toBeInTheDocument()
  expect(container.querySelector('.login-card')).toBeInTheDocument()
  expect(container.querySelector('.status-block')).toBeInTheDocument()
})
```

- [ ] **Step 2: Run tests to verify failure if classes drift**

Run:
```bash
pnpm test -- App.test.jsx
```

Expected: FAIL if any required class is absent from rendered output.

- [ ] **Step 3: Replace root tokens and base typography in index.css**

Use:
```css
:root {
  --ink-900: #0f1f34;
  --ink-700: #25476d;
  --ink-500: #466b96;
  --surface-0: #f5f8ff;
  --surface-1: #ffffff;
  --line: #d7e4f5;
  --accent: #14375a;
  --accent-strong: #0b2741;
  --danger-bg: #fdecec;
  --danger-text: #8b1f2a;
  --ok-bg: #e8f6f1;
  --focus: #2b76c5;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Plus Jakarta Sans", "Inter", "Segoe UI", sans-serif;
  background: radial-gradient(circle at 20% 20%, #d7e8ff 0%, #f5f8ff 45%, #edf3fd 100%);
  color: var(--ink-900);
}

#root {
  min-height: 100vh;
}
```

- [ ] **Step 4: Add full layout and component styles in App.css**

Include:
```css
.auth-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
}

.product-panel {
  padding: 4rem clamp(1.5rem, 4vw, 4rem);
  background: linear-gradient(140deg, #12365a 0%, #1e4e7b 55%, #2d6799 100%);
  color: #f4f8ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  opacity: 0.85;
}

.highlights {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.5rem;
}

.status-block {
  margin-top: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.32);
  background: rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 1rem;
  display: grid;
  gap: 0.2rem;
}

.login-panel {
  padding: clamp(1rem, 3vw, 2rem);
  display: grid;
  place-items: center;
}

.login-card {
  width: min(460px, 100%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: 0 24px 48px rgba(16, 47, 81, 0.14);
  padding: clamp(1.2rem, 3vw, 2rem);
}

.login-card form {
  display: grid;
  gap: 0.85rem;
}

.login-card input[type='email'],
.login-card input[type='password'] {
  width: 100%;
  border: 1px solid #c8d8ed;
  border-radius: 12px;
  padding: 0.72rem 0.8rem;
  font: inherit;
}

.login-card input:focus-visible,
.login-card button:focus-visible,
.forgot-link:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}

.form-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.checkbox-label {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
}

.forgot-link {
  color: var(--ink-700);
  text-decoration: none;
}

.login-card button {
  margin-top: 0.35rem;
  border: 0;
  border-radius: 12px;
  padding: 0.78rem 1rem;
  font: inherit;
  font-weight: 600;
  background: var(--accent);
  color: #f5f8ff;
  cursor: pointer;
  transition: background-color 150ms ease;
}

.login-card button:hover {
  background: var(--accent-strong);
}

@media (max-width: 900px) {
  .auth-page {
    grid-template-columns: 1fr;
  }

  .product-panel {
    padding: 2rem 1.2rem;
  }
}
```

- [ ] **Step 5: Verify tests pass and page still renders**

Run:
```bash
pnpm test -- App.test.jsx
pnpm build
```

Expected: tests PASS and build exits with code 0.

- [ ] **Step 6: Commit design system**

Run:
```bash
git add src/index.css src/App.css src/App.test.jsx
git commit -m "style: implement premium split login visual language"
```

### Task 4: Add Form State, Validation, Loading, And Error Handling

**Files:**
- Modify: `src/components/LoginPanel.jsx`
- Modify: `src/App.test.jsx`

- [ ] **Step 1: Write failing tests for validation and async states**

Append to `src/App.test.jsx`:
```jsx
import userEvent from '@testing-library/user-event'

it('shows required errors when submitting empty form', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: /sign in/i }))

  expect(screen.getByText(/email is required/i)).toBeInTheDocument()
  expect(screen.getByText(/password is required/i)).toBeInTheDocument()
})

it('shows invalid email message for malformed email', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.type(screen.getByLabelText(/email address/i), 'not-an-email')
  await user.type(screen.getByLabelText(/password/i), 'secret123')
  await user.click(screen.getByRole('button', { name: /sign in/i }))

  expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument()
})

it('shows loading then form error for rejected sign-in', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.type(screen.getByLabelText(/email address/i), 'demo@example.com')
  await user.type(screen.getByLabelText(/password/i), 'secret123')
  await user.click(screen.getByRole('button', { name: /sign in/i }))

  expect(screen.getByRole('button', { name: /signing in/i })).toBeDisabled()
  expect(await screen.findByRole('alert')).toHaveTextContent(/unable to sign in right now/i)
})
```

- [ ] **Step 2: Run tests to verify RED state**

Run:
```bash
pnpm test -- App.test.jsx
```

Expected: FAIL because state handling is not implemented yet.

- [ ] **Step 3: Implement controlled form with validation and simulated async submit**

Update `src/components/LoginPanel.jsx`:
```jsx
import { useState } from 'react'

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
}

function validate(values) {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required.'
  }

  return errors
}

export default function LoginPanel() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function updateField(event) {
    const { name, type, checked, value } = event.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitError('')

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 700))

    setIsSubmitting(false)
    setSubmitError('Unable to sign in right now. Please check your credentials and try again.')
  }

  return (
    <section className="login-panel" aria-label="Sign in panel">
      <div className="login-card">
        <h2>Welcome back</h2>
        <p className="helper">Sign in to continue to your workspace.</p>

        {submitError ? (
          <p className="form-error" role="alert">{submitError}</p>
        ) : null}

        <form noValidate onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={updateField}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? <p id="email-error" className="field-error">{errors.email}</p> : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={updateField}
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password ? <p id="password-error" className="field-error">{errors.password}</p> : null}

          <div className="form-row">
            <label className="checkbox-label" htmlFor="rememberMe">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={values.rememberMe}
                onChange={updateField}
              />
              Remember me
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Add error-state styling to App.css**

Add:
```css
.field-error {
  margin: -0.35rem 0 0.2rem;
  color: var(--danger-text);
  font-size: 0.85rem;
}

.form-error {
  margin: 0 0 0.85rem;
  border: 1px solid #f4c8cc;
  background: var(--danger-bg);
  color: var(--danger-text);
  border-radius: 12px;
  padding: 0.65rem 0.75rem;
}

.login-card button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
```

- [ ] **Step 5: Run tests to verify GREEN state**

Run:
```bash
pnpm test -- App.test.jsx
```

Expected: PASS for validation, loading, and error-state tests.

- [ ] **Step 6: Commit interaction behavior**

Run:
```bash
git add src/components/LoginPanel.jsx src/App.css src/App.test.jsx
git commit -m "feat: add login validation loading and error states"
```

### Task 5: Final Accessibility, Responsiveness, And Regression Check

**Files:**
- Modify: `src/App.test.jsx`
- Modify: `src/App.css`

- [ ] **Step 1: Write failing accessibility regression tests**

Append to `src/App.test.jsx`:
```jsx
it('keeps label associations and focusable forgot password link', () => {
  render(<App />)

  const email = screen.getByLabelText(/email address/i)
  const password = screen.getByLabelText(/password/i)
  const forgot = screen.getByRole('link', { name: /forgot password\?/i })

  expect(email).toHaveAttribute('id', 'email')
  expect(password).toHaveAttribute('id', 'password')
  expect(forgot).toBeInTheDocument()
})

it('maintains mobile-safe layout classes', () => {
  const { container } = render(<App />)
  expect(container.querySelector('.auth-page')).toBeInTheDocument()
  expect(container.querySelector('.product-panel')).toBeInTheDocument()
  expect(container.querySelector('.login-panel')).toBeInTheDocument()
})
```

- [ ] **Step 2: Run tests to verify RED state if regressions exist**

Run:
```bash
pnpm test -- App.test.jsx
```

Expected: PASS now; if fail, fix markup/styling before completion.

- [ ] **Step 3: Add reduced-motion safety and responsive spacing polish**

Append to `src/App.css`:
```css
.auth-page,
.product-panel,
.login-card,
.login-card input,
.login-card button {
  transition: all 180ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .auth-page,
  .product-panel,
  .login-card,
  .login-card input,
  .login-card button {
    transition: none;
  }
}

@media (max-width: 520px) {
  .login-card {
    border-radius: 16px;
    padding: 1rem;
  }

  .product-panel h1 {
    font-size: 1.65rem;
    line-height: 1.2;
  }
}
```

- [ ] **Step 4: Run full verification suite**

Run:
```bash
pnpm test
pnpm lint
pnpm build
```

Expected:
- `pnpm test`: all tests pass.
- `pnpm lint`: no lint errors.
- `pnpm build`: exits with code 0.

- [ ] **Step 5: Commit final polish and verification state**

Run:
```bash
git add src/App.css src/App.test.jsx
git commit -m "chore: polish responsive and accessibility states"
```
