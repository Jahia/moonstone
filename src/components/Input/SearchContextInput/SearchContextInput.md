## Example
```jsx
import {Dropdown, SearchContextInput} from '@jahia/moonstone';

<SearchContextInput
    aria-label="Search"
    searchContext={(
        <Dropdown data={searchScopes} value={scope} placeholder="Select a scope"/>
    )}
/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange`. You own the state and `onChange(event)` gives you the
  new text through `event.target.value`.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.
- Use controlled when the query drives other UI, such as a list of results. Use uncontrolled
  when you only read the query on a key press, such as Enter.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.
- The **Dropdown** in `searchContext` stays controlled by you, through its own `value` and
  `onChange`.

## Do
- Use it for a search box where the user also picks where to search, such as in pages, media, or
  users.

## Don't
- Don't use it when there is only one place to search. Use **SearchInput** instead.
- Don't use it for other free-form text. Use **Input** instead.

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short.
- Write the scope labels of the **Dropdown** in sentence case, using a few words that name where
  the search runs, such as "Media" or "Global users".

## Accessibility
- Always provide a label. Pass an `aria-label` for the text field. The **Dropdown** takes its
  accessible name from the selected scope.
