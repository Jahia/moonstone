import {Temporal} from 'temporal-polyfill';
import {formatTimeInput, getMeridiem, getTimeSegments, parseTimeInput, splitTime, stepTimeSegment} from './timeHelpers';

const time = (iso: string) => Temporal.PlainTime.from(iso);
const toStr = (value: Temporal.PlainTime | null) => value?.toString({smallestUnit: 'minute'}) ?? null;

describe('timeHelpers', () => {
    describe('splitTime', () => {
        it('returns empty parts for no value', () => {
            expect(splitTime(null, '24h')).toEqual({hour: '', minute: ''});
        });

        it('splits a 24h time as-is', () => {
            expect(splitTime(time('14:30'), '24h')).toEqual({hour: '14', minute: '30'});
        });

        it('maps a 24h time into the 12h display range', () => {
            expect(splitTime(time('14:30'), '12h')).toEqual({hour: '02', minute: '30'});
        });

        it('shows both midnight and noon as 12 in 12h', () => {
            expect(splitTime(time('00:00'), '12h')).toEqual({hour: '12', minute: '00'});
            expect(splitTime(time('12:00'), '12h')).toEqual({hour: '12', minute: '00'});
        });
    });

    describe('getMeridiem', () => {
        it('reads the AM/PM half from the hour', () => {
            expect(getMeridiem(time('00:00'))).toBe('AM');
            expect(getMeridiem(time('11:59'))).toBe('AM');
            expect(getMeridiem(time('12:00'))).toBe('PM');
            expect(getMeridiem(time('14:30'))).toBe('PM');
        });
    });

    describe('formatTimeInput — segmented display (24h)', () => {
        it.each([
            ['', ''],
            ['3', '03'], // First hour digit > 2 auto-advances to a padded hour.
            ['9', '09'],
            ['1', '1'], // Could still take a second hour digit, so stays tentative.
            ['12', '12'],
            ['93', '09:3'], // 9 auto-advances to the hour; 3 is a tentative minute digit.
            ['930', '09:30'],
            ['123', '12:3'],
            ['146', '14:06'], // Minute 6 can't be a tens digit -> padded and committed.
            ['1234', '12:34']
        ])('formats %p as %p', (input, expected) => {
            expect(formatTimeInput(input, '24h')).toBe(expected);
        });
    });

    describe('formatTimeInput — segmented display (12h)', () => {
        it.each([
            ['2', '02'], // First hour digit > 1 auto-advances.
            ['1', '1'],
            ['12', '12'],
            ['13', '01:3'] // 13 isn't a valid 12h hour: 1 commits as 01, 3 becomes the minute.
        ])('formats %p as %p', (input, expected) => {
            expect(formatTimeInput(input, '12h')).toBe(expected);
        });
    });

    describe('parseTimeInput', () => {
        it.each([
            ['1', '01:00'],
            ['91', '09:01'],
            ['143', '14:03'],
            ['1430', '14:30'],
            ['930', '09:30']
        ])('parses %p to %p (24h, hours pad left, a lone minute digit is its units)', (input, expected) => {
            expect(toStr(parseTimeInput(input, '24h'))).toBe(expected);
        });

        it('returns null for empty input', () => {
            expect(parseTimeInput('', '24h')).toBeNull();
        });

        it('maps the 12h range back to 24h using the meridiem', () => {
            expect(toStr(parseTimeInput('1200', '12h', 'AM'))).toBe('00:00');
            expect(toStr(parseTimeInput('1200', '12h', 'PM'))).toBe('12:00');
            expect(toStr(parseTimeInput('0230', '12h', 'PM'))).toBe('14:30');
        });
    });

    describe('stepTimeSegment', () => {
        it('steps the minute and wraps at the hour boundary without carry', () => {
            expect(toStr(stepTimeSegment(time('14:30'), 'minute', 1, '24h'))).toBe('14:31');
            expect(toStr(stepTimeSegment(time('14:59'), 'minute', 1, '24h'))).toBe('14:00');
            expect(toStr(stepTimeSegment(time('14:00'), 'minute', -1, '24h'))).toBe('14:59');
        });

        it('steps and wraps the 24h hour', () => {
            expect(toStr(stepTimeSegment(time('23:15'), 'hour', 1, '24h'))).toBe('00:15');
            expect(toStr(stepTimeSegment(time('00:15'), 'hour', -1, '24h'))).toBe('23:15');
        });

        it('cycles the 12h hour within the current AM/PM half', () => {
            expect(toStr(stepTimeSegment(time('23:00'), 'hour', 1, '12h'))).toBe('12:00'); // 11PM -> 12PM
            expect(toStr(stepTimeSegment(time('00:00'), 'hour', 1, '12h'))).toBe('01:00'); // 12AM -> 1AM
            expect(toStr(stepTimeSegment(time('11:00'), 'hour', 1, '12h'))).toBe('00:00'); // 11AM -> 12AM
        });
    });

    describe('getTimeSegments', () => {
        it('returns the hour and minute ranges of an HH:MM display', () => {
            expect(getTimeSegments('14:30')).toEqual({hour: {start: 0, end: 2}, minute: {start: 3, end: 5}});
        });

        it('collapses the minute range when no colon exists yet', () => {
            expect(getTimeSegments('14')).toEqual({hour: {start: 0, end: 2}, minute: {start: 2, end: 2}});
        });
    });
});
