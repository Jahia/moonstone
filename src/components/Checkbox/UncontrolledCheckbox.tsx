import React, {MutableRefObject, RefObject} from 'react';
import clsx from 'clsx';
import {useFocusRing} from '@react-aria/focus';
import {capitalize} from '~/utils/helpers';

import {AriaChecked, UncontrolledCheckboxProps} from './UncontrolledCheckbox.types';
import './Checkbox.scss';

export const UncontrolledCheckbox = React.forwardRef<HTMLInputElement, UncontrolledCheckboxProps>(
    (props, ref) => {
        const {
            className,
            indeterminate,
            checked,
            size = 'default',
            ...otherProps
        } = props;
        const defaultRef = React.useRef<HTMLInputElement>(null);
        const resolvedRef = ref || defaultRef;
        let ariaCheckedValue: AriaChecked = 'false';
        const {isFocusVisible, focusProps} = useFocusRing();

        if (indeterminate) {
            ariaCheckedValue = 'mixed';
        } else if (checked) {
            ariaCheckedValue = 'true';
        }

        React.useEffect(() => {
            (resolvedRef as MutableRefObject<HTMLInputElement>).current.indeterminate = indeterminate;
        }, [resolvedRef, indeterminate]);

        return (
            <>
                <div className={clsx('moonstone-checkbox', className)}>
                    <input
                        type="checkbox"
                        className={clsx('moonstone-checkbox_input', `moonstone-checkbox_size${capitalize(size)}`, {'hasFocus': isFocusVisible})}
                        ref={resolvedRef}
                        aria-checked={ariaCheckedValue}
                        {...otherProps}
                        {...focusProps}
                    />
                    <svg className={clsx('moonstone-checkbox_icon', `moonstone-checkbox_size${capitalize(size)}`)} viewBox={`0 0 21 21`}>
                        { indeterminate
                            ? <path d="M4.5 10.5L16.5 10.5" strokeLinecap="round"/>
                            : <path d="M5 10.75L8.5 14.25L16 6" strokeLinecap="round"/>
                        }
                    </svg>
                </div>
            </>
        );
    }
);

UncontrolledCheckbox.displayName = 'UncontrolledCheckbox';
