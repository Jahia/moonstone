import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Pagination } from './index';

describe('Pagination', () => {
    const defaultProps = {
        totalOfItems: 100,
        currentPage: 1,
        itemsPerPage: 10,
        itemsPerPageOptions: [5, 10, 25],
        onPageChange: vi.fn(),
        onItemsPerPageChange: vi.fn(),
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
                className="test-className"
                data-testid="moonstone-pagination"
            />,
        );
        expect(screen.getByTestId('moonstone-pagination')).toHaveClass(
            'test-className',
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
        render(<Pagination {...defaultProps} currentPage={10} totalOfItems={95}/>);
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
                label={{ itemsPerPage: 'Rows', of: 'out of' }}
            />,
        );
        expect(screen.getByTestId('pagination-total-items')).toHaveTextContent('1-10 out of 100');
        expect(screen.getByText('Rows')).toBeInTheDocument();
    });

    it('should render the items per page dropdown', () => {
        render(<Pagination {...defaultProps}/>);
        expect(screen.getByTestId('pagination-dropdown-items-per-page')).toBeInTheDocument();
    });

    it('should calculate lastPage correctly with different itemsPerPage', () => {
        render(<Pagination {...defaultProps} currentPage={4} itemsPerPage={25}/>);
        // With 100 items and 25 per page, last page is 4
        expect(screen.getByTestId('pagination-button-next-page')).toBeDisabled();
        expect(screen.getByTestId('pagination-button-last-page')).toBeDisabled();
    });

    it('should show correct range when totalOfItems is less than itemsPerPage', () => {
        render(<Pagination {...defaultProps} itemsPerPage={10} totalOfItems={3}/>);
        expect(screen.getByTestId('pagination-total-items')).toHaveTextContent('1-3 of 3');
    });
});

const renderPagination = (props = {}) => {
    const onPageChange = vi.fn();
    const onItemsPerPageChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Pagination
                currentPage={2}
                itemsPerPage={10}
                itemsPerPageOptions={[5, 10, 25]}
                totalOfItems={100}
                onItemsPerPageChange={onItemsPerPageChange}
                onPageChange={onPageChange}
                {...props}
            />
        </>,
    );
    return { onPageChange, onItemsPerPageChange };
};

const control = (name: string) => screen.getByTestId(`pagination-button-${name}`);

describe('Pagination keyboard', () => {
    it('reaches the enabled controls in order with Tab', async () => {
        renderPagination();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(control('first-page')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(control('previous-page')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('listbox')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(control('next-page')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(control('last-page')).toHaveFocus();
    });

    it('does not let disabled controls take focus', async () => {
        renderPagination({ currentPage: 1 });
        expect(control('first-page')).toBeDisabled();
        control('first-page').focus();
        expect(control('first-page')).not.toHaveFocus();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('listbox')).toHaveFocus();
    });

    it('activates the page controls with Enter', async () => {
        const { onPageChange } = renderPagination();
        control('first-page').focus();
        await userEvent.keyboard('{Enter}');
        control('previous-page').focus();
        await userEvent.keyboard('{Enter}');
        control('next-page').focus();
        await userEvent.keyboard('{Enter}');
        control('last-page').focus();
        await userEvent.keyboard('{Enter}');
        expect(onPageChange.mock.calls).toEqual([[1], [1], [3], [10]]);
    });

    it('activates the page controls with Space', async () => {
        const { onPageChange } = renderPagination();
        control('previous-page').focus();
        await userEvent.keyboard(' ');
        control('next-page').focus();
        await userEvent.keyboard(' ');
        expect(onPageChange.mock.calls).toEqual([[1], [3]]);
    });

    it('opens the items-per-page selector with Enter', async () => {
        renderPagination();
        screen.getByRole('listbox').focus();
        await userEvent.keyboard('{Enter}');
        expect(await screen.findByRole('option', { name: '25' })).toBeVisible();
    });

    it.fails('moves focus into the options when the selector is opened with the keyboard', async () => {
        renderPagination();
        screen.getByRole('listbox').focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('option', { name: '25' });
        await userEvent.keyboard('{ArrowDown}');
        expect(document.activeElement).toHaveAttribute('role', 'option');
    });

    it('selects a focused option with Enter', async () => {
        const { onItemsPerPageChange } = renderPagination();
        screen.getByRole('listbox').focus();
        await userEvent.keyboard('{Enter}');
        const option = await screen.findByRole('option', { name: '25' });
        option.focus();
        await userEvent.keyboard('{Enter}');
        expect(onItemsPerPageChange).toHaveBeenCalledWith(25);
    });
});
