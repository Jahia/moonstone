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
| `default` | _Pending design guidance_ <!-- designer: does Button's guidance for `default` (the main action of an area) apply to a ButtonGroup? --> |
| `outlined` | _Pending design guidance_ <!-- designer: does Button's guidance for `outlined` apply to a ButtonGroup? --> |
| `ghost` | _Pending design guidance_ <!-- designer: does Button's guidance for `ghost` apply to a ButtonGroup? --> |

### `color` for meaning

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: does Button's guidance for `color=default` apply to a ButtonGroup? --> |
| `accent` | _Pending design guidance_ <!-- designer: does Button's guidance for `accent` apply to a ButtonGroup? --> |
| `danger` | _Pending design guidance_ <!-- designer: does Button's guidance for `danger` apply to a ButtonGroup? --> |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: when should a ButtonGroup use the default size? --> |
| `small` | _Pending design guidance_ <!-- designer: should a ButtonGroup ever be small? --> |
| `big` | _Pending design guidance_ <!-- designer: does Button's guidance for `big` (header and modal-footer actions) apply to a ButtonGroup? --> The labels are shown in uppercase. |

## Accessibility
- When the purpose of the group is not clear from the surrounding context, add an `aria-label` or `aria-labelledby` on the ButtonGroup.
- Each icon-only [Button](?path=/docs/components-button--docs) in the group still needs its own `aria-label` that describes its action.
