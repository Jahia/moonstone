import {Temporal} from 'temporal-polyfill';
import type {DateTimeInputType, DateTimeInputValue} from './dateTime.types';
import {getCanonicalDate} from './dateTime.date';
import {normalizeCanonicalTime} from './dateTime.time';

/**
 * Converts a `DateTimeInputValue` into a resolved JS `Date` object.
 *
 * Rules by `type`:
 * - `'date'`     : time is assumed to be `00:00` (start of day); no timezone applied.
 * - `'datetime'` : combines date + time; applies timezone conversion if provided.
 *
 * When a timezone is present, `Temporal.ZonedDateTime.from` interprets the local
 * date+time as being in that timezone and converts it to UTC, so the returned `Date`
 * represents the correct absolute instant.
 *
 * Returns `null` if the date is missing, the time is missing (for `'datetime'`),
 * or if the resulting date string is not a valid date.
 */
export const getNormalizedDateTime = (type: DateTimeInputType, value: DateTimeInputValue) => {
    const dateValue = getCanonicalDate(value.date)?.toString();

    if (!dateValue) {
        return null;
    }

    // For 'date' type, default to midnight; for 'datetime', use the provided time.
    const timeValue = type === 'date' ? '00:00' : normalizeCanonicalTime(value.time);

    if (!timeValue) {
        return null;
    }

    if (value.timezone) {
        // Interpret the local datetime as being in the given timezone,
        // and convert to a UTC-based Date.
        return new Date(
            Temporal.ZonedDateTime.from(`${dateValue}T${timeValue}:00[${value.timezone}]`)
                .toInstant().epochMilliseconds
        );
    }

    // No timezone: `new Date('YYYY-MM-DDTHH:mm:ss')` is interpreted as local time by browsers.
    return new Date(`${dateValue}T${timeValue}:00`);
};
