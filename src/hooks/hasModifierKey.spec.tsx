import { hasModifierKey } from './hasModifierKey';

describe('hasModifierKey', () => {
    const noModifier = { shiftKey: false, ctrlKey: false, metaKey: false, altKey: false };

    it('should count Shift, Ctrl, Meta and Alt as modifiers', () => {
        expect(hasModifierKey(noModifier)).toBe(false);
        expect(hasModifierKey({ ...noModifier, shiftKey: true })).toBe(true);
        expect(hasModifierKey({ ...noModifier, ctrlKey: true })).toBe(true);
        expect(hasModifierKey({ ...noModifier, metaKey: true })).toBe(true);
        expect(hasModifierKey({ ...noModifier, altKey: true })).toBe(true);
    });

    it('should ignore Shift alone with shift: false', () => {
        expect(hasModifierKey({ ...noModifier, shiftKey: true }, { shift: false })).toBe(false);
        expect(hasModifierKey({ ...noModifier, shiftKey: true, ctrlKey: true }, { shift: false })).toBe(true);
    });
});
