import {ArrowDown, ArrowUp} from '~/icons';
import clsx from 'clsx';
import './TableHeadCell.scss';
import {TableCell} from './TableCell';
import type {TableHeadCellProps} from './TableHeadCell.types';

export const TableHeadCell = ({
    width,
    align = 'left',
    verticalAlign = 'middle',
    className,
    children,
    sorting,
    onClick,
    enableResize,
    resizeHandler,
    onResizeReset,
    isResizing,
    resizeHeaderRef,
    resizeHandleLabel,
    ...props
}: TableHeadCellProps) => {
    const isSortable = Boolean(sorting);
    const isActive = sorting?.isActive ?? false;

    const SortIcon = isSortable ?
        (sorting?.direction === 'descending' ? ArrowDown : ArrowUp) :
        null;

    const ariaSort = isSortable && isActive ? sorting?.direction : undefined;

    return (
        <TableCell
            {...props}
            ref={resizeHeaderRef}
            component="th"
            width={width}
            align={align}
            verticalAlign={verticalAlign}
            className={clsx(
                'moonstone-tableHeadCell',
                enableResize && 'moonstone-tableHeadCell_resizable',
                isResizing && 'moonstone-tableHeadCell_resizing',
                className
            )}
            aria-sort={ariaSort}
            onClick={onClick}
        >
            <span className="flexRow_nowrap alignCenter">
                {children}
                {SortIcon && (
                    <SortIcon
                        aria-hidden="true"
                        className={clsx(
                            'moonstone-tableHeadCell_sort',
                            isActive && 'moonstone-tableHeadCell_sortActive'
                        )}
                    />
                )}
            </span>
            {enableResize && resizeHandler && (
                <div
                    data-resizer
                    className="moonstone-tableHeadCell_resizeHandle"
                    role="separator"
                    aria-label={resizeHandleLabel}
                    onMouseDown={resizeHandler}
                    onTouchStart={resizeHandler}
                    onDoubleClick={onResizeReset}
                />
            )}
        </TableCell>
    );
};

TableHeadCell.displayName = 'TableHeadCell';

