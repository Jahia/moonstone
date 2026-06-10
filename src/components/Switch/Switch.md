A toggle for turning a single setting on or off, where the change takes effect
immediately (no Save step). Supports controlled and uncontrolled usage.

## When to use
- An immediate on/off setting (e.g. "Enable notifications") that applies on toggle.

## When NOT to use
- Selecting items or opting into a form choice that's submitted later → use **Checkbox**.
- A toolbar button that holds a pressed/active state (e.g. bold, italic) → use **ButtonToggle**.
- Picking one of several mutually exclusive values → use **RadioGroup** / **Dropdown**.

## Usage
```jsx
import {Switch} from '@jahia/moonstone';

// Controlled
<Switch
    checked={enabled}
    value="notifications"
    onChange={(e, value, checked) => setEnabled(checked)}
/>

// Uncontrolled
<Switch defaultChecked onChange={(e, value, checked) => save(checked)}/>
```

- Controlled = `checked` + `onChange`; uncontrolled = `defaultChecked`.
- `onChange(event, value, checked)` reports the new state.
- State: `isDisabled`.

## Accessibility
- Provide a label describing what the switch controls (via **Field** or `aria-label`).

## Related
- **Checkbox** (selection / deferred submit), **ButtonToggle** (toolbar toggle with a pressed state).
