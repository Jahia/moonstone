import * as React from 'react';

export type PaperProps = React.ComponentPropsWithoutRef<'section'> & {
    /**
     * Define if the component has padding
     */
    hasPadding?: boolean;

    /**
     * Content of the component
     */
    children?: React.ReactNode;

    /**
     * Additional classnames
     */
    className?: string;
}
