import {Temporal} from 'temporal-polyfill';
import {toPlainDate, toPlainDateTime, toZonedDateTime} from '../shared';
import type {DateTimeInputType} from './DateTimeInput.types';

/**
 * Internal helpers that bridge the single canonical `DateTimeInput` value and the
 * (date, time, timezone) parts its sub-controls render. Keeping the per-`type` branching
 * here keeps the component itself free of `instanceof`/conversion noise.
 *
 * - `'date'`          -> `Temporal.PlainDate`
 * - `'dateTime'`      -> `Temporal.PlainDateTime`
 * - `'zonedDateTime'` -> `Temporal.ZonedDateTime`
 */
export type DateTimeValue = Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime;

/** Any value the public API accepts (Temporal instance or ISO string). */
export type DateTimeValueInput = DateTimeValue | string | null | undefined;

/** Coerces a consumer value (Temporal instance or ISO string) to the canonical value for the type. */
export const parseValue = (input: DateTimeValueInput, type: DateTimeInputType): DateTimeValue | null => {
    if (type === 'date') {
        return toPlainDate(input as Temporal.PlainDate | string | null | undefined);
    }

    if (type === 'zonedDateTime') {
        return toZonedDateTime(input as Temporal.ZonedDateTime | string | null | undefined);
    }

    return toPlainDateTime(input as Temporal.PlainDateTime | string | null | undefined);
};

/** Extracts the calendar day from any canonical value. */
export const getPlainDate = (value: DateTimeValue | null): Temporal.PlainDate | null => {
    if (!value) {
        return null;
    }

    return value instanceof Temporal.PlainDate ? value : value.toPlainDate();
};

/** Extracts the wall-clock time, or `null` for date-only values. */
export const getPlainTime = (value: DateTimeValue | null): Temporal.PlainTime | null => {
    if (!value || value instanceof Temporal.PlainDate) {
        return null;
    }

    return value.toPlainTime();
};

/** Extracts the IANA timezone, or `null` when the value carries none. */
export const getTimeZone = (value: DateTimeValue | null): string | null =>
    value instanceof Temporal.ZonedDateTime ? value.timeZoneId : null;

/**
 * Builds the canonical value from its parts. Returns `null` when there is no date yet.
 * Time defaults to midnight; in zoned mode the wall-clock is interpreted in `timeZone`.
 */
export const assembleValue = (
    plainDate: Temporal.PlainDate | null,
    plainTime: Temporal.PlainTime | null,
    timeZone: string,
    type: DateTimeInputType
): DateTimeValue | null => {
    if (!plainDate) {
        return null;
    }

    if (type === 'date') {
        return plainDate;
    }

    const plainDateTime = plainDate.toPlainDateTime(plainTime ?? undefined);

    return type === 'zonedDateTime' ? plainDateTime.toZonedDateTime(timeZone) : plainDateTime;
};
