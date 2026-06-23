import {Temporal} from 'temporal-polyfill';
import type {Matcher} from 'react-day-picker';
import type {CalendarDate, DisabledDateRange} from './dateTime.types';
import {plainDateToDate, toPlainDate} from './temporal';

/**
 * Formats a calendar date for display in the trigger input.
 * Uses `Intl.DateTimeFormat` so the output respects the consumer's locale, falling back
 * to the browser locale when `locale` is not provided. Returns '' when there is no date.
 */
export const formatPlainDate = (value: Temporal.PlainDate | null, locale?: string) => {
    if (!value) {
        return '';
    }

    return new Intl.DateTimeFormat(locale || undefined).format(plainDateToDate(value));
};

/**
 * Builds the list of `react-day-picker` disabled matchers from the consumer-facing date
 * constraints. Each `PlainDate` is bridged to a local-noon JS `Date` — DayPicker compares
 * by calendar day (and normalizes to noon itself), so the time component is irrelevant.
 */
export const getCalendarDisabledMatchers = (
    minDate?: CalendarDate,
    maxDate?: CalendarDate,
    disabledDates?: CalendarDate[],
    disabledDateRanges?: DisabledDateRange[]
): Matcher[] => {
    const matchers: Matcher[] = [];
    const minimumDate = toPlainDate(minDate);
    const maximumDate = toPlainDate(maxDate);
    const unavailableDates = (disabledDates ?? [])
        .map(toPlainDate)
        .filter((date): date is Temporal.PlainDate => date !== null)
        .map(plainDateToDate);
    const unavailableRanges = (disabledDateRanges ?? [])
        .map(range => ({from: toPlainDate(range.from), to: toPlainDate(range.to)}))
        .filter((range): range is {from: Temporal.PlainDate; to: Temporal.PlainDate} =>
            range.from !== null && range.to !== null);

    if (minimumDate) {
        matchers.push({before: plainDateToDate(minimumDate)});
    }

    if (maximumDate) {
        matchers.push({after: plainDateToDate(maximumDate)});
    }

    if (unavailableDates.length) {
        matchers.push(unavailableDates);
    }

    unavailableRanges.forEach(range => {
        matchers.push({from: plainDateToDate(range.from), to: plainDateToDate(range.to)});
    });

    return matchers;
};
