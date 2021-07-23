import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './TableCell.types';
import {IconTextIcon, Typography} from '~/components';
import {ChevronRight, ChevronDown} from '~/icons';
import {capitalize} from '~/utils/helpers';
import {TableCell} from './TableCell';

export const TableBodyCell: React.FC<TableCellProps> = ({
    component = 'td',
    textAlign = 'left',
    verticalAlign = 'center',
    className,
    iconStart,
    iconEnd,
    isExpandableColumn,
    width,
    row,
    cell,
    children,
    ...props
}) => {
    const leftMarginBuffer = 20; // px
    const leftMarginIndentDepth = row?.depth * 20; // px

    // TODO: When no iconStart is set we should just render children to avoid too nested HTML elements
    // TODO: Add iconEnd somewhere or remove it from the props, it seems we never use it
    const renderCellContent = () => (
        <IconTextIcon component="div" iconStart={iconStart}>
            {children}
        </IconTextIcon>
    );


    const renderTableCell = () => {
        // These are cells that are in the expandable row (canExpand) and it is the column in
        // which the cells show the chevron icon to expand and collapse sub-rows (isExpandableColumn)
        if (isExpandableColumn && row?.canExpand) {
            return (
                <TableCell {...row?.getToggleRowExpandedProps({style: {marginLeft: `${leftMarginIndentDepth}px`}})}
                >
                    {row?.isExpanded
                        ? <ChevronDown className="moonstone-marginRightNano"/>
                        : <ChevronRight className="moonstone-marginRightNano"/>
                    }
                    {renderCellContent()}
                </TableCell>
            );
        }

        // These are cells which are in the expandable column (isExpandableColumn), but themselves
        // do now have sub-rows. Therefore, they need to have the appropriate nested indentation,
        // but do not have the chevron to expand/collapse rows underneath them.
        // Also, a buffer of 20px is added so that they are aligned with the cells that do have
        // the chevron icons for expand/collapse
        if (isExpandableColumn && !row?.canExpand) {
            return (
                <TableCell style={{marginLeft: `${leftMarginIndentDepth + leftMarginBuffer}px`}}>
                    {renderCellContent()}
                </TableCell>
            );
        }

        // These are just the normal cells in the other columns which don't display anything with
        // relation to the row expansion feature
        return <TableCell>{renderCellContent()}</TableCell>;
    };

    return (
        <Typography
            className={clsx(
                'textAlign' + capitalize(textAlign),
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                {'flexFluid': typeof width === 'undefined'},
                className
            )}
            component={component}
            variant="body"
            style={{width}}
            {...props}
        >
            {renderTableCell()}
        </Typography>
    );
};

TableBodyCell.displayName = 'TableBodyCell';
