## Do
- Surface a contextual status message (neutral, info, warning, or danger) within a page or panel.
- Display persistent in-page feedback that stays visible until the user acts — e.g. unsaved changes, a failed background process, a feature notice.
- Pair the message body with an action by placing a **Button** inside `children` to let users retry, dismiss, or navigate.

## Don't
- Inline validation errors for a single form field → use **Field** (its `error` and `hint` props handle that).
- Interrupting the user to require an explicit response before continuing → use **Modal**.
- Standalone headings or body text with no status meaning → use **Typography** directly.

## Example

```jsx
import {Banner, Button} from '@jahia/moonstone';
import {Warning} from '@jahia/moonstone/icons';

// Neutral (default variant)
<Banner title="Workspace note">
  This setting applies to all content in the workspace.
</Banner>

// Info
<Banner title="New bulk-edit mode" variant="info">
  Select multiple items to edit them at once. <Button label="Learn more" variant="ghost"/>
</Banner>

// Warning
<Banner title="Unsaved changes" variant="warning">
  Your changes will be lost if you navigate away.
</Banner>

// Danger with a custom icon
<Banner title="Connection failed" variant="danger" iconStart={<Warning/>}>
  Could not reach the server. Check your network and try again.
</Banner>
```

## Appearance

Each `variant` automatically provides a matching default icon; supply `iconStart` only when you need to override it.

### `variant` for meaning

| Value | Use it for |
|---|---|
| `neutral` | General notes and contextual help with no urgency. <!-- designer: confirm intended use --> |
| `info` | Informational messages about a feature, update, or non-critical condition. <!-- designer: confirm intended use --> |
| `warning` | Conditions that may lead to data loss or unexpected behavior if the user continues. <!-- designer: confirm intended use --> |
| `danger` | Errors or failures that require immediate attention. <!-- designer: confirm intended use --> |

## Voice and tone

Use sentence case and keep copy concise. Banner-specific rules:

- **title:** Keep it short and describe the situation ("Connection failed"), not an action ("Are you sure?)".
- **body copy**: be specific. Say what happened and what the user can do: "Your changes will be lost if you navigate away." Avoid vague messages like "Something went wrong."

## Accessibility
- The component sets `aria-label` on its root element from `title` automatically — no extra wiring needed.
- If `children` includes interactive controls (e.g. a **Button**), ensure those controls have accessible labels.
- Use Banner for **persistent** in-page messages only. Do not use it for ephemeral feedback that should be announced by a screen-reader live region.

## Related
- **Button** — embed a call-to-action inside `children` to let users act on the message.
- **Modal** — when you need to interrupt the user and require an explicit response before continuing.
- **Field** — inline validation and hint messages scoped to a single form field.
- **Typography** — plain text without status meaning.
- **Tooltip** — brief contextual info on hover, without occupying page space.
