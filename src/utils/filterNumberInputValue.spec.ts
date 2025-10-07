import {filterNumberInputValue} from './filterNumberInputValue';

describe('InputFilter', () => {
    it('should return numbers only', () => {
        const testValue = 'test1234';
        expect(filterNumberInputValue(testValue, false, false, '.')).toBe('1234');
    });

    it('should return negative number', () => {
        const testValue = '-te12st34';
        expect(filterNumberInputValue(testValue, true, false, '.')).toBe('-1234');
    });

    it('should return positive number', () => {
        const testValue = '-te12st34';
        expect(filterNumberInputValue(testValue, false, false, '.')).toBe('1234');
    });

    it('should return decimal number', () => {
        const testValue = '-te12.st.34';
        expect(filterNumberInputValue(testValue, false, true, '.')).toBe('12.34');
    });

    it('should return negative number', () => {
        const testValue = '-te12.st.34';
        expect(filterNumberInputValue(testValue, true, true, '.')).toBe('-12.34');
    });

    it('should return decimal number with comma separator', () => {
        const testValue = '-te12,st,34';
        expect(filterNumberInputValue(testValue, false, true, ',')).toBe('12,34');
    });

    it('should return negative number with comma separator', () => {
        const testValue = '-te12,st,34';
        expect(filterNumberInputValue(testValue, true, true, ',')).toBe('-12,34');
    });

    it('should add 0 if the separator is in first place', () => {
        const testValue = '.';
        expect(filterNumberInputValue(testValue, false, true, '.')).toBe('0.');
    });

    it('should add 0 after - if the separator is in first place', () => {
        const testValue = '-.';
        expect(filterNumberInputValue(testValue, true, true, '.')).toBe('-0.');
    });
});
