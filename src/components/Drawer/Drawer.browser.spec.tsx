import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { useState } from 'react';

import { Drawer } from './index';
import { Button } from '~/components';

const Harness = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button label="Toggle drawer" onClick={() => setOpen(!open)}/>
            <Drawer isOpen={open} aria-label="Side panel">
                <p>Drawer content</p>
                <button type="button">Inside action</button>
                <Button label="Close" onClick={() => setOpen(false)}/>
            </Drawer>
            <button type="button">after</button>
        </>
    );
};

const renderAndOpen = async () => {
    render(<Harness/>);
    const trigger = screen.getByRole('button', { name: 'Toggle drawer' });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    const drawer = await screen.findByRole('complementary', { name: 'Side panel' });
    return { trigger, drawer };
};

describe('Drawer keyboard', () => {
    it.fails('moves focus inside the drawer when it opens', async () => {
        const { drawer } = await renderAndOpen();
        await waitFor(() => expect(drawer).toContainElement(document.activeElement as HTMLElement));
    });

    it('reaches the drawer content with Tab', async () => {
        const { trigger } = await renderAndOpen();
        trigger.focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Inside action' })).toHaveFocus();
    });

    it.fails('closes with Escape', async () => {
        await renderAndOpen();
        screen.getByRole('button', { name: 'Inside action' }).focus();
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByText('Drawer content')).not.toBeInTheDocument());
    });

    it.fails('returns focus to the trigger when closed from inside', async () => {
        const { trigger } = await renderAndOpen();
        screen.getByRole('button', { name: 'Close' }).focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.queryByText('Drawer content')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });
});
