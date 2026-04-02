import {Temporal} from 'temporal-polyfill';
import type {Matcher} from 'react-day-picker';
import type {DisabledDateRange} from './dateTime.types';

export const CANONICAL_DATE_FORMAT = 'yyyy-MM-dd';

/** Parses a canonical date string and returns a Temporal.PlainDate, or null if invalid. */
const parseCanonicalDate = (value?: string | null) => {
    if (!value) {
        return null;
    }

    try {
        // Overflow: 'reject' throws on dates like '2026-02-30' instead of rolling over.
        return Temporal.PlainDate.from(value, {overflow: 'reject'});
    } catch {
        return null;
    }
};

export const normalizeDateString = (value?: string | null): string | null => {
    return parseCanonicalDate(value)?.toString() ?? null;
};

export const parseDateString = (value?: string | null): Date | null => {
    const plainDate = parseCanonicalDate(value);

    if (!plainDate) {
        return null;
    }

    return new Date(plainDate.year, plainDate.month - 1, plainDate.day);
};

export const formatDateString = (value: Date) =>
    Temporal.PlainDate.from({
        year: value.getFullYear(),
        month: value.getMonth() + 1,
        day: value.getDate()
    }).toString();

export const getCurrentDateString = () => Temporal.Now.plainDateISO().toString();

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
    const plainDate = parseCanonicalDate(dateValue);

    if (!plainDate) {
        return null;
    }

    return new Date(Date.UTC(plainDate.year, plainDate.month - 1, plainDate.day, 12, 0, 0, 0));
};
