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
- Use it for the actions of a [Modal](?path=/docs/components-modal--docs), last in the modal.

## Don't
- Don't use it outside a [Modal](?path=/docs/components-modal--docs). Place it inside a [Modal](?path=/docs/components-modal--docs) instead.

## Voice and tone
- Write the button labels in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Start each button label with a verb that names the action, such as "Save", "Publish", or "Delete".
- Be specific and name the real outcome. Write "Delete", never "OK", especially for destructive actions.
