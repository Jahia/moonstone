import React, {useState} from 'react';
import {ControlledTimezoneSelector} from './ControlledTimezoneSelector';
import type {TimezoneSelectorProps} from './TimezoneSelector.types';

type UncontrolledTimezoneSelectorProps = Extract<TimezoneSelectorProps, {value?: never}>;

export const UncontrolledTimezoneSelector: React.FC<UncontrolledTimezoneSelectorProps> = ({
    defaultValue = null,
    onChange,
    ...props
}) => {
    const [value, setValue] = useState(defaultValue);

    return (
        <ControlledTimezoneSelector
            {...props}
            value={value}
            onChange={(event, nextValue) => {
                setValue(nextValue);
                onChange?.(event, nextValue);
            }}
        />
    );
};

UncontrolledTimezoneSelector.displayName = 'UncontrolledTimezoneSelector';