import React from 'react';
import '~/__storybook__/storybook.scss';

import markdownNotes from './Icons.md';
import * as Icons from '~/icons/components';
import {Love} from '~/icons';

const iconsName = Object.keys(Icons) as (keyof typeof Icons)[];
type IconWrapperProps = {
    readonly iconName: keyof typeof Icons,
    readonly size?: 'small' | 'default' | 'big',
};

export const IconWrapper: React.FC<IconWrapperProps> = ({iconName, size}) => {
    return (
        <div className="storyGridItem">
            {React.createElement(
                Icons[iconName],
                {size: size}
            )}
            <span>{iconName}</span>
        </div>
    );
};

// Display all icons from `icons/asset`
function displayIcons() {
    const allIcons = [];

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
