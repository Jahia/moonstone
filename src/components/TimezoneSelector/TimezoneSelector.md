## Example
```jsx
import {TimezoneSelector} from '@jahia/moonstone';

<TimezoneSelector aria-label="Timezone"/>
```

## Controlled
- Pass `value` and `onChange` (required). `onChange(event, value)` gives the selected IANA timezone identifier, such as `'Europe/Paris'`, or `null`.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.
- The selector always has a value once a timezone is chosen and cannot be cleared.

```jsx
<TimezoneSelector aria-label="Timezone" value={timezone} onChange={(e, next) => setTimezone(next)}/>
```

## Uncontrolled
- Pass `defaultValue` (optional) and let the component manage its own state.

```jsx
<TimezoneSelector aria-label="Timezone" defaultValue="Europe/Paris"/>
```

## Do
- Use it to let the user pick an IANA timezone on its own.
- Use it inside a [Field](?path=/docs/components-field--docs) when it needs a visible label, helper text, or an error message.

## Don't
- Don't use it to pick a timezone together with a date or a time. Use [DateTimeInput](?path=/docs/components-datetimeinput--docs) with
  `type="zonedDateTime"` instead.

## Appearance

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `ghost` | _Pending design guidance_ <!-- designer: default value. Where should a borderless Dropdown be used (toolbars, inline filters)? --> |
| `outlined` | _Pending design guidance_ <!-- designer: is outlined the form-field look, such as inside a Field? --> |

### `size` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: which contexts call for a small Dropdown? --> |
| `medium` | _Pending design guidance_ <!-- designer: default value. Confirm it is the standard size for forms. --> |

## Voice and tone
- Write `placeholder` and `searchEmptyText` in sentence case, kept short.

## Accessibility
- Put it in a [Field](?path=/docs/components-field--docs), which gives it its label.
- Enter opens the list and moves the focus to its search field. Space and the Down arrow key open
  it too (soon).
- The Up and Down arrow keys move the focus between options. From the search field, the Down
  arrow key moves it to the first option (soon).
- Enter selects the focused option and closes the list.
- Escape closes the list and returns the focus to the trigger (soon).
