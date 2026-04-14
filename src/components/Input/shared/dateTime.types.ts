/**
 * Determines which fields are rendered in the `DateTimeInput`:
 * - `'date'`     : calendar picker only
 * - `'datetime'` : calendar picker + time input
 */
export type DateTimeInputType = 'date' | 'datetime';

/** Value shape of the `DateTimeInput`. */
export type DateTimeInputValue = {
    /**
     * Calendar day selected in the input.
     * The date part is used; any time part is ignored.
     */
    date: Date | null;
    /**
     * 24-hour time string `HH:mm` (e.g. `'14:30'`).
     * Always 24h regardless of the `timeFormat` display setting.
     */
    time?: string | null;
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
    today?: string;
    /** Accessible label for the next month button */
    nextMonth?: string;
    /** Accessible label for the previous month button */
    previousMonth?: string;
};
