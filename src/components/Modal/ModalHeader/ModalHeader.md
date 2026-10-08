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
- Use it for the title of a [Modal](?path=/docs/components-modal--docs), always first in the modal.

## Don't
- Don't use it outside a [Modal](?path=/docs/components-modal--docs). For the title of a page, use a [Header](?path=/docs/components-header--docs) instead.

## Voice and tone
- Write the `title` in sentence case and name the task, such as "Delete project" or "Rename page".
