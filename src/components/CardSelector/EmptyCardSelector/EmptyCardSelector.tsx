import React from 'react';
import clsx from 'clsx';
import './EmptyCardSelector.scss';
import {EmptyCardSelectorProps} from './EmptyCardSelector.types';
import {Typography} from '~/components';

const EmptyCardSelectorForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, EmptyCardSelectorProps> = ({
    label,
    iconStart,
    id,
    className,
    isDisabled = false,
    isReadOnly = false,
    onClick = () => undefined,
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
            aria-disabled={isDisabled || isReadOnly}
            onClick={e => handleOnClick(e)}
            {...props}
        >
            {iconStart && iconStart}
            {label && <Typography>{label}</Typography>}
        </button>
    );
};

export const EmptyCardSelector = React.forwardRef(EmptyCardSelectorForwardRef);

EmptyCardSelector.displayName = 'EmptyCardSelector';
