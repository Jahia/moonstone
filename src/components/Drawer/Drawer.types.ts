import React from 'react';

import type { ReactNode } from 'react';
import type { BasicPaperProps } from '~/components/Paper/Paper.types';
import type { PolymorphicPropsWithRef } from '~/types/Polymorphic.types';

// Inherits future Paper props without needing manual updates here.
type PaperCustomProps = Omit<BasicPaperProps, 'children' | 'className'>;

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
