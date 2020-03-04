import React from 'react';
import PropTypes from 'prop-types';

export const SvgWrapperSize = ['small', 'default', 'big'];

const camelCased = s => s.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
});

const toComp = (node, idx) => {
    if (node.nodeType === 1) {
        let props = {key: idx};
        Array.prototype.slice.call(node.attributes).forEach(attr => {
            props[camelCased(attr.name)] = attr.value;
        });
        let children = Array.prototype.slice.call(node.childNodes).map((child, idxChild) => toComp(child, idxChild));
        return React.createElement(node.tagName, props, children);
    }
};

export const SvgWrapper = initialProps => {
    let {svg, size, ...props} = initialProps;
    const parser = new DOMParser();

    const doc = parser.parseFromString(svg, 'image/svg+xml');
    const viewBox = doc.documentElement.attributes.viewBox ? doc.documentElement.attributes.viewBox.value : null;
    const fill = doc.documentElement.attributes.fill ? doc.documentElement.attributes.fill.value : null;
    const children = Array.prototype.slice.call(doc.documentElement.childNodes).map((child, idx) => toComp(child, idx));
    props.className = initialProps.className + ' moonstone-icon moonstone-icon_' + size;
    return (
        <svg viewBox={viewBox && viewBox} fill={fill && fill} {...props}>
            {children}
        </svg>
    );
};

SvgWrapper.defaultProps = {
    size: 'default',
    className: ''
};

SvgWrapper.propTypes = {
    /**
     * Svg as a string
     */
    svg: PropTypes.string.isRequired,

    /**
     * Svg size
     */
    size: PropTypes.oneOf(SvgWrapperSize),

    /**
     * Extra CSS class
     */
    className: PropTypes.string
};
