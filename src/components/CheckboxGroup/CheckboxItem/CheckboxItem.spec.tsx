import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {CheckboxItem} from './index';

const initProps = {
    id: 'test',
    label: 'Checkbox\'s label',
    value: 'test'
};

describe('CheckboxItem', () => {
    it('should display additional class names', () => {
        const className = 'test';
        const {container} = render(
            <CheckboxItem {...initProps} className={className}/>
        );
        expect(container.querySelector('.test')).toBeInTheDocument();
    });

    it('should be disabled when isDisabled is set', () => {
        render(
            <CheckboxItem {...initProps} isDisabled data-testid="moonstone-checkboxItem"/>
        );
        expect(screen.getByTestId('moonstone-checkboxItem')).toBeDisabled();
    });

    it('should be read-only when isReadOnly is set', () => {
        render(
            <CheckboxItem {...initProps} isReadOnly data-testid="moonstone-checkboxItem"/>
        );
        expect(screen.getByTestId('moonstone-checkboxItem')).toHaveAttribute('aria-readonly', 'true');
    });

    it('should display the description', () => {
        render(
            <CheckboxItem {...initProps} description="test description"/>
        );
        expect(screen.getByText('test description')).toBeInTheDocument();
    });

    it('should call onChange function', () => {
        const handleOnChange = jest.fn();
        render(
            <CheckboxItem {...initProps} data-testid="moonstone-checkboxItem" onChange={() => handleOnChange()}/>
        );
        const checkbox = screen.getByTestId('moonstone-checkboxItem');

        userEvent.click(checkbox);
        expect(handleOnChange).toHaveBeenCalled();
    });
});

describe('UncontrolledCheckboxItem', () => {
    it('should initially be checked on when the defaultChecked prop is set', () => {
        render(<CheckboxItem {...initProps} defaultChecked/>);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });
});

describe('ControlledCheckboxItem', () => {
    it('should initially be checked on when the checked prop is set', () => {
        render(<CheckboxItem {...initProps} checked/>);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });
});
