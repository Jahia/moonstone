import {ReactNode} from 'react';

export type ModalBodyProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {
    /**
     * Children of the Modal
     */
    children: ReactNode;

    /**
     * Additional classname
     */
    className?: string;
}
