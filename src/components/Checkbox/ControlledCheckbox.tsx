import clsx from 'clsx';
import React, { useRef } from 'react';

import { capitalize } from '~/utils/helpers';

import type { ControlledCheckboxProps } from './Checkbox.types';

import styles from './Checkbox.module.scss';

export const ControlledCheckbox: React.FC<ControlledCheckboxProps> = ({
    className, checked, indeterminate = false, size = 'default', isDisabled, isReadOnly, onChange, value, ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={clsx('moonstone-checkbox', styles['moonstone-checkbox'], className)}>
            <input
                {...props}
                disabled={isDisabled}
                aria-checked={indeterminate ? 'mixed' : checked}
                aria-readonly={isReadOnly}
                checked={checked}
                className={clsx(
                    ['moonstone-checkbox_input', styles['moonstone-checkbox_input']],
                    [`moonstone-checkbox_size${capitalize(size)}`, styles[`moonstone-checkbox_size${capitalize(size)}`]],
                )}
                ref={inputRef}
                type="checkbox"
                value={value}
                onChange={ev => (typeof onChange === 'function') && onChange(ev, value, inputRef.current?.checked)}
            />
            <svg
                className={clsx(
                    ['moonstone-checkbox_icon', styles['moonstone-checkbox_icon']],
                    [`moonstone-checkbox_size${capitalize(size)}`, styles[`moonstone-checkbox_size${capitalize(size)}`]],
                )}
                viewBox="0 0 21 21"
            >
                { indeterminate
                    ? <path d="M4.5 10.5L16.5 10.5" strokeLinecap="round"/>
                    : <path d="M5 10.75L8.5 14.25L16 6" strokeLinecap="round"/>}
            </svg>
        </div>
    );
};

ControlledCheckbox.displayName = 'ControlledCheckbox';
