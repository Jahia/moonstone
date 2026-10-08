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

## Controlled & uncontrolled

**Uncontrolled** mode: the Accordion manages which item is open internally. Set `defaultOpenedItem` to open a specific item on first render. Use it when no other part of the UI needs to read or control the open state.

```jsx
<Accordion defaultOpenedItem="pages">…</Accordion>
```

**Controlled** mode: pass `openedItem` (the `id` of the currently open item) and `onSetOpenedItem` (called when the user clicks a header). Your component owns the state. Use it when another part of the UI drives or reacts to which section is open.

```jsx
const [open, setOpen] = useState('pages');
<Accordion openedItem={open} onSetOpenedItem={setOpen}>…</Accordion>
```

Do not pass both `openedItem` and `defaultOpenedItem` at the same time. `openedItem` makes the component controlled; `defaultOpenedItem` is for uncontrolled mode only.

## Do

- Use it to organise content into collapsible sections inside a constrained vertical space, such as a sidebar panel.
- Use it when the user only needs to work in one section at a time and the remaining sections can stay hidden.
- Use it to group related settings, navigation entries, or content categories that share the same panel.

## Don't

- Don't use it when all sections need to be visible simultaneously. Use a plain stacked layout instead.
- Don't use it for navigating between pages or routes. Use [TreeView](?path=/docs/components-treeview--docs) or [PrimaryNav](?path=/docs/components-primarynav--docs) instead.
- Don't use it when you need a single expandable section. Use [Collapsible](?path=/docs/components-collapsible--docs) instead.

## Accessibility

- The Up and Down arrow keys move the focus between headers (soon).
- Home and End move the focus to the first and last headers (soon).
