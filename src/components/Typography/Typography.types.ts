import React from 'react';
import type {PolymorphicComponentProp} from '~/types/Polymorphic.types';

export const variants = ['title', 'heading', 'subheading', 'body', 'caption', 'button'] as const;
export type TypographyVariant = typeof variants[number];

export const weights = ['default', 'bold', 'semiBold', 'light'] as const;
export type TypographyWeight = typeof weights[number];

export type TypoProps = {
    /**
     * Additional classnames
     */
    className?: string;
    /**
     * Variant to use
     */
    variant?: TypographyVariant;
    /**
     * The weight of the font to use
     */
    weight?: TypographyWeight;
    /**
     * Should the text be displayed in italic
     */
    isItalic?: boolean;
    /**
     * Should the text be displayed in upper case
     */
    isUpperCase?: boolean;
    /**
     * Should the text be displayed with a line-through
     */
    hasLineThrough?: boolean;
    /**
     * No wrapping for text
     */
    isNowrap?: boolean;
};

export type TypographyProps<C extends React.ElementType> = PolymorphicComponentProp<C, TypoProps>;
