import { shouldIgnoreKey } from './shouldIgnoreKey';

describe('shouldIgnoreKey', () => {
    const plain = { key: 'ArrowUp', defaultPrevented: false, shiftKey: false, ctrlKey: false, metaKey: false, altKey: false };

    it('should ignore a key already handled or held with Ctrl, Meta or Alt', () => {
        expect(shouldIgnoreKey(plain)).toBe(false);
        expect(shouldIgnoreKey({ ...plain, defaultPrevented: true })).toBe(true);
        expect(shouldIgnoreKey({ ...plain, ctrlKey: true })).toBe(true);
        expect(shouldIgnoreKey({ ...plain, metaKey: true })).toBe(true);
        expect(shouldIgnoreKey({ ...plain, altKey: true })).toBe(true);
    });

    it('should ignore Shift on a named key or Space, not on a typed character', () => {
        expect(shouldIgnoreKey({ ...plain, shiftKey: true })).toBe(true);
        expect(shouldIgnoreKey({ ...plain, key: ' ', shiftKey: true })).toBe(true);
        expect(shouldIgnoreKey({ ...plain, key: '*', shiftKey: true })).toBe(false);
    });
});
