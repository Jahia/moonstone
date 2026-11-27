## Example
```jsx
import {AddFilter, CollectionBar, FilterChip} from '@jahia/moonstone';

<CollectionBar aria-label="Label">
    <FilterChip isAddable filterKey="user" label="User">
        <YourContent/>
    </FilterChip>
    <AddFilter/>
</CollectionBar>
```

## Do
- Use it to let the user add the filters that a [CollectionBar](?path=/docs/components-collectionbar--docs) does not show at first.

## Don't
- Don't use it outside a [CollectionBar](?path=/docs/components-collectionbar--docs). It throws an error there.
