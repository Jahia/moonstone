import * as React from 'react';
import {BadgeProps} from '~/components/Badge/Badge.types';
import {TypographyVariant} from '~/components/Typography/Typography.types';

export type ItemProps = {
    label?: string;
    icon?: React.ReactElement;
    textVariant?: TypographyVariant;
    subtitle?: string;
    button?: React.ReactNode;
};

export type ItemTypeResolverProps = {
    url?: string;
    label?: string;
    icon?: React.ReactElement;
    subtitle?: string;
    button?: React.ReactNode;
};

export type PrimaryNavItemProps = Omit<React.ComponentPropsWithoutRef<'li'>, 'onClick' | 'className'> & {
    /**
     * Label
     */
    label?: string;
    /**
     * Icon node from our icon library
     */
    icon?: React.ReactElement;
    /**
     * Subtitle
     */
    subtitle?: string;
    /**
     * Optional button
     */
    button?: React.ReactNode;
    /**
     * Element is selected or not
     */
    isSelected?: boolean;
    /**
     * Badge
     */
    badge?: React.ReactElement<BadgeProps>;
    /**
     * URL to navigate to. If this is used <a> element will be returned with target set to _blank.
     */
    url?: string;
    /**
     * Additional classnames
     */
    className?: string;
    /**
     * Function triggered on click
     */
    onClick?: React.MouseEventHandler;
};
