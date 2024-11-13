import React from 'react';
import clsx from 'clsx';
import './PickerSelection.scss';
import {PickerSelectionProps} from './PickerSelection.types';

const PickerSelectionForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, PickerSelectionProps> = ({

    className,
    children
}, ref) => {
    return (
        <div
        ref={ref}
        className={clsx(
            'moonstone-picker-selection',
            className
        )}
        >
            {children.map(item => (
                item
            ))}
        </div>
    );
};

export const PickerSelection = React.forwardRef(PickerSelectionForwardRef);

PickerSelection.displayName = 'PickerSelection';
