## Example
```jsx
import {Button, Tooltip} from '@jahia/moonstone';
import {Home} from '@jahia/moonstone/icons';

<Tooltip label="Home">
    <Button icon={<Home/>} aria-label="Home"/>
</Tooltip>
```

## Do
- Use it to label an icon-only control where no visible text is present.
- Use it for short, supplementary hints that add context without cluttering the layout.
- Use it when a compact or collapsed control, such as a nav item, has a truncated label and the full text helps the user.

## Don't
- Don't use Tooltip for information the user must read to complete a task. Put it directly in the UI, such as helper text in a [Field](?path=/docs/components-field--docs).
- Don't use Tooltip for a list of actions. Use a [Menu](?path=/docs/components-menu--docs) instead.
- Don't use Tooltip for persistent status or system alerts. Use a [Banner](?path=/docs/components-banner--docs) instead.
- Don't use Tooltip to wrap a non-interactive element. The anchor must be focusable so keyboard users can access the tooltip.

## Accessibility
- An icon-only anchor, such as a [Button](?path=/docs/components-button--docs) with only an `icon`, must still carry an `aria-label` that names the action. The tooltip is supplementary and is not a substitute for an accessible name.
- Never put essential information only in the tooltip. Screen readers may not announce it in every context.
- Escape hides the tooltip. The anchor keeps the focus.
