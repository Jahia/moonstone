import React, {useState, ChangeEvent} from 'react';
import type {UncontrolledBaseInputProps} from './BaseInput.types';
import {ControlledBaseInput} from './ControlledBaseInput';
import {filterInput} from '~/utils/inputFilter';

export const UncontrolledBaseInput = React.forwardRef<HTMLInputElement, UncontrolledBaseInputProps>(({defaultValue, onChange, isNumberInput = false, allowNegative, allowDecimal, ...props}, ref) => {
    const [inputValue, setBaseInputValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const filteredValue = filterInput(event.target.value, allowNegative, allowDecimal);
        setBaseInputValue(isNumberInput ? filteredValue : event.target.value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return <ControlledBaseInput ref={ref} value={inputValue} onChange={handleOnChange} {...props}/>;
});

UncontrolledBaseInput.displayName = 'UncontrolledBaseInput';
