import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {ChevronDown, ChevronRight} from '~/icons';

import type {TableStructuredCellProps} from './TableStructuredCell.types';
import {capitalize} from '~/utils/helpers';
import './TableCell.scss';

const leftMarginBuffer = 20; // Px

export const TableStructuredCell = React.forwardRef<HTMLTableCellElement, TableStructuredCellProps>(
    (
        {
            className,
            children,
            textAlign = 'left',
            verticalAlign = 'center',
            width,
            isScrollable,
            component = 'td',
            depth,
            isExpandable,
            isExpanded,
            onToggleExpand,
            ...props
        },
        ref
    ) => {
        const leftMarginIndentDepth = depth * 20; // Px
        const scrollableClass = isScrollable ? 'moonstone-tableCellContent' : '';

        const renderContent = () => {
            if (isExpandable) {
                return (
                    <div
                        className="moonstone-tableCellExpandable flexRow_nowrap alignCenter"
                        style={{marginLeft: `${leftMarginIndentDepth}px`}}
                        onClick={onToggleExpand}
                    >
                        {isExpanded ? (
                            <ChevronDown className="moonstone-marginRightNano"/>
                        ) : (
                            <ChevronRight className="moonstone-marginRightNano"/>
                        )}
                        <span className={clsx('moonstone-tableCellContentWrapper', scrollableClass)}>
                            {children ?? '-'}
                        </span>
                    </div>
                );
            }

            return (
                <div style={{marginLeft: `${leftMarginIndentDepth + leftMarginBuffer}px`}}>
                    <span className={clsx('moonstone-tableCellContentWrapper', scrollableClass)}>
                        {children ?? '-'}
                    </span>
                </div>
            );
        };

        return (
            <Typography
                ref={ref}
                component={component}
                variant="body"
                className={clsx(
                    'moonstone-TableCell',
                    'textAlign' + capitalize(textAlign),
                    'moonstone-verticalAlign' + capitalize(verticalAlign),
                    {flexFluid: typeof width === 'undefined'},
                    className
                )}
                style={{width}}
                {...props}
            >
                {renderContent()}
            </Typography>
        );
    }
);

TableStructuredCell.displayName = 'TableStructuredCell';
