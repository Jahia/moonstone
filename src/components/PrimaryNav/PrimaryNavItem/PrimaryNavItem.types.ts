import React from 'react';

import type { BadgeProps } from '~/components/Badge/Badge.types';

export type PrimaryNavItemProps = Omit<React.ComponentPropsWithoutRef<'li'>, 'onClick' | 'className'> & {
    /**
     * Label of the navigation entry
     */
    label?: string;
    /**
     * Icon to illustrate the navigation entry
     */
    icon?: React.ReactElement;
    /**
     * Secondary line of text shown below the label.
     */
    subtitle?: string;
    /**
     * Extra control rendered at the end of the item
     */
    button?: React.ReactNode;
    /**
     * Marks the item as the current page or section. Set it on only one item at a time.
     */
    isSelected?: boolean;
    /**
     * Badge shown at the end of the item
     */
    badge?: React.ReactElement<BadgeProps>;
    /**
     * URL to navigate to. If this is used <a> element will be returned with target set to _blank.
     */
    url?: string;
    /**
     * Additional class name.
     */
    className?: string;
    /**
     * Called when the item is activated by click, Enter, or Space. Activating it also collapses an expanded PrimaryNav.
     */
    onClick?: React.MouseEventHandler;
};
