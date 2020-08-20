import React from 'react';
import styles from './Typography.scss';
import classnames from 'clsx';

export const variants = ['title', 'heading', 'subheading', 'body', 'caption', 'button'];

export const weights = ['default', 'bold', 'semiBold', 'light'];

type TTypographyVariant = 'title' | 'heading' | 'subheading' | 'body' | 'caption' | 'button';

type TTypographyWeight = 'default' | 'bold' | 'semiBold' | 'light';

interface ITypographyProps {
    /**
     * Content of the component
     */
    children?: React.ReactNode;
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
    variant?: TTypographyVariant;
    /**
     * The weight of the font to use
     */
    weight?: TTypographyWeight;
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

export const Typography: React.FunctionComponent<ITypographyProps> = ({
    children = '',
    component = 'p',
    variant = 'body',
    weight = 'default',
    className = '',
    hasLineThrough = false,
    isItalic = false,
    isUpperCase = false,
    isNowrap = false,
    ...props
}: ITypographyProps) =>
    React.createElement(
        component,
        {
            ...props,
            className: classnames(
                styles.typography,
                styles[`variant_${variant}`],
                styles[`weight_${weight}`],
                className,
                {[styles.nowrap]: isNowrap},
                {[styles.italic]: isItalic},
                {[styles.upperCase]: isUpperCase},
                {[styles.lineThrough]: hasLineThrough})
        },
        children
    );

Typography.displayName = 'Typography';
