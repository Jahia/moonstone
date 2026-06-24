# DateTimeInput / TimeInput / TimezoneSelector — Refactor

> **Status:** Stages 0–4 complete & verified. Refactor done (pending final commit).
> **Branch:** `date-selector-bis`
> **Owner:** Félix Vallé
> **Last updated:** 2026-06-23
>
> This is the working document for the date/time component refactor. It tracks the
> context, the decisions we've locked, and the staged plan. Keep it updated as stages
> land so any future session (human or agent) can pick up without re-deriving everything.

---

## 1. Goal

Simplify and refactor three components that share one domain (date / time / zone):

- **`TimeInput`** — standalone masked text field for a wall-clock time.
- **`TimezoneSelector`** — standalone dropdown of IANA zones with live UTC offsets.
- **`DateTimeInput`** — composite that can manage **Date**, **Date + Time**, or **Date + Time + Timezone**.

Design intent:
- `TimeInput` and `TimezoneSelector` are usable **standalone**.
- `DateTimeInput` composes them and is the flagship.
- **Rely on Temporal** (`temporal-polyfill`) for all date logic.

Constraints:
- None of these components is released yet → **we can change any API freely**.
- Respect React best practices and **moonstone's existing conventions**.
- Each stage is reviewed and validated before the next begins.

---

## 2. Current architecture (pre-refactor)

| Component | Value today | Notes |
|---|---|---|
| `TimeInput` | `string "HH:mm"` | masked input + separate `meridiem` state for 12h |
| `TimezoneSelector` | `string` (IANA id) | 3-file controlled/uncontrolled split + `referenceDate: Date` |
| `DateTimeInput` | `{ date: Date \| null, timezone?: string \| null }` | **uncontrolled-only** (`defaultValue` + `useState`) |

Shared helpers in `src/components/Input/shared/`:
- `dateTime.date.ts`, `dateTime.time.ts`, `dateTime.timezone.ts`, `dateTime.types.ts`
- Re-exported publicly via `src/DateTime.ts`.

### Key files
- `src/components/Input/DateTimeInput/DateTimeInput.tsx` (+ `.types.ts`, `.spec.tsx`, `.stories.tsx`, `.module.scss`)
- `src/components/Input/TimeInput/TimeInput.tsx` (+ `.types.ts`, …)
- `src/components/TimezoneSelector/{TimezoneSelector,ControlledTimezoneSelector,UncontrolledTimezoneSelector}.tsx` (+ `.types.ts`, …)
- `src/components/Input/shared/dateTime.{date,time,timezone,types}.ts`
- `src/DateTime.ts` (public barrel for the shared helpers)

---

## 3. Root-cause analysis (why it's hard to maintain)

**The core problem is a category error in the value type.** `DateTimeInput` stores a JS
`Date`, but the thing it represents is a *wall-clock date + wall-clock time + a separate
zone*. A `Date` is an **instant** (absolute UTC milliseconds), not a wall-clock value.

Almost every shared helper exists only to fight that mismatch:
- `getNormalizedDate` strips to local midnight; `getCalendarDisplayMonth` rebuilds at
  **noon**; `getTimezoneReferenceDate` rebuilds at **UTC noon** — three different
  "what time of day do we pretend it is" hacks to dodge DST/offset off-by-ones that
  *only exist because we use `Date`*.
- Time round-trips **`Date → "HH:mm" → Date`** on every keystroke.
- `getCanonicalDate` converts `Date → Temporal.PlainDate` just to read fields back —
  Temporal is used as a scratchpad and discarded.

Result: the worst of both worlds — `Date` is the source of truth, but Temporal is
reached for mid-operation and thrown away.

Temporal's types map **exactly** onto the three modes (`PlainDate` / `PlainDateTime` /
`ZonedDateTime`). Making them the stored value deletes the normalization zoo, the string
round-trip, and `getCanonicalDate`/`getNormalizedDate`/`getTimezoneReferenceDate`. The
only irreducible conversion left is `PlainDate ↔ Date` at the react-day-picker boundary —
one localized adapter, not smeared across the file.

