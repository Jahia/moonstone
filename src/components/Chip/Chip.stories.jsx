import React from 'react';
// Import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Chip.md';
import {Chip} from './index';
import {colors} from './Chip.types';
import {capitalize} from '~/__storybook__/utils';
import {
    Cloud,
    Apps,
    Delete,
    FileContent,
    Lock,
    NoCloud,
    Warning
} from '~/icons';
import '~/__storybook__/storybook.scss';

// Const labelValue = (defaultValue = 'Chip') => text('Label', defaultValue);
// const colorValues = () => select('Color', colors, 'default');

export default {
    title: 'Components/Chip',
    component: Chip,

    // Decorators: [
    //     withKnobs,
    //     storyFn => (
    //         <section className="storyWrapper">
    //             <section className="storyColumn">{storyFn()}</section>
    //         </section>
    //     )
    // ],

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const IconText = () => (
    <section style={{display: 'flex', flexDirection: 'flow'}}>
        <section className="storyColumn">
            {colors.map(color => (
                <Chip
                    key={color}
                    label={capitalize(color)}
                    icon={<Apps/>}
                    color={color}
                />
            ))}
        </section>
        <section className="storyColumn">
            {colors.map(color => (
                <Chip
                    key={color}
                    isDisabled
                    label={capitalize(color)}
                    icon={<Apps/>}
                    color={color}
                />
            ))}
        </section>
    </section>
);

IconText.story = {
    name: 'icon + text'
};

export const TextOnly = () =>
    colors.map(color => (
        <Chip key={color} label={capitalize(color)} color={color}/>
    ));

export const IconOnly = () =>
    colors.map(color => <Chip key={color} icon={<Apps/>} color={color}/>);

export const StatusExample = () => (
    <>
        <Chip icon={<FileContent/>} label="New" color="success"/>
        <Chip icon={<FileContent/>} label="Modified" color="default"/>
        <Chip icon={<Delete/>} label="Marked for deletion" color="danger"/>
        <Chip icon={<FileContent/>} label="Work in progress" color="default"/>
        <Chip icon={<Lock/>} label="Locked" color="warning"/>
        <Chip icon={<Cloud/>} label="Live" color="accent"/>
        <Chip icon={<NoCloud/>} label="Not published" color="warning"/>
        <Chip icon={<Warning/>} label="Warning" color="warning"/>
    </>
);

// Export const Playground = () => (
//     <Chip
//         label={labelValue('Playground')}
//         icon={<Apps/>}
//         color={colorValues()}
//         isDisabled={boolean('Is disabled', false)}
//     />
// );

// Playground.story = {
//     name: 'playground'
// };
