import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader } from './index';
import { Button } from '~/components';

describe('Modal', () => {
    it('should display content', () => {
        render(<Modal isOpen data-testid="moonstone-modal"><ModalBody>Modal content</ModalBody></Modal>);
        expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('should add extra classname', () => {
        render(<Modal isOpen className="extra" data-testid="moonstone-modal"><ModalBody>Modal content</ModalBody></Modal>);
        expect(screen.getByTestId('moonstone-modal')).toHaveClass('extra');
    });

    it('should display footer', () => {
        render(<Modal isOpen data-testid="moonstone-modal"><ModalFooter>Modal content</ModalFooter></Modal>);
        expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('should display header', () => {
        render(<Modal isOpen data-testid="moonstone-modal"><ModalHeader title="Modal title">Modal content</ModalHeader></Modal>);
        expect(screen.getByText('Modal title')).toBeInTheDocument();
        expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('should change size', () => {
        render(<Modal isOpen data-testid="moonstone-modal" size="large"><ModalBody>Modal content</ModalBody></Modal>);
        expect(screen.getByTestId('moonstone-modal')).toHaveClass('moonstone-modal_large');
    });

    const ModalWithButton = () => {
        const [open, setOpen] = useState(false);
        return (
            <div>
                <Button aria-label="Open modal" label="Open modal" onClick={() => setOpen(true)}/>
                <Modal isOpen={open} data-testid="moonstone-modal" onOpenChange={setOpen}>
                    <ModalBody>Modal content</ModalBody>
                </Modal>
            </div>
        );
    };

    it('should open modal', async () => {
        const user = userEvent.setup();

        render(<ModalWithButton/>);

        await user.click(screen.getByLabelText('Open modal'));

        expect(screen.getByTestId('moonstone-modal')).toBeInTheDocument();
    });

    it('should be named by the title of its header', () => {
        render(<Modal isOpen><ModalHeader title="Modal title">Modal content</ModalHeader></Modal>);
        expect(screen.getByRole('dialog', { name: 'Modal title' })).toBeInTheDocument();
    });

    it('should not be named by its content when it has no header', () => {
        render(<Modal isOpen><ModalBody>Modal content</ModalBody></Modal>);
        expect(screen.getByRole('dialog')).toHaveAccessibleName('');
    });

    it('should let the consumer name the modal', () => {
        render(<Modal isOpen aria-label="Custom name"><ModalHeader title="Modal title"/></Modal>);
        expect(screen.getByRole('dialog', { name: 'Custom name' })).toBeInTheDocument();
    });

    it('should not close on a press outside that is not released', async () => {
        const user = userEvent.setup();
        render(<ModalWithButton/>);
        await user.click(screen.getByLabelText('Open modal'));

        await user.pointer({ keys: '[MouseLeft>]', target: document.body });

        expect(screen.getByTestId('moonstone-modal')).toBeInTheDocument();
    });

    it('should close on a click outside', async () => {
        const user = userEvent.setup();
        render(<ModalWithButton/>);
        await user.click(screen.getByLabelText('Open modal'));

        await user.click(document.body);

        expect(screen.queryByTestId('moonstone-modal')).not.toBeInTheDocument();
    });
});
