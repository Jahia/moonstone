import React from 'react';

import type {ButtonToggleProps} from './ButtonToggle.types';
import {UncontrolledButtonToggle} from './index';
import {ControlledButtonToggle} from './index';

export const ButtonToggle: React.FC<ButtonToggleProps> = ({isPressed, ...props}) => {
    if (typeof isPressed === 'undefined') {
        return <UncontrolledButtonToggle {...props}/>;
    }

    return <ControlledButtonToggle isPressed={isPressed} {...props}/>;
};

ButtonToggle.displayName = 'ButtonToggle';
