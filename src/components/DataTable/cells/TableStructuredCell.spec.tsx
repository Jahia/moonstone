import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, it, expect, vi} from 'vitest';
import {TableStructuredCell} from './TableStructuredCell';

const TableWrapper: React.FC<{ readonly children: React.ReactNode }> = ({children}) => (
    <table>
        <tbody>
            <tr>{children}</tr>
        </tbody>
    </table>
);

describe('TableStructuredCell', () => {
    it('should render children', () => {
        render(
            <TableWrapper>
                <TableStructuredCell depth={0}>Content</TableStructuredCell>
            </TableWrapper>
        );
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should render dash when children is missing', () => {
        render(
            <TableWrapper>
                <TableStructuredCell depth={0}/>
            </TableWrapper>
        );
        expect(screen.getByText('-')).toBeInTheDocument();
    });

    describe('Indentation', () => {
        it('should apply correct indentation for depth 0', () => {
            // Depth=0, non-expandable: 0*20 + 20 (buffer) = 20px
            render(
                <TableWrapper>
                    <TableStructuredCell depth={0}>Root</TableStructuredCell>
                </TableWrapper>
            );
            expect(screen.getByText('Root').closest('span')).toHaveStyle({marginLeft: '20px'});
        });

        it('should apply correct indentation for depth 2', () => {
            // Depth=2, non-expandable: 2*20 + 20 (buffer) = 60px
            render(
                <TableWrapper>
                    <TableStructuredCell depth={2}>Nested</TableStructuredCell>
                </TableWrapper>
            );
            expect(screen.getByText('Nested').closest('span')).toHaveStyle({marginLeft: '60px'});
        });

        it('should not add buffer for expandable cells', () => {
            // Depth=1, expandable: 1*20 = 20px (no buffer)
            render(
                <TableWrapper>
                    <TableStructuredCell isExpandable depth={1}>Parent</TableStructuredCell>
                </TableWrapper>
            );
            expect(screen.getByText('Parent').closest('span')).toHaveStyle({marginLeft: '20px'});
        });
    });

    describe('Expand/Collapse', () => {
        it('should call onToggleExpand when clicked', async () => {
            const onToggle = vi.fn();
            const user = userEvent.setup();
            render(
                <TableWrapper>
                    <TableStructuredCell isExpandable depth={0} onToggleExpand={onToggle}>
                        Clickable
                    </TableStructuredCell>
                </TableWrapper>
            );

            await user.click(document.querySelector('.moonstone-tableCellExpandable')!);
            expect(onToggle).toHaveBeenCalledTimes(1);
        });
    });

    it('should forward ref', () => {
        const ref = React.createRef<HTMLTableCellElement>();
        render(
            <TableWrapper>
                <TableStructuredCell ref={ref} depth={0}>Content</TableStructuredCell>
            </TableWrapper>
        );
        expect(ref.current?.tagName).toBe('TD');
    });

    it('should add custom className', () => {
        render(
            <TableWrapper>
                <TableStructuredCell depth={0} className="custom" data-testid="cell">
                    Content
                </TableStructuredCell>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell')).toHaveClass('custom');
    });
});
