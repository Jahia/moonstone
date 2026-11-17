## Example

```jsx
import {ButtonToggle} from '@jahia/moonstone';

<ButtonToggle label="Toggle side panel"/>
```

## Controlled
- Pass `isPressed` and `onChange`. You own the state, and `onChange(event, isPressed)` gives you the new pressed state as its second argument.
- Use it when the pressed state is read or driven elsewhere.
- Don't mix the two modes. Passing both `isPressed` and `defaultPressed` is not supported.

```jsx
<ButtonToggle label="Toggle side panel" isPressed={isPanelShown} onChange={(event, isPressed) => setIsPanelShown(isPressed)}/>
```

## Uncontrolled
- Pass `defaultPressed` (optional) and let the component manage its own state.
- Use it when nothing else needs it.

```jsx
<ButtonToggle label="Toggle side panel" defaultPressed/>
```

## Do
- Use it in a toolbar for a mode or a panel that stays on until the user toggles it off, such as showing a side panel.
- Use it when the pressed/active state must persist until the user explicitly toggles it off.

## Don't
- Don't use a ButtonToggle for a setting that applies immediately, without a save step. Use a [Switch](?path=/docs/components-switch--docs) instead.
- Don't use ButtonToggle for a one-shot action that triggers something without holding state. Use [Button](?path=/docs/components-button--docs) instead.
- Don't use ButtonToggle for a group of related action buttons where none hold state. Use [ButtonGroup](?path=/docs/components-buttongroup--docs) instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Most toolbar and panel contexts. |
| `big` | Header or prominent toolbar positions where larger touch targets are needed. |

## Voice and tone

- **Sentence case; a few words (3 max), never a sentence.**
- **Label the action, not the state.** The label doesn't change when the button is pressed.

## Accessibility
- An **icon-only** ButtonToggle (no `label`) **must** have an `aria-label` that names the action.
