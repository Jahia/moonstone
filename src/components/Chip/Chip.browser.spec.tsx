import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Chip } from './index';

const renderChip = () => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Chip label="Published" onClick={onClick}/>
        </>,
    );
    return { onClick, chip: screen.getByText('Published').parentElement };
};

describe('Chip keyboard', () => {
    it.fails('exposes a clickable chip as a button', () => {
        renderChip();
        expect(screen.getByRole('button', { name: 'Published' })).toBeVisible();
    });

    it.fails('reaches a clickable chip with Tab', async () => {
        const { chip } = renderChip();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(chip).toHaveFocus();
    });

    it.fails('activates the focused clickable chip with Enter', async () => {
        const { onClick, chip } = renderChip();
        chip.focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('activates the focused clickable chip with Space', async () => {
        const { onClick, chip } = renderChip();
        chip.focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
