import * as React from 'react';

export type ModalProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /**
     * Label display in the modal
     */
    label: string;

    /**
     * Helper display in the modal
     */
    helper?: string;

    /**
     * Tooltip's anchor
     */
    children: React.ReactElement;

    /**
     * Tooltip's anchor
     */
    actions?: React.ReactElement;

    /**
     * Additional classname
     */
    className?: string;

}
