import clsx from 'clsx';
import React from 'react';

import { mergeHandlers } from '~/hooks';

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
    // A native checkbox toggles with Space only; Enter also toggles a switch, like a native button
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const hasModifier = event.shiftKey || event.ctrlKey || event.metaKey || event.altKey;
        if (event.defaultPrevented || hasModifier || event.key !== 'Enter') {
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
                role="switch"
                type="checkbox"
                value={value}
                onChange={event => onChange(event, value, event.target.checked)}
            />
            <span className={clsx('moonstone-switch_icon', styles['moonstone-switch_icon'])}/>
        </div>
    );
};

export const ControlledSwitch = React.forwardRef(ControlledSwitchForwardRef);

ControlledSwitch.displayName = 'ControlledSwitch';
