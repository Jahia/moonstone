import React from 'react';
import clsx from 'clsx';

import type {TableCellProps} from './TableCell.types';
import {IconTextIcon, Typography} from '~/components';
import {ChevronDown, ChevronRight} from '~/icons';
import {capitalize} from '~/utils/helpers';
import {TableCell} from './TableCell';
import styles from './TableCell.module.scss';
import {alignment, layout} from '~/globals/css-utils.js';

const TableBodyCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {
        component = 'td',
        textAlign = 'left',
        verticalAlign = 'middle',
        className,
        iconStart,
        iconEnd,
        isExpandableColumn,
        width,
        row,
        children,
        isScrollable,
        ...props
    }, ref) => {
    const leftMarginBuffer = 20; // Px
    const leftMarginIndentDepth = row?.depth * 20; // Px
    const scrollableClass = isScrollable ? ['moonstone-tableCellContent', styles['moonstone-tableCellContent']] : '';

    const renderCellContent = () => (
        <IconTextIcon component="div" iconStart={iconStart} iconEnd={iconEnd} typographyProps={{className: clsx(scrollableClass, 'flexFluid', layout.flexFluid)}}>
            {children}
        </IconTextIcon>
    );

    const renderTableCell = () => {
        // These are cells that are in the expandable row (canExpand) and it is the column in
        // which the cells show the chevron icon to expand and collapse sub-rows (isExpandableColumn)
        if (isExpandableColumn && row?.canExpand) {
            return (
                <TableCell ref={ref} {...row?.getToggleRowExpandedProps({style: {marginLeft: `${leftMarginIndentDepth}px`}})}>
                    {row?.isExpanded ?
                        <ChevronDown className={clsx('moonstone-marginRightNano', styles['moonstone-marginRightNano'])}/> :
                        <ChevronRight className={clsx('moonstone-marginRightNano', styles['moonstone-marginRightNano'])}/>}
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
                <TableCell ref={ref} style={{marginLeft: `${leftMarginIndentDepth + leftMarginBuffer}px`}}>
                    {renderCellContent()}
                </TableCell>
            );
        }

        // These are just the normal cells in the other columns which don't display anything with
        // relation to the row expansion feature
        return <TableCell ref={ref}>{renderCellContent()}</TableCell>;
    };

    return (
        <Typography
            className={clsx(
                ['moonstone-tableBodyCell', styles['moonstone-tableBodyCell']],
                [`textAlign${capitalize(textAlign)}`, alignment[`textAlign${capitalize(textAlign)}`]],
                [`verticalAlign${capitalize(verticalAlign)}`, alignment[`verticalAlign${capitalize(verticalAlign)}`]],
                typeof width === 'undefined' && ['flexFluid', layout.flexFluid],
                className
            )}
            component={component}
            variant="body"
            style={{width: width}}
            {...props}
        >
            {renderTableCell()}
        </Typography>
    );
};

export const TableBodyCell = React.forwardRef(TableBodyCellForwardRef);

TableBodyCell.displayName = 'TableBodyCell';
