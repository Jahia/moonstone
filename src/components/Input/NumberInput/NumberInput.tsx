import React, {useRef, useEffect} from 'react';
import type {NumberInputProps} from './NumberInput.types';
import {BaseInput} from '../BaseInput';
import {onArrowIncrementation} from '~/hooks';
import {filterInput} from '~/utils/inputFilter';

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(({
    allowNegative = true,
    allowDecimal = false,
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
        if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current = inputRef.current;
        }
    }, [ref]);

    // Filters the value on mount
    useEffect(() => {
        const initialValue = inputRef.current?.value;

        if (inputRef.current) {
            const filteredValue = filterInput(initialValue, allowNegative, allowDecimal);

            if (filteredValue !== initialValue) {
                inputRef.current.value = filteredValue;
                inputRef.current.defaultValue = filteredValue;
            }
        }
    }, [allowNegative, allowDecimal, onChange]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterInput(event.target.value, allowNegative, allowDecimal);

        if (inputRef.current?.value !== filteredValue) {
            inputRef.current.value = filteredValue;
            inputRef.current.defaultValue = filteredValue;
        }

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return (
        <BaseInput
            ref={inputRef}
            isNumberInput
            inputMode={allowDecimal ? 'decimal' : 'numeric'}
            min={min}
            max={max}
            allowDecimal={allowDecimal}
            allowNegative={allowNegative}
            {...props}
            onChange={handleOnChange}
            {...onArrowIncrementation({ref: inputRef, step: step, allowNegative: allowNegative, min: min, max: max, onChange: onChange})}
            />
    );
});

NumberInput.displayName = 'NumberInput';
export {NumberInput};
