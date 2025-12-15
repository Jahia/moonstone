import React from 'react';

type CellValue = string | number | Date | { value: string; icon?: React.ReactElement } | null | undefined;

/**
 * Renders cell content based on value type.
 * Separates formatting logic from TableCell component for better maintainability.
 */
export const renderCellContent = (value: CellValue): React.ReactNode => {
    if (value === null || value === undefined) {
        return '-';
    }

    if (value instanceof Date) {
        return value.toLocaleDateString();
    }

    if (typeof value === 'number') {
        return value.toLocaleString();
    }

    // Simple value with icon: { value, icon? }
    if (typeof value === 'object' && value !== null && 'value' in value) {
        const content = value as { value: string; icon?: React.ReactElement };
        return (
            <>
                {content.icon && <> {content.icon} </>}
                <> {content.value} </>
            </>
        );
    }

    return <>{value}</>;
};
