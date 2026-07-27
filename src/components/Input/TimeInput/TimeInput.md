A time-of-day field displaying `HH:MM`, in 24-hour (default) or 12-hour format.

## Value

`value` / `defaultValue` accept a `Temporal.PlainTime`, an ISO time string (e.g. `'14:30'`), or `null`.
`onChange` always emits a `Temporal.PlainTime` (or `null` when the field is emptied) — never a string.

## Controlled and uncontrolled

Provide `value` + `onChange` for controlled, or `defaultValue` for uncontrolled.

## Format

`timeFormat="24h"` (default) shows `HH:MM`. `timeFormat="12h"` shows `hh:MM` with an AM/PM dropdown
to the right of the field. `timeFormat` only affects display; the emitted `Temporal.PlainTime` is unaffected.

## Entry

Type the time as digits; a partial entry is completed to a valid time on blur (`9` → `09:00`,
`14:3` → `14:30`). A partial entry is never emitted — the change fires only once the value is a
complete, valid time. Clearing the field and blurring emits `null`.

Forward extra props to the AM/PM dropdown (12h) via `meridiemDropdownProps`.
