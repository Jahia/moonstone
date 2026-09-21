import { render, screen } from '@testing-library/react';
import { createRef } from 'react';

import { Paper } from './index';

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
        render(<Paper className="extra" data-testid="moonstone-paper">Content here</Paper>);
        expect(screen.getByTestId('moonstone-paper')).toHaveClass('extra');
    });

    it('should add additional attributes', () => {
        render(<Paper data-custom="test" data-testid="moonstone-paper">Content here</Paper>);
        expect(screen.getByTestId('moonstone-paper')).toHaveAttribute('data-custom', 'test');
    });

    it('should forward ref', () => {
        const ref = createRef<HTMLElement>();

        render(<Paper data-testid="moonstone-paper" ref={ref}>Content here</Paper>);
        expect(ref.current).toBe(screen.getByTestId('moonstone-paper'));
    });

    it('should render as the given component', () => {
        render(<Paper component="div" data-testid="moonstone-paper">Content here</Paper>);
        expect(screen.getByTestId('moonstone-paper').tagName).toBe('DIV');
    });
});
