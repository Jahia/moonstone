import {Temporal} from 'temporal-polyfill';
import type {Meridiem, TimeFormat} from './dateTime.types';

export const CANONICAL_TIME_FORMAT = 'HH:mm';

export const sanitizeTimeSegment = (value?: string | null) => (value ?? '').replace(/\D/g, '').slice(0, 2);

/** Strips all non-digit characters and keeps at most 4 digits (HHMM). */
const getSanitizedTimeDigits = (value?: string | null) => (value ?? '').replace(/\D/g, '').slice(0, 4);

/**
 * Validates a partial hours string as the user types (1 or 2 digits).
 * Allows intermediate states like '1' or '2' that could still become valid
 * two-digit hours, preventing premature rejection while typing.
 *
 * 24h: accepts 0–23. Single digit: only 0–2 are valid starters.
 * 12h: accepts 1–12. Single digit: only 0–1 are valid starters.
 */
const isValidPartialHours = (hoursValue: string, timeFormat: TimeFormat) => {
    if (hoursValue === '') {
        return true;
    }

    if (timeFormat === '24h') {
        // Allow '0', '1', '2' as valid single-digit starts (could become 00–23)
        if (hoursValue.length === 1) {
            return Number(hoursValue) <= 2;
        }

        return Number(hoursValue) >= 0 && Number(hoursValue) <= 23;
    }

    // 12h: allow '0' or '1' as single-digit start (could become 01–12)
    if (hoursValue.length === 1) {
        return Number(hoursValue) <= 1;
    }

    const hours = Number(hoursValue);
    return hours >= 1 && hours <= 12;
};

/**
 * Validates a partial minutes string as the user types (1 or 2 digits).
 * Single digit: only 0–5 are valid starters (could become 00–59).
 */
const isValidPartialMinutes = (minutesValue: string) => {
    if (minutesValue === '') {
        return true;
    }

    // Allow '0'–'5' as single-digit starts (could become 00–59)
    if (minutesValue.length === 1) {
        return Number(minutesValue) <= 5;
    }

    const minutes = Number(minutesValue);
    return minutes >= 0 && minutes <= 59;
};

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

export const normalizeCanonicalTime = (value?: string | null) => {
    const plainTime = parseCanonicalTimeValue(value);

    if (!plainTime) {
        return null;
    }

    return plainTime.toString({smallestUnit: 'minute'});
};

export const formatTimeString = (value: Date) =>
    Temporal.PlainTime.from({hour: value.getHours(), minute: value.getMinutes()})
        .toString({smallestUnit: 'minute'});

export const getCurrentTimeString = () => Temporal.Now.plainTimeISO().toString({smallestUnit: 'minute'});

/**
 * Converts a canonical `HH:mm` value into display-ready parts for the time input fields.
 * Returns empty strings when the value is absent or invalid.
 *
 * In 12h mode, hours are converted to the 1–12 range and the meridiem is derived.
 * The meridiem defaults to 'AM' when no valid value is provided.
 */
export const parseCanonicalTime = (value?: string | null, timeFormat: TimeFormat = '24h') => {
    const plainTime = parseCanonicalTimeValue(value);

    if (!plainTime) {
        return {
            hours: '',
            minutes: '',
            meridiem: 'AM' as Meridiem
        };
    }

    const hoursValue = String(plainTime.hour).padStart(2, '0');
    const minutesValue = String(plainTime.minute).padStart(2, '0');
    const meridiem: Meridiem = plainTime.hour < 12 ? 'AM' : 'PM';

    if (timeFormat === '24h') {
        return {hours: hoursValue, minutes: minutesValue, meridiem};
    }

    return {
        hours: String(plainTime.hour % 12 || 12).padStart(2, '0'), // 01–12 range
        minutes: minutesValue,
        meridiem
    };
};

export const formatTimeDisplayValue = (value?: string | null, timeFormat: TimeFormat = '24h') => {
    const parsedTime = parseCanonicalTime(value, timeFormat);

    if (parsedTime.hours === '' || parsedTime.minutes === '') {
        return '';
    }

    const formattedTime = `${parsedTime.hours}:${parsedTime.minutes}`;
    return timeFormat === '12h' ? `${formattedTime} ${parsedTime.meridiem}` : formattedTime;
};

/**
 * Formats raw user input into a `HH:MM` string by stripping non-digits
 * and inserting a colon after the first two digits.
 * Example: `'1430'` → `'14:30'`, `'14'` → `'14'`
 */
export const formatTimeInputValue = (value?: string | null) => {
    const digits = getSanitizedTimeDigits(value);
    return digits.length > 2 ? `${digits.slice(0, 2)}:${digits.slice(2)}` : digits;
};

/** Returns `true` if the current input value is a valid partial or complete time. */
export const isValidPartialTimeInputValue = (value?: string | null, timeFormat: TimeFormat = '24h') => {
    const digits = getSanitizedTimeDigits(value);
    const hoursValue = digits.slice(0, 2);
    const minutesValue = digits.slice(2, 4);

    return isValidPartialHours(hoursValue, timeFormat) &&
        isValidPartialMinutes(minutesValue);
};

/**
 * Converts user input (raw digit string) + current meridiem into a canonical `HH:mm` string.
 * Returns `null` if the input is incomplete (fewer than 4 digits).
 */
export const parseTimeInputValue = (
    value?: string | null,
    timeFormat: TimeFormat = '24h',
    meridiem: Meridiem = 'AM'
) => {
    const digits = getSanitizedTimeDigits(value);

    if (digits.length !== 4) {
        return null;
    }

    const hoursValue = digits.slice(0, 2);
    const minutesValue = digits.slice(2, 4);

    if (timeFormat === '24h') {
        return buildCanonicalTime(hoursValue, minutesValue, timeFormat, 'AM');
    }

    return buildCanonicalTime(hoursValue, minutesValue, timeFormat, meridiem);
};

/**
 * Converts hours, minutes and meridiem into a canonical 24h `HH:mm` string.
 * In 12h mode, converts the 1–12 display range back to 0–23:
 * - 12 AM → 00, 1–11 AM → 01–11
 * - 12 PM → 12, 1–11 PM → 13–23
 *
 * Returns `null` if any field is missing, out of range, or not a number.
 */
export const buildCanonicalTime = (
    hoursValue: string,
    minutesValue: string,
    timeFormat: TimeFormat,
    meridiem: Meridiem
) => {
    const sanitizedHours = sanitizeTimeSegment(hoursValue);
    const sanitizedMinutes = sanitizeTimeSegment(minutesValue);

    if (sanitizedHours.length === 0 && sanitizedMinutes.length === 0) {
        return null;
    }

    if (sanitizedHours.length === 0 || sanitizedMinutes.length === 0) {
        return null;
    }

    const hours = Number(sanitizedHours);
    const minutes = Number(sanitizedMinutes);

    if (Number.isNaN(hours) || Number.isNaN(minutes) || minutes < 0 || minutes > 59) {
        return null;
    }

    if (timeFormat === '24h') {
        if (hours < 0 || hours > 23) {
            return null;
        }

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    if (hours < 1 || hours > 12) {
        return null;
    }

    // Convert 12h → 24h: 12 AM = 0, 12 PM = 12, others shift by 12 for PM
    const normalizedHours = meridiem === 'PM' ?
        (hours % 12) + 12 :
        hours === 12 ? 0 : hours;

    return `${normalizedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};
