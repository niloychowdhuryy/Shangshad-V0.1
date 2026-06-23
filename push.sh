#!/usr/bin/env bash
# Shangshad — one-command "save & upload to GitHub".
#
#   ./push.sh                 commit everything with an auto message, then push
#   ./push.sh "your message"  commit everything with your message, then push
#
# First time only: tell git where the repo lives (replace the URL):
#   git remote add origin https://github.com/quickstudyuk/<repo>.git
# The very first push may ask for your GitHub login in the terminal.

set -e
cd "$(dirname "$0")"

# 1) Stage and commit (skip the commit if nothing changed).
git add -A
if git diff --cached --quiet; then
  echo "• Nothing new to commit."
else
  MSG="${1:-Update $(date '+%Y-%m-%d %H:%M')}"
  git commit -q -m "$MSG"
  echo "• Committed: $MSG"
fi

# 2) Make sure a remote exists.
if ! git remote get-url origin >/dev/null 2>&1; then
  echo
  echo "✗ No GitHub remote set yet. Run this once (use your repo's URL):"
  echo "    git remote add origin https://github.com/quickstudyuk/<repo>.git"
  echo "  then run ./push.sh again."
  exit 1
fi

# 3) Push the current branch.
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
echo "• Pushing '$BRANCH' to GitHub…"
git push -u origin "$BRANCH"
echo "✓ Done — Vercel will rebuild the live game automatically."
