## Example
```jsx
import {useState} from 'react';
import {TreeView} from '@jahia/moonstone';
import {Folder, Page} from '@jahia/moonstone/icons';

// Each node needs a unique `id` and a `label`. Nest nodes through `children`.
const siteTree = [
    {
        id: 'home',
        label: 'Home',
        iconStart: <Page/>,
        children: [
            {id: 'about', label: 'About us', iconStart: <Page/>},
            {id: 'news', label: 'News', iconStart: <Folder/>, hasChildren: true},
        ],
    },
];

const [selectedItems, setSelectedItems] = useState([]);

<TreeView
    data={siteTree}
    selectedItems={selectedItems}
    onClickItem={node => setSelectedItems([node.id])}
/>
```

## Controlled & uncontrolled

**Uncontrolled** mode: the TreeView manages which nodes are open. Set `defaultOpenedItems` to open some nodes on first render. Use it when no other part of the UI needs to read or drive the open nodes.

```jsx
<TreeView data={siteTree} defaultOpenedItems={['home']}/>
```

**Controlled** mode: pass `openedItems` (the `id` of every open node) with both `onOpenItem` and `onCloseItem`. Your component owns the state. Use it when another part of the UI drives the open nodes, or when you load the children of a node as it opens.

```jsx
const [openedItems, setOpenedItems] = useState(['home']);

<TreeView
    data={siteTree}
    openedItems={openedItems}
    onOpenItem={node => setOpenedItems([...openedItems, node.id])}
    onCloseItem={node => setOpenedItems(openedItems.filter(id => id !== node.id))}
/>
```

Don't pass both `openedItems` and `defaultOpenedItems`. Passing `openedItems` makes the component controlled, and `defaultOpenedItems` is then ignored. In controlled mode, pass both callbacks: without them, the nodes don't open or close.

When you pass `onClickItem`, a click on a node's label calls it instead of opening or closing the node. It receives the node, the event, and a `toggleNode` function: call `toggleNode(event)` to also open or close the node. A click on the arrow always opens or closes the node.

## Do
- Use it to display a hierarchy that the user browses, such as the pages of a site or the folders of a media library.
- Use it to let the user select one or several items within a hierarchy.
- Use it when the children of a node load on demand, as the user opens it.
- Use it as the main content of a **SecondaryNav**, alone or inside an **Accordion**.

## Don't
- Don't use it to pick a value from a hierarchy in a form. Use a **Dropdown**, which accepts tree data, instead.
- Don't use it to show items with several attributes side by side. Use a **Table** or a **DataTable** instead.
- Don't use it to stack sections of content that the user expands and collapses. Use an **Accordion** instead.
- Don't use it for the top-level navigation of the application. Use **PrimaryNav** instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: is `default` the size for every tree, such as a SecondaryNav tree? --> |
| `small` | _Pending design guidance_ <!-- designer: when should a tree use the `small` rows (smaller label), such as inside a Dropdown or a dense panel? --> |

## Accessibility
- Give every node a unique `id`. The component uses it to track the open, selected, and highlighted nodes.
- Give the tree an accessible name with `aria-label`, such as "Site pages", when no visible heading names it.
- Icons passed in `iconStart` or `iconEnd` get a generated accessible name by default. Pass `aria-hidden` on a decorative icon, or an `aria-label` that describes a meaningful one.
- Set `isLoading` on a node while its children load. The node is then reported as busy.
- The up and down arrow keys move the focus between nodes. The left and right arrow keys and Space open or close the focused node, and Enter activates it.
- A disabled or read-only node doesn't call `onClickItem`, with the mouse or the keyboard. The user can still open and close it.
