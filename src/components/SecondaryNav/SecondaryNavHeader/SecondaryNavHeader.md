## Example
```jsx
import {SecondaryNav, SecondaryNavHeader} from '@jahia/moonstone';

<SecondaryNav aria-label="Site content" header={<SecondaryNavHeader>Content</SecondaryNavHeader>}>
    <YourContent/>
</SecondaryNav>
```

## Do
- Use it for the `header` of a [SecondaryNav](?path=/docs/components-secondarynav--docs).

## Don't
- Don't use it outside a [SecondaryNav](?path=/docs/components-secondarynav--docs). For the title of a page, use a [Header](?path=/docs/components-header--docs) instead.

## Voice and tone
- Write the title in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Name the section that the navigation belongs to, such as "Content" or "Settings".
