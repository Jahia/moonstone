import React from 'react';

export const capitalize = <T extends string>(s: T): Capitalize<T> => s.charAt(0).toUpperCase() + s.slice(1) as Capitalize<T>;

export const isTruncated = (element: HTMLElement | null): boolean => element !== null && element.scrollWidth > element.clientWidth;

// This helper unwraps a top-level Fragment
export const toNodeArray = (node: React.ReactNode): React.ReactNode[] => {
    if (node === undefined || node === null) {
        return [];
    }

    if (React.isValidElement(node) && node.type === React.Fragment) {
        return React.Children.toArray((node.props as React.PropsWithChildren).children);
    }

    return React.Children.toArray(node);
};
