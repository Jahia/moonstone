import {Temporal} from 'temporal-polyfill';
import {toPlainDate, toPlainDateTime, toZonedDateTime, type ZonedDateTimeInput} from '../utils/temporal';
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
export type DateTimeValueInput = DateTimeValue | Temporal.Instant | string | null | undefined;

/** A `minDateTime` / `maxDateTime` bound once coerced: the time-carrying values only. */
export type DateTimeBound = Temporal.PlainDateTime | Temporal.ZonedDateTime;

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

/** Coerces a consumer value (Temporal instance or ISO string) to the canonical value for the type. */
export const parseValue = (input: DateTimeValueInput, type: DateTimeInputType): DateTimeValue | null => {
    if (type === 'date') {
        return toPlainDate(input as Temporal.PlainDate | string | null | undefined);
    }

    if (type === 'zonedDateTime') {
        return toZonedDateTime(input as ZonedDateTimeInput | null | undefined);
    }

    return toPlainDateTime(input as Temporal.PlainDateTime | string | null | undefined);
};

/**
 * Coerces a `minDateTime` / `maxDateTime` bound to the type's canonical value. `'date'` has no
 * time of day to bound, so its bounds are ignored (`null`) — `minDate` / `maxDate` cover it.
 */
export const parseBound = (input: DateTimeValueInput, type: DateTimeInputType): DateTimeBound | null =>
    type === 'date' ? null : parseValue(input, type) as DateTimeBound | null;

/**
 * The calendar day a bound falls on. A zoned bound is read in `timeZone` — the zone the calendar
 * displays — so the disabled days follow the zone the user is looking at, not the bound's own.
 */
export const getBoundPlainDate = (bound: DateTimeBound, timeZone: string): Temporal.PlainDate =>
    bound instanceof Temporal.ZonedDateTime ? bound.withTimeZone(timeZone).toPlainDate() : bound.toPlainDate();

// Zoned values compare as instants; plain ones as wall-clock. Mixed kinds cannot happen through
// `parseBound` (both sides derive from the same `type`) and are treated as "no bound".
const compareToBound = (value: DateTimeBound, bound: DateTimeBound): number | null => {
    if (value instanceof Temporal.ZonedDateTime && bound instanceof Temporal.ZonedDateTime) {
        return Temporal.ZonedDateTime.compare(value, bound);
    }

    if (value instanceof Temporal.PlainDateTime && bound instanceof Temporal.PlainDateTime) {
        return Temporal.PlainDateTime.compare(value, bound);
    }

    return null;
};

// The clamped result keeps the zone the user selected, so only the date/time fields move.
const inValueZone = (bound: DateTimeBound, value: DateTimeBound): DateTimeBound =>
    bound instanceof Temporal.ZonedDateTime && value instanceof Temporal.ZonedDateTime ?
        bound.withTimeZone(value.timeZoneId) :
        bound;

/**
 * Brings a value back inside `[min, max]` (both inclusive). Every emitted value goes through it,
 * so whichever field moved (calendar, typed date, time, "Today", timezone), the result respects
 * the bounds. Date-only values pass through untouched: their bounds live in the calendar.
 */
export const clampToBounds = (
    value: DateTimeValue | null,
    min: DateTimeBound | null,
    max: DateTimeBound | null
): DateTimeValue | null => {
    if (!value || value instanceof Temporal.PlainDate) {
        return value;
    }

    if (min && (compareToBound(value, min) ?? 0) < 0) {
        return inValueZone(min, value);
    }

    if (max && (compareToBound(value, max) ?? 0) > 0) {
        return inValueZone(max, value);
    }

    return value;
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
