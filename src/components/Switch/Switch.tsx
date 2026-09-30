import React from 'react';

import { ControlledSwitch } from './ControlledSwitch';
import { UncontrolledSwitch } from './UncontrolledSwitch';

import type { SwitchProps } from './Switch.types';

export const Switch: React.FC<SwitchProps> = ({ checked, ...props }) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledSwitch {...props}/>;
    }

    return <ControlledSwitch checked={checked} {...props}/>;
};

Switch.displayName = 'Switch';
