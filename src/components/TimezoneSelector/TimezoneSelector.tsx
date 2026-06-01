import React from 'react';
import {ControlledTimezoneSelector} from './ControlledTimezoneSelector';
import type {TimezoneSelectorProps} from './TimezoneSelector.types';
import {UncontrolledTimezoneSelector} from './UncontrolledTimezoneSelector';

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = props => {
    if (typeof props.value === 'undefined') {
        return <UncontrolledTimezoneSelector {...props}/>;
    }

    return <ControlledTimezoneSelector {...props}/>;
};

TimezoneSelector.displayName = 'TimezoneSelector';
