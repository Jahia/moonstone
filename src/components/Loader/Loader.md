## Example
```jsx
import {Loader} from '@jahia/moonstone';

<Loader size="big" aria-label="Loading content"/>
```

## Do
- Use it to show that content is loading, when the length of the wait is unknown.
- Use it in place of an area's content while that content loads, such as a panel or a section of a page.

## Don't
- Don't place a Loader inside a **Button** to show a pending action. Use the Button's loading state instead.
- Don't add a Loader to a **Dropdown** that is fetching its options. Use the Dropdown's loading state instead.
- Don't add a Loader on top of a whole layout. Use the loading state of **LayoutApp**, **LayoutModule**, or **LayoutContent** instead.
- Don't keep a Loader once the content has loaded with nothing to show. Use an **EmptyData** instead.

## Appearance

Always set `size`. Without it, the spinner is not drawn.

### `size` for prominence

| Value | Use it for |
|---|---|
| `small` | _Pending design guidance_ <!-- designer: when to use the small Loader? Moonstone itself uses it inline, in Button (loading state), Dropdown, and TreeView. --> |
| `medium` | _Pending design guidance_ <!-- designer: when to use the medium Loader? No Moonstone component uses it today. --> |
| `big` | _Pending design guidance_ <!-- designer: when to use the big Loader? Moonstone itself uses it for the loading state of LayoutApp, LayoutModule, and LayoutContent. --> |

## Accessibility
- The Loader has the `status` role but no accessible name. Pass an `aria-label` that says what is loading, such as `aria-label="Loading content"`.
- On a dark background, set `isReversed` so the spinner keeps enough contrast.
