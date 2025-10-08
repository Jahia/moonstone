import {ReactNode} from 'react';

export type ModalBodyProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {
    /**
     * Children of the ModalBody
     */
    children: ReactNode;

    /**
     * Additional classname
     */
    className?: string;
}
