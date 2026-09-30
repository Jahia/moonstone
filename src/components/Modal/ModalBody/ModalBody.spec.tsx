import { render, screen } from '@testing-library/react';

import { ModalBody } from '../index';

describe('ModalBody', () => {
    it('should display content', () => {
        render(<ModalBody>ModalBody content</ModalBody>);
        expect(screen.getByText('ModalBody content')).toBeInTheDocument();
    });

    it('should add extra classname', () => {
        render(<ModalBody className="extra" data-testid="moonstone-modalBody">ModalBody content</ModalBody>);
        expect(screen.getByTestId('moonstone-modalBody')).toHaveClass('extra');
    });
});
