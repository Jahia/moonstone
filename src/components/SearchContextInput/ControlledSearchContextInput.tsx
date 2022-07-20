import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Cancel} from '~/icons';
import {Button} from '~/components';
import './SearchContextInput.scss';
import {SearchContextInputProps} from './SearchContextInput.types';

export const ControlledSearchContextInput: React.FC<SearchContextInputProps> = ({
    value = '',
    id,
    placeholder,
    className,
    searchContext,
    onClear,
    onChange,
    onBlur,
    onFocus,
    focusOnField = false,
    ...props
}) => {
    const hasSearchContext = typeof searchContext !== 'undefined';
    const classNameProps = clsx(
        'moonstone-searchContextInput',
        'moonstone-size_big',
        className
    );
    const inputFilled = value !== '';
    const inputRef = useRef(null);


    useEffect(() => {
        if (focusOnField) {
            inputRef.current.focus({preventScroll: true});
        }
    }, [focusOnField]);

    if (!onClear) {
        onClear = () => {
            inputRef.current.value = ""
            const inputEvent: unknown = new Event('change');
            inputRef.current.dispatchEvent(inputEvent);
            onChange(inputEvent as React.ChangeEvent<HTMLInputElement>);
        }
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
                            className={clsx(searchContext.props.className, 'moonstone-searchContextInput-context')}
                        />
                    </>
                )
            }
            <input
                className={
                    clsx(
                        'moonstone-searchContextInput-element',
                        {'moonstone-searchContextInput-with-context': hasSearchContext},
                        {'end-icon-padding': onClear}
                    )
                }
                type="text"
                role="search"
                value={value}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                ref={inputRef}
                {...props}
            />
            {onClear && inputFilled && (
                <Button
                    className="moonstone-searchContextInput_clearButton flexRow_center alignCenter"
                    onClick={onClear}
                    variant="ghost"
                    icon={<Cancel/>}
                    aria-label="Reset"
                />
            )}
        </div>
    );
};

ControlledSearchContextInput.displayName = 'ControlledSearchContextInput';
