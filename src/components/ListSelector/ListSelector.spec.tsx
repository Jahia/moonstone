import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ListSelector } from './index';

const requiredProps = {
    label: {
        leftListTitle: 'Available',
        rightListTitle: 'Selected',
        selected: '0 item selected',
    },
    onChange: () => ({}),
};

const leftItems = () => within(screen.getByRole('list', { name: 'Available' })).queryAllByRole('listitem');
const rightItems = () => within(screen.getByRole('list', { name: 'Selected' })).queryAllByRole('listitem');

const options = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
];

describe('MultipleLeftRightSelector', () => {
    it('should display empty list', () => {
        const { container } = render(<ListSelector {...requiredProps}/>);
        expect(container.querySelectorAll('li')).toHaveLength(0);
    });

    it('should mark each list with its side', () => {
        render(<ListSelector {...requiredProps}/>);
        expect(screen.getByRole('list', { name: 'Available' })).toHaveAttribute('data-list', 'left');
        expect(screen.getByRole('list', { name: 'Selected' })).toHaveAttribute('data-list', 'right');
    });

    it('should display options in left list', () => {
        render(
            <ListSelector {...requiredProps} options={options}/>,
        );
        expect(leftItems()).toHaveLength(options.length);
    });

    it('should display selection in right list', () => {
        const selection = ['1', '3'];
        render(
            <ListSelector
                {...requiredProps}
                options={options}
                values={selection}
            />,
        );
        expect(leftItems()).toHaveLength(options.length - selection.length);
        expect(rightItems()).toHaveLength(selection.length);
    });

    it('should display in readonly mode', () => {
        const selection = ['1', '3'];
        render(
            <ListSelector
                {...requiredProps}
                isReadOnly
                options={options}
                values={selection}
            />,
        );
        expect(leftItems()).toHaveLength(options.length - selection.length);
        expect(rightItems()).toHaveLength(selection.length);

        expect(screen.getByRole('button', { name: 'Add all' })).toBeDisabled();
        expect(screen.getByRole('button', { name: 'Remove all' })).toBeDisabled();

        leftItems().forEach((el) => {
            expect(el.querySelectorAll('svg')).toHaveLength(0);
        });

        rightItems().forEach((el) => {
            expect(el.querySelectorAll('svg')).toHaveLength(0);
        });
    });

    it('should pass all items when addAll button clicked', async () => {
        const mockOnChange = vi.fn();
        const user = userEvent.setup();
        const selection = ['1', '3'];
        const { container } = render(
            <ListSelector
                {...requiredProps}
                options={options}
                values={selection}
                onChange={mockOnChange}
            />,
        );

        const button = container.querySelector('button[title="Add all"]');

        await user.click(button);

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange.mock.calls[0][0]).toHaveLength(3);
        expect(mockOnChange.mock.calls[0][0]).toContain('3');
    });

    it('should filter items', async () => {
        const mockOnChange = vi.fn();
        const user = userEvent.setup();
        const { container } = render(
            <ListSelector {...requiredProps} options={options} onChange={mockOnChange}/>,
        );
        expect(leftItems()).toHaveLength(options.length);

        const search = container.querySelector('input[role="searchbox"]');

        await user.type(search, 'On');

        expect(leftItems()).toHaveLength(1);
    });

    it('should display label for the list on the right', () => {
        render(
            <ListSelector
                label={{ ...requiredProps.label, rightListTitle: 'test right' }}
                options={options}
                onChange={requiredProps.onChange}
            />,
        );

        expect(screen.getByText('test right')).toBeInTheDocument();
    });

    it('should display label for the list on the left', () => {
        render(
            <ListSelector
                label={{ ...requiredProps.label, leftListTitle: 'test left' }}
                options={options}
                onChange={requiredProps.onChange}
            />,
        );

        expect(screen.getByText('test left')).toBeInTheDocument();
    });
});
