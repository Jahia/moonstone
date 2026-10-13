## Tab

This is tab component 

### Figma
Not available

### Examples

```jsx

<Tab>
    <TabItem />
    <TabItem />
    <TabItem />
    <TabItem />
</Tab>
```

### Accessibility

`Tab` renders the `tablist` and each `TabItem` renders a `tab`. The panels are rendered by the consumer, so link each tab to its panel:

- give each `TabItem` an `id` and an `aria-controls` that names the id of its panel;
- render each panel with `role="tabpanel"`, that id, and an `aria-labelledby` that names the id of its tab.

```jsx
<Tab>
    <TabItem id="tab-content" aria-controls="panel-content" label="Content" isSelected={selected === 'content'}/>
    <TabItem id="tab-settings" aria-controls="panel-settings" label="Settings" isSelected={selected === 'settings'}/>
</Tab>
<div role="tabpanel" id="panel-content" aria-labelledby="tab-content" hidden={selected !== 'content'}>…</div>
<div role="tabpanel" id="panel-settings" aria-labelledby="tab-settings" hidden={selected !== 'settings'}>…</div>
```
