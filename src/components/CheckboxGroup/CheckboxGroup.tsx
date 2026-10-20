import clsx from 'clsx';
import React, { useMemo } from 'react';

import { CheckboxGroupContext } from './CheckboxGroup.context';
import { useFieldAria } from '~/components/Field/Field.context';
import { layout } from '~/globals/css-utils.js';

import type { CheckboxGroupProps } from './CheckboxGroup.types';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    children, name, isDisabled, isReadOnly, className, onChange, ...props
}) => {
    const fieldAria = useFieldAria(props);
    const provider = useMemo(() => ({
        name,
        isDisabled,
        isReadOnly,
        onChange,
    }), [name, isDisabled, isReadOnly, onChange]);

    return (
        <CheckboxGroupContext.Provider value={provider}>
            <div
                role="group"
                {...props}
                {...fieldAria}
                // Keeps only the aria-invalid of the consumer: ARIA does not allow it on a group, so the Field error is in the description only
                aria-invalid={props['aria-invalid']}
                className={clsx(
                    ['flexCol', layout.flexCol],
                    className,
                )}
            >
                {children}
            </div>
        </CheckboxGroupContext.Provider>
    );
};
