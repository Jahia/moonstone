import {MutableRefObject, useEffect, useRef, useState} from 'react';
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
    anchorPosition: TPosition,
    relativelyPositionedParent: boolean = false
) {
    const anchorElRectangle = resolvedAnchorEl.getBoundingClientRect();
    const point: TPosition = {};

    // Set vertical origin position
    if (anchorElOrigin.vertical === 'top') {
        point.top = relativelyPositionedParent ? 0 : anchorElRectangle.top;
    } else if (anchorElOrigin.vertical === 'center') {
        point.top = relativelyPositionedParent
            ? anchorElRectangle.height / 2
            : anchorElRectangle.top + (anchorElRectangle.height / 2);
    } else if (anchorElOrigin.vertical === 'bottom') {
        point.top = relativelyPositionedParent ? anchorElRectangle.height : anchorElRectangle.bottom;
    }

    // Set horizontal origin position
    if (anchorElOrigin.horizontal === 'left') {
        point.left = relativelyPositionedParent ? 0 : anchorElRectangle.left;
    } else if (anchorElOrigin.horizontal === 'center') {
        point.left = relativelyPositionedParent
            ? anchorElRectangle.width / 2
            : anchorElRectangle.left + (anchorElRectangle.width / 2);
    } else if (anchorElOrigin.horizontal === 'right') {
        point.left = relativelyPositionedParent ? anchorElRectangle.width : anchorElRectangle.right;
    }

    const stylePosition = getPosition(anchorPosition);

    if (!transformElOrigin || transformElOrigin.vertical === 'top') {
        stylePosition.top += point.top;
    } else if (transformElOrigin.vertical === 'bottom') {
        stylePosition.bottom = relativelyPositionedParent
            ? stylePosition.top
            : window.document.body.clientHeight - point.top - stylePosition.top;
        delete stylePosition.top;
    }

    if (!transformElOrigin || transformElOrigin.horizontal === 'left') {
        stylePosition.left += point.left;
    } else if (transformElOrigin.horizontal === 'right') {
        stylePosition.right = relativelyPositionedParent
            ? anchorElRectangle.width + point.left
            : window.document.body.clientWidth - point.left - stylePosition.left;
        delete stylePosition.left;
    }

    return stylePosition;
}

export const usePositioning = (
    isDisplayed: boolean,
    anchorPosition: TPosition,
    anchorEl: React.MutableRefObject<HTMLDivElement>,
    anchorElOrigin: TAnchorElOrigin,
    transformElOrigin: TTransformElOrigin,
    relativelyPositionedParent: boolean = false
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
                    anchorPosition,
                    relativelyPositionedParent
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
                        relativelyPositionedParent
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
                        relativelyPositionedParent
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
        relativelyPositionedParent
    ]);

    return [stylePosition, itemRef];
};
