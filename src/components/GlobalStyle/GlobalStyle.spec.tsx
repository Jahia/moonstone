import {render, screen} from '@testing-library/react';
import {GlobalStyle} from './index';

describe('GlobalStyle', () => {
    it('should not render anything', () => {
        render(<GlobalStyle data-testid="global-style"/>);
        expect(screen.queryByTestId('global-style')).not.toBeInTheDocument();
    });
});
