import {useEffect, useRef, useState} from 'react';
import toPX from 'to-px';

const initialPosition = {
    top: -1000,
    left: -1000
};

function getPosition(anchorPosition) {
    return {
        top: typeof anchorPosition.top === 'string' ? toPX(anchorPosition.top) : anchorPosition.top,
        left: typeof anchorPosition.left === 'string' ? toPX(anchorPosition.left) : anchorPosition.left
    };
}

function getPositionRelativeToEl(resolvedAnchorEl, anchorElOrigin, transformElOrigin, anchorPosition) {
    let anchorElRectangle = resolvedAnchorEl.getBoundingClientRect();

    let point = {};

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

    let stylePosition = getPosition(anchorPosition);

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

export const usePositioning = (isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin) => {
    const [stylePosition, setStylePosition] = useState(initialPosition);
    const itemRef = useRef();

    useEffect(() => {
        if (isDisplayed) {
            let menuRectangle = itemRef.current.getBoundingClientRect();

            const resolvedAnchorEl = anchorEl && anchorEl.current ? anchorEl.current : anchorEl;

            let stylePosition;
            if (resolvedAnchorEl) {
                stylePosition = getPositionRelativeToEl(resolvedAnchorEl, anchorElOrigin, transformElOrigin, anchorPosition);
                if (stylePosition.left && (stylePosition.left + menuRectangle.width) > window.document.body.clientWidth) {
                    stylePosition = getPositionRelativeToEl(resolvedAnchorEl, {...anchorElOrigin, horizontal: 'left'}, {...transformElOrigin, horizontal: 'right'}, anchorPosition);
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

            setStylePosition(stylePosition);
        } else {
            setStylePosition(initialPosition);
        }
    }, [anchorEl, anchorPosition, anchorElOrigin.vertical, anchorElOrigin.horizontal, isDisplayed, itemRef, anchorElOrigin, transformElOrigin]);

    return [stylePosition, itemRef];
};
