import {useState} from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Modal, ModalBody, ModalFooter, ModalHeader} from './index';
import {Button} from '~/components';

describe('Modal', () => {
    it('should display content', () => {
        render(<Modal isOpen data-testid="moonstone-modal"><ModalBody>Modal content</ModalBody></Modal>);
        expect(screen.getByText('Modal content')).toBeInTheDocument();
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
                <Button label="Open modal" aria-label="Open modal" onClick={() => setOpen(true)}/>
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
});
