import clsx from 'clsx';
import React, { useRef } from 'react';

import { onAccessibleClick } from '~/hooks';

import type { ControlledSwitchProps } from './Switch.types';
import type { MutableRefObject } from 'react';

import styles from './Switch.module.scss';

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
            className={clsx(
                ['moonstone-switch', styles['moonstone-switch']],
                checked && ['moonstone-switch_checked', styles['moonstone-switch_checked']],
                isDisabled && ['moonstone-switch_disabled', styles['moonstone-switch_disabled']],
                className,
            )}
            ref={ref}
        >
            <input
                {...other}
                disabled={isDisabled}
                aria-checked={checked}
                checked={checked}
                className={clsx('moonstone-switch_input', styles['moonstone-switch_input'])}
                ref={inputRef}
                type="checkbox"
                value={value}
                {...onAccessibleClick({
                    onClick: (ev: React.KeyboardEvent | React.MouseEvent) => onChange(ev as unknown as React.ChangeEvent<HTMLInputElement>, value, inputRef.current?.checked),
                    disabled: isDisabled,
                    role: 'checkbox',
                })}
            />
            <span className={clsx('moonstone-switch_icon', styles['moonstone-switch_icon'])}/>
        </div>
    );
};

export const ControlledSwitch = React.forwardRef(ControlledSwitchForwardRef);

ControlledSwitch.displayName = 'ControlledSwitch';
