import React from 'react';

export type TypographyVariant = 'title' | 'heading' | 'subheading' | 'body' | 'caption' | 'button';
export const variants = ['title', 'heading', 'subheading', 'body', 'caption', 'button'];

export type TypographyWeight = 'default' | 'bold' | 'semiBold' | 'light';
export const weights = ['default', 'bold', 'semiBold', 'light'];

export enum TypographyTags {
    'a',
    'abbr',
    'address',
    'article',
    'b',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'button',
    'caption',
    'cite',
    'code',
    'col',
    'data',
    'dd',
    'del',
    'dfn',
    'div',
    'dt',
    'em',
    'figcaption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'i',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'mark',
    'menuitem',
    'option',
    'p',
    'pre',
    'q',
    'rp',
    'rt',
    's',
    'samp',
    'small',
    'span',
    'strong',
    'sub',
    'summary',
    'sup',
    'th',
    'time'
}

// Article to read to handle polymorphic component:
// https://blog.ohansemmanuel.com/build-strongly-typed-polymorphic-components-with-react-and-typescript/
export type Props<C extends React.ElementType> = {
    /**
     * Custom classname to use
     */
    className?: string;
    /**
     * The component used for the root node
     */
    component?: C;
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
     * @deprecated
     */
    isHtml?: boolean;
    /**
     * No wrapping for text
     */
    isNowrap?: boolean;
};

export type TypographyProps<C extends React.ElementType> =
    React.PropsWithChildren<Props<C>>
    & Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;
