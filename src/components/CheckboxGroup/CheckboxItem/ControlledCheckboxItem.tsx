import React, {useRef} from 'react';
import clsx from 'clsx';

import './CheckboxItem.scss';
import {Checkbox, Typography} from '~/components';
import {CheckboxGroupContext} from '../CheckboxGroup.context';
import type {ControlledCheckboxItemProps} from './CheckboxItem.types';
import {onArrowNavigation} from '~/hooks';

export const ControlledCheckboxItem: React.FC<ControlledCheckboxItemProps> = ({className, id, value, label, description, isDisabled, isReadOnly, onChange, name, ...props}) => {
    const context = React.useContext(CheckboxGroupContext);

    const isDisabledItem = (typeof context === 'undefined') ? isDisabled : context.isDisabled;
    const isReadOnlyItem = (typeof context === 'undefined') ? isReadOnly : context.isReadOnly;
    const nameItem = (typeof context === 'undefined') ? name : context.name;
    const containerRef = useRef(null);

    return (
        <Typography
            ref={containerRef}
            className={clsx('moonstone-checkboxItem flexCol', className)}
            aria-readonly={isReadOnlyItem}
            aria-disabled={isDisabledItem}
            variant="body"
            weight="default"
            component="label"
            {... onArrowNavigation({ref: containerRef})}
        >
            <div className={clsx('flexRow alignCenter')}>
                <Checkbox
                    aria-labelledby={`${id}-label`}
                    aria-describedby={description ? `${id}-description` : null}
                    value={value}
                    isReadOnly={isReadOnlyItem}
                    isDisabled={isDisabledItem}
                    name={nameItem}
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
                    id={`${id}-label`}
                    variant="body"
                    component="span"
                    className={clsx('moonstone-checkboxItem_label')}
                >
                    {label}
                </Typography>
            </div>
            {description && (
                <Typography
                    id={`${id}-description`}
                    variant="caption"
                    weight="default"
                    component="span"
                    className={clsx('moonstone-checkboxItem_description flexRow')}
                >
                    {description}
                </Typography>
            )}
        </Typography>
    );
};

ControlledCheckboxItem.displayName = 'ControlledCheckboxItem';
