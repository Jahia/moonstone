---
# Allowed version bumps: patch, minor, major
"@jahia/moonstone": minor
---

Fixed Tab and screen readers reaching the items of a closed `Menu` or a collapsed `SecondaryNav` (#1596).
Fixed a `Menu` crash when its first child is `false`, `null` or text.
Tests that look for these items now need to open the `Menu` or expand the `SecondaryNav` first.
