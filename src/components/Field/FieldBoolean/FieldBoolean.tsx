import React from 'react';
import clsx from 'clsx';
import '../Field.scss';
import './FieldBoolean.scss';
import type {FieldBooleanProps} from './FieldBoolean.types';
import {Typography, Checkbox} from '~/components';

export const FieldBoolean = React.forwardRef<HTMLDivElement, FieldBooleanProps>(({
    id,
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
            id={id}
            className={clsx(
                'moonstone-field',
                'moonstone-fieldBoolean',
                'flexCol_nowrap',
                hasError && 'moonstone-field_error',
                className
            )}
            {...props}
        >
            <div className={clsx('flexRow_nowrap', 'flexFluid', 'alignCenter')}>
                <div className="flexRow_nowrap flexFluid">
                    <div className="moonstone-fieldBoolean_checkbox">
                        <Checkbox {...checkboxAttributes}/>
                    </div>
                    <Typography isNowrap component="label" weight="bold">{label}</Typography>
                    {chips &&
                        <div className={clsx('moonstone-field_chips', 'flexRow_nowrap')}>
                            {chips}
                        </div>}
                </div>
                {buttons &&
                    <div className={clsx('moonstone-field_buttons', 'flexRow_nowrap')}>
                        {React.Children.map(buttons, button =>
                            button.props && button.props.children ?
                            (React.Children.map(button.props.children, btn => {
                                const key = btn.props.icon ? btn.props.icon.name : btn.props.label;
                                return (btn && <btn.type key={`btn-${key}`} size="default" {...btn.props}/>);
                            }
                            )) :
                            (buttons && <buttons.type size="default" {...buttons.props}/>)
                        )}
                    </div>}
            </div>
            {helper &&
                <Typography className={clsx('moonstone-field_helper')} variant="caption">{helper}</Typography>}
            {hasError && errorMessage &&
                <Typography className={clsx('moonstome-field_errorMessage')} variant="caption">{errorMessage}</Typography>}
        </div>
    );
});

FieldBoolean.displayName = 'FieldBoolean';
