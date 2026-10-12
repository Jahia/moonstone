## Example
```jsx
import {DynamicFieldset} from '@jahia/moonstone';

<DynamicFieldset id="fieldset" label="Label">
    <YourContent/>
</DynamicFieldset>
```

## Controlled
- Pass `checked` and `onChange`. You own the state, and `onChange(event)` gives you the new state through `event.target.checked`.
- Use it when the switch state is saved with the form or drives other UI.
- Don't mix the two modes. Passing both `checked` and `defaultChecked` is not supported.
- When the switch is off, the fields are removed from the page, not only hidden. Keep their values in your own state if they must survive a toggle.

```jsx
<DynamicFieldset id="fieldset" label="Label" checked={isEnabled} onChange={event => setIsEnabled(event.target.checked)}>…</DynamicFieldset>
```

## Uncontrolled
- Pass `defaultChecked` (optional, off by default) and let the component manage its own state.
- Use it when nothing else needs to read it.

```jsx
<DynamicFieldset id="fieldset" label="Label" defaultChecked>…</DynamicFieldset>
```

## Do
- Use it for a group of optional fields that the user turns on with a switch.

## Don't
- Don't use a DynamicFieldset for a group of fields that is always shown. Use a [Fieldset](?path=/docs/components-fieldset--docs) instead.
- Don't use a DynamicFieldset for a single yes/no option with no fields under it. Use a [FieldBoolean](?path=/docs/components-fieldboolean--docs) instead.

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum). Never write a full sentence. It names both the group and the switch.
- Write the `helper` text in sentence case.

## Accessibility
- An icon-only [Button](?path=/docs/components-button--docs) in `buttons` must have an `aria-label` that describes the action.
- Each field inside still needs its own accessible name. Follow the accessibility rules of [Field](?path=/docs/components-field--docs) and [FieldBoolean](?path=/docs/components-fieldboolean--docs).
