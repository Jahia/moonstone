import {format, isValid, parse} from 'date-fns';
import type {Matcher} from 'react-day-picker';
import type {DisabledDateRange} from './dateTime.types';

export const CANONICAL_DATE_FORMAT = 'yyyy-MM-dd';

/** Parses a canonical date string and returns a Date, or null if invalid. */
const parseCanonicalDate = (value?: string | null) => {
    if (!value) {
        return null;
    }

    const parsedDate = parse(value, CANONICAL_DATE_FORMAT, new Date());

    // Double-check by re-formatting: rejects dates like '2026-02-30' that
    // date-fns would silently roll over to a valid date.
    if (!isValid(parsedDate) || format(parsedDate, CANONICAL_DATE_FORMAT) !== value) {
        return null;
    }

    return parsedDate;
};

export const normalizeDateString = (value?: string | null): string | null => {
    const parsedDate = parseCanonicalDate(value);

    if (!parsedDate) {
        return null;
    }

    return format(parsedDate, CANONICAL_DATE_FORMAT);
};

export const parseDateString = (value?: string | null): Date | null => {
    return parseCanonicalDate(value);
};

export const formatDateString = (value: Date) => format(value, CANONICAL_DATE_FORMAT);

export const getCurrentDateString = () => formatDateString(new Date());

/**
 * Formats a canonical date string for display in the trigger input.
 * Uses `Intl.DateTimeFormat` so the output respects the consumer's locale.
 * Falls back to the browser locale when `locale` is not provided.
 */
export const formatDateDisplayValue = (value?: string | null, locale?: string) => {
    const date = parseDateString(value);

    if (!date) {
        return '';
    }

    return new Intl.DateTimeFormat(locale || undefined).format(date);
};

/**
 * Builds the list of `react-day-picker` disabled matchers from the consumer-facing
 * date constraint props. Each matcher type maps to a different DayPicker format:
 * - `{ before }` / `{ after }` for min/max bounds
 * - An array of `Date` for individual disabled dates
 * - `{ from, to }` objects for disabled ranges
 *
 * Dates are normalized to midnight (no time component) to avoid off-by-one
 * issues caused by timezone offsets.
 */
export const getCalendarDisabledMatchers = (
    minDate?: Date,
    maxDate?: Date,
    disabledDates?: Date[],
    disabledDateRanges?: DisabledDateRange[]
): Matcher[] => {
    const matchers: Matcher[] = [];

    if (minDate) {
        matchers.push({before: new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())});
    }

    if (maxDate) {
        matchers.push({after: new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())});
    }

    if (disabledDates?.length) {
        matchers.push(disabledDates.map(date => new Date(date.getFullYear(), date.getMonth(), date.getDate())));
    }

    if (disabledDateRanges?.length) {
        disabledDateRanges.forEach(range => {
            matchers.push({
                from: new Date(range.from.getFullYear(), range.from.getMonth(), range.from.getDate()),
                to: new Date(range.to.getFullYear(), range.to.getMonth(), range.to.getDate())
            });
        });
    }

    return matchers;
};

/**
 * Builds a UTC noon `Date` from a canonical date string, used as the reference
 * point for computing timezone offsets in the timezone selector.
 *
 * Using noon UTC avoids DST edge cases where midnight local time could land
 * on the previous or next calendar day depending on the timezone.
 */
export const getTimezoneReferenceDate = (dateValue?: string | null) => {
    const parsedDate = parseCanonicalDate(dateValue);

    if (!parsedDate) {
        return null;
    }

    return new Date(Date.UTC(
        parsedDate.getFullYear(),
        parsedDate.getMonth(),
        parsedDate.getDate(),
        12,
        0,
        0,
        0
    ));
};
