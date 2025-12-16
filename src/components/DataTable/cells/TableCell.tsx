import React from 'react';
import clsx from 'clsx';
import {IconTextIcon, Typography} from '~/components';
import {ChevronDown, ChevronRight} from '~/icons';

import type {TableCellProps} from './TableCell.types';
import {capitalize} from '~/utils/helpers';
import './TableCell.scss';

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {
        className,
        children,
        textAlign = 'left',
        verticalAlign = 'center',
        iconStart,
        iconEnd,
        isExpandableColumn,
        row,
        width,
        isScrollable,
        component = 'td',
        ...props
    },
    ref
) => {
    const leftMarginBuffer = 20; // Px
    const leftMarginIndentDepth = (row?.depth ?? 0) * 20; // Px
    const scrollableClass = isScrollable ? 'moonstone-tableCellContent' : '';

    const renderCellContent = () => (
        <IconTextIcon component="div" iconStart={iconStart} iconEnd={iconEnd} typographyProps={{className: clsx(scrollableClass, 'flexFluid')}}>
            {children ?? '-'}
        </IconTextIcon>
    );

    const renderExpandableContent = () => {
        if (row?.getCanExpand?.()) {
            return (
                <div
                    style={{marginLeft: `${leftMarginIndentDepth}px`, display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                    onClick={row.getToggleExpandedHandler()}
                >
                    {row.getIsExpanded() ?
                        <ChevronDown className="moonstone-marginRightNano"/> :
                        <ChevronRight className="moonstone-marginRightNano"/>}
                    {renderCellContent()}
                </div>
            );
        }

        return (
            <div style={{marginLeft: `${leftMarginIndentDepth + leftMarginBuffer}px`}}>
                {renderCellContent()}
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
            style={{width: width}}
            {...props}
        >
            {isExpandableColumn ? renderExpandableContent() : renderCellContent()}
        </Typography>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
