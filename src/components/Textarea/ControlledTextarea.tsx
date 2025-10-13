import React from 'react';
import clsx from 'clsx';
import './Textarea.scss';
import type {ControlledTextareaProps} from './Textarea.types';

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
            ref={ref}
            className={clsx('moonstone-textarea', isResizable && 'moonstone-textarea_resizable', className)}
            value={value}
            id={id}
            placeholder={placeholder}
            disabled={isDisabled}
            readOnly={isReadOnly}
            onChange={(!isDisabled || !isReadOnly) && onChange}
            onBlur={(!isDisabled || !isReadOnly) && onBlur}
            onFocus={(!isDisabled || !isReadOnly) && onFocus}
            {...props}
        />
    );
});

ControlledTextarea.displayName = 'ControlledTextarea';
