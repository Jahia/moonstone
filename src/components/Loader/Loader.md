## Example
```jsx
import {Loader} from '@jahia/moonstone';

<Loader aria-label="Loading content"/>
```

## Do
- Use it to show that content is loading, when the length of the wait is unknown.
- Use it in place of an area's content while that content loads, such as a panel or a section of a page.

## Don't
- Don't place a Loader inside a [Button](?path=/docs/components-button--docs) to show a pending action. Use the [Button](?path=/docs/components-button--docs)'s loading state instead.
- Don't add a Loader to a [Dropdown](?path=/docs/components-dropdown--docs) that is fetching its options. Use the [Dropdown](?path=/docs/components-dropdown--docs)'s loading state instead.
- Don't add a Loader on top of a whole layout. Use the loading state of [LayoutApp](?path=/docs/layouts-layoutapp--docs), [LayoutModule](?path=/docs/layouts-layoutmodule--docs), or [LayoutContent](?path=/docs/layouts-layoutcontent--docs) instead.
- Don't keep a Loader once the content has loaded with nothing to show. Use an [EmptyData](?path=/docs/components-emptydata--docs) instead.

## Appearance

Always set `size`. Without it, the spinner is not drawn.

### `size` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when to use the small Loader? Moonstone itself uses it inline, in Button (loading state), Dropdown, and TreeView. --> |
| `medium` | _Pending design guidance_ <!-- designer: when to use the medium Loader? No Moonstone component uses it today. --> |
| `big` | _Pending design guidance_ <!-- designer: when to use the big Loader? Moonstone itself uses it for the loading state of LayoutApp, LayoutModule, and LayoutContent. --> |

## Accessibility
- Pass an `aria-label` that says what is loading, such as `aria-label="Loading content"`.
- On a dark background, set `isReversed` so the spinner keeps enough contrast.
