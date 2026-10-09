## Example
```jsx
import {Tag} from '~/components';

<Tag label="Draft" value="draft" onClick={(event, value) => removeFilter(value)}/>
```

## Do
- Use it to build the multiple-selection trigger of [Dropdown](?path=/docs/components-dropdown--docs): one Tag per selected value, which the user removes from the trigger.

## Don't
- Don't use Tag in application code. Use a [Dropdown](?path=/docs/components-dropdown--docs) in multiple selection instead.

## Appearance

### `size` for prominence
[Dropdown](?path=/docs/components-dropdown--docs) passes its own `size` to every Tag.

| Value | Use it for |
|---|---|
| `medium` | The trigger of a `medium` Dropdown. The default. |
| `small` | The trigger of a `small` Dropdown. |

## Accessibility
- Delete or Backspace removes the focused Tag (soon).
