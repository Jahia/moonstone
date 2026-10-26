import React from 'react';

export type TagProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> & {
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
     * Function triggered on click
     */
    onClick: (event: React.MouseEvent, value: string) => void;

    /**
     * Tag size
     */
    size?: 'small' | 'medium';

    /**
     * Whether the component should be disabled
     */
    isDisabled?: boolean;

    /**
     * Tag labels
     */
    i18n?: {
        /**
         * Action read before the label in the name of the button, e.g. "Remove Draft"
         * @default 'Remove'
         */
        removeLabel?: string;
    };
};
