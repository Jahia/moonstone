import React from 'react';
import {SvgWrapperProps} from './SvgWrapper.types';

const camelCased = (s: string) => s.replace(/-([a-z])/g, g => {
    return g[1].toUpperCase();
});

const toComp = (node: HTMLElement, idx: number) => {
    if (node.nodeType === 1) {
        const props = {key: idx};
        Array.prototype.slice.call(node.attributes).forEach((attr: any) => {
            props[camelCased(attr.name)] = attr.value;
        });
        const children = Array.prototype.slice.call(node.childNodes).map((child: HTMLElement, idxChild: number) => toComp(child, idxChild));
        return React.createElement(node.tagName, props, children);
    }
};

export const SvgWrapper: React.FC<SvgWrapperProps> = initialProps => {
    const {svg, size, ...props} = initialProps;
    const parser = new DOMParser();

    const doc: Document = parser.parseFromString(svg, 'image/svg+xml');
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
