import {render, screen} from '@testing-library/react';
import {Drawer} from './index';

describe('Drawer', () => {
    it('should display content when open', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByText('Drawer content')).toBeInTheDocument();
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
        render(<Drawer isOpen data-testid="moonstone-drawer" className="extra">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer')).toHaveClass('extra');
    });

    it('should add additional attributes', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer" data-custom="test">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer')).toHaveAttribute('data-custom', 'test');
    });

    it('should not be modal by default', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer')).not.toHaveAttribute('aria-modal');
    });
});
