import * as React from 'react';

export type PrimaryNavItemsGroupProps = React.ComponentPropsWithoutRef<'li'> & {
    /**
     * Group is visible when the navigation is collapsed
     */
    isDisplayedWhenCollapsed?: boolean;
    /**
     * Items displayed inside the group
     */
    children: React.ReactNode;
};
