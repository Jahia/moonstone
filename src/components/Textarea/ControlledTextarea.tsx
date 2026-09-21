import clsx from 'clsx';
import React from 'react';

import type { ControlledTextareaProps } from './Textarea.types';

import styles from './Textarea.module.scss';

export const ControlledTextarea = React.forwardRef<HTMLTextAreaElement, ControlledTextareaProps>(({
    value,
    id,
    placeholder,
    isDisabled = false,
    isReadOnly = false,
    isResizable = true,
    className,
    onChange,
    onBlur,
    onFocus,
    ...props
}, ref) => {
    return (
        <textarea
            disabled={isDisabled}
            readOnly={isReadOnly}
            className={clsx(
                ['moonstone-textarea', styles['moonstone-textarea']],
                isResizable && ['moonstone-textarea_resizable', styles['moonstone-textarea_resizable']],
                className,
            )}
            id={id}
            placeholder={placeholder}
            ref={ref}
            value={value}
            onBlur={(!isDisabled || !isReadOnly) && onBlur}
            onChange={(!isDisabled || !isReadOnly) && onChange}
            onFocus={(!isDisabled || !isReadOnly) && onFocus}
            {...props}
        />
    );
});

ControlledTextarea.displayName = 'ControlledTextarea';
