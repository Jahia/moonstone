import {Temporal} from 'temporal-polyfill';

/**
 * Foundation adapter for the date/time components.
 *
 * It has two jobs:
 *
 * 1. **"Accept both" coercion** — turn a consumer-supplied `Temporal.* | string | null`
 *    into a validated `Temporal.*` value, or `null` when absent/invalid. This lets the
 *    public API accept ISO 8601 strings for free (a backend value can be passed as-is)
 *    while every component works exclusively with Temporal internally.
 *
 * 2. **The single bridge to JS `Date`** that `react-day-picker` requires. Keeping the
 *    `Temporal ↔ Date` conversion here — and nowhere else — is what removes the
 *    midnight/noon/UTC-noon normalization that used to be spread across the components.
 */

/** Values a consumer may pass for each field kind (`Temporal.*` instance or ISO string). */
export type PlainDateInput = Temporal.PlainDate | string;
export type PlainTimeInput = Temporal.PlainTime | string;
export type PlainDateTimeInput = Temporal.PlainDateTime | string;
export type ZonedDateTimeInput = Temporal.ZonedDateTime | string;

/** Coerces a date-only input to `Temporal.PlainDate`, or `null` when absent/invalid. */
export const toPlainDate = (value?: PlainDateInput | null): Temporal.PlainDate | null => {
    if (value === null || value === undefined) {
        return null;
    }

    try {
        return Temporal.PlainDate.from(value);
    } catch {
        return null;
    }
};

/** Coerces a time-only input to `Temporal.PlainTime`, or `null` when absent/invalid. */
export const toPlainTime = (value?: PlainTimeInput | null): Temporal.PlainTime | null => {
    if (value === null || value === undefined) {
        return null;
    }

    try {
        // Overflow 'reject' so an out-of-range time fails instead of clamping silently.
        return Temporal.PlainTime.from(value, {overflow: 'reject'});
    } catch {
        return null;
    }
};

/** Coerces a date+time input to `Temporal.PlainDateTime`, or `null` when absent/invalid. */
export const toPlainDateTime = (value?: PlainDateTimeInput | null): Temporal.PlainDateTime | null => {
    if (value === null || value === undefined) {
        return null;
    }

    try {
        return Temporal.PlainDateTime.from(value);
    } catch {
        return null;
    }
};

/** Coerces a zoned date+time input to `Temporal.ZonedDateTime`, or `null` when absent/invalid. */
export const toZonedDateTime = (value?: ZonedDateTimeInput | null): Temporal.ZonedDateTime | null => {
    if (value === null || value === undefined) {
        return null;
    }

    try {
        return Temporal.ZonedDateTime.from(value);
    } catch {
        return null;
    }
};

/**
 * Builds the JS `Date` that `react-day-picker` consumes from a `PlainDate`.
 *
 * The Date is set to **local noon**: DayPicker only ever compares calendar days, and
 * noon sidesteps the rare DST transition where a local midnight doesn't exist and could
 * roll the date into an adjacent day.
 */
export const plainDateToDate = (value: Temporal.PlainDate): Date =>
    new Date(value.year, value.month - 1, value.day, 12);

/** Reads the calendar day from a DayPicker `Date` (its local fields) into a `PlainDate`. */
export const dateToPlainDate = (value: Date): Temporal.PlainDate =>
    Temporal.PlainDate.from({
        year: value.getFullYear(),
        month: value.getMonth() + 1,
        day: value.getDate()
    });

/** Today's calendar date in the system time zone. */
export const getTodayPlainDate = (): Temporal.PlainDate => Temporal.Now.plainDateISO();
