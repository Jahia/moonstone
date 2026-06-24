import React, {useState} from 'react';
import clsx from 'clsx';
import {Dropdown} from '~/components';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Clock} from '~/icons';
import {layout} from '~/globals/css-utils';
import {BaseInput} from '../BaseInput';
import {toPlainTime} from '../utils/temporal';
import {completeTimeInput, filterTimeInputValue, getTimeDisplayParts} from './timeHelpers';
import type {ControlledTimeInputProps, Meridiem} from './TimeInput.types';
import styles from './TimeInput.module.scss';

export const ControlledTimeInput = React.forwardRef<HTMLInputElement, ControlledTimeInputProps>(({
    value,
    onChange,
    timeFormat = '24h',
    placeholder = 'HH:MM',
    meridiemDropdownProps,
    size,
    variant,
    className,
    isDisabled,
    isReadOnly,
    ...props
}, ref) => {
    const committed = toPlainTime(value);
    const {hours, minutes, meridiem} = getTimeDisplayParts(committed, timeFormat);
    const committedText = hours && minutes ? `${hours}:${minutes}` : '';

    // `draft` holds the raw text while editing; `null` means "show the committed value".
    // The entry commits on blur (completed to a valid time), so partial input never emits
    // and the field otherwise always reflects the value we store.
    const [draft, setDraft] = useState<string | null>(null);
    const displayValue = draft ?? committedText;

    const commit = (event: React.SyntheticEvent, text: string, selectedMeridiem: Meridiem) => {
        setDraft(null);
        onChange(event, completeTimeInput(text, timeFormat, selectedMeridiem));
    };

    return (
        <div className={clsx(styles.timeInput, layout.flexRow_nowrap, layout.alignCenter, className)}>
            <BaseInput
                ref={ref}
                {...props}
                value={displayValue}
                className={timeFormat === '12h' ? styles.field_12h : undefined}
                size={size}
                variant={variant}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isReadOnly={isReadOnly}
                autoComplete="off"
                icon={<Clock aria-hidden size={size === 'big' ? 'big' : 'default'}/>}
                inputMode="numeric"
                onChange={event => setDraft(filterTimeInputValue(event.target.value, timeFormat))}
                onBlur={event => {
                    if (draft !== null) {
                        commit(event, draft, meridiem);
                    }
                }}
            />
            {timeFormat === '12h' && (
                <Dropdown
                    {...meridiemDropdownProps}
                    data={[{label: 'AM', value: 'AM'}, {label: 'PM', value: 'PM'}]}
                    value={meridiem}
                    size={size === 'big' ? 'medium' : 'small'}
                    variant={variant}
                    isDisabled={isDisabled || isReadOnly}
                    onChange={(event: React.SyntheticEvent, item?: DropdownDataOption) => {
                        if (item?.value === 'AM' || item?.value === 'PM') {
                            commit(event, displayValue, item.value);
                        }
                    }}
                />
            )}
        </div>
    );
});

ControlledTimeInput.displayName = 'ControlledTimeInput';
