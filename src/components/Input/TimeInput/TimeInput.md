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

Type the time as digits, segment by segment, like the native `<input type=time>`. A digit that
can't start a two-digit segment auto-advances, and a lone minute digit is its units:
`9` → `09`, `91` → `09:01`, `143` → `14:03`, `1430` → `14:30`. A partial entry is completed on blur
(`9` → `09:00`) and is never emitted while typing. Clearing the field and blurring emits `null`.

## Keyboard

`ArrowUp` / `ArrowDown` step the segment the caret is in, wrapping within it (minute `59 → 00`,
hour `23 → 00`, 12h `12 → 01`); the value updates immediately. On an empty field the first step
seeds `00:00`. `ArrowLeft` / `ArrowRight` move between the hour and minute segments.

Forward extra props to the AM/PM dropdown (12h) via `meridiemDropdownProps`.
