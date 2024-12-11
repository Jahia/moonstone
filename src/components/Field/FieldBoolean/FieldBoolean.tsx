import React from 'react';
import clsx from 'clsx';
import '../Field.scss';
import './FieldBoolean.scss';
import type {FieldBooleanProps} from './FieldBoolean.types';
import {Typography, Checkbox} from '~/components';

export const FieldBoolean = React.forwardRef<HTMLDivElement, FieldBooleanProps>(({
    label,
    helper,
    chips,
    buttons,
    hasError,
    errorMessage,
    className,
    checkboxAttributes,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={clsx(
                'moonstone-field',
                'moonstone-fieldBoolean',
                hasError && 'moonstone-field_error',
                className
            )}
            {...props}
        >
            <div className={clsx('moonstone-fieldBoolean_children')}>
                <Checkbox {...checkboxAttributes}/>
            </div>
            <div className={clsx('flexRow_between', 'alignCenter')}>
                <div className={clsx('moonstone-field_label', 'flexRow')}>
                    <Typography isNowrap weight="bold">{label}</Typography>
                    {chips}
                </div>
                {buttons &&
                <div className={clsx('moonstone-field_buttons', 'flexRow_nowrap')}>
                    {React.Children.map(buttons, button =>
                    button.props && button.props.children ?
                    (React.Children.map(button.props.children, btn => {
                        const key = btn.props.icon ? btn.props.icon.name : btn.props.label;
                        return (btn && <btn.type key={`btn-${key}`} size="default" {...btn.props}/>);
                    }
                     )) : (buttons && <buttons.type size="default" {...buttons.props}/>)
                )}
                </div>}
            </div>
            <Typography className={clsx('moonstone-field_helper')} variant="caption">{helper}</Typography>
            {hasError && errorMessage && <Typography className={clsx('moonstome-field_errorMessage')} variant="caption">{errorMessage}</Typography>}
        </div>
    );
});

FieldBoolean.displayName = 'FieldBoolean';
