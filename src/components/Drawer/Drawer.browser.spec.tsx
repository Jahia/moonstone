import { render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { userEvent } from 'vitest/browser';

import { Drawer } from './index';
import { Button, Tab, TabItem } from '~/components';

const Harness = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button label="Toggle drawer" onClick={() => setOpen(!open)}/>
            <Drawer isOpen={open} aria-label="Side panel" onOpenChange={setOpen}>
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
    await waitFor(() => expect(drawer).toContainElement(document.activeElement as HTMLElement));
    return { trigger, drawer };
};

describe('Drawer keyboard', () => {
    it('moves focus inside the drawer when it opens', async () => {
        const { drawer } = await renderAndOpen();
        await waitFor(() => expect(drawer).toContainElement(document.activeElement as HTMLElement));
    });

    it('reaches the drawer content with Tab', async () => {
        const { trigger } = await renderAndOpen();
        trigger.focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Inside action' })).toHaveFocus();
    });

    it('closes with Escape', async () => {
        const { trigger } = await renderAndOpen();
        screen.getByRole('button', { name: 'Inside action' }).focus();
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByText('Drawer content')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });

    it('moves focus to the first element that Tab reaches when it opens', async () => {
        const content = (
            <>
                <button tabIndex={-1} type="button">Inactive tab</button>
                <button type="button">Selected tab</button>
            </>
        );
        const { rerender } = render(<Drawer aria-label="Side panel">{content}</Drawer>);
        rerender(<Drawer isOpen aria-label="Side panel">{content}</Drawer>);
        await waitFor(() => expect(screen.getByRole('button', { name: 'Selected tab' })).toHaveFocus());
    });

    it('moves focus to the selected tab of a Tab placed first when it opens', async () => {
        const content = (
            <Tab>
                <TabItem label="First"/>
                <TabItem isSelected label="Second"/>
            </Tab>
        );
        const { rerender } = render(<Drawer aria-label="Side panel">{content}</Drawer>);
        rerender(<Drawer isOpen aria-label="Side panel">{content}</Drawer>);
        await waitFor(() => expect(screen.getByRole('tab', { name: 'Second' })).toHaveFocus());
    });

    it('closes with Escape when nothing inside can take focus', async () => {
        const onOpenChange = vi.fn();
        const { rerender } = render(<Drawer aria-label="Side panel" onOpenChange={onOpenChange}><p>Drawer content</p></Drawer>);
        rerender(<Drawer isOpen aria-label="Side panel" onOpenChange={onOpenChange}><p>Drawer content</p></Drawer>);
        await waitFor(() => expect(screen.getByRole('complementary', { name: 'Side panel' })).toHaveFocus());
        await userEvent.keyboard('{Escape}');
        expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it('returns focus to the trigger when closed from inside', async () => {
        const { trigger } = await renderAndOpen();
        screen.getByRole('button', { name: 'Close' }).focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.queryByText('Drawer content')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });

    it('does not take focus when it is rendered open', async () => {
        render(<Drawer isOpen aria-label="Side panel"><button type="button">Inside action</button></Drawer>);
        await new Promise(requestAnimationFrame);
        expect(screen.getByRole('button', { name: 'Inside action' })).not.toHaveFocus();
    });
});

// The 2.21.1 fix was lost once on main (app-shell#409)
describe('Drawer styles', () => {
    it('lets its consumer set its width, with no min-width of 100%', () => {
        render(<Drawer isOpen aria-label="Side panel"><p>Drawer content</p></Drawer>);
        expect(getComputedStyle(screen.getByRole('complementary', { name: 'Side panel' })).minWidth).not.toBe('100%');
    });
});
