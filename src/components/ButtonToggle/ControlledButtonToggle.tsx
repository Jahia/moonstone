import React, {MutableRefObject, useRef} from 'react';
import clsx from 'clsx';
import './ButtonToggle.scss';
import '../Button/Button.scss';
import {Typography} from '../Typography';
import {Loader} from '~/components/Loader';
import type {ControlledButtonToggleProps} from './ButtonToggle.types';

// TODO: use React.ForwardRefRenderFunction (ex: Collapsible)
export const ControlledButtonToggle: React.FC<ControlledButtonToggleProps> = ({
    label = '',
    size = 'default',
    isReversed = false,
    isDisabled = false,
    isLoading = false,
    isPressed = false,
    iconStart = null,
    iconEnd = null,
    className = null,
    onChange = () => undefined,
    onClick = () => undefined,
    ...props
}) => {
    const ButtonToggleRef: MutableRefObject<HTMLButtonElement> = useRef();
    const handleOnClick: React.MouseEventHandler = e => {
        onClick(e);
        if (!isDisabled && !isLoading) {
            // TODO: Fix onChange return the previous state
            (onChange as (e: React.MouseEvent, isPressed: boolean) => void)(e, isPressed);
        }
    };

    return (
        <button
            ref={ButtonToggleRef}
            className={clsx(
                'moonstone-button-toggle',
                'moonstone-button',
                `moonstone-size_${size}`,
                {'moonstone-icon': (label && (iconStart || iconEnd))},
                {'moonstone-icon-button': !label},
                {'moonstone-reverse': isReversed},
                {'moonstone-button_loading': isLoading},
                {'moonstone-button-toggle_pressed': isPressed},
                className
            )}
            aria-pressed={isPressed}
            data-loading= {isLoading}
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

ControlledButtonToggle.displayName = 'ControlledButtonToggle';
