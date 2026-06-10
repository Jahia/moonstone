## Do
- Group 2–3 tightly related actions that share the same context — e.g. a primary label button next to an icon-only chevron for a dropdown trigger.
- Apply a uniform `variant`, `color`, and `size` to a set of Buttons without repeating those props on each individual Button.
- Props set on `ButtonGroup` (`variant`, `color`, `size`, `isReversed`) override the same props on individual child Buttons — set them once on the group, not on each Button.

## Don't
- A single standalone action → use **Button** directly.
- Unrelated actions that happen to be positioned near each other — keep them as individual **Button** elements with no wrapper.
- A binary on/off setting → use **Switch**; a button that holds an active/pressed state → use **ButtonToggle**.

## Example
```jsx
import {ButtonGroup, Button} from '@jahia/moonstone';
import {ChevronDown} from '@jahia/moonstone/icons';

// Primary action with a dropdown trigger
<ButtonGroup color="accent" size="big">
  <Button label="Publish" onClick={handlePublish}/>
  <Button icon={<ChevronDown/>} aria-label="More publish options" onClick={handleMore}/>
</ButtonGroup>

// Outlined secondary group
<ButtonGroup variant="outlined" color="accent" size="big">
  <Button label="Export" onClick={handleExport}/>
  <Button icon={<ChevronDown/>} aria-label="More export options" onClick={handleMore}/>
</ButtonGroup>
```

## Appearance

The same emphasis rules apply as for **Button** — one `default` + `accent` group per area. See [Button](../Button/Button.md) for the full design rationale behind `variant`, `color`, and `size`.

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `default` | The primary group — the main action of an area. |
| `outlined` | Secondary groups that perform a meaningful action but are not the primary call-to-action. |
| `ghost` | Lowest-emphasis groups: cancel / dismiss, and toolbar or icon-only actions. |

### `color` for meaning

| Value | Use it for |
|---|---|
| `default` | Neutral action groups. |
| `accent` | The main action group — pair with `variant="default"`. |
| `danger` | Destructive or irreversible action groups. |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Most contexts. |
| `small` | BreadcrumbItem only — don't use elsewhere for now. |
| `big` | Header and modal-footer groups, to raise visual emphasis. |

### `isReversed` for dark backgrounds

Set `isReversed` when the group appears on a dark or coloured background; it switches all child Buttons to their reversed-colour treatment.

## Accessibility
- The group wrapper renders `role="group"` automatically — do not add it manually.
- When the group's purpose is not clear from surrounding context, add an `aria-label` or `aria-labelledby` directly on `<ButtonGroup>`.
- Each icon-only Button inside the group still requires its own `aria-label` describing its specific action.
- `ButtonGroup` renders nothing when no children are provided — ensure at least one Button child is always passed.

## Related
- **Button** — the individual action element to place inside ButtonGroup.
- **ButtonToggle** — a button that holds a pressed/active state (toolbar toggles).
- **Switch** — a binary on/off setting.
