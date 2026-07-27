# DateTimeInput / TimeInput / TimezoneSelector — refactor plan

Consolidated plan from the API/quality review of the date-time family
(`DateTimeInput`, `TimeInput`, `TimezoneSelector`) and their shared helpers.

Scope: agreed changes only. Each task lists **Changes**, **Why**, **Decision**, and the
**Files & functions** involved.

**Terminology**
- **Step** — a unit of work, run strictly in order (Step 01 first). Only steps are numbered.
- **Task** — a named piece of work inside a step. Tasks are never numbered.

Ground rules (from `CLAUDE.md`):
- React 18 only.
- `src/index.ts` and exported types are a semver-published public API — additive/backward-compatible
  unless a breaking change is explicitly signed off and called out.
- A behavior/props change updates every file of the component contract (code, types, spec, stories, docs).
- Done = `yarn lint`, `yarn tsc`, and the touched components' tests all pass.

---

## Status — where we are

This section is the single source of truth for progress. A step is **Done** only when every file
its tasks list is updated and `yarn lint` + `yarn tsc` + the touched components' tests pass.
Nothing is committed — all work sits in the working tree.

| Step | Tasks | Status |
|------|-------|--------|
| 01 | Component docs · helper test safety net | ✅ Done |
| 02 | Native segmented time entry · keyboard support | ⬜ Not started |
| 03 | Browser-locale default · warn-once | ⬜ Not started |
| 04 | Value-level clear · `isReadOnly` propagation | ⬜ Not started |
| 05 | Remove the `TimezoneInput` alias | ⬜ Not started |

---

## Step 01 — Documentation & test safety net — ✅ Done

Delivered (working tree, uncommitted):
- `TimeInput.md`, `DateTimeInput.md` — new docs, each wired into its story via `notes.markdown`.
- `timeHelpers.spec.tsx` — new; 14 characterization tests pinning the **current** helper behavior.
  The cases Step 02 will change are marked `// Changes: native entry` (e.g. `123 → 12:3`, `9 → ''`).
- `ControlledDateTimeInput.tsx` — lint fix only (react-day-picker `camelcase` disable directive).

Not done here (intentionally): **no runtime behavior changed** — time entry still pads on the right
(`123 → 12:30`) and there is no keyboard navigation yet. Both start in Step 02.

Deviation from the original plan text: the spec file is `timeHelpers.spec.tsx`, not `.spec.ts` — the
repo test glob is `src/**/*.spec.tsx`. The optional extra helper specs (`calendarHelpers`,
`dateTimeValue`, `timezoneHelpers`) are deferred; not blocking.

### Task — Component docs & helper test safety net

**Changes**
- Add `DateTimeInput.md` and `TimeInput.md` (docs contract per `CLAUDE.md`).
- Add `timeHelpers.spec.tsx`; ideally also `calendarHelpers.spec.tsx`, `dateTimeValue.spec.tsx`,
  `timezoneHelpers.spec.tsx`.

**Why**
- The two richest components have no `.md`. The dense pure helpers are only tested indirectly;
  direct specs are where edge cases (e.g. the native-entry rewrite) surface — and that rewrite needs
  the safety net first.

**Files & functions**
- New: `DateTimeInput.md`, `TimeInput.md`, `timeHelpers.spec.tsx` (+ optional helper specs).

---

## Step 02 — TimeInput native entry & keyboard — ⬜ Not started

### Task — Native segmented entry matching `<input type=time>`

**Changes**
- Replace "filter while typing + pad-on-blur" with native per-segment entry. Each of HH/MM
  accumulates digits against its `min`/`max`; a digit that cannot be a tens digit commits as `0d`
  and auto-advances; a lone minute digit is the units (padStart) and shifts left when a second
  digit arrives.
- Emit only on a complete/valid entry; an emptied field still emits `null`.

**Why**
- Today `3`–`9` (24h) / `2`–`9` (12h) as the first hour digit are silently dropped, so `930`
  cannot produce `09:30`. Native segmented entry removes the dead keystrokes and is predictable.

**Decision**
- Match native: `91 → 09:01`, `930 → 09:30`, `143 → 14:03`, `1430 → 14:30`.
  This intentionally replaces the old "pad minutes on the right" rule (`14:3 → 14:30`).

**Files & functions**
- `timeHelpers.ts` — rewrite `filterTimeInputValue` / `completeTimeInput` (or replace with a
  segment reducer); `splitTime` / `parseTimeInputValue` reused.
