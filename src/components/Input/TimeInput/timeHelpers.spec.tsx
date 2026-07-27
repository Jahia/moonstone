import {Temporal} from 'temporal-polyfill';
import {completeTimeInput, filterTimeInputValue, splitTime} from './timeHelpers';

// Characterization tests: they pin the CURRENT behavior of the time helpers so the Step 02
// (native entry) rewrite to native `<input type=time>` segmented entry shows up as an explicit
// diff here. The cases marked "Changes: native entry" are the ones the native model will replace
// (e.g. `123` currently pads minutes on the right → `12:30`; native gives `12:03`).

describe('timeHelpers (current behavior)', () => {
    describe('splitTime', () => {
        it('returns empty parts with an AM meridiem for no value', () => {
            expect(splitTime(null, '24h')).toEqual({hours: '', minutes: '', meridiem: 'AM'});
        });

        it('splits a 24h time as-is', () => {
            expect(splitTime(Temporal.PlainTime.from('14:30'), '24h')).toEqual({hours: '14', minutes: '30', meridiem: 'PM'});
        });

        it('maps a 24h time into the 12h display range with a meridiem', () => {
            expect(splitTime(Temporal.PlainTime.from('14:30'), '12h')).toEqual({hours: '02', minutes: '30', meridiem: 'PM'});
        });

        it('shows midnight as 12 AM and noon as 12 PM in 12h', () => {
            expect(splitTime(Temporal.PlainTime.from('00:00'), '12h')).toMatchObject({hours: '12', meridiem: 'AM'});
            expect(splitTime(Temporal.PlainTime.from('12:00'), '12h')).toMatchObject({hours: '12', meridiem: 'PM'});
        });
    });

    describe('filterTimeInputValue (24h)', () => {
        it('keeps a complete entry as HH:MM', () => {
            expect(filterTimeInputValue('1430', '24h')).toBe('14:30');
        });

        it('keeps the longest valid prefix and drops the rest', () => {
            expect(filterTimeInputValue('2897', '24h')).toBe('2');
            expect(filterTimeInputValue('146', '24h')).toBe('14');
        });

        it('returns empty for empty input', () => {
            expect(filterTimeInputValue('', '24h')).toBe('');
        });

        // Changes: native entry — a first hour digit > 2 is currently dropped; native will
        // auto-advance it to `0d` and route further digits to the minutes segment.
        it('currently drops a first hour digit greater than 2', () => {
            expect(filterTimeInputValue('3', '24h')).toBe('');
            expect(filterTimeInputValue('9', '24h')).toBe('');
        });

        // Changes: native entry — `123` currently becomes `12:3` (→ 12:30 on blur); native gives `12:03`.
        it('currently pads the minutes on the right', () => {
            expect(filterTimeInputValue('123', '24h')).toBe('12:3');
        });
    });

    describe('filterTimeInputValue (12h)', () => {
        // Changes: native entry — a first hour digit > 1 is currently dropped.
        it('currently drops a first hour digit greater than 1', () => {
            expect(filterTimeInputValue('2', '12h')).toBe('');
        });

        it('rejects 00 as hours (minimum is 1), keeping the first digit', () => {
            expect(filterTimeInputValue('00', '12h')).toBe('0');
        });
    });

    describe('completeTimeInput', () => {
        const toStr = (value: Temporal.PlainTime | null) => value?.toString({smallestUnit: 'minute'}) ?? null;

        it('completes a partial entry, padding hours left and minutes right', () => {
            expect(toStr(completeTimeInput('1', '24h', 'AM'))).toBe('01:00');
            expect(toStr(completeTimeInput('143', '24h', 'AM'))).toBe('14:30');
        });

        it('returns null for empty input', () => {
            expect(completeTimeInput('', '24h', 'AM')).toBeNull();
        });

        it('maps the 12h range back to 24h using the meridiem', () => {
            expect(toStr(completeTimeInput('1200', '12h', 'AM'))).toBe('00:00');
            expect(toStr(completeTimeInput('1200', '12h', 'PM'))).toBe('12:00');
            expect(toStr(completeTimeInput('0230', '12h', 'PM'))).toBe('14:30');
        });
    });
});
