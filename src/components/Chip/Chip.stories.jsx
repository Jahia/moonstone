import React from 'react';
import clsx from 'clsx';
import {storiesOf} from '@storybook/react';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Chip.md';
import {Chip} from './index';
import {colors} from './Chip.types';
import {capitalize} from '~/__storybook__/utils';
import CloudIcon from '~/icons/Cloud';
import DefaultIcon from '~/icons/Apps';
import DeleteIcon from '~/icons/Delete';
import FileContentIcon from '~/icons/FileContent';
import LockIcon from '~/icons/Lock';
import NoCloudIcon from '~/icons/NoCloud';
import WarningIcon from '~/icons/Warning';
import storyStyles from '~/__storybook__/storybook.module.scss';

const labelValue = (defaultValue = 'Chip') => text('Label', defaultValue);
const colorValues = () => select('Color', colors, 'default');

storiesOf('Components/Chip', module)
    .addParameters({
        component: Chip,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => (
        <section className={clsx(storyStyles.storyWrapper)}>
            <section className={clsx(storyStyles.storyColumn)}>
                {storyFn()}
            </section>
        </section>
    ))
    .add('icon + text', () => (
        <section style={{display: 'flex', flexDirection: 'flow'}}>
            <section className={clsx(storyStyles.storyColumn)}>
                {colors.map(color => (
                    <Chip key={color} label={capitalize(color)} icon={<DefaultIcon/>} color={color}/>
                ))}
            </section>
            <section className={clsx(storyStyles.storyColumn)}>
                {colors.map(color => (
                    <Chip key={color} isDisabled label={capitalize(color)} icon={<DefaultIcon/>} color={color}/>
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
            <Chip key={color} icon={<DefaultIcon/>} color={color}/>
        ))
    ))
    .add('status', () => (
        <>
            <Chip icon={<FileContentIcon/>} label="New" color="success"/>
            <Chip icon={<FileContentIcon/>} label="Modified" color="default"/>
            <Chip icon={<DeleteIcon/>} label="Marked for deletion" color="danger"/>
            <Chip icon={<FileContentIcon/>} label="Work in progress" color="default"/>
            <Chip icon={<LockIcon/>} label="Locked" color="warning"/>
            <Chip icon={<CloudIcon/>} label="Live" color="accent"/>
            <Chip icon={<NoCloudIcon/>} label="Not published" color="warning"/>
            <Chip icon={<WarningIcon/>} label="Warning" color="warning"/>
        </>
    ))
    .add('playground', () => (
        <Chip
            label={labelValue('Playground')}
            icon={<DefaultIcon/>}
            color={colorValues()}
            isDisabled={boolean('Is disabled', false)}
        />
    ));
