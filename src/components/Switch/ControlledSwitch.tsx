import React, {MutableRefObject, useRef} from 'react';
import clsx from 'clsx';
import type {ControlledSwitchProps} from './Switch.types';
import './Switch.scss';
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
        <div ref={ref} className={clsx('moonstone-switch', {'moonstone-switch_checked': checked, 'moonstone-switch_disabled': isDisabled}, className)}>
            <input
                {...other}
                ref={inputRef}
                className={clsx('moonstone-switch_input')}
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
            <span className={clsx('moonstone-switch_icon')}/>
        </div>
    );
};

export const ControlledSwitch = React.forwardRef(ControlledSwitchForwardRef);

ControlledSwitch.displayName = 'ControlledSwitch';
