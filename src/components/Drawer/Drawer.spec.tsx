import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Drawer } from './index';
import { Button } from '~/components';

describe('Drawer', () => {
    it('should display content when open', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByText('Drawer content')).toBeInTheDocument();
    });

    it('should keep content mounted while closing, then remove it', async () => {
        const { rerender } = render(<Drawer isOpen data-testid="moonstone-drawer">Drawer content</Drawer>);

        rerender(<Drawer isOpen={false} data-testid="moonstone-drawer">Drawer content</Drawer>);
        // Stays in the DOM in the closed state while the exit animation plays...
        expect(screen.getByTestId('moonstone-drawer')).toHaveAttribute('data-state', 'closed');

        // ...then unmounts once the animation completes.
        await waitForElementToBeRemoved(() => screen.queryByText('Drawer content'));
    });

    it('should not display content by default', () => {
        render(<Drawer data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.queryByText('Drawer content')).not.toBeInTheDocument();
    });

    it('should not display content when closed', () => {
        render(<Drawer isOpen={false} data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.queryByText('Drawer content')).not.toBeInTheDocument();
    });

    it('should add extra classname', () => {
        render(<Drawer isOpen className="extra" data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer')).toHaveClass('extra');
    });

    it('should add additional attributes', () => {
        render(<Drawer isOpen data-custom="test" data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer')).toHaveAttribute('data-custom', 'test');
    });

    it('should not be modal by default', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer')).not.toHaveAttribute('aria-modal');
    });

    it('should render as an aside by default', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer').tagName).toBe('ASIDE');
    });

    it('should render as the given component', () => {
        render(<Drawer isOpen component="div" data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer').tagName).toBe('DIV');
    });
});

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
    const drawer = (await screen.findByText('Drawer content')).closest('aside');
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
