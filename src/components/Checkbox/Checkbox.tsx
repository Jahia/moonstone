import React from 'react';

import { ControlledCheckbox } from './ControlledCheckbox';
import { UncontrolledCheckbox } from './UncontrolledCheckbox';

import type { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({ checked, ...props }) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledCheckbox {...props}/>;
    }

    return <ControlledCheckbox checked={checked} onChange={props.onChange} {...props}/>;
};

Checkbox.displayName = 'Checkbox';
