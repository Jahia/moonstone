## Example

```jsx
import {Accordion, AccordionItem} from '@jahia/moonstone';
import {Page} from '@jahia/moonstone/icons';

// Each item needs an id that is unique within its Accordion.
<Accordion>
    <AccordionItem id="pages" icon={<Page/>} label="Pages">
        Pages list here.
    </AccordionItem>
</Accordion>
```

## Do

- Use it for each section of an **Accordion**.
- Use it to let the user open one section of related content at a time, under a header that names that content.

## Don't

- Don't use an AccordionItem on its own, outside an Accordion. It reads which item is open from its parent. For a single collapsible section, use a **Collapsible** instead.
- Don't nest an Accordion inside an AccordionItem to show a hierarchy. Use a **TreeView** instead.

## Voice and tone

- Write the label in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Name the content of the section, such as "Pages", "Media", or "Publishing settings".
- Keep the label short. It stays on one line and does not wrap.

## Accessibility

- The label is the only text of the header. Make it describe the section so that a screen-reader user can identify it without opening it.
- Don't rely on the icon to convey the purpose of the section. The icon has no text alternative.
- The header is focusable and opens or closes with Enter or Space. The focus ring appears automatically on keyboard focus. Don't remove it.
