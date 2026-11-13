This component allow the user to resize the size of an element.

Name the box with `aria-label`: the resize handle takes that name, else "Resize".

When the handle is focused, use the keyboard to resize the panel:
- `ArrowLeft` to decrease the width by 10px
- `ArrowRight` to increase the width by 10px
- `Home` to go to the minimum width
- `End` to go to the maximum width

A keyboard resize calls `onResizeStop`, like a pointer resize, with the keyboard event. With a controlled `size`, set its width to `size.width + delta.width`.
