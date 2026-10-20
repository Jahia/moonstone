Form validation must be made on the Field level
Prop buttons only supports button components

## Accessibility

`Field` links its label, helper and error to the Moonstone control inside it. A click on the label focuses an `Input` or a `Textarea` that has no `id`.

A custom control gets the same links from `useFieldAria`. For a click on the label to focus it, give it the id `<Field id>-control`. Pass it the props of the control, and spread the result after them: the values of the consumer win, and its `aria-describedby` is joined to the helper and the error.

```tsx
import { useFieldAria } from '@jahia/moonstone';

const CustomSelect = (props) => {
    const fieldAria = useFieldAria(props);
    return <select {...props} {...fieldAria}/>;
};
```
