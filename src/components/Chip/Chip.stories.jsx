import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@storybook/react';
import {select, text, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Chip.md';
import {Chip, colors} from './index';
import {capitalize} from '~/__storybook__/utils';
import CloudIcon from '~/tokens/icons/asset/Cloud.svg';
import DefaultIcon from '~/tokens/icons/asset/Apps.svg';
import DeleteIcon from '~/tokens/icons/asset/Delete.svg';
import FileContentIcon from '~/tokens/icons/asset/FileContent.svg';
import LockIcon from '~/tokens/icons/asset/Lock.svg';
import NoCloudIcon from '~/tokens/icons/asset/NoCloud.svg';
import WarningIcon from '~/tokens/icons/asset/Warning.svg';
import storyStyles from '~/__storybook__/storybook.scss';

const labelValue = (defaultValue = 'Chip') => text('Label', defaultValue);
const colorValues = () => select('Color', colors, 'default');

storiesOf('Components|Chip', module)
    .addParameters({
        component: Chip,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <section className={classnames(storyStyles.storyColumn)}>
                {storyFn()}
            </section>
        </section>
    ))
    .add('icon + text', () => (
        colors.map(color => (
            <Chip key={color} label={capitalize(color)} icon={<DefaultIcon/>} color={color}/>
        ))
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
        <Chip label={labelValue('Playground')} icon={<DefaultIcon/>} color={colorValues()}/>
    ));
