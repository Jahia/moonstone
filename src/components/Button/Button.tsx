import React, {useRef} from 'react';
import clsx from 'clsx';
import './Button.scss';
import {Typography} from '../Typography';
import {TypographyWeight} from '~/components/Typography/Typography.types';
import {ButtonProps} from './Button.types';
import {Loader} from '~/components/Loader';

export const Button = ({
    label = '',
    size = 'default',
    isReversed = false,
    isDisabled = false,
    isLoading = false,
    icon = null,
    iconEnd = null,
    variant = 'default',
    color = 'default',
    className = null,
    onClick,
    ...props
}: ButtonProps) => {
    let typoWeight: TypographyWeight = 'default';
    const ButtonEl = useRef(null);

    if (size === 'small') {
        typoWeight = 'light';
    }

    if (size === 'big') {
        typoWeight = 'semiBold';
    }

    const handleOnClick: React.MouseEventHandler = e => {
        onClick(e);
        // ButtonEl.current.blur();
    };

    const LoaderReversed = Boolean(variant === 'default' && (color === 'accent' || color === 'danger'));

    return (
        <button
            ref={ButtonEl}
            className={clsx(
                {'moonstone-button': (variant !== 'default' || color !== 'default')},
                `moonstone-button_${size}`,
                `moonstone-button${variant === 'default' ? '' : `_${variant}`}${color === 'default' ? '' : `_${color}`}`,
                {'moonstone-icon': (label && (icon || iconEnd))},
                {'moonstone-icon-button': !label},
                {'moonstone-reverse': isReversed},
                {'moonstone-button_loading': isLoading},
                'flexRow_center',
                'alignCenter',
                className
            )}
            type="button"
            disabled={isDisabled || isLoading}
            onClick={e => handleOnClick(e)}
            {...props}
        >
            {/* Display icon when an icon is provided */}
            {icon && !isLoading && <icon.type {...icon.props} size={(size === 'big') ? 'default' : size}/>}
            {/* When the button has an icon the loader replaces the icon otherwise we display the loader as overlay */}
            {isLoading && <Loader size="small" isReversed={LoaderReversed} className={clsx({'moonstone-button_loaderOverlay': !icon})}/>}
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

Button.displayName = 'Button';
