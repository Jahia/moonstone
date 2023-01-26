import React from 'react';
import {render, screen} from '@testing-library/react';
// Import userEvent from '@testing-library/user-event';
import {Tag} from './Tag';

describe('Tag', () => {
    it('should display additional className', () => {
        render(<Tag data-testid="moonstone-paper" className="extra"/>);
        expect(screen.getByTestId('moonstone-paper')).toHaveClass('extra');
    });
});
