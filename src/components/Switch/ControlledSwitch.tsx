import React, {useRef} from 'react';
import clsx from 'clsx';
import {SwitchProps} from './Switch.types';
import './Switch.scss';

export const ControlledSwitch: React.FC<SwitchProps> = ({className, checked = false, isDisabled, onChange, value, ...props}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={clsx('moonstone-switch', {'moonstone-switch_checked': checked, 'moonstone-switch_disabled': isDisabled}, className)}>
            <input
                {...props}
                ref={inputRef}
                className={clsx('moonstone-switch_input')}
                type="checkbox"
                value={value}
                checked={checked}
                disabled={isDisabled}
                aria-checked={checked}
                onChange={ev => (typeof onChange === 'function') && onChange(ev, value, inputRef.current?.checked)}
            />
            <span className={clsx('moonstone-switch_icon')}/>
        </div>
    );
};

ControlledSwitch.displayName = 'ControlledSwitch';
