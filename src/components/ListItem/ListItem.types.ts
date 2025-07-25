import React from 'react';

import type {TypographyVariant} from '~/components/Typography/Typography.types';

export type ListItemProps = Omit<React.ComponentPropsWithRef<'li'>, 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * ListItem label
     */
    label: React.ReactNode;

    /**
     * Optional description to display to describe the item
     */
    description?: string;

    /**
     * A leading icon display before the label. Cannot be used in conjunction with the image property.
     */
    iconStart?: React.ReactElement;

    /**
     * A trailing icon display at the end of ListItem
     */
    iconEnd?: React.ReactElement;

    /**
     * Optional image to display to describe the menu item. Cannot be used in conjunction with the iconStart property.
     */
    image?: React.ReactElement;

    /**
     * Sets pre-defined max height/width to image; defaults to small
     */
    imageSize?: 'small' | 'big';

    /**
     * Which variant to pass to the inner typography component. The default is caption
     */
    typographyVariant?: TypographyVariant;

    /**
     * Which icon size to render.
     */
    iconSize?: 'small' | 'default' | 'big';
}
