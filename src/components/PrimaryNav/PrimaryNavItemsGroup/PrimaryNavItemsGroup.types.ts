import React from 'react';

export type PrimaryNavItemsGroupProps = React.ComponentPropsWithoutRef<'li'> & {
    /**
     * Whether the group stays visible when the navigation is collapsed to icons. Set it to `false` to hide low-priority items.
     */
    isDisplayedWhenCollapsed?: boolean;
    /**
     * PrimaryNavItem elements displayed inside the group.
     */
    children: React.ReactNode;
};
