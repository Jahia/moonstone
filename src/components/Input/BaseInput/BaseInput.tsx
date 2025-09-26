import React from 'react';
import {BaseInputProps} from './BaseInput.types';
import {UncontrolledBaseInput} from './UncontrolledBaseInput';
import {ControlledBaseInput} from './ControlledBaseInput';

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(({value, hasFilteredValue, allowNegative, allowDecimal, separator, ...props}, ref) => {
    if (typeof value === 'undefined') {
        return <UncontrolledBaseInput ref={ref} hasFilteredValue={hasFilteredValue} allowNegative={allowNegative} allowDecimal={allowDecimal} separator={separator} {...props}/>;
    }

    return <ControlledBaseInput ref={ref} value={value} {...props}/>;
});

BaseInput.displayName = 'BaseInput';
