import React from 'react';
import clsx from 'clsx';
import './ButtonToggle.scss';
import '../Button/Button.scss';
import {Typography} from '../Typography';
import {Loader} from '~/components/Loader';
import type {ControlledButtonToggleProps} from './ButtonToggle.types';

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
                'moonstone-buttonToggle',
                'moonstone-button',
                `moonstone-button_${size}`,
                {'moonstone-icon': (label && (iconStart || iconEnd))},
                {'moonstone-icon-button': !label},
                {'moonstone-reverse': isReversed},
                {'moonstone-button_loading': isLoading},
                {'moonstone-buttonToggle_pressed': isPressed},
                'flexRow_center',
                'alignCenter',
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
            {isLoading && <Loader size="small" className={clsx({'moonstone-button_loaderOverlay': !iconStart})}/>}
            {label && (
                <Typography
                    isNowrap
                    component="span"
                    variant="button"
                    isUpperCase={size === 'big'}
                    weight={size === 'big' ? 'semiBold' : 'default'}
                    className={clsx('flexFluid')}
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
