import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Input} from './index';
import {Dropdown} from '~/components';
import {Love} from '~/icons';
import {dropdownData} from '~/data';

describe('Input', () => {
    it('should render', () => {
        render(<Input data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const {container} = render(<Input className="test-class"/>);
        expect(container.querySelector('.test-class')).toBeInTheDocument();
    });

    it('should display additional attributes', () => {
        const {container} = render(<Input data-test="test"/>);
        expect(container.querySelector('[data-test="test"]')).toBeInTheDocument();
    });

    it('should have specified id', () => {
        const {container} = render(<Input id="test-id"/>);
        expect(container.querySelector('#test-id')).toBeInTheDocument();
    });

    it('should have specified placeholder', () => {
        render(<Input placeholder="test-placeholder"/>);
        expect(screen.getByPlaceholderText('test-placeholder')).toBeInTheDocument();
    });

    it('should display size class for big input', () => {
        const {container} = render(<Input size="big"/>);
        expect(container.querySelector('.moonstone-size_big')).toBeInTheDocument();
    });

    it('should be disabled', () => {
        render(<Input isDisabled data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeDisabled();
    });

    it('should be read only', () => {
        render(<Input isReadOnly data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toHaveAttribute('readonly');
    });

    it('should display the specified icon', () => {
        render(<Input icon={<Love data-testid="test-icon"/>}/>);
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('should display the search variant', () => {
        render(<Input variant="search"/>);
        expect(screen.getByRole('search')).toBeInTheDocument();
    });

    it('should work when no value or defaultValue is specified', () => {
        render(<Input data-testid="moonstone-input"/>);
        userEvent.type(screen.getByTestId('moonstone-input'), 'type a value');
        expect(screen.getByDisplayValue('type a value')).toBeInTheDocument();
    });

    it('should display contextSearch when it is provided', () => {
        render(
            <Input variant="search"
                   searchContext={<Dropdown data={dropdownData} data-testid="moonstone-search-context"/>}
            />
        );
        expect(screen.getByTestId('moonstone-search-context')).toBeInTheDocument();
    });
});

describe('UncontrolledInput', () => {
    it('should have specified defaultValue', () => {
        render(<Input defaultValue="test-default-value"/>);
        expect(screen.getByDisplayValue('test-default-value')).toBeInTheDocument();
    });

    it('should update specified defaultValue', () => {
        render(<Input data-testid="moonstone-input" defaultValue="test-default-value"/>);
        userEvent.type(screen.getByTestId('moonstone-input'), '-updated');
        expect(screen.getByDisplayValue('test-default-value-updated')).toBeInTheDocument();
    });

    it('should reset field when we click on the reset button of the search input', () => {
        render(<Input data-testid="moonstone-input" defaultValue="test-default-value" variant="search"/>);
        userEvent.click(screen.getByLabelText('Reset'));
        expect(screen.getByTestId('moonstone-input')).toHaveValue('');
    });

    it('should call specified onChange function', () => {
        const handleChange = jest.fn();

        render(<Input data-testid="moonstone-input" defaultValue="test-default-value" onChange={handleChange}/>);
        userEvent.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', () => {
        const handleClear = jest.fn();

        render(<Input variant="search" defaultValue="test-default-value" onClear={handleClear}/>);
        userEvent.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledInput', () => {
    it('should display specified value', () => {
        render(<Input value="test-value" onChange={() => {}}/>);
        expect(screen.getByDisplayValue('test-value')).toBeInTheDocument();
    });

    it('should call specified onChange function', () => {
        const handleChange = jest.fn();

        render(<Input data-testid="moonstone-input" value="test-value" onChange={handleChange}/>);
        userEvent.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', () => {
        const handleClear = jest.fn();

        render(<Input variant="search" value="test-value" onChange={() => {}} onClear={handleClear}/>);
        userEvent.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});
