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
