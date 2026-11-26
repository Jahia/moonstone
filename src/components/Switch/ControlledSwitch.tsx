import clsx from 'clsx';
import React from 'react';

import { mergeHandlers, shouldIgnoreKey } from '~/hooks';

import type { ControlledSwitchProps } from './Switch.types';

import styles from './Switch.module.scss';

const ControlledSwitchForwardRef: React.ForwardRefRenderFunction<HTMLInputElement, ControlledSwitchProps> = ({
    className,
    checked = false,
    value,
    onChange,
    isDisabled,
    ...other
}, ref) => {
    // A native checkbox toggles with Space only; the switch pattern allows Enter too
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (shouldIgnoreKey(event) || event.key !== 'Enter') {
            return;
        }

        event.preventDefault();
        if (!event.repeat) {
            event.currentTarget.click();
        }
    };

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
                {...mergeHandlers(other, { onKeyDown: handleKeyDown })}
                disabled={isDisabled}
                checked={checked}
                className={clsx('moonstone-switch_input', styles['moonstone-switch_input'])}
                ref={ref}
                // oxlint-disable-next-line jsx-a11y/role-has-required-aria-props -- the native checked gives aria-checked
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
