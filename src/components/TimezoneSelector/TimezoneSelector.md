Select an IANA timezone (e.g. `'Europe/Paris'`) from a searchable dropdown. Options are grouped by region and labelled with their current UTC offset.

## Value

`value` / `defaultValue` are IANA timezone identifiers (strings). `onChange` emits the selected identifier. The selector always has a value and cannot be cleared.

## Controlled and uncontrolled

Provide `value` + `onChange` for controlled, or `defaultValue` for uncontrolled.

## Specifications

The list is the full IANA timezone set (from `Intl.supportedValuesOf`), grouped by region (`Europe`, `America`, …) and sorted alphabetically; the dropdown's search handles the volume. Each option shows the offset for the `referenceDate` (e.g. `Paris (UTC +01:00)`) — pass `referenceDate` (a `Temporal.PlainDate` or ISO date string) so offsets reflect the right day, since they vary with DST. `UTC` is listed first, in its own group.
