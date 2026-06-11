## Example

```jsx
import {Accordion, AccordionItem} from '@jahia/moonstone';
import {Page, Folder, Cloud} from '@jahia/moonstone/icons';

// Uncontrolled: opens the "pages" section by default
<Accordion defaultOpenedItem="pages">
    <AccordionItem id="pages" icon={<Page />} label="Pages">
        Pages list here.
    </AccordionItem>
    <AccordionItem id="media" icon={<Folder />} label="Media">
        Media library here.
    </AccordionItem>
    <AccordionItem id="publishing" icon={<Cloud />} label="Publishing">
        Publishing settings here.
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
- Don't use it for navigating between pages or routes. Use **TreeView** or **PrimaryNav** instead.
- Don't use it when you need a single expandable section. Use **Collapsible** instead.

## Voice and tone

- Write each item label in sentence case, using a few words at most.
- Start with a noun that names the section, such as "Pages", "Media", or "Publishing".
- Avoid verbs in section headers unless the section contains a form or an action-oriented task, such as "Add content".

## Accessibility

- Each **AccordionItem** must have a unique `id`. The component uses it to link the header to the content region.
- The `label` prop is the accessible name for the header. Write it to describe the section's content clearly so screen-reader users can scan the available sections.
- The focus ring appears on keyboard focus. Do not suppress it.
