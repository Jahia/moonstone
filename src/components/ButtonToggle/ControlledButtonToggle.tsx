import React from 'react';
import clsx from 'clsx';
import styles from './ButtonToggle.module.scss';
import button from '../Button/Button.module.scss';
import {Typography} from '../Typography';
import {Loader} from '~/components/Loader';
import type {ControlledButtonToggleProps} from './ButtonToggle.types';
import {layout, reset} from '~/globals/css-utils.js';

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
        <button
            ref={ref}
            className={clsx(
                reset,
                ['moonstone-buttonToggle', styles['moonstone-buttonToggle']],
                ['moonstone-button', button['moonstone-button']],
                [`moonstone-button_${size}`, button[`moonstone-button_${size}`]],
                (label && (iconStart || iconEnd)) && ['moonstone-icon', button['moonstone-icon']],
                !label && ['moonstone-icon-button', button['moonstone-icon-button']],
                isReversed && ['moonstone-reverse', button['moonstone-reverse']],
                isLoading && ['moonstone-button_loading', button['moonstone-button_loading']],
                isPressed && ['moonstone-buttonToggle_pressed', styles['moonstone-buttonToggle_pressed']],
                ['flexRow_center', layout.flexRow_center],
                ['alignCenter', layout.alignCenter],
                className
            )}
            aria-pressed={isPressed}
            data-loading={isLoading}
            type="button"
            disabled={isDisabled || isLoading}
            onClick={e => handleOnClick(e)}
            {...props}
        >
            {/* Display icon when an icon is provided */}
            {iconStart && !isLoading && <iconStart.type {...iconStart.props} size={(size === 'big') ? 'default' : size}/>}
            {/* When the button has an icon the loader replaces the icon otherwise we display the loader as overlay */}
            {isLoading && <Loader
                size="small"
                className={clsx(!iconStart && ['moonstone-button_loaderOverlay', button['moonstone-button_loaderOverlay']])}
            />}
            {label && (
                <Typography
                    isNowrap
                    component="span"
                    variant="button"
                    isUpperCase={size === 'big'}
                    weight={size === 'big' ? 'semiBold' : 'default'}
                    className={clsx('flexFluid', layout.flexFluid)}
                >
                    {label}
                </Typography>
            )}
            {label && iconEnd && <iconEnd.type {...iconEnd.props} size={(size === 'big') ? 'default' : size}/>}
        </button>
    );
};

export const ControlledButtonToggle = React.forwardRef(ControlledButtonToggleForwardRef);
ControlledButtonToggle.displayName = 'ControlledButtonToggle';