### Secondary issues
1. **`DateTimeInput` is uncontrolled-only** — inconsistent with the rest of the library
   and awkward for forms. The flagship composite most needs controlled mode.
2. **State that should be derived is stored as parallel state:**
   - `meridiem` (AM/PM) is derivable from the time (`hour < 12 ? 'AM' : 'PM'`).
   - `displayedMonth` + `useEffect` + `lastSelectedDateTimestampRef` is the
     "derived-state-in-useState-resynced-by-effect" anti-pattern React docs warn against.
3. **Module-level mutable caches** in `dateTime.timezone.ts`
   (`timezoneDropdownDataCache`, `defaultTimezonesCache`) keyed partly by date → grow
   unbounded across days, awkward to test. Replace with `useMemo`.

### Explicitly NOT a problem (corrected during review)
- The **3-file Controlled/Uncontrolled/dispatcher split** in `TimezoneSelector` is the
  **universal house pattern** (`BaseInput`, `Accordion`, `RadioGroup`, `TreeView`,
  `ButtonToggle`, `CheckboxItem`…). Dispatch on `typeof <controlledProp> === 'undefined'`.
  `value={null}` = controlled-with-null, omitted = uncontrolled — a clean contract.
  **Keep this pattern. Conform to it; don't replace it with a hook.**
- `filterTimeInputValue`'s longest-valid-prefix masking is *inherent* complexity of a
  masked text field. Leave it.

---

## 4. Decision log

| # | Decision | Status | Rationale |
|---|---|---|---|
| D1 | **Public value type = Temporal types**, discriminated by mode | ✅ Locked | Zero conversion, self-validating, best date-math ergonomics. See §5. |
| D2 | **Accept both, emit one**: inputs accept `Temporal.* \| string` (ISO); `onChange` always emits canonical `Temporal.*` | ✅ Locked | `Temporal.*.from()` already parses strings → near-free. Backend ISO interop in, typed value out, `.toString()` gives ISO back. |
| D3 | **Re-export `Temporal` from moonstone** (`export {Temporal} from 'temporal-polyfill'`) | ✅ Locked | Consumers install nothing, guaranteed instance-compatible (no "two polyfill copies"). Native Temporal (shipping now) takes over transparently later. |
| D4 | `DateTimeInput` supports **controlled + uncontrolled** via the house 3-file split | ✅ Locked | Consistency with library; forms need controlled. |
| D5 | **One canonical value is the only real state; derive the rest.** Only transient in-progress input buffers stay local (inside `TimeInput`) | ✅ Locked (amended) | Removes the month ref+effect and cross-component sync. **Correction (Stage 1):** the meridiem can*not* be fully derived in the standalone `TimeInput` — see D5a. |
| D5a | In the standalone `TimeInput` (12h), **meridiem stays local input state** | ✅ Locked | While typing there is no committed time yet, and AM/PM is a user choice that combines with the digits to *produce* the time — so it can't be derived from a value that doesn't exist yet (circular). It's part of the allowed transient input buffer, not redundant derived state. In the **composite** (Stage 3) `TimeInput` is rendered *uncontrolled*, so time and meridiem live entirely inside it — the composite neither stores nor derives meridiem. |
| D6 | `TimeInput` value follows D1: emit `Temporal.PlainTime`, accept `PlainTime \| string` | ✅ Locked | Consistency. (Plain `"HH:mm"` string was the defensible alternative.) |
| D7 | When `hasTimezone`, emit a single `Temporal.ZonedDateTime` | ✅ Locked (Stage 3) | Self-contained, `.toString()` round-trips losslessly, ideal for storage. |
| D9 | In tz mode the timezone **defaults to the system zone** (`Temporal.Now.timeZoneId()`), never empty | ✅ Locked (Stage 3) | Lets a complete `ZonedDateTime` form as soon as a date is picked; keeps canonical state to one nullable value + an always-present zone. |
| D10 | **Epoch-ms (e.g. `"1782144000013"`) is NOT accepted by the value props.** Consumers convert at their boundary | ✅ Locked | Epoch ms is an *instant* — it has no calendar date until a zone is chosen (`2026-06-22` in Paris vs `2026-06-23` in Tokyo for the same value). Auto-accepting it would force a hidden system-zone assumption — the exact `Date`-as-instant ambiguity the refactor removed. Today such a string fails coercion → `null` → empty field. See recipe in §8c. |
| D8 | Keep `TimezoneSelector` 3-file controlled/uncontrolled pattern | ✅ Locked | House convention (see §3 correction). |
| D11 | **Single `type` discriminant — no `hasTimezone`.** `type: 'date' \| 'dateTime' \| 'zonedDateTime'` | ✅ Locked (Stage 3.6) | `hasTimezone` was a boolean only valid in one mode, forcing a `?: never` guard against `date+hasTimezone`. One 3-value discriminant removes the invalid combination by construction, maps 1:1 to the emitted Temporal types, and let us delete `getDateTimeMode` + the `DateTimeMode` alias (public `type` *is* the internal mode). Names mirror `PlainDate`/`PlainDateTime`/`ZonedDateTime`. |
| D12 | **Folder/file conventions.** `shared/`=exposed · `utils/`=internal cross-cutting (plain domain name) · component-local cohesive model=descriptive name · grab-bag=`<domain>Helpers` | ✅ Locked (Stage 4) | Matches the repo (DataTable `shared/columnHelpers` exposed vs `utils/renderCells` internal). Helpers stay internal; `shared/` is not a dumping ground. |

