import {useEffect, useRef, useState} from 'react';
import toPX from 'to-px';

type Position = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}
type AnchorElOrigin = {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
};
type TransformElOrigin = {
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
};
type PositioningType = 'absolute' | 'fixed';

const initialPosition: Position = {
    top: -1000,
    left: -1000
};

const getPosition = (anchorPosition: Position): Position => {
    return {
        top: typeof anchorPosition.top === 'string' ? toPX(anchorPosition.top) : anchorPosition.top,
        left: typeof anchorPosition.left === 'string' ? toPX(anchorPosition.left) : anchorPosition.left
    };
};

const getClosestRelativeAncestor = (el: HTMLElement) => {
    el = el.parentElement;
    while (el.parentElement) {
        if (window.getComputedStyle(el).position !== 'static') {
            return el;
        }

        el = el.parentElement;
    }

    return el;
};

const getAbsolutePositionCSS = (
    anchorElOrigin: AnchorElOrigin,
    transformElOrigin: TransformElOrigin,
    anchorPosition: Position
): React.CSSProperties => {
    const style: React.CSSProperties = {};

    switch (anchorElOrigin.vertical) {
        case 'bottom':
            style.top = `calc(100% + ${anchorPosition.top}px)`;
            break;
        case 'center':
            style.top = `calc(50% + ${anchorPosition.top}px)`;
            break;
        case 'top':
            style.top = anchorPosition.top;
            break;
        default:
            // For linter
    }

    switch (anchorElOrigin.horizontal) {
        case 'left':
            style.left = anchorPosition.left;
            break;
        case 'center':
            style.left = `calc(50% + ${anchorPosition.left}px)`;
            break;
        case 'right':
            style.left = `calc(100% + ${anchorPosition.left}px)`;
            break;
        default:
            // For linter
    }

    if (transformElOrigin.vertical === 'bottom') {
        style.transform = 'translateY(-100%)';
    }

    if (transformElOrigin.horizontal === 'right') {
        style.transform = style.transform || '';
        style.transform += 'translateX(-100%)';
    }

    return style;
};

const getAbsolutePosition = (
    itemRef: React.MutableRefObject<HTMLElement>,
    anchorElOrigin: AnchorElOrigin,
    transformElOrigin: TransformElOrigin,
    anchorPosition: Position
):React.CSSProperties => {
    const menuRectangle = itemRef?.current?.getBoundingClientRect();
    const closestRelativeAncestorRect = getClosestRelativeAncestor(itemRef?.current).getBoundingClientRect();
    let stylePosition = getAbsolutePositionCSS(anchorElOrigin, transformElOrigin, anchorPosition);

    if (
        stylePosition.left &&
        (closestRelativeAncestorRect.left + anchorPosition.left + menuRectangle.width) > window.document.body.clientWidth &&
        anchorElOrigin.horizontal === 'right'
    ) {
        stylePosition = getAbsolutePositionCSS(
            {...anchorElOrigin, horizontal: 'left'},
            {...transformElOrigin, horizontal: 'right'},
            anchorPosition
        );
    }

    if (
        stylePosition.top &&
        (closestRelativeAncestorRect.top + closestRelativeAncestorRect.height + anchorPosition.top + menuRectangle.height) >
            window.document.body.clientHeight &&
        anchorElOrigin.vertical === 'bottom'
    ) {
        stylePosition = getAbsolutePositionCSS(
            {...anchorElOrigin, vertical: 'top'},
            {...transformElOrigin, vertical: 'bottom'},
            anchorPosition
        );
    }

    return {
        ...stylePosition,
        position: 'absolute'
    };
};

const getPositionRelativeToEl = (
    resolvedAnchorEl: HTMLDivElement,
    anchorElOrigin: AnchorElOrigin,
    transformElOrigin: TransformElOrigin,
    anchorPosition: Position
) => {
    const anchorElRectangle = resolvedAnchorEl.getBoundingClientRect();
    const point: Position = {};

    switch (anchorElOrigin.vertical) {
        case 'top':
            point.top = anchorElRectangle.top;
            break;
        case 'center':
            point.top = anchorElRectangle.top + (anchorElRectangle.height / 2);
            break;
        case 'bottom':
            point.top = anchorElRectangle.bottom;
            break;
        default:
            // For linter
    }

    switch (anchorElOrigin.horizontal) {
        case 'left':
            point.left = anchorElRectangle.left;
            break;
        case 'center':
            point.left = anchorElRectangle.left + (anchorElRectangle.width / 2);
            break;
        case 'right':
            point.left = anchorElRectangle.right;
            break;
        default:
                // For linter
    }

    const stylePosition = getPosition(anchorPosition);

    if (!transformElOrigin || transformElOrigin.vertical === 'top') {
        stylePosition.top += point.top;
    } else if (transformElOrigin.vertical === 'bottom') {
        stylePosition.bottom = window.document.body.clientHeight - point.top - stylePosition.top;
        delete stylePosition.top;
    }

    if (!transformElOrigin || transformElOrigin.horizontal === 'left') {
        stylePosition.left += point.left;
    } else if (transformElOrigin.horizontal === 'right') {
        stylePosition.right = window.document.body.clientWidth - point.left - stylePosition.left;
        delete stylePosition.left;
    }

    return stylePosition;
};

