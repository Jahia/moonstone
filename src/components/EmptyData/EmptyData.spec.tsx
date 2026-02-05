
import {render, screen} from '@testing-library/react';
import {EmptyData} from './index';
import {Love} from '~/icons/index';

describe('EmptyData', () => {
    it('should display additional class names', () => {
        render(
            <EmptyData
                data-testid="empty-data"
                className="extra"
                message="Empty"
            />
        );
        expect(screen.getByTestId('empty-data')).toHaveClass('extra');
    });

    it('should display title', () => {
        render(<EmptyData title="No Data Found" message="Empty"/>);
        expect(screen.getByText('No Data Found')).toBeInTheDocument();
    });

    it('should display message', () => {
        render(<EmptyData message="Please try again later"/>);
        expect(screen.getByText('Please try again later')).toBeInTheDocument();
    });

    it('should display icon', () => {
        render(
            <EmptyData
                icon={<Love data-testid="empty-data-icon"/>}
                message="Empty"
            />
        );
        expect(screen.getByTestId('empty-data-icon')).toBeInTheDocument();
    });

    it('should display title, message and icon together', () => {
        render(
            <EmptyData
                title="No Data"
                message="Check back soon"
                icon={<Love data-testid="icon"/>}
            />
        );
        expect(screen.getByText('No Data')).toBeInTheDocument();
        expect(screen.getByText('Check back soon')).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
});
