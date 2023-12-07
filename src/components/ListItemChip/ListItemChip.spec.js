import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ListItemChip} from './index';

describe('ListItem', () => {
    it('should display label', () => {
        render(<ListItemChip label="Say my name"/>);
        expect(screen.getByText('Say my name')).toBeTruthy();
    });
});
