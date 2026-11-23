## Example
```jsx
import {Textarea} from '@jahia/moonstone';

<Textarea aria-label="Description"/>
```

## Controlled
- Pass `value` and `onChange`. You own the state, and `onChange(event)` gives you the new text through `event.target.value`.
- Use it when the value drives other UI.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

```jsx
<Textarea aria-label="Description" value={description} onChange={event => setDescription(event.target.value)}/>
```

## Uncontrolled
- Pass `defaultValue` (optional) and let the component manage its own state.
- Use it for a simple field whose value you only need on submit.

```jsx
<Textarea aria-label="Description" defaultValue="description"/>
```

## Do
- Use it to capture multi-line free-form text.
- Use it inside a [Field](?path=/docs/components-field--docs) when it needs a visible label, helper text, or an error message.

## Don't
- Don't use a Textarea for a single line of text. Use an [Input](?path=/docs/components-input--docs) instead.
- Don't use a Textarea to choose from a fixed list of options. Use a [Dropdown](?path=/docs/components-dropdown--docs) instead.

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short.
- A placeholder is a hint, not a label. Don't use it as a replacement for the [Field](?path=/docs/components-field--docs) label.

## Accessibility
- Always give it an accessible name with an `aria-label`.
