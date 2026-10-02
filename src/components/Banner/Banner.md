## Example

```jsx
import {Banner} from '@jahia/moonstone';

<Banner title="Unsaved changes" variant="warning">
    Your changes will be lost if you leave this page.
</Banner>
```

## Do
- Use it to show a status message about a page or a panel, such as a notice, a warning, or an error.
- Use it for persistent feedback that stays visible until the user acts, such as unsaved changes, a failed background process, or a feature notice.
- Use it to pair a status message with an action, such as Retry, by placing a **Button** in its content.

## Don't
- Don't use a Banner for a validation error on a single form field. Use a **Field** instead.
- Don't use a Banner to interrupt the user and require a response before they continue. Use a **Modal** instead.
- Don't use a Banner for a heading or body text that carries no status. Use **Typography** instead.
- Don't use a Banner for brief information shown on hover. Use a **Tooltip** instead.

## Appearance

### `variant` for meaning

| Value | Use it for |
|---|---|
| `neutral` | Informative messages that require no action from the user. |
| `info` | Information that requires an action from the user. |
| `warning` | An error or issue the user needs to fix. |
| `danger` | A destructive consequence that demands the user's full attention. |

## Voice and tone
- Write the title in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Make the title describe the situation, such as "Connection failed", not ask a question, such as "Are you sure?".
- Be specific in the content. Say what happened and what the user can do, such as "Your changes will be lost if you leave this page." Never write a vague message, such as "Something went wrong."

## Accessibility
- Screen readers don't announce a Banner when it appears. Don't rely on it for feedback that the user must hear right away.
- Don't convey the status by color or icon alone. Write a title that states it.
