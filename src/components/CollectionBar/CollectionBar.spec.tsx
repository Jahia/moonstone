import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { AddFilter, CollectionBar, FilterChip } from './index';
import { Input } from '~/components';

const Filter = ({
    filterKey, label, isAddable = false, initialValue = '',
}: { filterKey: string; label: string; isAddable?: boolean; initialValue?: string }) => {
    const [value, setValue] = useState(initialValue);
    return (
        <FilterChip
            isAddable={isAddable}
            filterKey={filterKey}
            label={label}
            valueLabel={value}
            onClear={() => setValue('')}
        >
            <Input aria-label={label} value={value} onChange={e => setValue(e.target.value)}/>
        </FilterChip>
    );
};

// The setup of the issue: Date displayed by default, User and Action added with Add filter
const renderBar = (props = {}) => render(
    <CollectionBar aria-label="History filters" {...props}>
        <Filter filterKey="date" label="Date"/>
        <Filter isAddable filterKey="user" label="User"/>
        <Filter isAddable filterKey="action" label="Action"/>
        <AddFilter/>
    </CollectionBar>,
);

describe('CollectionBar', () => {
    it('should display additional attributes, and name itself after them', () => {
        render(<CollectionBar aria-label="Filters" data-custom="test" data-moonstone="Foo" data-sel-role="history-filters"><button type="button">Export</button></CollectionBar>);
        const bar = screen.getByRole('group', { name: 'Filters' });
        expect(bar).toHaveAttribute('data-custom', 'test');
        expect(bar).toHaveAttribute('data-sel-role', 'history-filters');
        expect(bar).toHaveAttribute('data-moonstone', 'CollectionBar');
    });

    it('should pass searchWidth to the stylesheet and keep the style of the consumer', () => {
        render(<CollectionBar aria-label="Filters" searchWidth="280px" style={{ marginTop: '4px' }}><button type="button">Export</button></CollectionBar>);
        const bar = screen.getByRole('group', { name: 'Filters' });
        expect(bar.style.getPropertyValue('--moon-collectionBar-searchWidth')).toBe('280px');
        expect(bar).toHaveStyle({ marginTop: '4px' });
    });

    it('renders nothing without a block', () => {
        const { container } = render(<CollectionBar aria-label="Filters"/>);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders a named group with one block', () => {
        render(<CollectionBar aria-label="Filters"><button type="button">Export</button></CollectionBar>);
        expect(screen.getByRole('group', { name: 'Filters' })).toContainElement(screen.getByRole('button', { name: 'Export' }));
    });

    it('renders the end blocks after the other blocks', () => {
        render(<CollectionBar aria-label="Filters" end={<button type="button">End</button>}><button type="button">Start</button></CollectionBar>);
        const [start, end] = screen.getAllByRole('button');
        expect(start).toHaveTextContent('Start');
        expect(end).toHaveTextContent('End');
    });

    it('shows the chips displayed by default and Add filter', () => {
        renderBar();
        expect(screen.getByRole('button', { name: 'Date' })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'User' })).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add filter' })).toBeEnabled();
    });

    it('adds a filter from the Add filter menu, after the other chips, and opens its popup', async () => {
        const user = userEvent.setup();
        renderBar();

        await user.click(screen.getByRole('button', { name: 'Add filter' }));
        // The hidden chips are not rendered, so these names are the items of the menu
        expect(screen.getByText('Action')).toBeInTheDocument();

        await user.click(screen.getByText('User'));
        // Case 2 of the issue: the User chip comes after the Date chip, and its popup opens
        const userChip = screen.getByRole('button', { name: 'User' });
        expect(userChip).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByRole('button', { name: 'Date' }).compareDocumentPosition(userChip) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        expect(screen.getByRole('dialog', { name: 'User' })).toBeInTheDocument();

        await user.type(screen.getByRole('textbox', { name: 'User' }), 'r');
        expect(screen.getByRole('button', { name: 'User: r' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'User' })).toHaveFocus();
    });

    it('leads back from a filter that the Add filter menu opened to the menu', async () => {
        const user = userEvent.setup();
        renderBar();

        await user.click(screen.getByRole('button', { name: 'Add filter' }));
        await user.click(screen.getByText('User'));
        await user.click(screen.getByRole('button', { name: 'Back to the filters' }));

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'User' })).not.toBeInTheDocument();
        expect(screen.getByText('User')).toBeInTheDocument();
    });

    it('shows no back button in a popup that its chip opened', async () => {
        const user = userEvent.setup();
        renderBar();

        await user.click(screen.getByRole('button', { name: 'Date' }));
        expect(screen.queryByRole('button', { name: 'Back to the filters' })).not.toBeInTheDocument();
    });

    it('removes an added filter that closes with no value', async () => {
        const user = userEvent.setup();
        renderBar();

        await user.click(screen.getByRole('button', { name: 'Add filter' }));
        await user.click(screen.getByText('User'));
        // The focus enters the popup one frame after it opens
        await waitFor(() => expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement));
        await user.keyboard('{Escape}');

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'User' })).not.toBeInTheDocument();
    });

    it('keeps an added filter that has a value', async () => {
        const user = userEvent.setup();
        renderBar();

        await user.click(screen.getByRole('button', { name: 'Add filter' }));
        await user.click(screen.getByText('User'));
        await user.type(screen.getByRole('textbox', { name: 'User' }), 'root');
        await user.keyboard('{Escape}');

        expect(screen.getByRole('button', { name: /User: root/ })).toBeInTheDocument();
    });

    it('disables Add filter when every filter is in the bar', () => {
        render(
            <CollectionBar aria-label="Filters">
                <Filter isAddable filterKey="user" initialValue="root" label="User"/>
                <AddFilter/>
            </CollectionBar>,
        );
        expect(screen.getByRole('button', { name: 'Add filter' })).toBeDisabled();
    });

    it('shows no Add filter when no filter is addable', () => {
        render(
            <CollectionBar aria-label="Filters">
                <Filter filterKey="date" label="Date"/>
                <AddFilter/>
            </CollectionBar>,
        );
        expect(screen.queryByRole('button', { name: 'Add filter' })).not.toBeInTheDocument();
    });

    it('opens the filter given by openFilterKey and reports the close', async () => {
        const user = userEvent.setup();
        const onOpenFilterChange = vi.fn();
        renderBar({ openFilterKey: 'date', onOpenFilterChange });

        await user.click(screen.getByRole('textbox', { name: 'Date' }));
        await user.keyboard('{Escape}');
        expect(onOpenFilterChange).toHaveBeenCalledWith(null);
        // Controlled: the popup stays until the consumer changes openFilterKey
        expect(screen.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
    });

    it('opens the filter given by defaultOpenFilterKey', () => {
        renderBar({ defaultOpenFilterKey: 'date' });
        expect(screen.getByRole('dialog', { name: 'Date' })).toBeInTheDocument();
    });

    it('disables every chip and Add filter with isDisabled', () => {
        renderBar({ isDisabled: true });
        expect(screen.getByRole('button', { name: 'Date' })).toBeDisabled();
        expect(screen.getByRole('button', { name: 'Add filter' })).toBeDisabled();
    });

    it('renders nothing when every block is left out by a condition', () => {
        const isShown = false;
        const { container } = render(<CollectionBar aria-label="Filters" end={null}>{isShown && <button type="button">Export</button>}</CollectionBar>);
        expect(container).toBeEmptyDOMElement();
    });

    describe('focus', () => {
        it('goes back to the chip on Escape', async () => {
            const user = userEvent.setup();
            renderBar();

            await user.click(screen.getByRole('button', { name: 'Date' }));
            await user.keyboard('{Escape}');
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Date' })).toHaveFocus();
        });

        it('goes back to the chip on Escape once the focus is in the popup', async () => {
            const user = userEvent.setup();
            renderBar();

            await user.click(screen.getByRole('button', { name: 'Date' }));
            await user.click(screen.getByRole('textbox', { name: 'Date' }));
            await user.keyboard('{Escape}');
            expect(screen.getByRole('button', { name: 'Date' })).toHaveFocus();
        });

        it('goes to the chip, now filled, when the value is typed and the popup closes', async () => {
            const user = userEvent.setup();
            renderBar();

            await user.click(screen.getByRole('button', { name: 'Date' }));
            await user.type(screen.getByRole('textbox', { name: 'Date' }), '2026');
            await user.keyboard('{Escape}');
            expect(screen.getByRole('button', { name: 'Date: 2026' })).toHaveFocus();
        });

        it('goes to Add filter when an added chip closes with no value', async () => {
            const user = userEvent.setup();
            renderBar();

            await user.click(screen.getByRole('button', { name: 'Add filter' }));
            await user.click(screen.getByText('User'));
            await user.click(screen.getByRole('textbox', { name: 'User' }));
            await user.keyboard('{Escape}');
            expect(screen.getByRole('button', { name: 'Add filter' })).toHaveFocus();
        });

        it('goes back to the chip after a clear', async () => {
            const user = userEvent.setup();
            render(
                <CollectionBar aria-label="Filters">
                    <Filter filterKey="date" initialValue="2026" label="Date"/>
                </CollectionBar>,
            );

            await user.click(screen.getByRole('button', { name: 'Clear the Date filter' }));
            expect(screen.getByRole('button', { name: 'Date' })).toHaveFocus();
        });

        it('goes to Add filter after the clear of the last added chip', async () => {
            const user = userEvent.setup();
            render(
                <CollectionBar aria-label="Filters">
                    <Filter isAddable filterKey="user" initialValue="root" label="User"/>
                    <AddFilter/>
                </CollectionBar>,
            );

            await user.click(screen.getByRole('button', { name: 'Clear the User filter' }));
            expect(screen.getByRole('button', { name: 'Add filter' })).toHaveFocus();
        });

        it('goes back to the chip when the consumer closes a controlled popup', async () => {
            const user = userEvent.setup();
            const ControlledBar = () => {
                const [openFilterKey, setOpenFilterKey] = useState<string | null>('date');
                return (
                    <CollectionBar aria-label="Filters" openFilterKey={openFilterKey} onOpenFilterChange={setOpenFilterKey}>
                        <FilterChip filterKey="date" label="Date">
                            <button type="button" onClick={() => setOpenFilterKey(null)}>Apply</button>
                        </FilterChip>
                    </CollectionBar>
                );
            };
            render(<ControlledBar/>);

            await user.click(screen.getByRole('button', { name: 'Apply' }));
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Date' })).toHaveFocus();
        });
    });
});
