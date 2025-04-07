import React from 'react';
import {render, screen} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import {RadioGroup} from './index';
import {RadioItem} from './RadioItem';

const requiredProps = {
    name: 'test-name'
};

describe('RadioGroup', () => {
    it('should render', () => {
        render(
            <RadioGroup {...requiredProps}>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(screen.getAllByRole('radio')).toHaveLength(2);
    });

    it('should display additional attributes', () => {
        render(
            <RadioGroup
                {...requiredProps}
                data-testid="moonstone-radioGroup"
            >
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(screen.getByTestId('moonstone-radioGroup')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const className = 'test-class';
        render(
            <RadioGroup
                {...requiredProps}
                data-testid="moonstone-radioGroup"
                className={className}
            >
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(screen.getByTestId('moonstone-radioGroup')).toHaveClass(
            className
        );
    });

    it('should not display the RadioGroup when children is empty', () => {
        render(
            <RadioGroup {...requiredProps} data-testid="moonstone-radioGroup">{[]}</RadioGroup>
        );
        expect(
            screen.queryByTestId('moonstone-radioGroup')
        ).not.toBeInTheDocument();
    });

    it('should not display the RadioGroup when children is only one element', () => {
        render(
            // @ts-expect-error testing with one element
            <RadioGroup {...requiredProps} data-testid="moonstone-radioGroup">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
            </RadioGroup>
        );
        expect(
            screen.queryByTestId('moonstone-radioGroup')
        ).not.toBeInTheDocument();
    });

    it('should set the first item as selected when no value or defaultValue is provided', () => {
        render(
            <RadioGroup {...requiredProps}>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(screen.getAllByRole('radio')[0]).toBeChecked();
        expect(screen.getAllByRole('radio')[1]).not.toBeChecked();
    });

    it('should be disabled', () => {
        render(
            <RadioGroup {...requiredProps} isDisabled>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(screen.getByLabelText('radio 01')).toBeDisabled();
        expect(screen.getByLabelText('radio 02')).toBeDisabled();
    });

    it('should be read-only', () => {
        render(
            <RadioGroup {...requiredProps} isReadOnly>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(screen.getByLabelText('radio 01')).toHaveAttribute(
            'aria-readonly',
            'true'
        );
        expect(screen.getByLabelText('radio 02')).toHaveAttribute(
            'aria-readonly',
            'true'
        );
    });
});

describe('UnControlledRadioGroup', () => {
    it('should have specified defaultValue', () => {
        render(
            <RadioGroup {...requiredProps} defaultValue="02">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );

        expect(screen.getByLabelText('radio 01')).not.toBeChecked();
        expect(screen.getByLabelText('radio 02')).toBeChecked();
    });

    it('should update specified defaultValue', async () => {
        const user = userEvent.setup();

        render(
            <RadioGroup {...requiredProps} defaultValue="02">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        await user.click(screen.getByLabelText('radio 01'));

        expect(screen.getByLabelText('radio 01')).toBeChecked();
        expect(screen.getByLabelText('radio 02')).not.toBeChecked();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <RadioGroup
                {...requiredProps}
                defaultValue="02"
                onChange={handleChange}
            >
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        await user.click(screen.getByLabelText('radio 01'));

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledRadioGroup', () => {
    it('should display specified value', () => {
        render(
            <RadioGroup {...requiredProps} value="02">
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(screen.getByLabelText('radio 01')).not.toBeChecked();
        expect(screen.getByLabelText('radio 02')).toBeChecked();
    });

    it('should set the first item as selected when there is no value', () => {
        render(
            <RadioGroup {...requiredProps}>
                <RadioItem id="radio-01" label="radio 01" value="01"/>
                <RadioItem id="radio-02" label="radio 02" value="02"/>
            </RadioGroup>
        );
        expect(screen.getByLabelText('radio 01')).toBeChecked();
        expect(screen.getByLabelText('radio 02')).not.toBeChecked();
    });
});
