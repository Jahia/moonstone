import React from 'react';
import clsx from 'clsx';
import styles from '../Fieldset.module.scss';
import type {ControlledDynamicFieldsetProps} from './DynamicFieldset.types';
import {Switch, Typography} from '~/components';
import {layout, reset} from '~/globals/css-utils.js';

export const ControlledDynamicFieldset = React.forwardRef<HTMLFieldSetElement, ControlledDynamicFieldsetProps>(({
    id,
    label,
    helper,
    children,
    className,
    buttons,
    checked = false,
    onChange,
    ...props
}, ref) => {
    return (
        <fieldset
            ref={ref}
            id={id}
            className={clsx(
                reset,
                ['moonstone-dynamic-fieldset', styles['moonstone-dynamic-fieldset']],
                checked && 'moonstone-dynamic-fieldset_open',
                ['flexCol_nowrap', layout.flexCol_nowrap],
                className
            )}
            aria-checked={checked}
            {...props}
        >
            <legend
                className={clsx(
                    ['flexRow_nowrap', layout.flexRow_nowrap],
                    ['flexFluid', layout.flexFluid],
                    ['alignCenter', layout.alignCenter]
                )}
            >
                <Typography
                    isNowrap
                    className={clsx(
                        ['flexRow_nowrap', layout.flexRow_nowrap],
                        ['flexFluid', layout.flexFluid],
                        ['alignCenter', layout.alignCenter]
                    )}
                    component="label"
                    htmlFor="moonstone-dynamic-fieldset-switch"
                    variant="heading"
                    weight="bold"
                >{label}
                </Typography>
                <Switch id="moonstone-dynamic-fieldset-switch" checked={checked} onChange={onChange}/>
                {buttons && buttons}
            </legend>
            {helper &&
                <Typography variant="caption" className={clsx('moonstone-fieldset_helper', styles['moonstone-fieldset_helper'])}>{helper}</Typography>}
            {(checked && children) &&
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

ControlledDynamicFieldset.displayName = 'ControlledDynamicFieldset';
