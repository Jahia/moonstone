import React from 'react';
import {ButtonProps} from '~/components/Button/Button.types';
import {ChipProps} from '~/components/Chip/Chip.types';
import {BreadcrumbProps} from '~/components/Breadcrumb/Breadcrumb.types';

export type HeaderProps = {
    /**
     * Page Title
     */
    title: string;

    /**
     * BackButton is used to comeback to the previous location
     */
    backButton?: React.ReactElement<ButtonProps>;

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
    breadcrumb?: React.ReactElement<BreadcrumbProps>;

    /**
     * Slot to display the status of the element
     */
    status?: React.ReactNode;

    /**
     * Slot to display the content type of the element
     */
    contentType?: React.ReactElement<ChipProps>;

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
}
