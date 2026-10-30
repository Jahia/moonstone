import React from 'react';

export type LayoutContentProps = Omit<React.ComponentPropsWithRef<'div'>, 'className'> & {
    /**
     * Header of the page
     */
    header?: React.ReactNode;

    /**
     * Content of the page
     *
     * @deprecated Use `children` instead.
     */
    content?: React.ReactNode;

    /**
     * Define if the content is centered
     */
    isCentered?: boolean;

    /**
     * Replace the content by a loading
     */
    isLoading?: boolean;

    /**
     * Define if the layout has padding
     * @default true
     */
    hasPadding?: boolean;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * Accessible name of the scrolling content area. An aria-label of the consumer names the wrapper, not this area
         * @default 'Page content'
         */
        contentLabel?: string;

        /**
         * Accessible name of the loader shown while `isLoading`
         * @default 'Loading'
         */
        loadingLabel?: string;
    };
};
