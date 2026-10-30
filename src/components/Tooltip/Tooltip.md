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
- Use it to show the full text of a truncated label, such as in a collapsed nav item or a list row.

## Don't
- Don't use Tooltip for information the user must read to complete a task. Put it directly in the UI.
- Don't use Tooltip for a list of actions. Use a [Menu](?path=/docs/components-menu--docs) instead.
- Don't use Tooltip for persistent status or system alerts. Use a [Banner](?path=/docs/components-banner--docs) instead.

## Voice and tone
- Write the `label` in sentence case.
- On an icon-only control, start the `label` with the verb that names the action, as its `aria-label` does, such as "Add to favorites".
- For a hint that adds context, write a short sentence.

## Accessibility
- An icon-only anchor, such as a [Button](?path=/docs/components-button--docs) with only an `icon`, must still carry an `aria-label` that names the action. The tooltip is supplementary and is not a substitute for an accessible name.
- Never put essential information only in the tooltip. Screen readers may not announce it in every context.
- Escape hides the tooltip. The anchor keeps the focus.
