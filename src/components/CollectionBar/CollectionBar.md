## Usage

`CollectionBar` is one row above a set of items: a `DataTable`, a list or thumbnails. It sits below the toolbar of `Header`. Some design systems call it a filter bar or a table toolbar.

- **Filters**, on the left: one chip for each filter, and **Add filter** for the filters that are not displayed by default.
- **Column choice**, at the right end, above a `DataTable` only. Leave out `columns` above a list or thumbnails.

The bar holds no data and stores nothing. It shows the state that the consumer passes, and it reports each change through a callback, so it works with data on the server.

### When not to use it

- One filter next to the title of a page, such as a status: use a `Dropdown` in the toolbar of `Header`.
- A search form whose fields are required, or that validates its values: use the fields of a form, in a `Fieldset`.
- A text search over the items: the search is not part of the bar yet.

## Filters

- A chip with no value shows the name of its filter, with a dashed border.
- A chip with a value shows the name, the value and a clear button. A long value ends with an ellipsis, and the tooltip of the chip shows the full value.
- A chip opens its selector in a dialog below the chip. Escape, the Close button or a click outside closes it, and the focus goes back to the chip. Each close calls the `onClose` of the filter.
- An added chip stays in the bar while it has a value or while its selector is open. Once it leaves the bar, the focus goes to **Add filter**.
- **Add filter** is disabled when every filter is in the bar, and absent when every filter is displayed by default.
- **Clear all** shows when the consumer passes `onClearAll` and at least one filter has a value.

The selector holds form controls, such as an `Input`, a `DateTimeInput` or a `CheckboxGroup`. A `MenuItem` works only inside a `Menu`, so it does not go in a selector. A selector that opens a dialog, such as a picker, takes the function form and calls `close` first.

```tsx
const [path, setPath] = useState('');
const [draft, setDraft] = useState('');

<CollectionBar
    filters={[{
        key: 'path',
        label: 'Path',
        valueLabel: path,
        isDisplayedByDefault: true,
        selector: ({ close }) => (
            <Input aria-label="Path" value={draft} onChange={e => setDraft(e.target.value)} onKeyUp={e => e.key === 'Enter' && close()}/>
        ),
        // The typed draft becomes the value of the filter when the selector closes
        onClose: () => setPath(draft),
        onClear: () => {
            setDraft('');
            setPath('');
        },
    }]}
/>
```

## Keyboard

From 3 controls on, the bar is a toolbar: one Tab stop, and the arrow keys, Home and End move between the chips, their clear buttons, **Add filter**, **Clear all** and the column button. With fewer controls, the bar is a group, and each control is a Tab stop.

In an open selector, Tab and Shift+Tab stay in the dialog until it closes.

## Content

- Name a filter with one or two words, such as `Date` or `Path`.
- Give the value as the user reads it, such as `Since 2026-10-31`, and not as an identifier.
- Display no more than two or three filters by default, and leave the others to **Add filter**.
- Give each control of a selector a label, visible or in `aria-label`. A placeholder is no label: use it for an example, such as `For example root`.
- Name the bar after the collection it filters, such as `History filters`, in `i18n.toolbarLabel`.
- Translate the labels through `i18n`. A label that holds `{{name}}` gets the name of the filter there. With i18next, pass `{ name: '{{name}}' }` to `t`, or i18next replaces the placeholder itself.