Legend: ✅ locked · 🔶 leaning/needs confirmation · ❌ rejected

---

## 5. Value contract (D1 + D2)

Internally Temporal everywhere. At the public boundary:

| Mode | `onChange` emits | `value` / `defaultValue` accepts |
|---|---|---|
| `type='date'` | `Temporal.PlainDate` | `Temporal.PlainDate \| string` |
| `type='dateTime'` | `Temporal.PlainDateTime` | `Temporal.PlainDateTime \| string` |
| `type='zonedDateTime'` | `Temporal.ZonedDateTime` | `Temporal.ZonedDateTime \| string` |
| `TimeInput` | `Temporal.PlainTime` | `Temporal.PlainTime \| string` |
| `TimezoneSelector` | `string` (IANA id) | `string` |

- A single `type` discriminant selects the mode (no `hasTimezone` flag) — see D11.
- Controlled (`value`) requires `onChange`; uncontrolled uses `defaultValue` (D4, enforced via `ControlMode<V>`).
- Empty value is `null` (consistent with today).
- Consumers serialize with `.toString()` (Temporal `.toString()` *is* ISO 8601).
- Consumers without a Temporal instance import `{ Temporal }` from moonstone (D3).
- react-day-picker still speaks JS `Date` → isolated in one adapter (`PlainDate ↔ Date`).

---

## 6. State-management principle (D5)

> **One canonical value is the only real state. Everything else is derived on render.
> The single allowed exception is a transient buffer for in-progress text the user
> hasn't completed.**

Applied:
- **`meridiem`** → derived (`hour < 12 ? 'AM' : 'PM'`), not state.
- **`displayedMonth`** → selected month derives from the value; only *manual paging
  without selecting* stays as a small `useState`. The ref + effect reconciliation goes.
- **TimeInput in-progress text** (`"1"` → `"14"` → `"14:3"`) → the *only* permitted
  buffer; lives inside `TimeInput`, never lifted.
- Sub-selectors are rendered **fully controlled** by the parent's canonical value → no
  shared state to synchronize.

