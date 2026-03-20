import React from 'react';
import clsx from 'clsx';
import styles from './Fieldset.module.scss';
import type {FieldsetProps} from './Fieldset.types';
import {Typography} from '~/components';
import {layout} from '~/globals/css-utils.js';

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
                ['moonstone-fieldset', styles['moonstone-fieldset']],
                ['flexCol_nowrap', layout.flexCol_nowrap],
                className
            )}
            {...props}
        >
            <div
                className={clsx(
                    ['flexRow_nowrap', layout.flexRow_nowrap],
                    ['flexFluid', layout.flexFluid],
                    ['alignCenter', layout.alignCenter]
                )}
            >
                <Typography isNowrap className={clsx(['flexRow_nowrap', layout.flexRow_nowrap], ['flexFluid', layout.flexFluid], ['alignCenter', layout.alignCenter])} component="legend" variant="heading" weight="bold">{label}</Typography>
                {buttons && buttons}
            </div>
            {helper &&
                <Typography variant="caption" className={clsx('moonstone-fieldset_helper', styles['moonstone-fieldset_helper'])}>{helper}</Typography>}
            {children &&
                <div
                    className={clsx(
                        ['moonstone-fieldset_children', styles['moonstone-fieldset_children']],
                        ['flexCol_nowrap', layout.flexCol_nowrap]
                    )}
                >
                    {children}
                </div>}
        </fieldset>
    );
});

Fieldset.displayName = 'Fieldset';
