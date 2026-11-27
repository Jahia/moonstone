## Example
```jsx
import {CollectionBar, FilterChip} from '@jahia/moonstone';

<CollectionBar aria-label="Label">
    <FilterChip filterKey="path" label="Path">
        <YourContent/>
    </FilterChip>
</CollectionBar>
```

## Do
- Use it for one filter of a [CollectionBar](?path=/docs/components-collectionbar--docs), whose value the user edits in a popup.
- Use it for a filter the user adds only when needed, listed by [AddFilter](?path=/docs/components-addfilter--docs).

## Don't
- Don't use it outside a [CollectionBar](?path=/docs/components-collectionbar--docs). It throws an error there.
- Don't use it for a static label. Use a [Chip](?path=/docs/components-chip--docs) instead.

## Voice and tone
- _Pending design guidance_ <!-- designer: how long is a filter name, and how is a value written on the chip? -->

## Accessibility
- Give each control in the popup a label, visible or in `aria-label`.
- Escape closes the popup and gives the focus back to the chip.
- Delete or Backspace on a chip with a value clears it, when the chip has a clear button.
