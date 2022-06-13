import * as React from 'react';

export type PaperProps = {
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
