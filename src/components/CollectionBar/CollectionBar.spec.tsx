import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { CollectionBar } from './index';
import { collectionBarColumns, useCollectionBarFilters } from '~/data/collectionBar';

import type { CollectionBarI18n } from './index';

type BarProps = {
    className?: string;
    i18n?: CollectionBarI18n;
    isDisabled?: boolean;
    hasColumns?: boolean;
    isEveryFilterDisplayed?: boolean;
    initialValues?: Record<string, string>;
    onClearAll?: () => void;
    onValues?: (values: Record<string, string>) => void;
    onVisibleColumnsChange?: (visibleColumns: string[]) => void;
    openFilterKey?: string | null;
    defaultOpenFilterKey?: string | null;
    onOpenFilterChange?: (openFilterKey: string | null) => void;
};

// The setup of the testable scenarios: 5 columns, 1 of them hidden, the filter Date displayed by default, User and Action not
const Bar = ({
    hasColumns = true,
    isEveryFilterDisplayed,
    initialValues,
    onValues,
    onVisibleColumnsChange,
    onClearAll,
    ...props
}: BarProps) => {
    const { values, filters, clearAll } = useCollectionBarFilters({ isEveryFilterDisplayed, initialValues });
    const [visibleColumns, setVisibleColumns] = useState(['date', 'user', 'action', 'path']);
    onValues?.(values);
    const handleVisibleColumnsChange = (next: string[]) => {
        setVisibleColumns(next);
        onVisibleColumnsChange?.(next);
    };

    const handleClearAll = onClearAll && (() => {
        clearAll();
        onClearAll();
    });

    if (!hasColumns) {
        return <CollectionBar data-testid="bar" filters={filters} onClearAll={handleClearAll} {...props}/>;
    }

    return (
        <CollectionBar
            columns={collectionBarColumns}
            data-testid="bar"
            filters={filters}
            visibleColumns={visibleColumns}
            onClearAll={handleClearAll}
            onVisibleColumnsChange={handleVisibleColumnsChange}
            {...props}
        />
    );
};

const chip = (name: string | RegExp) => screen.getByRole('button', { name });

