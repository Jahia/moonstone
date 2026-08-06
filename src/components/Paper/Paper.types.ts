import React from 'react';
import type {PolymorphicPropsWithRef} from '~/types/Polymorphic.types';

export type BasicPaperProps = {
    /**
     * Define if the component has padding
     */
    hasPadding?: boolean;

    /**
     * Content of the component
     */
    children?: React.ReactNode;

    /**
     * Additional classname
     */
    className?: string;
};

export type PaperProps<C extends React.ElementType> = PolymorphicPropsWithRef<C, BasicPaperProps>;
