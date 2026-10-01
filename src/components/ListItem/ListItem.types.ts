import React from 'react';

import type { TypographyVariant } from '~/components/Typography/Typography.types';

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
     * Optional description shown below the label
     */
    description?: string;

    /**
     * A leading icon shown before the label. Takes priority over `image` when both are passed.
    */
    iconStart?: React.ReactElement;

    /**
     * A trailing icon display at the end of ListItem
     */
    iconEnd?: React.ReactElement;

    /**
     * Image shown before the label.
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
};
