import React from 'react';
import type {DayPickerProps} from 'react-day-picker';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {
    DateTimeInputChange,
    DateTimeInputLabels,
    DateTimeInputType,
    DateTimeInputValue,
    DisabledDateRange,
    TimeFormat
} from '../shared/dateTime.types';

type BasicDateTimeInputProps = Omit<BaseInputProps,
    'isShowClearButton' |
    'value' |
    'defaultValue' |
    'onChange' |
    'onBlur' |
    'onFocus' |
    'onClear' |
    'icon' |
    'role' |
    'variant' |
    'filterFunction' |
    'allowDecimal' |
    'allowNegative'
> & {
    /**
     * Determines which fields are rendered:
     * - `'date'`     : calendar picker only
     * - `'datetime'` : calendar picker + time input
     */
    type: DateTimeInputType;

    variant?: 'ghost' | 'outlined';

    /**
     * When `true`, displays a timezone selector to the right of the time input.
     * Has no effect when `type='date'`.
     * @default false
     */
    hasTimezone?: boolean;

    /**
     * Display format for the time input.
     * Does not affect the `value.time` format, which is always `HH:mm` (24h).
     * @default '24h'
     */
    timeFormat?: TimeFormat;

    /** Lower bound of the calendar (inclusive). Dates before this are disabled. */
    minDate?: Date;

    /** Upper bound of the calendar (inclusive). Dates after this are disabled. */
    maxDate?: Date;

    /** Individual dates to disable in the calendar. */
    disabledDates?: Date[];

    /** Date ranges to disable in the calendar. */
    disabledDateRanges?: DisabledDateRange[];

    /**
     * BCP 47 locale for formatting the date displayed in the text field.
     * Examples: `'fr-FR'`, `'en-US'`, `'de-DE'`.
     * When omitted, the browser's locale is used (`Intl.DateTimeFormat` with no locale argument).
     */
    locale?: string;

    /**
     * The day of the week that starts the calendar week.
     * `0` = Sunday, `1` = Monday, …, `6` = Saturday.
     * @default 1
     */
    weekStartsOn?: DayPickerProps['weekStartsOn'];

    /** I18n labels for fields and buttons */
    labels?: DateTimeInputLabels;

    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;

    /**
     * Fired on every value change.
     *
     * @param event  - Originating React event (click, change, etc.)
     * @param change - Object containing:
     *   - `value`: Canonical field values — store this and pass it back as the `value` prop
     *   - `date`:  Resolved JS `Date` object, `null` if the value is incomplete
     */
    onChange?: (event: React.SyntheticEvent, change: DateTimeInputChange) => void;
}

type ControlledProps = {
    /** Controlled value. Must be updated via `onChange` to reflect user changes. */
    value: DateTimeInputValue;
    defaultValue?: never;
}

type UncontrolledProps = {
    value?: never;
    /** Initial value in uncontrolled mode. The component manages its own internal state. */
    defaultValue?: DateTimeInputValue;
}

export type DateTimeInputProps = BasicDateTimeInputProps & (ControlledProps | UncontrolledProps);
export type ControlledDateTimeInputProps = BasicDateTimeInputProps & ControlledProps;
export type UncontrolledDateTimeInputProps = BasicDateTimeInputProps & UncontrolledProps;
export type {
    DateTimeInputChange,
    DateTimeInputLabels,
    DateTimeInputType,
    DateTimeInputValue,
    DisabledDateRange,
    TimeFormat
} from '../shared/dateTime.types';
