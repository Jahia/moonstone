import type { ReactNode } from 'react';

export type ModalHeaderProps = Omit<React.ComponentPropsWithRef<'header'>, 'className' | 'children'> & {
    /**
     * Title of the modal. Nothing renders without it.
     */
    title: string;

    /**
     * Text shown under the title.
     */
    children?: ReactNode;

    /**
     * Additional class name.
     */
    className?: string;
};
