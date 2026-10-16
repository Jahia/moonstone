---
# Allowed version bumps: patch, minor, major
"@jahia/moonstone": minor
---

Fixed `CardSelector` rendering its `cardAction` inside the card button, so keyboard and screen reader users reach the card and its action separately. With a `cardAction`, the card is now a `div` holding the button and the action: `className` applies to the `div`, while the ref and the other props stay on the button. A click on the action no longer triggers the card's `onClick`, and a disabled or read-only card no longer disables its action (#1440)