- `ControlledTimeInput.tsx` — `draft` state, `onChange` / `onBlur`, `emitChange`.
- `TimeInput.types.ts` — update `timeFormat` / `onChange` docs.
- `TimeInput.spec.tsx` — flip the "drop `3`–`9`" and pad-right tests.
- `timeHelpers.spec.tsx` — flip the `// Changes: native entry` characterization cases to the target.
- `TimeInput.md` — update the entry section.
- `DateTimeInput.spec.tsx` — re-verify the time-entry cases (~L101–117, L202–216).

### Task — Keyboard support (native parity)

**Changes**
- `ArrowUp` / `ArrowDown`: increment/decrement the segment the caret is in, wrapping **within**
  the segment (`23→00`, `59→00`, 12h `12→01`) with no carry between segments. Updates the value
  immediately (not on blur).
- `ArrowLeft` / `ArrowRight`: move the caret/selection between the hours and minutes segments.
- Meridiem stays driven by its own `Dropdown`; hour arrows do not auto-flip AM/PM.

**Why**
- Core `<input type=time>` behavior and expected for accessible time entry; without it the field
  is keyboard-poorer than the native control matched by the entry task.

**Decision**
- Per-segment wrap, immediate emit, caret defines the active segment.
- **First Up/Down on an empty field seeds `00:00`.**

**Files & functions**
- `timeHelpers.ts` — new `incrementTimeSegment(value, segment, delta, format)` + caret→segment helper.
- `ControlledTimeInput.tsx` — `onKeyDown`: Left/Right set `selectionStart`/`selectionEnd` to the
  target segment; Up/Down increment; reconcile with `draft` (complete the draft, then increment);
  preserve the caret/selection on the active segment.
- `TimeInput.types.ts` docs, `TimeInput.spec.tsx`, `TimeInput.md` — cover Left/Right/Up/Down and the
  empty-field seed. Add one `DateTimeInput` integration test (inherited via the internal `TimeInput`).

---

## Step 03 — DateTimeInput formatting — ⬜ Not started

### Task — Default to the browser locale, resolved once

**Changes**
- Remove the `locale = 'en'` default; resolve an omitted locale to a concrete string
  (`new Intl.DateTimeFormat().resolvedOptions().locale`) and use it for text formatting, the
  DayPicker `formatters`, `getWeekStartsOn`, and the local-time caption.
- Pin an explicit `locale` on the snapshot stories so visual tests stay deterministic; regenerate
  affected snapshots.

**Why**
- The JSDoc promises "browser locale when omitted" but the code hardcodes `en`. Passing raw
  `undefined` through isn't enough: `formatters={locale ? … : undefined}` disables localization
  (DayPicker falls back to English) and `getWeekStartsOn(undefined)` returns Monday, so week-start
  and captions wouldn't follow the browser. Resolving once fixes all paths consistently.

**Decision**
- Default = browser locale, resolved to a concrete string; week-start derives from that same locale.

**Files & functions**
- `ControlledDateTimeInput.tsx` — add `resolvedLocale`; use it in the `formatPlainDate` call,
  `formatters`, `weekStartsOn ?? getWeekStartsOn(...)`, and the `localTimeFormatted` `Intl.DateTimeFormat`.
- `calendarHelpers.ts` — `getWeekStartsOn` / `formatPlainDate` now always receive a concrete locale.
- `DateTimeInput.types.ts` — `locale` doc now accurate; fix the inaccurate `weekStartsOn @default 1`.
- `DateTimeInput.stories.tsx` + `__screenshots__/…/DateTimeInput/*` — pin locale on snapshot stories, regenerate.

### Task — Invalid-`dateFormat` warning: warn once, all environments

**Changes**
- Keep the warning but emit it **once per invalid pattern**, in **all environments**, and off the
  render path (currently `formatPlainDate` runs it on every render).

**Why**
- Catches the likely footgun (dayjs-style `'YYYY-MM-DD'` silently falling back to the locale format)
  without the per-render console noise.

**Decision**
- Once per bad pattern, all envs. Dedupe via a module-level `Set` of already-warned patterns.

**Files & functions**
- `calendarHelpers.ts` — `formatPlainDate` / `isValidDateFormat`: pull the warn out of the hot path,
  guard with a module-level `Set`. (Also fold the `getCalendarDisabledMatchers` 5-param signature
  into an options object here to clear the pre-existing `max-params` warning.)
