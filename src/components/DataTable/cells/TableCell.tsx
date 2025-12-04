import React from 'react';
import clsx from 'clsx';

import type { TableCellProps } from './TableCell.types';
import type { CellContent } from '../DataTable.types';
import './TableCell.scss';

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    { className, children, textAlign, style, width, value, ...props },
    ref
) => {
    const renderContent = () => {
        if (children) {
            return children;
        }

        if (value === null || value === undefined) {
            return '-';
        }

        if (value instanceof Date) {
            return value.toLocaleDateString();
        }

        if (typeof value === 'number') {
            return value.toLocaleString();
        }

        if (typeof value === 'object' && value !== null && 'label' in value) {
            const content = value as CellContent;
            return (
                <>
                    {content.iconStart && (
                        <span className="moonstone-icon-start">{content.iconStart}</span>
                    )}
                    <div className="flexCol">
                        <span className="moonstone-text-primary">{content.label}</span>
                    </div>
                    {content.iconEnd && <> {content.iconEnd} </>}
                </>
            );
        }

        if (typeof value === 'object' && value !== null && 'value' in value) {
            const content = value as { value: string; icon?: React.ReactElement };
            return (
                <>
                    {content.icon && <> {content.icon} </>}
                    <> {content.value} </>
                </>
            );
        }

        return <>{String(value)}</>;
    };

    return (
        <td
            ref={ref}
            className={clsx('moonstone-TableCell', className)}

            {...props}
        >
            {renderContent()}
        </td>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
