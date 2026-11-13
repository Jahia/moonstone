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
            // The group is named by its label only, without the text of its buttons
            aria-labelledby={`${id}-label`}
            className={clsx(
                ['moonstone-fieldset', styles['moonstone-fieldset']],
                ['flexCol_nowrap', layout.flexCol_nowrap],
                className,
            )}
            id={id}
            ref={ref}
            {...props}
        >
            <legend
                className={clsx(
                    ['flexRow_nowrap', layout.flexRow_nowrap],
                    ['flexFluid', layout.flexFluid],
                    ['alignCenter', layout.alignCenter],
                )}
            >
                <Typography
                    isNowrap
                    className={clsx(['flexRow_nowrap', layout.flexRow_nowrap], ['flexFluid', layout.flexFluid], ['alignCenter', layout.alignCenter])}
                    component="span"
                    id={`${id}-label`}
                    variant="heading"
                    weight="bold"
                >
                    {label}
                </Typography>
                {buttons}
            </legend>
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
