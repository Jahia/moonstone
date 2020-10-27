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

    it('should display the correct search results', () => {
        render(
            <Dropdown hasSearch data={dataGrouped} data-testid="moonstone-dropdown" onChange={() => 'testing'}/>
        );
        userEvent.type(screen.getByRole('textbox'), 'option 4');

        expect(screen.queryByText('option 1')).not.toBeInTheDocument();
        expect(screen.queryByText('option 2')).not.toBeInTheDocument();
        expect(screen.queryByText('option 3')).not.toBeInTheDocument();
        expect(screen.getByText('option 4')).toBeInTheDocument();
    });
});
