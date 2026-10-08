## Example
```jsx
import {Tab, TabItem} from '@jahia/moonstone';

<Tab>
    <TabItem isSelected id="tab-content" aria-controls="panel-content" label="Content" onClick={selectTab}/>
    <TabItem id="tab-metadata" aria-controls="panel-metadata" label="Metadata" onClick={selectTab}/>
</Tab>
<div id="panel-content" role="tabpanel" aria-labelledby="tab-content">
    <YourContent/>
</div>
```

## Do
- Use it for each view that a [Tab](?path=/docs/components-tab--docs) lets the user switch to.

## Don't
- Don't use it on its own, outside a [Tab](?path=/docs/components-tab--docs). Wrap every TabItem in a [Tab](?path=/docs/components-tab--docs).
- Don't use it for a control that toggles a pressed or active state. Use a [ButtonToggle](?path=/docs/components-buttontoggle--docs) instead.
- Don't use it to trigger an action. Use a [Button](?path=/docs/components-button--docs) instead.

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