Controlled/uncontrolled = house pattern: `UncontrolledDateTimeInput` owns the single
canonical `useState`; `ControlledDateTimeInput` is pure; dispatcher picks on
`value === undefined`. **Do not introduce a `useControllableState` hook** — it's not the
project convention.

---

## 7. Staged plan

Ordered by dependency. Each stage is independently reviewable and gets sign-off before
the next starts.

- [x] **Stage 0 — Foundations (no visible change). ✅ done 2026-06-19**
  Lock the value contract (§5); re-export `Temporal` (D3); build one internal `temporal`
  adapter holding (a) accept-both parsing helpers and (b) the single irreducible
  `PlainDate ↔ Date` bridge for react-day-picker.
  **Landed:**
  - `src/components/Input/shared/temporal.ts` — `toPlainDate` / `toPlainTime` /
    `toPlainDateTime` / `toZonedDateTime` (accept-both coercers), `plainDateToDate` /
    `dateToPlainDate` (DayPicker bridge, local-noon), `getTodayPlainDate`. Input type
    aliases `PlainDateInput` etc.
  - `src/components/Input/shared/temporal.spec.tsx` — 16 tests, all green.
  - `export {Temporal} from 'temporal-polyfill'` added to `src/index.ts` (public).
  - `export * from './temporal'` added to `shared/index.ts`.
  - The legacy `shared/dateTime.{date,time,timezone}.ts` zoo is **left in place** (still
    used by the components) and gets removed incrementally / in Stage 4 — keeps Stage 0
    a no-visible-change step.
  - Verified: 56 date/time specs pass; new files lint clean.
  - Fixed a pre-existing `tsc` error (committed in `21c13210`, not from Stage 0):
    `TimeInput.tsx` imported `reset` from `~/globals/css-utils`, which doesn't export it.
    `reset` is unused, so removed the import + its `clsx` usage. `yarn tsc` now exits 0.
  - Note: `temporal-polyfill` was declared in `package.json` but missing from
    `node_modules`; ran `yarn install` to fetch it.

- [x] **Stage 1 — `TimeInput`. ✅ done 2026-06-19**
  Value → `Temporal.PlainTime`; keep masking + the input buffer.
  **Landed:**
  - `TimeInput.types.ts`: `defaultValue?: Temporal.PlainTime | string | null`,
    `onChange?: (event, value: Temporal.PlainTime | null)`.
  - `TimeInput.tsx`: seeds display + meridiem from `toPlainTime(defaultValue)` (accept
    both); emits `Temporal.PlainTime`; dropped the `toDisplayValue` helper.
  - `shared/dateTime.time.ts`: `parseCanonicalTime(string)` → `getTimeDisplayParts(PlainTime)`;
    `parseTimeInputValue` now returns `Temporal.PlainTime | null` (was a string); removed
    the dead `parseCanonicalTimeValue`. `formatTimeString` kept (DateTimeInput still uses it).
  - `DateTimeInput.tsx`: bridged the `TimeInput` `onChange` (PlainTime → Date `hour/minute`);
    `defaultValue` still passes the `formatTimeString` string (accepted via `toPlainTime`).
    Temporary bridge until Stage 3.
  - `TimeInput.spec.tsx`: assert emitted `Temporal.PlainTime`; added a PlainTime-default test.
  - **D5 corrected → see D5a:** meridiem stays local input state in standalone 12h.
  - Verified: 46 specs pass (TimeInput/DateTimeInput/shared), `yarn tsc` exits 0, lint clean.
    (One *pre-existing* complexity warning remains on the `DateTimeInput` arrow — Stage 3.)

