import * as React from 'react';

export type LayoutModuleProps = {
    /**
     * Navigation of the module (SecondaryNavigation)
     */
     navigation?: React.ReactNode;

    /**
     * Content of the page
     */
     content?: React.ReactNode;

    /**
     * The HTML markup used for the content node
     */
     component?: string;

    /**
     * Replace the content by a loader
     */
     isLoading?: boolean;
}
