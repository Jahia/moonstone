import {filterInput} from './inputFilter';

describe('InputFilter', () => {
    it('should return numbers only', () => {
        const testValue = 'test1234';
        expect(filterInput(testValue, false, false)).toBe('1234');
    });

    it('should return negative number', () => {
        const testValue = '-te12st34';
        expect(filterInput(testValue, true, false)).toBe('-1234');
    });

    it('should return positive number', () => {
        const testValue = '-te12st34';
        expect(filterInput(testValue, false, false)).toBe('1234');
    });

    it('should return decimal number', () => {
        const testValue = '-te12.st.34';
        expect(filterInput(testValue, false, true)).toBe('12.34');
    });

    it('should return negative number', () => {
        const testValue = '-te12.st.34';
        expect(filterInput(testValue, true, true)).toBe('-12.34');
    });
});
