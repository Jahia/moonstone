import React from 'react';
import '~/__storybook__/storybook.scss';

import markdownNotes from './Badge.md';
import {Badge} from './index';

export default {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Accent = () => (
    <section className="storyWrapper">
        <Badge label="3" color="accent"/>
    </section>
);

export const Success = () => (
    <section className="storyWrapper">
        <Badge label="3" color="success"/>
    </section>
);

export const Danger = () => (
    <section className="storyWrapper">
        <Badge label="3" color="danger"/>
    </section>
);
