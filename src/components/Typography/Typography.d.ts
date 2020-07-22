import * as React from 'react';

export type TypographyVariant = "title" | "heading" | "subheading" | "body" | "caption" | "button";

export type TypographyWeight = "default" | "bold" | "semiBold" | "light";

export interface TypographyProps {
    /**
     * Content of the component
     */
    children?: any;
    /**
     * Custom classname to use
     */
    className?: string;
    /**
     * The component used for the root node
     */
    component?: string;
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
     * Does the children contain HTML markup
     */
    isHtml?: boolean;
    /**
     * No wrapping for text
     */
    isNowrap?: boolean;
}

export const Typography: React.SFC<TypographyProps>;

