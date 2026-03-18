import React from 'react';
import clsx from 'clsx';
import styles from '../Fieldset.module.scss';
import type {ControlledDynamicFieldsetProps} from './DynamicFieldset.types';
import {Switch, Typography} from '~/components';

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
                'moonstone-dynamic-fieldset',
                styles['dynamic-fieldset'],
                checked && 'moonstone-dynamic-fieldset_open',
                'flexCol_nowrap',
                className
            )}
            aria-checked={checked}
            {...props}
        >
            <legend className={clsx('flexRow_nowrap', 'flexFluid', 'alignCenter')}>
                <Typography isNowrap className="flexRow_nowrap flexFluid alignCenter" component="label" htmlFor="moonstone-dynamic-fieldset-switch" variant="heading" weight="bold">{label}</Typography>
                <Switch id="moonstone-dynamic-fieldset-switch" checked={checked} onChange={onChange}/>
                {buttons && buttons}
            </legend>
            {helper &&
                <Typography variant="caption" className={clsx('moonstone-fieldset_helper', styles.fieldset_helper)}>{helper}</Typography>}
            {(checked && children) &&
            <div className={clsx('moonstone-fieldset_children', styles.fieldset_children, 'flexCol_nowrap')}>
                {children}
            </div>}
        </fieldset>
    );
});

ControlledDynamicFieldset.displayName = 'ControlledDynamicFieldset';
