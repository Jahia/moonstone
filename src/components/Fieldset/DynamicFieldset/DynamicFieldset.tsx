import React from 'react';
import type {DynamicFieldsetProps} from './DynamicFieldset.types';
import {UncontrolledDynamicFieldset} from './UncontrolledDynamicFieldset';
import {ControlledDynamicFieldset} from './ControlledDynamicFieldset';

export const DynamicFieldset: React.FC<DynamicFieldsetProps> = ({checked, onChange, ...props}) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledDynamicFieldset onChange={onChange} {...props}/>;
    }

    return <ControlledDynamicFieldset checked={checked} onChange={onChange} {...props}/>;
};

DynamicFieldset.displayName = 'DynamicFieldset';
