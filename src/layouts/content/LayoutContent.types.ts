import React from 'react';

import type { LoaderProps } from '~/components/Loader/Loader.types';

export type LayoutContentProps = Omit<React.ComponentPropsWithRef<'div'>, 'className'> & {
    /**
     * Header of the page
     */
    header?: React.ReactNode;

    /**
     * Content of the page
     *
     * @deprecated Use `children`
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
     */
    hasPadding?: boolean;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Labels of the loader shown while `isLoading`
     */
    i18n?: LoaderProps['i18n'];
};
