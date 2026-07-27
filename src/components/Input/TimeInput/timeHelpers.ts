import {Temporal} from 'temporal-polyfill';
import type {Meridiem, TimeFormat} from './TimeInput.types';

/** The two editable segments of the field. */
export type TimeSegment = 'hour' | 'minute';

/**
 * Splits a `Temporal.PlainTime` into padded display parts, or empty strings when there is no value.
 * In 12h the hour maps to 1-12 (0 and 12 both show as 12).
 */
export const splitTime = (time: Temporal.PlainTime | null, timeFormat: TimeFormat) => {
    if (!time) {
        return {hour: '', minute: ''};
    }

    const displayHour = timeFormat === '12h' ? time.hour % 12 || 12 : time.hour;

    return {
        hour: String(displayHour).padStart(2, '0'),
        minute: String(time.minute).padStart(2, '0')
    };
};

/** The AM/PM half a time falls in (`'AM'` when there is no value). Only meaningful in 12h. */
export const getMeridiem = (time: Temporal.PlainTime | null): Meridiem => (time !== null && time.hour >= 12 ? 'PM' : 'AM');
/**
 * Takes the leading digits for one segment. One digit when it can't be a tens digit (auto-advance)
 * or the pair is out of range; two when the pair stays within `max`. `isComplete` = padded on display.
 */
const sliceSegment = (digits: string, max: number) => {
    const isSingleDigit = digits.length > 0 && Number(digits[0]) * 10 > max;
    const isTwoDigit = !isSingleDigit && digits.length >= 2 && Number(digits.slice(0, 2)) <= max;
    const value = digits.slice(0, isTwoDigit ? 2 : 1);

    return {value, isComplete: isSingleDigit || value.length === 2};
};

/**
 * Splits raw input into hour/minute segments like a native `<input type=time>`.
 * `is*Complete` means a segment is committed (padded on display) rather than still being typed.
 */
const splitTimeDigits = (input: string | null | undefined, timeFormat: TimeFormat) => {
    const digits = (input ?? '').replace(/\D/g, '').slice(0, 4);
    const hour = sliceSegment(digits, timeFormat === '12h' ? 12 : 23);
    const minute = sliceSegment(digits.slice(hour.value.length), 59);

    return {
        hour: hour.value,
        minute: minute.value,
        isHourComplete: hour.isComplete || minute.value.length > 0,
        isMinuteComplete: minute.isComplete
    };
};

/**
 * Formats raw input into the segmented `HH:MM` display. Committed segments are padded (`9` -> `09`);
 * the one being typed shows as-is. The colon appears with the first minute digit. `146` -> `14:06`.
 */
export const formatTimeInput = (input: string | null | undefined, timeFormat: TimeFormat) => {
    const {hour, minute, isHourComplete, isMinuteComplete} = splitTimeDigits(input, timeFormat);

    if (hour === '') {
        return '';
    }

    const hourText = isHourComplete ? hour.padStart(2, '0') : hour;

    if (minute === '') {
        return hourText;
    }

    return `${hourText}:${isMinuteComplete ? minute.padStart(2, '0') : minute}`;
};

/**
 * Parses raw input into the emitted `Temporal.PlainTime`, or `null` when empty. Hours pad left and a
 * lone minute digit is its units: `1` -> 01:00, `91` -> 09:01, `143` -> 14:03. 12h requires a
 * `meridiem` to map to 24h (12 AM -> 0, 12 PM -> 12); 24h takes none.
 */
export function parseTimeInput(input: string | null | undefined, timeFormat: '24h'): Temporal.PlainTime | null;
export function parseTimeInput(input: string | null | undefined, timeFormat: '12h', meridiem: Meridiem): Temporal.PlainTime | null;
export function parseTimeInput(
    input: string | null | undefined,
    timeFormat: TimeFormat,
    meridiem?: Meridiem
): Temporal.PlainTime | null {
    const {hour, minute} = splitTimeDigits(input, timeFormat);

    if (hour === '') {
        return null;
    }

    const hourNumber = Number(hour);
    const hour24 = timeFormat === '12h' ? (hourNumber % 12) + (meridiem === 'PM' ? 12 : 0) : hourNumber;

    try {
        return Temporal.PlainTime.from({hour: hour24, minute: minute === '' ? 0 : Number(minute)}, {overflow: 'reject'});
    } catch {
        return null;
    }
}

/**
 * Steps one segment by `delta`, wrapping within it with no carry: minute `59 -> 00`,
 * 24h hour `23 -> 00`, 12h hour `12 -> 01` (the meridiem is unchanged).
 */
export const stepTimeSegment = (
    time: Temporal.PlainTime,
    segment: TimeSegment,
    delta: number,
    timeFormat: TimeFormat
): Temporal.PlainTime => {
    if (segment === 'minute') {
        return time.with({minute: (time.minute + delta + 60) % 60});
    }

    if (timeFormat === '12h') {
        // Cycle the 1-12 display value within the current AM/PM half.
        const half = time.hour < 12 ? 0 : 12;
        return time.with({hour: half + (((time.hour % 12) + delta + 12) % 12)});
    }

    return time.with({hour: (time.hour + delta + 24) % 24});
};

/**
 * The hour/minute selection ranges of an `HH:MM` display. The caret's segment is whichever range
 * contains it (`caretIndex > hour.end` -> minute); each range also places the caret on a segment.
 */
export const getTimeSegments = (text: string): Record<TimeSegment, {start: number; end: number}> => {
    const colon = text.indexOf(':');
    const hourEnd = colon < 0 ? text.length : colon;

    return {
        hour: {start: 0, end: hourEnd},
        minute: colon < 0 ? {start: text.length, end: text.length} : {start: colon + 1, end: text.length}
    };
};
