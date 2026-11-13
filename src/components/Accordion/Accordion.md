## Example

```jsx
import {Accordion, AccordionItem} from '@jahia/moonstone';

<Accordion>
    <AccordionItem id="pages" label="Pages">
        <YourContent/>
    </AccordionItem>
    <AccordionItem id="media" label="Media">
        <YourContent/>
    </AccordionItem>
</Accordion>
```

## Controlled
- Pass `openedItem`, the `id` of the open item, and `onSetOpenedItem`. You own the state, and `onSetOpenedItem` is called with the `id` of the header the user clicks, not with the next state.
- Use it when another part of the UI drives or reacts to which item is open.
- Use it to keep one item open at all times: pass your state setter to `onSetOpenedItem`, as below. A click on the open item then keeps it open.
- Don't mix the two modes. Passing both `openedItem` and `defaultOpenedItem` is not supported.

```jsx
<Accordion openedItem={openedItem} onSetOpenedItem={setOpenedItem}>…</Accordion>
```

## Uncontrolled
- Pass `defaultOpenedItem` (optional) and let the component manage its own state. Pass it so that one item is open from the start.
- Use it when nothing else needs it.
- A click on the open item closes it, so no item stays open. To keep one item open at all times, use the controlled mode.

```jsx
<Accordion defaultOpenedItem="pages">…</Accordion>
```

## Do

- Keep one item open at all times.
- Use it to organise content into collapsible sections inside a constrained vertical space.
- Use it when the user only needs to work in one section at a time and the remaining sections can stay hidden.
- Use it to group related settings, navigation entries, or content categories that share the same panel.

## Don't

- Don't use it for navigating between pages or routes. Use [TreeView](?path=/docs/components-treeview--docs) or [PrimaryNav](?path=/docs/components-primarynav--docs) instead.
- Don't use it when you need a single expandable section. Use [Collapsible](?path=/docs/components-collapsible--docs) instead.

## Accessibility

- The Up and Down arrow keys move the focus between headers.
