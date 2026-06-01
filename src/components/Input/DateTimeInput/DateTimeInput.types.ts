import React from 'react';
import type {DayPickerProps} from 'react-day-picker';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {TimeFormat} from '../TimeInput';

/**
 * Determines which fields are rendered in the `DateTimeInput`:
 * - `'date'`     : calendar picker only
 * - `'datetime'` : calendar picker + time input
 */
export type DateTimeInputType = 'date' | 'datetime';

/** Value shape of the `DateTimeInput`. */
export type DateTimeInputValue = {
    /**
     * Selected date and time.
     * For `type='date'`, only the calendar day is relevant; any time part is ignored.
     * For `type='datetime'`, hours and minutes are meaningful.
     */
    date: Date | null;
    /** IANA timezone identifier (e.g. `'Europe/Paris'`) */
    timezone?: string | null;
};

/**
 * A date range to disable in the calendar picker.
 * Both `from` and `to` bounds are inclusive.
 */
export type DisabledDateRange = {
    from: Date;
    to: Date;
};

/** I18n labels for the calendar actions of the `DateTimeInput` */
export type DateTimeInputI18n = {
    /** Label for the "Today" shortcut button in the calendar footer */
    todayButton?: string;
    /** Accessible label for the next month button */
    nextMonth?: string;
    /** Accessible label for the previous month button */
    previousMonth?: string;
};

type DateTimeInputSharedProps = Omit<BaseInputProps,
    'defaultValue' |
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
    /**
     * Determines which fields are rendered:
     * - `'date'`     : calendar picker only
     * - `'datetime'` : calendar picker + time input
     */
    type: DateTimeInputType;

    /**
        * Initial value used when the component mounts. The component manages its own state after that.
        */
    defaultValue?: DateTimeInputValue;

    /**
     * Fired when the selected date, time or timezone changes.
     */
    onChange?: (event: React.SyntheticEvent, value: DateTimeInputValue) => void;

    variant?: 'ghost' | 'outlined';

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
     * `0` = Sunday, `1` = Monday, ..., `6` = Saturday.
     * @default 1
     */
    weekStartsOn?: DayPickerProps['weekStartsOn'];

    /** I18n labels for calendar actions */
    i18n?: DateTimeInputI18n;
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
     * Does not affect the `value.date` time component, which is always stored in 24h (hours 0–23).
     * @default '24h'
     */
    timeFormat?: TimeFormat;
};

export type DateTimeInputProps = DateTimeInputSharedProps & (DateProps | DateTimeProps);
export type {TimeFormat} from '../TimeInput';
