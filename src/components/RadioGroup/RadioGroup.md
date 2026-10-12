## Example
```jsx
import {RadioGroup, RadioItem} from '@jahia/moonstone';

<RadioGroup name="visibility" role="radiogroup" aria-label="Visibility">
    <RadioItem id="visibility-public" label="Public" value="public"/>
    <RadioItem id="visibility-private" label="Private" value="private"/>
</RadioGroup>
```

## Controlled
- Pass `value` and `onChange`. You own the state, and `onChange(event, value)` gives you the value of the item the user selected.
- Use it when the choice is read or driven elsewhere.
- Don't mix the two modes. Passing both `value` and `defaultValue` is not supported.
- In both modes, one item is always selected: the first one when no value is given.

```jsx
<RadioGroup name="visibility" value={visibility} onChange={(event, value) => setVisibility(value)}>…</RadioGroup>
```

## Uncontrolled
- Pass `defaultValue` (optional) and let the component manage its own state.
- Use it when nothing else needs it.

```jsx
<RadioGroup name="visibility" defaultValue="public">…</RadioGroup>
```

## Do
- Use it to let the user choose exactly one option out of 3 or fewer, all visible at once.
- Use it for a choice that always has an answer, since one option is always selected.

## Don't
- Don't use a RadioGroup when the user can select several options. Use a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs) instead.
- Don't use a RadioGroup for a single option. It renders nothing with fewer than two items. Use a [CheckboxItem](?path=/docs/components-checkboxitem--docs) instead.
- Don't use a RadioGroup for 4 options or more. Use a [Dropdown](?path=/docs/components-dropdown--docs) instead.

## Accessibility
- The group renders no label of its own. Give it an accessible name with `aria-labelledby`, pointing at its visible label, or `aria-label`, together with `role="radiogroup"`.
