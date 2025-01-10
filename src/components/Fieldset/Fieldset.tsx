import React from 'react';
import clsx from 'clsx';
import './Fieldset.scss';
import type {FieldsetProps} from './Fieldset.types';
import {Typography} from '~/components';

export const Fieldset = React.forwardRef<HTMLDivElement, FieldsetProps>(({
    id,
    label,
    helper,
    children,
    className,
    buttons,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            id={id}
            className={clsx(
                'moonstone-fieldset',
                'flexCol_nowrap',
                className
            )}
            {...props}
        >
            <div className={clsx('flexRow_nowrap', 'flexFluid', 'alignCenter')}>
                <div className="flexRow_nowrap flexFluid alignCenter">
                    <Typography isNowrap component="label" variant="heading" weight="bold">{label}</Typography>
                </div>
                {buttons && buttons}
            </div>
            {helper &&
                <Typography variant="caption" className={clsx('moonstone-fieldset_helper')}>{helper}</Typography>}
            <div className={clsx('moonstone-fieldset_children', 'flexCol_nowrap')}>
                {children}
            </div>
        </div>
    );
});

Fieldset.displayName = 'Fieldset';
