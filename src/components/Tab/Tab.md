## Example
```jsx
import {useState} from 'react';
import {Tab, TabItem} from '@jahia/moonstone';

const [selectedTab, setSelectedTab] = useState('content');

// Your component owns the selection: mark exactly one TabItem as selected.
// Place only TabItem components inside a Tab.
<Tab>
    <TabItem isSelected={selectedTab === 'content'} label="Content" onClick={() => setSelectedTab('content')}/>
    <TabItem isSelected={selectedTab === 'metadata'} label="Metadata" onClick={() => setSelectedTab('metadata')}/>
    <TabItem isSelected={selectedTab === 'usages'} label="Usages" onClick={() => setSelectedTab('usages')}/>
</Tab>
```

## Do
- Use it to switch between several views of the same content within a page, such as the content, metadata, and usages of an item.
- Use it in the toolbar of a **Header** to switch the view of the page below it.
- Use it when only one of these views needs to be visible at a time.

## Don't
- Don't use it to navigate between the pages or sections of the application. Use **PrimaryNav** or **SecondaryNav** instead.
- Don't use it to let the user pick one value in a form. Use a **RadioGroup** instead.
- Don't use it to stack sections that the user expands and collapses. Use an **Accordion** instead.

## Voice and tone
- Write each tab label in sentence case, using a few words at most (3 maximum). Never write a full sentence.
- Name the view that the tab shows, such as "Content", "Metadata", or "Usages".

## Accessibility
- The Tab renders the tab list only. Render the content of the selected tab yourself, in an element with `role="tabpanel"`, and link it to its **TabItem** through `id`, `aria-controls`, and `aria-labelledby`.
- Mark exactly one **TabItem** as selected at a time. Its selected state is exposed to assistive technologies.
- An icon-only **TabItem** (one with no `label`) must have an `aria-label` that names the view.
- The left and right arrow keys move the focus between tabs. Enter or Space selects the focused tab.
- The focus ring appears automatically on keyboard focus. Don't remove it.
