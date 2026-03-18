import React from 'react';
import clsx from 'clsx';
import styles from './Fieldset.module.scss';
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
    if (!children) {
        return null;
    }

    return (
        <fieldset
            ref={ref}
            id={id}
            className={clsx(
                'moonstone-fieldset',
                styles.fieldset,
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
                <Typography variant="caption" className={clsx('moonstone-fieldset_helper', styles.fieldset_helper)}>{helper}</Typography>}
            {children &&
                <div className={clsx('moonstone-fieldset_children', styles.fieldset_children, 'flexCol_nowrap')}>
                    {children}
                </div>}
        </fieldset>
    );
});

Fieldset.displayName = 'Fieldset';
