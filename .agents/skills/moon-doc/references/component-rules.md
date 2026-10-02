# Component rules

Rules for choosing between components, shared by a group of components. Each rule is written
here once; the docs of the group state it in their Do and Don't, with the same values. Name what
is counted (options, or selected values).

## Selection

RadioGroup, CheckboxGroup, Dropdown, ListSelector.

- **By the number of options:** 3 or fewer, **RadioGroup** (one value) or **CheckboxGroup**
  (several values); 4 or more, **Dropdown** (one or several values).
- **By the number of selected values:** 10 or more, **ListSelector**; fewer than 10, **Dropdown**
  in multiple selection.
- Ordering is a ListSelector capability: mention it in its Do only, never as a routing criterion
  in another component's Don't.

## On/off

Switch, the checkbox components (Checkbox, CheckboxItem, CheckboxGroup, FieldBoolean),
ButtonToggle, and Button.

- **Switch** for a single setting that applies immediately, without a save step.
- A checkbox component for a choice the user submits later with a form.
- **ButtonToggle** for a toolbar button that holds a pressed state, such as bold or italic.
- A Switch is compared only with the checkbox components, with ButtonToggle (both hold a state),
  and with Button (often misused as a toggle). Never with a selection or navigation component.
