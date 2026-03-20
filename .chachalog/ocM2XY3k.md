---
# Allowed version bumps: patch, minor, major
"@jahia/moonstone": patch
---

All CSS variables are now prefixed with `--moon`. (#1307)

This is not a breaking change as old names are now aliases of the new names, e.g. `--color-accent: var(--moon-color-accent)`.
