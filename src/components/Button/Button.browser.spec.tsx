import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Button } from './index';

const renderButton = (props = {}) => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Button label="Action" onClick={onClick} {...props}/>
            <button type="button">after</button>
        </>,
    );
    return { onClick };
};

describe('Button keyboard', () => {
    it('reaches the button with Tab', async () => {
        renderButton();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Action' })).toHaveFocus();
    });

    it('activates the focused button with Enter', async () => {
        const { onClick } = renderButton();
        screen.getByRole('button', { name: 'Action' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('activates the focused button with Space', async () => {
        const { onClick } = renderButton();
        screen.getByRole('button', { name: 'Action' }).focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('skips a disabled button in the tab sequence', async () => {
        renderButton({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('does not activate a disabled button with Enter or Space', async () => {
        const { onClick } = renderButton({ isDisabled: true });
        screen.getByRole('button', { name: 'Action' }).focus();
        await userEvent.keyboard('{Enter}');
        await userEvent.keyboard(' ');
        expect(onClick).not.toHaveBeenCalled();
    });
});
