import React from 'react';

import { ControlledSwitch } from './ControlledSwitch';
import { UncontrolledSwitch } from './UncontrolledSwitch';

import type { SwitchProps } from './Switch.types';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({ checked, ...props }, ref) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledSwitch ref={ref} {...props}/>;
    }

    return <ControlledSwitch checked={checked} ref={ref} {...props}/>;
});

Switch.displayName = 'Switch';
