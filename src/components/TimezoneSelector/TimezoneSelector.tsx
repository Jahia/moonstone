import React from 'react';

import { ControlledTimezoneSelector } from './ControlledTimezoneSelector';
import { UncontrolledTimezoneSelector } from './UncontrolledTimezoneSelector';

import type { ControlledTimezoneSelectorProps, TimezoneSelectorProps } from './TimezoneSelector.types';

const isControlledTimezoneSelector = (props: TimezoneSelectorProps): props is ControlledTimezoneSelectorProps =>
    typeof props.value !== 'undefined';

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = (props) => {
    if (isControlledTimezoneSelector(props)) {
        return <ControlledTimezoneSelector {...props}/>;
    }

    return <UncontrolledTimezoneSelector {...props}/>;
};

TimezoneSelector.displayName = 'TimezoneSelector';
