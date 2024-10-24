import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {SearchContextInput} from './index';
import {Dropdown} from '~/components';
import {dropdownData} from '~/data';

describe('SearchContextInput', () => {
    it('should render', () => {
        render(<SearchContextInput data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeInTheDocument();
    });

    it('should have the role search', () => {
        render(<SearchContextInput/>);
        expect(screen.getByRole('search')).toBeInTheDocument();
    });

    it('should always have big size', async () => {
        const user = userEvent.setup();

        render(<SearchContextInput data-testid="moonstone-input"/>);
        await user.type(screen.getByTestId('moonstone-input'), 'type a value');

        expect(screen.getByDisplayValue('type a value')).toBeInTheDocument();
    });

    it('should display search context', () => {
        render(
            <SearchContextInput searchContext={<Dropdown data={dropdownData} data-testid="test-searchContext"/>}/>
        );
        expect(screen.getByTestId('test-searchContext')).toBeInTheDocument();
    });
});

describe('UncontrolledSearchContextInput', () => {
    it('should reset field when we click on the reset button of the search input', async () => {
        const user = userEvent.setup();

        render(<SearchContextInput data-testid="moonstone-input" defaultValue="test-default-value"/>);
        await user.click(screen.getByLabelText('Reset'));

        expect(screen.getByTestId('moonstone-input')).toHaveValue('');
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();

        render(<SearchContextInput data-testid="moonstone-input" defaultValue="test-default-value" onChange={handleChange}/>);
        await user.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = jest.fn();

        render(<SearchContextInput defaultValue="test-default-value" onClear={handleClear}/>);
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledSearchContextInput', () => {
    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();

        render(<SearchContextInput data-testid="moonstone-input" value="test-value" onChange={handleChange}/>);
        await user.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = jest.fn();

        render(<SearchContextInput value="test-value" onChange={() => null} onClear={handleClear}/>);
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});
