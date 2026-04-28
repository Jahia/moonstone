---
# Allowed version bumps: patch, minor, major
"@jahia/moonstone": patch
---

Prefixed global CSS variables with `--moon` and kept legacy aliases for existing variable names. (#1307)

Kept existing variable names as aliases so this change is not breaking, e.g. `--color-accent: var(--moon-color-accent)`.
