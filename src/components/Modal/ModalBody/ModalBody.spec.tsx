import {render, screen} from '@testing-library/react';
import {ModalBody} from '../index';

describe('ModalBody', () => {
    it('should display content', () => {
        render(<ModalBody>ModalBody content</ModalBody>);
        expect(screen.getByText('ModalBody content')).toBeInTheDocument();
    });

    it('should add extra classname', () => {
        render(<ModalBody data-testid="moonstone-modalBody" className="extra">ModalBody content</ModalBody>);
        expect(screen.getByTestId('moonstone-modalBody')).toHaveClass('extra');
    });
});
