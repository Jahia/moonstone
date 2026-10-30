## Example
```jsx
import {SearchInput} from '@jahia/moonstone';

<SearchInput aria-label="Search content"/>
```

## Controlled
- Pass `value` and `onChange`. You own the state and `onChange(event)` gives you the new text through `event.target.value`.
- Use it when the query drives other UI, such as a filtered list.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

```jsx
<SearchInput aria-label="Search content" value={query} onChange={e => setQuery(e.target.value)}/>
```

## Uncontrolled
- Pass `defaultValue` (optional) and let the component manage its own state.
- Use it when you only read the query on a key press, such as Enter.

```jsx
<SearchInput aria-label="Search content" defaultValue="home"/>
```

## Do
- Use it for a dedicated search box, such as one that filters a list or a table.

## Don't
- Don't use it when the user also picks where to search. Use [SearchContextInput](?path=/docs/components-searchcontextinput--docs) instead.
- Don't use it for other free-form text. Use [Input](?path=/docs/components-input--docs) instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Small contexts, such as [SecondaryNav](?path=/docs/components-secondarynav--docs) or [Menu](?path=/docs/components-menu--docs). |
| `big` | The main area of the product, such as a form or a table. |

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short. Say what the user searches, such
  as "Search content".
- A placeholder is a hint, not a label. It disappears as soon as the user types.

## Accessibility
- Add an `aria-label` when it is not in a [Field](?path=/docs/components-field--docs).
- Clearing the search box with the clear button returns the focus to the search box.