- `DateTimeInput.spec.tsx` (~L833) — existing test still passes (patterns are distinct); note the
  module-level `Set` persists across tests in the file, so keep patterns distinct or clear it between tests.

---

## Step 04 — DateTimeInput state & props — ⬜ Not started

### Task — A single value-level clear

**Changes**
- Add one clear affordance on the **date field** that emits `null` and empties date + time and
  resets the zone to the system fallback.
- No independent time-clear inside `DateTimeInput` (clearing the time field text still resolves to
  midnight, unchanged).
- Standalone `TimeInput` may expose its own optional clear → `null` (self-contained).

**Why**
- `DateTimeInput` currently cannot be emptied from the UI (`onClear` omitted, date field has a
  no-op `onChange`), and an uncontrolled field starts pre-filled with "now" — so an optional/nullable
  date is impossible. The date is the value's spine (no date ⇒ `null`), so clearing it is the one
  clear that maps cleanly onto the value type; a time without a date isn't representable.

**Decision**
- One clear, on the date field, clears the whole value. `BaseInput` may render the button, but
  `DateTimeInput` owns the semantics (`onClear → emit null`).

**Files & functions**
- `DateTimeInput.types.ts` — stop omitting `onClear` in `DateTimeInputSharedProps`; document clear semantics.
- `ControlledDateTimeInput.tsx` — wire `onClear` on the date `BaseInput` to `emitChange` producing
  `null`; reset `fallbackZone`.
- `DateTimeInput.spec.tsx` — add clear-to-null coverage.
- (optional) `ControlledTimeInput.tsx` — standalone clear button.

### Task — `isReadOnly` / `isDisabled` propagate uniformly

**Changes**
- Forward `isReadOnly` to **all** inner controls so it mirrors `isDisabled`:
  - Date field `BaseInput` — currently gets `isDisabled` only; add `isReadOnly`.
  - `TimezoneSelector` — currently gets `isDisabled` only; add `isReadOnly`.
  - `TimeInput` — already gets both.
- `TimezoneSelector` maps `isReadOnly` to disabled internally (see Decision).

**Why**
- Passing `isReadOnly` to `DateTimeInput` should make every sub-control reflect it, exactly like
  `isDisabled`. The trigger stays a plain calendar-driven field unless the consumer opts into
  `isReadOnly` — so this doesn't add read-only styling by default.

**Decision**
- `isReadOnly` and `isDisabled` propagate to date + time + timezone uniformly.
- `Dropdown` has no read-only concept; **`TimezoneSelector` maps `isReadOnly` → `isDisabled`**
  (interim, no `Dropdown` change). Read-only and disabled therefore look identical on the timezone
  selector — accepted.

**Files & functions**
- `ControlledDateTimeInput.tsx` — add `isReadOnly` to the date `BaseInput` and to `TimezoneSelector`.
- `TimezoneSelector.types.ts` — accept `isReadOnly`.
- `ControlledTimezoneSelector.tsx` — apply `isDisabled={isDisabled || isReadOnly}` to the `Dropdown`.
- `DateTimeInput.spec.tsx` — add `isReadOnly` equivalents of the existing `isDisabled` tests (~L709, L723).

---

## Step 05 — Remove the duplicate public name — ⬜ Not started

### Task — Drop the `TimezoneInput` alias

**Changes**
- Delete the `TimezoneInput` / `TimezoneInputProps` alias exports; keep only `TimezoneSelector` /
  `TimezoneSelectorProps`.

**Why**
- Two public names for one component means both must be supported forever and invites divergent
  usage. The canonical name is `TimezoneSelector` (matches all internal naming). The component is
  still `beta`, so removing the alias now is low-risk.

**Decision**
- `TimezoneSelector` is canonical; drop the alias.

**Files & functions**
- `TimezoneSelector/index.ts` — remove the two alias export lines.

---

## Decision log (resolved)

- Time entry matches native `<input type=time>`; minute is padStart/segmented (`91 → 09:01`).
- Keyboard: Up/Down increment the caret's segment (per-segment wrap), Left/Right switch segments;
  first Up/Down on an empty field seeds `00:00`.
- One value-level clear on the date field emits `null`; no independent time-clear inside `DateTimeInput`.
- Default `locale` = browser locale, resolved once; week-start follows it.
- `isReadOnly` propagates like `isDisabled`; `TimezoneSelector` maps read-only → disabled (no `Dropdown` change).
- Canonical name is `TimezoneSelector`; the `TimezoneInput` alias is removed.
- Invalid-`dateFormat` warning fires once per pattern, all environments.
