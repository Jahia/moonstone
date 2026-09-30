import React from 'react';

import { ControlledBaseInput } from './ControlledBaseInput';
import { UncontrolledBaseInput } from './UncontrolledBaseInput';

import type { BaseInputProps } from './BaseInput.types';

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(({
    value, filterFunction, allowNegative, allowDecimal, separator, ...props
}, ref) => {
    if (typeof value === 'undefined') {
        return (
            <UncontrolledBaseInput
                allowDecimal={allowDecimal}
                allowNegative={allowNegative}
                filterFunction={filterFunction}
                ref={ref}
                separator={separator}
                {...props}
            />
        );
    }

    return <ControlledBaseInput ref={ref} value={value} {...props}/>;
});

BaseInput.displayName = 'BaseInput';
