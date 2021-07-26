import React from 'react';
import clsx from 'clsx';
import {useCheckbox} from '@react-aria/checkbox';
import {useToggleState} from '@react-stately/toggle';
import {useFocusRing} from '@react-aria/focus';
import {capitalize} from '~/utils/helpers';

import {ControlledCheckboxProps} from './ControlledCheckbox.types';
import './Checkbox.scss';

export const ControlledCheckbox: React.FC<ControlledCheckboxProps> = props => {
    const {
        className,
        isIndeterminate = false,
        size = 'default'
    } = props;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const {inputProps} = useCheckbox(props, useToggleState(props), inputRef);
    const {isFocusVisible, focusProps} = useFocusRing();

    return (
        <div className={clsx('moonstone-checkbox', className)}>
            <input
                className={clsx('moonstone-checkbox_input', `moonstone-checkbox_size${capitalize(size)}`, {'hasFocus': isFocusVisible})}
                ref={inputRef}
                {...inputProps}
                {...focusProps}
            />
            <svg className={clsx('moonstone-checkbox_icon', `moonstone-checkbox_size${capitalize(size)}`)} viewBox='0 0 21 21'>
                { isIndeterminate
                    ? <path d="M4.5 10.5L16.5 10.5" strokeLinecap="round"/>
                    : <path d="M5 10.75L8.5 14.25L16 6" strokeLinecap="round"/>
                }
            </svg>
        </div>
    );
};

ControlledCheckbox.displayName = 'ControlledCheckbox';
