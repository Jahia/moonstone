import React from 'react';

import type { PolymorphicPropsWithRef } from '~/types/Polymorphic.types';

export const variants = ['title', 'heading', 'subheading', 'body', 'caption', 'button'] as const;
export type TypographyVariant = typeof variants[number];

export const weights = ['default', 'bold', 'semiBold', 'light'] as const;
export type TypographyWeight = typeof weights[number];

export type BasicTypographyProps = {
    /**
     * Additional classname
     * @default ''
     */
    className?: string;
    /**
     * Variant to use
     * @default 'body'
     */
    variant?: TypographyVariant;
    /**
     * The weight of the font to use
     * @default 'default'
     */
    weight?: TypographyWeight;
    /**
     * Should the text be displayed in italic
     * @default false
     */
    isItalic?: boolean;
    /**
     * Should the text be displayed in upper case
     * @default false
     */
    isUpperCase?: boolean;
    /**
     * Should the text be displayed with a line-through
     * @default false
     */
    hasLineThrough?: boolean;
    /**
     * No wrapping for text
     * @default false
     */
    isNowrap?: boolean;
};

export type TypographyProps<C extends React.ElementType> = PolymorphicPropsWithRef<C, BasicTypographyProps>;
