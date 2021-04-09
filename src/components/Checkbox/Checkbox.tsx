import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';

import {CheckboxProps} from './Checkbox.types';
import './Checkbox.scss';

export const Checkbox: React.FC<CheckboxProps> = ({
    className,
    isDefaultChecked = false,
    isIndeterminate = false,
    isDisabled,
    id,
    value = '',
    onClick,
    onChange,
    ...props
}: CheckboxProps) => {
    const CheckboxEl = useRef(null);
    const [checked, setChecked] = useState(isDefaultChecked);


    // ---
    // How to manage the indeterminate state ?
    // ---

    // if (hasMixedState) {
    //     CheckboxEl.indeterminate = true;
    // }

    // useEffect(() => {
    //     if (isMixedState) {
    //         CheckboxEl.current.indeterminate = true;
    //         console.log(CheckboxEl.current);
    //     }
    // }, [isMixedState]);

    // console.log(`isMixedState: ${isIndeterminate}`);

    // const handleOnChange = (e, item) => {
    //     setCurrentOption(item);
    //     action('onChange');
    //     return true;
    // };

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setChecked(prevState => !prevState);
        onChange(e, {'state': 'checked'})
    }

    return (
        <div
            className={clsx('moonstone-checkbox', className)}
            {...props}
        >
            <input
                ref={CheckboxEl}
                id={id}
                aria-checked={isIndeterminate ? 'mixed' : checked}
                className={clsx('moonstone-checkbox_input')}
                type="checkbox"
                defaultChecked={isIndeterminate ? true : checked}
                value={value}
                onClick={onClick}
                onChange={handleOnChange}
            />
            <svg className={clsx('moonstone-checkbox_icon')} viewBox="0 0 21 21">
                { isIndeterminate
                    ? <path d="M4.5 10.5L16.5 10.5" strokeLinecap="round"/>
                    : <path d="M5 10.75L8.5 14.25L16 6" strokeLinecap="round"/>
                }
            </svg>
        </div>
    )
};

Checkbox.displayName = 'Checkbox';
