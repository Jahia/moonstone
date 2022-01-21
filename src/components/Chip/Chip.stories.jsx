import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Chip.md';
import {Chip} from './index';
import {colors} from './Chip.types';
import {capitalize} from '~/__storybook__/utils';
import {Cloud, Apps, Delete, FileContent, Lock, NoCloud, Warning} from '~/icons';
import '~/__storybook__/storybook.scss';

const labelValue = (defaultValue = 'Chip') => text('Label', defaultValue);
const colorValues = () => select('Color', colors, 'default');

storiesOf('Components/Chip', module)
    .addParameters({
        component: Chip,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => (
        <section className="storyWrapper">
            <section className="storyColumn">
                {storyFn()}
            </section>
        </section>
    ))
    .add('icon + text', () => (
        <section style={{display: 'flex', flexDirection: 'flow'}}>
            <section className="storyColumn">
                {colors.map(color => (
                    <Chip key={color} label={capitalize(color)} icon={<Apps/>} color={color}/>
                ))}
            </section>
            <section className="storyColumn">
                {colors.map(color => (
                    <Chip key={color} isDisabled label={capitalize(color)} icon={<Apps/>} color={color}/>
                ))}
            </section>
        </section>
    ))
    .add('text only', () => (
        colors.map(color => (
            <Chip key={color} label={capitalize(color)} color={color}/>
        ))
    ))
    .add('icon only', () => (
        colors.map(color => (
            <Chip key={color} icon={<Apps/>} color={color}/>
        ))
    ))
    .add('status', () => (
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
    ))
    .add('playground', () => (
        <Chip
            label={labelValue('Playground')}
            icon={<Apps/>}
            color={colorValues()}
            isDisabled={boolean('Is disabled', false)}
        />
    ));
