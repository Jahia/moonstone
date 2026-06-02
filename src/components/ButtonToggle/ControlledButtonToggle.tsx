import React from 'react';
import clsx from 'clsx';
import {Button} from '~/components/Button';
import type {ControlledButtonToggleProps} from './ButtonToggle.types';
import {layout} from '~/globals/css-utils.js';
import styles from './ButtonToggle.module.scss';

const ControlledButtonToggleForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, ControlledButtonToggleProps> = ({
    label,
    size = 'default',
    isReversed = false,
    isDisabled = false,
    isLoading = false,
    isPressed = false,
    iconStart,
    iconEnd,
    className,
    onChange = () => undefined,
    onClick,
    ...props
}, ref) => {
    const handleOnClick: React.MouseEventHandler = e => {
        onClick(e);
        (e.currentTarget as HTMLElement).blur();
        if (!isDisabled && !isLoading) {
            onChange(e, !isPressed);
        }
    };

    return (
        <Button
            ref={ref}
            label={label}
            size={size}
            variant='ghost'
            isReversed={isReversed}
            isDisabled={isDisabled}
            isLoading={isLoading}
            icon={iconStart}
            iconEnd={iconEnd}
            className={clsx(
                ['moonstone-buttonToggle', styles['moonstone-buttonToggle']],
                isPressed && ['moonstone-buttonToggle_pressed', styles['moonstone-buttonToggle_pressed']],
                ['flexRow_center', layout.flexRow_center],
                className
            )}
            onClick={e => handleOnClick(e)}
            disabled={isDisabled || isLoading}
            aria-pressed={isPressed}
            data-loading={isLoading}
            {...props}
        />
    );
};

export const ControlledButtonToggle = React.forwardRef(ControlledButtonToggleForwardRef);
ControlledButtonToggle.displayName = 'ControlledButtonToggle';
