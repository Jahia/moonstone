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
- Use it for the actions of a [Modal](?path=/docs/components-modal--docs).

## Don't
- Don't use it outside a [Modal](?path=/docs/components-modal--docs). Place it inside a [Modal](?path=/docs/components-modal--docs) instead.

## Composition
- Put the main action at the far right, and the less important actions, such as Cancel, to its left.
- Pass the main action first in the code: the ModalFooter shows its children from right to left.
