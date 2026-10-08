## Example
```jsx
import {Switch} from '@jahia/moonstone';

<Switch aria-label="Enable notifications"/>
```

## Controlled & uncontrolled

Use one mode or the other. Do not mix `checked` (controlled) with `defaultChecked` (uncontrolled).

- **Uncontrolled** (default): the component tracks its own on/off state. Optionally set the
  starting state with `defaultChecked`. Use it when nothing else needs to read or drive the state.
  ```jsx
  <Switch aria-label="Enable notifications" defaultChecked onChange={(event, value, checked) => saveSetting(checked)}/>
  ```
- **Controlled**: the parent owns the state through `checked`, updated in `onChange`. Use it when
  the state is read or driven elsewhere.
  ```jsx
  const [isEnabled, setIsEnabled] = useState(false);

  <Switch
      aria-label="Enable notifications"
      checked={isEnabled}
      onChange={(event, value, checked) => setIsEnabled(checked)}
  />
  ```

In both modes, `onChange(event, value, checked)` receives the `value` prop as its second argument
and the new on/off state as its third.

## Do
- Use it to turn a single setting on or off when the change applies immediately, without a save step.
- Use it for a preference that stays on until the user turns it off, such as notifications.

## Don't
- Don't use a Switch for a choice the user submits later with a form. Use a [CheckboxItem](?path=/docs/components-checkboxitem--docs) instead, or a [FieldBoolean](?path=/docs/components-fieldboolean--docs) for a form field with a label, a helper text, or an error message.
- Don't use a Switch for a toolbar button that holds a pressed state, such as bold or italic. Use a [ButtonToggle](?path=/docs/components-buttontoggle--docs) instead.
- Don't use a Switch to trigger a one-shot action. Use a [Button](?path=/docs/components-button--docs) instead.

## Accessibility
- The Switch has no visible label. Give it an accessible name with `aria-label` or `aria-labelledby` that names the setting it controls.
- Enter toggles the Switch, as Space does.
