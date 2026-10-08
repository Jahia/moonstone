## Example
```jsx
import {NumberInput} from '@jahia/moonstone';

<NumberInput aria-label="Quantity"/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange`. You own the state and `onChange(event)` gives you the
  new text through `event.target.value`, already filtered to a valid number. The value is a
  string, so convert it before doing math.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.
- Use controlled when the value drives other UI, such as a total or a validation message. Use
  uncontrolled for a simple field whose value you only need on submit.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

## Do
- Use it to capture a number typed by the user, such as a quantity, a limit, or a price.
- Use it when the user benefits from stepping the value up and down with the arrow keys.

## Don't
- Don't use it for free-form text, even when it holds digits, such as a phone number or a postal
  code. Use [Input](?path=/docs/components-input--docs) instead.
- Don't use it to choose from a fixed list of values. Use [Dropdown](?path=/docs/components-dropdown--docs) instead.
- Don't use it for a date or a time. Use [DateTimeInput](?path=/docs/components-datetimeinput--docs) or [TimeInput](?path=/docs/components-timeinput--docs) instead.

## Appearance

### `separator` for locale

| Value | Use it for |
|---|---|
| `.` | Locales that write decimals with a point, such as English. Applies only with `allowDecimal`. |
| `,` | Locales that write decimals with a comma, such as French. Applies only with `allowDecimal`. |

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short.
- A placeholder is a hint, not a label. Don't use it as a replacement for the [Field](?path=/docs/components-field--docs) label.

## Accessibility
- Always provide a label. Use [Field](?path=/docs/components-field--docs), or pass an `aria-label` when the input is standalone.
- The Up and Down arrow keys step the value by `step`, within `min` and `max`.
- Home and End jump to `min` and `max`, when they are set (soon).
