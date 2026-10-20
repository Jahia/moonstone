import clsx from 'clsx';
import React, { useId, useRef } from 'react';

import { CheckboxGroupContext } from '../CheckboxGroup.context';
import { Checkbox, Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { ControlledCheckboxItemProps } from './CheckboxItem.types';

import styles from './CheckboxItem.module.scss';

export const ControlledCheckboxItem: React.FC<ControlledCheckboxItemProps> = ({
    className, id, value, label, description, isDisabled, isReadOnly, onChange, name, ...props
}) => {
    const context = React.useContext(CheckboxGroupContext);

    const isDisabledItem = (typeof context === 'undefined') ? isDisabled : context.isDisabled;
    const isReadOnlyItem = (typeof context === 'undefined') ? isReadOnly : context.isReadOnly;
    const nameItem = (typeof context === 'undefined') ? name : context.name;
    const containerRef = useRef(null);
    const generatedId = useId();
    const itemId = id ?? generatedId;

    return (
        <Typography
            aria-disabled={isDisabledItem}
            aria-readonly={isReadOnlyItem}
            className={clsx(
                ['moonstone-checkboxItem', styles['moonstone-checkboxItem']],
                ['flexCol', layout.flexCol],
                className,
            )}
            component="label"
            ref={containerRef}
            variant="body"
            weight="default"
        >
            <div className={clsx('flexRow', layout.flexRow, 'alignCenter', layout.alignCenter)}>
                <Checkbox
                    isDisabled={isDisabledItem}
                    isReadOnly={isReadOnlyItem}
                    aria-describedby={description ? `${itemId}-description` : null}
                    aria-labelledby={`${itemId}-label`}
                    id={itemId}
                    name={nameItem}
                    value={value}
                    onChange={(event, val, checked) => {
                        if (typeof context?.onChange === 'function') {
                            context.onChange(event, val, checked);
                        }

                        if (typeof onChange === 'function') {
                            onChange(event, val, checked);
                        }
                    }}
                    {...props}
                />
                <Typography
                    className={clsx('moonstone-checkboxItem_label', styles['moonstone-checkboxItem_label'])}
                    component="span"
                    id={`${itemId}-label`}
                    variant="body"
                >
                    {label}
                </Typography>
            </div>
            {description && (
                <Typography
                    className={clsx(
                        ['moonstone-checkboxItem_description', styles['moonstone-checkboxItem_description']],
                        ['flexRow', layout.flexRow],
                    )}
                    component="span"
                    id={`${itemId}-description`}
                    variant="caption"
                    weight="default"
                >
                    {description}
                </Typography>
            )}
        </Typography>
    );
};

ControlledCheckboxItem.displayName = 'ControlledCheckboxItem';
