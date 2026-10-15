import clsx from 'clsx';
import React, { useMemo } from 'react';

import { FieldContext } from './Field.context';
import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { FieldProps } from './Field.types';

import styles from './Field.module.scss';

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
    const hasErrorMessage = Boolean(hasError && errorMessage);
    const field = useMemo(() => ({
        labelId: `${id}-label`,
        descriptionId: [helper && `${id}-helper`, hasErrorMessage && `${id}-error`].filter(Boolean).join(' ') || undefined,
        hasError,
    }), [id, helper, hasErrorMessage, hasError]);

    if (!children) {
        return null;
    }

    return (
        <div
            className={clsx(
                ['moonstone-field', styles['moonstone-field']],
                ['flexCol_nowrap', layout.flexCol_nowrap],
                hasError && ['moonstone-field_error', styles['moonstone-field_error']],
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
                <div
                    className={clsx(
                        ['flexRow_nowrap', layout.flexRow_nowrap],
                        ['flexFluid', layout.flexFluid],
                        ['alignCenter', layout.alignCenter],
                    )}
                >
                    <Typography isNowrap component="label" id={`${id}-label`} weight="bold">{label}</Typography>
                    {chips
                        && (
                            <div
                                className={clsx(
                                    ['moonstone-field_chips', styles['moonstone-field_chips']],
                                    ['flexRow_nowrap', layout.flexRow_nowrap],
                                )}
                            >
                                {chips}
                            </div>
                        )}
                </div>
                {buttons
                    && (
                        <div
                            className={clsx(
                                ['moonstone-field_buttons', styles['moonstone-field_buttons']],
                                ['flexRow_nowrap', layout.flexRow_nowrap],
                            )}
                        >
                            {React.Children.map(buttons, button =>
                                button.props && button.props.children
                                    ? (React.Children.map(button.props.children, (btn) => {
                                            const key = btn.props.icon ? btn.props.icon.name : btn.props.label;
                                            return (btn && <btn.type key={`btn-${key}`} size="default" {...btn.props}/>);
                                        },
                                        ))
                                    : (buttons && <buttons.type size="default" {...buttons.props}/>),
                            )}
                        </div>
                    )}
            </div>
            {helper
                && <Typography className={clsx('moonstone-field_helper', styles['moonstone-field_helper'])} id={`${id}-helper`} variant="caption">{helper}</Typography>}
            <div
                className={clsx(
                    ['moonstone-field_children', styles['moonstone-field_children']],
                    ['flexCol_nowrap', layout.flexCol_nowrap],
                )}
            >
                <FieldContext.Provider value={field}>
                    {children}
                </FieldContext.Provider>
                {hasErrorMessage
                    && <Typography className={clsx('moonstome-field_errorMessage', styles['moonstome-field_errorMessage'])} id={`${id}-error`} role="alert" variant="caption">{errorMessage}</Typography>}
            </div>
        </div>
    );
});

Field.displayName = 'Field';
