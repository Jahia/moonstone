## Example
```jsx
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from '@jahia/moonstone';

<Modal isOpen={isOpen} onOpenChange={setIsOpen}>
    <>
        <ModalHeader title="Rename content"/>
        <ModalBody>
            <YourContent/>
        </ModalBody>
        <ModalFooter>
            <Button label="Cancel"/>
        </ModalFooter>
    </>
</Modal>
```

## Do
- Use it for the content of a [Modal](?path=/docs/components-modal--docs), between the [ModalHeader](?path=/docs/components-modalheader--docs) and the [ModalFooter](?path=/docs/components-modalfooter--docs).

## Don't
- Don't use it outside a [Modal](?path=/docs/components-modal--docs). Place it inside a [Modal](?path=/docs/components-modal--docs) instead.
