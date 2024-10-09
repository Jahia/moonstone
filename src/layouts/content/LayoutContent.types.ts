import * as React from 'react';

export type LayoutContentProps = {
    /**
     * Header of the page
     */
    header?: React.ReactNode,

    /**
     * Content of the page
     */
    content: React.ReactNode,

    /**
     * Define if the content is centered
     */
    isCentered?: boolean,

    /**
     * Replace the content by a loading
     */
    isLoading?: boolean,

    /**
     * Define if the layout has padding
     */
    hasPadding?: boolean

    /**
     * Additional classname
     */
     className?: string,
}
