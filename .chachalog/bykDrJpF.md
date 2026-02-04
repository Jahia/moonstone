---
"@jahia/moonstone": minor
---

Add a new column config for truncate/scroll option in all cells (#1273)

- Truncate or scroll now applies to every cell (data, structured first column, selection, actions).
- First column in structured view respects the column's truncate/scroll setting.
- Column config `textOverflow` (`'truncate'` or `'scroll'`) supported; default is truncate.
