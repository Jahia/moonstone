---
# Allowed version bumps: patch, minor, major
"@jahia/moonstone": minor
---

Fixed `Menu` so screen readers announce a menu, or the listbox of a `Dropdown`, and so Tab out of it closes it. The items now sit in a `menu` element inside the `.moonstone-menu` container: a selector or a test that looks for a `list` role, or for an item right under `.moonstone-menu`, must change (#1604)
