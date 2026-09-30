import clsx from 'clsx';
import React from 'react';

import { Button } from '~/components/Button';
import { layout } from '~/globals/css-utils.js';

import type { ControlledButtonToggleProps } from './ButtonToggle.types';

import styles from './ButtonToggle.module.scss';

const ControlledButtonToggleForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, ControlledButtonToggleProps> = ({
    label,
    size = 'default',
    isReversed = false,
    isDisabled = false,
    isLoading = false,
    isPressed,
    iconStart,
    iconEnd,
    className,
    onChange = () => undefined,
    onClick,
    ...props
}, ref) => {
    const handleOnClick: React.MouseEventHandler = (e) => {
        onClick(e);
        (e.currentTarget as HTMLElement).blur();
        if (!isDisabled && !isLoading) {
            onChange(e, !isPressed);
        }
    };

    return (
        <Button
            disabled={isDisabled || isLoading}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isReversed={isReversed}
            aria-pressed={isPressed}
            className={clsx(
                ['moonstone-buttonToggle', styles['moonstone-buttonToggle']],
                isPressed && ['moonstone-buttonToggle_pressed', styles['moonstone-buttonToggle_pressed']],
                ['flexRow_center', layout.flexRow_center],
                className,
            )}
            data-loading={isLoading}
            icon={iconStart}
            iconEnd={iconEnd}
            label={label}
            ref={ref}
            size={size}
            variant="ghost"
            onClick={e => handleOnClick(e)}
            {...props}
        />
    );
};

export const ControlledButtonToggle = React.forwardRef(ControlledButtonToggleForwardRef);
ControlledButtonToggle.displayName = 'ControlledButtonToggle';
