import React, {FunctionComponent} from 'react';
import './Typography.scss';
import classnames from 'clsx';

type TTypographyVariant = 'title' | 'heading' | 'subheading' | 'body' | 'caption' | 'button';
// Change this to an enum when PrimaryNavItem is converted to typescript
export const variants = ['title', 'heading', 'subheading', 'body', 'caption', 'button'];

type TTypographyWeight = 'default' | 'bold' | 'semiBold' | 'light';
// Change this to an enum when PrimaryNavItem is converted to typescript
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
