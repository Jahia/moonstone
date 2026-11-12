import { render, screen } from '@testing-library/react';

import * as Icons from './components/index';

describe('Icons', () => {
    test.each(Object.values(Icons))('should display', (Icon) => {
        render(<Icon data-testid="moonstone-icon"/>);
        expect(screen.getByTestId('moonstone-icon')).toBeInTheDocument();
    });

    test.each(Object.values(Icons))('should fill with the right color', (Icon) => {
        render(<Icon color="purple" data-testid="moonstone-icon"/>);
        expect(screen.getByTestId('moonstone-icon')).toHaveClass('moonstone-icon_purple');
    });

    test.each(Object.values(Icons))('should be decorative by default', (Icon) => {
        render(<Icon data-testid="moonstone-icon"/>);
        const icon = screen.getByTestId('moonstone-icon');
        expect(icon).toHaveAttribute('aria-hidden', 'true');
        expect(icon).toHaveAttribute('focusable', 'false');
    });

    test.each(Object.values(Icons))('should become meaningful when given a name', (Icon) => {
        render(<Icon aria-label="Meaningful" data-testid="moonstone-icon"/>);
        const icon = screen.getByTestId('moonstone-icon');
        expect(icon).not.toHaveAttribute('aria-hidden');
        expect(icon).toHaveAccessibleName('Meaningful');
    });

    test.each(Object.values(Icons))('should become meaningful when given a role', (Icon) => {
        render(<Icon data-testid="moonstone-icon" role="img"/>);
        expect(screen.getByTestId('moonstone-icon')).not.toHaveAttribute('aria-hidden');
    });

    test.each(Object.values(Icons))('should let the consumer force aria-hidden off', (Icon) => {
        render(<Icon aria-hidden={false} data-testid="moonstone-icon"/>);
        expect(screen.getByTestId('moonstone-icon')).toHaveAttribute('aria-hidden', 'false');
    });
});
