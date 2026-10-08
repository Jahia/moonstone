import React from 'react';

export type HeaderProps = Omit<React.ComponentPropsWithoutRef<'header'>, 'className'> & {
    /**
     * Page Title
     */
    title: string;

    /**
     * BackButton is used to comeback to the previous location
     * @deprecated The Header design no longer has a back button. Remove the prop: it will be dropped.
     */
    backButton?: React.ReactElement;

    /**
     * Slot to the search element
     */
    search?: React.ReactNode;

    /**
     * Main actions of the pages
     */
    mainActions?: React.ReactNode;

    /**
     * Slot to display the breadcrumb
     */
    breadcrumb?: React.ReactNode;

    /**
     * Slot to display the status of the element
     */
    status?: React.ReactNode;

    /**
     * Slot to display the content type of the element
     */
    contentType?: React.ReactNode;

    /**
     * Slot to display item on the right of the toolbar
     */
    toolbarRight?: React.ReactNode;

    /**
     * Slot to display item on the left of the toolbar
     */
    toolbarLeft?: React.ReactNode;

    /**
     * Additional classname
     */
    className?: string;
};
