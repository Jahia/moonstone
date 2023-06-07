import React from 'react';
import PropTypes from 'prop-types';
import '~/__storybook__/storybook.scss';

import markdownNotes from './Icons.md';
import * as Icons from '~/icons/components';
import {Love} from '~/icons';

const iconsName = Object.keys(Icons);

// Create a component to display in storybook
export const IconWrapper = ({iconName, size, iconColor}) => {
    return (
        <div className="storyGridItem">
            {React.createElement(Icons[iconName], {size: size}, {color: iconColor})}
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
    parameters: {
        notes: {markdown: markdownNotes}
    },

    excludeStories: ['IconWrapper']
};

export const _Default = () => <section className="storyGrid">{displayIcons()}</section>;

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
