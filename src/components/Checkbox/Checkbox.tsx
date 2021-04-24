import React from 'react';
import clsx from 'clsx';
import {useCheckbox} from '@react-aria/checkbox';
import {useToggleState} from '@react-stately/toggle';

import {CheckboxProps} from './Checkbox.types';
import './Checkbox.scss';

export const Checkbox: React.FC<CheckboxProps> = props => {
    const {
        className,
        isIndeterminate = false,
        children
    } = props;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const {inputProps} = useCheckbox(props, useToggleState(props), inputRef);

    return (
        <div className={clsx('moonstone-checkbox', className)}>
            <input
                className={clsx('moonstone-checkbox_input')}
                ref={inputRef}
                {...inputProps}
            />
            <svg className={clsx('moonstone-checkbox_icon')} viewBox="0 0 21 21">
                { isIndeterminate
                    ? <path d="M4.5 10.5L16.5 10.5" strokeLinecap="round"/>
                    : <path d="M5 10.75L8.5 14.25L16 6" strokeLinecap="round"/>
                }
            </svg>
            {children}
        </div>
    );
};

Checkbox.displayName = 'Checkbox';
