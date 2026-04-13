/** Time display format */
export type TimeFormat = '24h' | '12h';

/**
 * Determines which fields are rendered in the `DateTimeInput`:
 * - `'date'`     : calendar picker only
 * - `'datetime'` : calendar picker + time input
 */
export type DateTimeInputType = 'date' | 'datetime';

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
    date: string | null;
    time?: string | null;
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
    today?: string;
    /** Accessible label for the next month button */
    nextMonth?: string;
    /** Accessible label for the previous month button */
    previousMonth?: string;
};
