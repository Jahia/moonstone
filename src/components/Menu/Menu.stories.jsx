import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, object} from '@storybook/addon-knobs';
import markdownNotes from './Menu.md';
import {Menu} from './index';

storiesOf('Components|Menu', module)
    .addParameters({
        component: Menu,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu isDisplayed={boolean('display', true)}>
                Content here
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
                    top: String(`${e.clientY}px`),
                    left: String(`${e.clientX}px`)
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
                    Content here
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
                    anchorPosition={object('anchorPosition', {top: '10px', left: '10px'})}
                    anchorElOrigin={object('anchorElOrigin', {vertical: 'top', horizontal: 'right'})}
                    onClose={handleClose}
                >
                    Content here
                </Menu>
            </div>
        );
    });
