// Usages that compile against 2.21.1 under `tsc --strict`; a minor release keeps them compiling
import { ImgWrapper, Menu, ResizableBox, Thumbnail } from '@jahia/moonstone';

import type { ResizeCallback } from 're-resizable';
import type React from 'react';

const onClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event.preventDefault();
const onResizeStop: ResizeCallback = (_event, _direction, ref) => ref.focus();

export const usages = (
    <>
        <ImgWrapper src="image.png"/>
        <Thumbnail src="image.png"/>
        <Menu isDisplayed onClose={onClose}>item</Menu>
        <ResizableBox onResizeStop={onResizeStop}/>
    </>
);
