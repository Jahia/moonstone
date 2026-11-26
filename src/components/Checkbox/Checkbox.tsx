import React from 'react';

import { ControlledCheckbox } from './ControlledCheckbox';
import { UncontrolledCheckbox } from './UncontrolledCheckbox';

import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ checked, ...props }, ref) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledCheckbox ref={ref} {...props}/>;
    }

    return <ControlledCheckbox checked={checked} ref={ref} onChange={props.onChange} {...props}/>;
});

Checkbox.displayName = 'Checkbox';
