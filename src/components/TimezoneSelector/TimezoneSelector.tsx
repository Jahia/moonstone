import React from 'react';
import {ControlledTimezoneSelector} from './ControlledTimezoneSelector';
import type {ControlledTimezoneSelectorProps, TimezoneSelectorProps} from './TimezoneSelector.types';
import {UncontrolledTimezoneSelector} from './UncontrolledTimezoneSelector';

const isControlledTimezoneSelector = (props: TimezoneSelectorProps): props is ControlledTimezoneSelectorProps =>
    typeof props.value !== 'undefined';

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = props => {
    if (isControlledTimezoneSelector(props)) {
        return <ControlledTimezoneSelector {...props}/>;
    }

    return <UncontrolledTimezoneSelector {...props}/>;
};

TimezoneSelector.displayName = 'TimezoneSelector';
