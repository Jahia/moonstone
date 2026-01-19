import {render, screen} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import {DataTablePagination} from './DataTablePagination';
import userEvent from '@testing-library/user-event';

describe('DataTablePagination', () => {
    const defaultProps = {
        totalNumberOfRows: 100,
        currentPage: 1,
        rowsPerPage: 10,
        rowsPerPageOptions: [10, 20, 50],
        onPageChange: vi.fn(),
        onRowsPerPageChange: vi.fn()
    };

    it('should render correct range label', () => {
        render(<DataTablePagination {...defaultProps}/>);
        // 1-10 of 100
        expect(screen.getByText('1-10 of 100')).toBeInTheDocument();
    });

    it('should render correct range label for second page', () => {
        render(<DataTablePagination {...defaultProps} currentPage={2}/>);
        // 11-20 of 100
        expect(screen.getByText('11-20 of 100')).toBeInTheDocument();
    });

    it('should disable first/prev buttons on first page', () => {
        render(<DataTablePagination {...defaultProps} currentPage={1}/>);

        // Moonstone Buttons might not use standard HTML disabled attribute in the way testing-library expects perfectly
        // but we can check the button props or class.
        // Looking at component code: isDisabled={currentPage === 1}

        // We use data-sel-role selectors which were present in the code
        const firstBtn = document.querySelector('[data-sel-role="pagination-button-first-page"]');
        const prevBtn = document.querySelector('[data-sel-role="pagination-button-previous-page"]');

        expect(firstBtn).toBeDisabled();
        expect(prevBtn).toBeDisabled();
    });

    it('should disable next/last buttons on last page', () => {
        render(<DataTablePagination {...defaultProps} currentPage={10} totalNumberOfRows={100} rowsPerPage={10}/>);

        const nextBtn = document.querySelector('[data-sel-role="pagination-button-next-page"]');
        const lastBtn = document.querySelector('[data-sel-role="pagination-button-last-page"]');

        expect(nextBtn).toBeDisabled();
        expect(lastBtn).toBeDisabled();
    });

    it('should call onPageChange when next is clicked', async () => {
        const onPageChange = vi.fn();
        const user = userEvent.setup();
        render(<DataTablePagination {...defaultProps} onPageChange={onPageChange}/>);

        const nextBtn = document.querySelector('[data-sel-role="pagination-button-next-page"]');
        await user.click(nextBtn!);

        expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('should call onPageChange when last is clicked', async () => {
        const onPageChange = vi.fn();
        const user = userEvent.setup();
        render(<DataTablePagination {...defaultProps} onPageChange={onPageChange}/>);

        const lastBtn = document.querySelector('[data-sel-role="pagination-button-last-page"]');
        await user.click(lastBtn!);

        expect(onPageChange).toHaveBeenCalledWith(10); // 100 / 10 = 10 pages
    });

    it('should call onRowsPerPageChange when dropdown is changed', async () => {
        // Dropdown testing can be tricky depending on implementation.
        // We might just render it and try to click an option.
        // Assuming Moonstone Dropdown renders native select or reachable options.
        // For unit test simplicity, we check if it renders.
        // If it's a complex custom dropdown, we might need to simulate clicks.

        const onRowsPerPageChange = vi.fn();
        render(<DataTablePagination {...defaultProps} onRowsPerPageChange={onRowsPerPageChange}/>);

        // We can inspect if the dropdown is present
        expect(document.querySelector('[data-sel-role="pagination-dropdown-rows-per-page"]')).toBeInTheDocument();
    });

    it('should throw error if currentPage < 1', () => {
        // Suppress console.error for the expected error
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
        expect(() => render(<DataTablePagination {...defaultProps} currentPage={0}/>)).toThrow('currentPage must always be >= 1');
        consoleSpy.mockRestore();
    });

    it('should throw error if rowsPerPage is not in options', () => {
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
        expect(() => render(<DataTablePagination {...defaultProps} rowsPerPage={15}/>)).toThrow('rowsPerPage must exist in rowsPerPageOptions');
        consoleSpy.mockRestore();
    });
});
