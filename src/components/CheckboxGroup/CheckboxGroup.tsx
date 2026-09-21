import clsx from 'clsx';
import React, { useMemo } from 'react';

import { CheckboxGroupContext } from './CheckboxGroup.context';
import { layout } from '~/globals/css-utils.js';

import type { CheckboxGroupProps } from './CheckboxGroup.types';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    children, name, isDisabled, isReadOnly, className, onChange, ...props
}) => {
    const provider = useMemo(() => ({
        name,
        isDisabled,
        isReadOnly,
        onChange,
    }), [name, isDisabled, isReadOnly, onChange]);

    return (
        <CheckboxGroupContext.Provider value={provider}>
            <div
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
