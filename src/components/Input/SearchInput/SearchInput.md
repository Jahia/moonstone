## Example
```jsx
import {SearchInput} from '@jahia/moonstone';

<SearchInput aria-label="Search pages"/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange`. You own the state and `onChange(event)` gives you the
  new text through `event.target.value`.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.
- Use controlled when the query drives other UI, such as a filtered list. Use uncontrolled when
  you only read the query on a key press, such as Enter.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

## Do
- Use it for a dedicated search box, such as one that filters a list or a table.

## Don't
- Don't use it when the user also picks where to search. Use [SearchContextInput](?path=/docs/components-searchcontextinput--docs) instead.
- Don't use it for other free-form text. Use [Input](?path=/docs/components-input--docs) instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: does the Input size guidance apply to SearchInput? --> |
| `big` | _Pending design guidance_ <!-- designer: does the Input size guidance apply to SearchInput? --> |

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `outlined` | _Pending design guidance_ <!-- designer: default value. Confirm it is the standard look for a search box. --> |
| `ghost` | _Pending design guidance_ <!-- designer: where should a borderless SearchInput be used, such as a toolbar? --> |

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short. Say what the user searches, such
  as "Search pages".
- A placeholder is a hint, not a label. It disappears as soon as the user types.

## Accessibility
- Always provide a label. Pass an `aria-label`, or use [Field](?path=/docs/components-field--docs) when the search box sits in a form.
