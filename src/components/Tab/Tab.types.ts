import React from 'react';

export type TabProps = Omit<React.ComponentPropsWithRef<'div'>, 'children' | 'className'> & {
    /**
     * Content of Tab component
     */
    children: React.ReactNode;
    /**
     * Additional classname
     */
    className?: string;
}
