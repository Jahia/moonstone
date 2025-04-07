import {render, screen} from '@testing-library/react';
import {Badge} from './index';

describe('Badge', () => {
    it('should display additional className', () => {
        render(<Badge data-testid="moonstone-badge" label="3" className="extra"/>);
        expect(screen.getByTestId('moonstone-badge')).toHaveClass('extra');
    });

    it('should add additional attributes', () => {
        render(<Badge data-testid="moonstone-badge" label="3" data-custom="test"/>);
        expect(screen.getByTestId('moonstone-badge')).toHaveAttribute('data-custom', 'test');
    });

    it('should display a label', () => {
        render(<Badge label="test-label"/>);
        expect(screen.getByText('test-label')).toBeTruthy();
    });

    it('should have accent color', () => {
        render(<Badge data-testid="moonstone-badge" color="accent" label="test-label"/>);
        expect(screen.getByTestId('moonstone-badge')).toHaveClass('moonstone-badge_accent');
    });

    it('should have danger color', () => {
        render(<Badge data-testid="moonstone-badge" color="danger" label="test-label"/>);
        expect(screen.getByTestId('moonstone-badge')).toHaveClass('moonstone-badge_danger');
    });

    it('should have success color', () => {
        render(<Badge data-testid="moonstone-badge" color="success" label="test-label"/>);
        expect(screen.getByTestId('moonstone-badge')).toHaveClass('moonstone-badge_success');
    });

    it('should display nothing when no label is provided', () => {
        render(<Badge data-testid="moonstone-badge"/>);
        expect(screen.queryByTestId('moonstone-badge')).not.toBeInTheDocument();
    });

    it('should display nothing when label is an empty string', () => {
        render(<Badge data-testid="moonstone-badge" label=""/>);
        expect(screen.queryByTestId('moonstone-badge')).not.toBeInTheDocument();
    });
});
