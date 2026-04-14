import {Temporal} from 'temporal-polyfill';
import type {Matcher} from 'react-day-picker';
import type {DisabledDateRange} from './dateTime.types';

const isValidDate = (value?: Date | null): value is Date => Boolean(value) && !Number.isNaN(value.getTime());

export const getNormalizedDate = (value?: Date | null) => {
    if (!isValidDate(value)) {
        return null;
    }

    if (
        value.getHours() === 0 &&
        value.getMinutes() === 0 &&
        value.getSeconds() === 0 &&
        value.getMilliseconds() === 0
    ) {
        return value;
    }

    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
};

export const getCanonicalDate = (value?: Date | null) => {
    const date = getNormalizedDate(value);

    if (!date) {
        return null;
    }

    return Temporal.PlainDate.from({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    });
};

export const getCurrentDate = () => {
    const today = Temporal.Now.plainDateISO();
    return new Date(today.year, today.month - 1, today.day);
};

/**
 * Formats a selected date for display in the trigger input.
 * Uses `Intl.DateTimeFormat` so the output respects the consumer's locale.
 * Falls back to the browser locale when `locale` is not provided.
 */
export const formatDateDisplayValue = (value?: Date | null, locale?: string) => {
    const date = getNormalizedDate(value);

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
    const minimumDate = getNormalizedDate(minDate);
    const maximumDate = getNormalizedDate(maxDate);
    const unavailableDates = disabledDates?.map(getNormalizedDate).filter((date): date is Date => Boolean(date));
    const unavailableRanges = disabledDateRanges?.map(range => ({
        from: getNormalizedDate(range.from),
        to: getNormalizedDate(range.to)
    })).filter((range): range is DisabledDateRange => Boolean(range.from && range.to));

    if (minimumDate) {
        matchers.push({before: minimumDate});
    }

    if (maximumDate) {
        matchers.push({after: maximumDate});
    }

    if (unavailableDates?.length) {
        matchers.push(unavailableDates);
    }

    if (unavailableRanges?.length) {
        unavailableRanges.forEach(range => {
            matchers.push(range);
        });
    }

    return matchers;
};

/**
 * Builds a UTC noon `Date` from a selected calendar date, used as the reference
 * point for computing timezone offsets in the timezone selector.
 *
 * Using noon UTC avoids DST edge cases where midnight local time could land
 * on the previous or next calendar day depending on the timezone.
 */
export const getTimezoneReferenceDate = (dateValue?: Date | null) => {
    const canonicalDate = getCanonicalDate(dateValue);

    if (!canonicalDate) {
        return null;
    }

    return new Date(Date.UTC(canonicalDate.year, canonicalDate.month - 1, canonicalDate.day, 12, 0, 0, 0));
};
