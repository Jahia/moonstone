import React from 'react';

import { shouldIgnoreKey } from './shouldIgnoreKey';

type onArrowIncrementationProps = {
    onKeyUp?: React.KeyboardEventHandler;
    ref: React.RefObject<HTMLInputElement>;
    step: number;
    allowNegative: boolean;
    separator?: '.' | ',';
    min?: number;
    max?: number;
};

// The prototype setter bypasses the value tracker of React, so the input event reaches onChange
const writeValue = (element: HTMLInputElement, value: string) => {
    if (element.value === value) {
        return;
    }

    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(element, value);
    // Update uncontrolled input's value in the DOM
    element.defaultValue = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
};

export const onArrowIncrementation = ({
    ref,
    step,
    allowNegative,
    separator,
    min,
    max,
}:
onArrowIncrementationProps) => {
    const handleKeyUp = (e: React.KeyboardEvent) => {
        const element = ref?.current;

        if (!element) {
            return;
        }

        // Without allowNegative, the field cannot go below 0 even when min is not set
        const lowest = Number.isFinite(min) || allowNegative ? min : 0;

        if (e.key === 'Home' || e.key === 'End') {
            const bound = e.key === 'Home' ? lowest : max;

            // Without that bound, or with a modifier (Shift+Home selects), Home and End keep editing the text box
            if (!Number.isFinite(bound) || shouldIgnoreKey(e) || element.readOnly) {
                return;
            }

            e.preventDefault();
            writeValue(element, bound.toString().replace('.', separator ?? '.'));
            return;
        }

        if ((e.key !== 'ArrowUp' && e.key !== 'ArrowDown') || element.readOnly) {
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
            if (Number.isFinite(lowest)) {
                if (newValue - newStep > lowest) {
                    newValue -= newStep;
                } else {
                    newValue = lowest;
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
        writeValue(element, Number.isNaN(newValue) ? '' : fixedValue);
    };

    return {
        onKeyUp: handleKeyUp,
    };
};
