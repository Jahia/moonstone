import * as React from 'react';

export interface TabProps {
    /**
     * Content of Tab component
     */
    children: React.ReactNode;
    /**
     * Additional classname
     */
    className?: string;
}

export const Tab: React.SFC<TabProps>;

