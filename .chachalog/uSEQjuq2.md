---
# Allowed version bumps: patch, minor, major
"@jahia/moonstone": patch
---

Fixed the 12-hour `TimeInput` and `DateTimeInput`, where the time field filled the row and cut the AM/PM selector (#1724). It happened on pages that load the global styles.
