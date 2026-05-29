import {Temporal} from 'temporal-polyfill';
import type {Meridiem, TimeFormat} from '../TimeInput/TimeInput.types';

/** Strips all non-digit characters and keeps at most 4 digits (HHMM). */
const getSanitizedTimeDigits = (value?: string | null) => (value ?? '').replace(/\D/g, '').slice(0, 4);

/** Parses a canonical `HH:mm` string and returns a Temporal.PlainTime, or null if invalid. */
const parseCanonicalTimeValue = (value?: string | null) => {
    if (!value) {
        return null;
    }

    try {
        // Overflow: 'reject' throws on out-of-range times instead of clamping silently.
        return Temporal.PlainTime.from(value, {overflow: 'reject'});
    } catch {
        return null;
    }
};

export const formatTimeString = (value: Date) =>
    Temporal.PlainTime.from({hour: value.getHours(), minute: value.getMinutes()})
        .toString({smallestUnit: 'minute'});

/**
 * Converts a canonical `HH:mm` value into display-ready parts for the time input fields.
 * Returns empty strings when the value is absent or invalid.
 *
 * In 12h mode, hours are converted to the 1-12 range and the meridiem is derived.
 * The meridiem defaults to 'AM' when no valid value is provided.
 */
export const parseCanonicalTime = (value: string | null | undefined, timeFormat: TimeFormat) => {
    const plainTime = parseCanonicalTimeValue(value);

    if (!plainTime) {
        return {
            hours: '',
            minutes: '',
            meridiem: 'AM' as Meridiem
        };
    }

    const minutesValue = String(plainTime.minute).padStart(2, '0');
    const meridiem: Meridiem = plainTime.hour < 12 ? 'AM' : 'PM';
    // 24h keeps 0-23; 12h maps to the 1-12 display range (0 and 12 both show as 12).
    const displayHours = timeFormat === '12h' ? plainTime.hour % 12 || 12 : plainTime.hour;

    return {
        hours: String(displayHours).padStart(2, '0'),
        minutes: minutesValue,
        meridiem
    };
};

/**
 * Formats raw user input into the longest valid `HH:MM` prefix for the given format,
 * dropping digits that would push the hours or minutes out of range. Used as the
 * TimeInput change path to keep the field valid.
 * Examples (24h): `'1430'` -> `'14:30'`, `'2897'` -> `'2'`, `'14'` -> `'14'`.
 */
export const filterTimeInputValue = (value: string | null | undefined, timeFormat: TimeFormat) => {
    const digits = getSanitizedTimeDigits(value);

    if (digits === '') {
        return '';
    }

    const hoursMin = timeFormat === '12h' ? 1 : 0;
    const hoursMax = timeFormat === '12h' ? 12 : 23;
    const hours = digits.slice(0, 2);

    // First hour digit must still allow a valid two-digit hour to follow.
    if (hours.length === 1) {
        return Number(hours) <= Math.floor(hoursMax / 10) ? hours : '';
    }

    // Second hour digit out of range: keep only the first.
    if (Number(hours) < hoursMin || Number(hours) > hoursMax) {
        return hours[0];
    }

    const minutes = digits.slice(2, 4);

    if (minutes.length === 0) {
        return hours;
    }

    if (minutes.length === 1) {
        return Number(minutes) <= 5 ? `${hours}:${minutes}` : hours;
    }

    return Number(minutes) <= 59 ? `${hours}:${minutes}` : `${hours}:${minutes[0]}`;
};

/**
 * Converts user input (raw digit string) + current meridiem into a canonical 24h `HH:mm` string.
 * Returns `null` if the input is incomplete (fewer than 4 digits) or out of range.
 *
 * In 12h mode the 1-12 display range is shifted back to 0-23 (12 AM -> 0, 12 PM -> 12,
 * 1-11 PM -> 13-23); `Temporal.PlainTime` then validates and formats the canonical result.
 */
export const parseTimeInputValue = (
    value: string | null | undefined,
    timeFormat: TimeFormat,
    meridiem: Meridiem
) => {
    const digits = getSanitizedTimeDigits(value);

    if (digits.length !== 4) {
        return null;
    }

    const hours = Number(digits.slice(0, 2));
    const minutes = Number(digits.slice(2, 4));
    const hour24 = timeFormat === '12h' ?
        (meridiem === 'PM' ? (hours % 12) + 12 : hours % 12) :
        hours;

    try {
        // Overflow: 'reject' turns out-of-range hours/minutes into a null result.
        return Temporal.PlainTime.from({hour: hour24, minute: minutes}, {overflow: 'reject'})
            .toString({smallestUnit: 'minute'});
    } catch {
        return null;
    }
};
