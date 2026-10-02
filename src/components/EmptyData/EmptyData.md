## Example
```jsx
import {EmptyData} from '@jahia/moonstone';
import {Search} from '@jahia/moonstone/icons';

<EmptyData
    icon={<Search size="big" aria-hidden="true"/>}
    title="No results found"
    message="Try a different search term."
/>
```

## Do
- Use it to fill an area that has no content to show, such as a table with no rows or a list with no items.
- Use it to explain why an area is empty, such as a search with no results or a filter that matches nothing.

## Don't
- Don't use an EmptyData while the content is still loading. Show a **Loader** instead.
- Don't use an EmptyData to report an error or a warning. Use a **Banner** instead.

## Voice and tone
- Write `title` and `message` in sentence case.
- Keep `title` to a few words (3 maximum). Never write it as a full sentence.
- Be specific. Name what is missing, such as "No results found", rather than a generic "No data".
- Keep the tone neutral and professional, clear over clever.
- _Pending design guidance_ <!-- designer: how long should `message` be, and should it always suggest a next step for the user? -->

## Accessibility
- When the empty state appears in response to a user action, such as a search or a filter, pass `role="status"` so screen readers announce it.
- The `title` looks like a heading but is not announced as one. If the area needs a heading for navigation, place it outside the EmptyData.
- The `icon` is decorative. Pass `aria-hidden="true"` to it, and keep all the meaning in `title` and `message`.
