A control that lets the user pick one or several values from a list. It replaces the
native HTML `<select>` and adds grouping, search, icons/images, and tree data.

## When to use
- Selecting from a fixed set of options (single or multiple).
- The list is long enough to benefit from search, grouping, or a tree.

## When NOT to use
- A free-floating list of *actions* (not a value selection) → use **Menu**.
- 2–4 mutually exclusive options always visible → consider **RadioGroup**.
- A simple on/off → use **Switch**.

## Usage
```jsx
import {Dropdown} from '@jahia/moonstone';

// Single selection
<Dropdown
    data={[{label: 'Draft', value: 'draft'}, {label: 'Published', value: 'published'}]}
    value={status}
    placeholder="Select a status"
    onChange={(e, item) => setStatus(item.value)}
/>

// Multiple selection: pass `values` (string[]) instead of `value`
// Tree selection: pass `treeData` instead of `data`
```

- Single vs multiple: use **either** `value` **or** `values` (TS enforces this).
- Regular vs tree: use **either** `data` **or** `treeData`.
- Options support `iconStart`/`iconEnd`, `description`, `image`, and `isDisabled`.
- Group options with `{groupLabel, options}`; if you group, **all** options must be in a group.
- Search: `hasSearch` (auto-enabled past `autoAddSearchLimit`, default 7); `searchEmptyText` for no results.
- `placeholder` shows when nothing is selected (`label` is deprecated).

## Accessibility
- Keyboard: Tab to move between options, Enter to select; click outside to dismiss.
- The selected item has a distinct visual state.

## Related
- **Menu** (actions overlay), **TreeView** (tree without selection control), **Field** (label/error).
