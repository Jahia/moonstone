import React from 'react';
import {render, screen} from '@testing-library/react';
import {Checkbox} from './index';

describe('Checkbox', () => {
    // TODO: test the component
    it('should display additional className', () => {
        render(<Checkbox data-testid="moonstone-checkbox" className="test"/>);
        expect(screen.getByTestId('moonstone-checkbox')).toHaveClass('test');
    });

    it('should add additional attributes', () => {
        render(<Checkbox data-testid="moonstone-checkbox" data-custom="test"/>);
        expect(screen.getByTestId('moonstone-checkbox')).toHaveAttribute('data-custom', 'test');
    });
});
