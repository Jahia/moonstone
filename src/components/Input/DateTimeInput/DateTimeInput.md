A date / date-time / zoned-date-time field: a date field that can be typed into or filled from the
calendar it opens, plus an optional time field and timezone selector depending on the mode.

## Modes

`type` selects the fields rendered and the emitted value:

- `'date'` — calendar only → `Temporal.PlainDate`
- `'dateTime'` — calendar + time → `Temporal.PlainDateTime`
- `'zonedDateTime'` — calendar + time + timezone → `Temporal.ZonedDateTime`

## Value

`value` / `defaultValue` accept the mode's `Temporal` instance, an ISO string (e.g. `'2026-06-19'`,
`'2026-06-19T14:30'`, `'2026-06-19T14:30+02:00[Europe/Paris]'`), or `null`. Zoned mode additionally
accepts `Date`, `Temporal.Instant`, and ISO instants such as `'2026-06-19T12:30:00Z'`; values without
an IANA annotation are displayed in the system timezone. `onChange` always emits the mode's
`Temporal` instance (or `null`) — never a string. Pass `defaultValue={null}` to start empty; with no
`defaultValue`, an uncontrolled field starts at the current date/time.

When the date field holds a value it shows a clear (reset) button. Clearing empties the whole value —
date, time, and zone — and `onChange` emits `null`, since a date-time has no meaning without its date.

## Manual entry

The date can also be typed, in the order the field displays it (from `locale` / `dateFormat`). Any
non-digit separates the fields (`30/03/2026`, `30-3-26`) and a two-digit year is read as 20xx.

The entry is committed on `Enter` or when the field loses focus. A date that can't be read, or one
the calendar disables, is dropped: the field falls back to the stored value. Emptying the field
clears the whole value, like the clear button.

## Rejected entry

Typed text that cannot be turned into an available date — unreadable, or readable but ruled out by
the calendar constraints — emits nothing: the value stays as it was and the field falls back to
displaying it. `onInvalidInput(event, rawText)` reports it with the text as typed, and `isError`
draws the field in its error state. Moonstone reports; the message is the consumer's, typically
through `Field`'s `hasError` / `errorMessage`.

## Controlled and uncontrolled

Provide `value` + `onChange` for controlled (`onChange` is required), or `defaultValue` for uncontrolled.

## Calendar constraints

- `minDate` / `maxDate` — inclusive bounds; dates outside are disabled.
- `disabledDates` — individual dates to disable.
- `disabledDateRanges` — `{from, to}` ranges to disable (inclusive).
- `disabledDaysOfWeek` — recurring weekdays to disable (`0` = Sunday … `6` = Saturday), e.g. `[0, 6]` for weekends.

Each accepts a `Temporal.PlainDate` or an ISO date string.

## Calendar header

The header shows a years dropdown whenever the navigable range spans more than one year.
`isShowMonthDropdown` adds a months dropdown next to it; without it the month is plain text.
Both dropdowns respect `minDate` / `maxDate`: out-of-range entries are disabled, not hidden.

## Localization

`locale` (BCP 47) drives the calendar text, the displayed date format, and the first day of the week.
When omitted, the browser locale is used. `dateFormat` (LDML, e.g. `'dd/MM/yyyy'`) overrides only the
field's date order — name tokens still render localized via `locale`. `weekStartsOn` overrides the
locale-derived first day. `i18n` overrides the calendar action labels (today / next / previous month)
and the local-time caption prefix.

## Zoned mode

In `'zonedDateTime'` the timezone defaults to the system zone until changed. When the selected zone
differs from the system zone, a caption shows the equivalent local time.

## Sub-component props

`timeInputProps` and `timezoneSelectorProps` forward additional props to the internal `TimeInput`
(`dateTime` / `zonedDateTime`) and `TimezoneSelector` (`zonedDateTime`).
