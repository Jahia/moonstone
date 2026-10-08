## Example
```jsx
import {Collapsible} from '@jahia/moonstone';

<Collapsible id="advanced-settings" label="Advanced settings">
    <YourContent/>
</Collapsible>
```

## Controlled & uncontrolled

Use one mode or the other. Do not pass both `isExpanded` (controlled) and `isDefaultExpanded` (uncontrolled).

- **Uncontrolled** (default): the component tracks its own expanded state. Set
  `isDefaultExpanded` to show the content on first render. Use it when nothing else needs to read
  or drive the state.
  ```jsx
  <Collapsible id="seo" label="SEO" isDefaultExpanded>…</Collapsible>
  ```
- **Controlled**: the parent owns the state through `isExpanded`, and updates it from `onClick`.
  Use it when another part of the UI reads or drives the state. `onClick(event)` receives only the
  click event, not the new state, so toggle the value yourself.
  ```jsx
  const [isExpanded, setIsExpanded] = useState(false);

  <Collapsible
    id="seo"
    label="SEO"
    isExpanded={isExpanded}
    onClick={() => setIsExpanded(!isExpanded)}
  >
    …
  </Collapsible>
  ```

## Do
- Use it to show or hide a single section of content, such as the advanced settings of a form.
- Use it for long sections in a scrolling panel.
- Use it to stack several independent sections that the user can expand at the same time.

## Don't
- Don't use Collapsible for a set of sections where only one is open at a time. Use an [Accordion](?path=/docs/components-accordion--docs) instead.
- Don't use Collapsible for supplementary content beside the page. Use a [Drawer](?path=/docs/components-drawer--docs) instead.

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum). Never write a full sentence. The label is shown in uppercase automatically: never type it in uppercase.

## Accessibility
- Give each Collapsible a unique `id`. The component uses it to link the header to the content region.
