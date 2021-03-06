import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, color} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.module.scss';

import markdownNotes from './Icons.md';
import * as Icons from './assets';

// Storybook knobs
const iconsName = Object.keys(Icons);
const iconsSize = () => select('Set icon size', {Big: 'big', Default: 'default', Small: 'small'}, 'big');

// Create a component to display in storybook
export const IconWrapper = ({iconName, size, color}) => {
    return (
        <div className={clsx(storyStyles.storyGridItem)} style={{color: color}}>
            {React.createElement(Icons[iconName], {size: size})}
            <span>{iconName}</span>
        </div>
    );
};

// Display all icons from `icons/asset`
function displayIcons() {
    let allIcons = [];

    for (const name of iconsName) {
        allIcons.push(
            <IconWrapper key={`key-${name}`} iconName={name} size="big"/>
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
        <section className={clsx(storyStyles.storyGrid)}>
            {displayIcons()}
        </section>
    ))
    .add('⚽️Playground', () => (
        <IconWrapper
            iconName={select('Choose your icon', iconsName, 'Edit')}
            size={iconsSize()}
            color={color('Change color', '#000')}/>
    ));

IconWrapper.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string
};
