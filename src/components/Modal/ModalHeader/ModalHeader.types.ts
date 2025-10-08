import {ReactNode} from 'react';

export type ModalHeaderProps = Omit<React.ComponentPropsWithRef<'header'>, 'className' | 'children'> & {
    /**
     * Title of the ModalHeader
     */
    title: string;

    /**
     * Children of the ModalHeader
     */
    children?: ReactNode;

    /**
     * Additional classname
     */
    className?: string;
}
