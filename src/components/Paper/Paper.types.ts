import React from 'react';

export type PaperProps = Omit<React.ComponentPropsWithRef<'section'>, 'children' | 'className'> & {
    /**
     * Define if the component has padding
     */
    hasPadding?: boolean;

    /**
     * Content of the component
     */
    children?: React.ReactNode;

    /**
     * Additional classname
     */
    className?: string;
}
