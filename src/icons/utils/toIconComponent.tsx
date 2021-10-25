import React, {Attributes, FunctionComponent, ReactElement, ReactNode} from 'react';
import * as Icons from '~/icons/assets';
import {SvgWrapper} from '~/components/SvgWrapper';
import {ImgWrapper} from '~/components/ImgWrapper';
import {SvgWrapperProps} from "~/components/SvgWrapper/SvgWrapper.types";

type ToCompProps = {
    [key: string]: number;
}

const camelCased = (s: string) => s.replace(/-([a-z])/g, g => {
    return g[1].toUpperCase();
});

const toComp = (node: HTMLElement, idx: number) => {
    if (node.nodeType === 1) {
        const props: ToCompProps = {key: idx};
        Array.prototype.slice.call(node.attributes).forEach((attr: any) => {
            props[camelCased(attr.name)] = attr.value;
        });
        const children = Array.prototype.slice.call(node.childNodes).map((child: HTMLElement, idxChild: number) => toComp(child, idxChild));
        return React.createElement(node.tagName, props, children);
    }
};

function extract(svg: string) {
    const parser = new DOMParser();

    const doc = parser.parseFromString(svg, 'image/svg+xml');
    return toComp(doc.documentElement, 0);
}

export const toIconComponentFunction = (icon: string | ReactElement) => {
    if (typeof icon === 'object') {
        return (props: SvgWrapperProps & Attributes) => <SvgWrapper svg={icon} {...props}/>;
    }

    // @ts-ignore
    const iconFunction:FunctionComponent = Icons[icon];
    if (iconFunction) {
        return iconFunction;
    }

    if (icon.startsWith('<svg')) {
        return (props: SvgWrapperProps & Attributes) => <SvgWrapper svg={extract(icon)} {...props}/>;
    }

    return (props: SvgWrapperProps & Attributes) => <ImgWrapper src={icon} {...props}/>;
};

export const toIconComponent = (icon: string | ReactElement, props: SvgWrapperProps & Attributes) => {
    return toIconComponentFunction(icon)(props);
};

