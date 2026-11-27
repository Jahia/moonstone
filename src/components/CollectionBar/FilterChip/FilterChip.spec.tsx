import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CollectionBar, FilterChip } from '../index';

const renderChip = (props = {}) => render(
    <CollectionBar aria-label="Filters">
        <FilterChip filterKey="path" label="Path" {...props}>
            <input aria-label="Path"/>
        </FilterChip>
    </CollectionBar>,
);

describe('FilterChip', () => {
    it('should display additional attributes on the chip, and name itself after them', () => {
        renderChip({ 'data-sel-role': 'path-filter', 'data-moonstone': 'Foo' });
        // oxlint-disable-next-line testing-library/no-node-access -- the chip wraps its button, which carries the role
        const chip = screen.getByRole('button', { name: 'Path' }).closest('[data-moonstone]');
        expect(chip).toHaveAttribute('data-sel-role', 'path-filter');
        expect(chip).toHaveAttribute('data-moonstone', 'FilterChip');
    });

    it('shows its name with no value', () => {
        renderChip();
        expect(screen.getByRole('button', { name: 'Path' })).toHaveAttribute('aria-expanded', 'false');
        expect(screen.queryByRole('button', { name: 'Clear the Path filter' })).not.toBeInTheDocument();
    });

    it('shows its name, its value and a clear button with a value', async () => {
        const user = userEvent.setup();
        const onClear = vi.fn();
        renderChip({ valueLabel: '/sites/digitall', onClear });

        expect(screen.getByRole('button', { name: 'Path: /sites/digitall' })).toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: 'Clear the Path filter' }));
        expect(onClear).toHaveBeenCalledTimes(1);
    });

    it('shows no clear button without onClear', () => {
        renderChip({ valueLabel: '/sites/digitall' });
        expect(screen.queryByRole('button', { name: 'Clear the Path filter' })).not.toBeInTheDocument();
    });

    it('takes the clear label from i18n', () => {
        renderChip({ valueLabel: '/sites', onClear: vi.fn(), i18n: { clear: 'Effacer le filtre Path' } });
        expect(screen.getByRole('button', { name: 'Effacer le filtre Path' })).toBeInTheDocument();
    });

    it('opens and closes its popup', async () => {
        const user = userEvent.setup();
        renderChip();

        await user.click(screen.getByRole('button', { name: 'Path' }));
        expect(screen.getByRole('dialog', { name: 'Path' })).toContainElement(screen.getByRole('textbox', { name: 'Path' }));

        await user.click(screen.getByRole('button', { name: 'Path' }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('gives a close to the function form', async () => {
        const user = userEvent.setup();
        render(
            <CollectionBar aria-label="Filters">
                <FilterChip filterKey="path" label="Path">
                    {({ close }) => <button type="button" onClick={close}>Done</button>}
                </FilterChip>
            </CollectionBar>,
        );

        await user.click(screen.getByRole('button', { name: 'Path' }));
        await user.click(screen.getByRole('button', { name: 'Done' }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('throws outside a CollectionBar', () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        expect(() => render(<FilterChip filterKey="path" label="Path">x</FilterChip>)).toThrow('FilterChip must be used inside a CollectionBar');
    });
});
