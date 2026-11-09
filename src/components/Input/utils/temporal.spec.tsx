import { Temporal } from 'temporal-polyfill';

import {
    dateToPlainDate,
    getTodayPlainDate,
    isValidTimeZone,
    plainDateToDate,
    toInstant,
    toPlainDate,
    toPlainDateTime,
    toPlainTime,
} from './temporal';

describe('temporal adapter', () => {
    describe('toPlainDate', () => {
        it('should parse an ISO string', () => {
            expect(toPlainDate('2026-06-19')?.toString()).toBe('2026-06-19');
        });

        it('should pass through a Temporal.PlainDate', () => {
            const date = Temporal.PlainDate.from('2026-06-19');
            expect(toPlainDate(date)?.toString()).toBe('2026-06-19');
        });

        it('should return null for null, undefined and invalid input', () => {
            expect(toPlainDate(null)).toBeNull();
            expect(toPlainDate(undefined)).toBeNull();
            expect(toPlainDate('not-a-date')).toBeNull();
        });
    });

    describe('toPlainTime', () => {
        it('should parse an ISO string', () => {
            expect(toPlainTime('14:30')?.toString({ smallestUnit: 'minute' })).toBe('14:30');
        });

        it('should pass through a Temporal.PlainTime', () => {
            expect(toPlainTime(Temporal.PlainTime.from('09:05'))?.toString({ smallestUnit: 'minute' })).toBe('09:05');
        });

        it('should reject an out-of-range time instead of clamping', () => {
            expect(toPlainTime('25:00')).toBeNull();
        });

        it('should return null for null, undefined and invalid input', () => {
            expect(toPlainTime(null)).toBeNull();
            expect(toPlainTime(undefined)).toBeNull();
            expect(toPlainTime('nope')).toBeNull();
        });
    });

    describe('toPlainDateTime', () => {
        it('should parse an ISO string', () => {
            expect(toPlainDateTime('2026-06-19T14:30')?.toString()).toBe('2026-06-19T14:30:00');
        });

        it('should return null for absent or invalid input', () => {
            expect(toPlainDateTime(null)).toBeNull();
            expect(toPlainDateTime('2026-13-40T99:99')).toBeNull();
        });
    });

    describe('toInstant', () => {
        it('should read an offset ISO string with a time-zone annotation as its instant', () => {
            expect(toInstant('2026-06-19T14:30+02:00[Europe/Paris]')?.toString()).toBe('2026-06-19T12:30:00Z');
        });

        it('should return null for a string without an offset', () => {
            expect(toInstant('2026-06-19T14:30')).toBeNull();
        });

        it('should return a Temporal.Instant as is', () => {
            const instant = Temporal.Instant.from('2026-06-19T12:30:00Z');

            expect(toInstant(instant)?.equals(instant)).toBe(true);
        });

        it('should parse a UTC ISO string', () => {
            expect(toInstant('2026-06-19T12:30:00Z')?.epochMilliseconds).toBe(new Date('2026-06-19T12:30:00Z').getTime());
        });

        it('should parse an offset ISO string to the same instant', () => {
            expect(toInstant('2026-06-19T14:30:00+02:00')?.epochMilliseconds).toBe(new Date('2026-06-19T12:30:00Z').getTime());
        });

        it('should return null for absent input', () => {
            expect(toInstant(null)).toBeNull();
        });
    });

    describe('isValidTimeZone', () => {
        it('should accept an IANA identifier and reject anything else', () => {
            expect(isValidTimeZone('Europe/Paris')).toBe(true);
            expect(isValidTimeZone('UTC')).toBe(true);
            expect(isValidTimeZone('Mars/Olympus')).toBe(false);
            expect(isValidTimeZone('')).toBe(false);
            expect(isValidTimeZone(undefined)).toBe(false);
        });
    });

    describe('Date bridge', () => {
        it('should convert a PlainDate to a local-noon Date preserving the calendar day', () => {
            const date = plainDateToDate(Temporal.PlainDate.from('2026-06-19'));
            expect(date.getFullYear()).toBe(2026);
            expect(date.getMonth()).toBe(5); // June (0-indexed)
            expect(date.getDate()).toBe(19);
            expect(date.getHours()).toBe(12);
        });

        it('should round-trip PlainDate -> Date -> PlainDate', () => {
            const original = Temporal.PlainDate.from('2026-06-19');
            expect(dateToPlainDate(plainDateToDate(original)).equals(original)).toBe(true);
        });

        it('should read the calendar day from a Date', () => {
            expect(dateToPlainDate(new Date(2026, 5, 19)).toString()).toBe('2026-06-19');
        });
    });

    describe('getTodayPlainDate', () => {
        it('should return the current calendar date', () => {
            expect(getTodayPlainDate().equals(Temporal.Now.plainDateISO())).toBe(true);
        });
    });
});
