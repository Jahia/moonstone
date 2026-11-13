import type { ReactNode } from 'react';

export type ModalFooterProps = Omit<React.ComponentPropsWithRef<'footer'>, 'className' | 'children'> & {
    /**
     * Actions of the modal, usually Buttons.
     */
    children: ReactNode;

    /**
     * Additional class name.
     */
    className?: string;
};
