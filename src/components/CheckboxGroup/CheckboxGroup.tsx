import clsx from 'clsx';
import React, { useMemo } from 'react';

import { CheckboxGroupContext } from './CheckboxGroup.context';
import { useFieldAria } from '~/components/Field/Field.context';
import { layout } from '~/globals/css-utils.js';

import type { CheckboxGroupProps } from './CheckboxGroup.types';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    children, name, isDisabled, isReadOnly, className, onChange, ...props
}) => {
    const fieldAria = useFieldAria(props['aria-label']);
    const provider = useMemo(() => ({
        name,
        isDisabled,
        isReadOnly,
        onChange,
    }), [name, isDisabled, isReadOnly, onChange]);

    return (
        <CheckboxGroupContext.Provider value={provider}>
            <div
                // ARIA does not allow aria-invalid on a group, so the error is in its description only
                aria-describedby={fieldAria['aria-describedby']}
                aria-labelledby={fieldAria['aria-labelledby']}
                role="group"
                {...props}
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
