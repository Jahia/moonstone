import React, {ReactNode} from 'react';
import type {PolymorphicPropsWithRef} from '~/types/Polymorphic.types';
import type {PaperProps} from '~/components/Paper/Paper.types';

// inherits future Paper props without needing manual updates here.
type PaperCustomProps = Omit<PaperProps, 'component' | 'children' | 'className' | keyof React.ComponentPropsWithRef<'section'>>;

export type BasicDrawerProps = PaperCustomProps & {
    /**
     * Content of the Drawer
     */
    children?: ReactNode;

    /**
     * Whether the Drawer is open
     */
    isOpen?: boolean;

    /**
     * Additional classname
     */
    className?: string;
};

export type DrawerProps<C extends React.ElementType> = PolymorphicPropsWithRef<C, BasicDrawerProps>;
