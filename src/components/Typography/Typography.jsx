import React from 'react';
import PropTypes from 'prop-types';
import './Typography.scss';
import classnames from 'clsx';

export const variants = ['title', 'heading', 'subheading', 'body', 'caption', 'button'];
export const weights = ['default', 'bold', 'semiBold', 'light'];

const filterOutProps = function (props, out) {
    const newProps = {...props};
    out.forEach(function (o) {
        delete newProps[o];
    });
    return newProps;
};

export const Typography = ({
    children,
    component,
    variant,
    weight,
    className,
    hasLineThrough,
    isItalic,
    isUpperCase,
    isNowrap,
    ...props
}) =>
    React.createElement(
        component,
        {
            ...filterOutProps(props, ['isHtml']),
            className: classnames(
                'moonstone-typography',
                `variant_${variant}`,
                `weight_${weight}`,
                className,
                {nowrap: isNowrap},
                {italic: isItalic},
                {upperCase: isUpperCase},
                {lineThrough: hasLineThrough})
        },
        children
    );

Typography.defaultProps = {
    children: '',
    className: '',
    component: 'p',
    variant: 'body',
    weight: 'default',
    isItalic: false,
    isUpperCase: false,
    hasLineThrough: false,
    isHtml: false,
    isNowrap: false
};

let childrenPropType = () => {};
if (process.env.NODE_ENV !== 'production') {
    const {isElement} = require('react-is');

    childrenPropType = (props, propName, componentName) => {
        if (props.isHtml && !isElement(props[propName])) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. ${propName} should be rederable.`);
        }

        if (!props.isHtml && typeof props[propName] !== 'string') {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. ${propName} should be a string.`);
        }
    };
}

Typography.propTypes = {
    /**
     * Content of the component
     */
    children: childrenPropType,

    /**
     * Custom classname to use
     */
    className: PropTypes.string,

    /**
     * The component used for the root node
     */
    component: PropTypes.string,

    /**
     * Variant to use
     */
    variant: PropTypes.oneOf(variants),

    /**
     * The weight of the font to use
     */
    weight: PropTypes.oneOf(weights),

    /**
     * Should the text be displayed in italic
     */
    isItalic: PropTypes.bool,

    /**
     * Should the text be displayed in upper case
     */
    isUpperCase: PropTypes.bool,

    /**
     * Should the text be displayed with a line-through
     */
    hasLineThrough: PropTypes.bool,

    /**
     * Does the children contain HTML markup
     */
    isHtml: PropTypes.bool,

    /**
     * No wrapping for text
     */
    isNowrap: PropTypes.bool
};

Typography.displayName = 'Typography';
