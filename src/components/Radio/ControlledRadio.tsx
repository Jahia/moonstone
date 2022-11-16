import React from 'react';
import clsx from 'clsx';
import {RadioProps} from './Radio.types';
import './Radio.scss';
import {RadioChecked, RadioUnchecked} from '~/icons';
import {Typography} from '~/components';

export const ControlledRadio: React.FC<RadioProps> = ({className, checked = false, id, value, label, description, isDisabled, isReadOnly, ...props}) => {
    return (
        <Typography className={clsx('moonstone-radio-container flexCol', className)} aria-readonly={isReadOnly} aria-disabled={isDisabled} variant="body" weight="default" component="label">
            <div className={clsx('flexRow alignCenter')}>
                <div className={clsx('moonstone-radio')}>
                    <input
                        {...props}
                        className={clsx('moonstone-radio_input')}
                        type="radio"
                        checked={checked}
                        disabled={isDisabled}
                        aria-readonly={isReadOnly}
                        id={id}
                        value={value}
                        aria-labelledby={`${id}-label`}
                        aria-describedby={`${id}-description`}
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

ControlledRadio.displayName = 'ControlledRadio';
