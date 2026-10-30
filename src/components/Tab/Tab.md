## Example
```jsx
import {Tab, TabItem} from '@jahia/moonstone';

<Tab>
    <TabItem isSelected id="tab-preview" aria-controls="panel-preview" label="Preview" onClick={selectTab}/>
    <TabItem id="tab-details" aria-controls="panel-details" label="Details" onClick={selectTab}/>
</Tab>
<div id="panel-preview" role="tabpanel" aria-labelledby="tab-preview">
    <YourContent/>
</div>
```

## Do
- Use it to navigate between several views within the same context.
- Use it in the content of a page or in a panel.
- Use it when only one of these views needs to be visible at a time.

## Don't
- Don't use it to navigate between the pages or sections of the application. Use [PrimaryNav](?path=/docs/components-primarynav--docs) or [SecondaryNav](?path=/docs/components-secondarynav--docs) instead.
- Don't use it to stack sections that the user expands and collapses. Use an [Accordion](?path=/docs/components-accordion--docs) instead.

## Accessibility
- The Tab renders the tab list only. Render the content of the selected tab yourself, in an element with `role="tabpanel"` linked to its [TabItem](?path=/docs/components-tabitem--docs).
- Mark exactly one [TabItem](?path=/docs/components-tabitem--docs) as selected at a time. Its selected state is exposed to assistive technologies.
- The Left and Right arrow keys move the focus between tabs.
- The arrow keys wrap from the last tab to the first and back, and skip disabled tabs.
- Home and End move the focus to the first and last tabs.
