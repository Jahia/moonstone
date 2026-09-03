import React from 'react';
import type {Temporal} from 'temporal-polyfill';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {TimeFormat, TimeInputProps} from '../TimeInput';
import type {ControlledTimezoneSelectorProps} from '../../TimezoneSelector';
import type {DateTimeValue, DateTimeValueInput} from './dateTimeValue';
import type {DataAttributes} from '~/types/DataAttributes.types';
import type {ZonedDateTimeInput} from '../utils/temporal';

/**
 * Selects the component's mode, which fields it renders, and the emitted value type:
 * - `'date'`          : calendar only            → `Temporal.PlainDate`
 * - `'dateTime'`      : calendar + time          → `Temporal.PlainDateTime`
 * - `'zonedDateTime'` : calendar + time + zone   → `Temporal.ZonedDateTime`
 */
export type DateTimeInputType = 'date' | 'dateTime' | 'zonedDateTime';

/**
 * LDML date pattern for the trigger input, overriding the order guessed from `locale`.
 * Supports `yyyy`/`yy`, `MMMM`/`MMM`/`MM`/`M`, `dd`/`d`; other characters are separators.
 * Tokens still render via `Intl` in `locale`, so names stay localized (`'d MMMM yyyy'` + fr → `5 mars 2026`).
 * An invalid pattern (no token, or stray letters, e.g. `'toto'`) falls back to the locale format.
 */
export type DateFormat = string;

/**
 * A calendar date accepted by the bounds / disabled-date props.
 * Accepts a `Temporal.PlainDate` or an ISO date string (e.g. `'2026-06-19'`).
 */
export type CalendarDate = Temporal.PlainDate | string;

/** A day-of-week index (0 = Sunday, 1 = Monday, … 6 = Saturday). */
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * A date range to disable in the calendar picker.
 * Both `from` and `to` bounds are inclusive.
 */
export type DisabledDateRange = {
    from: CalendarDate;
    to: CalendarDate;
};

/** I18n labels for the calendar actions of the `DateTimeInput` */
export type DateTimeInputI18n = {
    /** Label for the "Today" shortcut button in the calendar footer */
    todayButton?: string;
    /** Accessible label for the next month button */
    nextMonth?: string;
    /** Accessible label for the previous month button */
    previousMonth?: string;
    /** Prefix label shown before the converted local time when the selected timezone differs from the user's system timezone */
    localTime?: string;
};

export type DateTimeInputTimeInputProps = Omit<TimeInputProps,
    'defaultValue' |
    'value' |
    'onChange' |
    'timeFormat' |
    'size' |
    'variant' |
    'isDisabled' |
    'isReadOnly' |
    'focusOnField'
> & DataAttributes;

export type DateTimeInputTimezoneSelectorProps = Omit<ControlledTimezoneSelectorProps,
    'value' |
    'onChange' |
    'referenceDate' |
    'size' |
    'variant' |
    'isDisabled' |
    'isReadOnly'
> & DataAttributes;

/** Props common to every mode of the `DateTimeInput`. */
export type DateTimeInputSharedProps = Omit<BaseInputProps,
    'defaultValue' |
    'value' |
    'onChange' |
    'onClear' |
    'icon' |
    'role' |
    'type' |
    'min' |
    'max' |
    'step' |
    'filterFunction' |
    'allowDecimal' |
    'allowNegative' |
    'separator' |
    'disabled' |
    'readOnly'
> & {
    variant?: 'ghost' | 'outlined';

    /** Lower bound of the calendar (inclusive). Dates before this are disabled. */
    minDate?: CalendarDate;

    /** Upper bound of the calendar (inclusive). Dates after this are disabled. */
    maxDate?: CalendarDate;

    /** Individual dates to disable in the calendar. */
    disabledDates?: CalendarDate[];

    /** Date ranges to disable in the calendar. */
    disabledDateRanges?: DisabledDateRange[];

    /**
     * Days of the week to always disable (0 = Sunday, 1 = Monday, … 6 = Saturday).
     * Example: `[0, 6]` disables every weekend.
     */
    disabledDaysOfWeek?: DayOfWeek[];

    /**
     * BCP 47 locale driving the displayed date, the calendar text, and the first day of the week.
     * Examples: `'fr-FR'`, `'en-US'`, `'de-DE'`.
     * When omitted, it resolves to the browser's locale
     * (`new Intl.DateTimeFormat().resolvedOptions().locale`), applied consistently to all three.
     * When server-rendering, pass an explicit `locale`: the resolved locale differs between server
     * and client, so the rendered date would otherwise mismatch on hydration.
     */
    locale?: Intl.ResolvedDateTimeFormatOptions['locale'];

    /** LDML pattern for the date input (e.g. `'dd/MM/yyyy'`), overriding the locale order. See {@link DateFormat}. */
    dateFormat?: DateFormat;

    /**
     * The day of the week that starts the calendar week.
     * `0` = Sunday, `1` = Monday, ..., `6` = Saturday.
     * When omitted, it derives from `locale` (falling back to Monday when the locale has no week info).
     */
    weekStartsOn?: DayOfWeek;

    /** I18n labels for calendar actions */
    i18n?: DateTimeInputI18n;

    /** Additional props forwarded to the internal TimeInput (`type='dateTime'` or `'zonedDateTime'`). */
    timeInputProps?: DateTimeInputTimeInputProps;

    /** Additional props forwarded to the internal TimezoneSelector (`type='zonedDateTime'`). */
    timezoneSelectorProps?: DateTimeInputTimezoneSelectorProps;
};

