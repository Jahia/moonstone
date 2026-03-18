import React, {useRef} from 'react';
import clsx from 'clsx';
import type {RadioItemProps} from './RadioItem.types';
import styles from './RadioItem.module.scss';
import {RadioChecked, RadioUnchecked} from '~/icons';
import {Typography} from '~/components';
import {RadioGroupContext} from '~/components/RadioGroup/RadioGroup.context';

export const RadioItem: React.FC<RadioItemProps> = ({className, id, value, label, description, isDisabled, isReadOnly, ...props}) => {
    const context = React.useContext(RadioGroupContext);
    const isDisabledItem = (typeof context.isDisabled === 'undefined') ? isDisabled : context.isDisabled;
    const isReadOnlyItem = (typeof context.isReadOnly === 'undefined') ? isReadOnly : context.isReadOnly;
    const containerRef = useRef(null);

    return (
        <Typography
            ref={containerRef}
            className={clsx('moonstone-radio-container', styles['radio-container'], 'flexCol', className)}
            aria-readonly={isReadOnlyItem}
            aria-disabled={isDisabledItem}
            variant="body"
            weight="default"
            component="label"
        >
            <div className={clsx('flexRow alignCenter')}>
                <div className={clsx('moonstone-radio', styles.radio)}>
                    <input
                        {...props}
                        className={clsx('moonstone-radio_input', styles.radio_input)}
                        type="radio"
                        checked={context.value === value}
                        disabled={isDisabledItem}
                        name={context.name}
                        aria-readonly={isReadOnlyItem}
                        id={id}
                        value={value}
                        aria-labelledby={`${id}-label`}
                        aria-describedby={description ? `${id}-description` : null}
                        onChange={event => {
                            context.onChange(event, value);
                        }}
                    />
                    <RadioChecked className={clsx('moonstone-radio_icon', styles.radio_icon, 'moonstone-radio_iconChecked', styles.radio_iconChecked)}/>
                    <RadioUnchecked className={clsx('moonstone-radio_icon', styles.radio_icon, 'moonstone-radio_iconUnchecked', styles.radio_iconUnchecked)}/>
                </div>
                <Typography id={`${id}-label`} variant="body" weight="default" component="span" className={clsx('moonstone-radio-label', styles['radio-label'])}>{label}</Typography>
            </div>
            {description && (
                <Typography id={`${id}-description`} variant="caption" weight="default" component="span" className={clsx('moonstone-radio-description', styles['radio-description'], 'flexRow')}>{description}</Typography>
            )}
        </Typography>
    );
};

RadioItem.displayName = 'RadioItem';
