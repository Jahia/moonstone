import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { useState } from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader } from './index';
import { Button } from '~/components';

const Harness = ({ onOpenChange }: { readonly onOpenChange: (open: boolean) => void }) => {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (next: boolean) => {
        onOpenChange(next);
        setOpen(next);
    };

    return (
        <>
            <Button label="Open modal" onClick={() => handleOpenChange(true)}/>
            <Modal isOpen={open} onOpenChange={handleOpenChange}>
                <>
                    <ModalHeader title="Modal Title"/>
                    <ModalBody>
                        <button type="button">First action</button>
                        <button type="button">Second action</button>
                    </ModalBody>
                    <ModalFooter>
                        <Button label="Close" onClick={() => handleOpenChange(false)}/>
                    </ModalFooter>
                </>
            </Modal>
            <button type="button">after</button>
        </>
    );
};

const renderAndOpen = async () => {
    const onOpenChange = vi.fn();
    render(<Harness onOpenChange={onOpenChange}/>);
    const trigger = screen.getByRole('button', { name: 'Open modal' });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    const dialog = await screen.findByRole('dialog');
    return { onOpenChange, trigger, dialog };
};

describe('Modal keyboard', () => {
    it('moves focus inside the modal when it opens', async () => {
        const { dialog } = await renderAndOpen();
        await waitFor(() => expect(dialog).toContainElement(document.activeElement as HTMLElement));
    });

    it('keeps Tab inside the modal', async () => {
        await renderAndOpen();
        screen.getByRole('button', { name: 'First action' }).focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getByRole('button', { name: 'Second action' })).toHaveFocus());
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus());
        await userEvent.keyboard('{Tab}');
        // The focus trap hands the focus over from its guard asynchronously
        await waitFor(() => expect(screen.getByRole('button', { name: 'First action' })).toHaveFocus());
    });

    it('keeps Shift+Tab inside the modal', async () => {
        await renderAndOpen();
        screen.getByRole('button', { name: 'First action' }).focus();
        await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
        await waitFor(() => expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus());
    });

    it('closes with Escape', async () => {
        const { onOpenChange } = await renderAndOpen();
        screen.getByRole('button', { name: 'First action' }).focus();
        await userEvent.keyboard('{Escape}');
        expect(onOpenChange).toHaveBeenLastCalledWith(false);
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    });

    it('reaches the close button with Tab and activates it with Enter', async () => {
        await renderAndOpen();
        screen.getByRole('button', { name: 'First action' }).focus();
        await userEvent.keyboard('{Tab}');
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus());
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    });

    it('returns focus to the trigger when closed', async () => {
        const { trigger } = await renderAndOpen();
        screen.getByRole('button', { name: 'First action' }).focus();
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
        await waitFor(() => expect(trigger).toHaveFocus());
    });
});
