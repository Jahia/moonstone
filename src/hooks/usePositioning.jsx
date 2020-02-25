import {useEffect, useRef, useState} from 'react';
import toPX from 'to-px';

const initialPosition = {
    top: -1000,
    left: -1000
};

export const usePositioning = (isDisplayed, anchorPosition, anchorEl, anchorElOrigin) => {
    const [stylePosition, setStylePosition] = useState(initialPosition);
    const itemRef = useRef();

    useEffect(() => {
        if (isDisplayed) {
            let menuRectangle = itemRef.current.getBoundingClientRect();

            const resolvedAnchorEl = anchorEl && anchorEl.current ? anchorEl.current : anchorEl;

            let stylePosition = {
                top: typeof anchorPosition.top === 'string' ? toPX(anchorPosition.top) : anchorPosition.top,
                left: typeof anchorPosition.left === 'string' ? toPX(anchorPosition.left) : anchorPosition.left
            };

            if (resolvedAnchorEl) {
                let anchorElRectangle = resolvedAnchorEl.getBoundingClientRect();

                // Set vertical origin position
                if (anchorElOrigin.vertical === 'top') {
                    stylePosition.top += anchorElRectangle.top;
                } else if (anchorElOrigin.vertical === 'center') {
                    stylePosition.top += anchorElRectangle.top + (anchorElRectangle.height / 2);
                } else if (anchorElOrigin.vertical === 'bottom') {
                    stylePosition.top += anchorElRectangle.bottom;
                }

                // Set horizontal origin position
                if (anchorElOrigin.horizontal === 'left') {
                    stylePosition.left += anchorElRectangle.left;
                } else if (anchorElOrigin.horizontal === 'center') {
                    stylePosition.left += anchorElRectangle.left + (anchorElRectangle.width / 2);
                } else if (anchorElOrigin.horizontal === 'right') {
                    stylePosition.left += anchorElRectangle.right;
                }
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
    }, [anchorEl, anchorPosition, anchorElOrigin.vertical, anchorElOrigin.horizontal, isDisplayed, itemRef]);

    return [stylePosition, itemRef];
};
