type KeyFields = Pick<KeyboardEvent, 'key' | 'defaultPrevented' | 'shiftKey' | 'ctrlKey' | 'metaKey' | 'altKey'>;

// A one-character `key` is what the key typed, so Shift may be part of it: `*` is Shift+8 on a US keyboard
const typesCharacter = (key: string) => key.length === 1 && key !== ' ';

// A key another handler already handled, or held with a modifier, is left to the browser: Shift+Home selects, Ctrl+Arrow moves by word
export const shouldIgnoreKey = (e: KeyFields) =>
    e.defaultPrevented || (e.shiftKey && !typesCharacter(e.key)) || e.ctrlKey || e.metaKey || e.altKey;
