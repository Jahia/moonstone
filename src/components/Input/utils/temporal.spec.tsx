import {Temporal} from 'temporal-polyfill';
import {
    dateToPlainDate,
    getTodayPlainDate,
    plainDateToDate,
    toPlainDate,
    toPlainDateTime,
    toPlainTime,
    toZonedDateTime
} from './temporal';

describe('temporal adapter', () => {
    describe('toPlainDate', () => {
        it('parses an ISO string', () => {
            expect(toPlainDate('2026-06-19')?.toString()).toBe('2026-06-19');
        });

        it('passes through a Temporal.PlainDate', () => {
            const date = Temporal.PlainDate.from('2026-06-19');
            expect(toPlainDate(date)?.toString()).toBe('2026-06-19');
        });

        it('returns null for null, undefined and invalid input', () => {
            expect(toPlainDate(null)).toBeNull();
            expect(toPlainDate(undefined)).toBeNull();
            expect(toPlainDate('not-a-date')).toBeNull();
        });
    });

    describe('toPlainTime', () => {
        it('parses an ISO string', () => {
            expect(toPlainTime('14:30')?.toString({smallestUnit: 'minute'})).toBe('14:30');
        });

        it('passes through a Temporal.PlainTime', () => {
            expect(toPlainTime(Temporal.PlainTime.from('09:05'))?.toString({smallestUnit: 'minute'})).toBe('09:05');
        });

        it('rejects an out-of-range time instead of clamping', () => {
            expect(toPlainTime('25:00')).toBeNull();
        });

        it('returns null for null, undefined and invalid input', () => {
            expect(toPlainTime(null)).toBeNull();
            expect(toPlainTime(undefined)).toBeNull();
            expect(toPlainTime('nope')).toBeNull();
        });
    });

    describe('toPlainDateTime', () => {
        it('parses an ISO string', () => {
            expect(toPlainDateTime('2026-06-19T14:30')?.toString()).toBe('2026-06-19T14:30:00');
        });

        it('returns null for absent or invalid input', () => {
            expect(toPlainDateTime(null)).toBeNull();
            expect(toPlainDateTime('2026-13-40T99:99')).toBeNull();
        });
    });

    describe('toZonedDateTime', () => {
        it('parses an ISO string with a time-zone annotation', () => {
            const zdt = toZonedDateTime('2026-06-19T14:30+02:00[Europe/Paris]');
            expect(zdt?.timeZoneId).toBe('Europe/Paris');
        });

        it('returns null for a string without a time zone', () => {
            expect(toZonedDateTime('2026-06-19T14:30')).toBeNull();
        });

        it('converts a Date to the same instant in the system time zone', () => {
            const date = new Date('2026-06-19T12:30:00Z');
            const zdt = toZonedDateTime(date);

            expect(zdt?.epochMilliseconds).toBe(date.getTime());
            expect(zdt?.timeZoneId).toBe(Temporal.Now.timeZoneId());
        });

        it('converts a Temporal.Instant to the same instant in the system time zone', () => {
            const instant = Temporal.Instant.from('2026-06-19T12:30:00Z');
            const zdt = toZonedDateTime(instant);

            expect(zdt?.epochMilliseconds).toBe(instant.epochMilliseconds);
            expect(zdt?.timeZoneId).toBe(Temporal.Now.timeZoneId());
        });

        it('converts a UTC ISO string to the same instant in the system time zone', () => {
            const zdt = toZonedDateTime('2026-06-19T12:30:00Z');

            expect(zdt?.epochMilliseconds).toBe(new Date('2026-06-19T12:30:00Z').getTime());
            expect(zdt?.timeZoneId).toBe(Temporal.Now.timeZoneId());
        });

        it('converts an offset ISO string to the same instant in the system time zone', () => {
            const zdt = toZonedDateTime('2026-06-19T14:30:00+02:00');

            expect(zdt?.epochMilliseconds).toBe(new Date('2026-06-19T12:30:00Z').getTime());
        });

        it('returns null for absent input', () => {
            expect(toZonedDateTime(null)).toBeNull();
        });

        it('returns null for an invalid Date', () => {
            expect(toZonedDateTime(new Date('invalid'))).toBeNull();
        });
    });

    describe('Date bridge', () => {
        it('converts a PlainDate to a local-noon Date preserving the calendar day', () => {
            const date = plainDateToDate(Temporal.PlainDate.from('2026-06-19'));
            expect(date.getFullYear()).toBe(2026);
            expect(date.getMonth()).toBe(5); // June (0-indexed)
            expect(date.getDate()).toBe(19);
            expect(date.getHours()).toBe(12);
        });

        it('round-trips PlainDate -> Date -> PlainDate', () => {
            const original = Temporal.PlainDate.from('2026-06-19');
            expect(dateToPlainDate(plainDateToDate(original)).equals(original)).toBe(true);
        });

        it('reads the calendar day from a Date', () => {
            expect(dateToPlainDate(new Date(2026, 5, 19)).toString()).toBe('2026-06-19');
        });
    });

    describe('getTodayPlainDate', () => {
        it('returns the current calendar date', () => {
            expect(getTodayPlainDate().equals(Temporal.Now.plainDateISO())).toBe(true);
        });
    });
});
