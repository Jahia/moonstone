import React from 'react';
import PropTypes from 'prop-types';
// Import {withKnobs, select, color} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import markdownNotes from './Icons.md';
import * as Icons from '~/icons/components';
import {Love} from '~/icons';

// Storybook knobs
const iconsName = Object.keys(Icons);
// Const iconsSize = () =>
//     select(
//         'Set icon size',
//         {Big: 'big', Default: 'default', Small: 'small'},
//         'big'
//     );
// const iconsColor = () =>
//     select(
//         'Set icon color',
//         {
//             Red: 'red',
//             Yellow: 'yellow',
//             Purple: 'purple',
//             Gray: 'gray',
//             Blue: 'blue'
//         },
//         'big'
//     );

// Create a component to display in storybook
export const IconWrapper = ({iconName, size, iconColor}) => {
    return (
        <div className="storyGridItem">
            {React.createElement(
        Icons[iconName],
        {size: size},
        {color: iconColor}
      )}
            <span>{iconName}</span>
        </div>
    );
};

// Display all icons from `icons/asset`
function displayIcons() {
    let allIcons = [];

    for (const name of iconsName) {
        allIcons.push(
            <IconWrapper
        key={`key-${name}`}
        iconName={name}
        size="big"
        // Color={color}
      />
        );
    }

    return allIcons;
}

export default {
    title: 'Tokens/Icons',
    component: Icons,
    // Decorators: [withKnobs],

    parameters: {
    // ComponentSubtitle: 'Icons',
        notes: {markdown: markdownNotes}
    },

    excludeStories: ['IconWrapper']
};

export const _Default = () => (
    <section className="storyGrid">{displayIcons()}</section>
);

export const Colored = () => <Love color="red"/>;

// Export const Playground = () => (
//     <IconWrapper
//         iconName={select('Choose your icon', iconsName, 'Edit')}
//         size={iconsSize()}
//         // color={iconsColor()}
//   />
// );

IconWrapper.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    iconColor: PropTypes.string
};
