import {isValid, parse} from 'date-fns';
import {fromZonedTime} from 'date-fns-tz';
import type {DateTimeInputType, DateTimeInputValue} from './dateTime.types';
import {CANONICAL_DATE_FORMAT, normalizeDateString} from './dateTime.date';
import {CANONICAL_TIME_FORMAT, normalizeCanonicalTime} from './dateTime.time';

/**
 * Converts a `DateTimeInputValue` into a resolved JS `Date` object.
 *
 * Rules by `type`:
 * - `'time'`     : always returns `null` — no date reference, no absolute moment.
 * - `'date'`     : time is assumed to be `00:00` (start of day); no timezone applied.
 * - `'datetime'` : combines date + time; applies timezone conversion if provided.
 *
 * When a timezone is present, `fromZonedTime` interprets the local date+time as
 * being in that timezone and converts it to UTC, so the returned `Date` represents
 * the correct absolute instant.
 *
 * Returns `null` if the date is missing, the time is missing (for `'datetime'`),
 * or if the resulting date string is not a valid date.
 */
export const getNormalizedDateTime = (type: DateTimeInputType, value: DateTimeInputValue) => {
    if (type === 'time') {
        return null;
    }

    const dateValue = normalizeDateString(value.date);

    if (!dateValue) {
        return null;
    }

    // For 'date' type, default to midnight; for 'datetime', use the provided time.
    const timeValue = type === 'date' ? '00:00' : normalizeCanonicalTime(value.time);

    if (!timeValue) {
        return null;
    }

    const dateTimeString = `${dateValue}T${timeValue}:00`;

    if (value.timezone) {
        // Interpret the local datetime as being in the given timezone,
        // and convert to a UTC-based Date.
        return fromZonedTime(dateTimeString, value.timezone);
    }

    // No timezone: parse as local time using date-fns.
    const parsedDateTime = parse(
        `${dateValue} ${timeValue}`,
        `${CANONICAL_DATE_FORMAT} ${CANONICAL_TIME_FORMAT}`,
        new Date()
    );

    if (!isValid(parsedDateTime)) {
        return null;
    }

    return parsedDateTime;
};
