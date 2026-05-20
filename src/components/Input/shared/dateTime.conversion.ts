import {Temporal} from 'temporal-polyfill';
import type {DateTimeInputType, DateTimeInputValue} from './dateTime.types';
import {getCanonicalDate, getNormalizedDate} from './dateTime.date';
import {formatTimeString} from './dateTime.time';

/**
 * Converts a `DateTimeInputValue` into a resolved JS `Date` object.
 *
 * Rules by `type`:
 * - `'date'`     : returns the date at midnight; any time component is ignored.
 * - `'datetime'` : uses hours and minutes from `value.date`; applies timezone
 *                  conversion when a timezone is provided.
 *
 * When a timezone is present, `Temporal.ZonedDateTime.from` interprets the local
 * date+time as being in that timezone and converts it to UTC, so the returned `Date`
 * represents the correct absolute instant.
 *
 * Returns `null` if the date is missing or invalid.
 */
export const getNormalizedDateTime = (type: DateTimeInputType, value: DateTimeInputValue) => {
    if (!value.date) {
        return null;
    }

    if (type === 'date') {
        return getNormalizedDate(value.date);
    }

    const dateValue = getCanonicalDate(value.date)?.toString();
    const timeValue = formatTimeString(value.date);

    if (!dateValue || !timeValue) {
        return null;
    }

    if (value.timezone) {
        return new Date(
            Temporal.ZonedDateTime.from(`${dateValue}T${timeValue}:00[${value.timezone}]`)
                .toInstant().epochMilliseconds
        );
    }

    return new Date(`${dateValue}T${timeValue}:00`);
};
