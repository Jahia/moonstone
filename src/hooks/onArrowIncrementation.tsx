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
        const element = ref.current;
        console.log(element);
        let newValue = parseFloat(element.value);

        if (!element) {
            return;
        }

        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            return;
        }

        if (e.key === 'ArrowDown' && (newValue > 0 || allowNegative)) {
            e.preventDefault();
            if (min) {
                if (newValue - step > min) {
                    newValue -= step;
                } else {
                    newValue = min;
                }
            } else {
                newValue -= step;
            }
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (max) {
                if (newValue + step < max) {
                    newValue += step;
                } else {
                    newValue = max;
                }
            } else {
                newValue += step;
            }
        }

        console.log('hook got value: ' + newValue);
        element.value = Number.isNaN(newValue) ? '' : newValue.toString();
        const mockEvent = {
            target: element,
            currentTarget: element
        } as React.ChangeEvent<HTMLInputElement>;

        onChange(mockEvent);
    };

    return {
        onKeyUp: handleKeyUp,
        onChange: onChange
    };
};
