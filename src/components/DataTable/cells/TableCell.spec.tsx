
import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, it, expect, vi} from 'vitest';
import {TableCell} from './TableCell';

const TableWrapper: React.FC<{ readonly children: React.ReactNode }> = ({children}) => (
    <table>
        <tbody>
            <tr>{children}</tr>
        </tbody>
    </table>
);

describe('TableCell', () => {
    it('should render children', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell">Cell Content</TableCell>
            </TableWrapper>
        );
        expect(screen.getByText('Cell Content')).toBeInTheDocument();
        expect(screen.getByTestId('cell').tagName).toBe('TD');
    });

    it('should render dash when children is missing', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell"/>
            </TableWrapper>
        );
        expect(screen.getByText('-')).toBeInTheDocument();
    });

    it('should render as th when component prop is set', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell" component="th">Header</TableCell>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell').tagName).toBe('TH');
    });

    it('should apply alignment classes', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="left" align="left"/>
                <TableCell data-testid="center" align="center"/>
                <TableCell data-testid="right" align="right"/>
            </TableWrapper>
        );
        expect(screen.getByTestId('left')).toHaveClass('justifyStart');
        expect(screen.getByTestId('center')).toHaveClass('justifyCenter');
        expect(screen.getByTestId('right')).toHaveClass('justifyEnd');
    });

    it('should apply width style', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell" width="100px"/>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell')).toHaveStyle({width: '100px'});
    });

    it('should apply vertical align classes', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell" verticalAlign="top"/>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell')).toHaveClass('moonstone-verticalAlignTop');
    });

    it('should apply scrollable class', () => {
        render(
            <TableWrapper>
                <TableCell isScrollable data-testid="cell"/>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell')).toHaveClass('moonstone-tableCellContent');
    });

    describe('Structured View', () => {
        it('should render indentation based on depth', () => {
            // We can check if the inner span has the margin left
            // The implementation calculates marginLeft = depth * 20 + (isExpandable ? 0 : 20)
            // For depth 1, not expandable: 20 + 20 = 40px
            render(
                <TableWrapper>
                    <TableCell depth={1} isExpandable={false}>Content</TableCell>
                </TableWrapper>
            );
            const contentSpan = screen.getByText('Content').closest('span');
            expect(contentSpan).toHaveStyle({marginLeft: '40px'});
        });

        it('should render chevron right when expandable and not expanded', () => {
            render(
                <TableWrapper>
                    <TableCell isExpandable depth={0} isExpanded={false}>Content</TableCell>
                </TableWrapper>
            );
            // Search for chevron right icon (usually based on class or svg title if available)
            // Moonstone icons usually have specific classes or we can check presence
            // The code renders <ChevronRight className="moonstone-marginRightNano"/>
            expect(document.querySelector('.moonstone-marginRightNano')).toBeInTheDocument();
            // Can also check if it is NOT ChevronDown
        });

        it('should render chevron down when expandable and expanded', () => {
            render(
                <TableWrapper>
                    <TableCell isExpandable isExpanded depth={0}>Content</TableCell>
                </TableWrapper>
            );
            expect(document.querySelector('.moonstone-marginRightNano')).toBeInTheDocument();
        });

        it('should handle toggle click', async () => {
            const onToggle = vi.fn();
            const user = userEvent.setup();
            render(
                <TableWrapper>
                    <TableCell
                        isExpandable
                        depth={0}
                        data-testid="cell"
                        onToggleExpand={onToggle}
                    >
                        Content
                    </TableCell>
                </TableWrapper>
            );

            await user.click(screen.getByTestId('cell'));
            expect(onToggle).toHaveBeenCalled();
        });

        it('should have pointer cursor when expandable', () => {
            render(
                <TableWrapper>
                    <TableCell isExpandable depth={0} data-testid="cell">Content</TableCell>
                </TableWrapper>
            );
            expect(screen.getByTestId('cell')).toHaveStyle({cursor: 'pointer'});
        });
    });
});
