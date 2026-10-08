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
- Use it to switch between several views of the same content within a page, such as the content, metadata, and usages of an item.
- Use it in the toolbar of a [Header](?path=/docs/components-header--docs) to switch the view of the page below it.
- Use it when only one of these views needs to be visible at a time.

## Don't
- Don't use it to navigate between the pages or sections of the application. Use [PrimaryNav](?path=/docs/components-primarynav--docs) or [SecondaryNav](?path=/docs/components-secondarynav--docs) instead.
- Don't use it to stack sections that the user expands and collapses. Use an [Accordion](?path=/docs/components-accordion--docs) instead.

## Accessibility
- The Tab renders the tab list only. Render the content of the selected tab yourself, in an element with `role="tabpanel"` linked to its [TabItem](?path=/docs/components-tabitem--docs).
- Mark exactly one [TabItem](?path=/docs/components-tabitem--docs) as selected at a time. Its selected state is exposed to assistive technologies.
- The Left and Right arrow keys move the focus between tabs.
- The arrow keys wrap from the last tab to the first and back, and skip disabled tabs (soon).
- Home and End move the focus to the first and last tabs (soon).
