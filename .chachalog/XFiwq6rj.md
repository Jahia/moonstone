---
# Allowed version bumps: patch, minor, major
"@jahia/moonstone": patch
---

Fixed the `Drawer` so a panel open by default no longer slides in when its screen opens. A `Drawer` now slides only when `isOpen` changes: to animate an opening, keep it rendered and set `isOpen` instead of mounting it (#1696)
