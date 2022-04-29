import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Dropdown} from './index';

const data = [
    {
        label: 'option 1',
        value: '1'
    },
    {
        label: 'option 2',
        value: '2'
    },
    {
        label: 'option 3',
        value: '3',
        isDisabled: true
    }
];

const dataGrouped = [
    {
        groupLabel: 'test',
        options: [
            {
                label: 'option 1',
                value: '1'
            },
            {
                label: 'option 2',
                value: '2'
            }
        ]
    },
    {
        groupLabel: 'test 2',
        options: [
            {
                label: 'option 3',
                value: '3'
            },
            {
                label: 'option 4',
                value: '4'
            }

        ]
    }
];

describe('Dropdown', () => {
    it('should display', () => {
        render(<Dropdown data={data} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.getByTestId('moonstone-dropdown')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(
            <Dropdown className={testClassName} data={data} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveClass(testClassName);
    });

    it('should add additional attributes', () => {
        render(
            <Dropdown data-custom="test" data={data} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveAttribute('data-custom', 'test');
    });

    it('should add dropdown-disabled class if the dropdown is disabled', () => {
        render(
            <Dropdown isDisabled data={data} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );
        expect(screen.getByTestId('moonstone-dropdown').firstChild).toHaveClass('moonstone-disabled');
    });

    it('should not display the menu dropdown by default', () => {
        render(
            <Dropdown data={dataGrouped} onChange={() => 'testing'}/>
        );
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should display the menu dropdown when I click on the dropdown', () => {
        render(
            <Dropdown data={dataGrouped} onChange={() => 'testing'}/>
        );

        userEvent.click(screen.getByRole('dropdown'));
        expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should close the menu dropdown when I click on an option', () => {
        render(<Dropdown data={dataGrouped} onChange={() => 'testing'}/>);

        userEvent.click(screen.getByRole('dropdown'));
        userEvent.click(screen.getAllByRole('option')[1]);

        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should display nothing if data is not an array', () => {
        render(<Dropdown data="not an array" data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.queryByTestId('moonstone-dropdown')).not.toBeInTheDocument();
    });

    it('should show the correct search results', () => {
        render(<Dropdown hasSearch data={data} onChange={() => 'testing'}/>);

        userEvent.click(screen.getByRole('dropdown'));
        userEvent.type(screen.getByRole('search'), 'option 2');

        expect(screen.queryByText(/option 1/i)).not.toBeInTheDocument();
        expect(screen.getByText(/option 2/i)).toBeInTheDocument();
        expect(screen.queryByText(/option 3/i)).not.toBeInTheDocument();
    });

    it('should display the group title of the matched option label', () => {
        render(<Dropdown hasSearch data={dataGrouped} onChange={() => 'testing'}/>);

        userEvent.click(screen.getByRole('dropdown'));
        userEvent.type(screen.getByRole('search'), 'option 2');

        expect(screen.getByText(/test/i)).toBeInTheDocument();
        expect(screen.getByText(/option 2/i)).toBeInTheDocument();
        expect(screen.queryByText(/option 3/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/test 2/i)).not.toBeInTheDocument();
    });

    it('should focus the first option when Tab is pressed', () => {
        render(<Dropdown data={dataGrouped} onChange={() => 'testing'}/>);

        userEvent.click(screen.getByRole('dropdown'));
        userEvent.tab();

        expect(screen.getAllByRole('option')[0]).toHaveFocus();
    });

    it('should show the empty search text if there are no search results', () => {
        const searchEmptyText = 'No search results';
        render(<Dropdown hasSearch searchEmptyText={searchEmptyText} data={data} onChange={() => 'testing'}/>);

        userEvent.click(screen.getByRole('dropdown'));
        userEvent.type(screen.getByRole('search'), 'random search text');

        expect(screen.getByText(searchEmptyText)).toBeInTheDocument();
    });

    it('should add "dropdown-disabled" class if data is empty', () => {
        render(<Dropdown data={[]} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.queryByTestId('moonstone-dropdown').firstChild).toHaveClass('moonstone-disabled');
    });

    it('should not add "dropdown-disabled" class if data is empty when "isDisabled=false" ', () => {
        render(<Dropdown data={[]} isDisabled={false} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>);
        expect(screen.queryByTestId('moonstone-dropdown').firstChild).not.toHaveClass('moonstone-disabled');
    });

    it('should reset search input when reset button is clicked" ', () => {
        render(<Dropdown hasSearch data={data} onChange={() => 'testing'}/>);

        // Open the dropdown and search something
        userEvent.click(screen.getByRole('dropdown'));
        userEvent.type(screen.getByRole('search'), 'option');
        expect(screen.getByRole('search')).toHaveValue('option');

        // Reset the search
        userEvent.click(screen.getByLabelText('Reset'));
        expect(screen.getByRole('search')).toHaveValue('');
    });
});
