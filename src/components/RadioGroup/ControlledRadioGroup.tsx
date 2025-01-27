import React from 'react';
import clsx from 'clsx';
import {RadioGroupContext} from './RadioGroup.context';
import type {ControlledRadioGroupProps} from './RadioGroup.types';

export const ControlledRadioGroup: React.FC<ControlledRadioGroupProps> = ({children, name, value, isDisabled, isReadOnly, onChange, className, ...props}) => {
    // When no value is set, then the first item will be selected by default
    if (typeof value === 'undefined' || value === '') {
        value = (children[0].props.value);
    }

    const provider = {
        name: name,
        value: value,
        isDisabled,
        isReadOnly,
        onChange: onChange
    };

    return (
        <RadioGroupContext.Provider value={provider}>
            <div
                {...props}
                className={clsx(
                    'flexCol',
                    className
                )}
            >
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};
