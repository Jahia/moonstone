import { render, screen } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { ColumnChooser } from './index';

describe('ColumnChooser keyboard', () => {
    it('closes on Escape and gives the focus back to the button', async () => {
        render(<ColumnChooser columns={[{ key: 'date', label: 'Date' }, { key: 'path', label: 'Path' }]}/>);
        await userEvent.click(screen.getByRole('button', { name: 'Choose the columns' }));
        await expect.poll(() => screen.getByRole('dialog', { name: 'Choose the columns' }).contains(document.activeElement)).toBe(true);

        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Choose the columns' })).toHaveFocus();
    });
});
