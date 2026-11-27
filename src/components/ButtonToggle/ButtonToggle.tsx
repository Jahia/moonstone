import React from 'react';

import { UncontrolledButtonToggle } from './index';
import { ControlledButtonToggle } from './index';

import type { ButtonToggleProps } from './ButtonToggle.types';

export const ButtonToggle = React.forwardRef<HTMLButtonElement, ButtonToggleProps>(({ isPressed, ...props }, ref) => {
    if (typeof isPressed === 'undefined') {
        return <UncontrolledButtonToggle ref={ref} {...props} data-moonstone="ButtonToggle"/>;
    }

    return <ControlledButtonToggle isPressed={isPressed} ref={ref} {...props} data-moonstone="ButtonToggle"/>;
});

ButtonToggle.displayName = 'ButtonToggle';
