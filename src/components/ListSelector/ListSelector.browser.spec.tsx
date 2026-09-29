import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { ListSelector } from './index';

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
    it.fails('exposes each entry as an option', () => {
        renderSelector();
        expect(screen.getByRole('option', { name: 'Two' })).toBeVisible();
    });

    it('reaches the search field of the left list with Tab', async () => {
        renderSelector();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getAllByRole('searchbox')[0]).toHaveFocus());
    });

    it.fails('reaches the options of the left list with Tab', async () => {
        renderSelector();
        screen.getAllByRole('searchbox')[0].focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(option('Two')).toHaveFocus());
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
        await waitFor(() => expect(option('One')).toHaveFocus());
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
        await waitFor(() => expect(option('Four')).toHaveFocus());
    });

    it.fails('moves focus to the previous option with ArrowUp', async () => {
        renderSelector();
        option('Four').focus();
        await userEvent.keyboard('{ArrowUp}');
        await waitFor(() => expect(option('Two')).toHaveFocus());
    });

    it('reaches the add-all and remove-all controls with Tab', async () => {
        renderSelector();
        option('Five').focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getByTitle('Add all')).toHaveFocus());
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getByTitle('Remove all')).toHaveFocus());
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
        await userEvent.keyboard('{Enter}');
        await userEvent.keyboard(' ');
        expect(onChange).not.toHaveBeenCalled();
    });
});
