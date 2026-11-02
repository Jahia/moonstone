type ModifierKeys = Pick<KeyboardEvent, 'shiftKey' | 'ctrlKey' | 'metaKey' | 'altKey'>;

// A key held with a modifier is left to the browser: Shift+Home selects, Ctrl+Arrow moves by word
export const hasModifierKey = (e: ModifierKeys, { shift = true } = {}) => (shift && e.shiftKey) || e.ctrlKey || e.metaKey || e.altKey;
