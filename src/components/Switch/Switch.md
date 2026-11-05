## Example
```jsx
import {Switch} from '@jahia/moonstone';

<Switch aria-label="Setting"/>
```

## Controlled
- Pass `checked` and `onChange`. You own the state, and `onChange(event, value, checked)` gives you the `value` prop as its second argument and the new on/off state as its third.
- Use it when the state is read or driven elsewhere.
- Don't mix the two modes. Passing both `checked` and `defaultChecked` is not supported.

```jsx
<Switch aria-label="Setting" checked={isOn} onChange={(event, value, checked) => setIsOn(checked)}/>
```

## Uncontrolled
- Pass `defaultChecked` (optional) and let the component manage its own state.
- Use it when you only save the change in `onChange`.

```jsx
<Switch aria-label="Setting" defaultChecked onChange={(event, value, checked) => saveSetting(checked)}/>
```

## Do
- Use it to turn a single setting on or off when the change applies immediately, without a save step.
- Use it for a preference that stays on until the user turns it off.

## Don't
- Don't use a Switch for a choice the user submits later with a form. Use a [CheckboxItem](?path=/docs/components-checkboxitem--docs) instead, or a [FieldBoolean](?path=/docs/components-fieldboolean--docs) for a form field with a label, a helper text, or an error message.
- Don't use a Switch for a toolbar button that holds a pressed state, such as bold or italic. Use a [ButtonToggle](?path=/docs/components-buttontoggle--docs) instead.
- Don't use a Switch to trigger a one-shot action. Use a [Button](?path=/docs/components-button--docs) instead.

## Accessibility
- The Switch has no visible label. Give it an accessible name with `aria-label` or `aria-labelledby` that names the setting it controls.
- Enter toggles the Switch, as Space does.
