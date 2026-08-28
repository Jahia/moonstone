import {Temporal} from 'temporal-polyfill';
import type {Matcher} from 'react-day-picker';
import type {CalendarDate, DateFormat, DayOfWeek, DisabledDateRange} from './DateTimeInput.types';
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
            getWeekInfo?(): {firstDay: number}; // Newer spec
            weekInfo?: {firstDay: number}; // Older property form
        };
        // Both forms exist: `getWeekInfo()` (newer spec) and `weekInfo` (older property).
        const firstDay = (intlLocale.getWeekInfo?.() ?? intlLocale.weekInfo)?.firstDay;

        // Intl uses ISO days: 1=Mon … 7=Sun. DayPicker uses 0=Sun, 1=Mon … 6=Sat.
        // Sunday is the only value that doesn't map 1:1 (ISO 7 → JS 0).
        if (firstDay === 7) {
            return 0;
        }

        if (firstDay !== undefined) {
            return firstDay as DayOfWeek;
        }
    } catch {
        // Invalid locale string — fall through to default.
    }

    return 1; // Monday
};

// Maps each supported LDML token to the `Intl` option that renders it.
const DATE_FORMAT_TOKENS: Record<string, Intl.DateTimeFormatOptions> = {
    yyyy: {year: 'numeric'},
    yy: {year: '2-digit'},
    MMMM: {month: 'long'},
    MMM: {month: 'short'},
    MM: {month: '2-digit'},
    M: {month: 'numeric'},
    dd: {day: '2-digit'},
    d: {day: 'numeric'}
};

// Longest tokens first so `yyyy` wins over `yy`, `MMMM` over `MM`/`M`, etc.
const DATE_FORMAT_TOKEN_RE = new RegExp(
    Object.keys(DATE_FORMAT_TOKENS).sort((a, b) => b.length - a.length).join('|'),
    'g'
);

// Valid only if it has at least one token and every remaining character is a non-letter —
// rejects junk (`'toto'`) and unsupported spellings (e.g. dayjs `YYYY`).
const isValidDateFormat = (dateFormat: string): boolean => {
    const separators = dateFormat.replace(DATE_FORMAT_TOKEN_RE, '');
    return separators.length < dateFormat.length && !/[a-zA-Z]/.test(separators);
};

// Each token renders via `Intl` in `locale` (localized names); other characters pass through verbatim.
const formatWithPattern = (value: Temporal.PlainDate, locale: string | undefined, dateFormat: string): string => {
    const date = plainDateToDate(value);
    return dateFormat.replace(DATE_FORMAT_TOKEN_RE, token =>
        new Intl.DateTimeFormat(locale || undefined, DATE_FORMAT_TOKENS[token]).format(date));
};

/**
 * Formats the date for the trigger input. Returns '' when there is no date.
 * A valid `dateFormat` fixes the order; otherwise `Intl` derives it from `locale`.
 * An invalid pattern warns and falls back.
 */
export const formatPlainDate = (value: Temporal.PlainDate | null, locale?: string, dateFormat?: DateFormat) => {
    if (!value) {
        return '';
    }

    if (dateFormat) {
        if (isValidDateFormat(dateFormat)) {
            return formatWithPattern(value, locale, dateFormat);
        }

        // Warns on every render by design: an invalid `dateFormat` is a consumer mistake, and it's
        // the consumer's job to fix it. Kept simple — no dedup state.
        console.warn(`Ignoring invalid \`dateFormat\` "${dateFormat}": expected LDML tokens such as \`dd/MM/yyyy\`. Falling back to the locale format.`);
    }

    return new Intl.DateTimeFormat(locale || undefined).format(plainDateToDate(value));
};

const getDateOrder = (locale: string, dateFormat?: DateFormat): string => {
    const parts = dateFormat && isValidDateFormat(dateFormat) ?
        dateFormat.match(DATE_FORMAT_TOKEN_RE) ?? [] :
        new Intl.DateTimeFormat(locale || undefined).formatToParts(0).map(part => part.type);

    return parts.map(part => part[0].toLowerCase()).filter(initial => 'ymd'.includes(initial)).join('');
};

export const parseDateInput = (text: string, locale: string, dateFormat?: DateFormat): Temporal.PlainDate | null => {
    const typedNumbers = text.split(/\D+/).filter(Boolean);

    if (typedNumbers.length !== 3) {
        return null;
    }

    const order = getDateOrder(locale, dateFormat);

    // A format missing one of y/m/d (or repeating one, e.g. 'MM/yyyy') cannot place all three numbers.
    if (order.length !== 3 || !['y', 'm', 'd'].every(field => order.includes(field))) {
        return null;
    }

    const valueOf = (field: string) => typedNumbers[order.indexOf(field)];
    const year = Number(valueOf('y'));

    return toPlainDate(`${year < 100 ? 2000 + year : year}-${valueOf('m').padStart(2, '0')}-${valueOf('d').padStart(2, '0')}`);
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
export const getCalendarDisabledMatchers = ({
    minDate,
    maxDate,
    disabledDates,
    disabledDateRanges,
    disabledDaysOfWeek
}: {
    minDate?: CalendarDate;
    maxDate?: CalendarDate;
    disabledDates?: CalendarDate[];
    disabledDateRanges?: DisabledDateRange[];
    disabledDaysOfWeek?: DayOfWeek[];
}): Matcher[] => {
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
