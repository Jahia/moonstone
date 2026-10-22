import { render, screen } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { SecondaryNav } from './index';

const renderNav = () => {
    const onToggled = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <SecondaryNav header="Header" onToggled={onToggled}>Nav content</SecondaryNav>
        </>,
    );
    return { onToggled };
};

const toggle = () => screen.getByRole('button', { name: 'Toggle secondary navigation' });

describe('SecondaryNav keyboard', () => {
    it('reaches the toggle button with Tab', async () => {
        renderNav();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(toggle()).toHaveFocus();
    });

    it('collapses the nav with Enter and reports it with aria-expanded', async () => {
        const { onToggled } = renderNav();
        expect(toggle()).toHaveAttribute('aria-expanded', 'true');
        toggle().focus();
        await userEvent.keyboard('{Enter}');
        expect(onToggled).toHaveBeenCalledTimes(1);
        expect(toggle()).toHaveAttribute('aria-expanded', 'false');
    });

    it('collapses the nav with Space', async () => {
        const { onToggled } = renderNav();
        toggle().focus();
        await userEvent.keyboard(' ');
        expect(onToggled).toHaveBeenCalledTimes(1);
        expect(toggle()).toHaveAttribute('aria-expanded', 'false');
    });

    it('keeps the toggle button focusable once collapsed and expands again with Enter', async () => {
        renderNav();
        toggle().focus();
        await userEvent.keyboard('{Enter}');
        expect(toggle()).toHaveFocus();
        await userEvent.keyboard('{Enter}');
        expect(toggle()).toHaveAttribute('aria-expanded', 'true');
    });

    it('reads the width of a nav that starts collapsed once it is expanded', async () => {
        render(<SecondaryNav isDefaultVisible={false} header="Header">Nav content</SecondaryNav>);
        await userEvent.click(toggle());
        expect(screen.getByRole('separator')).toHaveAttribute('aria-valuenow', '300');
    });
});
