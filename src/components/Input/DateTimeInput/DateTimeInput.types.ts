import React from 'react';
import type {Temporal} from 'temporal-polyfill';
import type {DayPickerProps} from 'react-day-picker';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {TimeFormat, TimeInputProps} from '../TimeInput';
import type {ControlledTimezoneSelectorProps} from '../../TimezoneSelector';
import type {DateTimeValue} from './dateTimeValue';
import type {DataAttributes} from '~/types/DataAttributes.types';

/**
 * Selects the component's mode, which fields it renders, and the emitted value type:
 * - `'date'`          : calendar only            → `Temporal.PlainDate`
 * - `'dateTime'`      : calendar + time          → `Temporal.PlainDateTime`
 * - `'zonedDateTime'` : calendar + time + zone   → `Temporal.ZonedDateTime`
 */
export type DateTimeInputType = 'date' | 'dateTime' | 'zonedDateTime';

/**
 * Explicit display order for the date in the input, overriding the order guessed from `locale`
 * (the calendar's month/weekday text still follows `locale`). Each literal is also its template:
 * `DD`/`MM`/`YYYY` are replaced with the zero-padded parts, other characters kept as separators.
 */
export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';

/**
 * A calendar date accepted by the bounds / disabled-date props.
 * Accepts a `Temporal.PlainDate` or an ISO date string (e.g. `'2026-06-19'`).
 */
export type CalendarDate = Temporal.PlainDate | string;

/** A day-of-week index (0 = Sunday, 1 = Monday, … 6 = Saturday). */
export type DayOfWeek = NonNullable<DayPickerProps['weekStartsOn']>;

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
>;

export type DateTimeInputTimezoneSelectorProps = Omit<ControlledTimezoneSelectorProps,
    'value' |
    'onChange' |
    'referenceDate' |
    'size' |
    'variant' |
    'isDisabled'
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
     * BCP 47 locale for formatting the date displayed in the text field.
     * Examples: `'fr-FR'`, `'en-US'`, `'de-DE'`.
     * When omitted, the browser's locale is used (`Intl.DateTimeFormat` with no locale argument).
     */
    locale?: Intl.ResolvedDateTimeFormatOptions['locale'];

    /** Forces the date order in the input (e.g. `'DD/MM/YYYY'`), overriding the locale-based order. */
    dateFormat?: DateFormat;

    /**
     * The day of the week that starts the calendar week.
     * `0` = Sunday, `1` = Monday, ..., `6` = Saturday.
     * @default 1
     */
    weekStartsOn?: DayPickerProps['weekStartsOn'];

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
type Controlled<V> = {
    /** Controlled value (Temporal instance or ISO string). Requires `onChange`. */
    value: V | string | null;
    onChange: (event: React.SyntheticEvent, value: V | null) => void;
    defaultValue?: never;
};

type Uncontrolled<V> = {
    value?: never;
    /** Initial value in uncontrolled mode (Temporal instance or ISO string). */
    defaultValue?: V | string | null;
    /** Fired when the selected value changes. */
    onChange?: (event: React.SyntheticEvent, value: V | null) => void;
};

type ControlMode<V> = Controlled<V> | Uncontrolled<V>;

/** `type='date'` — value is a `Temporal.PlainDate` (or ISO date string). */
type DateModeProps = {
    type: 'date';
    timeFormat?: never;
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
} & ControlMode<Temporal.PlainDateTime>;

/**
 * `type='zonedDateTime'` — value is a `Temporal.ZonedDateTime` (or ISO string with a
 * time-zone annotation). The timezone defaults to the system zone until changed.
 */
type ZonedModeProps = {
    type: 'zonedDateTime';
    /**
     * Display format for the time input.
     * Only affects display; the emitted value's time component is unaffected.
     * @default '24h'
     */
    timeFormat?: TimeFormat;
} & ControlMode<Temporal.ZonedDateTime>;

export type DateTimeInputProps = DateTimeInputSharedProps & (DateModeProps | DateTimeModeProps | ZonedModeProps);

/**
 * @internal Implementation props shared by the controlled/uncontrolled variants. The
 * discriminated public union is bridged onto this broadened shape in the dispatcher.
 */
export type DateTimeInputImplProps = DateTimeInputSharedProps & {
    type: DateTimeInputType;
    timeFormat?: TimeFormat;
    onChange?: (event: React.SyntheticEvent, value: DateTimeValue | null) => void;
};

export type ControlledDateTimeInputProps = DateTimeInputImplProps & {
    value: DateTimeValue | string | null;
};

export type UncontrolledDateTimeInputProps = DateTimeInputImplProps & {
    defaultValue?: DateTimeValue | string | null;
};

export type {TimeFormat} from '../TimeInput';
