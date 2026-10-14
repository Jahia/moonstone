import React from 'react';

export type TabProps = Omit<React.ComponentPropsWithRef<'div'>, 'children' | 'className'> & {
    /**
     * The TabItem components of the tab list.
     */
    children: React.ReactNode;
    /**
     * Additional class name.
     */
    className?: string;
};
