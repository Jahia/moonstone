import React from 'react';
import clsx from 'clsx';
import {CheckboxGroupContext} from './CheckboxGroup.context';
import type {CheckboxGroupProps} from './CheckboxGroup.types';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({children, name, isDisabled, isReadOnly, className, onChange, ...props}) => {
    const provider = {
        name: name,
        isDisabled,
        isReadOnly,
        onChange: onChange
    };

    return (
        <CheckboxGroupContext.Provider value={provider}>
            <div
                {...props}
                className={clsx(
                    'flexCol',
                    className
                )}
            >
                {children}
            </div>
        </CheckboxGroupContext.Provider>
    );
};
