#!/usr/bin/env bash
# =============================================================================
# PreToolUse Hook — Sensitive File Access Guard
# =============================================================================
# How it works:
#   - The agent runtime passes a JSON payload via stdin before every tool call.
#   - This script reads that payload, extracts the target file path, and blocks
#     access if the path matches any sensitive pattern.
#
# Exit codes (Claude Code hook contract):
#   0  → allow the tool call to proceed
#   2  → BLOCK the tool call (agent sees the stderr message as the reason)
#   1  → unexpected error (treated as a soft block)
#
# Register this hook in .claude/settings.json (project) or
# ~/.claude/settings.json (global):
#
#   {
#     "hooks": {
#       "PreToolUse": [
#         {
#           "matcher": ".*",
#           "hooks": [{ "type": "command", "command": ".github/hooks/pre-tool-use.sh" }]
#         }
#       ]
#     }
#   }
# =============================================================================

set -euo pipefail

# ── Read the full JSON payload sent by the agent runtime ────────────────────
INPUT="$(cat)"

# Pure-bash JSON value extractor (no jq dependency).
# Usage: json_get <key> <json_string>
json_get() {
  local key="$1" json="$2" value=""
  # Match: "key":"value"  or  "key": "value"
  if [[ "$json" =~ \"${key}\"[[:space:]]*:[[:space:]]*\"([^\"]+)\" ]]; then
    value="${BASH_REMATCH[1]}"
  fi
  echo "$value"
}

TOOL_NAME="$(json_get "tool_name" "$INPUT")"

# Try the most common path key names that agent runtimes use
FILE_PATH=""
for key in path file_path filePath target; do
  val="$(json_get "$key" "$INPUT")"
  if [[ -n "$val" ]]; then
    FILE_PATH="$val"
    break
  fi
done

# ── Sensitive file patterns to block ────────────────────────────────────────
BLOCKED_PATTERNS=(
  ".env"
  ".env."
  ".env.local"
  ".env.production"
  ".env.development"
  ".env.test"
  "*.pem"
  "*.key"
  "*.p12"
  "*.cert"
  "*.pfx"
  "id_rsa"
  "id_ed25519"
  ".netrc"
  ".npmrc"          # may contain auth tokens
  ".pypirc"
)

# ── Helper: check if a path matches any blocked pattern ─────────────────────
is_blocked() {
  local path="$1"
  local base_name
  base_name="$(basename "$path")"
  local full_lower="${path,,}"          # lowercase for case-insensitive match
  local base_lower="${base_name,,}"

  for pattern in "${BLOCKED_PATTERNS[@]}"; do
    # Remove leading wildcard for substring check
    local clean="${pattern#\*}"
    # Match against full path OR just the basename
    if [[ "$full_lower" == *"$clean"* ]] || [[ "$base_lower" == *"$clean"* ]]; then
      return 0   # blocked
    fi
  done
  return 1  # not blocked
}

# ── Only check tools that deal with file I/O ────────────────────────────────
FILE_IO_TOOLS="read_file|write_file|edit_file|replace_string_in_file|create_file|view_image|ReadFile|WriteFile|EditFile"

if [[ "$TOOL_NAME" =~ $FILE_IO_TOOLS ]] && [[ -n "$FILE_PATH" ]]; then
  if is_blocked "$FILE_PATH"; then
    echo "[HOOK BLOCKED] Access to sensitive file denied: '$FILE_PATH'" >&2
    echo "[HOOK BLOCKED] Tool: '$TOOL_NAME'" >&2
    echo "Reason: This file matches a sensitive/secret pattern and cannot be read or modified by the agent." >&2
    exit 2   # ← tells the agent runtime to BLOCK this tool call
  fi
fi

# ── Feature Agent: Branch Creation Prompt ───────────────────────────────────
# The feature agent touches /tmp/.rms-feature-active as its first action.
# On the very next tool call this block fires once, prompts the user to create
# a git branch, then removes the flag so it never fires again for this session.
FEATURE_FLAG="/tmp/.rms-feature-active"
if [[ -f "$FEATURE_FLAG" ]]; then
  rm -f "$FEATURE_FLAG"
  bash "$(dirname "$0")/feature-branch-prompt.sh" || true
fi

# ── Allow all other tool calls ───────────────────────────────────────────────
exit 0
