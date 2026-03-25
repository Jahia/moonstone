import React from 'react';
import clsx from 'clsx';
import styles from './Field.module.scss';
import type {FieldProps} from './Field.types';
import {Typography} from '~/components';
import {layout, reset} from '~/globals/css-utils.js';

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(({
    id,
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
    if (!children) {
        return null;
    }

    return (
        <div
            ref={ref}
            id={id}
            className={clsx(
                reset,
                ['moonstone-field', styles['moonstone-field']],
                ['flexCol_nowrap', layout.flexCol_nowrap],
                hasError && ['moonstone-field_error', styles['moonstone-field_error']],
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
                <div
                    className={clsx(
                        ['flexRow_nowrap', layout.flexRow_nowrap],
                        ['flexFluid', layout.flexFluid],
                        ['alignCenter', layout.alignCenter]
                    )}
                >
                    <Typography isNowrap component="label" weight="bold">{label}</Typography>
                    {chips &&
                        <div
                            className={clsx(
                                ['moonstone-field_chips', styles['moonstone-field_chips']],
                                ['flexRow_nowrap', layout.flexRow_nowrap]
                            )}
                        >
                            {chips}
                        </div>}
                </div>
                {buttons &&
                    <div
                        className={clsx(
                            ['moonstone-field_buttons', styles['moonstone-field_buttons']],
                            ['flexRow_nowrap', layout.flexRow_nowrap]
                        )}
                    >
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
                <Typography variant="caption" className={clsx('moonstone-field_helper', styles['moonstone-field_helper'])}>{helper}</Typography>}
            <div
                className={clsx(
                    ['moonstone-field_children', styles['moonstone-field_children']],
                    ['flexCol_nowrap', layout.flexCol_nowrap]
                )}
            >
                {children}
                {hasError && errorMessage &&
                    <Typography className={clsx('moonstome-field_errorMessage', styles['moonstome-field_errorMessage'])} variant="caption">{errorMessage}</Typography>}
            </div>
        </div>
    );
});

Field.displayName = 'Field';
