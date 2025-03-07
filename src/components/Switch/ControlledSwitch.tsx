import React, {MutableRefObject, useRef} from 'react';
import clsx from 'clsx';
import type {ControlledSwitchProps} from './Switch.types';
import './Switch.scss';

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
                aria-label={value || 'moonstone-switch'}
                checked={checked}
                disabled={isDisabled}
                aria-checked={checked}
                onChange={ev => (typeof onChange === 'function') && onChange(ev, value, inputRef.current?.checked)}
            />
            <span className={clsx('moonstone-switch_icon')}/>
        </div>
    );
};

export const ControlledSwitch = React.forwardRef(ControlledSwitchForwardRef);

ControlledSwitch.displayName = 'ControlledSwitch';
