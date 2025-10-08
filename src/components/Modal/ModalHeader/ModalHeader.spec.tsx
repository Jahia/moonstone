import {render, screen} from '@testing-library/react';
import {ModalHeader} from '../index';

describe('ModalHeader', () => {
    it('should display content', () => {
        render(<ModalHeader title="ModalHeader title">ModalHeader content</ModalHeader>);
        expect(screen.getByText('ModalHeader content')).toBeInTheDocument();
    });

    it('should display title', () => {
        render(<ModalHeader title="ModalHeader title">ModalHeader content</ModalHeader>);
        expect(screen.getByText('ModalHeader title')).toBeInTheDocument();
    });

    it('should add extra classname', () => {
        render(<ModalHeader title="ModalHeader title" data-testid="moonstone-modalHeader" className="extra">ModalHeader content</ModalHeader>);
        expect(screen.getByTestId('moonstone-modalHeader')).toHaveClass('extra');
    });
});
