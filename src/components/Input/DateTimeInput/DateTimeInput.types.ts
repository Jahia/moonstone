import React from 'react';
import type {DayPickerProps} from 'react-day-picker';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {
    DateTimeInputLabels,
    DateTimeInputType,
    DateTimeInputValue,
    DisabledDateRange,
    TimeFormat
} from '../shared';

type DateTimeInputVariant = Extract<BaseInputProps['variant'], 'ghost' | 'outlined'>;

type BasicDateTimeInputProps = Omit<BaseInputProps,
    'isShowClearButton' |
    'value' |
    'defaultValue' |
    'onChange' |
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

    variant?: DateTimeInputVariant;

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
    locale?: Intl.ResolvedDateTimeFormatOptions['locale'];

    /**
     * The day of the week that starts the calendar week.
     * `0` = Sunday, `1` = Monday, …, `6` = Saturday.
     * @default 1
     */
    weekStartsOn?: DayPickerProps['weekStartsOn'];

    /** I18n labels for fields and buttons */
    labels?: DateTimeInputLabels;
};

type DateProps = {
    type: 'date';
    hasTimezone?: never;
    timeFormat?: never;
};

type DateTimeProps = {
    type: 'datetime';

    /**
     * When `true`, displays a timezone selector.
     * @default false
     */
    hasTimezone?: boolean;

    /**
     * Display format for the time input.
     * Does not affect the `value.time` format, which is always `HH:mm` (24h).
     * @default '24h'
     */
    timeFormat?: TimeFormat;
};

type ControlledProps = {
    /** Controlled value. Must be updated via `onChange` to reflect user changes. */
    value: DateTimeInputValue;
    defaultValue?: never;
    onChange: (event: React.SyntheticEvent, value: DateTimeInputValue) => void;
};

type UncontrolledProps = {
    value?: never;
    /** Initial value in uncontrolled mode. The component manages its own internal state. */
    defaultValue?: DateTimeInputValue;
    onChange?: (event: React.SyntheticEvent, value: DateTimeInputValue) => void;
};

type DateTimeInputBaseProps = BasicDateTimeInputProps & (DateProps | DateTimeProps);

export type DateTimeInputProps = DateTimeInputBaseProps & (ControlledProps | UncontrolledProps);
export type {
    DateTimeInputLabels,
    DateTimeInputType,
    DateTimeInputValue,
    DisabledDateRange,
    TimeFormat
} from '../shared';
