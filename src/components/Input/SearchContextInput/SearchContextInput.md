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

## Controlled
- Pass `value` and `onChange`. You own the state and `onChange(event)` gives you the new text through `event.target.value`.
- Use it when the query drives other UI.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.
- The [Dropdown](?path=/docs/components-dropdown--docs) in `searchContext` stays controlled by you, through its own `value` and `onChange`.

```jsx
<SearchContextInput aria-label="Search" searchContext={scopeDropdown} value={query} onChange={e => setQuery(e.target.value)}/>
```

## Uncontrolled
- Pass `defaultValue` (optional) and let the component manage its own state.
- Use it when you only read the query on a key press, such as Enter.

```jsx
<SearchContextInput aria-label="Search" searchContext={scopeDropdown} defaultValue="home"/>
```

## Do
- Use it for a search box where the user also picks where to search.

## Don't
- Don't use it when there is only one place to search. Use [SearchInput](?path=/docs/components-searchinput--docs) instead.
- Don't use it for other free-form text. Use [Input](?path=/docs/components-input--docs) instead.

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short.
- Write the scope labels of the [Dropdown](?path=/docs/components-dropdown--docs) in sentence case, using a few words that name where
  the search runs, such as "Media" or "Global users".

## Accessibility
- Always provide a label. Pass an `aria-label` for the text field. The [Dropdown](?path=/docs/components-dropdown--docs) takes its
  accessible name from the selected scope.
