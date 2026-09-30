import clsx from 'clsx';
import React from 'react';

import { Switch, Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { ControlledDynamicFieldsetProps } from './DynamicFieldset.types';

import styles from '../Fieldset.module.scss';

export const ControlledDynamicFieldset = React.forwardRef<HTMLFieldSetElement, ControlledDynamicFieldsetProps>(({
    id,
    label,
    helper,
    children,
    className,
    buttons,
    checked,
    onChange,
    ...props
}, ref) => {
    return (
        <fieldset
            aria-checked={checked}
            className={clsx(
                ['moonstone-dynamic-fieldset', styles['moonstone-dynamic-fieldset']],
                checked && 'moonstone-dynamic-fieldset_open',
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
                    className={clsx(
                        ['flexRow_nowrap', layout.flexRow_nowrap],
                        ['flexFluid', layout.flexFluid],
                        ['alignCenter', layout.alignCenter],
                    )}
                    component="label"
                    htmlFor="moonstone-dynamic-fieldset-switch"
                    variant="heading"
                    weight="bold"
                >
                    {label}
                </Typography>
                <Switch checked={checked} id="moonstone-dynamic-fieldset-switch" onChange={onChange}/>
                {buttons}
            </legend>
            {helper
                && <Typography className={clsx('moonstone-fieldset_helper', styles['moonstone-fieldset_helper'])} variant="caption">{helper}</Typography>}
            {(checked && children)
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

ControlledDynamicFieldset.displayName = 'ControlledDynamicFieldset';
