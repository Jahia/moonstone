Toggle contextual overlays for displaying a list of actions. This component replaces the classic `select` HTML element.

## Specifications:

Click on it display the menu component
The label should be truncated if it's longer than the container
Allow user to navigate between option by using `Tabulation`
Allow user to validate a value by pressing `Enter`
To hide the menu click on an item of the list or click outside to it
The selected item has a specific design
Items can be grouped with a title


## Implementation

To allow to use the dropdown with keyboard don't forget to add `e.stopPropagation();` on the onChange callback
