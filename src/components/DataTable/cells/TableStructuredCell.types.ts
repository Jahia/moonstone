import type {TableCellProps} from './TableCell.types';

export type TableStructuredCellProps = TableCellProps & {
    /**
     * Depth level in the tree hierarchy (0 = root level)
     * Used for indentation calculation
     */
    depth: number;

    /**
     * Whether this row can be expanded (has children)
     */
    isExpandable: boolean;

    /**
     * Whether this row is currently expanded
     */
    isExpanded: boolean;

    /**
     * Callback fired when the expand/collapse toggle is clicked
     */
    onToggleExpand: () => void;
};
