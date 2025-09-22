import React from 'react';

type onArrowIncrementationProps = {
    onKeyUp?: React.KeyboardEventHandler;
    ref: React.RefObject<HTMLInputElement>;
    step: number;
    allowNegative: boolean;
    min?: number;
    max?: number;
};

export const onArrowIncrementation = ({
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
        const getDecimalPlaces = (str: string) => {
            return str.includes('.') || str.includes(',') ?
                str.split(/[.,]/)[1]?.length || 0 : 0;
        };

        // ParseFloat only works with '.' separator
        const hasComma = element.value.includes(',');
        const decimalPlaces = getDecimalPlaces(element.value);
        // Only keep the integer for incrementation to avoid floating point precsion
        let newValue = parseFloat(element.value.replace(',', '.').split('.')[0]) || parseFloat(element.value);
        const decimalsLeft = decimalPlaces > 0 && element.value.replace(',', '.').split('.')[1];
        const newStep = Number.isInteger(step) ? step : 1;

        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            return;
        }

        if (e.key === 'ArrowDown' && (newValue > 0 || allowNegative)) {
            e.preventDefault();
            if (Number.isFinite(min)) {
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
            if (Number.isFinite(max)) {
                if (newValue + newStep < max) {
                    newValue += newStep;
                } else {
                    newValue = max;
                }
            } else {
                newValue += newStep;
            }
        }

        // Trim final value to have same digits after separator as initial value
        const fixedValue = decimalPlaces > 0 ? hasComma ? `${newValue},${decimalsLeft}` : `${newValue}.${decimalsLeft}` : newValue.toString();
        element.value = Number.isNaN(newValue) ? '' : fixedValue;
        // Update uncontrolled input
        element.defaultValue = element.value;
    };

    return {
        onKeyUp: handleKeyUp
    };
};
