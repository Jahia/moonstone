import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { AddFilter, ClearFilters, CollectionBar, FilterChip } from '../index';

const Bar = ({ initialValue = 'root' }: { initialValue?: string }) => {
    const [user, setUser] = useState(initialValue);
    return (
        <CollectionBar aria-label="Filters">
            <FilterChip
                isAddable
                filterKey="user"
                label="User"
                valueLabel={user}
                onClear={() => setUser('')}
            >
                x
            </FilterChip>
            <FilterChip isAddable filterKey="action" label="Action">x</FilterChip>
            <AddFilter/>
            <ClearFilters onClick={() => setUser('')}/>
        </CollectionBar>
    );
};

describe('ClearFilters', () => {
    it('shows nothing while no filter has a value', () => {
        render(<Bar initialValue=""/>);
        expect(screen.queryByRole('button', { name: 'Clear all' })).not.toBeInTheDocument();
    });

    it('calls onClick, then leaves the bar and gives the focus to Add filter', async () => {
        const user = userEvent.setup();
        render(<Bar/>);

        await user.click(screen.getByRole('button', { name: 'Clear all' }));
        expect(screen.queryByRole('button', { name: /User/ })).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Clear all' })).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add filter' })).toHaveFocus();
    });

    it('should display additional attributes, and name itself after them', () => {
        render(
            <CollectionBar aria-label="Filters">
                <FilterChip filterKey="user" label="User" valueLabel="root">x</FilterChip>
                <ClearFilters data-moonstone="Foo" data-sel-role="clear-filters" onClick={vi.fn()}/>
            </CollectionBar>,
        );
        const button = screen.getByRole('button', { name: 'Clear all' });
        expect(button).toHaveAttribute('data-sel-role', 'clear-filters');
        expect(button).toHaveAttribute('data-moonstone', 'ClearFilters');
    });

    it('takes its label from i18n', () => {
        render(
            <CollectionBar aria-label="Filters">
                <FilterChip filterKey="user" label="User" valueLabel="root">x</FilterChip>
                <ClearFilters i18n={{ label: 'Tout effacer' }} onClick={vi.fn()}/>
            </CollectionBar>,
        );
        expect(screen.getByRole('button', { name: 'Tout effacer' })).toBeInTheDocument();
    });

    it('throws outside a CollectionBar', () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        expect(() => render(<ClearFilters onClick={vi.fn()}/>)).toThrow('ClearFilters must be used inside a CollectionBar');
    });
});
