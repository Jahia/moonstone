import { render, screen } from '@testing-library/react';

import { Tab } from './index';

describe('Tab', () => {
    it('should render the children', () => {
        render(<Tab>toto</Tab>);
        expect(screen.getByText('toto')).toBeInTheDocument();
    });

    it('should pass props to the element', () => {
        render(<Tab title="tabulation">toto</Tab>);
        expect(screen.getByTitle('tabulation')).toBeInTheDocument();
    });

    it('should add extra className', () => {
        render(<Tab className="extra" data-testid="tabulation">toto</Tab>);
        expect(screen.getByTestId('tabulation')).toHaveClass('extra');
    });

    it('should not display the menu when children is empty', () => {
        render(<Tab data-testid="tabulation">{[]}</Tab>);
        expect(screen.queryByTestId('tabulation')).not.toBeInTheDocument();
    });
});