const getFixedPosition = (
    itemRef: React.MutableRefObject<HTMLElement>,
    anchorEl: React.MutableRefObject<HTMLElement>,
    anchorElOrigin: AnchorElOrigin,
    transformElOrigin: TransformElOrigin,
    anchorPosition: Position
):React.CSSProperties => {
    const menuRectangle = itemRef?.current?.getBoundingClientRect();
    const resolvedAnchorEl = anchorEl && anchorEl.current ? anchorEl.current : anchorEl;

    let stylePosition;
    if (resolvedAnchorEl) {
        stylePosition = getPositionRelativeToEl(
            resolvedAnchorEl as HTMLDivElement,
            anchorElOrigin,
            transformElOrigin,
            anchorPosition
        );
        if (
            stylePosition.left &&
            (stylePosition.left + menuRectangle.width) > window.document.body.clientWidth &&
            anchorElOrigin.horizontal === 'right'
        ) {
            stylePosition = getPositionRelativeToEl(
                resolvedAnchorEl as HTMLDivElement,
                {...anchorElOrigin, horizontal: 'left'},
                {...transformElOrigin, horizontal: 'right'},
                anchorPosition
            );
        }

        if (
            stylePosition.top &&
            (stylePosition.top + menuRectangle.height) > window.document.body.clientHeight &&
            anchorElOrigin.vertical === 'bottom'
        ) {
            stylePosition = getPositionRelativeToEl(
                resolvedAnchorEl as HTMLDivElement,
                {...anchorElOrigin, vertical: 'top'},
                {...transformElOrigin, vertical: 'bottom'},
                anchorPosition
            );
        }
    } else {
        stylePosition = getPosition(anchorPosition);
    }

    if (stylePosition.left && (stylePosition.left + menuRectangle.width) > window.document.body.clientWidth) {
        stylePosition.left = window.document.body.clientWidth - menuRectangle.width;
    }

    if (stylePosition.top && (stylePosition.top + menuRectangle.height) > window.document.body.clientHeight) {
        stylePosition.top = window.document.body.clientHeight - menuRectangle.height;
    }

    return {
        ...stylePosition,
        position: 'fixed'
    };
};

export const usePositioning = (
    isDisplayed: boolean,
    anchorPosition: Position,
    anchorEl: React.MutableRefObject<HTMLElement>,
    anchorElOrigin: AnchorElOrigin,
    transformElOrigin: TransformElOrigin,
    position: PositioningType
): [React.CSSProperties, React.MutableRefObject<HTMLDivElement>] => {
    const [stylePosition, setStylePosition] = useState<React.CSSProperties>(initialPosition as React.CSSProperties);
    const itemRef = useRef(null);

    useEffect(() => {
        if (isDisplayed) {
            const resolvedAnchorEl = (anchorEl && anchorEl.current ? anchorEl.current : anchorEl) as HTMLDivElement;
            const hasTransform = resolvedAnchorEl && resolvedAnchorEl.closest('[style*="transform"]');
            const _stylePosition = (position === 'absolute' || hasTransform) ?
                getAbsolutePosition(itemRef, anchorElOrigin, transformElOrigin, anchorPosition) :
                getFixedPosition(itemRef, anchorEl, anchorElOrigin, transformElOrigin, anchorPosition);
            setStylePosition(_stylePosition);
        } else {
            setStylePosition(initialPosition);
        }
    }, [
        anchorEl,
        anchorPosition,
        anchorElOrigin.vertical,
        anchorElOrigin.horizontal,
        isDisplayed,
        itemRef,
        anchorElOrigin,
        transformElOrigin,
        position
    ]);

    return [stylePosition, itemRef];
};
