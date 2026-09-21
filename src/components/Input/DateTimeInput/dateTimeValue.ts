import {Temporal} from 'temporal-polyfill';
import {toInstant, toPlainDate, toPlainDateTime, type InstantInput} from '../utils/temporal';
import type {DateTimeInputType} from './DateTimeInput.types';

/**
 * Internal helpers that bridge the single canonical `DateTimeInput` value and the
 * (date, time) parts its sub-controls render. Keeping the per-`type` branching
 * here keeps the component itself free of `instanceof`/conversion noise.
 *
 * - `'date'`          -> `Temporal.PlainDate`
 * - `'dateTime'`      -> `Temporal.PlainDateTime`
 * - `'zonedDateTime'` -> `Temporal.Instant` (zone-free; the zone is only used to display it)
 */
export type DateTimeValue = Temporal.PlainDate | Temporal.PlainDateTime | Temporal.Instant;

/** Any value the public API accepts (Temporal instance or ISO string). */
export type DateTimeValueInput = DateTimeValue | string | null | undefined;

/**
 * The current date/time for the given type, truncated to the minute — used as the
 * default when no `defaultValue` is provided (consumers pass `null` to start empty).
 */
export const getCurrentValue = (type: DateTimeInputType): DateTimeValue => {
    if (type === 'date') {
        return Temporal.Now.plainDateISO();
    }

    if (type === 'zonedDateTime') {
        return Temporal.Now.instant().round({smallestUnit: 'minute', roundingMode: 'trunc'});
    }

    return Temporal.Now.plainDateTimeISO().with({second: 0, millisecond: 0, microsecond: 0, nanosecond: 0});
};

/** Coerces a consumer value (Temporal instance or ISO string) to the canonical value for the type. */
export const parseValue = (input: DateTimeValueInput, type: DateTimeInputType): DateTimeValue | null => {
    if (type === 'date') {
        return toPlainDate(input as Temporal.PlainDate | string | null | undefined);
    }

    if (type === 'zonedDateTime') {
        return toInstant(input as InstantInput | null | undefined);
    }

    return toPlainDateTime(input as Temporal.PlainDateTime | string | null | undefined);
};

/** Extracts the calendar day from any canonical value, in `timeZone` for an instant. */
export const getPlainDate = (value: DateTimeValue | null, timeZone: string): Temporal.PlainDate | null => {
    if (!value) {
        return null;
    }

    if (value instanceof Temporal.Instant) {
        return value.toZonedDateTimeISO(timeZone).toPlainDate();
    }

    return value instanceof Temporal.PlainDate ? value : value.toPlainDate();
};

/** Extracts the wall-clock time (in `timeZone` for an instant), or `null` for date-only values. */
export const getPlainTime = (value: DateTimeValue | null, timeZone: string): Temporal.PlainTime | null => {
    if (!value || value instanceof Temporal.PlainDate) {
        return null;
    }

    return value instanceof Temporal.Instant ? value.toZonedDateTimeISO(timeZone).toPlainTime() : value.toPlainTime();
};

/**
 * Builds the canonical value from its parts. Returns `null` when there is no date yet.
 * Time defaults to midnight; in zoned mode the wall-clock is read in `timeZone` and emitted as an instant.
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

    return type === 'zonedDateTime' ? plainDateTime.toZonedDateTime(timeZone).toInstant() : plainDateTime;
};
