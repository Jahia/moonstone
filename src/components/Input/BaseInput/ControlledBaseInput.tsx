import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Cancel} from '~/icons';
import {Button} from '~/components';
import './BaseInput.scss';
import type {ControlledBaseInputProps} from './BaseInput.types';

export const ControlledBaseInput: React.FC<ControlledBaseInputProps & { searchContext?: React.ReactElement }> = ({
    value = '',
    searchContext,
    id,
    role,
    placeholder,
    isDisabled = false,
    isReadOnly = false,
    className,
    size = 'default',
    icon,
    isShowClearButton,
    onClear,
    onChange,
    onBlur,
    onFocus,
    focusOnField = false,
    ...props
}) => {
    const hasSearchContext = typeof searchContext !== 'undefined';
    const isFilled = value !== '';
    const inputRef = useRef(null);
    const classNameProps = clsx(
        'moonstone-baseInput',
        {'moonstone-baseInput_big': size === 'big'},
        className
    );

    useEffect(() => {
        if (focusOnField) {
            inputRef.current.focus({preventScroll: true});
        }
    }, [focusOnField]);

    if (isShowClearButton && !onClear) {
        onClear = () => {
            inputRef.current.value = '';
            const inputEvent: unknown = new Event('change');
            inputRef.current.dispatchEvent(inputEvent);
            onChange(inputEvent as React.ChangeEvent<HTMLInputElement>);
        };
    }

    return (
        <div className={classNameProps}>
            {hasSearchContext &&
                (
                    <>
                        <searchContext.type
                            {...searchContext.props}
                            variant="ghost"
                            size="small"
                            maxWidth="100px"
                            className={clsx(searchContext.props.className, 'moonstone-searchContext-element')}
                        />
                    </>
                )}
            <input
                ref={inputRef}
                className={
                    clsx(
                        'moonstone-baseInput-element',
                        {
                            'moonstone-baseInput-element_hasIcon': icon,
                            'moonstone-baseInput-element-withContext': hasSearchContext,
                            'moonstone-baseInput-element_hasClearButton': onClear
                        }
                    )
                }
                type="text"
                role={role}
                value={value}
                id={id}
                placeholder={placeholder}
                disabled={isDisabled}
                readOnly={isReadOnly}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                {...props}
            />
            {icon && (
                <div
                    className={clsx(
                        'moonstone-baseInput_icon',
                        'flexRow_nowrap',
                        'alignCenter'
                    )}
                >
                    <icon.type {...icon.props} focusable="false"/>
                </div>
            )}
            {onClear && isFilled && !isDisabled && !isReadOnly && (
                <Button
                    className="moonstone-baseInput_clearButton flexRow_center alignCenter"
                    variant="ghost"
                    icon={<Cancel/>}
                    aria-label="Reset"
                    onClick={onClear}
                />
            )}
        </div>
    );
};

ControlledBaseInput.displayName = 'ControlledBaseInput';
