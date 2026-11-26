import { render, screen } from '@testing-library/react';

import { ModalFooter } from '../index';

describe('ModalFooter', () => {
    it('should display content', () => {
        render(<ModalFooter>ModalFooter content</ModalFooter>);
        expect(screen.getByText('ModalFooter content')).toBeInTheDocument();
    });

    it('should add extra classname', () => {
        render(<ModalFooter className="extra" data-testid="moonstone-modalFooter">ModalFooter content</ModalFooter>);
        expect(screen.getByTestId('moonstone-modalFooter')).toHaveClass('extra');
    });
});
