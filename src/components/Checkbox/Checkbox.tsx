import React from 'react';

import {CheckboxProps} from './Checkbox.types';
import {UncontrolledCheckbox} from './UncontrolledCheckbox';
import {ControlledCheckbox} from './ControlledCheckbox';

export const Checkbox: React.FC<CheckboxProps> = ({isUncontrolled = false, ...props}) => {
    // Controlled is the default variant of checkbox to use because components should
    // be controlled whenever possible
    return isUncontrolled
        ? <UncontrolledCheckbox {...props}/>
        : <ControlledCheckbox {...props}/>
};

Checkbox.displayName = 'Checkbox';
