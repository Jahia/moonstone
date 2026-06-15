## Example
```jsx
import {Tooltip, Button} from '@jahia/moonstone';
import {Home, Setting} from '@jahia/moonstone/icons';

// Icon-only button: the tooltip provides a visible label on hover and keyboard focus.
<Tooltip label="Home">
    <Button icon={<Home/>} variant="outlined" aria-label="Home"/>
</Tooltip>

// Button with a visible label: the tooltip adds supplementary detail.
<Tooltip label="Opens global settings for this workspace">
    <Button icon={<Setting/>} label="Settings" variant="outlined"/>
</Tooltip>
```

## Do
- Use it to label an icon-only control where no visible text is present.
- Use it for short, supplementary hints that add context without cluttering the layout.
- Use it when a compact or collapsed control, such as a nav item, has a truncated label and the full text helps the user.

## Don't
- Don't use Tooltip for information the user must read to complete a task. Put it directly in the UI, such as helper text in a **Field**.
- Don't use Tooltip for a list of actions. Use a **Menu** instead.
- Don't use Tooltip for persistent status or system alerts. Use a **Banner** instead.
- Don't use Tooltip to wrap a non-interactive element. The anchor must be focusable so keyboard users can access the tooltip.

## Accessibility
- An icon-only anchor, such as a **Button** with only an `icon`, must still carry an `aria-label` that names the action. The tooltip is supplementary and is not a substitute for an accessible name.
- The component automatically adds `aria-describedby` to the anchor. Do not set it manually.
- Tooltips appear on both hover and keyboard focus. Do not remove the focus ring from the anchor.
- Never put essential information only in the tooltip. Screen readers may not announce it in every context.

## Related
- **Field** helper text (for essential guidance), **Banner**, **Menu**.
