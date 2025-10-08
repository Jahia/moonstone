import React from 'react';

type onArrowIncrementationProps = {
    onKeyUp?: React.KeyboardEventHandler;
    ref: React.RefObject<HTMLInputElement>;
    step: number;
    allowNegative: boolean;
    separator?: '.' | ',',
    min?: number;
    max?: number;
};

export const onArrowIncrementation = ({
    ref,
    step,
    allowNegative,
    separator,
    min,
    max
} :
    onArrowIncrementationProps) => {
    const handleKeyUp = (e: React.KeyboardEvent) => {
        const element = ref?.current;

        if (!element) {
            return;
        }

        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            return;
        }

        // Keep digits after the separator
        const decimalsLeft = element.value.split(separator)[1] || null;
        // ParseFloat only works with '.' separator
        // Only keep the integer for incrementation to avoid floating point precsion
        let newValue = decimalsLeft ? parseFloat(element.value.replace(separator, '.').split('.')[0]) : parseFloat(element.value);
        const newStep = Number.isInteger(step) ? step : 1;

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
        const fixedValue = (decimalsLeft && decimalsLeft.length > 0) ? `${newValue}${separator}${decimalsLeft}` : newValue.toString();
        element.value = Number.isNaN(newValue) ? '' : fixedValue;
        // Update uncontrolled input's value in the DOM
        element.defaultValue = element.value;
    };

    return {
        onKeyUp: handleKeyUp
    };
};
