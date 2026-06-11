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

## Do
- Use it to group 2 to 3 tightly related actions that share the same context, such as a primary label button next to an icon-only chevron for a dropdown trigger.
- Use it to apply a uniform `variant`, `color`, and `size` to a set of Buttons without repeating those props on each one.
- Use it to set `variant`, `color`, `size`, and `isReversed` on the group once. Props set on the group override the same props on the individual child Buttons.

## Don't
- Don't use ButtonGroup for a single standalone action. Use **Button** directly.
- Don't wrap unrelated actions that happen to be positioned near each other. Keep them as individual **Button** elements with no wrapper.
- Don't use ButtonGroup for a binary on/off setting. Use **Switch** instead. For a button that holds an active/pressed state, use **ButtonToggle**.

## Appearance

The same emphasis rules apply as for **Button**: one `default` + `accent` group per area.

### `variant` for emphasis

| Value | Use it for |
|---|---|
| `default` | The primary group, as the main action of an area. |
| `outlined` | Secondary groups that perform a meaningful action but are not the primary call-to-action. |
| `ghost` | Lowest-emphasis groups: cancel / dismiss, and toolbar or icon-only actions. |

### `color` for meaning

| Value | Use it for |
|---|---|
| `default` | Neutral action groups. |
| `accent` | The main action group; pair with `variant="default"`. |
| `danger` | Destructive or irreversible action groups. |

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | Most contexts. |
| `small` | BreadcrumbItem only; don't use elsewhere for now. |
| `big` | Header and modal-footer groups, to raise visual emphasis. |

## Accessibility
- The group wrapper renders `role="group"` automatically. Do not add it manually.
- When the group's purpose is not clear from surrounding context, add an `aria-label` or `aria-labelledby` directly on `<ButtonGroup>`.
- Each icon-only Button inside the group still requires its own `aria-label` describing its specific action.
- `ButtonGroup` renders nothing when no children are provided. Ensure at least one Button child is always passed.
