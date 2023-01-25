import React, {useRef} from 'react';
import clsx from 'clsx';
import './Button.scss';
import {Typography} from '../Typography';
import type {TypographyWeight} from '~/components/Typography/Typography.types';
import type {ButtonProps} from './Button.types';
import {Loader} from '~/components/Loader';

export const Button: React.FC<ButtonProps> = ({
    label = '',
    size = 'default',
    isReversed = false,
    isDisabled = false,
    isLoading = false,
    icon = null,
    variant = 'default',
    color = 'default',
    className = null,
    onClick = () => undefined,
    ...props
}) => {
    let typoWeight: TypographyWeight = 'default';
    const ButtonEl = useRef(null);

    if (size === 'small') {
        typoWeight = 'light';
    }

    if (size === 'big') {
        typoWeight = 'semiBold';
    }

    const handleOnClick: React.MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick(e);
        ButtonEl.current.blur();
    };

    const LoaderReversed = Boolean(variant === 'default' && (color === 'accent' || color === 'danger'));

    return (
        <button
            ref={ButtonEl}
            className={clsx(
                'moonstone-button',
                `moonstone-size_${size}`,
                `moonstone-variant_${variant}`,
                `moonstone-color_${color}`,
                {'moonstone-icon': (icon && label)},
                {'moonstone-icon-button': !label},
                {'moonstone-reverse': isReversed},
                {'moonstone-button_loading': isLoading},
                className
            )}
            type="button"
            disabled={isDisabled}
            onClick={e => handleOnClick(e)}
            {...props}
        >
            {isLoading && <Loader size="small" isReversed={LoaderReversed} className={clsx('moonstone-button_loader')}/>}
            {icon && <icon.type {...icon.props} size={(size === 'big') ? 'default' : size}/>}
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
        </button>
    );
};

Button.displayName = 'Button';
