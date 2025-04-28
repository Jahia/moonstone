import {render, screen} from '@testing-library/react';
import {Paper} from './index';

describe('Paper', () => {
    it('should display content', () => {
        render(<Paper data-testid="moonstone-paper">Content here</Paper>);
        expect(screen.getByText('Content here')).toBeInTheDocument();
    });

    it('should display nothing when no content is defined', () => {
        render(<Paper data-testid="moonstone-paper"/>);
        expect(screen.queryByTestId('moonstone-paper')).not.toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(<Paper data-testid="moonstone-paper" className="extra">Content here</Paper>);
        expect(screen.getByTestId('moonstone-paper')).toHaveClass('extra');
    });

    it('should add additional attributes', () => {
        render(<Paper data-testid="moonstone-paper" data-custom="test">Content here</Paper>);
        expect(screen.getByTestId('moonstone-paper')).toHaveAttribute('data-custom', 'test');
    });
});
