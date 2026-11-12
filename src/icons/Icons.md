## Goals:
Include SVG icons easily with basic configuration.
SVG are flatten by the build system (svgr use svgo)

## Specifications:

They must have the same size 24px/24px, have just one fill (no strokes).

All icons use to our design system must be reference to this figma document : https://www.figma.com/file/Hn0L5ZR1taHnTIqs3Vq61q/moonstone-tokens?node-id=48%3A0

As we set icon fill to `currentColor`, set color property of the parent element to determine the color icon.

## Import

Import icons from `@jahia/moonstone/icons`, and components from `@jahia/moonstone`:

```js
import { Button } from '@jahia/moonstone';
import { Add } from '@jahia/moonstone/icons';
```

Importing icons from `@jahia/moonstone` is deprecated and logs a warning: a component and an icon of the same name cannot both be exported from one place.

## Documentation
The icon API allows for 3 sizes which map to the following values:  

|  value  |    rem    |   px  |  
|---------|:---------:|:-----:|  
| small   | 0.75x0.75 | 12x12 |  
| default | 1x1       | 16x16 |  
| big     | 1.5x1.5   | 24x24 |  
