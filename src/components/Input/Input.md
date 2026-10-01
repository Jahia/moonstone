## Example
```jsx
import {Input} from '@jahia/moonstone';
import {Love} from '@jahia/moonstone/icons';

<Input placeholder="Favorite" icon={<Love/>}/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange`. You own the state and `onChange(event)` gives you the
  new text through `event.target.value`.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.
- Use controlled when the value drives other UI, such as validation or a live preview. Use
  uncontrolled for a simple field whose value you only need on submit.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

## Do
- Use it to capture a short piece of free-form text, such as a name, a title, or a search term.
- Pair it with **Field** when it needs a label, helper text, or an error message.

## Don't
- Don't use it for multi-line text. Use **Textarea** instead.
- Don't use it for numbers that need stepping or numeric validation. Use **NumberInput** instead.
- Don't use it for a dedicated search box. Use **SearchInput** instead. The `search` value of
  `variant` is deprecated and now renders **SearchInput** with a console warning.
- Don't use it to choose from a fixed list of options. Use **Dropdown** instead.
- Don't pass `onKeyPress`. It is deprecated. Use `onKeyUp` instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Small contexts, such as **SecondaryNav** or **Menu**. |
| `big` | The main area of the product, such as a form or a table. |

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short.
- A placeholder is a hint, not a label. Don't use it as a replacement for the **Field** label.
- Everything else rendered through Input is free-form text typed by the user, so the component
  itself carries no further copy rules.

## Accessibility
- Always provide a label. Use **Field**, or pass an `aria-label` when the input is standalone.
- The clear button (shown when `onClear` is passed and the field is filled) has a fixed
  `aria-label="Reset"`.
- Passing `role="search"` sets the underlying input's role to `searchbox` for assistive
  technology.
