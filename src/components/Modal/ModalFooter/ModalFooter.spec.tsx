import {render, screen} from '@testing-library/react';
import {ModalFooter} from '../index';

describe('ModalFooter', () => {
    it('should display content', () => {
        render(<ModalFooter>ModalFooter content</ModalFooter>);
        expect(screen.getByText('ModalFooter content')).toBeInTheDocument();
    });

    it('should add extra classname', () => {
        render(<ModalFooter data-testid="moonstone-modalFooter" className="extra">ModalFooter content</ModalFooter>);
        expect(screen.getByTestId('moonstone-modalFooter')).toHaveClass('extra');
    });
});
