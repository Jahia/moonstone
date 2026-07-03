import {Temporal} from 'temporal-polyfill';
import type {Matcher} from 'react-day-picker';
import type {CalendarDate, DayOfWeek, DisabledDateRange} from './DateTimeInput.types';
import {getTodayPlainDate, plainDateToDate, toPlainDate} from '../utils/temporal';

/**
 * Returns the first day of the week for a given locale, using `Intl.Locale` week-info.
 * Falls back to Monday (1) when the locale is absent or the runtime doesn't support the weekInfo API.
 */
export const getWeekStartsOn = (locale?: string): DayOfWeek => {
    if (!locale) {
        return 1;
    }

    try {
        const intlLocale = new Intl.Locale(locale) as Intl.Locale & {
            getWeekInfo?(): {firstDay: number}; // newer spec
            weekInfo?: {firstDay: number}; // older property form
        };
        // Both forms exist: `getWeekInfo()` (newer spec) and `weekInfo` (older property).
        const firstDay = (intlLocale.getWeekInfo?.() ?? intlLocale.weekInfo)?.firstDay;

        // Intl uses ISO days: 1=Mon … 7=Sun. DayPicker uses 0=Sun, 1=Mon … 6=Sat.
        // Sunday is the only value that doesn't map 1:1 (ISO 7 → JS 0).
        if (firstDay === 7) return 0;
        if (firstDay !== undefined) return firstDay as DayOfWeek;
    } catch {
        // Invalid locale string — fall through to default.
    }

    return 1; // Monday
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
