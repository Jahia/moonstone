## Usage

`CollectionBar` is one row above a set of items: a `DataTable`, a list or thumbnails. It sits below the toolbar of `Header`.

- **Filters**, on the left: one chip for each filter, and **Add filter** for the filters that are not displayed by default.
- **Column choice**, at the right end, above a `DataTable` only. Leave out `columns` above a list or thumbnails.

The bar holds no data and stores nothing. It shows the state that the consumer passes, and it reports each change through a callback, so it works with data on the server.

## Filters

- A chip with no value shows the name of its filter, with a dashed border.
- A chip with a value shows the name, the value and a clear button. A long value ends with an ellipsis, and the tooltip of the chip shows the full value.
- A chip opens its selector in a dialog below the chip. Escape, the Close button or a click outside closes it, and the focus goes back to the chip.
- An added chip stays in the bar while it has a value or while its selector is open. Once it leaves the bar, the focus goes to **Add filter**.
- **Add filter** is disabled when every filter is in the bar, and absent when every filter is displayed by default.
- **Clear all** shows when the consumer passes `onClearAll` and at least one filter has a value.

The selector holds form controls, such as an `Input`, a `DateTimeInput` or a `CheckboxGroup`. A selector that opens a dialog, such as a picker, takes the function form and calls `close` first.

## Keyboard

The bar is a toolbar: one Tab stop. The arrow keys, Home and End move between the chips, their clear buttons, **Add filter**, **Clear all** and the column button.

## Content

- Name a filter with one or two words, such as `Date` or `Path`.
- Give the value as the user reads it, such as `Since 2026-10-31`, and not as an identifier.
- Display two or three filters by default, and leave the others to **Add filter**.
- Translate the labels through `i18n`. A label that holds `{{name}}` gets the name of the filter there.
