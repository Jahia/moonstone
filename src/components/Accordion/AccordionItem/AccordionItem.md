## Example

```jsx
import {Accordion, AccordionItem} from '@jahia/moonstone';
import {Page} from '@jahia/moonstone/icons';

<Accordion>
    <AccordionItem id="pages" icon={<Page />} label="Pages">
        Pages list here.
    </AccordionItem>
</Accordion>
```

## Icon

Pass any icon element to the `icon` prop to display it before the label. The icon is purely decorative in this context; the `label` is always the accessible name of the header.

```jsx
import {Folder} from '@jahia/moonstone/icons';

<AccordionItem id="media" icon={<Folder />} label="Media">
    Media library here.
</AccordionItem>
```

Omit `icon` when the section does not have a meaningful visual association, or when icon use would be inconsistent across sibling items.

## onClick

Use `onClick` to react to the user opening or closing an item. The callback receives the event and a boolean indicating whether the item is now open.

```jsx
<AccordionItem
    id="pages"
    label="Pages"
    onClick={(e, isOpen) => console.log('Pages is now', isOpen ? 'open' : 'closed')}
>
    Pages list here.
</AccordionItem>
```

Prefer `onSetOpenedItem` on the parent `Accordion` when you only need to track the currently open item. Use `onClick` on `AccordionItem` when you need item-level side effects.

## Do

- Always provide a unique `id`. The parent `Accordion` uses it to coordinate which item is open.
- Write a concise `label` that names the section content, such as "Pages" or "Publishing settings".
- Use an `icon` consistently: either all items in an Accordion have an icon or none do.

## Don't

- Don't nest another `Accordion` or `AccordionItem` inside the content area. Use `TreeView` for hierarchical navigation instead.
- Don't use `AccordionItem` outside an `Accordion` wrapper; it relies on the Accordion context to function.
- Don't put long-running async operations directly inside the content. Load data lazily and show a `Loader` until it is ready.

## Voice and tone

- Write the `label` in sentence case using a noun or short noun phrase: "Pages", "Media", "Publishing".
- Avoid verbs unless the section is action-oriented, such as "Add content".
- Keep labels short enough to fit on one line at common sidebar widths.

## Accessibility

- The `id` prop is required and must be unique within the page. It is used to link the header button to the content region via `aria-controls`.
- The `label` is the visible and accessible name of the header button. Make it descriptive so screen-reader users can identify each section without opening it.
- The icon is hidden from assistive technology (`aria-hidden`). Do not rely on it alone to convey the section's purpose.
- The focus ring appears on keyboard focus. Do not suppress it.
