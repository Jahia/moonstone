import clsx from 'clsx';
import React, { useMemo } from 'react';

import { RadioGroupContext } from './RadioGroup.context';
import { useFieldAria } from '~/components/Field/Field.context';
import { layout } from '~/globals/css-utils.js';

import type { ControlledRadioGroupProps } from './RadioGroup.types';

export const ControlledRadioGroup: React.FC<ControlledRadioGroupProps> = ({
    children, name, value, isDisabled, isReadOnly, onChange, className, ...props
}) => {
    // When no value is set, then the first item will be selected by default
    if (typeof value === 'undefined' || value === '') {
        value = (children[0].props.value);
    }

    const fieldAria = useFieldAria(props);
    const provider = useMemo(() => ({
        name,
        value,
        isDisabled,
        isReadOnly,
        onChange,
    }), [name, value, isDisabled, isReadOnly, onChange]);

    return (
        <RadioGroupContext.Provider value={provider}>
            <div
                role="radiogroup"
                {...props}
                {...fieldAria}
                className={clsx(
                    'flexCol', layout.flexCol, className,
                )}
            >
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};
