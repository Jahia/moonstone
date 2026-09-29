import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Pagination } from './index';

const renderPagination = (props = {}) => {
    const onPageChange = vi.fn();
    const onItemsPerPageChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Pagination
                currentPage={2}
                itemsPerPage={10}
                itemsPerPageOptions={[5, 10, 25]}
                totalOfItems={100}
                onItemsPerPageChange={onItemsPerPageChange}
                onPageChange={onPageChange}
                {...props}
            />
        </>,
    );
    return { onPageChange, onItemsPerPageChange };
};

const control = (name: string) => screen.getByTestId(`pagination-button-${name}`);

describe('Pagination keyboard', () => {
    it('reaches the enabled controls in order with Tab', async () => {
        renderPagination();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(control('first-page')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(control('previous-page')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('listbox')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(control('next-page')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(control('last-page')).toHaveFocus();
    });

    it('does not let disabled controls take focus', async () => {
        renderPagination({ currentPage: 1 });
        expect(control('first-page')).toBeDisabled();
        control('first-page').focus();
        expect(control('first-page')).not.toHaveFocus();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('listbox')).toHaveFocus();
    });

    it('activates the page controls with Enter', async () => {
        const { onPageChange } = renderPagination();
        control('first-page').focus();
        await userEvent.keyboard('{Enter}');
        control('previous-page').focus();
        await userEvent.keyboard('{Enter}');
        control('next-page').focus();
        await userEvent.keyboard('{Enter}');
        control('last-page').focus();
        await userEvent.keyboard('{Enter}');
        expect(onPageChange.mock.calls).toEqual([[1], [1], [3], [10]]);
    });

    it('activates the page controls with Space', async () => {
        const { onPageChange } = renderPagination();
        control('previous-page').focus();
        await userEvent.keyboard(' ');
        control('next-page').focus();
        await userEvent.keyboard(' ');
        expect(onPageChange.mock.calls).toEqual([[1], [3]]);
    });

    it('opens the items-per-page selector with Enter', async () => {
        renderPagination();
        screen.getByRole('listbox').focus();
        await userEvent.keyboard('{Enter}');
        expect(await screen.findByRole('option', { name: '25' })).toBeVisible();
    });

    it.fails('moves focus into the options when the selector is opened with the keyboard', async () => {
        renderPagination();
        screen.getByRole('listbox').focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('option', { name: '25' });
        await userEvent.keyboard('{ArrowDown}');
        expect(document.activeElement).toHaveAttribute('role', 'option');
    });

    it('selects a focused option with Enter', async () => {
        const { onItemsPerPageChange } = renderPagination();
        screen.getByRole('listbox').focus();
        await userEvent.keyboard('{Enter}');
        const option = await screen.findByRole('option', { name: '25' });
        option.focus();
        await userEvent.keyboard('{Enter}');
        expect(onItemsPerPageChange).toHaveBeenCalledWith(25);
    });
});
