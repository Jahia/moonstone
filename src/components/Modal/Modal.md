A dialog that overlays the page to focus the user on a single task or message
(built on Floating UI). Compose it from a header, body, and footer.

## When to use
- A focused task or confirmation that must interrupt the current flow.
- Content that needs the user's full attention before continuing.

## When NOT to use
- Lightweight, non-blocking info on hover → use **Tooltip**.
- A list of actions anchored to a trigger → use **Menu**.
- A transient status message → use **Banner**.

## Usage
```jsx
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from '@jahia/moonstone';

<Modal isOpen={isOpen} onOpenChange={setIsOpen} size="medium">
    <ModalHeader title="Delete project"/>
    <ModalBody>This action cannot be undone.</ModalBody>
    <ModalFooter>
        <Button label="Cancel" onClick={() => setIsOpen(false)}/>
        <Button label="Delete" color="danger" onClick={onDelete}/>
    </ModalFooter>
</Modal>
```

- `isOpen` controls visibility; `onOpenChange` reports open/close (e.g. Esc, overlay click).
- `size`: `small` · `medium` · `large` · `full`.

## Composition
- Must be used with **ModalHeader**, **ModalBody**, and **ModalFooter**.

## Accessibility
- Focus is managed within the dialog while open; provide a clear title via `ModalHeader`.

## Related
- **Banner** (inline messages), **Menu** (action overlays), **Button** (footer actions).
