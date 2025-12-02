import {TableCellWrapper} from './TableCellWrapper';
import type {CellContent} from '../types/DataTableColumn.types';

export const TableCellText = ({value}: { value: string | CellContent | null | undefined }) => {
    if (typeof value === 'object' && value !== null && 'label' in value) {
        const content = value as CellContent;
        return (
            <TableCellWrapper>
                <div className="moonstone-cell-text-container">
                    {content.iconStart && (
                        <span className="moonstone-icon-start">{content.iconStart}</span>
                    )}

                    <div className="flexCol">
                        <span className="moonstone-text-primary">{content.label}</span>
                        {content.subLabel && (
                            <span className="moonstone-text-secondary">{content.subLabel}</span>
                        )}
                    </div>

                    {content.iconEnd && (
                        <span className="moonstone-icon-end">{content.iconEnd}</span>
                    )}
                </div>
            </TableCellWrapper>
        );
    }

    return (
        <TableCellWrapper>
            <span className="moonstone-text-primary">{String(value ?? '')}</span>
        </TableCellWrapper>
    );
};
