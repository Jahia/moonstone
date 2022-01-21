import React from 'react';
import PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, color} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import markdownNotes from './Icons.md';
import * as Icons from '~/icons/components';
import {Love} from '~/icons';

// Storybook knobs
const iconsName = Object.keys(Icons);
const iconsSize = () => select('Set icon size', {Big: 'big', Default: 'default', Small: 'small'}, 'big');
const iconsColor = () => select('Set icon color', {Red: 'red', Yellow: 'yellow', Purple: 'purple', Gray: 'gray', Blue: 'blue'}, 'big');

// Create a component to display in storybook
export const IconWrapper = ({iconName, size, color}) => {
    return (
        <div className="storyGridItem">
            {React.createElement(Icons[iconName], {size: size}, {color: color})}
            <span>{iconName}</span>
        </div>
    );
};

// Display all icons from `icons/asset`
function displayIcons() {
    let allIcons = [];

    for (const name of iconsName) {
        allIcons.push(
            <IconWrapper key={`key-${name}`} iconName={name} size="big" color={color}/>
        );
    }

    return allIcons;
}

storiesOf('Tokens/Icons', module)
    .addParameters({
        component: Icons,
        componentSubtitle: 'Icons',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <section className="storyGrid">
            {displayIcons()}
        </section>
    ))
    .add('Colored', () => (
        <Love color="red"/>
    ))
    .add('⚽️Playground', () => (
        <IconWrapper
            iconName={select('Choose your icon', iconsName, 'Edit')}
            size={iconsSize()}
            color={iconsColor()}/>
    ));

IconWrapper.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string
};
