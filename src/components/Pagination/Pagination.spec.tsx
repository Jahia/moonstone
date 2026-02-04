import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Pagination} from './index';

describe('Pagination', () => {
    const defaultProps = {
        totalOfItems: 100,
        currentPage: 1,
        itemsPerPage: 10,
        itemsPerPageOptions: [5, 10, 25],
        onPageChange: vi.fn(),
        onItemsPerPageChange: vi.fn()
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render', () => {
        render(<Pagination {...defaultProps} data-testid="moonstone-pagination"/>);
        expect(screen.getByTestId('moonstone-pagination')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(
            <Pagination
                {...defaultProps}
                data-testid="moonstone-pagination"
                className="test-className"
            />
        );
        expect(screen.getByTestId('moonstone-pagination')).toHaveClass(
            'test-className'
        );
    });

    it('should display the correct range info', () => {
        render(<Pagination {...defaultProps}/>);
        expect(screen.getByTestId('pagination-total-items')).toHaveTextContent('1-10 of 100');
    });

    it('should display correct range info on different pages', () => {
        render(<Pagination {...defaultProps} currentPage={2}/>);
        expect(screen.getByTestId('pagination-total-items')).toHaveTextContent('11-20 of 100');
    });

    it('should display correct range info on last page with partial items', () => {
        render(<Pagination {...defaultProps} totalOfItems={95} currentPage={10}/>);
        expect(screen.getByTestId('pagination-total-items')).toHaveTextContent('91-95 of 95');
    });

    it('should have first and previous buttons disabled on first page', () => {
        render(<Pagination {...defaultProps} currentPage={1}/>);
        expect(screen.getByTestId('pagination-button-first-page')).toBeDisabled();
        expect(screen.getByTestId('pagination-button-previous-page')).toBeDisabled();
    });

    it('should have next and last buttons disabled on last page', () => {
        render(<Pagination {...defaultProps} currentPage={10}/>);
        expect(screen.getByTestId('pagination-button-next-page')).toBeDisabled();
        expect(screen.getByTestId('pagination-button-last-page')).toBeDisabled();
    });

    it('should have all navigation buttons enabled on middle page', () => {
        render(<Pagination {...defaultProps} currentPage={5}/>);
        expect(screen.getByTestId('pagination-button-first-page')).not.toBeDisabled();
        expect(screen.getByTestId('pagination-button-previous-page')).not.toBeDisabled();
        expect(screen.getByTestId('pagination-button-next-page')).not.toBeDisabled();
        expect(screen.getByTestId('pagination-button-last-page')).not.toBeDisabled();
    });

    it('should call onPageChange with 1 when first page button is clicked', async () => {
        const user = userEvent.setup();
        const onPageChange = vi.fn();

        render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange}/>);
        await user.click(screen.getByTestId('pagination-button-first-page'));

        expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it('should call onPageChange with previous page when previous button is clicked', async () => {
        const user = userEvent.setup();
        const onPageChange = vi.fn();

        render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange}/>);
        await user.click(screen.getByTestId('pagination-button-previous-page'));

        expect(onPageChange).toHaveBeenCalledWith(4);
    });

    it('should call onPageChange with next page when next button is clicked', async () => {
        const user = userEvent.setup();
        const onPageChange = vi.fn();

        render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange}/>);
        await user.click(screen.getByTestId('pagination-button-next-page'));

        expect(onPageChange).toHaveBeenCalledWith(6);
    });

    it('should call onPageChange with last page when last page button is clicked', async () => {
        const user = userEvent.setup();
        const onPageChange = vi.fn();

        render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange}/>);
        await user.click(screen.getByTestId('pagination-button-last-page'));

        expect(onPageChange).toHaveBeenCalledWith(10);
    });

    it('should throw error when currentPage is less than 1', () => {
        expect(() => render(<Pagination {...defaultProps} currentPage={0}/>))
            .toThrow('currentPage must always be >= 1');
    });

    it('should throw error when itemsPerPage is not in itemsPerPageOptions', () => {
        expect(() => render(<Pagination {...defaultProps} itemsPerPage={15}/>))
            .toThrow('itemsPerPage must exist in itemsPerPageOptions');
    });

    it('should use custom labels', () => {
        render(
            <Pagination
                {...defaultProps}
                label={{itemsPerPage: 'Rows', of: 'out of'}}
            />
        );
        expect(screen.getByTestId('pagination-total-items')).toHaveTextContent('1-10 out of 100');
        expect(screen.getByText('Rows')).toBeInTheDocument();
    });

    it('should render the items per page dropdown', () => {
        render(<Pagination {...defaultProps}/>);
        expect(screen.getByTestId('pagination-dropdown-items-per-page')).toBeInTheDocument();
    });

    it('should calculate lastPage correctly with different itemsPerPage', () => {
        render(<Pagination {...defaultProps} itemsPerPage={25} currentPage={4}/>);
        // With 100 items and 25 per page, last page is 4
        expect(screen.getByTestId('pagination-button-next-page')).toBeDisabled();
        expect(screen.getByTestId('pagination-button-last-page')).toBeDisabled();
    });

    it('should show correct range when totalOfItems is less than itemsPerPage', () => {
        render(<Pagination {...defaultProps} totalOfItems={3} itemsPerPage={10}/>);
        expect(screen.getByTestId('pagination-total-items')).toHaveTextContent('1-3 of 3');
    });
});
