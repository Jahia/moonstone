import React, {HTMLAttributes} from 'react';

export type PickerSelectionItemProps = {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * PickerSelectionItem title
     */
    title: React.ReactNode;

    /**
     * PickerSelectionItem subtitle
     */
    subtitle?: React.ReactNode;

    /**
     * PickerSelectionItem chips
     */
    chips?: React.ReactNode[];

    /**
     * Optional description to display to describe the item
     */
    description?: string;

    /**
     * Index for the element's position inside the list, when there is more than one item
     */
    // index?: number;

    /**
     * Possible actions to add to the item e.g orderable with arrows, closeable with X icon...
     */
    // actions?: [];

    /**
     * Define if the dragging icon will be displayed
     */
    isDraggable?: boolean;

    /**
     * Image to display on the item.
     */
    image?: string;

    /**
     * In case there is no image, will display an icon corresponding to file type
     */
    fileIcon?: React.ReactElement;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;

} & HTMLAttributes<HTMLLIElement>
