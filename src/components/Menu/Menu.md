## Specifications:

A type of widget that offers a list of choices or actions to the user.

- It displays above the content.
- User can validate a value by pressing `Enter`
- The menu has a maximum height and it’s scrollable
- To hide the menu click on an item of the list or click outside to it


## Positioning

`anchorEl` is the reference element to posioning the menu
`anchorPosition` Position of the menu

- if `anchorEl` is provided the position is relative to the bottom left corner to this element.
- if `anchorEl` is not set the position is relative to the top left corner of the viewport

## Search
Use the `hasSearch` boolean prop to display the search input at the top of the menu.

Use the `searchEmptyText` prop to provide a string to display when the search returns no results.
