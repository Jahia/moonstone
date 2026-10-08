## Example
```jsx
import {Button, Modal, ModalFooter, ModalHeader} from '@jahia/moonstone';

<Modal isOpen={isOpen} aria-labelledby="delete-project-title" onOpenChange={setIsOpen}>
    <>
        <ModalHeader id="delete-project-title" title="Delete project"/>
        <ModalFooter>
            <Button label="Cancel"/>
        </ModalFooter>
    </>
</Modal>
```

## Do
- Use it for a focused task that must interrupt the current flow, such as a short form.
- Use it to confirm a destructive or irreversible action, such as deleting content.
- Use it when the user must respond before going back to the page.

## Don't
- Don't use a Modal for supplementary content that the user works with alongside the page, such as the details of a selected item. Use a [Drawer](?path=/docs/components-drawer--docs) instead.
- Don't use a Modal for a list of actions attached to a trigger. Use a [Menu](?path=/docs/components-menu--docs) instead.
- Don't use a Modal for a status or system message that needs no response. Use a [Banner](?path=/docs/components-banner--docs) instead.
- Don't use a Modal for a short hint on hover. Use a [Tooltip](?path=/docs/components-tooltip--docs) instead.

## Appearance

### `size` for width

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when should a modal use the small size? --> |
| `medium` | The default. |
| `large` | _Pending design guidance_ <!-- designer: when should a modal use the large size, such as for a form? --> |
| `full` | _Pending design guidance_ <!-- designer: when should a modal take the full width of the page? --> |

## Accessibility
- Always render a [ModalHeader](?path=/docs/components-modalheader--docs) with a `title`. Give it an `id` and pass that `id` as the Modal's `aria-labelledby`, so screen readers announce the title as the dialog's name.
- Keep `isOpen` in sync with `onOpenChange`. Escape and a click outside the modal only close it through that callback.
- The focus moves into the modal when it opens, and Tab stays inside it until it closes. Make sure the modal holds at least one focusable control, such as a close or cancel [Button](?path=/docs/components-button--docs).
- When modals are nested, Escape closes only the last one opened.
