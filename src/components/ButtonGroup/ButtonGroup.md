## Example
```jsx
import {Button, ButtonGroup} from '@jahia/moonstone';
import {ChevronDown} from '@jahia/moonstone/icons';

<ButtonGroup>
    <Button label="Publish"/>
    <Button icon={<ChevronDown/>} aria-label="Show more options"/>
</ButtonGroup>
```

## Do
- Use it to join 2 to 3 tightly related actions that share the same context, such as a main action next to an icon-only button that opens more options.

## Don't
- Don't use a ButtonGroup for a single action. Use a [Button](?path=/docs/components-button--docs) instead.
- Don't use a ButtonGroup to wrap unrelated actions that happen to sit side by side. Use separate [Button](?path=/docs/components-button--docs) components instead.
- Don't use a ButtonGroup for buttons that hold a pressed or active state. Use a [ButtonToggle](?path=/docs/components-buttontoggle--docs) instead.

## Appearance

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `default` | The main action of an area. Use it once per area. |
| `outlined` | Secondary actions that perform something, such as Save, Copy, or Export. |
| `ghost` | The lowest-emphasis actions, such as Cancel, Close, toolbar buttons, and icon-only buttons. |

### `color` for meaning

| Value | Use it for |
|---|---|
| `default` | Neutral actions. |
| `accent` | The main action. Pair it with `variant="default"`. |
| `danger` | Destructive or irreversible actions, such as Delete. When two destructive actions sit side by side, make the lesser one `outlined`. |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Most contexts. |
| `small` | [BreadcrumbItem](?path=/docs/components-breadcrumbitem--docs) only. Don't use it elsewhere for now. |
| `big` | Header and modal-footer buttons, where you want to raise emphasis. The label is shown in uppercase. |

## Accessibility
- When the purpose of the group is not clear from the surrounding context, add an `aria-label` or `aria-labelledby` on the ButtonGroup.
- Each icon-only [Button](?path=/docs/components-button--docs) in the group still needs its own `aria-label` that describes its action.
