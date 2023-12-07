import React from 'react';
import {render, screen} from '@testing-library/react';
import {ListItemChip} from './index';

describe('ListItem', () => {
    it('should display label', () => {
        render(<ListItemChip label="Say my name"/>);
        expect(screen.getByText('Say my name')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(<ListItemChip data-testid="moonstone-listItemChip" className={testClassName} label="Say my name"/>);
        expect(screen.getByTestId('moonstone-listItemChip')).toHaveClass(testClassName);
    });

    it('should add additional attribute', () => {
        render(<ListItemChip data-testid="moonstone-listItemChip" label="Say my name"/>);
        expect(screen.getByTestId('moonstone-listItemChip')).toBeInTheDocument();
    });
});
