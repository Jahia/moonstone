## Goals:

Create the Navigation-primary component for the main navigation (level 1).

## Specifications:

The navigation bar should be collapsable/expandable by clicking on the burger menu.

Show or Hide elements depends on the state of the display.

if expanded :

 - Switch {{burger-menu}} to {{arrow-back}} icon
 - Show HeaderLogo
 - Show label’s icon
 - Show helping links (documentations ...)
 - Show mail of the user
 - Show sign out button

## Accessibility

With the focus inside an expanded navigation, Escape collapses it and returns the focus to the toggle button. The key does not bubble while the navigation is expanded.

## Labels:

The navigation and its toggle button are named in English by default. Pass translated values with `i18n`.

Figma Link : https://www.figma.com/file/939bW74C3TLW5VAzK23uox/moonstone-components?node-id=140%3A0
