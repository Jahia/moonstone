import React from 'react';

import { UncontrolledButtonToggle } from './index';
import { ControlledButtonToggle } from './index';

import type { ButtonToggleProps } from './ButtonToggle.types';

export const ButtonToggle = React.forwardRef<HTMLButtonElement, ButtonToggleProps>(({ isPressed, ...props }, ref) => {
    if (typeof isPressed === 'undefined') {
        return <UncontrolledButtonToggle data-moonstone="ButtonToggle" ref={ref} {...props}/>;
    }

    return <ControlledButtonToggle isPressed={isPressed} data-moonstone="ButtonToggle" ref={ref} {...props}/>;
});

ButtonToggle.displayName = 'ButtonToggle';
