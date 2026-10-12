## Example
```jsx
import {Collapsible} from '@jahia/moonstone';

<Collapsible id="content" label="Content">
    <YourContent/>
</Collapsible>
```

## Controlled
- Pass `isExpanded` and `onClick`. You own the state, and `onClick(event)` gives you only the click event, not the new state, so toggle the value yourself.
- Use it when another part of the UI reads or drives the state.
- Don't mix the two modes. Passing both `isExpanded` and `isDefaultExpanded` is not supported.

```jsx
<Collapsible id="seo" label="SEO" isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>…</Collapsible>
```

## Uncontrolled
- Pass `isDefaultExpanded` (optional) and let the component manage its own state.
- Use it when nothing else needs it.

```jsx
<Collapsible id="seo" label="SEO" isDefaultExpanded>…</Collapsible>
```

## Do
- Use it to show or hide a single section of content, such as a part of a form.
- Use it for long sections in a scrolling panel.
- Use it to stack several independent sections that the user can expand at the same time.

## Don't
- Don't use Collapsible for a set of sections where only one is open at a time. Use an [Accordion](?path=/docs/components-accordion--docs) instead.
- Don't use a Collapsible in a [SecondaryNav](?path=/docs/components-secondarynav--docs). Use an [Accordion](?path=/docs/components-accordion--docs) instead.
- Don't use Collapsible for supplementary content beside the page. Use a [Drawer](?path=/docs/components-drawer--docs) instead.

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum). Never write a full sentence. The label is shown in uppercase automatically: never type it in uppercase.

## Accessibility
- Give each Collapsible a unique `id`. The component uses it to link the header to the content region.
