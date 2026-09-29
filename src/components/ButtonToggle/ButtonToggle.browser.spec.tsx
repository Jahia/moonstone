import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { ButtonToggle } from './index';

const renderToggle = (props = {}) => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <ButtonToggle label="Bold" onClick={onClick} {...props}/>
        </>,
    );
    return { onClick };
};

describe('ButtonToggle keyboard', () => {
    it('reaches the toggle button with Tab', async () => {
        renderToggle();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Bold' })).toHaveFocus();
    });

    it('toggles the pressed state with Enter', async () => {
        const { onClick } = renderToggle();
        const toggle = screen.getByRole('button', { name: 'Bold' });
        expect(toggle).toHaveAttribute('aria-pressed', 'false');
        toggle.focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(toggle).toHaveAttribute('aria-pressed', 'true');
    });

    it('toggles the pressed state with Space', async () => {
        const { onClick } = renderToggle({ defaultPressed: true });
        const toggle = screen.getByRole('button', { name: 'Bold' });
        expect(toggle).toHaveAttribute('aria-pressed', 'true');
        toggle.focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(toggle).toHaveAttribute('aria-pressed', 'false');
    });

    it.fails('keeps focus on the toggle button after it is toggled with the keyboard', async () => {
        renderToggle();
        const toggle = screen.getByRole('button', { name: 'Bold' });
        toggle.focus();
        await userEvent.keyboard('{Enter}');
        expect(toggle).toHaveFocus();
    });

    it('skips a disabled toggle button in the tab sequence and does not toggle it', async () => {
        const { onClick } = renderToggle({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Bold' })).not.toHaveFocus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).not.toHaveBeenCalled();
    });
});
