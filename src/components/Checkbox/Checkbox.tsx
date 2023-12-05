import React from 'react';

import {CheckboxProps} from './Checkbox.types';
import {UncontrolledCheckbox} from './UncontrolledCheckbox';
import {ControlledCheckbox} from './ControlledCheckbox';

export const Checkbox: React.FC<CheckboxProps> = ({checked, ...props}) => {
    console.log('Call checkbox');
    console.log(checked);
    console.log('---');
    if (typeof checked === 'undefined') {
        return <UncontrolledCheckbox {...props}/>;
    }

    return <ControlledCheckbox checked={checked} {...props}/>;
};

Checkbox.displayName = 'Checkbox';
