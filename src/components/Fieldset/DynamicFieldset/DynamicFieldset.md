## Example
```jsx
import {DynamicFieldset, Field, FieldSelector, Input} from '@jahia/moonstone';

<DynamicFieldset
    id="expiration"
    label="Expiration"
    helper="Unpublishes the page on the chosen date."
    checked={hasExpiration}
    onChange={event => setHasExpiration(event.target.checked)}
>
    <Field id="expiration-date" label="Expiration date">
        <FieldSelector selector={<Input aria-label="Expiration date" size="big" value={expirationDate} onChange={handleDateChange}/>}/>
    </Field>
</DynamicFieldset>
```

## Controlled & uncontrolled
- Controlled: pass `checked` and `onChange`. You own the state, and `onChange(event)` gives you the new state through `event.target.checked`.

  ```jsx
  <DynamicFieldset id="expiration" label="Expiration" checked={hasExpiration} onChange={event => setHasExpiration(event.target.checked)}>…</DynamicFieldset>
  ```

- Uncontrolled: pass `defaultChecked` (optional, off by default) and let the component manage its own state.

  ```jsx
  <DynamicFieldset defaultChecked id="expiration" label="Expiration">…</DynamicFieldset>
  ```

- Use controlled when the switch state is saved with the form or drives other UI. Use uncontrolled when nothing else needs to read it.
- Don't mix the two modes. Passing both `checked` and `defaultChecked` is not supported.
- When the switch is off, the fields are removed from the page, not only hidden. Keep their values in your own state if they must survive a toggle.

## Do
- Use it for a group of optional fields that the user turns on with a switch, such as settings that only apply once a feature is enabled.

## Don't
- Don't use a DynamicFieldset for a group of fields that is always shown. Use a **Fieldset** instead.
- Don't use a DynamicFieldset for a single yes/no option with no fields under it. Use a **FieldBoolean** instead.

## Voice and tone
- Write the `label` in sentence case, using a few words at most (3 maximum), such as "Expiration". Never write a full sentence. It names both the group and the switch.
- Write the `helper` text in sentence case.

## Accessibility
- An icon-only **Button** in `buttons` must have an `aria-label` that describes the action.
- Each field inside still needs its own accessible name. Follow the accessibility rules of **Field** and **FieldBoolean**.
