import React from 'react';
import clsx from 'clsx';
import './EmptyCardSelector.scss';
import type {EmptyCardSelectorProps} from './EmptyCardSelector.types';
import {Typography} from '~/components';

export const EmptyCardSelector = React.forwardRef<HTMLButtonElement, EmptyCardSelectorProps>(({
    label,
    iconStart,
    id,
    className,
    isDisabled = false,
    isReadOnly = false,
    onClick,
    ...props
}, ref) => {
    const handleOnClick: React.MouseEventHandler = e => {
        if (isDisabled || isReadOnly) {
            return;
        }

        onClick(e);
        (e.currentTarget as HTMLElement).blur();
    };

    return (
        <button
            ref={ref}
            id={id}
            type="button"
            className={clsx('moonstone-emptyCardSelector',
                (isDisabled || isReadOnly) && 'moonstone-emptyCardSelector_disabled',
                'flexRow_center',
                'flexFluid',
                'alignCenter',
                className
            )}
            disabled={isDisabled || isReadOnly}
            onClick={e => handleOnClick(e)}
            {...props}
        >
            {iconStart && iconStart}
            {label && <Typography data-testid="emptyCardSelector-label">{label}</Typography>}
        </button>
    );
});

EmptyCardSelector.displayName = 'EmptyCardSelector';
