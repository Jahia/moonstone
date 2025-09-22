import React from 'react';

type onArrowIncrementationProps = {
    onKeyUp?: React.KeyboardEventHandler;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ref: React.RefObject<HTMLInputElement>;
    step: number;
    allowNegative: boolean;
    min?: number;
    max?: number;
};

export const onArrowIncrementation = ({
    onChange,
    ref,
    step,
    allowNegative,
    min,
    max
} :
    onArrowIncrementationProps) => {
    const handleKeyUp = (e: React.KeyboardEvent) => {
        const element = ref?.current;

        if (!element) {
            return;
        }

        // Counts how many digits after the separator
        const getDecimalPlaces = (num: number) => {
            const str = num.toString();
            return str.includes('.') || str.includes(',') ?
                str.split(/[.,]/)[1]?.length || 0 : 0;
        };

        // ParseFloat only works with '.' separator
        const hasComma = element.value.includes(',');
        // Only keep the integer for incrementation to avoid floating point precsion
        let newValue = parseFloat(element.value.replace(',', '.').split('.')[0]) || parseFloat(element.value);
        const decimalPlaces = getDecimalPlaces(newValue);
        const newStep = Number.isInteger(step) ? step : 1;

        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            return;
        }

        if (e.key === 'ArrowDown' && (newValue > 0 || allowNegative)) {
            e.preventDefault();
            if (min) {
                if (newValue - newStep > min) {
                    newValue -= newStep;
                } else {
                    newValue = min;
                }
            } else {
                newValue -= newStep;
            }
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (max) {
                if (newValue + newStep < max) {
                    newValue += newStep;
                } else {
                    newValue = max;
                }
            } else {
                newValue += newStep;
            }
        }

        // Trim final value to have same number of digits after separator as initial value
        const fixedValue = decimalPlaces >= 0 ? hasComma ? newValue.toFixed(decimalPlaces).replace('.', ',') : newValue.toFixed(decimalPlaces) : newValue.toString();
        element.value = Number.isNaN(newValue) ? '' : fixedValue ? fixedValue : newValue.toString();
        // Update uncontrolled input
        element.defaultValue = element.value;

        if (typeof onChange !== 'undefined') {
            const mockEvent = {
                target: element,
                currentTarget: element
            } as React.ChangeEvent<HTMLInputElement>;

            onChange(mockEvent);
        }
    };

    return {
        onKeyUp: handleKeyUp,
        onChange: onChange
    };
};
