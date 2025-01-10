import React from 'react';
import type {DynamicFieldsetProps} from './DynamicFieldset.types';
import {UncontrolledDynamicFieldset} from './UncontrolledDynamicFieldset';
import {ControlledDynamicFieldset} from './ControlledDynamicFieldset';

export const DynamicFieldset: React.FC<DynamicFieldsetProps> = ({isOpen, onChange, ...props}) => {
    if (typeof isOpen === 'undefined') {
        return <UncontrolledDynamicFieldset onChange={onChange} {...props}/>;
    }

    return <ControlledDynamicFieldset isOpen={isOpen} onChange={onChange} {...props}/>;
};

DynamicFieldset.displayName = 'DynamicFieldset';
