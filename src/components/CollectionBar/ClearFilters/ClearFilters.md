## Example
```jsx
import {ClearFilters, CollectionBar, FilterChip} from '@jahia/moonstone';

<CollectionBar aria-label="Label">
    <FilterChip filterKey="user" label="User" valueLabel={user}>
        <YourContent/>
    </FilterChip>
    <ClearFilters onClick={clearAllFilters}/>
</CollectionBar>
```

## Do
- Use it to let the user clear every filter of a [CollectionBar](?path=/docs/components-collectionbar--docs) at once.

## Don't
- Don't use it outside a [CollectionBar](?path=/docs/components-collectionbar--docs). It throws an error there.
- Don't use it to clear one filter. The clear button of its [FilterChip](?path=/docs/components-filterchip--docs) does that.
