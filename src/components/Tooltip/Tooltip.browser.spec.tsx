import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { Tooltip } from './index';

const renderTooltip = () => {
    render(
        <>
            <button type="button">before</button>
            <Tooltip label="Go home">
                <button type="button">Home</button>
            </Tooltip>
            <button type="button">after</button>
        </>,
    );
    return { trigger: screen.getByRole('button', { name: 'Home' }) };
};

describe('Tooltip keyboard', () => {
    it('appears when the trigger receives keyboard focus', async () => {
        const { trigger } = renderTooltip();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(trigger).toHaveFocus());
        expect(await screen.findByRole('tooltip')).toHaveTextContent('Go home');
    });

    it('disappears when the trigger loses focus', async () => {
        renderTooltip();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await screen.findByRole('tooltip');
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
    });

    it('dismisses with Escape while the trigger keeps focus', async () => {
        const { trigger } = renderTooltip();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await screen.findByRole('tooltip');
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });
});

describe('Tooltip pointer', () => {
    it('stays open while the pointer moves from the trigger onto it', async () => {
        const { trigger } = renderTooltip();
        await userEvent.hover(trigger);
        const tooltip = await screen.findByRole('tooltip');
        await userEvent.hover(tooltip);
        await new Promise((resolve) => {
            setTimeout(resolve, 100);
        });
        expect(screen.getByRole('tooltip')).toBeVisible();
    });
});
