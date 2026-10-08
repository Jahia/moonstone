## Example

```jsx
import {Accordion, AccordionItem} from '@jahia/moonstone';

<Accordion>
    <AccordionItem id="pages" label="Pages">
        <YourContent/>
    </AccordionItem>
</Accordion>
```

## Do

- Use it for each section of an [Accordion](?path=/docs/components-accordion--docs).

## Don't

- Don't use an AccordionItem on its own, outside an [Accordion](?path=/docs/components-accordion--docs). It reads which item is open from its parent. For a single collapsible section, use a [Collapsible](?path=/docs/components-collapsible--docs) instead.
- Don't nest an [Accordion](?path=/docs/components-accordion--docs) inside an AccordionItem to show a hierarchy. Use a [TreeView](?path=/docs/components-treeview--docs) instead.

## Voice and tone

- Write the label in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Name the content of the section, such as "Pages", "Media", or "Publishing settings".
- Keep the label short. It stays on one line and does not wrap.
- Avoid verbs unless the section contains a form or an action-oriented task, such as "Add content".

## Accessibility

- Give each AccordionItem a unique `id`. It links the header to the content region.
- Don't rely on the icon to convey the purpose of the section. The icon has no text alternative.
- Enter or Space opens or closes the focused header.
