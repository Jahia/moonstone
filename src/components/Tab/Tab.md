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
    <TabItem id="tab-1" aria-controls="panel-1" label="Tab 1"/>
    <TabItem id="tab-2" aria-controls="panel-2" label="Tab 2"/>
</Tab>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">…</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2">…</div>
```
