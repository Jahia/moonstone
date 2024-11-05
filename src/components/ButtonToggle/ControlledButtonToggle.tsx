import React, {MutableRefObject, useRef} from 'react';
import clsx from 'clsx';
import './ButtonToggle.scss';
import '../Button/Button.scss';
import {Typography} from '../Typography';
import {TypographyWeight} from '~/components/Typography/Typography.types';
import {ControlledButtonToggleProps} from './ButtonToggle.types';
import {Loader} from '~/components/Loader';

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
    let typoWeight: TypographyWeight = 'default';
    const ButtonToggleRef: MutableRefObject<HTMLButtonElement> = useRef();

    if (size === 'big') {
        typoWeight = 'semiBold';
    }

    const handleOnClick: React.MouseEventHandler = e => {
        onClick(e);
    };

    const handleOnChange: React.ChangeEventHandler = e => {
        onChange(e);
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
            type="button"
            disabled={isDisabled || isLoading}
            onClick={e => handleOnClick(e)}
            onChange={e => handleOnChange(e.target)}
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
                    weight={typoWeight}
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
