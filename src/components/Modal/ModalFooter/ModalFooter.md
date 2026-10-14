## Example
```jsx
import {Button, Modal, ModalFooter, ModalHeader} from '@jahia/moonstone';

<Modal isOpen={isOpen} onOpenChange={setIsOpen}>
    <>
        <ModalHeader title="Rename content"/>
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
