import {filterInputValue} from './filterInputValue';

describe('InputFilter', () => {
    it('should return numbers only', () => {
        const testValue = 'test1234';
        expect(filterInputValue(testValue, false, false)).toBe('1234');
    });

    it('should return negative number', () => {
        const testValue = '-te12st34';
        expect(filterInputValue(testValue, true, false)).toBe('-1234');
    });

    it('should return positive number', () => {
        const testValue = '-te12st34';
        expect(filterInputValue(testValue, false, false)).toBe('1234');
    });

    it('should return decimal number', () => {
        const testValue = '-te12.st.34';
        expect(filterInputValue(testValue, false, true)).toBe('12.34');
    });

    it('should return negative number', () => {
        const testValue = '-te12.st.34';
        expect(filterInputValue(testValue, true, true)).toBe('-12.34');
    });
});
