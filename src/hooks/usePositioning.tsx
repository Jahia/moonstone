import {MutableRefObject, useEffect, useRef, useState} from 'react';
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

const initialPosition: Position = {
    top: -1000,
    left: -1000
};

function getPosition(anchorPosition: Position): Position {
    return {
        top: typeof anchorPosition.top === 'string' ? toPX(anchorPosition.top) : anchorPosition.top,
        left: typeof anchorPosition.left === 'string' ? toPX(anchorPosition.left) : anchorPosition.left
    };
}

function getClosestRelativeAncestor(el: HTMLElement) {
    while (el.parentElement) {
        if (window.getComputedStyle(el).position === 'relative') {
            return el;
        }
        el = el.parentElement;
    }
    return el;
}

function getPositionRelativeToEl(
    resolvedAnchorEl: HTMLDivElement,
    anchorElOrigin: AnchorElOrigin,
    transformElOrigin: TransformElOrigin,
    anchorPosition: Position,
    position: string
) {
    const anchorElRectangle = resolvedAnchorEl.getBoundingClientRect();
    const point: Position = {};
    const isPositionAbsolute = position === 'absolute';

    switch (anchorElOrigin.vertical) {
        case 'top':
            point.top = isPositionAbsolute ? 0 : anchorElRectangle.top;
            break;
        case 'center':
            point.top = isPositionAbsolute
                ? anchorElRectangle.height / 2
                : anchorElRectangle.top + (anchorElRectangle.height / 2);
            break;
        case 'bottom':
            point.top = isPositionAbsolute ? anchorElRectangle.height : anchorElRectangle.bottom;
            break;
    }

    switch (anchorElOrigin.horizontal) {
        case 'left':
            point.left = isPositionAbsolute ? 0 : anchorElRectangle.left;
            break;
        case 'center':
            point.left = isPositionAbsolute
                ? anchorElRectangle.width / 2
                : anchorElRectangle.left + (anchorElRectangle.width / 2);
            break;
        case 'right':
            point.left = isPositionAbsolute ? anchorElRectangle.width : anchorElRectangle.right;
            break;
    }

    const stylePosition = getPosition(anchorPosition);

    if (!transformElOrigin || transformElOrigin.vertical === 'top') {
        stylePosition.top += point.top;
    } else if (transformElOrigin.vertical === 'bottom') {
        stylePosition.bottom = isPositionAbsolute
            ? -(point.top - anchorElRectangle.height)
            : window.document.body.clientHeight - point.top - stylePosition.top;
        delete stylePosition.top;
    }

    if (!transformElOrigin || transformElOrigin.horizontal === 'left') {
        stylePosition.left += point.left;
    } else if (transformElOrigin.horizontal === 'right') {
        stylePosition.right = isPositionAbsolute
            ? -(point.left - anchorElRectangle.width)
            : window.document.body.clientWidth - point.left - stylePosition.left;
        delete stylePosition.left;
    }

    return stylePosition;
}

export const usePositioning = (
    isDisplayed: boolean,
    anchorPosition: Position,
    anchorEl: React.MutableRefObject<HTMLDivElement>,
    anchorElOrigin: AnchorElOrigin,
    transformElOrigin: TransformElOrigin,
    position: string
): [Position, React.MutableRefObject<HTMLDivElement>] => {
    const [stylePosition, setStylePosition] = useState(initialPosition);
    const itemRef = useRef(null);

    useEffect(() => {
        if (isDisplayed) {
            const menuRectangle = itemRef.current.getBoundingClientRect();

            let resolvedAnchorEl;
            if (position === 'absolute') {
                resolvedAnchorEl = getClosestRelativeAncestor(itemRef.current);
            } else if (anchorEl && anchorEl.current) {
                resolvedAnchorEl = anchorEl.current;
            } else {
                resolvedAnchorEl = anchorEl;
            }

            let _stylePosition;
            if (resolvedAnchorEl) {
                _stylePosition = getPositionRelativeToEl(
                    resolvedAnchorEl as HTMLDivElement,
                    anchorElOrigin,
                    transformElOrigin,
                    anchorPosition,
                    position
                );
                if (
                    _stylePosition.left &&
                    (_stylePosition.left + menuRectangle.width) > window.document.body.clientWidth &&
                    anchorElOrigin.horizontal === 'right'
                ) {
                    _stylePosition = getPositionRelativeToEl(
                        resolvedAnchorEl as HTMLDivElement,
                        {...anchorElOrigin, horizontal: 'left'},
                        {...transformElOrigin, horizontal: 'right'},
                        anchorPosition,
                        position
                    );
                }

                if (
                    _stylePosition.top &&
                    (_stylePosition.top + menuRectangle.height) > window.document.body.clientHeight &&
                    anchorElOrigin.vertical === 'bottom'
                ) {
                    _stylePosition = getPositionRelativeToEl(
                        resolvedAnchorEl as HTMLDivElement,
                        {...anchorElOrigin, vertical: 'top'},
                        {...transformElOrigin, vertical: 'bottom'},
                        anchorPosition,
                        position
                    );
                }
            } else {
                _stylePosition = getPosition(anchorPosition);
            }

            if (_stylePosition.left && (_stylePosition.left + menuRectangle.width) > window.document.body.clientWidth) {
                _stylePosition.left = window.document.body.clientWidth - menuRectangle.width;
            }

            if (_stylePosition.top && (_stylePosition.top + menuRectangle.height) > window.document.body.clientHeight) {
                _stylePosition.top = window.document.body.clientHeight - menuRectangle.height;
            }

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
