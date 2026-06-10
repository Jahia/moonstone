A single-line text field for collecting short free-form text from the user. Supports
controlled and uncontrolled usage, a leading icon, and an optional clear button.

## When to use
- Capturing short text (name, title, search term, etc.).
- Inside a form — wrap it in **Field** to get a label, helper text, and error message.

## When NOT to use
- Multi-line text → use **Textarea**.
- Numbers with stepping/validation → use **NumberInput** (`@jahia/moonstone`).
- A search box → use **SearchInput** (the `variant="search"` prop is deprecated).
- Choosing from a fixed list → use **Dropdown** (it replaces the native `<select>`).

## Usage
```jsx
import {Input, Field} from '@jahia/moonstone';

// Controlled, inside a Field for label + error
<Field label="Email" id="email" hasError={!valid} errorMessage="Enter a valid email">
    <Input id="email" value={email} onChange={e => setEmail(e.target.value)}/>
</Field>

// With a clear button
<Input defaultValue="" onClear={() => setValue('')} isShowClearButton/>
```

- `size`: `default` · `big`.
- States: `isDisabled`, `isReadOnly` (still submittable), `focusOnField` (autofocus).
- Controlled = pass `value` + `onChange`; uncontrolled = pass `defaultValue`.

## Accessibility
- Always provide a label — use **Field**, or an `aria-label` if standalone.

## Related
- **Field** (label/error/helper wrapper), **Textarea**, **NumberInput**, **SearchInput**, **Dropdown**.
