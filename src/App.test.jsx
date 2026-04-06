import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
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

  it('renders two named regions for product and authentication', () => {
    render(<App />)

    expect(screen.getByRole('region', { name: /product overview/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /sign in panel/i })).toBeInTheDocument()
  })

  it('uses premium split container and card classes', () => {
    const { container } = render(<App />)

    expect(container.querySelector('.auth-page')).toBeInTheDocument()
    expect(container.querySelector('.login-card')).toBeInTheDocument()
    expect(container.querySelector('.status-block')).toBeInTheDocument()
  })

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
})