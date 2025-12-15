import React from 'react';
import type { CellContent } from '../DataTable.types';

type CellValue = string | number | Date | CellContent | { value: string; icon?: React.ReactElement } | null | undefined;

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

    // CellContent: { label, iconStart?, iconEnd? }
    if (typeof value === 'object' && value !== null && 'label' in value) {
        const content = value as CellContent;
        // Return early if no content to render
        if (!content.label && !content.iconStart && !content.iconEnd) {
            return '-';
        }

        return (
            <>
                {content.iconStart && (
                    <span className="moonstone-icon-start">{content.iconStart}</span>
                )}
                {content.label && (
                    <div className="flexCol">
                        <span className="moonstone-text-primary">{content.label}</span>
                    </div>
                )}
                {content.iconEnd && <> {content.iconEnd} </>}
            </>
        );
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

    return <>{String(value)}</>;
};