describe('CollectionBar', () => {
    it('spreads the rest props and merges the className on the root', () => {
        render(<Bar className="extra"/>);
        expect(screen.getByTestId('bar')).toHaveClass('moonstone-collectionBar', 'extra');
    });

    it('names the toolbar with its i18n label', () => {
        render(<Bar i18n={{ toolbarLabel: 'History options' }}/>);
        expect(screen.getByRole('toolbar', { name: 'History options' })).toBeInTheDocument();
    });

    it('shows the default chip with no value, Add filter and the column button (case 1)', () => {
        render(<Bar/>);
        const toolbar = screen.getByRole('toolbar');
        const buttons = within(toolbar).getAllByRole('button');
        expect(buttons.map(button => button.textContent || button.getAttribute('aria-label'))).toEqual(['Date', 'Add filter', 'Choose the columns']);
        expect(chip('Date').closest('.moonstone-collectionBar_chip')).toHaveClass('moonstone-empty');
        expect(chip('Date')).toHaveAttribute('aria-haspopup', 'dialog');
        expect(chip('Date')).toHaveAttribute('aria-expanded', 'false');
    });

    it('adds a filter after the other chips and opens its selector (case 2)', async () => {
        const user = userEvent.setup();
        render(<Bar/>);
        await user.click(chip('Add filter'));
        expect(chip('Add filter')).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByText('User')).toBeInTheDocument();
        expect(screen.getByText('Action')).toBeInTheDocument();

        await user.click(screen.getByText('User'));
        // The modal selector hides the bar from assistive technologies
        const toolbarButtons = within(screen.getByRole('toolbar', { hidden: true })).getAllByRole('button', { hidden: true });
        expect(toolbarButtons.map(button => button.textContent || button.getAttribute('aria-label'))).toEqual(['Date', 'User', 'Add filter', 'Choose the columns']);
        expect(screen.getByRole('dialog', { name: 'User' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'User', hidden: true })).toHaveAttribute('aria-expanded', 'true');
    });

    it('removes an added chip whose selector closes with no value, and lists it again in Add filter (case 3)', async () => {
        const user = userEvent.setup();
        render(<Bar/>);
        await user.click(chip('Add filter'));
        await user.click(screen.getByText('User'));
        await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'User' })).not.toBeInTheDocument();

        await user.click(chip('Add filter'));
        expect(screen.getByText('User')).toBeInTheDocument();
    });

    it('shows the name, the value and a clear button once a value is set, and clears it (case 4)', async () => {
        const user = userEvent.setup();
        const onValues = vi.fn();
        render(<Bar onValues={onValues}/>);
        await user.click(chip('Date'));
        await user.type(screen.getByRole('textbox', { name: 'Date' }), 'Today');
        expect(onValues).toHaveBeenLastCalledWith({ date: 'Today' });

        await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' }));
        expect(chip('Date: Today')).toBeInTheDocument();
        expect(chip('Date: Today').closest('.moonstone-collectionBar_chip')).toHaveClass('moonstone-filled');

        await user.click(chip('Clear the Date filter'));
        expect(onValues).toHaveBeenLastCalledWith({ date: '' });
        expect(chip('Date')).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Clear the Date filter' })).not.toBeInTheDocument();
    });

    it('keeps an added chip that has a value once its selector closes', async () => {
        const user = userEvent.setup();
        render(<Bar/>);
        await user.click(chip('Add filter'));
        await user.click(screen.getByText('Action'));
        await user.type(screen.getByRole('textbox', { name: 'Action' }), 'Published');
        await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' }));
        expect(chip('Action: Published')).toBeInTheDocument();
    });

    it('disables Add filter once every filter is in the bar (case 5)', () => {
        render(<Bar initialValues={{ user: 'root', action: 'Published' }}/>);
        expect(chip('Add filter')).toBeDisabled();
        expect(chip('User: root')).toBeInTheDocument();
        expect(chip('Action: Published')).toBeInTheDocument();
    });

    it('shows no Add filter when every filter is displayed by default (case 6)', () => {
        render(<Bar isEveryFilterDisplayed/>);
        expect(screen.queryByRole('button', { name: 'Add filter' })).not.toBeInTheDocument();
        expect(chip('User')).toBeInTheDocument();
    });

    it('lists the visible and the hidden columns, and moves a column on click (case 7)', async () => {
        const user = userEvent.setup();
        const onVisibleColumnsChange = vi.fn();
        render(<Bar onVisibleColumnsChange={onVisibleColumnsChange}/>);
        await user.click(chip('Choose the columns'));
        expect(chip('Choose the columns')).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument();
        const items = screen.getAllByRole('menuitemcheckbox');
        expect(items.map(item => [item.textContent, item.getAttribute('aria-checked')])).toEqual([
            ['Date', 'true'],
            ['User', 'true'],
            ['Action', 'true'],
            ['Path', 'true'],
            ['Details', 'false'],
        ]);
        expect(screen.getByText('Visible columns')).toBeInTheDocument();
        expect(screen.getByText('Hidden columns')).toBeInTheDocument();

        await user.click(screen.getByRole('menuitemcheckbox', { name: 'Details' }));
        expect(onVisibleColumnsChange).toHaveBeenCalledWith(['date', 'user', 'action', 'path', 'details']);
        expect(screen.getByRole('menuitemcheckbox', { name: 'Details' })).toHaveAttribute('aria-checked', 'true');
        expect(screen.queryByText('Hidden columns')).not.toBeInTheDocument();
    });

    it('reports the visible columns in the order of the columns', async () => {
        const user = userEvent.setup();
        const onVisibleColumnsChange = vi.fn();
        render(<Bar onVisibleColumnsChange={onVisibleColumnsChange}/>);
        await user.click(chip('Choose the columns'));
        await user.click(screen.getByRole('menuitemcheckbox', { name: 'User' }));
        expect(onVisibleColumnsChange).toHaveBeenLastCalledWith(['date', 'action', 'path']);
    });

    it('takes columns with the keys visible and hidden', async () => {
        const user = userEvent.setup();
        const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
        render(
            <CollectionBar
                columns={[{ key: 'visible', label: 'Shown' }, { key: 'hidden', label: 'Secret' }]}
                filters={[]}
                visibleColumns={['visible']}
                onVisibleColumnsChange={() => undefined}
            />,
        );
        await user.click(chip('Choose the columns'));
        expect(screen.getAllByRole('menuitemcheckbox').map(item => item.textContent)).toEqual(['Shown', 'Secret']);
        expect(error).not.toHaveBeenCalled();
        error.mockRestore();
    });

    it('shows no column button above thumbnails, with no columns (case 8)', () => {
        render(<Bar hasColumns={false}/>);
        expect(screen.queryByRole('button', { name: 'Choose the columns' })).not.toBeInTheDocument();
    });

    it('shows Clear all once a filter has a value, and resets the bar', async () => {
        const user = userEvent.setup();
        const onClearAll = vi.fn();
        render(<Bar initialValues={{ user: 'root' }} onClearAll={onClearAll}/>);
        await user.click(chip('Clear all'));
        expect(onClearAll).toHaveBeenCalledTimes(1);
        expect(screen.queryByRole('button', { name: 'Clear all' })).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'User' })).not.toBeInTheDocument();
        expect(chip('Add filter')).toBeEnabled();
    });

    it('shows no Clear all when the consumer gives no onClearAll', () => {
        render(<Bar initialValues={{ date: 'Today' }}/>);
        expect(screen.queryByRole('button', { name: 'Clear all' })).not.toBeInTheDocument();
    });

    it('disables every control of a disabled bar', () => {
        render(<Bar isDisabled initialValues={{ date: 'Today' }}/>);
        within(screen.getByRole('toolbar')).getAllByRole('button').forEach(button => expect(button).toBeDisabled());
    });

    it('takes its labels from i18n, with the name of the filter in place of {{name}}', () => {
        render(
            <Bar
                i18n={{
                    addFilter: 'Ajouter un filtre',
                    filterName: '{{name}} :',
                    clearFilter: 'Effacer le filtre {{name}}',
                    columnButton: 'Choisir les colonnes',
                }}
                initialValues={{ date: 'Aujourd’hui' }}
            />,
        );
        expect(chip('Date : Aujourd’hui')).toBeInTheDocument();
        expect(chip('Effacer le filtre Date')).toBeInTheDocument();
        expect(chip('Ajouter un filtre')).toBeInTheDocument();
        expect(chip('Choisir les colonnes')).toBeInTheDocument();
    });

    const hidden = (name: string) => screen.getByRole('button', { name, hidden: true });

    // The focus manager moves the focus into the dialog on the next frame
    const waitForFocusInDialog = () => waitFor(() => expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement));

    it.each([
        ['escape', (user: ReturnType<typeof userEvent.setup>) => user.keyboard('{Escape}')],
        ['closeButton', (user: ReturnType<typeof userEvent.setup>) => user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' }))],
        ['outsidePress', (user: ReturnType<typeof userEvent.setup>) => user.click(document.querySelector('.moonstone-collectionBar_overlay'))],
        ['chip', (user: ReturnType<typeof userEvent.setup>) => user.click(hidden('Path'))],
        ['otherControl', (user: ReturnType<typeof userEvent.setup>) => user.click(hidden('Add filter'))],
        ['close', (user: ReturnType<typeof userEvent.setup>) => user.click(screen.getByRole('button', { name: 'Pick' }))],
    ])('calls onClose of a filter once, with the reason %s', async (reason, closeSelector) => {
        const user = userEvent.setup();
        const onClose = vi.fn();
        const filters = [{
            key: 'path',
            label: 'Path',
            isDisplayedByDefault: true,
            selector: ({ close }: { close: () => void }) => <button type="button" onClick={close}>Pick</button>,
            onClear: vi.fn(),
            onClose,
        }, {
            key: 'user',
            label: 'User',
            selector: <span>Selector</span>,
            onClear: vi.fn(),
        }];
        render(<CollectionBar filters={filters}/>);
        await user.click(chip('Path'));
        await waitForFocusInDialog();
        await closeSelector(user);
        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledWith({ reason });
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('hides the content outside the open selector from assistive technologies', async () => {
        const user = userEvent.setup();
        render(<Bar/>);
        await user.click(chip('Date'));
        expect(screen.queryByRole('toolbar')).not.toBeInTheDocument();
        await waitForFocusInDialog();
        await user.keyboard('{Escape}');
        expect(screen.getByRole('toolbar')).toBeInTheDocument();
    });

    it('opens the selector of defaultOpenFilterKey, and reports each change to onOpenFilterChange', async () => {
        const user = userEvent.setup();
        const onOpenFilterChange = vi.fn();
        render(<Bar defaultOpenFilterKey="date" onOpenFilterChange={onOpenFilterChange}/>);
        expect(screen.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
        await waitForFocusInDialog();
        await user.keyboard('{Escape}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(onOpenFilterChange).toHaveBeenLastCalledWith(null);
        await user.click(chip('Date'));
        expect(onOpenFilterChange).toHaveBeenLastCalledWith('date');
    });

    it('keeps a controlled selector open until the consumer closes it', async () => {
        const user = userEvent.setup();
        const onOpenFilterChange = vi.fn();
        const { rerender } = render(<Bar openFilterKey="date" onOpenFilterChange={onOpenFilterChange}/>);
        await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close' }));
        expect(onOpenFilterChange).toHaveBeenCalledWith(null);
        expect(screen.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
        rerender(<Bar openFilterKey={null} onOpenFilterChange={onOpenFilterChange}/>);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('shows every column at first in the uncontrolled form, and keeps its changes', async () => {
        const user = userEvent.setup();
        const onVisibleColumnsChange = vi.fn();
        render(<CollectionBar columns={collectionBarColumns} filters={[]} onVisibleColumnsChange={onVisibleColumnsChange}/>);
        await user.click(chip('Choose the columns'));
        expect(screen.getAllByRole('menuitemcheckbox').every(item => item.getAttribute('aria-checked') === 'true')).toBe(true);
        await user.click(screen.getByRole('menuitemcheckbox', { name: 'User' }));
        expect(screen.getByRole('menuitemcheckbox', { name: 'User' })).toHaveAttribute('aria-checked', 'false');
        expect(onVisibleColumnsChange).toHaveBeenCalledWith(collectionBarColumns.map(column => column.key).filter(key => key !== 'user'));
    });

    it('starts on defaultVisibleColumns in the uncontrolled form', async () => {
        const user = userEvent.setup();
        render(<CollectionBar columns={collectionBarColumns} defaultVisibleColumns={['date']} filters={[]}/>);
        await user.click(chip('Choose the columns'));
        expect(screen.getAllByRole('menuitemcheckbox', { checked: true }).map(item => item.textContent)).toEqual(['Date']);
    });

    it('gives the function form of a selector a close', async () => {
        const user = userEvent.setup();
        const filters = [{
            key: 'path',
            label: 'Path',
            isDisplayedByDefault: true,
            selector: ({ close }: { close: () => void }) => <button type="button" onClick={close}>Pick</button>,
            onClear: vi.fn(),
        }];
        render(<CollectionBar filters={filters}/>);
        await user.click(chip('Path'));
        await user.click(screen.getByRole('button', { name: 'Pick' }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    it('is a group with a Tab stop on each control when it holds fewer than 3 controls', () => {
        render(<Bar hasColumns={false}/>);
        expect(screen.queryByRole('toolbar')).not.toBeInTheDocument();
        const group = screen.getByRole('group', { name: 'Collection options' });
        within(group).getAllByRole('button').forEach(button => expect(button).not.toHaveAttribute('tabindex', '-1'));
    });

    it('becomes a toolbar once it holds 3 controls', () => {
        render(<Bar hasColumns={false} initialValues={{ date: 'Today' }}/>);
        expect(screen.getByRole('toolbar', { name: 'Collection options' })).toBeInTheDocument();
    });

    it('falls back to the default of an empty label', () => {
        render(<Bar i18n={{ addFilter: '', toolbarLabel: undefined }}/>);
        expect(chip('Add filter')).toBeInTheDocument();
        expect(screen.getByRole('toolbar', { name: 'Collection options' })).toBeInTheDocument();
    });

    it('passes the click event to onClear', async () => {
        const user = userEvent.setup();
        const onClear = vi.fn();
        const filters = [{
            key: 'path',
            label: 'Path',
            valueLabel: '/sites',
            isDisplayedByDefault: true,
            selector: <span>Selector</span>,
            onClear,
        }];
        render(<CollectionBar filters={filters}/>);
        await user.click(chip('Clear the Path filter'));
        expect(onClear.mock.calls[0][0]).toHaveProperty('type', 'click');
    });

    it('names its two menus', async () => {
        const user = userEvent.setup();
        render(<Bar/>);
        await user.click(chip('Add filter'));
        expect(screen.getByLabelText('Add filter', { selector: 'menu' })).toBeInTheDocument();
    });
});
