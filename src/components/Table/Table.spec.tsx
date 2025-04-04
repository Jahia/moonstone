import React from 'react';
import {render, screen} from '@testing-library/react';
import {Table} from './index';
import {TableHead, TableHeadCell, TableBody, TableBodyCell, TableRow} from './index';
import {TableCell} from './table-cells/TableCell';
import {Love} from '../../icons/components';

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
});

describe('TableRow', () => {
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
