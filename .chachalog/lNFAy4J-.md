---
"@jahia/moonstone": patch
---

Changed DataTable row and cell callbacks to use a stable context object instead of internal table rows, and improved controlled sorting, pagination, and row expansion behavior.

If you customize DataTable row or cell rendering, update your callbacks to use the new `id`, `data`, `meta`, and `render` fields.
