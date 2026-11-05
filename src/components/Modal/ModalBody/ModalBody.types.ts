import type { ReactNode } from 'react';

export type ModalBodyProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {
    /**
     * Content of the modal.
     */
    children: ReactNode;

    /**
     * Additional class name.
     */
    className?: string;
};
