## Example
```jsx
import {TimezoneSelector} from '@jahia/moonstone';

<TimezoneSelector defaultValue="Europe/Paris" referenceDate="2026-06-19"/>
```

## Controlled & uncontrolled
- Controlled: pass `value` and `onChange` (required). `onChange(event, value)` gives the selected
  IANA timezone identifier, such as `'Europe/Paris'`, or `null`.
- Uncontrolled: pass `defaultValue` (optional) and let the component manage its own state.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.
- The selector always has a value once a timezone is chosen and cannot be cleared.

## Do
- Use it to let the user pick an IANA timezone on its own, such as setting a user's or a site's
  default timezone.
- Pair it with **Field** when it needs a label, helper text, or an error message.

## Don't
- Don't use it to pick a timezone together with a date or a time. Use **DateTimeInput** with
  `type="zonedDateTime"` instead.

## Appearance

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `outlined` | _Pending design guidance_ <!-- designer: is `outlined` the default, general-purpose choice, as in other fields? --> |
| `ghost` | _Pending design guidance_ <!-- designer: when should a consumer reach for the borderless variant here? --> |

### `size` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: which contexts call for the small size? --> |
| `medium` | _Pending design guidance_ <!-- designer: is `medium` the default, general-purpose size? --> |

## Voice and tone
- Write `placeholder` and `searchEmptyText` in sentence case, kept short.

## Accessibility
- Pair it with **Field** for a visible label; the component renders none on its own.
