import clsx from 'clsx';
import React from 'react';

import type { ControlledSwitchProps } from './Switch.types';

import styles from './Switch.module.scss';

const ControlledSwitchForwardRef: React.ForwardRefRenderFunction<HTMLInputElement, ControlledSwitchProps> = ({
    className,
    checked = false,
    value,
    onChange = () => undefined,
    isDisabled,
    ...other
}, ref) => {
    return (
        <div
            className={clsx(
                ['moonstone-switch', styles['moonstone-switch']],
                checked && ['moonstone-switch_checked', styles['moonstone-switch_checked']],
                isDisabled && ['moonstone-switch_disabled', styles['moonstone-switch_disabled']],
                className,
            )}
        >
            <input
                {...other}
                disabled={isDisabled}
                checked={checked}
                className={clsx('moonstone-switch_input', styles['moonstone-switch_input'])}
                ref={ref}
                role="switch"
                type="checkbox"
                value={value}
                onChange={event => onChange?.(event, value, event.target.checked)}
            />
            <span className={clsx('moonstone-switch_icon', styles['moonstone-switch_icon'])}/>
        </div>
    );
};

export const ControlledSwitch = React.forwardRef(ControlledSwitchForwardRef);

ControlledSwitch.displayName = 'ControlledSwitch';
