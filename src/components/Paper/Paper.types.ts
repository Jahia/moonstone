import React from 'react';

export type PaperProps = Omit<React.ComponentPropsWithRef<'section'>, 'children' | 'className'> & {
    /**
     * HTML tag to render (default: 'section')
     */
    component?: React.ElementType;

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
