# Components not detected by the MCP

Analysis: comparison between the components **publicly exported** by `@jahia/moonstone`
and the **64 entries** actually served by the MCP server (Storybook manifests).

**Cause of incompatibility**: the MCP indexes Storybook *stories*. An exported
component that has **no `.stories` file** with its own `title` never enters
the index → it doesn't appear in the MCP.

---

## A. TO FIX — 22 real invisible components (no story)

These are real components (`.tsx`), exported, but with no `.stories` file.
**Fix: create an `X.stories.tsx` with a dedicated `title`** (and ideally a doc `.mdx`).

| Component | Source file | Family |
|---|---|---|
| BaseInput | `src/components/Input/BaseInput/BaseInput.tsx` | Input |
| DropdownMenu | `src/components/Dropdown/DropdownMenu.tsx` | Dropdown |
| MenuItem | `src/components/Menu/MenuItem.tsx` | Menu |
| ModalBody | `src/components/Modal/ModalBody/ModalBody.tsx` | Modal |
| ModalFooter | `src/components/Modal/ModalFooter/ModalFooter.tsx` | Modal |
| ModalHeader | `src/components/Modal/ModalHeader/ModalHeader.tsx` | Modal |
| Pagination | `src/components/Pagination/Pagination.tsx` | Pagination |
| SecondaryNavHeader | `src/components/SecondaryNav/SecondaryNavHeader/SecondaryNavHeader.tsx` | SecondaryNav |
| SortIndicator | `src/components/Table/SortIndicator/SortIndicator.tsx` | Table |
| TabItem | `src/components/Tab/TabItem/TabItem.tsx` | Tab |
| TableBody | `src/components/DataTable/TableBody/TableBody.tsx` | DataTable |
| TableBodyCell | `src/components/Table/table-cells/TableBodyCell.tsx` | Table |
| TableCell | `src/components/DataTable/cells/TableCell/TableCell.tsx` | DataTable |
| TableCellActions | `src/components/DataTable/cells/TableCellActions/TableCellActions.tsx` | DataTable |
| TableCellStatus | `src/components/DataTable/cells/TableCellStatus/TableCellStatus.tsx` | DataTable |
| TableHead | `src/components/DataTable/TableHead/TableHead.tsx` | DataTable |
| TableHeadCell | `src/components/DataTable/cells/TableHeadCell/TableHeadCell.tsx` | DataTable |
| TablePagination | `src/components/Table/TablePagination/TablePagination.tsx` | Table |
| TableRow | `src/components/DataTable/TableRow/TableRow.tsx` | DataTable |
| TableStructuredCell | `src/components/DataTable/cells/TableStructuredCell/TableStructuredCell.tsx` | DataTable |
| TreeViewMenu | `src/components/Dropdown/TreeViewMenu.tsx` | Dropdown |
| ValueList | `src/components/ListSelector/ValueList/ValueList.tsx` | ListSelector |

---

## B. Served but poorly named / merged (3 cases) — fix if you want a dedicated entry

These components **do appear** in the MCP, but not under their own name:

| Exported component | Where it appears in the MCP | Reason |
|---|---|---|
| Loader | `LoaderCmp` | `component: LoaderCmp` in the story |
| SearchInput | merged into `Input` | same `title: 'Components/Input'` |
| SearchContextInput | merged into `Input` | same `title: 'Components/Input'` |
| GlobalStyle | merged into `Layout` | `title: 'Utilities/Layout'` |

→ Fix: give them a distinct `title` if they need to be addressable separately.

---

## C. Excluded — not components to document

- **Contexts (4)**: `AccordionContext`, `CheckboxGroupContext`, `PrimaryNavContext`, `RadioGroupContext` — React Context objects, not components.
- **Controlled/Uncontrolled variants (22)**: `ControlledAccordion`, `UncontrolledAccordion`, `ControlledCheckbox`, … — internal implementation exports, duplicates of the main component.

---

## How a component becomes "MCP compatible"

1. Create `X.stories.tsx` with a **unique** `title` (e.g. `Components/Modal/ModalHeader`) → it gets its own MCP entry.
2. (optional) Add JSDoc comments on the props → descriptions in `## Props`.
3. (optional) Add an `X.mdx` (like `Tag.mdx`) → enriched `## Docs` section.
