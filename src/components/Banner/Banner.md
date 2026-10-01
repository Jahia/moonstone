## Example

```jsx
import {Banner, Button} from '@jahia/moonstone';
import {Warning} from '@jahia/moonstone/icons';

<Banner title="Unsaved changes" variant="warning">
  Your changes will be lost if you navigate away.
</Banner>
```

## Do
- Use it to surface a contextual status message, such as neutral, info, warning, or danger, within a page or panel.
- Use it for persistent in-page feedback that stays visible until the user acts, such as unsaved changes, a failed background process, or a feature notice.
- Pair the message body with an action by placing a **Button** inside `children` to let users retry, dismiss, or navigate.

## Don't
- Don't use Banner for inline validation errors scoped to a single form field. Use **Field** instead.
- Don't use Banner to interrupt the user and require an explicit response before they continue. Use **Modal** instead.
- Don't use Banner for a standalone heading or body text with no status meaning. Use **Typography** instead.
- Don't use Banner for brief contextual info on hover. Use **Tooltip** instead.

## Appearance

Each `variant` automatically provides a matching default icon. Supply `iconStart` only when you need to override it.

### `variant` for meaning

| Value | Use it for |
|---|---|
| `neutral` | Informative messages that require no action from the user. |
| `info` | Information that requires an action from the user. |
| `warning` | An error or issue the user needs to fix. |
| `danger` | A destructive consequence that demands the user's full attention. |

## Voice and tone
- **title:** keep it short and describe the situation, such as "Connection failed", not an action, such as "Are you sure?".
- **body copy:** be specific. Say what happened and what the user can do, such as "Your changes will be lost if you navigate away." Avoid vague messages like "Something went wrong."

## Accessibility
- The component sets `aria-label` on its root element from `title` automatically.
- Use Banner for persistent in-page messages only. Do not use it for ephemeral feedback that should be announced by a screen-reader live region.
