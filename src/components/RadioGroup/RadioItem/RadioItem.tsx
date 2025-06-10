import React, {useRef} from 'react';
import clsx from 'clsx';
import type {RadioItemProps} from './RadioItem.types';
import './RadioItem.scss';
import {RadioChecked, RadioUnchecked} from '~/icons';
import {Typography} from '~/components';
import {RadioGroupContext} from '~/components/RadioGroup/RadioGroup.context';
import {onArrowNavigation} from '~/hooks/onArrowNavigation';

export const RadioItem: React.FC<RadioItemProps> = ({className, id, value, label, description, isDisabled, isReadOnly, ...props}) => {
    const context = React.useContext(RadioGroupContext);
    const isDisabledItem = (typeof context.isDisabled === 'undefined') ? isDisabled : context.isDisabled;
    const isReadOnlyItem = (typeof context.isReadOnly === 'undefined') ? isReadOnly : context.isReadOnly;
    const containerRef = useRef(null);

    return (
        <Typography
            ref={containerRef}
            className={clsx('moonstone-radio-container flexCol', className)}
            aria-readonly={isReadOnlyItem}
            aria-disabled={isDisabledItem}
            variant="body"
            weight="default"
            component="label"
            {... onArrowNavigation(containerRef)}
        >
            <div className={clsx('flexRow alignCenter')}>
                <div className={clsx('moonstone-radio')}>
                    <input
                        {...props}
                        className={clsx('moonstone-radio_input')}
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
                    <RadioChecked className={clsx('moonstone-radio_icon moonstone-radio_iconChecked')}/>
                    <RadioUnchecked className={clsx('moonstone-radio_icon moonstone-radio_iconUnchecked')}/>
                </div>
                <Typography id={`${id}-label`} variant="body" weight="default" component="span" className={clsx('moonstone-radio-label')}>{label}</Typography>
            </div>
            {description && (
                <Typography id={`${id}-description`} variant="caption" weight="default" component="span" className={clsx('moonstone-radio-description flexRow')}>{description}</Typography>
            )}
        </Typography>
    );
};

RadioItem.displayName = 'RadioItem';
