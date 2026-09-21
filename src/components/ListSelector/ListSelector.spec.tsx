import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ListSelector } from './index';

const requiredProps = {
    label: {
        selected: '0 item selected',
    },
    onChange: () => ({}),
};

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

    it('should display options in left list', () => {
        const { container } = render(
            <ListSelector {...requiredProps} options={options}/>,
        );
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length,
        );
    });

    it('should display selection in right list', () => {
        const selection = ['1', '3'];
        const { container } = render(
            <ListSelector
                {...requiredProps}
                options={options}
                values={selection}
            />,
        );
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length - selection.length,
        );
        expect(
            container.querySelectorAll('li[role="right-list"]'),
        ).toHaveLength(selection.length);
    });

    it('should display in readonly mode', () => {
        const selection = ['1', '3'];
        const { container } = render(
            <ListSelector
                {...requiredProps}
                isReadOnly
                options={options}
                values={selection}
            />,
        );
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length - selection.length,
        );
        expect(
            container.querySelectorAll('li[role="right-list"]'),
        ).toHaveLength(selection.length);

        expect(
            container.querySelector('button[role="add-all"]'),
        ).toBeDisabled();
        expect(
            container.querySelector('button[role="remove-all"]'),
        ).toBeDisabled();

        container.querySelectorAll('li[role="left-list"]').forEach((el) => {
            expect(el.querySelectorAll('svg')).toHaveLength(0);
        });

        container.querySelectorAll('li[role="right-list"]').forEach((el) => {
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
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length,
        );

        const search = container.querySelector('input[role="searchbox"]');

        await user.type(search, 'On');

        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            1,
        );
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

const kbOptions = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
];

const renderSelector = (props = {}) => {
    const onChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <ListSelector
                label={{ leftListTitle: 'Available', rightListTitle: 'Selected', addAllTitle: 'Add all', removeAllTitle: 'Remove all', selected: '2 items selected' }}
                options={kbOptions}
                values={['1', '3']}
                onChange={onChange}
                {...props}
            />
        </>,
    );
    return { onChange };
};

const option = (label: string) => screen.getByText(label).closest('li');

describe('ListSelector keyboard', () => {
    it('reaches the search field of the left list with Tab', async () => {
        renderSelector();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getAllByRole('searchbox')[0]).toHaveFocus();
    });

    it.fails('reaches the options of the left list with Tab', async () => {
        renderSelector();
        screen.getAllByRole('searchbox')[0].focus();
        await userEvent.keyboard('{Tab}');
        expect(option('Two')).toHaveFocus();
    });

    it('adds the focused left option with Enter', async () => {
        const { onChange } = renderSelector();
        option('Two').focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(['1', '3', '2']);
    });

    it('adds the focused left option with Space', async () => {
        const { onChange } = renderSelector();
        option('Four').focus();
        await userEvent.keyboard(' ');
        expect(onChange).toHaveBeenCalledWith(['1', '3', '4']);
    });

    it.fails('reaches the options of the right list with Tab', async () => {
        renderSelector();
        screen.getAllByRole('searchbox')[1].focus();
        await userEvent.keyboard('{Tab}');
        expect(option('One')).toHaveFocus();
    });

    it.fails('removes the focused right option with Enter', async () => {
        const { onChange } = renderSelector();
        option('One').focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(['3']);
    });

    it.fails('removes the focused right option with Space', async () => {
        const { onChange } = renderSelector();
        option('Three').focus();
        await userEvent.keyboard(' ');
        expect(onChange).toHaveBeenCalledWith(['1']);
    });

    it.fails('moves focus to the next option with ArrowDown', async () => {
        renderSelector();
        option('Two').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(option('Four')).toHaveFocus();
    });

    it.fails('moves focus to the previous option with ArrowUp', async () => {
        renderSelector();
        option('Four').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(option('Two')).toHaveFocus();
    });

    it('reaches the add-all and remove-all controls with Tab', async () => {
        renderSelector();
        option('Five').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByTitle('Add all')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByTitle('Remove all')).toHaveFocus();
    });

    it('adds all options with Enter on the add-all control', async () => {
        const { onChange } = renderSelector();
        screen.getByTitle('Add all').focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(['1', '3', '2', '4', '5']);
    });

    it('removes all options with Space on the remove-all control', async () => {
        const { onChange } = renderSelector();
        screen.getByTitle('Remove all').focus();
        await userEvent.keyboard(' ');
        expect(onChange).toHaveBeenCalledWith([]);
    });

    it('does not let the keyboard change a read-only selector', async () => {
        const { onChange } = renderSelector({ isReadOnly: true });
        screen.getAllByRole('searchbox')[0].focus();
        await userEvent.keyboard('{Tab}');
        expect(option('Two')).not.toHaveFocus();
        option('Two').focus();
        await userEvent.keyboard('{Enter} ');
        expect(onChange).not.toHaveBeenCalled();
    });
});
