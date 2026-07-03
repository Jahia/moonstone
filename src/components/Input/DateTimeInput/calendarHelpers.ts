import {Temporal} from 'temporal-polyfill';
import type {Matcher} from 'react-day-picker';
import type {CalendarDate, DayOfWeek, DisabledDateRange} from './DateTimeInput.types';
import {getTodayPlainDate, plainDateToDate, toPlainDate} from '../utils/temporal';

/**
 * Returns the first day of the week (0 = Sunday … 6 = Saturday) for a given locale,
 * using `Intl.Locale` week-info. Falls back to Monday (1) when the locale is absent or
 * the runtime doesn't support the weekInfo API.
 */
export const getWeekStartsOn = (locale?: string): 0 | 1 | 2 | 3 | 4 | 5 | 6 => {
    if (!locale) {
        return 1;
    }

    try {
        const intlLocale = new Intl.Locale(locale);
        // `getWeekInfo()` is in the newer spec; `weekInfo` is the older property form.
        const weekInfo = intlLocale.getWeekInfo?.() ?? intlLocale.weekInfo;
        const firstDay = weekInfo?.firstDay; // ISO: 1=Mon … 7=Sun
        if (typeof firstDay === 'number') {
            return (firstDay % 7) as 0 | 1 | 2 | 3 | 4 | 5 | 6; // maps 7→0 (Sun), 1→1 (Mon), …
        }
    } catch {
        // ignore invalid locale strings
    }

    return 1;
};

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

/** First day of the month (local noon) shown when the calendar opens for a given date. */
export const getDisplayMonth = (plainDate: Temporal.PlainDate | null): Date => {
    const date = plainDate ?? getTodayPlainDate();
    return new Date(date.year, date.month - 1, 1, 12);
};

/** Start-of-month `Date` for the DayPicker bounds, falling back to a year/month when no date. */
export const getMonthStart = (plainDate: Temporal.PlainDate | null, fallbackYear: number, fallbackMonth: number): Date =>
    plainDate ? new Date(plainDate.year, plainDate.month - 1, 1) : new Date(fallbackYear, fallbackMonth, 1);

/**
 * Builds the list of `react-day-picker` disabled matchers from the consumer-facing date
 * constraints. Each `PlainDate` is bridged to a local-noon JS `Date` — DayPicker compares
 * by calendar day (and normalizes to noon itself), so the time component is irrelevant.
 */
export const getCalendarDisabledMatchers = (
    minDate?: CalendarDate,
    maxDate?: CalendarDate,
    disabledDates?: CalendarDate[],
    disabledDateRanges?: DisabledDateRange[],
    disabledDaysOfWeek?: DayOfWeek[]
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

    if (disabledDaysOfWeek?.length) {
        matchers.push({dayOfWeek: disabledDaysOfWeek});
    }

    return matchers;
};
