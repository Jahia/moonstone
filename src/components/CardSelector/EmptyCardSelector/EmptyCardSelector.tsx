import React from 'react';
import clsx from 'clsx';
import './EmptyCardSelector.scss';
import {EmptyCardSelectorProps} from './EmptyCardSelector.types';
import {Typography} from '~/components';

const EmptyCardSelectorForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, EmptyCardSelectorProps> = ({
    label,
    id,
    className,
    isDisabled = false,
    isReadOnly = false,
    onClick = () => undefined,
    ...other
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
        className={clsx('moonstone-empty-card-selector',
            (isDisabled || isReadOnly) && 'moonstone-empty-card-selector_disabled',
            'flexCol_center',
            'alignCenter',
            className)}
        aria-disabled={isDisabled}
        aria-readonly={isReadOnly}
        onClick={e => handleOnClick(e)}
        {...other}
        >
            {label && <Typography className={clsx('moonstone-empty-card-selector-label')}>{label}</Typography>}
        </button>
    );
};

export const EmptyCardSelector = React.forwardRef(EmptyCardSelectorForwardRef);

EmptyCardSelector.displayName = 'EmptyCardSelector';
