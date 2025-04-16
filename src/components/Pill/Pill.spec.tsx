import {render, screen} from '@testing-library/react';
import {Pill} from './index';

describe('Pill', () => {
    it('should display label', () => {
        render(<Pill label="Say my name"/>);
        expect(screen.getByText('Say my name')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(<Pill data-testid="moonstone-listItemChip" className={testClassName} label="Say my name"/>);
        expect(screen.getByTestId('moonstone-listItemChip')).toHaveClass(testClassName);
    });

    it('should add additional attribute', () => {
        render(<Pill data-testid="moonstone-listItemChip" label="Say my name"/>);
        expect(screen.getByTestId('moonstone-listItemChip')).toBeInTheDocument();
    });
});
