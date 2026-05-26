import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Drawer} from './index';

describe('Drawer', () => {
    it('should display content when open', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.getByText('Drawer content')).toBeInTheDocument();
    });

    it('should not display content when closed', () => {
        render(<Drawer isOpen={false} data-testid="moonstone-drawer">Drawer content</Drawer>);
        expect(screen.queryByText('Drawer content')).not.toBeInTheDocument();
    });

    it('should add extra classname', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer" className="extra">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer')).toHaveClass('extra');
    });

    it('should apply size modifier class', () => {
        render(<Drawer isOpen data-testid="moonstone-drawer" size="large">Drawer content</Drawer>);
        expect(screen.getByTestId('moonstone-drawer')).toHaveClass('moonstone-drawer_large');
    });

    it('should call onOpenChange on ESC', async () => {
        const handleOpenChange = vi.fn();
        const user = userEvent.setup();

        render(
            <Drawer isOpen data-testid="moonstone-drawer" onOpenChange={handleOpenChange}>
                Drawer content
            </Drawer>
        );

        await user.keyboard('{Escape}');
        expect(handleOpenChange).toHaveBeenCalledWith(false, expect.anything(), expect.anything());
    });
});
