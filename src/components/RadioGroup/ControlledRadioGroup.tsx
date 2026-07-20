import React, {useMemo} from 'react';
import clsx from 'clsx';
import {RadioGroupContext} from './RadioGroup.context';
import type {ControlledRadioGroupProps} from './RadioGroup.types';
import {layout} from '~/globals/css-utils.js';

export const ControlledRadioGroup: React.FC<ControlledRadioGroupProps> = ({children, name, value, isDisabled, isReadOnly, onChange, className, ...props}) => {
    // When no value is set, then the first item will be selected by default
    if (typeof value === 'undefined' || value === '') {
        value = (children[0].props.value);
    }

    const provider = useMemo(() => ({
        name,
        value,
        isDisabled,
        isReadOnly,
        onChange
    }), [name, value, isDisabled, isReadOnly, onChange]);

    return (
        <RadioGroupContext.Provider value={provider}>
            <div
                {...props}
                className={clsx(
            'flexCol', layout.flexCol, className
                )}
            >
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};
