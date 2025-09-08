import React, {useRef, useEffect} from 'react';
import type {NumberInputProps} from './NumberInput.types';
import {BaseInput} from '../BaseInput';
import {onArrowIncrementation} from '~/hooks';
import {filterInput} from '~/utils/inputFilter';

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(({
    allowNegative = true,
    step = 1,
    min,
    max,
    onChange,
    ...props
}, ref) => {
    if ((max < 0 || min < 0) && !allowNegative) {
        console.warn('Warning: A min or max prop has been set to a negative but allowNegative is set to false.');
    }

    if (max < min) {
        console.warn('Warning: Maximum value is inferior to minimum value.');
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (typeof ref === 'function') {
            ref(inputRef.current);
        } else if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current = inputRef.current;
        }
    }, [ref]);

    console.log(ref);
    // Filters the value on mount
    useEffect(() => {
        const initialValue = inputRef.current?.value;
        console.log('initial value: ' + initialValue);

        if (inputRef.current) {
            const filteredValue = filterInput(initialValue, allowNegative);

            if (filteredValue !== initialValue) {
                inputRef.current.value = filteredValue;

                const inputEvent = new Event('input');
                inputRef.current.dispatchEvent(inputEvent);
            }
        }
    }, [allowNegative]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterInput(event.target.value, allowNegative);

        // Needed for uncontrolled component
        if (inputRef.current?.value !== filteredValue) {
            inputRef.current.value = filteredValue;
        }

        if (typeof onChange !== 'undefined') {
            const newEvent = {
                ...event,
                target: {
                    ...event.target,
                    value: filteredValue
                }
            } as React.ChangeEvent<HTMLInputElement>;

            onChange(newEvent);
        }
    };

    return (
        <BaseInput
            ref={inputRef}
            inputMode="numeric"
            min={min}
            max={max}
            {...props}
            onChange={handleOnChange}
            {...onArrowIncrementation({ref: inputRef, step: step, allowNegative: allowNegative, min: min, max: max, onChange: handleOnChange})}
            />
    );
});

NumberInput.displayName = 'NumberInput';
export {NumberInput};
