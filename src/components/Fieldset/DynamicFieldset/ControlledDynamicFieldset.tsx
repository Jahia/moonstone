import React from 'react';
import clsx from 'clsx';
import '../Fieldset.scss';
import type {ControlledDynamicFieldsetProps} from './DynamicFieldset.types';
import {Switch, Typography} from '~/components';

export const ControlledDynamicFieldset = React.forwardRef<HTMLDivElement, ControlledDynamicFieldsetProps>(({
    id,
    label,
    helper,
    children,
    className,
    buttons,
    isOpen = false,
    onChange,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            id={id}
            className={clsx(
                'moonstone-dynamic-fieldset',
                isOpen && 'moonstone-dynamic-fieldset_open',
                'flexCol_nowrap',
                className
            )}
            {...props}
        >
            <div className={clsx('flexRow_nowrap', 'flexFluid', 'alignCenter')}>
                <div className="flexRow_nowrap flexFluid alignCenter">
                    <Typography isNowrap component="label" variant="heading" weight="bold">{label}</Typography>
                </div>
                <Switch checked={isOpen} onChange={onChange}/>
                {buttons && buttons}
            </div>
            {helper &&
                <Typography variant="caption" className={clsx('moonstone-fieldset_helper')}>{helper}</Typography>}
            <div className={clsx('moonstone-fieldset_children', 'flexCol_nowrap')}>
                {isOpen && children}
            </div>
        </div>
    );
});

ControlledDynamicFieldset.displayName = 'ControlledDynamicFieldset';