- [x] **Stage 2 — `TimezoneSelector`. ✅ done 2026-06-19**
  Keep the 3-file house pattern (D8). `referenceDate: Date` → Temporal; remove the
  unbounded cache; memoize in the component.
  **Landed:**
  - `TimezoneSelector.types.ts`: `referenceDate?: Temporal.PlainDate | string | null`
    (accept-both), DST-aware, defaults to today.
  - `shared/dateTime.timezone.ts`: offsets now computed from a `Temporal.PlainDate` at
    local noon (`plainDate.toZonedDateTime({timeZone, plainTime: NOON}).offset`) instead
    of an `Instant` from a JS `Date`. `getTimezoneDropdownData` / `getTimezoneDisplayLabel`
    take a `PlainDate`.
  - **Cache decision (refined twice):** removed the *unbounded* date-keyed
    `timezoneDropdownDataCache`, making `getTimezoneDropdownData` pure.
    `ControlledTimezoneSelector` now calls it **directly, with no `useMemo`** — manual
    memoization is premature given React Compiler will auto-memoize, and data memoization
    belongs in `Dropdown` itself, not each caller. **Kept** the static
    `getDefaultTimezones` module memo (bounded, immutable, environment-constant — a
    `useMemo` there would recompute per-instance, strictly worse). So "replace module
    caches with useMemo" was not the right framing: the leaking cache was *deleted*, not
    relocated. _Follow-up: consider memoizing `data` inside `Dropdown` once React Compiler
    lands._
  - `DateTimeInput.tsx`: passes `getCanonicalDate(selectedDate)` (a `PlainDate`) as
    `referenceDate`; removed the now-dead `getTimezoneReferenceDate` from
    `shared/dateTime.date.ts`.
  - `TimezoneSelector.spec.tsx`: added a DST-aware reference-date test (Paris +01:00 in
    Jan, +02:00 in Jul) which also covers the string accept-both path.
  - Verified: 12 TimezoneSelector specs + 57 across the date/time area pass, `yarn tsc`
    exits 0, lint clean (only the pre-existing `DateTimeInput` complexity warning — Stage 3).

- [x] **Stage 3 — `DateTimeInput` (the big one). ✅ done 2026-06-19**
  Discriminated Temporal value; controlled + uncontrolled via the house split; single
  canonical value, everything derived; DayPicker `Date` boundary isolated in the adapter.
  **Landed:**
  - `DateTimeInput.types.ts`: discriminated union — `type='date'`→`PlainDate`,
    `datetime`→`PlainDateTime`, `datetime`+`hasTimezone`→`ZonedDateTime` (D7). `value`,
    `defaultValue` accept that type or an ISO string; `onChange` emits the typed value.
    `minDate`/`maxDate`/`disabledDates`/`disabledDateRanges` now take `PlainDate | string`.
  - `dateTimeValue.ts` (new): pure mode helpers — `getDateTimeMode`, `parseValue`,
    `getPlainDate`/`getPlainTime`/`getTimeZone`, `assembleValue`. Encapsulates all the
    per-mode branching so the component is conversion-free.
  - House 3-file split: `DateTimeInput.tsx` (dispatcher on `value === undefined`),
    `UncontrolledDateTimeInput.tsx` (holds the one canonical `useState`),
    `ControlledDateTimeInput.tsx` (pure UI, derives calendar/time/zone from the value).
  - **Killed the `displayedMonth` ref+`useEffect` reconciliation.** `displayedMonth` is now
    plain local paging state, reset on open; the offset/selection follow the value directly.
  - `shared/dateTime.date.ts`: `formatDateDisplayValue`→`formatPlainDate`;
    `getCalendarDisabledMatchers` takes `PlainDate | string`. Removed the dead Date helpers
    (`getNormalizedDate`, `getCanonicalDate`, `getCurrentDate`, `isValidDate`).
    Added `getSystemTimeZone` to the temporal adapter (D9).
  - **D5a refined:** the composite renders `TimeInput` *uncontrolled* (`defaultValue` from the
    canonical time), so time **and** meridiem live entirely inside `TimeInput` — the composite
    neither stores nor derives meridiem. Cleaner than the planned "derive in composite".
  - **One justified extra state:** `fallbackZone` in `ControlledDateTimeInput` (zoned mode) —
    holds the chosen zone while no date exists yet (value carries none), so a pre-date zone
    pick isn't lost. Analogous to TimeInput's text buffer; the value's own zone takes
    precedence once a date is set.
  - Verified: full unit suite **1295 pass**; `yarn tsc` exits 0; lint clean — and the
    pre-existing `DateTimeInput` complexity warning is **gone** (the split fixed it).
  - **Spec style:** `DateTimeInput.spec.tsx` is **Temporal-free** — inputs are ISO strings
    (the accept-both API) and assertions read `.toString()` on the emitted value. The
    Temporal-instance input path stays covered by `temporal.spec.tsx`.

  **Post-Stage-3 review follow-ups (2026-06-19):**
  - Internal mode `'zoned'` renamed to **`'zonedDateTime'`** (clearer).
  - **Bug fixed:** a zone change with no date selected used to fire `onChange(null)`. Now it
    just records the chosen zone (`fallbackZone`) and emits nothing until a date exists.
  - **Tests reflect consumer usage:** `TimezoneSelector.spec.tsx` no longer imports the
    internal `shared` helpers — it passes an explicit `referenceDate` for deterministic
    offsets and asserts plain visible labels (`'Paris (UTC +01:00)'`). No component spec
    imports from `shared` now. `shared/` is internal and **not** a public convention.

