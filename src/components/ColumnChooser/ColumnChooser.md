## Example
```jsx
import {ColumnChooser} from '@jahia/moonstone';

<ColumnChooser columns={[{key: 'date', label: 'Date'}, {key: 'user', label: 'User'}, {key: 'path', label: 'Path'}]}/>
```

## Do
- Use it to let the user show, hide, and order the columns of a table, such as a [DataTable](?path=/docs/components-datatable--docs).

## Don't
- Don't use it above a view that has no columns, such as thumbnails. It only shows, hides, and orders the columns of a table.

## Accessibility
- Escape closes the popup and gives the focus back to the button.
