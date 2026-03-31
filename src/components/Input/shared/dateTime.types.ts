/** Time display format */
export type TimeFormat = '24h' | '12h';

/**
 * Determines which fields are rendered in the `DateTimeInput`:
 * - `'date'`     : calendar picker only
 * - `'time'`     : time input only
 * - `'datetime'` : calendar picker + time input
 */
export type DateTimeInputType = 'date' | 'time' | 'datetime';

/** AM/PM indicator used in 12-hour time format */
export type Meridiem = 'AM' | 'PM';

/**
 * Internal value shape of the `DateTimeInput`. All fields use canonical
 * string formats, or `null` when not set.
 *
 * @property date     - ISO date string `yyyy-MM-dd` (e.g. `'2026-03-31'`)
 * @property time     - 24-hour time string `HH:mm` (e.g. `'14:30'`).
 *                      Always 24h regardless of the `timeFormat` display setting.
 * @property timezone - IANA timezone identifier (e.g. `'Europe/Paris'`)
 */
export type DateTimeInputValue = {
    date?: string | null;
    time?: string | null;
    timezone?: string | null;
};

/**
 * Object emitted by the `onChange` callback of the `DateTimeInput`.
 *
 * @property value - Canonical field values to store and pass back as the `value` prop (controlled usage).
 * @property date  - Resolved JS `Date` object, ready for comparisons or calculations.
 *                   `null` if date or time is missing, or if `type='time'` (no date reference).
 *                   Timezone-aware when a timezone is provided.
 */
export type DateTimeInputChange = {
    value: DateTimeInputValue;
    date: Date | null;
};

/**
 * A date range to disable in the calendar picker.
 * Both `from` and `to` bounds are inclusive.
 */
export type DisabledDateRange = {
    from: Date;
    to: Date;
};

/** I18n labels for the fields and action buttons of the `DateTimeInput` */
export type DateTimeInputLabels = {
    /** Label for the "Today" shortcut button in the calendar footer */
    today?: string;
    /** Placeholder / aria-label for the hours field */
    hours?: string;
    /** Placeholder / aria-label for the minutes field */
    minutes?: string;
    /** Placeholder for the AM/PM dropdown */
    meridiem?: string;
    /** Placeholder for the timezone selector */
    timezone?: string;
};

export const emptyDateTimeInputValue: DateTimeInputValue = {
    date: null,
    time: null,
    timezone: null
};

export const createDateTimeInputValue = (value?: DateTimeInputValue | null): DateTimeInputValue => ({
    date: value?.date ?? null,
    time: value?.time ?? null,
    timezone: value?.timezone ?? null
});
