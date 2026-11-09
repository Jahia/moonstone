import { render, screen } from '@testing-library/react';

import { SortIndicator, Table } from './index';
import { TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow } from './index';
import { TableCell } from './table-cells/TableCell';
import { Love } from '~/icons';

describe('Table', () => {
    it('should display', () => {
        render(<Table data-testid="moonstone-Table"/>);
        expect(screen.getByTestId('moonstone-Table')).toBeInTheDocument();
    });
});

describe('TableHead', () => {
    it('should display', () => {
        render(<TableHead data-testid="moonstone-TableHead"/>);
        expect(screen.getByTestId('moonstone-TableHead')).toBeInTheDocument();
    });
    it('should display children', () => {
        render(<TableHead><TableHeadCell data-testid="moonstone-TableHeadCell"/></TableHead>);
        expect(screen.getByTestId('moonstone-TableHeadCell')).toBeInTheDocument();
    });
    it('should be sticky', () => {
        render(<TableHead isSticky data-testid="moonstone-TableHead"/>);
        expect(screen.getByTestId('moonstone-TableHead')).toHaveClass('moonstone-tableHead-sticky');
    });
});

describe('TableBody', () => {
    it('should display', () => {
        render(<TableBody data-testid="moonstone-TableBody"/>);
        expect(screen.getByTestId('moonstone-TableBody')).toBeInTheDocument();
    });
    it('should display children', () => {
        render(<TableBody><TableBodyCell data-testid="moonstone-TableBodyCell"/></TableBody>);
        expect(screen.getByTestId('moonstone-TableBodyCell')).toBeInTheDocument();
    });
});

describe('TableRow', () => {
    it('should display', () => {
        render(<TableRow data-testid="moonstone-TableRow"/>);
        expect(screen.getByTestId('moonstone-TableRow')).toBeInTheDocument();
    });

    it('should have multiple lines', () => {
        render(<TableRow hasMultipleLines data-testid="moonstone-TableRow"/>);
        expect(screen.getByTestId('moonstone-TableRow')).toHaveClass('moonstone-TableRow-multipleLines');
    });

    it('should be selected', () => {
        render(<TableRow isSelected data-testid="moonstone-TableRow"/>);
        expect(screen.getByTestId('moonstone-TableRow')).toHaveClass('moonstone-TableRow-selected');
    });

    it('should be highlighted', () => {
        render(<TableRow isHighlighted data-testid="moonstone-TableRow"/>);
        expect(screen.getByTestId('moonstone-TableRow')).toHaveClass('moonstone-TableRow-highlighted');
    });
});

describe('TableCell', () => {
    it('should display iconStart', () => {
        render(<TableCell iconStart={<Love data-testid="moonstone-TableCell-iconStart"/>}/>);
        expect(screen.getByTestId('moonstone-TableCell-iconStart')).toBeInTheDocument();
    });

    it('should display iconEnd', () => {
        render(<TableCell iconEnd={<Love data-testid="moonstone-TableCell-iconEnd"/>}/>);
        expect(screen.getByTestId('moonstone-TableCell-iconEnd')).toBeInTheDocument();
    });
});

describe('TableHeadCell sort state', () => {
    const renderHeader = (cell: React.ReactElement) => render(<table><thead><tr>{cell}</tr></thead></table>);

    it('should expose the direction of a sorted SortIndicator child as aria-sort', () => {
        renderHeader(<TableHeadCell>Name<SortIndicator isSorted direction="ascending"/></TableHeadCell>);
        expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'ascending');
    });

    it('should expose the direction of a sorted SortIndicator in iconEnd as aria-sort', () => {
        renderHeader(<TableHeadCell iconEnd={<SortIndicator isSorted direction="descending"/>}>Name</TableHeadCell>);
        expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'descending');
    });

    it('should expose the direction of a sorted SortIndicator in iconStart as aria-sort', () => {
        renderHeader(<TableHeadCell iconStart={<SortIndicator isSorted direction="ascending"/>}>Name</TableHeadCell>);
        expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'ascending');
    });

    it('should expose descending, the default direction of SortIndicator, when the direction is missing', () => {
        renderHeader(<TableHeadCell>Name<SortIndicator isSorted/></TableHeadCell>);
        expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'descending');
    });

    it('should set no aria-sort when the SortIndicator is not sorted', () => {
        renderHeader(<TableHeadCell>Name<SortIndicator direction="ascending"/></TableHeadCell>);
        expect(screen.getByRole('columnheader')).not.toHaveAttribute('aria-sort');
    });

    it('should let the consumer override aria-sort', () => {
        renderHeader(<TableHeadCell aria-sort="ascending" iconEnd={<SortIndicator isSorted direction="descending"/>}>Name</TableHeadCell>);
        expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'ascending');
    });
});
