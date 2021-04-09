import * as React from 'react';

export type LayoutContentProps = {
    /**
     * Slot for the header of the page
     */
    header?: React.ReactNode,

    /**
     * Slot for the content of the page
     */
    content?: React.ReactNode,

    /**
     * Define if the content is centered
     */
    isCentered?: boolean,

    /**
     * Define if the content has padding
     */
    hasPadding?: boolean,


    /**
     * Replace thee content by a loading
     */
    isLoading?: boolean,

    /**
     * Additional className
     */
     className?: string,
}
