import clsx from 'clsx';
import React, { useRef } from 'react';

import { Typography } from '~/components';
import { RadioGroupContext } from '~/components/RadioGroup/RadioGroup.context';
import { layout } from '~/globals/css-utils.js';
import { RadioChecked, RadioUnchecked } from '~/icons';

import type { RadioItemProps } from './RadioItem.types';

import styles from './RadioItem.module.scss';

export const RadioItem: React.FC<RadioItemProps> = ({
    className, id, value, label, description, isDisabled, isReadOnly, ...props
}) => {
    const context = React.useContext(RadioGroupContext);
    const isDisabledItem = (typeof context.isDisabled === 'undefined') ? isDisabled : context.isDisabled;
    const isReadOnlyItem = (typeof context.isReadOnly === 'undefined') ? isReadOnly : context.isReadOnly;
    const containerRef = useRef(null);

    return (
        <Typography
            aria-disabled={isDisabledItem}
            aria-readonly={isReadOnlyItem}
            className={clsx(
                ['moonstone-radio-container', styles['moonstone-radio-container']],
                ['flexCol', layout.flexCol],
                className,
            )}
            component="label"
            ref={containerRef}
            variant="body"
            weight="default"
        >
            <div className={clsx('flexRow', layout.flexRow, 'alignCenter', layout.alignCenter, styles.radioItem_wrapper)}>
                <div className={clsx('moonstone-radio', styles['moonstone-radio'])}>
                    <input
                        {...props}
                        disabled={isDisabledItem}
                        aria-describedby={description ? `${id}-description` : null}
                        aria-labelledby={`${id}-label`}
                        aria-readonly={isReadOnlyItem}
                        checked={context.value === value}
                        className={clsx('moonstone-radio_input', styles['moonstone-radio_input'])}
                        id={id}
                        name={context.name}
                        type="radio"
                        value={value}
                        onChange={(event) => {
                            context.onChange(event, value);
                        }}
                    />
                    <RadioChecked className={clsx(
                        ['moonstone-radio_icon', styles['moonstone-radio_icon']],
                        ['moonstone-radio_iconChecked', styles['moonstone-radio_iconChecked']])}
                    />
                    <RadioUnchecked className={clsx(
                        ['moonstone-radio_icon', styles['moonstone-radio_icon']],
                        ['moonstone-radio_iconUnchecked', styles['moonstone-radio_iconUnchecked']])}
                    />
                </div>
                <Typography
                    className={clsx('moonstone-radio-label', styles['moonstone-radio-label'])}
                    component="span"
                    id={`${id}-label`}
                    variant="body"
                    weight="default"
                >
                    {label}
                </Typography>
            </div>
            {description && (
                <Typography
                    className={clsx(
                        ['moonstone-radio-description', styles['moonstone-radio-description']],
                        ['flexRow', layout.flexRow],
                    )}
                    component="span"
                    id={`${id}-description`}
                    variant="caption"
                    weight="default"
                >
                    {description}
                </Typography>
            )}
        </Typography>
    );
};

RadioItem.displayName = 'RadioItem';
