A side panel that slides in next to the content. It is not modal: the page next to it stays usable.

## Accessibility

- Name the Drawer with `aria-label` or `aria-labelledby`: it renders an `aside` by default, a landmark that screen readers list by its name.
- When `isOpen` turns true, focus moves to the first focusable element of the Drawer. When it turns false, focus returns to the element that had it before, if focus was still inside the Drawer. A Drawer rendered open does not take focus.
- Pass `onOpenChange` to close the Drawer with Escape: it is called with `false` when Escape is pressed inside the Drawer. Without it, Escape does nothing.
- Tab moves out of the Drawer to the page, and neither a click outside nor focus leaving it closes it.
