import * as React from 'react';

export type LayoutModuleProps = {
    /**
     * Module's navigation (SecondaryNavigation)
     */
    navigation?: React.ReactNode;

    // /**
    //  * The header element of the page
    //  */
    // header?: React.ReactElement,

    /**
     * Content of the page
     */
     content?: React.ReactNode;

    /**
     * The HTML markup used for the content node
     */
     component?: string;

    // /**
    //  * Define if the content is centered
    //  */
    // isCentered?: boolean;
    // /**
    //  * Define if the content has padding
    //  */
    //  hasPadding?: boolean;
    /**
     * Replace the content by a loader
     */
     isLoading?: boolean;
}
