## Example
```jsx
import {DateTimeInput} from '@jahia/moonstone';

<DateTimeInput type="date" aria-label="Publication date"/>
```

## Controlled
- Pass `value` and `onChange` (required). `onChange(event, value)` always gives the mode's `Temporal` instance, or `null` when the field is cleared, even though `value` itself also accepts an ISO string.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.

```jsx
<DateTimeInput type="date" aria-label="Publication date" value={date} onChange={(e, next) => setDate(next)}/>
```

## Uncontrolled
- Pass `defaultValue` (optional) and let the component manage its own state. With no `defaultValue`, the field starts at the current date/time; pass `defaultValue={null}` to start empty.

```jsx
<DateTimeInput type="date" aria-label="Publication date" defaultValue="2026-06-19"/>
```

## Do
- Use it to capture a calendar date, optionally with a time and a timezone.
- Use it inside a [Field](?path=/docs/components-field--docs) when it needs a visible label, helper text, or an error message.

## Don't
- Don't use it to capture a time with no date. Use [TimeInput](?path=/docs/components-timeinput--docs) instead.
- Don't use it to pick a timezone on its own, with no date value. Use [TimezoneSelector](?path=/docs/components-timezoneselector--docs) instead.

## Appearance

`type` determines which fields render and which value is emitted.

### `type` for scope

| Value | Use it for |
|---|---|
| `date` | A date only, with no time. |
| `dateTime` | A date and a time. |
| `zonedDateTime` | A date, a time, and a timezone together. The timezone picker only changes how the value is displayed, never the value itself. |

## Voice and tone
- Write `i18n.todayButton` as a short, verb-first action label in sentence case, such as "Today".
- Write `i18n.nextMonth` and `i18n.previousMonth` as accessible labels describing the action, in
  sentence case, such as "Go to the next month".
- Write `i18n.timezone` as a short label in sentence case, such as "Timezone".
- Write `i18n.clearButton` as a short, verb-first accessible label in sentence case, such as "Reset".

## Accessibility
- Add an `aria-label` when it is not in a [Field](?path=/docs/components-field--docs).
- Enter or Space on the date field opens the calendar. Escape closes it.
- Opening the calendar moves the focus to the selected day (soon).
- In the calendar, the Left and Right arrow keys move between days, and the Up and Down arrow
  keys between weeks. Enter selects the focused day and closes the calendar.
- Selecting a day with Enter returns the focus to the date field (soon).
- Escape on a day closes the calendar and returns the focus to the date field (soon).
- Override `i18n`'s calendar, timezone, and clear button labels when translating.
