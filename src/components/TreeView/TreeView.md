## Example
```jsx
import {TreeView} from '@jahia/moonstone';

const siteTree = [
    {
        id: 'home',
        label: 'Home',
        children: [
            {id: 'about', label: 'About us'},
            {id: 'news', label: 'News'},
        ],
    },
];

<TreeView data={siteTree}/>
```

## Controlled
- Pass `openedItems`, the `id` of every open node, with both `onOpenItem` and `onCloseItem`. You own the state: without the two callbacks, the nodes don't open or close.
- Use it when another part of the UI drives the open nodes, or when you load the children of a node as it opens.
- Don't mix the two modes. Passing both `openedItems` and `defaultOpenedItems` is not supported.
- When you pass `onClickItem`, a click on a node's label calls it instead of opening or closing the node. It receives the node, the event, and a `toggleNode` function: call `toggleNode(event)` to also open or close the node. A click on the arrow always opens or closes the node.

```jsx
<TreeView data={siteTree} openedItems={openedItems} onOpenItem={node => setOpenedItems([...openedItems, node.id])} onCloseItem={node => setOpenedItems(openedItems.filter(id => id !== node.id))}/>
```

## Uncontrolled
- Pass `defaultOpenedItems` (optional) and let the component manage its own state.
- Use it when nothing else needs it.

```jsx
<TreeView data={siteTree} defaultOpenedItems={['home']}/>
```

## Do
- Use it to display a hierarchy that the user browses, such as the pages of a site or the folders of a media library.
- Use it to let the user select one or several items within a hierarchy.
- Use it when the children of a node load on demand, as the user opens it.
- Use it as the main content of a [SecondaryNav](?path=/docs/components-secondarynav--docs), alone or inside an [Accordion](?path=/docs/components-accordion--docs).

## Don't
- Don't use it to pick a value from a hierarchy in a form. Use a [Dropdown](?path=/docs/components-dropdown--docs), which accepts tree data, instead.
- Don't use it to show items with several attributes side by side. Use a [Table](?path=/docs/components-table--docs) or a [DataTable](?path=/docs/components-datatable--docs) instead.
- Don't use it to stack sections of content that the user expands and collapses. Use an [Accordion](?path=/docs/components-accordion--docs) instead.
- Don't use it for the top-level navigation of the application. Use [PrimaryNav](?path=/docs/components-primarynav--docs) instead.

## Appearance

### `size` for prominence

| Value | Use it for |
|---|---|
| `default` | _Pending design guidance_ <!-- designer: is `default` the size for every tree, such as a SecondaryNav tree? --> |
| `small` | _Pending design guidance_ <!-- designer: when should a tree use the `small` rows (smaller label), such as inside a Dropdown or a dense panel? --> |

## Accessibility
- Give every node a unique `id`. The component uses it to track the open, selected, and highlighted nodes.
- Give the tree an accessible name with `aria-label` when no visible heading names it.
- Set `isLoading` on a node while its children load. The node is then reported as busy.
- The Up and Down arrow keys move the focus between visible nodes.
- Home and End move the focus to the first and last visible nodes (soon).
- The Right arrow key opens a closed node, and the Left arrow key closes an open one.
- On an open node, the Right arrow key moves the focus to the first child (soon).
- On a child node, the Left arrow key moves the focus to the parent (soon).
- Enter selects the focused node. Space selects it too (soon).
- `*` opens all the sibling nodes (soon).
- A disabled or read-only node doesn't call `onClickItem`, with the mouse or the keyboard. The user can still open and close it.
