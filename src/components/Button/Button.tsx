import React, {useRef} from 'react';
import classnames from 'clsx';
import './Button.scss';
import {Typography} from '../Typography';
import {ButtonProps} from './Button.types';
import {TypographyWeight} from '~/shared-types/typography.types';

export const Button: React.FC<ButtonProps> = ({
    label = '',
    size = 'default',
    isReversed = false,
    isDisabled = false,
    icon = null,
    variant = 'default',
    color = 'default',
    className = null,
    isHtml = false,
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
        ButtonEl.current.blur();
    };

    return (
        <button
            ref={ButtonEl}
            className={classnames(
                'moonstone-button',
                `moonstone-size_${size}`,
                `moonstone-variant_${variant}`,
                `moonstone-color_${color}`,
                {'moonstone-icon': (icon && label)},
                {'moonstone-icon-button': !label},
                {'moonstone-reverse': isReversed},
                className
            )}
            type="button"
            disabled={isDisabled}
            onClick={e => handleOnClick(e)}
            {...props}
        >
            {icon && <icon.type {...icon.props} size={(size === 'big') ? 'default' : size}/>}
            {label && (
                <Typography
                    isNowrap
                    component="span"
                    variant="button"
                    isUpperCase={size === 'big'}
                    weight={typoWeight}
                    className={classnames('flexFluid')}
                    isHtml={isHtml}
                >
                    {label}
                </Typography>
            )}
        </button>
    );
};

Button.displayName = 'Button';
