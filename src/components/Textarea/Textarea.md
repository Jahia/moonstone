## Example
```jsx
import {Textarea} from '@jahia/moonstone';

<Textarea
    id="page-description"
    aria-label="Description"
    placeholder="Describe the page"
    value={description}
    onChange={event => setDescription(event.target.value)}
/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange`. You own the state, and `onChange(event)` gives you the new text through `event.target.value`.

  ```jsx
  <Textarea aria-label="Description" value={description} onChange={event => setDescription(event.target.value)}/>
  ```

- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.

  ```jsx
  <Textarea aria-label="Description" defaultValue="Draft description"/>
  ```

- Use controlled when the value drives other UI, such as validation or a character count. Use uncontrolled for a simple field whose value you only need on submit.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

## Do
- Use it to capture multi-line free-form text, such as a description or a comment.
- Use it inside a **Field** when it needs a label, helper text, or an error message.

## Don't
- Don't use a Textarea for a single line of text, such as a name or a title. Use an **Input** instead.
- Don't use a Textarea to choose from a fixed list of options. Use a **Dropdown** instead.

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short.
- A placeholder is a hint, not a label. Don't use it as a replacement for the **Field** label.

## Accessibility
- Always give it an accessible name with an `aria-label`.
