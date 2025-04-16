import React from 'react';

export type SecondaryNavHeaderProps = Omit<React.ComponentPropsWithoutRef<'header'>, 'children'> & {
    /**
     * Content of the component
     */
    children: React.ReactNode;
};

