## Example
```jsx
import {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Typography} from '@jahia/moonstone';

const [isOpen, setIsOpen] = useState(false);

<Button label="Delete" color="danger" onClick={() => setIsOpen(true)}/>
{/* onOpenChange reports Escape and clicks outside the modal. */}
<Modal isOpen={isOpen} aria-labelledby="delete-project-title" onOpenChange={setIsOpen}>
    {/* Modal takes a single child: wrap its parts in a fragment. */}
    <>
        <ModalHeader id="delete-project-title" title="Delete project"/>
        <ModalBody>
            <Typography>This project and its content will be deleted. You can't undo this action.</Typography>
        </ModalBody>
        <ModalFooter>
            <Button label="Cancel" variant="ghost" onClick={() => setIsOpen(false)}/>
            <Button label="Delete" color="danger" onClick={handleDelete}/>
        </ModalFooter>
    </>
</Modal>
```

## Do
- Use it for a focused task that must interrupt the current flow, such as a short form.
- Use it to confirm a destructive or irreversible action, such as deleting content.
- Use it when the user must respond before going back to the page.

## Don't
- Don't use a Modal for supplementary content that the user works with alongside the page, such as the details of a selected item. Use a **Drawer** instead.
- Don't use a Modal for a list of actions attached to a trigger. Use a **Menu** instead.
- Don't use a Modal for a status or system message that needs no response. Use a **Banner** instead.
- Don't use a Modal for a short hint on hover. Use a **Tooltip** instead.

## Appearance

### `size` for width

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when should a modal use the small size? --> |
| `medium` | The default. |
| `large` | _Pending design guidance_ <!-- designer: when should a modal use the large size, such as for a form? --> |
| `full` | _Pending design guidance_ <!-- designer: when should a modal take the full width of the page? --> |

## Voice and tone
- Write the `title` in sentence case and name the task, such as "Delete project" or "Rename page".
- Write footer button labels in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Start each button label with a verb that names the action, such as "Save", "Publish", or "Delete".
- Be specific and name the real outcome. Write "Delete", never "OK", especially for destructive actions.

## Accessibility
- Always render a **ModalHeader** with a `title`. Give it an `id` and pass that `id` as the Modal's `aria-labelledby`, so screen readers announce the title as the dialog's name. Without it, the dialog is named after its whole content.
- Keep `isOpen` in sync with `onOpenChange`. Escape and a click outside the modal only close it through that callback.
- The focus moves into the modal when it opens, and Tab stays inside it until it closes. Make sure the modal holds at least one focusable control, such as a close or cancel **Button**.
- When modals are nested, Escape closes only the last one opened.
