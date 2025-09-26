import React, {useState, ChangeEvent} from 'react';
import type {UncontrolledBaseInputProps} from './BaseInput.types';
import {ControlledBaseInput} from './ControlledBaseInput';
import {filterInputValue} from '~/utils/filterInputValue';

export const UncontrolledBaseInput = React.forwardRef<HTMLInputElement, UncontrolledBaseInputProps>(({defaultValue, onChange, hasFilteredValue = false, allowNegative, allowDecimal, separator, ...props}, ref) => {
    const [inputValue, setBaseInputValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        if (hasFilteredValue) {
            value = filterInputValue(event.target.value, allowNegative, allowDecimal, separator);
        }

        setBaseInputValue(value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return <ControlledBaseInput ref={ref} value={inputValue} onChange={handleOnChange} {...props}/>;
});

UncontrolledBaseInput.displayName = 'UncontrolledBaseInput';
