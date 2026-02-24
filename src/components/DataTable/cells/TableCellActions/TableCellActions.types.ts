import React from 'react';

/**
 * Props for TableCellActions - a cell dedicated to row actions.
 * Aligned to the right, supports display on hover or always visible.
 */
export type TableCellActionsProps = {
    /**
     * When to show the actions: 'hover' (visible on row hover/focus) or 'always'.
     * @default 'hover'
     */
    displayMode?: 'always' | 'hover';

    /**
     * Action buttons or content to render.
     * Renders nothing when empty (no "-" placeholder).
     */
    children?: React.ReactNode;
};
