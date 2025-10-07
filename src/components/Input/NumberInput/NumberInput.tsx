import React, {useRef, useEffect, useImperativeHandle} from 'react';
import type {NumberInputProps} from './NumberInput.types';
import {BaseInput} from '../BaseInput';
import {onArrowIncrementation} from '~/hooks';
import {filterNumberInputValue} from '~/utils/filterNumberInputValue';

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(({
    allowNegative = false,
    allowDecimal = false,
    separator = '.',
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
            const filteredValue = filterNumberInputValue(initialValue || '', allowNegative, allowDecimal, separator);

            if (filteredValue !== initialValue) {
                inputRef.current.value = filteredValue;
                inputRef.current.defaultValue = filteredValue;
            }
        }
    }, [allowNegative, allowDecimal, separator]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterNumberInputValue(event.target.value, allowNegative, allowDecimal, separator);

        if (inputRef.current?.value !== filteredValue) {
            inputRef.current.value = filteredValue;
        }

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return (
        <BaseInput
            ref={inputRef}
            filterFunction={filterNumberInputValue}
            inputMode={allowDecimal ? 'decimal' : 'numeric'}
            min={min}
            max={max}
            allowDecimal={allowDecimal}
            allowNegative={allowNegative}
            separator={separator}
            {...props}
            onChange={handleOnChange}
            {...onArrowIncrementation({ref: inputRef, step: step, allowNegative: allowNegative, min: min, max: max, separator: separator})}
            />
    );
});

NumberInput.displayName = 'NumberInput';
export {NumberInput};
