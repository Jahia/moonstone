import React from 'react';

export type ExpansionContainerProps = {
    /**
     * Whether the row can be expanded, i.e., whether it has sub-rows (exposed by react-table)
     */
    canExpand?: boolean;

    /**
     * Whether the row is expanded to show its children or not (exposed by react-table)
     */
    isExpanded?: boolean;

    /**
     * Nesting depth of the row within the data (exposed by react-table)
     */
    depth?: number;

    /**
     * Additional classname(s)
     */
    className?: string;

    /**
     * Children elements of the component
     */
    children?: React.ReactNode;

    /**
     * Props to expand/collapse the row (exposed by react-table)
     */
    getToggleRowExpandedProps: ({}) => any;
};
