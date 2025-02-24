import React, {useState} from 'react';
import {Meta} from '@storybook/react';

import {NestedContextualMenu} from './index';
import {MenuItem} from '~/components';
import {AnchorPosition} from '../Menu/Menu.types';

export default {
    title: 'Components/Floating UI/NestedContextualMenu',
    component: NestedContextualMenu,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof NestedContextualMenu>;

export const NestedContextual = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [menuPosition, setMenuPosition] = useState<AnchorPosition>();

    const handleOnClick = (e: React.MouseEvent) => {
        setIsDisplayed(!isDisplayed);
        setMenuPosition({
            top: e.clientY,
            left: e.clientX
        });
    };

    return (
        <div
      className="flexRow_center alignCenter"
      style={{transform: 'scale(1)', height: '100vh'}}
      onClick={handleOnClick}
        >
            <p>Click somewhere to display the menu, another click close it</p>
            <NestedContextualMenu
                isDisplayed={isDisplayed}
                anchorPosition={menuPosition}
            >
                <MenuItem label="Undo" onClick={() => console.log('Undo')}/>
                <MenuItem isDisabled label="Redo"/>
                <MenuItem label="Cut"/>
                <NestedContextualMenu label="Copy as">
                    {/* <MenuItem label="Text"/>
                    <MenuItem label="Video"/>
                    <NestedContextualMenu label="Image">
                        <MenuItem label=".png"/>
                        <MenuItem label=".jpg"/>
                        <MenuItem label=".svg"/>
                        <MenuItem label=".gif"/>
                    </NestedContextualMenu> */}
                    <MenuItem label="Audio"/>
                </NestedContextualMenu>
                {/* <NestedContextualMenu label="Share">
                    <MenuItem label="Mail"/>
                    <MenuItem label="Instagram"/>
                </NestedContextualMenu> */}
            </NestedContextualMenu>
        </div>
    );
};
