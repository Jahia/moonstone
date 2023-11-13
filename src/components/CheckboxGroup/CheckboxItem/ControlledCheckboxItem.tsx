import React from 'react';
import clsx from 'clsx';

import './CheckboxItem.scss';
import {Checkbox, Typography} from '~/components';
import {CheckboxGroupContext} from '../CheckboxGroup.context';
import type {CheckboxItemProps} from './CheckboxItem.types';

export const ControlledCheckboxItem: React.FC<CheckboxItemProps> = ({className, id, value, label, description, isDisabled, isReadOnly, onChange, name, ...props}) => {
    const context = React.useContext(CheckboxGroupContext);

    const isDisabledItem = (typeof context === 'undefined') ? isDisabled : context.isDisabled;
    const isReadOnlyItem = (typeof context === 'undefined') ? isReadOnly : context.isReadOnly;
    const nameItem = (typeof context === 'undefined') ? name : context.name;

    return (
        <Typography
            className={clsx('moonstone-checkboxItem flexCol', className)}
            aria-readonly={isReadOnlyItem}
            aria-disabled={isDisabledItem}
            variant="body"
            weight="default"
            component="label"
        >
            <div className={clsx('flexRow alignCenter')}>
                <Checkbox
                    aria-labelledby={`${id}-label`}
                    aria-describedby={description ? `${id}-description` : null}
                    value={value}
                    isReadOnly={isReadOnlyItem}
                    isDisabled={isDisabledItem}
                    name={nameItem}
                    onChange={event => {
                        if (typeof context?.onChange !== 'undefined') {
                            context.onChange(event);
                        }

                        if (typeof onChange !== 'undefined') {
                            onChange(event);
                        }

                        console.log('trigger onChange on checkboxItem');
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
