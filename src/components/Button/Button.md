## Example
```jsx
import {Button} from '@jahia/moonstone';
import {Love} from '@jahia/moonstone/icons';

<Button label="Save" color="accent" onClick={handleSave}/>

// Destructive action
<Button label="Delete" variant="outlined" color="danger" onClick={handleDelete}/>

// Icon-only button. See Accessibility for the required aria-label.
<Button icon={<Love/>} aria-label="Add to favorites" onClick={handleFav}/>
```

## Do
- Use it to submit a form or confirm a choice.
- Use it to trigger an action, such as opening a modal, running a command, or toggling a setting.
- Use it for a compact, icon-only utility action, such as a table-row action or a 3-dots "more" menu. Omit the `label`, pass an `icon`, and add an `aria-label`.

## Don't
- Don't use a Button to navigate to another page or URL. Use a link or navigation component instead.
- Don't use separate Buttons for a group of related actions. Wrap them in a **ButtonGroup**.
- Don't use a Button for a binary on/off setting. Use a **Switch** instead.
- Don't use a Button for a control that holds a pressed or active state. Use a **ButtonToggle** instead.

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
| `small` | BreadcrumbItem only. Don't use it elsewhere for now. |
| `big` | Header and modal-footer buttons, where you want to raise emphasis. The label is shown in uppercase. |

## Voice and tone

- Write labels in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Start with a verb that names the action, such as "Save", "Publish", or "Copy".
- Add a noun only when the same verb applies to different objects, such as "Edit image" and "Edit content".
- Be specific and name the real outcome. Write "Delete", never "OK", especially for destructive actions.

## Accessibility
- An icon-only Button (one with no `label`) must have an `aria-label` that describes the action.
- A disabled or loading Button is non-interactive and cannot be activated with the keyboard.
- The focus ring appears automatically on keyboard focus. Don't remove it.
