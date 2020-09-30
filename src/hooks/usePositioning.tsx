import {ElementRef, MutableRefObject, useEffect, useRef, useState} from 'react';
import toPX from 'to-px';

type TPosition = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}
type TAnchorElOrigin = {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
};
type TTransformElOrigin = {
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
};

const initialPosition: TPosition = {
    top: -1000,
    left: -1000
};

function getPosition(anchorPosition: TPosition): TPosition {
    return {
        top: typeof anchorPosition.top === 'string' ? toPX(anchorPosition.top) : anchorPosition.top,
        left: typeof anchorPosition.left === 'string' ? toPX(anchorPosition.left) : anchorPosition.left
    };
}

function getPositionRelativeToEl(
    resolvedAnchorEl: HTMLDivElement,
    anchorElOrigin: TAnchorElOrigin,
    transformElOrigin: TTransformElOrigin,
    anchorPosition: TPosition
) {
    const anchorElRectangle = resolvedAnchorEl.getBoundingClientRect();

    const point: {top?: number, left?: number} = {};

    // Set vertical origin position
    if (anchorElOrigin.vertical === 'top') {
        point.top = anchorElRectangle.top;
    } else if (anchorElOrigin.vertical === 'center') {
        point.top = anchorElRectangle.top + (anchorElRectangle.height / 2);
    } else if (anchorElOrigin.vertical === 'bottom') {
        point.top = anchorElRectangle.bottom;
    }

    // Set horizontal origin position
    if (anchorElOrigin.horizontal === 'left') {
        point.left = anchorElRectangle.left;
    } else if (anchorElOrigin.horizontal === 'center') {
        point.left = anchorElRectangle.left + (anchorElRectangle.width / 2);
    } else if (anchorElOrigin.horizontal === 'right') {
        point.left = anchorElRectangle.right;
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
}

export const usePositioning = (
    isDisplayed: boolean,
    anchorPosition: TPosition,
    anchorEl: React.MutableRefObject<HTMLDivElement>,
    anchorElOrigin: TAnchorElOrigin,
    transformElOrigin: TTransformElOrigin
): [TPosition, React.MutableRefObject<HTMLDivElement>] => {
    const [stylePosition, setStylePosition] = useState(initialPosition);
    const itemRef = useRef(null);

    useEffect(() => {
        if (isDisplayed) {
            const menuRectangle = itemRef.current.getBoundingClientRect();

            const resolvedAnchorEl = anchorEl && anchorEl.current ? anchorEl.current : anchorEl;

            let _stylePosition;
            if (resolvedAnchorEl) {
                _stylePosition = getPositionRelativeToEl(
                    resolvedAnchorEl as HTMLDivElement,
                    anchorElOrigin,
                    transformElOrigin,
                    anchorPosition
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
                        anchorPosition
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
                        anchorPosition
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
    }, [anchorEl, anchorPosition, anchorElOrigin.vertical, anchorElOrigin.horizontal, isDisplayed, itemRef, anchorElOrigin, transformElOrigin]);

    return [stylePosition, itemRef];
};
