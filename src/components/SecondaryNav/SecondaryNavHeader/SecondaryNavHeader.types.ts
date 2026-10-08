import React from 'react';

export type SecondaryNavHeaderProps = Omit<React.ComponentPropsWithoutRef<'header'>, 'children'> & {
    /**
     * Title of the section that the navigation belongs to.
     */
    children: React.ReactNode;
};
