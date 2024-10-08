import React from 'react';

import {SwitchProps} from './Switch.types';
import {UncontrolledSwitch} from './UncontrolledSwitch';
import {ControlledSwitch} from './ControlledSwitch';

export const Switch: React.FC<SwitchProps> = ({checked, ...props}) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledSwitch {...props}/>;
    }

    return <ControlledSwitch checked={checked} {...props}/>;
};

Switch.displayName = 'Switch';
