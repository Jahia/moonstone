import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { EmptyCardSelectorProps } from './EmptyCardSelector.types';

import styles from './EmptyCardSelector.module.scss';

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
    const handleOnClick: React.MouseEventHandler = (e) => {
        if (isDisabled || isReadOnly) {
            return;
        }

        onClick(e);
        (e.currentTarget as HTMLElement).blur();
    };

    return (
        <button
            disabled={isDisabled || isReadOnly}
            className={clsx(
                ['moonstone-emptyCardSelector', styles['moonstone-emptyCardSelector']],
                (isDisabled || isReadOnly) && ['moonstone-emptyCardSelector_disabled', styles['moonstone-emptyCardSelector_disabled']],
                ['flexRow_center', layout.flexRow_center],
                ['flexFluid', layout.flexFluid],
                ['alignCenter', layout.alignCenter],
                className,
            )}
            id={id}
            ref={ref}
            type="button"
            onClick={e => handleOnClick(e)}
            {...props}
        >
            {iconStart}
            {label && <Typography data-testid="emptyCardSelector-label">{label}</Typography>}
        </button>
    );
});

EmptyCardSelector.displayName = 'EmptyCardSelector';
