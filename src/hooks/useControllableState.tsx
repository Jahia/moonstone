import { useCallback, useEffect, useRef, useState } from 'react';

type UseControllableStateProps<T> = {
    /**
     * Value of the controlled form. `undefined` selects the uncontrolled form
     */
    value: T | undefined;
    /**
     * First value of the uncontrolled form
     */
    defaultValue: T;
    /**
     * Called with each new value, in both forms
     */
    onChange?: (value: T) => void;
    /**
     * Component and prop, as the warning names them, such as `CollectionBar openFilterKey`
     */
    name: string;
};

/**
 * State of a prop that has a controlled and an uncontrolled form, such as `open` and `defaultOpen`.
 *
 * - With `value`, the consumer owns the state: the setter only calls `onChange`.
 * - Without it, the hook owns the state, from `defaultValue` on, and the setter also calls `onChange`.
 * - A component that changes from one form to the other gets a warning, as a React input does.
 *
 * @see https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
 */
export const useControllableState = <T, >({
    value,
    defaultValue,
    onChange,
    name,
}: UseControllableStateProps<T>) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const isControlled = value !== undefined;
    const wasControlled = useRef(isControlled);

    useEffect(() => {
        if (wasControlled.current !== isControlled) {
            const form = (controlled: boolean) => (controlled ? 'controlled' : 'uncontrolled');
            console.warn(`${name} changes from ${form(wasControlled.current)} to ${form(isControlled)}. Keep one form for the life of the component`);
            wasControlled.current = isControlled;
        }
    }, [isControlled, name]);

    const setValue = useCallback((next: T) => {
        if (!isControlled) {
            setUncontrolledValue(next);
        }

        onChange?.(next);
    }, [isControlled, onChange]);

    return [isControlled ? value : uncontrolledValue, setValue] as const;
};
