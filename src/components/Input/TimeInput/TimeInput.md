## Example
```jsx
import {TimeInput} from '@jahia/moonstone';

<TimeInput aria-label="Start time"/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange` (required). `onChange(event, value)` only fires when an
  entry commits (on blur once typing completes a valid time, or via the AM/PM dropdown in
  `timeFormat="12h"`), never on every keystroke; it gives a `Temporal.PlainTime`, or `null` when
  the field is cleared.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

## Do
- Use it to capture a time of day, such as an opening hour or a reminder time.
- Pair it with [Field](?path=/docs/components-field--docs) when it needs a label, helper text, or an error message.

## Don't
- Don't use it to capture a date, or a date and a time together. Use [DateTimeInput](?path=/docs/components-datetimeinput--docs) instead.

## Appearance

### `timeFormat` for format

| Value | Use it for |
|---|---|
| `24h` | The default. Most contexts, especially schedules, logs, and 24-hour operations. |
| `12h` | Audiences or locales that expect AM/PM. Adds an AM/PM dropdown next to the field. |

## Voice and tone
- Write `placeholder` text in sentence case, and keep it short. The default, `hh:mm`, already
  shows the expected format.

## Accessibility
- Always give it a label. Use a [Field](?path=/docs/components-field--docs), or pass an `aria-label` when it stands alone.
- The Up and Down arrow keys step the hour or minute segment under the caret. The Left and Right
  arrow keys move between the two segments.
