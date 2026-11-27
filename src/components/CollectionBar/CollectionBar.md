## Example
```jsx
import {CollectionBar} from '@jahia/moonstone';

<CollectionBar aria-label="Label">
    <YourContent/>
</CollectionBar>
```

## Controlled
- Pass `openFilterKey` and `onOpenFilterChange`. You own the key of the open [FilterChip](?path=/docs/components-filterchip--docs), and `onOpenFilterChange(openFilterKey)` gives you the new key, or `null` when the popup closes.
- Use it when the page opens a filter from elsewhere, such as a button outside the bar.
- Don't mix the two modes. Passing both `openFilterKey` and `defaultOpenFilterKey` is not supported.

```jsx
const [openFilterKey, setOpenFilterKey] = useState(null);

<CollectionBar aria-label="Label" openFilterKey={openFilterKey} onOpenFilterChange={setOpenFilterKey}>
    <YourContent/>
</CollectionBar>
```

## Uncontrolled
- Pass `defaultOpenFilterKey` (optional) and let the component manage its own state.
- Use it when nothing outside the bar opens a filter.

```jsx
<CollectionBar aria-label="Label" defaultOpenFilterKey="path">
    <YourContent/>
</CollectionBar>
```

## Do
- Use it above a set of items, such as a table or thumbnails, to hold the controls that filter or arrange them.
- Use it with any view: it holds no data, and you apply its state to your items yourself.

## Don't
- Don't use it for the main actions of a page. Put them in the main actions of the [Header](?path=/docs/components-header--docs).
- Don't use it for a form whose fields are required or validated. Use a [Fieldset](?path=/docs/components-fieldset--docs) instead.

## Composition
- Put the filters in `children`, in this order: the [FilterChip](?path=/docs/components-filterchip--docs)s, then [AddFilter](?path=/docs/components-addfilter--docs), then [ClearFilters](?path=/docs/components-clearfilters--docs).
- Put the blocks that act on the view in `end`: a [SearchInput](?path=/docs/components-searchinput--docs), then an action [Button](?path=/docs/components-button--docs) if any, then a [ColumnChooser](?path=/docs/components-columnchooser--docs) last.
- Put only the blocks your view needs. A bar with no block renders nothing.

## Accessibility
- Add an `aria-label` that names the set of items the bar filters.
