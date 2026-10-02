## Example
```jsx
import {NumberInput} from '@jahia/moonstone';

// Characters that don't form a valid number are filtered out as the user types
<NumberInput value={quantity} min={1} max={10} onChange={event => setQuantity(event.target.value)}/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange`. You own the state and `onChange(event)` gives you the
  new text through `event.target.value`, already filtered to a valid number. The value is a
  string, so convert it before doing math.
- Known limitation: stepping with the arrow keys never calls `onChange`. In controlled mode, your
  state falls behind the displayed value until the user types again.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.
- Use controlled when the value drives other UI, such as a total or a validation message. Use
  uncontrolled for a simple field whose value you only need on submit.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

## Do
- Use it to capture a number typed by the user, such as a quantity, a limit, or a price.
- Use it when the user benefits from stepping the value up and down with the arrow keys.

## Don't
- Don't use it for free-form text, even when it holds digits, such as a phone number or a postal
  code. Use **Input** instead.
- Don't use it to choose from a fixed list of values. Use **Dropdown** instead.
- Don't use it for a date or a time. Use **DateTimeInput** or **TimeInput** instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: does the Input size guidance apply to NumberInput? --> |
| `big` | _Pending design guidance_ <!-- designer: does the Input size guidance apply to NumberInput? --> |

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `outlined` | _Pending design guidance_ <!-- designer: default value. Confirm it is the standard look for a form field. --> |
| `ghost` | _Pending design guidance_ <!-- designer: where should a borderless NumberInput be used? --> |

### `separator` for locale

| Value | Use it for |
|---|---|
| `.` | Locales that write decimals with a point, such as English. Applies only with `allowDecimal`. |
| `,` | Locales that write decimals with a comma, such as French. Applies only with `allowDecimal`. |

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short.
- A placeholder is a hint, not a label. Don't use it as a replacement for the **Field** label.

## Accessibility
- Always provide a label. Use **Field**, or pass an `aria-label` when the input is standalone.
- The Up and Down arrow keys step the value by `step`, within `min` and `max`. This does not
  call `onChange` (see *Controlled & uncontrolled*). The numeric keyboard opens on touch devices.
- The clear button (shown when `onClear` is passed and the field is filled) has a fixed
  `aria-label="Reset"`.
