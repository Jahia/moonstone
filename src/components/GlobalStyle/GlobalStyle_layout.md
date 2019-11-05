# Layout CSS

We provide some useful global classes with flex-box to help you to positionning elements.
The classes should be added on container element to enable a flex context.
The classnames try to fit to CSS flex properties.



## Direction

First you have to define the flex direction horizontal or vertical layout.

| CSS        | Description         |
| ---------- | ------------------- |
| `.flexRow` | Horizontal **row**  |
| `.flexCol` | Vertical **column** |

Then you can add a modifier to justify content, the justification follow the direction flow. Modifiers extend the default class, for example you don't need to repeat `.flexRow.flexRow_center` you just have to write `.flexRow_center`.

| CSS                                   | Description                                       |
| ------------------------------------- | ------------------------------------------------- |
| `.flexRow_reverse` `.flexCol_reverse` | Content is placed at the **end** of the container |
| `.flexRow_center` `.flexCol_center`   | Content is placed at **center** of the container  |
| `.flexRow_between` `.flexCol_between` | Content is **distributed** equally between items  |
| `.flexRow_nowrap` `.flexCol_nowrap`   | Content is forced onto **one line**               |



## Alignment

To align items in the opposite axis of the flow. Under the wood this classes just add `align-items` property.

| CSS           | Description                      |
| ------------- | -------------------------------- |
| `alignCenter` | Pack items around the **center** |
| `alignStart`  | Pack items from the **start**    |
| `alignEnd`    | Pack items from the **bottom**   |



## Helpers

| CSS          | Description                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `.flexFluid` | The Item take all the place disponible. You must use this classe under a flex context. This class just add `flex: 1`. |
