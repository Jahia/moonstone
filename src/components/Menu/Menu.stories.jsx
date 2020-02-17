import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
// Import {action} from '@storybook/addon-actions';
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
                <p>Click somewhere to display the menu</p>
                <Menu
                    isDisplayed={isDisplayed}
                    anchorPosition={menuPosition}
                    onClose={handleClose}
                >
                    Content here
                </Menu>
            </div>
        );
    });
