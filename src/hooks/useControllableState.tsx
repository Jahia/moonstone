import {useState} from 'react';

/**
 * Manages a value that can be either controlled (via `value`) or uncontrolled
 * (seeded by `defaultValue`). Returns the current value and a setter that only
 * updates the internal state when uncontrolled; in controlled mode the parent
 * stays responsible for updating `value` (typically through `onChange`).
 */
export const useControllableState = <T,>(value: T | undefined, defaultValue: T) => {
    const [internalValue, setInternalValue] = useState<T>(defaultValue);
    const isControlled = value !== undefined;

    const setValue = (next: T) => {
        if (!isControlled) {
            setInternalValue(next);
        }
    };

    return [isControlled ? value : internalValue, setValue] as const;
};
