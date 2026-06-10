## Do
- Submitting a form or confirming a choice.
- Triggering an action (open a modal, run a command, toggle something).
- A compact, **icon-only** utility action — e.g. a table-row action or a 3-dots "more" menu (omit `label`, pass `icon`, and add an `aria-label`).

## Don't
- Navigating to another page or URL → use a link / navigation component, not a Button.
- A group of related actions → wrap Buttons in **ButtonGroup**.
- A binary on/off setting → use **Switch**.
- A toolbar button with a pressed/active state → use **ButtonToggle**.

## Example
```jsx
import {Button} from '@jahia/moonstone';
import {Love} from '@jahia/moonstone/icons';

<Button label="Save" color="accent" onClick={handleSave}/>

// Destructive action
<Button label="Delete" variant="outlined" color="danger" onClick={handleDelete}/>

// Icon-only (requires aria-label — see Accessibility)
<Button icon={<Love/>} aria-label="Add to favorites" onClick={handleFav}/>
```

## Appearance

One main action per *area* (page, modal, panel); lower the emphasis as an action's importance drops.

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `default` | The main action of an area (use once per area). |
| `outlined` | Secondary actions that perform something — Save, Copy, Export. |
| `ghost` | Lowest emphasis: Cancel / Close, and toolbar or icon-only actions. |

### `color` for meaning

| Value | Use it for |
|---|---|
| `default` | Neutral actions. |
| `accent` | The main action — pair with `variant="default"`. |
| `danger` | Destructive or irreversible actions (Delete). For two destructive actions side by side, make the lesser one `outlined`. |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Most contexts. |
| `small` | BreadcrumbItem only — don't use elsewhere for now. |
| `big` | Header and modal-footer buttons, to raise emphasis (label shown uppercase). |

### `isReversed` for dark backgrounds

Set `isReversed` when the button appears on a dark or coloured background; it switches to the reversed-colour treatment.

## Voice and tone

- **Sentence case; a few words (3 max), never a sentence.**
- **Use a verb.** Label the button with the action verb: "Save", "Publish", "Copy".
- **Add a noun only to disambiguate** — when the same verb applies to different objects:
  "Edit image" vs "Edit content".
- **Be specific — never "OK".** Name the real outcome ("Delete"), especially for
  destructive actions.

## Accessibility
- An **icon-only** Button (no `label`) **must** have an `aria-label` describing the action.
- A disabled or loading Button is non-interactive and not focusable for activation.
- Focus shows the standard focus ring automatically — do not remove it.

## Related
- **ButtonGroup** — group related buttons together.
- **ButtonToggle** — a button that holds a pressed/active state (toolbar toggles).
- **Switch** — an immediate on/off setting.
- **Loader** — shown inside the button when `isLoading`.
