import {Temporal} from 'temporal-polyfill';
import {toPlainDate, toPlainDateTime, toZonedDateTime, type ZonedDateTimeInput} from '../utils/temporal';
import type {CalendarDate, DateTimeInputType} from './DateTimeInput.types';

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
export type DateTimeValueInput = DateTimeValue | Temporal.Instant | Date | string | null | undefined;

/**
 * The current date/time/zone for the given type, truncated to the minute — used as the
 * default when no `defaultValue` is provided (consumers pass `null` to start empty).
 */
export const getCurrentValue = (type: DateTimeInputType): DateTimeValue => {
    if (type === 'date') {
        return Temporal.Now.plainDateISO();
    }

    const toMinute = {second: 0, millisecond: 0, microsecond: 0, nanosecond: 0};

    return type === 'zonedDateTime' ?
        Temporal.Now.zonedDateTimeISO().with(toMinute) :
        Temporal.Now.plainDateTimeISO().with(toMinute);
};

/**
 * Coerces a consumer value (Temporal instance or ISO string) to the canonical value for the type.
 * `fallbackTimeZone` (zoned mode only) anchors a zone-less value instead of the system zone.
 */
export const parseValue = (input: DateTimeValueInput, type: DateTimeInputType, fallbackTimeZone?: string): DateTimeValue | null => {
    if (type === 'date') {
        return toPlainDate(input as Temporal.PlainDate | string | null | undefined);
    }

    if (type === 'zonedDateTime') {
        return toZonedDateTime(input as ZonedDateTimeInput | null | undefined, fallbackTimeZone);
    }

    return toPlainDateTime(input as Temporal.PlainDateTime | string | null | undefined);
};

/** A `minDateTime`/`maxDateTime` bound: a wall-clock datetime, or an instant in zoned mode. */
export type DateTimeBoundInput = Temporal.PlainDateTime | ZonedDateTimeInput;

/** A normalized bound, in the canonical type of the mode. */
export type DateTimeBound = Temporal.PlainDateTime | Temporal.ZonedDateTime | null;

/**
 * Normalizes a datetime bound for the mode. Zoned bounds are instants, projected into
 * `timeZone` so their calendar day follows the selected zone.
 */
const toDateTimeBound = (bound: DateTimeBoundInput | null | undefined, type: DateTimeInputType, timeZone: string): DateTimeBound => {
    if (bound === null || bound === undefined || type === 'date') {
        return null;
    }

    if (type === 'zonedDateTime') {
        return toZonedDateTime(bound as ZonedDateTimeInput)?.withTimeZone(timeZone) ?? null;
    }

    return toPlainDateTime(bound as Temporal.PlainDateTime | string);
};

/** Resolves the datetime bounds and the day-level calendar bounds they imply; the datetime form wins. */
export const getEffectiveBounds = ({minDate, maxDate, minDateTime, maxDateTime, type, timeZone}: {
    minDate?: CalendarDate;
    maxDate?: CalendarDate;
    minDateTime?: DateTimeBoundInput;
    maxDateTime?: DateTimeBoundInput;
    type: DateTimeInputType;
    timeZone: string;
}): {minBound: DateTimeBound; maxBound: DateTimeBound; effectiveMinDate?: CalendarDate; effectiveMaxDate?: CalendarDate} => {
    if ((minDateTime && minDate) || (maxDateTime && maxDate)) {
        console.warn('Ignoring `minDate`/`maxDate`: `minDateTime`/`maxDateTime` wins when both are set.');
    }

    const minBound = toDateTimeBound(minDateTime, type, timeZone);
    const maxBound = toDateTimeBound(maxDateTime, type, timeZone);

    return {
        minBound,
        maxBound,
        effectiveMinDate: minBound?.toPlainDate() ?? minDate,
        effectiveMaxDate: maxBound?.toPlainDate() ?? maxDate
    };
};

/**
 * Whether the value sits inside the datetime bounds (inclusive). Zoned values compare as
 * instants, plain values by wall-clock; date-only values and missing bounds always pass.
 */
export const isWithinBounds = (value: DateTimeValue | null, minBound: DateTimeBound, maxBound: DateTimeBound): boolean => {
    if (!value || value instanceof Temporal.PlainDate) {
        return true;
    }

    if (value instanceof Temporal.ZonedDateTime) {
        return (!(minBound instanceof Temporal.ZonedDateTime) || Temporal.Instant.compare(value.toInstant(), minBound.toInstant()) >= 0) &&
            (!(maxBound instanceof Temporal.ZonedDateTime) || Temporal.Instant.compare(value.toInstant(), maxBound.toInstant()) <= 0);
    }

    return (!(minBound instanceof Temporal.PlainDateTime) || Temporal.PlainDateTime.compare(value, minBound) >= 0) &&
        (!(maxBound instanceof Temporal.PlainDateTime) || Temporal.PlainDateTime.compare(value, maxBound) <= 0);
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
