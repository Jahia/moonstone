import {Temporal} from 'temporal-polyfill';
import type {Matcher} from 'react-day-picker';
import type {DisabledDateRange} from './dateTime.types';

/**
 * Converts a `Temporal.PlainDate` into a native `Date` (local midnight).
 * react-day-picker only accepts native `Date`, so this is the single boundary
 * where we hand calendar days over to the library.
 */
export const toCalendarDate = (date: Temporal.PlainDate) =>
    new Date(date.year, date.month - 1, date.day);

/**
 * Converts a native `Date` coming back from react-day-picker into a
 * `Temporal.PlainDate`, reading the local calendar fields (no time component).
 */
export const fromCalendarDate = (date: Date) =>
    Temporal.PlainDate.from({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    });

/**
 * Formats a selected date for display in the trigger input.
 * Uses the locale-aware `Temporal.PlainDate.toLocaleString` so the output
 * respects the consumer's locale, falling back to the browser locale.
 */
export const formatDateDisplayValue = (value?: Temporal.PlainDate | null, locale?: string) => {
    if (!value) {
        return '';
    }

    return value.toLocaleString(locale || undefined);
};

/**
 * Builds the list of `react-day-picker` disabled matchers from the consumer-facing
 * date constraint props. Each matcher type maps to a different DayPicker format:
 * - `{ before }` / `{ after }` for min/max bounds
 * - An array of `Date` for individual disabled dates
 * - `{ from, to }` objects for disabled ranges
 *
 * react-day-picker only accepts native `Date`, so every `PlainDate` is converted
 * to local midnight here, which also avoids off-by-one issues from timezone offsets.
 */
export const getCalendarDisabledMatchers = (
    minDate?: Temporal.PlainDate,
    maxDate?: Temporal.PlainDate,
    disabledDates?: Temporal.PlainDate[],
    disabledDateRanges?: DisabledDateRange[]
): Matcher[] => {
    const matchers: Matcher[] = [];

    if (minDate) {
        matchers.push({before: toCalendarDate(minDate)});
    }

    if (maxDate) {
        matchers.push({after: toCalendarDate(maxDate)});
    }

    if (disabledDates?.length) {
        matchers.push(disabledDates.map(toCalendarDate));
    }

    disabledDateRanges?.forEach(range => {
        matchers.push({from: toCalendarDate(range.from), to: toCalendarDate(range.to)});
    });

    return matchers;
};

/**
 * Builds a UTC noon `Date` from a selected calendar date, used as the reference
 * point for computing timezone offsets in the timezone selector.
 *
 * `TimezoneSelector.referenceDate` is part of that component's public `Date` API,
 * so this stays a `Date`. Using noon UTC avoids DST edge cases where midnight local
 * time could land on the previous or next calendar day depending on the timezone.
 */
export const getTimezoneReferenceDate = (date?: Temporal.PlainDate | null) => {
    if (!date) {
        return null;
    }

    return new Date(Date.UTC(date.year, date.month - 1, date.day, 12, 0, 0, 0));
};
