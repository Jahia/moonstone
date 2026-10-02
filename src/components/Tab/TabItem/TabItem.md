## Example
```jsx
import {Tab, TabItem} from '@jahia/moonstone';

<Tab>
    <TabItem isSelected label="Content" onClick={handleShowContent}/>
    <TabItem label="Metadata" onClick={handleShowMetadata}/>
</Tab>
```

## Do
- Use it for each view that a **Tab** lets the user switch to.

## Don't
- Don't use it on its own, outside a **Tab**. Wrap every TabItem in a **Tab**.
- Don't use it for a control that toggles a pressed or active state. Use a **ButtonToggle** instead.
- Don't use it to trigger an action. Use a **Button** instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: is `default` the size for every tab bar, such as a Header toolbar or a panel? --> |
| `big` | _Pending design guidance_ <!-- designer: when should a tab bar use `big` (taller tab, heading-style label)? --> |

## Voice and tone
- Write the label in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Name the view that the tab shows, such as "Content", "Metadata", or "Usages".

## Accessibility
- An icon-only TabItem (one with no `label`) must have an `aria-label` that names the view.
- Link the TabItem to the panel it shows: give it an `id` and an `aria-controls` that point to the panel, and give the panel `role="tabpanel"` with an `aria-labelledby` back to the TabItem.
- A disabled TabItem is non-interactive and cannot be activated with the keyboard.
- The focus ring appears automatically on keyboard focus. Don't remove it.