- [x] **Stage 4 — Cleanup / reorganization. ✅ done 2026-06-23**
  Dissolved the `Input/shared/` junk-drawer; co-located helpers; deleted dead code.
  **Landed:**
  - `Input/shared/` removed. New layout:
    - `Input/utils/temporal.ts` (+ spec) — internal cross-cutting Temporal adapter.
    - `Input/TimeInput/timeHelpers.ts` — masking helpers (dropped dead `formatTimeString`).
    - `Input/DateTimeInput/dateTimeValue.ts` — value model (kept descriptive name).
    - `Input/DateTimeInput/calendarHelpers.ts` — `formatPlainDate`, `getCalendarDisabledMatchers`,
      plus `getDisplayMonth`/`getMonthStart` **extracted from `ControlledDateTimeInput`**.
    - `TimezoneSelector/timezoneHelpers.ts` — dropdown data (dropped dead `getTimezoneDisplayLabel`;
      `getDefaultTimezones` now internal/unexported).
  - Deleted `shared/dateTime.types.ts` (types imported straight from `DateTimeInput.types`) and
    the dead `src/DateTime.ts` re-export. Public date surface stays exactly the `Temporal`
    re-export from `src/index.ts`.
  - **Convention (D12):** `shared/` = *exposed* helpers (DataTable-style) · `utils/` = *internal*
    cross-cutting (plain domain name) · component-local cohesive model = descriptive name
    (`temporal`, `dateTimeValue`) · component-local grab-bag = `<domain>Helpers`
    (`calendarHelpers`, `timeHelpers`, `timezoneHelpers`).
  - Verified: full unit suite **1291 pass**, `yarn tsc` 0, lint clean.

---

## 8. Open questions (resolve in-flight, not blocking)

- **Public surface — ✅ RESOLVED (Stage 4):** helpers stay **internal**. The only public date
  surface is the `Temporal` re-export from `src/index.ts`. `src/DateTime.ts` was deleted; no
  helper is exported. `shared/` is reserved for *exposed* helpers (none for Input today).
- **Directory/function layout — ✅ RESOLVED (Stage 4):** co-located per component; `Input/utils/`
  holds the cross-cutting Temporal adapter. Naming convention captured as D12.

---

## 8b. Known limitations / review findings (Stage 3)

Surfaced while reviewing the composite — none block Stage 4, but track them:

