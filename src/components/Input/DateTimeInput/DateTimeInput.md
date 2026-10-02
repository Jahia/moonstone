## Example
```jsx
import {DateTimeInput} from '@jahia/moonstone';

<DateTimeInput type="date" defaultValue="2026-06-19"/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange` (required). `onChange(event, value)` always gives the
  mode's `Temporal` instance, or `null` when the field is cleared, even though `value` itself also
  accepts an ISO string.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state. With no
  `defaultValue`, the field starts at the current date/time; pass `defaultValue={null}` to start empty.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

## Do
- Use it to capture a calendar date, optionally with a time and a timezone, such as a publish
  date, a deadline, or a scheduled event.
- Pair it with **Field** when it needs a label, helper text, or an error message.

## Don't
- Don't use it to capture a time with no date. Use **TimeInput** instead.
- Don't use it to pick a timezone on its own, with no date value. Use **TimezoneSelector** instead.

## Appearance

`type` determines which fields render and which value is emitted; `variant` and `size` only
affect the field's own styling.

### `type` for scope

| Value | Use it for |
|---|---|
| `date` | A date only, with no time, such as a deadline, a due date, or a birthday. |
| `dateTime` | A date and a time, such as scheduling within a single timezone. |
| `zonedDateTime` | A date, a time, and a timezone together, such as scheduling across timezones. The timezone picker only changes how the value is displayed, never the value itself. |

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `ghost` | A borderless field, such as one embedded in a toolbar or a compact filter bar. |
| `outlined` | A field with a visible border, the typical choice inside a form or a **Field**. |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Small contexts, such as **SecondaryNav** or **Menu**. |
| `big` | The main area of the product, such as a form or a table. |

## Voice and tone
- Write `i18n.todayButton` as a short, verb-first action label in sentence case, such as "Today".
- Write `i18n.nextMonth` and `i18n.previousMonth` as accessible labels describing the action, in
  sentence case, such as "Go to the next month".
- Write `i18n.timezone` as a short label in sentence case, such as "Timezone".

## Accessibility
- Pair it with **Field** for a visible label; the field renders none on its own.
- `Escape` closes the open calendar and `Enter` opens it or commits a typed date.
- Override `i18n`'s calendar and timezone labels when translating; left unset, they default to
  English.
