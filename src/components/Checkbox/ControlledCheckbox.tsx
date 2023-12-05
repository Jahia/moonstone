import React, {useRef} from 'react';
import clsx from 'clsx';
import {capitalize} from '~/utils/helpers';
import {CheckboxProps} from './Checkbox.types';
import './Checkbox.scss';

export const ControlledCheckbox: React.FC<CheckboxProps> = ({className, checked = false, indeterminate = false, size = 'default', isDisabled, isReadOnly, onChange, ...props}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={clsx('moonstone-checkbox', className)}>
            <input
                {...props}
                ref={inputRef}
                className={clsx('moonstone-checkbox_input', `moonstone-checkbox_size${capitalize(size)}`)}
                type="checkbox"
                checked={checked}
                disabled={isDisabled}
                aria-readonly={isReadOnly}
                aria-checked={indeterminate ? 'mixed' : checked}
                onChange={ev => (typeof onChange === 'function') && onChange(ev, inputRef.current?.checked)}
            />
            <svg className={clsx('moonstone-checkbox_icon', `moonstone-checkbox_size${capitalize(size)}`)} viewBox="0 0 21 21">
                { indeterminate ?
                    <path d="M4.5 10.5L16.5 10.5" strokeLinecap="round"/> :
                    <path d="M5 10.75L8.5 14.25L16 6" strokeLinecap="round"/>}
            </svg>
        </div>
    );
};

ControlledCheckbox.displayName = 'ControlledCheckbox';
