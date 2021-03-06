import React from 'react';

import {TypographyVariant} from '~/components/Typography/Typography.types';

export type ListItemProps = {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * ListItem label
     */
    label: React.ReactNode;

    /**
     * Does the label contain HTML markup
     */
    isHtml?: boolean;

    /**
     * A leading icon display before the label. Cannot be used in conjunction with the image property.
     */
    iconStart?: React.ReactElement;

    /**
     * A trailing icon display at the end of ListItem
     */
    iconEnd?: React.ReactElement;
    /**
     * Tab index for the element
     */
    tabIndex?: number;

    /**
     * Optional image to display to describe the menu item. Cannot be used in conjunction with the iconStart property.
     */
    image?: HTMLImageElement;

    /**
     * If there's an image, it should be this size
     */
    imageSize?: 'small' | 'big';

    /**
     * Which variant to pass to the inner typography component. The default is caption
     */
    typographyVariant?: TypographyVariant;

    /**
     * Which icon size to render. The default is small
     */
    iconSize?: 'small' | 'default' | 'big';
}
