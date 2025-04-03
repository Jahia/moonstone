import React from 'react';
import {render, screen} from '@testing-library/react';
import * as Icons from './components/index';

describe('Icons', () => {
    test.each(Object.values(Icons))('should display', Icon => {
        render(<Icon data-testid="moonstone-icon"/>);
        expect(screen.getByTestId('moonstone-icon')).toBeInTheDocument();
    });

    test.each(Object.values(Icons))('should fill with the right color', Icon => {
        render(<Icon color="purple" data-testid="moonstone-icon"/>);
        expect(screen.getByTestId('moonstone-icon')).toHaveClass('moonstone-icon_purple');
    });
});
