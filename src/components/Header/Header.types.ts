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
     * Main actions of the page, shown on the right. Put the main action last, at the far right,
     * such as "Action", "Secondary action", "Main action".
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
     * Display controls, on the right of the toolbar, such as switching the view or showing options.
     */
    toolbarRight?: React.ReactNode;

    /**
     * Actions on the item shown in the title, on the left of the toolbar.
     */
    toolbarLeft?: React.ReactNode;

    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * aria-label of the toolbar
         * @default 'Page actions'
         */
        toolbarLabel?: string;
    };

    /**
     * Additional classname
     */
    className?: string;
};
