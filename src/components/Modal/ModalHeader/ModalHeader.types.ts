import {ReactNode} from 'react';

export type ModalHeaderProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {
    /**
     * Title of the ModalHeader
     */
    title: string;

    /**
     * Title of the ModalHeader
     */
    children?: ReactNode;
}
