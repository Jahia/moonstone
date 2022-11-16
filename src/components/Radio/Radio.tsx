import React from 'react';

import {RadioProps} from './Radio.types';
import {UncontrolledRadio} from './UncontrolledRadio';
import {ControlledRadio} from './ControlledRadio';

export const Radio: React.FC<RadioProps> = ({checked, ...props}) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledRadio {...props}/>;
    }

    return <ControlledRadio checked={checked} {...props}/>;
};

Radio.displayName = 'Radio';
