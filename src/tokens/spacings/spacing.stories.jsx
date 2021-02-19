import React from 'react';
import {storiesOf} from '@storybook/react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './spacings.stories.module.scss';
import storyStyles from '~/__storybook__/storybook.module.scss';

export const Spacing = ({name}) => {
    return (
        <div className={clsx(storyStyles.storyItem)}>
            <p>{name}</p>
            <div className={clsx(styles[`spacing-${name}`])}/>
        </div>
    );
};

storiesOf('Tokens/Spacings', module)
    .add('Default', () => (
        <section className={clsx(storyStyles.storyWrapper)}>
            <Spacing name="nano"/>
            <Spacing name="small"/>
            <Spacing name="medium"/>
            <Spacing name="large"/>
            <Spacing name="big"/>
            <Spacing name="huge"/>
        </section>
    ));

Spacing.propTypes = {
    name: PropTypes.string.isRequired
};
