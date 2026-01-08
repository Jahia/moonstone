import React from 'react';
import {ChevronDown, ChevronRight} from '~/icons';

import type {TableStructuredCellProps} from './TableStructuredCell.types';
import {TableCell} from './TableCell';
import './TableCell.scss';

const leftMarginBuffer = 20; // Px

export const TableStructuredCell = React.forwardRef<HTMLTableCellElement, TableStructuredCellProps>(
    (
        {
            className,
            children,
            depth,
            isExpandable,
            isExpanded,
            onToggleExpand,
            style,
            ...props
        },
        ref
    ) => {
        const leftMarginIndentDepth = depth * 20; // Px

        const renderContent = () => {
            if (isExpandable) {
                return (
                    <span
                        className="moonstone-tableCellExpandable flexRow_nowrap alignCenter"
                        style={{marginLeft: `${leftMarginIndentDepth}px`}}
                        onClick={onToggleExpand}
                    >
                        {isExpanded ? (
                            <ChevronDown className="moonstone-marginRightNano"/>
                        ) : (
                            <ChevronRight className="moonstone-marginRightNano"/>
                        )}
                        {children}
                    </span>
                );
            }

            return (
                <span style={{marginLeft: `${leftMarginIndentDepth + leftMarginBuffer}px`}}>
                    {children}
                </span>
            );
        };

        return (
            <TableCell
                ref={ref}
                className={className}
                style={style}
                {...props}
            >
                {renderContent()}
            </TableCell>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';