1. **The time field is uncontrolled-within-controlled.** In `hasTimezone`/`datetime` modes the
   calendar (`selected`) and timezone (`value=`) are fully controlled by the canonical value,
   but `TimeInput` is rendered *uncontrolled* (`defaultValue`). So a consumer in controlled
   mode that programmatically changes only the **time** of `value` won't see the field update
   (date/zone do update). Matches the pre-refactor behavior; the clean fix is to give
   `TimeInput` a controlled `value` (a TimeInput follow-up). **"Controlled" currently means
   date + timezone; the time field mirrors user input only.**
2. **Typing a time with no date picked defaults the date to today** (`selectedDate ?? today`).
   Pre-existing behavior, preserved. Possibly surprising; revisit as a UX question.
3. **`displayedMonth` is not re-synced to an external value change while the calendar is open**
   (the old ref+effect did this). Edge case only; on close/reopen it resets correctly.

## 8c. Consumer recipe — epoch milliseconds (D10)

The value props accept a Temporal instance or an ISO string, **not** an epoch timestamp.
An epoch is an instant; convert it (choosing the zone it should render in) before passing:

```ts
import {Temporal} from '@jahia/moonstone';

const ms = 1782144000013;
const instant = Temporal.Instant.fromEpochMilliseconds(ms);

// hasTimezone:
<DateTimeInput hasTimezone type="datetime" defaultValue={instant.toZonedDateTimeISO('Europe/Paris')} … />
// datetime (drop the zone after choosing how to render the instant):
<DateTimeInput type="datetime" defaultValue={instant.toZonedDateTimeISO('Europe/Paris').toPlainDateTime()} … />
// date only:
<DateTimeInput type="date" defaultValue={instant.toZonedDateTimeISO('Europe/Paris').toPlainDate()} … />
```

To read a value back as epoch ms (tz mode): `value.toInstant().epochMilliseconds`.

## 8d. Stage 3.5 polish — ✅ done 2026-06-23 (from review)

Small correctness/DX/test-integrity fixes on the Stage 3 output. All landed; verified
(full unit suite 1291 pass, `yarn tsc` 0, lint clean).

1. **`DateTimeInputDate` → `CalendarDate`.** Renamed the alias (was a duplicate of the
   adapter's `PlainDateInput`); chosen over `DataType`/`DateType` (those read like the
   `DateTimeInputType` discriminant). Updated the `shared` re-export and `dateTime.date.ts`.
2. **`emit` → `emitChange`.** Params `nextDate`/`nextTime`/`zone` → `plainDate`/`plainTime`/
   `timeZone`; derived local `timeZone` → `currentTimeZone` (freed the param name); dropped
   the redundant cast; added a comment stating the controlled contract (onChange drives the
   value, never the reverse).
3. **Controlled ⇒ `onChange` required, at the type level.** Added the generic
   `ControlMode<V> = Controlled<V> | Uncontrolled<V>`; each mode = `{discriminants} &
   ControlMode<V>`. **Verified** with a throwaway `@ts-expect-error` that controlled-without-
   `onChange` is a compile error.
4. **Removed test implementation-bias.** Deleted `pad`/`todayIso(reimpl)`/`displayDate`;
   fields are now located by `getByPlaceholderText`/role (stable handles), emitted values
   asserted via `.toString()` against literal ISO, controlled-persistence checked by
   capturing the field's value before/after. "today" reads once from `Temporal.Now` (a
   system-clock oracle, not a copy of the component's formatting).

## 9. Conventions to respect (moonstone)

- Controlled/uncontrolled = 3 files: `Controlled<X>` (pure), `Uncontrolled<X>` (owns
  state), `<X>` (dispatcher on `typeof controlledProp === 'undefined'`).
- `onChange` signature is `(event: React.SyntheticEvent, value) => void` across inputs.
- Per-component co-located docs (`<X>.md`) — see `DataTable/MIGRATION.md` precedent.
- Components build on `BaseInput`; dropdowns on `Dropdown`.
