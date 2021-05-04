import React from 'react';

export type TableRowProps = {
    /**
     * Any additional class names to apply
     */
    className?: React.ReactNode;

    /**
     * What type of spacing the cell should have
     */
    height?: 'regular' | 'relaxed';

    /**
     * If true, then the row is selected
     */
    isSelected?: boolean;
    
    /**
     * The children elements
     */
    children?: React.ReactNode;
};
