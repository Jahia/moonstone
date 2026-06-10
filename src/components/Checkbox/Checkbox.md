A box the user toggles on or off. Use it for binary choices within a form, or for
selecting items from a set. Supports a third, indeterminate state.

## When to use
- Opting in/out of a single option in a form (e.g. "I agree").
- Selecting one or more items from a list (one checkbox per item).
- A "select all" control that can be partly selected → use `indeterminate`.

## When NOT to use
- An immediate on/off setting that applies right away → use **Switch**.
- Several related checkboxes that share one label/validation → use **CheckboxGroup**.
- Mutually exclusive choices (pick exactly one) → use **RadioGroup**.

## Usage
```jsx
import {Checkbox} from '@jahia/moonstone';

// Controlled
<Checkbox
    checked={agreed}
    value="agree"
    onChange={(e, value, checked) => setAgreed(checked)}
/>

// Indeterminate (e.g. "select all" when only some are selected)
<Checkbox checked={allChecked} indeterminate={someChecked && !allChecked} onChange={…}/>
```

- Controlled = `checked` + `onChange`; uncontrolled = `defaultChecked`.
- `size`: `default` · `big`. States: `isDisabled`, `isReadOnly`.
- `onChange(event, value, checked)` gives you the value and the new checked state.

## Accessibility
- Pair with a label (via **Field** or an associated `<label>`).

## Related
- **CheckboxGroup** (grouped set), **Switch** (immediate setting), **RadioGroup** (exclusive choice).
