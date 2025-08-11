import {ReactNode} from 'react';

export type ModalFooterProps = Omit<React.ComponentPropsWithRef<'footer'>, 'className' | 'children'> & {
    /**
     * Children of the Modal
     */
    children: ReactNode;

    /**
     * Additional classname
     */
    className?: string;
}
