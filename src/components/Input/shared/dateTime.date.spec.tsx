import {
    isDateRange,
    getNormalizedDateRange,
    formatDateRangeDisplayValue,
    formatDateValueDisplayValue
} from './dateTime.date';

describe('isDateRange', () => {
    it('should return true for a range object', () => {
        expect(isDateRange({from: new Date(2026, 2, 8), to: new Date(2026, 2, 22)})).toBe(true);
    });

    it('should return true for a partial range with only from', () => {
        expect(isDateRange({from: new Date(2026, 2, 8)})).toBe(true);
    });

    it('should return true for an empty range object', () => {
        expect(isDateRange({})).toBe(true);
    });

    it('should return false for a Date', () => {
        expect(isDateRange(new Date(2026, 2, 8))).toBe(false);
    });

    it('should return false for null', () => {
        expect(isDateRange(null)).toBe(false);
    });

    it('should return false for undefined', () => {
        expect(isDateRange(undefined)).toBe(false);
    });
});

describe('getNormalizedDateRange', () => {
    it('should normalize both dates to midnight', () => {
        const result = getNormalizedDateRange({
            from: new Date(2026, 2, 8, 14, 30),
            to: new Date(2026, 2, 22, 9, 15)
        });

        expect(result).toEqual({
            from: new Date(2026, 2, 8),
            to: new Date(2026, 2, 22)
        });
    });

    it('should return a partial range when only from is provided', () => {
        const result = getNormalizedDateRange({from: new Date(2026, 2, 8)});

        expect(result).toEqual({from: new Date(2026, 2, 8), to: undefined});
    });

    it('should return a partial range when only to is provided', () => {
        const result = getNormalizedDateRange({to: new Date(2026, 2, 22)});

        expect(result).toEqual({from: undefined, to: new Date(2026, 2, 22)});
    });

    it('should return null for null input', () => {
        expect(getNormalizedDateRange(null)).toBeNull();
    });

    it('should return null for undefined input', () => {
        expect(getNormalizedDateRange(undefined)).toBeNull();
    });

    it('should return null when both dates are invalid', () => {
        expect(getNormalizedDateRange({from: new Date(NaN), to: new Date(NaN)})).toBeNull();
    });
});

describe('formatDateRangeDisplayValue', () => {
    it('should format a full range with separator', () => {
        const result = formatDateRangeDisplayValue(
            {from: new Date(2026, 2, 8), to: new Date(2026, 2, 22)},
            'en-US'
        );

        expect(result).toBe('3/8/2026 - 3/22/2026');
    });

    it('should format a partial range with only from', () => {
        const result = formatDateRangeDisplayValue(
            {from: new Date(2026, 2, 8)},
            'en-US'
        );

        expect(result).toBe('3/8/2026');
    });

    it('should format a partial range with only to', () => {
        const result = formatDateRangeDisplayValue(
            {to: new Date(2026, 2, 22)},
            'en-US'
        );

        expect(result).toBe('3/22/2026');
    });

    it('should return empty string for null', () => {
        expect(formatDateRangeDisplayValue(null)).toBe('');
    });
});

describe('formatDateValueDisplayValue', () => {
    it('should format a single date', () => {
        expect(formatDateValueDisplayValue(new Date(2026, 2, 8), 'en-US')).toBe('3/8/2026');
    });

    it('should format a date range', () => {
        const result = formatDateValueDisplayValue(
            {from: new Date(2026, 2, 8), to: new Date(2026, 2, 22)},
            'en-US'
        );

        expect(result).toBe('3/8/2026 - 3/22/2026');
    });

    it('should return empty string for null', () => {
        expect(formatDateValueDisplayValue(null)).toBe('');
    });
});
