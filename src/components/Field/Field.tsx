import React from 'react';
import clsx from 'clsx';
import './Field.scss';
import type {FieldProps} from './Field.types';
import {Typography} from '~/components';

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(({
    label,
    helper,
    chips,
    buttons,
    children,
    hasError,
    errorMessage,
    className,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={clsx(
                'moonstone-field',
                hasError && 'moonstone-field_error',
                className
            )}
            {...props}
        >
            <div className={clsx('flexRow_between', 'alignCenter')}>
                <div className={clsx('moonstone-field_label', 'flexRow')}>
                    <Typography isNowrap variant="subheading" weight="bold">{label}</Typography>
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
            <Typography className={clsx('moonstone-field_helper')}>{helper}</Typography>
            <div className={clsx('moonstone-field_children', 'flexCol_nowrap')}>
                {children}
                {hasError && errorMessage && <Typography className={clsx('moonstome-field_errorMessage')} variant="caption">{errorMessage}</Typography>}
            </div>
        </div>
    );
});

Field.displayName = 'Field';
