import {ReactNode} from 'react';

export type ModalFooterProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {
    /**
     * Children of the Modal
     */
    children: ReactNode;
}
