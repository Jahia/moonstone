import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { FieldBoolean } from './index';

describe('FieldBoolean keyboard', () => {
    it('reaches the checkbox with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <FieldBoolean checkboxAttributes={{ value: 'enabled' }} id="field" label="Enabled"/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Enabled' })).toHaveFocus();
    });

    it('toggles the checkbox with Space and calls onChange', async () => {
        const onChange = vi.fn();
        render(<FieldBoolean checkboxAttributes={{ value: 'enabled', onChange }} id="field" label="Enabled"/>);
        screen.getByRole('checkbox', { name: 'Enabled' }).focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('checkbox', { name: 'Enabled' })).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'enabled', true);
    });

    it('skips a disabled checkbox in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <FieldBoolean checkboxAttributes={{ value: 'enabled', isDisabled: true }} id="field" label="Enabled"/>
                <button type="button">after</button>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });
});
