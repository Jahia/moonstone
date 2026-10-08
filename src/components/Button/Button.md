## Example
```jsx
import {Button} from '@jahia/moonstone';

<Button label="Save"/>
```

## Do
- Use it to submit a form or confirm a choice.
- Use it to trigger an action, such as opening a modal, running a command, or refreshing data.
- Use it for a compact, icon-only utility action, such as a table-row action or a 3-dots "more" menu.

## Don't
- Don't use a Button to navigate to another page or URL. Use a native link instead, or a navigation component such as a [Breadcrumb](?path=/docs/components-breadcrumb--docs) or a [Tab](?path=/docs/components-tab--docs).
- Don't use separate Buttons for a group of related actions. Wrap them in a [ButtonGroup](?path=/docs/components-buttongroup--docs).
- Don't use a Button for a binary on/off setting. Use a [Switch](?path=/docs/components-switch--docs) instead.
- Don't use a Button for a control that holds a pressed or active state. Use a [ButtonToggle](?path=/docs/components-buttontoggle--docs) instead.

## Appearance

Each area, such as a page, a modal, or a panel, should have one main action. Lower the emphasis as an action becomes less important.

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

## Voice and tone

- Write labels in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Start with a verb that names the action, such as "Save", "Publish", or "Copy".
- Add a noun only when the same verb applies to different objects, such as "Edit image" and "Edit content".
- Be specific and name the real outcome. Write "Delete", never "OK", especially for destructive actions.

## Accessibility
- An icon-only Button (one with no `label`) must have an `aria-label` that describes the action.
