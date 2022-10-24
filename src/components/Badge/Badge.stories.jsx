import React from 'react';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import markdownNotes from './Badge.md';
import {Badge} from './index';
import {badgeColors} from './Badge.types';

export default {
    title: 'Components/Badge',
    decorators: [withKnobs],

    parameters: {
        component: Badge,
        notes: {markdown: markdownNotes}
    }
};

export const Accent = () => (
    <section className="storyWrapper">
        <Badge label={text('Label', '3')} color="accent"/>
    </section>
);

export const Success = () => (
    <section className="storyWrapper">
        <Badge label={text('Label', '3')} color="success"/>
    </section>
);

export const Danger = () => (
    <section className="storyWrapper">
        <Badge label={text('Label', '3')} color="danger"/>
    </section>
);

export const Playground = () => (
    <section className="storyWrapper">
        <Badge
      label={text('Label', '3')}
      color={select('Color', badgeColors, 'accent')}
    />
    </section>
);
