import * as React from 'react';

export type LayoutModuleProps = {
    /**
     * Slot for the module's navigation
     */
    navigation?: React.ReactNode;

    /**
     * Slot for the module's content
     */
    content?: React.ReactNode;

    /**
     * Replace the content by a loader
     */
    isLoading?: boolean;

    /**
     * The HTML markup used for the content node
     */
    component?: string;
}

