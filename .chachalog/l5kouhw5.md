---
# Allowed version bumps: patch, minor, major
"@jahia/moonstone": minor
---

Protect Moonstone from global styles (and vice-versa). (#1310)

The new `@jahia/moonstone/scoped.css` CSS file is designed for safe insertion of Moonstone components in foreign contexts (e.g. the editframe).
