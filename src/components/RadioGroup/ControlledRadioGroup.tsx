import React from 'react';
import clsx from 'clsx';
import {RadioGroupContext} from './RadioGroup.context';
import './RadioGroup.scss';
import {RadioGroupProps} from './RadioGroup.types';

export const ControlledRadioGroup: React.FC<RadioGroupProps> = ({children, name, value, isDisabled, isReadOnly, onChange, className, ...props}) => {
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
                    'moonstone-radioGroup',
                    'flexCol',
                    className
                )}
            >
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};
