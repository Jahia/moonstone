import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, number, select, withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './Menu.md';
import {Menu, MenuItem} from './index';
import {Separator} from '~/components';

storiesOf('Components|Menu', module)
    .addParameters({
        component: Menu,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu isDisplayed={boolean('display', true)} style={{zIndex: 10000}}>
                <MenuItem label="Base items" variant="title"/>
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
                <Separator/>
                <MenuItem label="Variants" variant="title"/>
                <MenuItem isHover label="Item3 - Hover"/>
                <MenuItem isDisabled label="Item3 - Disabled"/>
                <MenuItem isSelected label="Item3 - Selected"/>
            </Menu>
        </div>
    ))
    .add('onClick', () => {
        const [isDisplayed, setIsDisplayed] = useState(false);
        const [menuPosition, setMenuPosition] = useState();

        const handleOnClick = e => {
            if (isDisplayed) {
                handleClose();
            } else {
                setIsDisplayed(true);
                setMenuPosition({
                    top: e.clientY,
                    left: e.clientX
                });
            }
        };

        const handleClose = () => {
            setIsDisplayed(false);
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh'}} onClick={handleOnClick}>
                <p>Click somewhere to display the menu, another click close it</p>
                <Menu
                    isDisplayed={isDisplayed}
                    anchorPosition={menuPosition}
                    onClose={handleClose}
                >
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>
            </div>
        );
    })
    .add('anchorElOrigin', () => {
        const [isDisplayed, setIsDisplayed] = useState(false);
        const [anchorEl, setAnchorEl] = useState(null);
        const buttonEl = React.useRef();

        const handleOnClick = () => {
            setAnchorEl(buttonEl);
            if (isDisplayed) {
                handleClose();
            } else {
                setIsDisplayed(true);
            }
        };

        const handleClose = () => {
            setIsDisplayed(false);
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <button
                    ref={buttonEl}
                    type="button"
                    style={{margin: '90px', width: '100px', height: '100px'}}
                    onClick={handleOnClick}
                >
                    Display menu
                </button>
                <Menu
                    isDisplayed={isDisplayed}
                    anchorEl={anchorEl}
                    anchorPosition={{top: number('top', 0), left: number('left', 0)}}
                    anchorElOrigin={{
                        vertical: select('anchor-vertical', ['top', 'bottom', 'center'], 'bottom'),
                        horizontal: select('anchor-horizontal', ['left', 'right', 'center'], 'left')
                    }}
                    transformElOrigin={{
                        vertical: select('transform-vertical', ['top', 'bottom'], 'top'),
                        horizontal: select('transform-horizontal', ['left', 'right'], 'left')
                    }}
                    onClose={handleClose}
                >
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>
            </div>
        );
    });
