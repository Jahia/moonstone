import React, {MutableRefObject, useRef} from 'react';
import clsx from 'clsx';
import type {ControlledSwitchProps} from './Switch.types';
import styles from './Switch.module.scss';
import {onAccessibleClick} from '~/hooks';
import {reset} from '~/globals/css-utils.js';

const ControlledSwitchForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ControlledSwitchProps> = ({
    className,
    checked = false,
    value,
    onChange = () => undefined,
    isDisabled,
    ...other
}, ref) => {
    const inputRef: MutableRefObject<HTMLInputElement> = useRef();

    return (
        <div
            ref={ref}
            className={clsx(
                reset,
                ['moonstone-switch', styles['moonstone-switch']],
                checked && ['moonstone-switch_checked', styles['moonstone-switch_checked']],
                isDisabled && ['moonstone-switch_disabled', styles['moonstone-switch_disabled']],
                className
            )}
        >
            <input
                {...other}
                ref={inputRef}
                className={clsx('moonstone-switch_input', styles['moonstone-switch_input'])}
                type="checkbox"
                value={value}
                checked={checked}
                aria-checked={checked}
                disabled={isDisabled}
                {...onAccessibleClick({
                    onClick: (ev: React.KeyboardEvent | React.MouseEvent) => onChange(ev as unknown as React.ChangeEvent<HTMLInputElement>, value, inputRef.current?.checked),
                    disabled: isDisabled,
                    role: 'checkbox'})}
            />
            <span className={clsx('moonstone-switch_icon', styles['moonstone-switch_icon'])}/>
        </div>
    );
};

export const ControlledSwitch = React.forwardRef(ControlledSwitchForwardRef);

ControlledSwitch.displayName = 'ControlledSwitch';
