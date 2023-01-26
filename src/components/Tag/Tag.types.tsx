import * as React from 'react';

export type TagProps = {
    /**
     * Label display in the tag
     */
    label: string;

    /**
     * Value of the tag
     */
    value: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Is this component disabled
     */
    onClick: (event: React.MouseEvent, value: string) => void;

    /**
     * Tag size
     */
    size?: 'small' | 'medium';

}
