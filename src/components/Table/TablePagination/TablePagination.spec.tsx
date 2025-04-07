import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TablePagination} from './TablePagination';

const requiredProps = {
    totalNumberOfRows: 33,
    currentPage: 1,
    onPageChange: () => {},
    onRowsPerPageChange: () => {}
};

describe('TablePagination', () => {
    const TOTAL_BUTTONS = 4;
    const BEGINNING_BUTTON = 0;
    const PREV_PAGE_BUTTON = 1;
    const NEXT_PAGE_BUTTON = 2;
    const END_BUTTON = 3;

    it('should display', () => {
        render(
            <TablePagination {...requiredProps} data-testid="table-pagination"/>
        );
        expect(screen.getByTestId('table-pagination')).toBeInTheDocument();
    });

    it('should error on invalid currentPage', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
        await waitFor(() => expect(
            () => render(<TablePagination {...requiredProps} currentPage={0}/>))
            .toThrow('currentPage must always be >= 1')
        );
        vi.restoreAllMocks();
    });

    it('should error on invalid rowsPerPage', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
        await waitFor(() => expect(
            () => render(<TablePagination {...requiredProps} rowsPerPage={35}/>))
            .toThrow('rowsPerPage must exist in rowsPerPageOptions')
        );
        vi.restoreAllMocks();
    });

    it('should be correctly displayed for beginning of rows', () => {
        const {container} = render(
            <TablePagination
                {...requiredProps}
                data-testid="table-pagination"
                rowsPerPage={5}
            />
        );
        expect(screen.getByText('1-5 of 33')).toBeDefined();
        const buttons = container.querySelectorAll('button');
        expect(buttons.length).toBe(TOTAL_BUTTONS);
        expect(buttons[BEGINNING_BUTTON].disabled).toBeTruthy();
        expect(buttons[PREV_PAGE_BUTTON].disabled).toBeTruthy();
        expect(buttons[NEXT_PAGE_BUTTON].disabled).toBeFalsy();
        expect(buttons[END_BUTTON].disabled).toBeFalsy();
    });

    it('should be correctly displayed for middle of rows', () => {
        const {container} = render(
            <TablePagination
                {...requiredProps}
                data-testid="table-pagination"
                currentPage={3}
                rowsPerPage={5}
            />
        );
        expect(screen.getByText('11-15 of 33')).toBeDefined();
        const buttons = container.querySelectorAll('button');
        expect(buttons.length).toBe(TOTAL_BUTTONS);
        expect(buttons[BEGINNING_BUTTON].disabled).toBeFalsy();
        expect(buttons[PREV_PAGE_BUTTON].disabled).toBeFalsy();
        expect(buttons[NEXT_PAGE_BUTTON].disabled).toBeFalsy();
        expect(buttons[END_BUTTON].disabled).toBeFalsy();
    });

    it('should be correctly displayed for end of rows', () => {
        const {container} = render(
            <TablePagination
                {...requiredProps}
                data-testid="table-pagination"
                currentPage={7}
                rowsPerPage={5}
            />
        );
        expect(screen.getByText('31-33 of 33')).toBeDefined();
        const buttons = container.querySelectorAll('button');
        expect(buttons.length).toBe(TOTAL_BUTTONS);
        expect(buttons[BEGINNING_BUTTON].disabled).toBeFalsy();
        expect(buttons[PREV_PAGE_BUTTON].disabled).toBeFalsy();
        expect(buttons[NEXT_PAGE_BUTTON].disabled).toBeTruthy();
        expect(buttons[END_BUTTON].disabled).toBeTruthy();
    });

    it('should have data-sel-role tags', () => {
        const {container} = render(
            <TablePagination
                {...requiredProps}
                data-testid="table-pagination"
                currentPage={4}
                rowsPerPage={10}
            />
        );

        const testDataRoleTags = (tag:string) => {
            const elem = container.querySelector(`[data-sel-role="${tag}"]`);
            expect(elem).toBeInTheDocument();
        };

        testDataRoleTags('table-pagination-dropdown-rows-per-page');
        testDataRoleTags('table-pagination-total-rows');
        testDataRoleTags('table-pagination-button-first-page');
        testDataRoleTags('table-pagination-button-next-page');
        testDataRoleTags('table-pagination-button-previous-page');
        testDataRoleTags('table-pagination-button-last-page');
    });

    it('should call onPageChange when first page button is clicked', async () => {
        const user = userEvent.setup();
        const onPageChange = vi.fn();
        const {container} = render(
            <TablePagination
                {...requiredProps}
                data-testid="table-pagination"
                currentPage={3}
                onPageChange={onPageChange}
            />
        );
        await user.click(
            container.querySelector(
                '[data-sel-role="table-pagination-button-first-page"]'
            )
        );
        expect(onPageChange).toHaveBeenCalled();
    });

    it('should call onPageChange when previous page button is clicked', async () => {
        const user = userEvent.setup();
        const onPageChange = vi.fn();
        const {container} = render(
            <TablePagination
                {...requiredProps}
                data-testid="table-pagination"
                currentPage={3}
                onPageChange={onPageChange}
            />
        );
        await user.click(
            container.querySelector(
                '[data-sel-role="table-pagination-button-previous-page"]'
            )
        );
        expect(onPageChange).toHaveBeenCalled();
    });

    it('should call onPageChange when next page button is clicked', async () => {
        const user = userEvent.setup();
        const onPageChange = vi.fn();
        const {container} = render(
            <TablePagination
                {...requiredProps}
                data-testid="table-pagination"
                currentPage={3}
                onPageChange={onPageChange}
            />
        );
        await user.click(
            container.querySelector(
                '[data-sel-role="table-pagination-button-next-page"]'
            )
        );
        expect(onPageChange).toHaveBeenCalled();
    });

    it('should call onPageChange when last page button is clicked', async () => {
        const user = userEvent.setup();
        const onPageChange = vi.fn();
        const {container} = render(
            <TablePagination
                {...requiredProps}
                data-testid="table-pagination"
                currentPage={3}
                onPageChange={onPageChange}
            />
        );
        await user.click(
            container.querySelector(
                '[data-sel-role="table-pagination-button-last-page"]'
            )
        );
        expect(onPageChange).toHaveBeenCalled();
    });
});
