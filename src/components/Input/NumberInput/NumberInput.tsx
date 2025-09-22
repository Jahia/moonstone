import React, {useRef, useEffect, useImperativeHandle} from 'react';
import type {NumberInputProps} from './NumberInput.types';
import {BaseInput} from '../BaseInput';
import {onArrowIncrementation} from '~/hooks';
import {filterInputValue} from '~/utils/filterInputValue';

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(({
    allowNegative = false,
    allowDecimal = false,
    step = 1,
    min,
    max,
    onChange,
    ...props
}, ref) => {
    if (((max && max < 0) || (min && min < 0)) && !allowNegative) {
        console.warn('Warning: A min or max prop has been set to a negative but allowNegative is set to false.');
    }

    if (max && min && max < min) {
        console.warn('Warning: Maximum value is inferior to minimum value.');
    }

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!, []);

    // Filters the value on mount
    useEffect(() => {
        const initialValue = inputRef.current?.value;

        if (inputRef.current) {
            const filteredValue = filterInputValue(initialValue || '', allowNegative, allowDecimal);

            if (filteredValue !== initialValue) {
                inputRef.current.value = filteredValue;
                inputRef.current.defaultValue = filteredValue;
            }
        }
    }, [allowNegative, allowDecimal]);

    return (
        <BaseInput
            ref={inputRef}
            hasFilteredValue
            inputMode={allowDecimal ? 'decimal' : 'numeric'}
            min={min}
            max={max}
            allowDecimal={allowDecimal}
            allowNegative={allowNegative}
            {...props}
            onChange={onChange}
            {...onArrowIncrementation({ref: inputRef, step: step, allowNegative: allowNegative, min: min, max: max, onChange: onChange})}
            />
    );
});

NumberInput.displayName = 'NumberInput';
export {NumberInput};
