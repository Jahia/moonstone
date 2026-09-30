import { render, screen } from '@testing-library/react';

import { Pill } from './index';
import { Cloud } from '~/icons';

describe('Pill', () => {
    it('should display content', () => {
        render(<Pill>Say my name</Pill>);
        expect(screen.getByText('Say my name')).toBeInTheDocument();
    });

    it('should add additional class names', () => {
        const testClassName = 'hello';
        render(<Pill className={testClassName} data-testid="moonstone-listItemChip">Say my name</Pill>);
        expect(screen.getByTestId('moonstone-listItemChip')).toHaveClass(testClassName);
    });

    it('should add additional attribute', () => {
        render(<Pill data-testid="moonstone-listItemChip">Say my name</Pill>);
        expect(screen.getByTestId('moonstone-listItemChip')).toBeInTheDocument();
    });

    it('should display an icon when children is an icon element', () => {
        render(<Pill><Cloud data-testid="moonstone-pill-icon"/></Pill>);
        expect(screen.getByTestId('moonstone-pill-icon')).toBeInTheDocument();
    });
});
