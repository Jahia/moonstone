import React from 'react';

import type { TypographyVariant } from '~/components/Typography/Typography.types';

export type ListItemProps = Omit<React.ComponentPropsWithRef<'li'>, 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Main text of the row.
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
     * A trailing icon shown at the end of the row.
     */
    iconEnd?: React.ReactElement;

    /**
     * Image shown before the label.
     */
    image?: React.ReactElement;

    /**
     * Size of `image`.
     * @default 'small'
     */
    imageSize?: 'small' | 'big';

    /**
     * Typography variant of `label`.
     * @default 'caption'
     */
    typographyVariant?: TypographyVariant;

    /**
     * Size of `iconStart` and `iconEnd`.
     * @default 'default'
     */
    iconSize?: 'small' | 'default' | 'big';
};
