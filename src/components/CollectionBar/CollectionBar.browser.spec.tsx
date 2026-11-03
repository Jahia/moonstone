import { render, screen, waitFor, within } from '@testing-library/react';
import { useState } from 'react';
import { userEvent } from 'vitest/browser';

import { CollectionBar } from './index';
import { collectionBarColumns, useCollectionBarFilters } from '~/data/collectionBar';

type BarProps = {
    initialValues?: Record<string, string>;
};

const Bar = ({ initialValues }: BarProps) => {
    const { filters } = useCollectionBarFilters({ initialValues });
    const [visibleColumns, setVisibleColumns] = useState(['date', 'user', 'action', 'path']);
    return (
        <>
            <button type="button">before</button>
            <CollectionBar
                columns={collectionBarColumns}
                filters={filters}
                visibleColumns={visibleColumns}
                onVisibleColumnsChange={setVisibleColumns}
            />
            <button type="button">after</button>
        </>
    );
};

const button = (name: string) => screen.getByRole('button', { name });

describe('CollectionBar keyboard', () => {
    it('is one Tab stop, on its first control', async () => {
        render(<Bar/>);
        button('before').focus();
        await userEvent.keyboard('{Tab}');
        expect(button('Date')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(button('after')).toHaveFocus();
    });

    it('moves between its controls with the arrow keys, Home and End', async () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        button('Date: Today').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(button('Clear the Date filter')).toHaveFocus();
        await userEvent.keyboard('{ArrowRight}');
        expect(button('Add filter')).toHaveFocus();
        await userEvent.keyboard('{End}');
        expect(button('Choose the columns')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(button('Date: Today')).toHaveFocus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(button('Choose the columns')).toHaveFocus();
    });

    it('skips a disabled Add filter', async () => {
        render(<Bar initialValues={{ user: 'root', action: 'Published' }}/>);
        button('Clear the Action filter').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(button('Choose the columns')).toHaveFocus();
    });

    it('opens the selector with Enter and moves the focus into it', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
    });

    it('closes the selector with Escape and gives the focus back to the chip (case 9)', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        await waitFor(() => expect(button('Date')).toHaveFocus());
    });

    it('gives the focus back to the chip that took a value', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
        await userEvent.keyboard('Today{Escape}');
        await waitFor(() => expect(button('Date: Today')).toHaveFocus());
    });

    it('adds a filter from the keyboard and moves the focus into its selector', async () => {
        render(<Bar/>);
        button('Add filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByText('User').closest('li')).toHaveFocus());
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'User' })).toHaveFocus());
        expect(screen.getByRole('dialog', { name: 'User' })).toBeVisible();
    });

    it('gives the focus to Add filter when an added chip with no value leaves the bar', async () => {
        render(<Bar/>);
        button('Add filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByText('User').closest('li')).toHaveFocus());
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'User' })).toHaveFocus());
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('button', { name: 'User' })).not.toBeInTheDocument();
        await waitFor(() => expect(button('Add filter')).toHaveFocus());
    });

    it('closes the Add filter menu with Escape and gives the focus back to Add filter', async () => {
        render(<Bar/>);
        button('Add filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByText('User').closest('li')).toHaveFocus());
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(button('Add filter')).toHaveFocus());
        expect(button('Add filter')).toHaveAttribute('aria-expanded', 'false');
    });

    it('clears a value with the keyboard and gives the focus back to the chip', async () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        button('Clear the Date filter').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(button('Date')).toHaveFocus());
    });

    it('shows the full value of a chip in a tooltip on focus', async () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        button('before').focus();
        await userEvent.keyboard('{Tab}');
        expect(button('Date: Today')).toHaveFocus();
        await waitFor(() => expect(screen.getByRole('tooltip')).toHaveTextContent('Date: Today'));
    });

    it('toggles a column with Space and keeps the column menu open', async () => {
        render(<Bar/>);
        button('Choose the columns').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('searchbox', { name: 'Search' })).toHaveFocus());
        await userEvent.keyboard('{Tab}');
        const menu = screen.getByRole('searchbox').closest('menu');
        within(menu).getByRole('menuitemcheckbox', { name: 'Details' }).focus();
        await userEvent.keyboard(' ');
        expect(within(menu).getByRole('menuitemcheckbox', { name: 'Details' })).toHaveAttribute('aria-checked', 'true');
        expect(menu).toBeVisible();
    });
    it('keeps Tab and Shift+Tab in the open selector', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus());
        await userEvent.keyboard('{Tab}');
        expect(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('textbox', { name: 'Date' })).toHaveFocus();
        await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
        expect(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' })).toHaveFocus();
    });

    it('keeps the focus on a visible column that moves to the hidden columns', async () => {
        render(<Bar/>);
        button('Choose the columns').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.getByRole('searchbox', { name: 'Search' })).toHaveFocus());
        const user = screen.getByRole('menuitemcheckbox', { name: 'User' });
        user.focus();
        await userEvent.keyboard(' ');
        await waitFor(() => expect(screen.getByRole('menuitemcheckbox', { name: 'User' })).toHaveFocus());
        expect(screen.getByRole('menuitemcheckbox', { name: 'User' })).toHaveAttribute('aria-checked', 'false');
    });

    it('shows the name of the clear button in a tooltip on focus', async () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        button('Date: Today').focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(button('Clear the Date filter')).toHaveFocus();
        await waitFor(() => expect(screen.getByRole('tooltip')).toHaveTextContent('Clear the Date filter'));
    });

    it('insets the title of the selector as a Menu title', async () => {
        render(<Bar/>);
        button('Date').focus();
        await userEvent.keyboard('{Enter}');
        const dialog = await screen.findByRole('dialog', { name: 'Date' });
        const title = document.getElementById(dialog.getAttribute('aria-labelledby'));
        expect(title.getBoundingClientRect().left - dialog.getBoundingClientRect().left).toBe(16);
        expect(title.getBoundingClientRect().top - dialog.getBoundingClientRect().top).toBe(4);
    });

    it('gives the focus back to the chip when the function form calls close with an argument', async () => {
        render(
            <CollectionBar
                filters={[{
                    key: 'user',
                    label: 'User',
                    isDisplayedByDefault: true,
                    selector: ({ close }) => <button type="button" onClick={() => (close as (arg: unknown) => void)(false)}>Done</button>,
                    onClear: () => undefined,
                }]}
            />,
        );
        button('User').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(button('Done')).toHaveFocus());
        await userEvent.keyboard('{Enter}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        await waitFor(() => expect(button('User')).toHaveFocus());
    });
});
