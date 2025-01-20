import React from 'react';
import clsx from 'clsx';
import './Fieldset.scss';
import type {FieldsetProps} from './Fieldset.types';
import {Typography} from '~/components';

export const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(({
    id,
    label,
    helper,
    children,
    className,
    buttons,
    ...props
}, ref) => {
    return (
        <fieldset
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
                <Typography isNowrap className="flexRow_nowrap flexFluid alignCenter" component="legend" variant="heading" weight="bold">{label}</Typography>
                {buttons && buttons}
            </div>
            {helper &&
                <Typography variant="caption" className={clsx('moonstone-fieldset_helper')}>{helper}</Typography>}
            <div className={clsx('moonstone-fieldset_children', 'flexCol_nowrap')}>
                {children}
            </div>
        </fieldset>
    );
});

Fieldset.displayName = 'Fieldset';
