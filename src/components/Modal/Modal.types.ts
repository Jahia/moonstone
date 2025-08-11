import {ReactElement} from 'react';

export type ModalProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {

    /**
     * Modal's children
     */
    children: ReactElement;

    /**
     * Modal's visibility
     */
    isOpen: boolean;

    /**
     * Modal's onChange function
     */
    onOpenChange?: (open: boolean) => void;

    /**
     * Size of the Modal
     */
    size?: 'small' | 'medium' | 'large' | 'full';

    /**
     * Additional classname
     */
    className?: string;
}
