import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { FieldsetProps } from './Fieldset.types';

import styles from './Fieldset.module.scss';

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
            className={clsx(
                ['moonstone-fieldset', styles['moonstone-fieldset']],
                ['flexCol_nowrap', layout.flexCol_nowrap],
                className,
            )}
            id={id}
            ref={ref}
            {...props}
        >
            <div
                className={clsx(
                    ['flexRow_nowrap', layout.flexRow_nowrap],
                    ['flexFluid', layout.flexFluid],
                    ['alignCenter', layout.alignCenter],
                )}
            >
                <Typography
                    isNowrap
                    className={clsx(['flexRow_nowrap', layout.flexRow_nowrap], ['flexFluid', layout.flexFluid], ['alignCenter', layout.alignCenter])}
                    component="legend"
                    variant="heading"
                    weight="bold"
                >
                    {label}
                </Typography>
                {buttons}
            </div>
            {helper
                && <Typography className={clsx('moonstone-fieldset_helper', styles['moonstone-fieldset_helper'])} variant="caption">{helper}</Typography>}
            {children
                && (
                    <div
                        className={clsx(
                            ['moonstone-fieldset_children', styles['moonstone-fieldset_children']],
                            ['flexCol_nowrap', layout.flexCol_nowrap],
                        )}
                    >
                        {children}
                    </div>
                )}
        </fieldset>
    );
});

Fieldset.displayName = 'Fieldset';
