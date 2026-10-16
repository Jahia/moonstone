import clsx from 'clsx';
import React, { useImperativeHandle, useRef } from 'react';

import type { ControlledSwitchProps } from './Switch.types';
import type { MutableRefObject } from 'react';

import styles from './Switch.module.scss';

const ControlledSwitchForwardRef: React.ForwardRefRenderFunction<HTMLInputElement, ControlledSwitchProps> = ({
    className,
    checked = false,
    value,
    onChange = () => undefined,
    onKeyDown,
    isDisabled,
    ...other
}, ref) => {
    const inputRef: MutableRefObject<HTMLInputElement> = useRef();
    useImperativeHandle(ref, () => inputRef.current!, []);

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
                aria-checked={checked}
                checked={checked}
                className={clsx('moonstone-switch_input', styles['moonstone-switch_input'])}
                ref={inputRef}
                role="switch"
                type="checkbox"
                value={value}
                onChange={event => onChange(event, value, event.target.checked)}
                onKeyDown={(event) => {
                    onKeyDown?.(event);
                    // A native checkbox toggles with Space only, and Moonstone also toggles a switch with Enter
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        event.currentTarget.click();
                    }
                }}
            />
            <span className={clsx('moonstone-switch_icon', styles['moonstone-switch_icon'])}/>
        </div>
    );
};

export const ControlledSwitch = React.forwardRef(ControlledSwitchForwardRef);

ControlledSwitch.displayName = 'ControlledSwitch';
