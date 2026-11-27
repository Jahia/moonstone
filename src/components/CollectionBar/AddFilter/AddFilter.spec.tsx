import { render, screen } from '@testing-library/react';

import { AddFilter, CollectionBar, FilterChip } from '../index';

describe('AddFilter', () => {
    it('should display additional attributes, and name itself after them', () => {
        render(
            <CollectionBar aria-label="Filters">
                <FilterChip isAddable filterKey="user" label="User">x</FilterChip>
                <AddFilter data-moonstone="Foo" data-sel-role="add-filter"/>
            </CollectionBar>,
        );
        const button = screen.getByRole('button', { name: 'Add filter' });
        expect(button).toHaveAttribute('data-sel-role', 'add-filter');
        expect(button).toHaveAttribute('data-moonstone', 'AddFilter');
    });

    it('takes its label from i18n', () => {
        render(
            <CollectionBar aria-label="Filters">
                <FilterChip isAddable filterKey="user" label="User">x</FilterChip>
                <AddFilter i18n={{ label: 'Ajouter un filtre' }}/>
            </CollectionBar>,
        );
        expect(screen.getByRole('button', { name: 'Ajouter un filtre' })).toBeInTheDocument();
    });

    it('throws outside a CollectionBar', () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        expect(() => render(<AddFilter/>)).toThrow('AddFilter must be used inside a CollectionBar');
    });
});
