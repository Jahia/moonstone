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

    it('should render nothing when children is missing', () => {
        const {container} = render(
            <TableWrapper>
                <TableStructuredCell depth={0} data-testid="empty-cell"/>
            </TableWrapper>
        );
        // Component returns null when no children, so tr should be empty
        expect(container.querySelector('tr')?.children.length).toBe(0);
    });

    describe('Indentation', () => {
        it('should apply correct indentation for depth 0 (aligns with header)', () => {
            // Depth=0, non-expandable: 0*20 = 0px - aligns with column header
            render(
                <TableWrapper>
                    <TableStructuredCell depth={0}>Root</TableStructuredCell>
                </TableWrapper>
            );
            expect(screen.getByText('Root').closest('[style]')).toHaveStyle({marginLeft: '0px'});
        });

        it('should apply correct indentation for depth 2', () => {
            // Depth=2, non-expandable: 2*20 = 40px
            render(
                <TableWrapper>
                    <TableStructuredCell depth={2}>Nested</TableStructuredCell>
                </TableWrapper>
            );
            expect(screen.getByText('Nested').closest('[style]')).toHaveStyle({marginLeft: '40px'});
        });

        it('should not add buffer for expandable cells', () => {
            // Depth=1, expandable: 1*20 = 20px (no buffer)
            render(
                <TableWrapper>
                    <TableStructuredCell isExpandable depth={1}>Parent</TableStructuredCell>
                </TableWrapper>
            );
            expect(screen.getByText('Parent').closest('[style]')).toHaveStyle({marginLeft: '20px'});
        });
    });

    describe('Expand/Collapse', () => {
        it('should call onToggleExpand when clicked', async () => {
            const onToggle = vi.fn();
            const user = userEvent.setup();
            render(
                <TableWrapper>
                    <TableStructuredCell depth={0} onToggleExpand={onToggle}>
                        Clickable
                    </TableStructuredCell>
                </TableWrapper>
            );

            await user.click(screen.getByText('Clickable'));
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
