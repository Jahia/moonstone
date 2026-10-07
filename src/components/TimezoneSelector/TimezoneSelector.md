## Example
```jsx
import {TimezoneSelector} from '@jahia/moonstone';

<TimezoneSelector aria-label="Timezone"/>
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
- Always give it a label. Use a **Field**, or pass an `aria-label` when it stands alone.
- Enter opens the list and moves the focus to its search field. Space and the Down arrow key open
  it too (soon).
- The Up and Down arrow keys move the focus between options. From the search field, the Down
  arrow key moves it to the first option (soon).
- Enter selects the focused option and closes the list.
- Escape closes the list and returns the focus to the trigger (soon).
