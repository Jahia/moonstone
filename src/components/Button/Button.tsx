import React, {useRef} from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import {Typography} from '../Typography';
import {TypographyWeight} from '~/components/Typography/Typography.types';
import {ButtonProps} from './Button.types';
import {Loader} from '~/components/Loader';
import {layout, reset} from '~/globals/css-utils.js';

// We have many conditions because of classname=..., we can safely ignore complexity here
// eslint-disable-next-line complexity
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
    };

    const LoaderReversed = Boolean(variant === 'default' && (color === 'accent' || color === 'danger'));

    return (
        <button
            ref={ButtonEl}
            className={clsx(
                reset,
                (variant !== 'default' || color !== 'default') && ['moonstone-button', styles['moonstone-button']],
                [`moonstone-button_${size}`, styles[`moonstone-button_${size}`]],
                [`moonstone-button${variant === 'default' ? '' : `_${variant}`}${color === 'default' ? '' : `_${color}`}`,
                    styles[`moonstone-button${variant === 'default' ? '' : `_${variant}` as const}${color === 'default' ? '' : `_${color}` as const}`]],
                (label && (icon || iconEnd)) && ['moonstone-icon', styles['moonstone-icon']],
                !label && ['moonstone-icon-button', styles['moonstone-icon-button']],
                isReversed && ['moonstone-reverse', styles['moonstone-reverse']],
                isLoading && ['moonstone-button_loading', styles['moonstone-button_loading']],
                layout.alignCenter,
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
            {isLoading && <Loader size="small"
                                  isReversed={LoaderReversed}
                                  className={clsx(!icon && ['moonstone-button_loaderOverlay', styles['moonstone-button_loaderOverlay']])}/>}
            {label && (
                <Typography
                    isNowrap
                    component="span"
                    variant="button"
                    isUpperCase={size === 'big'}
                    weight={typoWeight}
                    className={clsx('flexFluid', layout.flexFluid)}
                >
                    {label}
                </Typography>
            )}
            {label && iconEnd && <iconEnd.type {...iconEnd.props} size={(size === 'big') ? 'default' : size}/>}
        </button>
    );
};

Button.displayName = 'Button';
