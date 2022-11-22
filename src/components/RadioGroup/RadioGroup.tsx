import React from 'react';
import {UncontrolledRadioGroup} from '~/components/RadioGroup/UncontrolledRadioGroup';
import {ControlledRadioGroup} from '~/components/RadioGroup/ControlledRadioGroup';
import {RadioGroupProps} from '~/components/RadioGroup/RadioGroup.types';

export const RadioGroup: React.FC<RadioGroupProps> = ({children, defaultValue, value, ...props}) => {
    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    if (typeof value === 'undefined') {
        return <UncontrolledRadioGroup defaultValue={defaultValue} {...props}>{children}</UncontrolledRadioGroup>;
    }

    return <ControlledRadioGroup value={value} {...props}>{children}</ControlledRadioGroup>;
};

RadioGroup.displayName = 'RadioGroup';
