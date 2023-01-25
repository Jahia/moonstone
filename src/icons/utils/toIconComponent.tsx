import React, {Attributes, FunctionComponent, PropsWithChildren, ReactElement} from 'react';
import * as Icons from '~/icons/components';
import {ImgWrapper, SvgWrapper} from '~/components';
import {SvgWrapperProps} from '~/components/SvgWrapper/SvgWrapper.types';

type SVGProps = React.HTMLProps<SVGElement> & React.HTMLProps<HTMLElement>;

const camelCased = (s: string) => s.replace(/-([a-z])/g, g => {
    return g[1].toUpperCase();
});

const toComp = (node: HTMLElement, idx: number) => {
    if (node.nodeType === 1) {
        const props: {[key: string]: unknown} = {key: idx};
        Array.prototype.slice.call(node.attributes).forEach((attr: SVGProps) => {
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

export const toIconComponentFunction = (icon: string | ReactElement): FunctionComponent => {
    if (typeof icon === 'object') {
        return (props: PropsWithChildren<Attributes>) => <SvgWrapper svg={icon} {...props}/>;
    }

    const iconFunction:FunctionComponent = Icons[icon as keyof typeof Icons];
    if (iconFunction) {
        return iconFunction;
    }

    if (icon.startsWith('<svg')) {
        return (props: PropsWithChildren<Attributes>) => <SvgWrapper svg={extract(icon)} {...props}/>;
    }

    return (props: PropsWithChildren<Attributes>) => <ImgWrapper src={icon} {...props}/>;
};

export const toIconComponent = (icon: string | ReactElement, props?: SvgWrapperProps & Attributes) => {
    return React.createElement(toIconComponentFunction(icon), props);
};

