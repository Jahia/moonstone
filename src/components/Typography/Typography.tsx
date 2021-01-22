import React, {FunctionComponent} from 'react';
import classnames from 'clsx';
import './Typography.scss';

export type TypographyVariant = 'title' | 'heading' | 'subheading' | 'body' | 'caption' | 'button';
export const variants = ['title', 'heading', 'subheading', 'body', 'caption', 'button'];

export type TypographyWeight = 'default' | 'bold' | 'semiBold' | 'light';
export const weights = ['default', 'bold', 'semiBold', 'light'];

interface TypographyProps {
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

// IsHtml prop should eventually be removed (along with this function) as children supports all React Node types
// including strings and HTML markup
const filterOutIsHtml = (props: TypographyProps) => {
    const newProps = {...props};
    if (newProps.isHtml) {
        delete newProps.isHtml;
    }

    return newProps;
};

export const Typography: FunctionComponent<TypographyProps> = ({
    children = '',
    component = 'p',
    variant = 'body',
    weight = 'default',
    className = '',
    hasLineThrough = false,
    isItalic = false,
    isUpperCase = false,
    isNowrap = false,
    isHtml = false,
    ...props
}: TypographyProps) =>
    React.createElement(
        component,
        {
            ...filterOutIsHtml(props),
            className: classnames(
                'moonstone-typography',
                `moonstone-variant_${variant}`,
                `moonstone-weight_${weight}`,
                className,
                {'moonstone-nowrap': isNowrap},
                {'moonstone-italic': isItalic},
                {'moonstone-upperCase': isUpperCase},
                {'moonstone-lineThrough': hasLineThrough})
        },
        children
    );

Typography.displayName = 'Typography';
