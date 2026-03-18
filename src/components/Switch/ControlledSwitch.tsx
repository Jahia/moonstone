import React, {MutableRefObject, useRef} from 'react';
import clsx from 'clsx';
import type {ControlledSwitchProps} from './Switch.types';
import styles from './Switch.module.scss';
import {onAccessibleClick} from '~/hooks';

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
        <div ref={ref} className={clsx('moonstone-switch', styles.switch, {'moonstone-switch_checked': checked, [styles.switch_checked]: checked, 'moonstone-switch_disabled': isDisabled, [styles.switch_disabled]: isDisabled}, className)}>
            <input
                {...other}
                ref={inputRef}
                className={clsx('moonstone-switch_input', styles.switch_input)}
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
            <span className={clsx('moonstone-switch_icon', styles.switch_icon)}/>
        </div>
    );
};

export const ControlledSwitch = React.forwardRef(ControlledSwitchForwardRef);

ControlledSwitch.displayName = 'ControlledSwitch';