/**
 * Value props for a given emitted Temporal value `V`, parameterized over the two modes.
 * Inputs also accept an ISO string. When `value` is passed the component is controlled and
 * `onChange` is required; otherwise it's uncontrolled (`defaultValue`). This mirrors the
 * library's controlled/uncontrolled pattern and makes the controlled contract a type error
 * to break.
 */
type Controlled<V, I = V | string> = {
    /** Controlled value (Temporal instance or ISO string). Requires `onChange`. */
    value: I | null;
    onChange: (event: React.SyntheticEvent, value: V | null) => void;
    defaultValue?: never;
};

type Uncontrolled<V, I = V | string> = {
    value?: never;
    /** Initial value in uncontrolled mode (Temporal instance or ISO string). */
    defaultValue?: I | null;
    /** Fired when the selected value changes. */
    onChange?: (event: React.SyntheticEvent, value: V | null) => void;
};

type ControlMode<V, I = V | string> = Controlled<V, I> | Uncontrolled<V, I>;

/**
 * Inclusive date-time bounds for the modes that carry a time of day (`'dateTime'` and
 * `'zonedDateTime'`). Unlike `minDate` / `maxDate`, which only know about calendar days, these
 * keep the time of the boundary: the calendar disables the days outside them, and a value that
 * would fall outside on the boundary day itself is brought back to the boundary. Both kinds of
 * bounds can be combined; the tightest one wins.
 */
type DateTimeBounds<B> = {
    /** Lower bound (inclusive). Days before it are disabled; an earlier time on its day is clamped to it. */
    minDateTime?: B;
    /** Upper bound (inclusive). Days after it are disabled; a later time on its day is clamped to it. */
    maxDateTime?: B;
};

/** `type='date'` — value is a `Temporal.PlainDate` (or ISO date string). */
type DateModeProps = {
    type: 'date';
    timeFormat?: never;
    /** A date-only value has no time of day to bound: use `minDate`. */
    minDateTime?: never;
    /** A date-only value has no time of day to bound: use `maxDate`. */
    maxDateTime?: never;
} & ControlMode<Temporal.PlainDate>;

/** `type='dateTime'` — value is a `Temporal.PlainDateTime` (or ISO date-time string). */
type DateTimeModeProps = {
    type: 'dateTime';
    /**
     * Display format for the time input.
     * Only affects display; the emitted value's time component is unaffected.
     * @default '24h'
     */
    timeFormat?: TimeFormat;
} & DateTimeBounds<Temporal.PlainDateTime | string> & ControlMode<Temporal.PlainDateTime>;

/**
 * `type='zonedDateTime'` — value accepts a `Temporal.ZonedDateTime`, `Temporal.Instant`,
 * or ISO instant. Inputs without an IANA annotation use the system timezone.
 */
type ZonedModeProps = {
    type: 'zonedDateTime';
    /**
     * Display format for the time input.
     * Only affects display; the emitted value's time component is unaffected.
     * @default '24h'
     */
    timeFormat?: TimeFormat;
} & DateTimeBounds<ZonedDateTimeInput> & ControlMode<Temporal.ZonedDateTime, ZonedDateTimeInput>;

export type DateTimeInputProps = DateTimeInputSharedProps & (DateModeProps | DateTimeModeProps | ZonedModeProps);

/**
 * @internal Implementation props shared by the controlled/uncontrolled variants. The
 * discriminated public union is bridged onto this broadened shape in the dispatcher.
 */
export type DateTimeInputImplProps = DateTimeInputSharedProps & DateTimeBounds<DateTimeValueInput> & {
    type: DateTimeInputType;
    timeFormat?: TimeFormat;
    onChange?: (event: React.SyntheticEvent, value: DateTimeValue | null) => void;
};

export type ControlledDateTimeInputProps = DateTimeInputImplProps & {
    value: DateTimeValueInput;
};

export type UncontrolledDateTimeInputProps = DateTimeInputImplProps & {
    defaultValue?: DateTimeValueInput;
};

export type {TimeFormat} from '../TimeInput';
