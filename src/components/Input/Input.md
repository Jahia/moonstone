## Example
```jsx
import {Input} from '@jahia/moonstone';

<Input aria-label="Page title"/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange`. You own the state, and `onChange(event)` gives you the new text through `event.target.value`.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.
- Use controlled when the value drives other UI, such as validation or a live preview. Use uncontrolled for a simple field whose value you only need on submit.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

```jsx
// Controlled
<Input aria-label="Page title" value={title} onChange={e => setTitle(e.target.value)}/>

// Uncontrolled
<Input aria-label="Page title" defaultValue="Home"/>
```

## Do
- Use it to capture a short piece of free-form text on a single line, such as a name, a title, or a URL.
- Use it inside a **Field** when it needs a visible label, helper text, or an error message.

## Don't
- Don't use an Input for multi-line text. Use a **Textarea** instead.
- Don't use an Input for numbers that need stepping or numeric validation. Use a **NumberInput** instead.
- Don't use an Input for a search box. Use a **SearchInput** instead.
- Don't use an Input for a date or a time. Use a **DateTimeInput** or a **TimeInput** instead.
- Don't use an Input to choose from a fixed list of options. Use a **Dropdown** instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Small contexts, such as **SecondaryNav** or **Menu**. |
| `big` | The main area of the product, such as a form or a table. |

## Voice and tone
- Write the placeholder in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Use the placeholder as a hint about the expected text, such as "Enter a title". Never use it to replace the label.

## Accessibility
- Always give the Input a label. Use a **Field**, or pass an `aria-label` when the Input stands alone.
- Don't rely on the placeholder as the label. It disappears as soon as the user types.
