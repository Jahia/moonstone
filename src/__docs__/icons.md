# Icons

Every icon is a React component exported from the package root:

```jsx
import {Button, Edit} from '@jahia/moonstone';

<Button icon={<Edit/>} label="Edit"/>
```

Icon props:

| Prop | Type | Default |
|---|---|---|
| `size` | `'small'` (12px) \| `'default'` (16px) \| `'big'` (24px) | `'default'` |
| `color` | `'red'` \| `'yellow'` \| `'green'` \| `'blue'` \| `'deepBlue'` \| `'purple'` \| `'gray'` | inherits `currentColor` |
| `className` | `string` | |

Icons are filled with `currentColor`: without a `color` prop, they take the text color of their parent.

To display an SVG that is not in this list, use `SvgWrapper` or `toIconComponent`.
