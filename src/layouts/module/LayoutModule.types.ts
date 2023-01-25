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
     * The HTML tag used to render the content node
     */
     component?: string;

    /**
     * Replace the content with a loader
     */
     isLoading?: boolean;
}
